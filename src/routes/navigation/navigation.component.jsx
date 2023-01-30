import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Sthsld } from '../../assets/ss.png';

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
        <div className='navigation flex h-[50px] w-[100%] justify-between mb-[25px] border-b-2 border-b-blue-800'>
          <Link className='p-[10px 15px] cursor-pointer pt-4 ' to='/'>
          <h1 className="flex text-slate-600 p-2 transform duration-200 hover:scale-110 hover:text-[#121087]">Home</h1>
          </Link>

          <div className='flex w-[60%] md:w-[50%] sm:w-[65%] h-[100%] items-center justify-between '>
            <Link className='p-[10px 15px] cursor-pointer mr-[20%] ' to='/browse'>
              <h1 className="flex right- text-slate-600 transform duration-200 hover:scale-110 hover:text-[#121087] ">Browse content</h1>   
            </Link>

            {currentUser ? (
              <Link className='p-[10px 15px] '>
                <h1 className="flex right- text-slate-600 hover:text-[#121087] transform duration-200 hover:scale-110"
                onClick={signOutUser} >
                {' '}
                Log Out{' '}
                </h1>
              </Link>
              ) : (
                <Link className='p-[10px 15px] ' to='/auth'>
                  <h1 className="flex right- text-slate-600 hover:text-[#121087] transform duration-200 hover:scale-110">
                  My Account
                  </h1>
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