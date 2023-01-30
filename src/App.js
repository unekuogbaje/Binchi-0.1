import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from './components/sign-up-form/sign-up-form.component';
import ForgotPassword from './components/forgot-password/forgot-password';

import Browse from './routes/browse/browse';

import About from './routes/About/about';

const App = () => {
    return (
      <div className='bg-white min-h-screen '>
        <Routes>
         <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>} />
            <Route path='browse' element={<Browse/>} />
            <Route path='auth' element={<Authentication />} />
            <Route path='signin' element={<SignInForm/>} />
            <Route path='signup' element={<SignUpForm/>} />
            <Route path='about' element={<About/>} />
            <Route path='reset-password' element={<ForgotPassword/>} />
         </Route>
       </Routes>

       
      </div>
    );
  };

export default App;
