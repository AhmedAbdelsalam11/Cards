import { FormEvent, useState } from "react";
import Cards from "./component/Cards";
import { categories, colors, formList, productList } from "./data";
import Button from "./component/ui/Button";
import Modal from "./component/ui/Modal";
import Input from "./component/ui/Input";
import {IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorrMessage from "./component/Errors/ErrorrMessage";
import CircleColors from "./component/ui/CircleColors";
import {v4 as uuid} from "uuid";
import Select from "./component/ui/Select";
import {ProductNameTypes } from "./types";
import toast, { Toaster } from 'react-hot-toast';




const App = () => { 
   // Set the initial product state
   const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };


  //productEdit state

  const [productEdit,setProductEdit] = useState<IProduct>(defaultProductObj);
  const [productEditIdx,setProductEditIdx] = useState<number>(0);

  // selectedCategory state 

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

 // products state 

const [products, setProducts] = useState<IProduct[]> (productList);


 //temp state 

 const [tempColors, setTempColors] = useState <string[]>([]);
 console.log(tempColors)


  // State for errors and product
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  // Handle form input changes
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name] : "",
    })
  };

  const onChangeEditHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductEdit({
      ...productEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name] : "",
    })
  };

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenToEdid, setIsOpenToEdid] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  
    // Open and close modal functions
  const  closeModal = () =>  setIsOpen(false);
  const openModal = () => setIsOpen(true);
   
  const closeModalEdit = () => setIsOpenToEdid(false);
  const openModalEdit = () =>setIsOpenToEdid(true);
  
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () =>setIsOpenConfirmModal(true);
  
 
  

  // Render product list
  const renderProductList = products.map((product,idx) => (
    
       <Cards key={product.id} product={product}
         setProductEdit={setProductEdit}
         openModalEdit={openModalEdit} 
         setProductEditIdx={setProductEditIdx} 
         idx={idx}
         openConfirmModal={openConfirmModal}/>
   
  ));

  // Render form inputs
  const renderFormInput = formList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className=" text-gray-500 font-medium text-sm mb-[2px]">
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorrMessage Msg={errors[input.name]} />
    </div>
  ));


  // Render Circle Colors 

  const renderCircleColors = colors.map(color =>
    <CircleColors
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          //correct 
          setTempColors(prev => prev.filter(item => item !== color));
        } else {
          setTempColors(prev => [...prev, color]);
        }

        if (productEdit.colors.includes(color)) {
          //correct 
          setTempColors(prev => prev.filter(item => item !== color));
        } else {
          setTempColors(prev => [...prev, color]);
        }
      }}
    />
  );


 // Render Product Edit with Error Msg

 const renderProductEditWithErrorMsg = (id: string, label: string,name:ProductNameTypes) => {
 return(
  <div className="flex flex-col">
  <label htmlFor={id} className=" text-gray-500 font-medium text-sm mb-[2px]">
    {label} 
  </label> 
  <Input
    type="text"
    id={id}
    name={name}
    value={productEdit[name]}
    onChange={onChangeEditHandler}
  />
  <ErrorrMessage Msg={errors[name]} />
</div>
 );
 }

  // Handle removeProduct button 

 const removeProductHandler = () => {
 const filtered = products.filter(product => product.id !== productEdit.id );
 setProducts(filtered);
 closeConfirmModal();
 toast('Product has been deleted.',{
  style:{background:"black",
    color:"white",
  }
 }
 
 );
 }

   // Handle cancel button click
   const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  // Handle Edit submission
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
  
    const hasErrorMsg = Object.values(errors).some(value => value !== "") && Object.values(errors).every(value => value === "");
  
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
  
    const updateProducts = [...products];
    updateProducts[productEditIdx]= {...productEdit, colors:tempColors.concat(productEdit.colors)};
    setProducts(updateProducts)
    setProductEdit(defaultProductObj);
    setTempColors([]);
    closeModalEdit();
  };

    
  // Handle form submission
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
  
    const hasErrorMsg = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
  
    setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

 

  return (
    <div className="container">
      <Button className="bg-indigo-900 hover:bg-indigo-900" onClick={openModal}>
        ADD
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 m-5 rounded-md">
        {renderProductList}
      </div>
 
    {/* Add Modal */} 

      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInput}

          <div className="flex items-center space-x-1">
            {renderCircleColors}
          </div>

          <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
          


          <div className="flex items-center space-x-1">
            {tempColors.map(color => (
              <span key={color} className="p-1 mr-1 mb-1 rounded-md text-xs text-white" style={{background:color}}>{color}</span>
            ))}
          </div>
         

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-900 hover:bg-indigo-900">Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-900" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */} 

      <Modal isOpen={isOpenToEdid} closeModal={closeModalEdit} title="Edit Product">
       <form className="space-y-3" onSubmit={submitEditHandler}>
        {renderProductEditWithErrorMsg('title', 'product title', 'title')}
        {renderProductEditWithErrorMsg('description', 'product description', 'description')}
        {renderProductEditWithErrorMsg('imageURL', 'product imageURL', 'imageURL')}
        {renderProductEditWithErrorMsg('price', 'product price', 'price')}
        <Select selected={productEdit.category} setSelected={(value) => setProductEdit({...productEdit,category:value}) } />
         {/* {renderFormInput} */}
            <div className="flex items-center space-x-1">
            {renderCircleColors}
          </div>

          <div className="flex items-center space-x-1">
            {tempColors.concat(productEdit.colors).map(color => (
              <span key={color} className="p-1 mr-1 mb-1 rounded-md text-xs text-white" style={{background:color}}>{color}</span>
            ))}
          </div>
         

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-900 hover:bg-indigo-900">Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-900" onClick={onCancel}>
              Cancel
            </Button>
          </div> 
        </form> 
      </Modal>

      {/* delete product modal */}

      <Modal isOpen={isOpenConfirmModal} closeModal={closeConfirmModal}
       title="Are You Sure To Remove This Product From Your Store?"
       description="Deleting this product will remove it permanently from your inventory. Any associated data ,sales history,and other related information will also be deleted. Please make sure this is the intended action">
        
          <div className="flex items-center space-x-3">
            <Button className="bg-red-600 hover:bg-red-800" onClick={removeProductHandler}>yes,remove</Button>
            <Button className="bg-slate-300 hover:bg-gray-300 text-black" onClick={closeConfirmModal}>
              Cancel
            </Button>
          </div>
      </Modal>
      <Toaster/>
    </div>
  );
};

export default App;
