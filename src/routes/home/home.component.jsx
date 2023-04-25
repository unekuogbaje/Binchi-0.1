import React from 'react';
import { Outlet } from 'react-router-dom';
import SmSignins from '../../components/sm sign-ins/sm-sign-ins';

const Home = () => {
        return ( 
         <div>
          <Outlet/>      
         </div>  
        );
    
}

export default Home;