import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    X
  } from 'react-feather';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;

    const { 
        clearItemFromCart, 
        addItemToCart, 
        removeItemFromCart 
    } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
      <div className="checkout-item-container flex w-full min-h-[100px] border-b-2 border-slate-400 py-4 px-6 text-lg items-center ">
        <div className="w-1/4 pr-4 ">
          <img
          src={imageUrl} alt={`${name}`} 
          className="w-full h-full" />
        </div> 
        <span className="w-1/4">{name} </span>
        <span className="flex w-1/4">
          <ChevronLeft
          onClick={removeItemHandler} 
            className="text-slate-500 hover:text-slate-900 mt-1 transform duration-200 hover:scale-110 cursor-pointer"
              size={18}
          />  
          <span>{quantity}</span> 
          <ChevronRight
          onClick={addItemHandler} 
            className="text-slate-500 hover:text-slate-900 mt-1 transform duration-200 hover:scale-110 cursor-pointer"
              size={18}
          /> 
        
        </span>
        <span className="w-1/4">{price} </span>
        <X
        onClick={clearItemHandler}
        className="text-slate-500 hover:text-slate-900 mt-1 transform duration-200 hover:scale-110 cursor-pointer"
        size={24}
        /> 
      </div>
    )
}

export default CheckoutItem;