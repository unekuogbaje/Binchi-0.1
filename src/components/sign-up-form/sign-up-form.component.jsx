import React from 'react';

import { useState } from 'react';
import FormInput from '../form-input/form-input';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';

const defaultFormFields = {
displayName:'',
email:'',
password:'',
confirmPassword:''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

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
      <div className='sign-up-container flex-column w-[380px] '>
        <h2 className='m-6' >Don't have an account?</h2>
        <span className='m-6'>Sign up with email and password</span>
        <form 
        className="shrink focus:shrink m-6"
        onSubmit={handleSubmit}>
          <FormInput 
          label=""
          placeholder="Name"
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName"
          value={displayName}
          />

          <FormInput 
          label=""
          placeholder="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email"
          value={email}
          />

          <FormInput 
          label="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password"
          value={password}
          />

          <FormInput
          label="Confirm Password" 
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword"
          value={confirmPassword}
          className="bg-mainClr"
          />

          <Button
          type='submit'
          
          >
          Sign Up
          </Button>
        </form>
      </div>
      );
}

export default SignUpForm