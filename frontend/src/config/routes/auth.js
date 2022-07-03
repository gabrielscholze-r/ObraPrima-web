import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../../pages/Homepage'

function Auth() {
  return (
        <Routes>
            <Route path='/Home' element={<Homepage/>}/>
        </Routes>
  );
}

export default Auth;