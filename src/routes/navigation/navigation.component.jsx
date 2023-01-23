import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Sthsld } from '../../assets/ss.png';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
    return (
      <Fragment>
        <div className='navigation flex h-[70px] w-[100%] justify-between mb-[25px] '>
          <Link className='p-[10px 15px] cursor-pointer pt-4 ' to='/'>
          <h1 className="flex right- text-[#003ECB] p-2 shadow-md shadow-[#2f3782] rounded-lg font-bold transform duration-200 hover:scale-110 hover:text-[#121087]">Home</h1>
          </Link>

          <div className='flex w-[50%] h-[100%] items-center justify-between '>
            <Link className='p-[10px 15px] cursor-pointer mr-[20%] ' to='/browse'>
              <h1 className="flex right- text-[#003ECB] p-2 shadow-md shadow-[#2f3782] rounded-lg font-bold transform duration-200 hover:scale-110 hover:text-[#121087]">Browse content</h1>   
            </Link>

            {currentUser ? (
              <Link className='p-[10px 15px] '>
                <h1 className="flex right- text-[#003ECB] p-2 mr-2 shadow-md shadow-[#2f3782] rounded-lg font-bold hover:text-[#121087] transform duration-200 hover:scale-110"
                onClick={signOutUser} >
                {' '}
                Log Out{' '}
                </h1>
              </Link>
              ) : (
                <Link className='p-[10px 15px] ' to='/auth'>
                  <h1 className="flex right- text-[#003ECB] p-2 mr-2 shadow-md shadow-[#2f3782] rounded-lg font-bold hover:text-[#121087] transform duration-200 hover:scale-110">
                  My Account
                  </h1>
                </Link>
                )}
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;