import {v4 as uuid} from "uuid";

import {Icategory, IformInput, IProduct } from "../interfaces";




export const productList : IProduct[]= [
    {
      "id": uuid(),
      "title": "Elegant Black Dress",
      "description": "A timeless and sophisticated black dress perfect for any occasion.",
      "imageURL": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price": "79.99",
      "colors": ["Black", " gold", "Red"],
      "category": {
        "name": "Women's Clothing",
        "imageURL": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Modern Sofa",
      "description": "A stylish and comfortable sofa with a contemporary design.",
      "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "price": "999.99",
      "colors": [ "Black","Blue", "Gray"],
      "category": {
        "name": "Furniture",
        "imageURL": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Wireless Headphones",
      "description": "High-quality wireless headphones with exceptional sound and long battery life.",
      "imageURL": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "price": "149.99",
      "colors": ["Black", "red", " Gold"],
      "category": {
        "name": "Electronics",
        "imageURL": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Classic Sneakers",
      "description": "Comfortable and stylish sneakers for everyday wear.",
      "imageURL":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "price":"69.99" ,
      "colors": ["Blue", "Black", "Gray"],
      "category": {
        "name": "Shoes",
        "imageURL": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Luxury Watch",
      "description": "A sophisticated and elegant watch crafted with precision and style.",
      "imageURL": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "price": "499.99",
      "colors": ["Silver", "Gold", "Rose Gold"],
      "category": {
        "name": "Accessories",
        "imageURL": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Digital Camera",
      "description": "A high-resolution digital camera with advanced features for capturing stunning photos and videos.",
      "imageURL": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "price": "399.99",
      "colors": ["Black", "Silver", "Red"],
      "category": {
        "name": "Electronics",
        "imageURL": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Stylish Backpack",
      "description": "A durable and stylish backpack perfect for school, work, or travel.",
      "imageURL": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "price": "49.99",
      "colors": ["Gray", "Black", "Blue"],
      "category": {
        "name": "Bags",
        "imageURL":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Comfortable Hoodie",
      "description": "A cozy and stylish hoodie perfect for everyday wear.",
      "imageURL": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "price": "39.99",
      "colors": ["Red", "Black", "Gray"],
      "category": {
        "name": "Men's Clothing",
        "imageURL": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Modern Coffee Table",
      "description": "A sleek and modern coffee table with a glass top.",
      "imageURL": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "price": "299.99",
      "colors": ["Brown", "red", "Black"],
      "category": {
        "name": "Furniture",
        "imageURL": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
      }
    },
    {
      "id":  uuid(),
      "title": "Smartwatch",
      "description": "A versatile smartwatch with fitness tracking, notifications, and more.",
      "imageURL": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "price": "249.99",
      "colors": ["Black", "Silver", "Rose Gold"],
      "category": {
        "name": "Electronics",
        "imageURL": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
      }
    }
  ]


  
  export const formList: IformInput[] = [
    {
      id: "title",
      name: "title",
      label: "product title",
      type: "text",
    },
    {
      id: "description",
      name: "description",
      label: "product description",
      type: "text",
    },
    {
      id: "image",
      name: "imageURL",
      label: "product image URL",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      label: "product price",
      type: "text",
    },
  ];


  export const colors: string[] = [
    "#ff6b6b",
    "#ffa500",
    "#7bed9f",
    "#a29bfe",
    "#ff9ff3",
    "#00b894",
    "#0984e3",
    "#d63031",
    "#e84393",
    "#6c5ce7",
    "#fdcb6e",
    "#00cec9",
    "#b2bec3",
    "#fab1a0",
    "#dfe6e9"
  ];

  export const categories:Icategory[] = [
    {
    id: uuid(),
    name: "Elegant Black Dress",
    imageURL:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
    },
    {
    id: uuid(),
    name: "Modern Sofa",
    imageURL: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    
    },
    {
    id: uuid(),
    name: "Wireless Headphones",
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    
    },
    {
    id: uuid(),
    name: "Classic Sneakers",
    imageURL:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
    id: uuid(),
    name: "Luxury Watch",
    imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
    id: uuid(),
    name: "Digital Camera",
    imageURL: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    
    },
    {
    id: uuid(),
    name: "Stylish Backpack",
    imageURL: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    
    },
    {
    id: uuid(),
    name: "Comfortable Hoodie",
    imageURL: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    
    },
    {
    id: uuid(),
    name: "Modern Coffee Table",
    imageURL: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    
    },
    {
    id: uuid(),
    name: "Smartwatch",
    imageURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    
    }
    ]










