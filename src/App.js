import React, { Component } from 'react';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

import Navigation from './routes/navigation/navigation.component';

import { Routes, Route } from 'react-router-dom';

const Browse = () => {
  return <h1>I am the Browse page</h1>;
};

class App extends Component {
  render() {
    return (
      <div className='bg-gradient-to-r from-pink-400 to-red-100'>
        <Routes>
         <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route index element={<Browse/>} />
          <Route index element={<Authentication />} />
         </Route>
       </Routes>
      </div>
    );
  }
};

export default App;
