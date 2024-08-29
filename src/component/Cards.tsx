import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/Function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColors from "./ui/CircleColors";

interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openModalEdit: () => void;
  openConfirmModal: () => void;
  setProductEditIdx: (value: number) => void;
  idx: number;
}

const Cards = ({
  product,
  setProductEdit,
  openModalEdit,
  openConfirmModal,
  setProductEditIdx,
  idx,
}: IProps) => {
  const { title, description, imageURL, category, colors, price } = product;

  const renderCircleColors = colors.map((color) => (
    <CircleColors color={color} key={color} onClick={() => {}} />
  ));

  const onEdit = () => {
    setProductEdit(product);
    openModalEdit();
    setProductEditIdx(idx);
  };

  const onRemove = () => {
    openConfirmModal();
    setProductEdit(product);
  };

  return (
    <div className="flex flex-col border rounded-md p-2 max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image
        imageURL={imageURL}
        alt="product_image"
        className="rounded-md my-2 md:w-40 md:h-40 m-auto"
      />
      <h2>{title}</h2>
      <p>{textSlicer(description)}</p>

      <div className="flex items-center space-x-1">{renderCircleColors}</div>

      <div className="flex justify-between items-center">
        <p>{price}</p>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex justify-between space-x-2 my-2">
        <Button
          onClick={onEdit}
          className="bg-red-900"
        >
          EDIT
        </Button>
        <Button
          onClick={onRemove}
          className="bg-indigo-900"
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default Cards;