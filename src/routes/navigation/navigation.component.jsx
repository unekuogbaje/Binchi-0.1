import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartIcon from '../../components/cart-icon/cart-icon';
import Cartdropdown from '../../components/cart-dropdown/cart-dropdown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <div className='navigation flex h-[50px] w-[100%] fixed left-0 right-0 justify-between border-b-2 border-b-blue-800'>
          <Link className='container flex-col cursor-pointer max-w-max' to='/'>
            <Logo className='justify-self-start h-6 sm:h-4 md:h-8 lg:h-10 fill-[#121087]'/>
          </Link>

          <div className='flex w-full h-full ml-3/2 items-center justify-between '>
            <Link className='flex cursor-pointer mr-[10%]  gap-2 ' to='/browse'>
              <span className="flex text-slate-600 text-sm sm:text-xs md:text-lg lg:text-lg transform duration-200 hover:scale-110 hover:text-[#121087] ">Categories</span>   
            </Link>

            {currentUser ? (
              <Link className=''>
                <h1 className="flex text-slate-600 text-sm sm:text-xs md:text-lg lg:text-lg hover:text-[#121087] transform duration-200 hover:scale-110"
                onClick={signOutUser} >
                {' '}
                Log Out{' '}
                </h1>
              </Link>
              ) : (
                <Link className='flex gap-2' to='/auth'>
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