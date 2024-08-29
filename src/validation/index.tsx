export const productValidation = (product: {title: string; description: string; imageURL: string; price: string; }) => {

    const errors : {title: string; description: string; imageURL: string; price: string; } = {
        title: "",
        description:"",
        imageURL:"",
        price:"",
    };

    const validURL = /^(ftp|http|https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/.test(product.imageURL);
    
    if (!product.title.trim() || product.title.length < 10 || product.title.length < 80 ){
        errors.title = "product must be between 10 to 80 characters";
    }

    if(!product.description.trim() || product.description.length < 10 || product.description.length < 900){
        errors.description = "product must be between 10 to 900 characters";
    }


    if (!product.imageURL.trim() || !validURL){
       errors.imageURL= "valid imageURL is required";
    }

    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price= "valid price is required";
    }
    
}