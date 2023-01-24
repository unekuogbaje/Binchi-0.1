import Button from "../button/button.component";
import { 
    ChevronRight
} from 'react-feather';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
     <img src={imageUrl} alt={`${name}`} />
       <div className='footer'>
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
        </div>
     <Button 
    type="submit"
    className='flex ml-auto bg-mainClr hover:bg-blue-100 text-[#003ECB] rounded-full shadow-lg w-[50%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
       <h1 
       className='ml-auto uppercase'>
        Add to cart
       </h1>
       <ChevronRight 
       className="text-[#003ECB] ml-auto"
       size={28}/>
     </Button>
    </div>
    );
};

export default ProductCard;