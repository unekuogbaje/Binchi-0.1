import React, { Fragment } from 'react';
// import Button from 'antd/lib/button';
import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
import FormInput from '../form-input/form-input';

import Button from '../button/button.component';
import { User, Lock, ChevronRight, Instagram, Facebook, Twitter } from 'react-feather';


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../sign-up-form/sign-up-form.component';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

        return (
            <Fragment>
            <div className="flex items-center justify-center relative min-h-screen">
             <div className=" h-[680px] w-[350px] shadow-2xl shadow-[#003ECB] bg-gradient-to-r from-blue-100 to-blue-700 rounded-xl transform duration-200 hover:scale-110">
                 <div className="z-[1] relative min-h-full ">
                     <form className="w-[320px] p-[30px] pt-[90px]"
                        onSubmit={() => {}}>  
                         <div className="p-5 relative flex  transform duration-200 hover:scale-110">
                             <label></label>
                                <input 
                                type="email" 
                                placeholder="Email" 
                                className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-mainClr shadow-[#2f3782]" 
                                onChange={handleChange}
                                name="email"
                                value={email}
                                />
                                <User className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                         </div>

                            <div className="p-5 relative flex  transform duration-200 hover:scale-110 mt-10">
                                <Lock className="absolute p-1 mt-1.5 mr-2 text-slate-400" />
                                <label></label>
                                <input 
                                type="password" placeholder="Password" className="p-2  text-slate-600 b-0 p=[10px] pl-[24px] w-[100%] rounded-md shadow-md bg-mainClr shadow-[#2f3782]"
                                onChange={handleChange}
                                name="password"
                                value={password}
                                />
                            </div>
                            
                                <div className="transform duration-200 hover:scale-110 relative">
                                <Button type="submit" onClick={logGoogleUser}
                                className='flex ml-auto bg-mainClr hover:bg-blue-100 text-[#003ECB] rounded-full shadow-lg w-[50%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
                                <h1 className='ml-auto uppercase'>log in</h1>
                                
                                <ChevronRight className="text-[#003ECB] ml-auto"
                                size={28}/>
                                </Button>
                                
                                </div>
                            
                        </form>

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
                    
                </div>

                <SignUpForm/>

                <div className='relative z-0 top-0 bottom-0 left-0 right-0 inset-0 min-w-screen flex-wrap'>
                <div className='rotate-45 absolute'>
                    <span className='absolute h-[520px] w-[520px] bg-[#003dcbc0] bottom-[-50px] left-[150px] rounded-t-full rounded-b-xl rounded-r-3xl opacity-10 '></span>
                    <span className='absolute h-[520px] w-[420px] bg-[#88f1ff] top-[20px] right-[380px] rounded-t-3xl rounded-r-full opacity-10 '></span>
                    <span className='absolute h-[520px] w-[420px] bg-[#d7dbf7] top-[320px] right-[400px] rounded-full opacity-10 '></span>
                
                    <span className='absolute h-[520px] w-[420px] bg-[#0aa3b8] top-[320px] right-[80px] rounded-l-3xl rounded-r-full opacity-10 '></span>
                    <span className='rotate-90 absolute h-[540px] w-[300px] bg-gradient-to-t from-blue-100 to-blue-700 bottom-[70px] right-[10px] rounded-full opacity-10'></span>
                    <span className='roundeed-l-xl rounded-r-full absolute h-[400px] w-[420px] bg-[#d7dbf7] bottom-[120px] left-[10px] opacity-20'></span>
                    </div>
                
                </div>
            
            </div>

            <Outlet/>
            </Fragment>
        );
    
    
}

export default SignInForm