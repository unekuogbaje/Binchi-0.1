import { Outlet } from 'react-router-dom';

import React, { Component, } from 'react';
// import Button from 'antd/lib/button';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

class Home extends Component {
    render() {
        return ( 
                <div>
                    <Outlet/>
                    <SignInForm/>
                </div>

           
        );
    }
    
}

export default Home;