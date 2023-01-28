import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";


const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
    return (
        <div className="flex-col absolute w-[240px] h-[340px] p-[20px] b-[1px solid] b-#003ECB bg-mainClr top-[90px] right-10 z-5 ">
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
          <Button className="mt-auto text-subClr w-[50%] rounded-full shadow-xl shadow-subClr p-2 font-bold cursor-pointer transform duration-200 hover:scale-110 relative" >Checkout</Button>
        </div>
    );
};

export default Cartdropdown;