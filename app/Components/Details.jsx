"use client"
import { useState } from "react";
import useCartStore from "../../cartStore"
import toast, { Toaster } from 'react-hot-toast';

function Details({product}) {
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  //const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const[qty,setQty] = useState(1);
  const notify = () => toast;

  const handleAddToCart = () => {
    addToCart({ product, quantity: qty,color:selectedColor });
    toast.success('Added to cart');
    <Toaster />

  };
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 my-[100px]">
          {/* left column */}
          <div className="shadow-md rounded-lg relative h-94 overflow-hidden aspect-ratio-1">
            <img
            // get selected image
              src={selectedImage}
              alt="Details"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* right column */}
          <div className="flex flex-col p-6 justify-between">
            <h1 className="text-3xl font-semibold text-purple">
              {product?.name}
            </h1>
            <p className="text-lg text-gray-400 mt-4">{product?.description}</p>
            {/* color selection*/}
            <div className="flex mt-6 gap-3">
              {/* color selector */}
            {product?.colors?.map((color) => {
              switch (color) {
                case 'Grey':
                  return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-gray-700 cursor-pointer hover:border-4 border-purple`}></div>;
                  case 'Black':
                  return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-black cursor-pointer hover:border-4 border-purple`}></div>;
                  case 'Blue':
                  return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:border-4 border-purple`}></div>;
                  case 'Green':
                    return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-green-600 cursor-pointer hover:border-4 border-purple`}></div>;
                  case 'Silver':
                    return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-gray-200 cursor-pointer hover:border-4 border-purple`}></div>;
                    case 'White':
                      return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-white cursor-pointer hover:border-4 border-purple`}></div>;
                default:
                  return <div onClick={()=>{setSelectedColor(color)}} key={color} className={`${color == selectedColor ? "border-4 border-purple":""} w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:border-4 border-purple`}></div>;
              }
            })}
            </div>
            {/* price */}
            <div className="flex items-center mt-6">
              <span className="text-3xl text-purple"><span className="text-[26px] text-purple">$</span>{product?.price}</span>
              <span className="text-lg text-gray-400 line-through ml-4">
              <span className="text-[18px] text-gray-500">$</span>{product?.price * 1.3}
              </span>
            </div>
            {/* quantity */}
            <div className="mt-6 flex flex-col text-gray-400">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                // get the input value
                value={qty} onChange={(e)=>{setQty(e.target.value)}}
                className="w-20 h-10 border border-gray-300 rounded-md outline-none px-4 py-2"
              />
            </div>
            {/* add to cart buttton */}
            <div className="mt-6" onClick={notify}>
            <Toaster/>
              <button
              onClick={handleAddToCart}
                className="transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 bg-purple inline-flex items-center 
                justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 
                focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 
                hover:bg-white hover:text-purple mb-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* image slider */}
        <div>
          <ul className="flex gap-4 pverflow-x-auto">
            {product?.extraImages?.map((image) => {
              return (
                <li onClick={()=>{setSelectedImage(image)}} className="w-[120px] h-[120px] relativeoverflow-hidden aspect-ratio-1 cursor-pointer">
                  <img src={image} alt="img" layout="fill" objectFitcover className=" rounded-lg " />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
