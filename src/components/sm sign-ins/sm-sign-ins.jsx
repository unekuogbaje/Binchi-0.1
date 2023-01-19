import { Outlet, Link } from 'react-router-dom';

import {  
    Instagram, 
    Facebook, 
    Twitter 
} from 'react-feather';

const SmSignins = () => {
    return (
        <div>
          <Link className='p-10 shadow-md shadow-[#2f3782] left-20 rounded-xl absolute bg-[#d7dbf7] rotate-[-45deg] bottom-12 opacity-80' >
            <div className='rotate-[50deg]'>
              <h3 className='text-[#003ECB] font-bold text-[24px]'>or sign in via</h3>
                  <div className='flex text-[#003ECB] gap-4 mt-6 '>
                    <Twitter className=' transform duration-200 hover:scale-[1.5] fill-blue-400' />
                    <Facebook className=' transform duration-200 hover:scale-[1.5] fill-blue-400'/>
                    <Instagram className=' transform duration-200 hover:scale-[1.5] fill-blue-400'/>
                  </div>
            </div> 
          </Link>
        </div>
    )
}

export default SmSignins;

