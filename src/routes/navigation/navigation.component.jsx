import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <Fragment className='flex' >
        <div className='navigation flex h-[70px] w-[100%] justify-between mb-[25px] '>
          <Link className='logo-container h-[100%] w-[70px] p-[25px] ' to='/'>
            
          </Link>

          <div className='flex w-[50%] h-[100%] items-center justify-between '>
            <Link className='p-[10px 15px] cursor-pointer mr-[20%] ' to='/browse'>
              <p className="flex right- text-[#5C5696] p-1 shadow-md shadow-[#965685] font-bold">Browse content</p>   
            </Link>
            
            <Link className='p-[10px 15px] ' to='/auth'>
            <p className="flex right- text-[#5C5696] p-1 shadow-md shadow-[#965685] font-bold">
            <h1 className="mr-2"> New user? Sign Up</h1>
            <a href="/" className="hover:text-blue-500 transform duration-200 hover:scale-110 underline">
            here
            </a>
            </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;