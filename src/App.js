import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from './components/sign-up-form/sign-up-form.component';

import Browse from './routes/browse/browse';

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
