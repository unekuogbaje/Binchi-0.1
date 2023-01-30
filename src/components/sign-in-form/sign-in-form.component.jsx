import React, { Fragment, useState } from 'react';
// import Button from 'antd/lib/button';
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
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
             email, 
             password
            );
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
             <div className="flex-column h-[550px] w-[450px] shadow-2xl shadow-[#003ECB] bg-white rounded-xl transform duration-200 hover:scale-110 m-auto">
                 <h2 className='text-center text-slate-600 text-xl font-semibold m-6'> Sign in</h2>
                     <form
                     className="mb-4 md:flex md:flex-wrap md:justify-between m-6"
                     onSubmit={handleSubmit}
                        >  
                        <div
                        className="mb-6 justify-between md:w-9/12">
                         <div 
                         className="p-5">
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
                            className="p-5">
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
                                  className='flex ml-auto bg-[#003ECB] hover:bg-blue-900 text-mainClr rounded-full shadow-lg w-[50%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
                                    <h1 className='ml-auto uppercase'> log in </h1>
                                  <ChevronRight 
                                  className="text-mainClr ml-auto"
                                    size={28}/>
                                  </Button>
                                
                                </div>

                                <div 
                                className="transform duration-200 hover:scale-110 relative">
                                  <Button 
                                  type="button" 
                                  onClick={signInWithGoogle}
                                  className='flex ml-auto bg-[#003ECB] hover:bg-blue-900 text-mainClr rounded-full shadow-lg w-[80%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold border-[#2f3782] cursor-pointer'>
                                    <h1 className='ml-auto uppercase'> log in with google </h1>
                                
                                  <ChevronRight 
                                  className="text-mainClr ml-auto"
                                    size={28}/>
                                  </Button>
                                
                                </div>
                              </div>
                        </form>

                         <span className="block w-full text-center no-underline text-lg hover:text-grey-darker mb-8 text-slate-600 border-t-4">
                         New User?
                          <Link to={"/signup"}>
                            <h1 className="text-[#003ECB] hover:text-blue-900 ml-1 transform duration-200 hover:scale-110">
                              Sign up here
                            </h1>
                          </Link>
                         </span>
                    
                </div>

            
            </div>

            <Outlet/>
            </Fragment>
        );
    
    
}

export default SignInForm