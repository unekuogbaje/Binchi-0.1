import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import { 
    ChevronRight
} from 'react-feather';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

  return (
    <div 
    className="flex-col space-y-7">
    <div 
    className='w-full flex-col h-[350px] items-center '>
     <img 
     src={imageUrl} 
     alt={`${name}`}
     className="w-full h-[95%] object-cover sm:object-scale-down mb-1 hover:opacity-80 "
     />
      <div 
       className='footer flex w-full h-[5%] justify-center text-[18px] '>
       <span 
       className='name w-[90%] mb-[15px] text-slate-600'>{name}</span>
       <span 
       className='price w-[10%] text-slate-600'>{price}</span>
      </div>
    </div>

    <div className="pb-5 transform duration-200 hover:scale-110">
      <Button 
      type="submit"
      onClick={addProductToCart}
      
      className='flex hover:flex  bg-subClr hover:bg-blue-800 text-mainClr hover:opacity-85 rounded-md shadow-md w-[50%] sm:w-[60%] h-10 p-[16px 20px] items-center shadow-[#2f3782]  font-bold top-60 cursor-pointer'
      >
       <h1 
       className='m-auto uppercase text-sm'>
        Add to cart
       </h1>
     </Button>
     </div>
    </div>
    
    );
};

export default ProductCard;