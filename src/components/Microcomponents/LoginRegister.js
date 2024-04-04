import React, { useState } from 'react';
import './Login.css';
import { Login } from './Login';
import { Register } from './Register';
import { Forgot } from './Forgot';

export const LoginRegister = () => {

  



  return (
    <div className='Union'>
        <div>
          <Login/>
            
        </div>
        <div>
            <Register/>
        </div>
    </div>
  ) 
}
