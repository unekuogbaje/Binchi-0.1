import React, { Fragment } from 'react';
// import Button from 'antd/lib/button';
import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
import FormInput from '../form-input/form-input';

import Button from '../button/button.component';
import { 
    User, 
    Lock, 
    ChevronRight
} from 'react-feather';


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(
             email, 
             password
            );
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('Password incorrect');
                  break;
                case 'auth/user-not-found':
                  alert('User not found');
                  break;
                default:
                  console.log(error);
              };
        }
    };

    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

        return (
            <Fragment>
            <div className="flex items-center justify-center relative min-h-screen">
             <div className="flex-column h-[550px] w-[450px] shadow-2xl shadow-[#003ECB] bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl transform duration-200 hover:scale-110 m-auto">
                 <h2 className='w-full text-center text-mainClr text-xl font-semibold m-6'> Sign in</h2>
                     <form
                     className="mb-4 md:flex md:flex-wrap md:justify-between m-6"
                     onSubmit={handleSubmit}
                        >  
                        <div
                        className="mb-6 justify-between md:w-5/6">
                         <div 
                         className="p-5 transform duration-200 hover:scale-110">
                         <User 
                             className="absolute p-1 mt-1.5 mr-2 text-slate-400" 
                            />
                          <FormInput 
                            type="email" 
                            placeholder="Email" 
                            required
                            onChange={handleChange}
                            name="email"
                            value={email}
                          />
                         </div>

                            <div 
                            className="p-5 transform duration-200 hover:scale-110">
                              <Lock 
                                 className="absolute p-1 mt-1.5 mr-2 text-slate-400" 
                               />
                                <FormInput 
                                type="password" 
                                placeholder="Password"
                                required
                                onChange={handleChange}
                                name="password"
                                value={password}
                              />
                            </div>
                            
                                <div 
                                className="transform duration-200 hover:scale-110 relative">
                                  <Button 
                                  type="submit"
                                  className='flex ml-auto bg-mainClr hover:bg-blue-100 text-[#003ECB] rounded-full shadow-lg w-[50%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
                                    <h1 className='ml-auto uppercase'> log in </h1>
                                  <ChevronRight 
                                  className="text-[#003ECB] ml-auto"
                                    size={28}/>
                                  </Button>
                                
                                </div>

                                <div 
                                className="transform duration-200 hover:scale-110 relative">
                                  <Button 
                                  type="button" 
                                  onClick={signInWithGoogle}
                                  className='flex ml-auto bg-mainClr hover:bg-blue-100 text-[#003ECB] rounded-full shadow-lg w-[80%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
                                    <h1 className='ml-auto uppercase'> log in with google </h1>
                                
                                  <ChevronRight 
                                  className="text-[#003ECB] ml-auto"
                                    size={28}/>
                                  </Button>
                                
                                </div>
                              </div>
                        </form>

                         <span className="block w-full text-center no-underline text-lg font-bold hover:text-grey-darker mb-8 text-mainClr border-t-4">
                         New User?
                          <Link to={"/signup"}>
                            <h1 className="text-[#003ECB] hover:text-blue-900 ml-1 transform duration-200 hover:scale-110">
                              Sign up
                            </h1>
                          </Link>
                         </span>
                    
                </div>

                <div className='relative z-0 top-0 bottom-0 left-0 right-0 inset-0 min-w-screen flex-wrap'>
                <div className='rotate-45 absolute'>
                    <span className='absolute h-[120px] w-[220px] bg-[#003dcbc0] bottom-[-50px] left-[150px] rounded-t-full rounded-b-xl rounded-r-3xl opacity-10 '></span>
                    <span className='absolute h-[120px] w-[120px] bg-[#88f1ff] top-[20px] right-[380px] rounded-t-3xl rounded-r-full opacity-10 '></span>
                    <span className='absolute h-[120px] w-[120px] bg-[#d7dbf7] top-[320px] right-[400px] rounded-full opacity-10 '></span>
                
                    <span className='absolute h-[220px] w-[120px] bg-[#0aa3b8] top-[320px] right-[80px] rounded-l-3xl rounded-r-full opacity-10 '></span>
                    <span className='rotate-90 absolute h-[240px] w-[100px] bg-gradient-to-t from-blue-100 to-blue-700 bottom-[70px] right-[10px] rounded-full opacity-10'></span>
                    <span className='roundeed-l-xl rounded-r-full absolute h-[100px] w-[120px] bg-[#d7dbf7] bottom-[120px] left-[10px] opacity-20'></span>
                    </div>
                
                </div>
            
            </div>

            <Outlet/>
            </Fragment>
        );
    
    
}

export default SignInForm