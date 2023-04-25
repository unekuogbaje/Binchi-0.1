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
  ChevronRight
} from 'react-feather';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <div className='navigation flex h-[50px] w-[100%] justify-between mb-[25px] border-b-2 border-b-blue-800'>
          <Link className='flex-col p-[10px 15px] cursor-pointer pt-4 ' to='/'>
          <span className="text-slate-800 text-sm sm:text-xs md:text-lg lg:text-lg p-2 transform duration-200 hover:scale-110 hover:text-[#121087]">Binchi</span>
          </Link>

          <Link className='flex-col p-[10px 15px] cursor-pointer pt-4 ' to='/about'>
          <span className="text-slate-600 p-2 transform duration-200 hover:scale-110 hover:text-[#121087]">
          </span>
          </Link>

          <div className='flex w-[60%] md:w-[50%] sm:w-[65%] h-[100%] items-center justify-between '>
            <Link className='flex p-[10px 15px] cursor-pointer mr-[20%] gap-2 ' to='/browse'>
              <span className="flex text-slate-600 text-sm sm:text-xs md:text-lg lg:text-lg transform duration-200 hover:scale-110 hover:text-[#121087] ">Content</span>   
            </Link>

            {currentUser ? (
              <Link className='p-[10px 15px] '>
                <h1 className="flex text-slate-600 text-sm sm:text-xs md:text-lg lg:text-lg hover:text-[#121087] transform duration-200 hover:scale-110"
                onClick={signOutUser} >
                {' '}
                Log Out{' '}
                </h1>
              </Link>
              ) : (
                <Link className='flex p-[10px 15px] gap-2' to='/auth'>
                  <span className="flex text-slate-600 text-sm sm:text-xs md:text-lg lg:text-lg hover:text-[#121087] transform duration-200 hover:scale-110">
                  Profile
                  </span>
                </Link>
                )}
                <CartIcon
                className="text-sm sm:text-xs md:text-lg lg:text-lg"/>
          </div>
          {isCartOpen && <Cartdropdown/>}
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;