import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Sthsld } from '../../assets/ss.png';

import CartIcon from '../../components/cart-icon/cart-icon';
import Cartdropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronLeft,
  Menu
} from 'react-feather';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <div className='navigation flex h-[50px] w-[100%] justify-between mb-[25px] border-b-2 border-b-blue-800'>
          <Link className='flex-col p-[10px 15px] cursor-pointer pt-4  transform duration-200 hover:scale-110' to='/'>
          <span className="text-[16px] text-slate-800 p-2 hover:text-[#121087]">Smthng
          <span className='uppercase font-bold text-lg'>sold</span></span>
          </Link>

          <Link className='flex-col p-[10px 15px] cursor-pointer pt-4 transform duration-200 hover:scale-110 ' to='/about'>
          <span className="text-slate-600 p-2 hover:text-[#121087] text-[16px] ">About
          </span>
          </Link>

          <div className='flex w-[60%] md:w-[50%] sm:w-[65%] h-[100%] items-center justify-between '>
            <Link className='flex p-[10px 15px] cursor-pointer mr-[20%] gap-2  transform duration-200 hover:scale-110' to='/browse'>
              <span className="flex text-slate-600 hover:text-[#121087] ">Browse Content</span>
              <ArrowUpRight
              className='mt-1'
                size={16} />   
            </Link>

            {currentUser ? (
              <Link className='p-[10px 15px] transform duration-200 hover:scale-110'>
                <span className="flex right- text-slate-600 hover:text-[#121087]"
                onClick={signOutUser} >
                {' '}
                Log Out{' '}
                </span>
              </Link>
              ) : (
                <Link className='flex p-[10px 15px] gap-2  transform duration-200 hover:scale-110' to='/auth'>
                  <span className="flex right- text-slate-600 hover:text-[#121087]">
                  My Account
                  </span>
                  <ChevronDown
                  className='mt-1'
                  size={16} />
                </Link>
                )}
                <CartIcon
                className=""/>
          </div>
          {isCartOpen && <Cartdropdown/>}
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;