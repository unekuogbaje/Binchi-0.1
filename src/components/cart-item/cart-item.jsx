
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
   <div className='flex w-[100%] h-[80px] mb-[15px] '>
    <img 
    src={imageUrl} 
    alt={`${name}`} 
    className='w-[30%] '/>

    <div className='flex-col items-start justify-center px-[10px] py-[20px] w-[70%] '>
      <span className="text-[16px] ">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
   </div>
  );
};

export default CartItem;