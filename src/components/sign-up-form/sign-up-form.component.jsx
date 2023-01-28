import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';

import {
  ChevronRight
} from 'react-feather';

const defaultFormFields = {
displayName:'',
email:'',
password:'',
confirmPassword:''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth (user, { displayName }); 
      resetFormFields();
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Failed! Email already in use.', error);
      } else {
        console.log('error creating user', error);
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
    
    return (
      <Fragment>
      <div className="flex items-center justify-center relative min-h-screen">
      <div className='flex-column h-[550px] w-[450px] shadow-2xl shadow-[#003ECB] bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl transform duration-200 hover:scale-110 m-auto'>
        <h2 className='w-full text-center text-mainClr text-xl font-semibold m-6' >Let's get started</h2>
        <form 
        className="mb-4 md:flex md:flex-wrap md:justify-between m-6"
        onSubmit={handleSubmit}>
         <div 
         className="mb-6 justify-between md:w-9/12">
          <div 
          className="p-5 transform duration-200 hover:scale-110">
            <FormInput 
            label=""
            placeholder="Name"
            type="text" 
            required 
            onChange={handleChange} 
            name="displayName"
            value={displayName}
            />
         </div>
          
          <div
          className="p-5 transform duration-200 hover:scale-110">
          <FormInput 
          label=""
          placeholder="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email"
          value={email}
          />
          </div>
          
          <div
          className="p-5 transform duration-200 hover:scale-110">
          <FormInput 
          label=""
          placeholder="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password"
          value={password}
          />
          </div>

          <div
          className="p-5 transform duration-200 hover:scale-110">
          <FormInput
          label="" 
          placeholder="Confirm password"
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}
          className="bg-mainClr"
          />
          </div>

          <div 
          className="transform duration-200 hover:scale-110 relative">
            <Button 
            type="submit"
            className='flex ml-auto bg-mainClr hover:bg-blue-100 text-[#003ECB] rounded-full shadow-lg w-[50%] h-10 text-[16px] mt-[38px] p-[16px 20px] items-center shadow-[#2f3782]  font-bold cursor-pointer'>
              <h1 className='ml-auto uppercase'> sign up </h1>
            <ChevronRight 
            className="text-[#003ECB] ml-auto"
              size={28}/>
            </Button>
          
          </div>
         </div>
        </form>

        <span className="block w-full text-center no-underline text-mainClr hover:text-grey-darker mb-8 border-t-2 font-bold text-lg">
        Already have an account?
        <Link to={"/signin"}>
          <h1 className="text-[#003ECB] hover:text-blue-900 ml-1 transform duration-200 hover:scale-110">
            Sign in here
          </h1>
        </Link>
      </span>
      </div>
      </div>
      </Fragment>
      );
}

export default SignUpForm