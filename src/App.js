import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Browse = () => {
  return <h1>I am the Browse page</h1>;
};

const App = () => {
    return (
      <div className='bg-gradient-to-r from-pink-400 to-red-100'>
        <Routes>
         <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>} />
            <Route path='browse' element={<Browse/>} />
            <Route path='auth' element={<Authentication />} />
         </Route>
       </Routes>
      </div>
    );
  };

export default App;
