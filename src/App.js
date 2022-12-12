import React, { Component } from 'react';
import Home from './routes/home/home.component';

import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='bg-red-100'>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      </div>
    );
  }
};

export default App;
