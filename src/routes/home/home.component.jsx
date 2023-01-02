import React from 'react';
import { Outlet } from 'react-router-dom';
// import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Home = () => {
        return ( 
                <div>
                    <Outlet/>
                    
                </div>

           
        );
    
}

export default Home;