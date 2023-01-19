import { Routes, Route } from 'react-router-dom';
import { Component, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect, 
  createUserDocumentFromAuth 
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from './components/sign-up-form/sign-up-form.component';

const Browse = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button className='p-2' onClick={logGoogleUser}>sign in with google popup</button>
      <button className='p-2' onClick={signInWithGoogleRedirect}>sign in with redirect</button>
    </div>
  );
};

const App = () => {
    return (
      <div className='bg-blue-50 min-h-screen '>
        <Routes>
         <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>} />
            <Route path='browse' element={<Browse/>} />
            <Route path='auth' element={<Authentication />} />
            <Route path='signin' element={<SignInForm/>} />
            <Route path='signup' element={<SignUpForm/>} />
         </Route>
       </Routes>

       
      </div>
    );
  };

export default App;
