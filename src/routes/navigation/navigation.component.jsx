import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Sthsld } from '../../assets/ss.png';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation flex h-[70px] w-[100%] justify-between mb-[25px] '>
          <Link className='logo-container h-[100%] w-[70px] p-[25px] ' to='/'>
            
          </Link>

          <div className='flex w-[50%] h-[100%] items-center justify-between '>
            <Link className='p-[10px 15px] cursor-pointer mr-[20%] ' to='/browse'>
              <p className="flex right- text-[#003ECB] p-2 shadow-md shadow-[#2f3782] rounded-lg font-bold transform duration-200 hover:scale-110 hover:text-[#121087]">Browse content</p>   
            </Link>
            
            <Link className='p-[10px 15px] ' to='/auth'>
            <p className="flex right- text-[#003ECB] p-2 mr-2 shadow-md shadow-[#2f3782] rounded-lg font-bold hover:text-[#121087] transform duration-200 hover:scale-110">
            Sign in
            </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;