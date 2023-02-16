import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";


const Checkout = () => {
    const { 
      cartItems,
      cartTotal 
    } = useContext(CartContext);
  return (
   <div className="checkout-container flex flex-col min-h-[90vh] w-3/4 mx-auto my-12 gap-4">

    <div className="checkout-header flex justify-between gap-4 border-b-2 border-slate-400 px-2.5 py-0 items-center text-slate-500 font-bold">
      <div className="w-1/4">
       <span>Product</span>
      </div>
      <div className="w-1/4">
       <span>Description</span>
      </div>
      <div className="w-1/4">
       <span>Quantity</span>
      </div>
      <div className="w-1/4">
       <span>Price</span>
      </div>
      <div className="w-1/4">
       <span>Remove</span>
      </div> 
    </div>
      {cartItems.map((cartItem) => ( 
        <CheckoutItem
        key={cartItem.id} cartItem={cartItem} />
      ))}
      <span 
      className="mt-7 ml-auto text-xl text-slate-600">
      Total: ${cartTotal}
      </span>
    </div>
  );
};

export default Checkout;