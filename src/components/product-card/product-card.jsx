import Button from "../button/button.component";
import { 
    ChevronRight
} from 'react-feather';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
  return (
    <div 
    className="flex-col space-y-7">
    <div 
    className='w-full flex-col h-[350px] items-center '>
     <img 
     src={imageUrl} 
     alt={`${name}`}
     className="w-full h-[95%] object-cover mb-1 hover:opacity-80 "
     />
      <div 
       className='footer flex w-full h-[5%] justify-between text-[18px] '>
       <span 
       className='name w-[90%] mb-[15px] text-[#003ECB]'>{name}</span>
       <span 
       className='price w-[10%] text-[#003ECB]'>{price}</span>
      </div>
    </div>

    <div className="pb-5 transform duration-200 hover:scale-110">
      <Button 
      type="submit"
      className='flex hover:flex  bg-mainClr hover:bg-blue-100 text-[#003ECB] hover:opacity-85 rounded-full shadow-lg w-[80%] h-10 text-[16px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] opacity-70 top-60 cursor-pointer'>
       <h1 
       className='ml-auto uppercase text-sm'>
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