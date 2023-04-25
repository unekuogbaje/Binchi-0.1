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
    className='flex-col h-[350px] '>
     <img 
     src={imageUrl} 
     alt={`${name}`}
     className="w-full h-[95%] object-cover sm:object-scale-down mb-1 hover:opacity-80 "
     />
      <div 
       className=' flex h-[5%] text-base '>
       <span 
       className='name w-[85%] mb-[15px] text-[#003ECB]'>{name}</span>
       <span 
       className='price w-[10%] text-[#003ECB]'>{price}</span>
      </div>
    </div>

    <div className="pb-5 transform duration-200 hover:scale-110">
      <Button 
      type="submit"
      onClick={addProductToCart}
      
      className='flex hover:flex  bg-mainClr hover:bg-blue-100 text-[#003ECB] hover:opacity-85 rounded-full shadow-sm w-[50%] sm:w-[60%] h-10 p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] opacity-70 top-60 cursor-pointer'
      >
       <h1 
       className='ml-auto uppercase text-sm sm:text-xs md:text-sm lg:text-md'>
        Add to cart
       </h1>
       <ChevronRight 
       className="text-[#003ECB] ml-auto"
       size={28}/>
     </Button>
     </div>
    </div>
    
    );
};

export default ProductCard;