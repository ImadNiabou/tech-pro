"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import useCartStore from "../../cartStore";
import Link from "next/link";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const notify = () => toast;
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const [loading, setLoading] = React.useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter;
  const stripe = useStripe();
  const elements = useElements();
  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  }

  const onSubmit = async () => {
    
    const cardElement = elements?.getElement("card");
    setLoading(true);
    
    try {
      if (!stripe || !cardElement) return null;
      const  data  = await axios.post("/api/stripe", {
        data: { amount: cartTotal.toFixed(0) },
      });

      console.log(data);
      const res = await stripe?.confirmCardPayment(data?.data?.intent, {
        payment_method: { card: cardElement },
      });
      console.log(res.paymentIntent.status);
      const status = res?.paymentIntent?.status;
      if (status === 'succeeded') {
        setLoading(false);
        toast.success('Payment Successful');
        const email = user?.emailAddresses[0]?.emailAddress;

        if(email){
          const res = await createOrder(email,cart);
          if(res) {
          toast.success('Payment Successful');
          }
        }
        
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Payment Failed');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-[60px] mb-[160px] ">
      <h1 className="text-4xl font-bold m-10 text-purple text-center">
        My Cart
      </h1>
      <h2 className="text-3xl text-center mt-font-semibold text-gray-600 mb-6">
        {totalItems} items in Cart
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-purple border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-100 transition-all duration-300 border-b border-gray-200"
            >
              <td className="flex items-center">
                <div className="py-3 w-[100px] h-[100px] relarive pverflow-hidden aspect-ratio-1 mr-4">
                  <img
                    src={product.image}
                    alt="product"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semmibold text-purple">
                    {product.name}
                  </h1>
                  <p className="text-sm text-gray-500">Color: Black</p>
                </div>
              </td>
              <td className="text-center">
                <span className="text-purple">{product.quantity}</span>
              </td>
              <td className="text-center">
                <span className="text-purple">${product.price}</span>
              </td>
              <td className="py-2 px-4">
                <div onClick={notify}>
                <Toaster/>
                  <FaTrash
                    onClick={() => {
                      handleRemoveFromCart(product?._id);
                    }}
                    className="text-red-600 mx-auto cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* total section */}
      <div className="mt-4 py-2 text-purple ml-auto">
        <div className="flex justify-between text-lg text-black font-semibold text-right mr-4">
          <div>
            <span className="text-purple font-bold">Total: </span>
          </div>
          <div>
            <p>$ {cartTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 p-8 rounded-md">
        {cartTotal > 0 && (
          <>
            <CardElement />
          </>
        )}
      </div>

      <div className="mt-6 text-purple  mx-auto space-y-4">
        {cartTotal > 0 && (
          <>
            <button
              onClick={onSubmit}
              className="transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 text-lg w-full  font-semibold text-center bg-purple
        text-white py-2 px-4 rounded-lg hover:text-purple hover:bg-white border border-purple"
            >
              {loading ? "Loading..." : "Checkout"}
            </button>
          </>
        )}

        <button
          className="transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 text-lg w-full  font-semibold text-center mr-4 bg-white
        text-purple py-2 px-4 rounded-lg hover:text-purple hover:bg-white border border-purple"
        >
          <Link href="/products">Back to Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
