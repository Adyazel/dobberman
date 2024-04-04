import React, { useEffect, useState } from 'react';
import './Main_body.css';

import Carrucel from './Carrucel';


export const Main_body = () => {

    let Nombre_web = "Dobermann software";

 
  

  return (
    <main>
         <div className='conteiner_mainbody'>
         <span className='span2'>Bienvenido a {Nombre_web}</span>
          <span className='span1'>¡Hola mundo!</span>
          
         </div>
        <div className='content_carru'>
          <Carrucel/>
        </div>
        


    </main>
  )
}

