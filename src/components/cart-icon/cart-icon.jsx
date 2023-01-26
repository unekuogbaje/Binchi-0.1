import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div 
        className='flex relative w-11 h-11 items-center justify-center cursor-pointer'
        onClick={toggleIsCartOpen}>
        <ShoppingIcon className='w-6 h-6'/>
        <span className='absolute font-bold text-xs bottom-3 text-blue-900'>10</span>
        </div>
    );
};

export default CartIcon;