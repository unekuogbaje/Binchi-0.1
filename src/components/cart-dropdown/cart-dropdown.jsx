import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";


const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/checkout')
  }
    return (
        <div className="flex-col absolute w-[240px] h-[340px] p-[20px] b-[1px solid] bg-white border-2 border-[#003ECB] top-[90px] right-10 z-5 ">
          <div className="cart-items h-[240px] flex-col overflow-scroll ">
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} /> 
            ))
            ) : (
              <span className='text-[16px] m-[50px auto] text-subClr'>Your Cart is empty</span>
            )
          }
          </div>
          <Button 
          onClick={checkoutHandler}
          className="mt-auto text-mainClr bg-subClr w-[50%] rounded-lg shadow-md shadow-subClr p-2 font-bold cursor-pointer transform duration-200 hover:scale-110 relative" >
            Checkout
          </Button>
        </div>
    );
};

export default Cartdropdown;