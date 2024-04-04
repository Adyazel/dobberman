import React, { useRef } from 'react';
import './Login.css';
import { crud } from '../../conexion/conexion.js';
import { useNavigate } from 'react-router-dom';

export const Forgot = () => {
  const inputcorreo = useRef("");
  const inputpass = useRef("");
  const navigate = useNavigate();
  
  const getLogin = async (event) => {
    event.preventDefault();
    const response = await crud.getUser(inputcorreo.current.value, inputpass.current.value);
  
    if (response.success) {
      localStorage.setItem("nombreus", response.user.nombre); // Guarda el nombre de usuario en el localStorage
      localStorage.setItem("role", response.user.role); // Guarda el rol de usuario en el localStorage
      localStorage.setItem("correo", response.user.correo); // Guarda el correo de usuario en el localStorage
      localStorage.setItem("pass", response.user.pass); // Guarda la contraseña de usuario en el localStorage
      navigate('/home'); // Redirige a la página de inicio después del login exitoso
      window.location.reload();
    } else {
      alert(response.error); // Muestra un mensaje de error
    }
  };
  

  return (
    <div className='Login'>
      <div>
        <div className='fondologin'><span></span></div>
        <h1>RECUPERAR</h1>
        <form onSubmit={getLogin}>
          <label htmlFor='correoL'>Email:</label>
          <input type='email' id='correoL' ref={inputcorreo} name='correoL' />

          <label htmlFor='pass1'>Contraseña:</label>
          <input type='password' id='pass1' ref={inputpass} name='pass1'/>
          {/* <p className='btn_forgot' onClick={() => {setbild(true)}} >Forgot Password?</p> */}
          <button type="submit">LOG IN</button>
        </form>
        <div className='foot_btn'>
          <p></p>
          <button>+</button>
        </div>      
      </div>
    </div>
  )
}
