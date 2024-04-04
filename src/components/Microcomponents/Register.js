import React, { useState } from 'react';
import './Login.css';
import { crud } from '../../conexion/conexion'; 
import { useNavigate } from 'react-router-dom';



export const Register = () => {
  const navigatere = useNavigate();
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [pass, setPass] = useState("");
    const [pregunta, setPregunta] = useState("");
    const [respuesta, setRespuesta] = useState("");
    const [actre, setactre] = useState(false);
    const add = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        await crud.addUser(nombre, correo, pass,pregunta,respuesta);
        // navigatere('/home'); // Redirige a la página de inicio después del registro
        setactre(true);
    };

    return (
        <div className={!actre ? 'Register':'Register quitar'}>
            <div>
                <div className='fondologin'><span></span></div>
                <h1>REGISTRAR</h1>
                <form onSubmit={add}>
                    <label htmlFor='name'>Nombre:</label>
                    <input type='text' id='name' name='name' value={nombre} onChange={e => setNombre(e.target.value)} />
                    <label htmlFor='correoR'>Email:</label>
                    <input type='email' id='correoR' name='correoR' value={correo} onChange={e => setCorreo(e.target.value)} />
                    <label htmlFor='passwor'>Contraseña:</label>
                    <input type='password' id='passwor' name='passwor' value={pass} onChange={e => setPass(e.target.value)} />
                    <label htmlFor='preguntas'>Pregunta Secreta:</label>
                    <input type='preguntas' id='preguntas' name='preguntas' value={pregunta} onChange={e => setPregunta(e.target.value)} />
                    <label htmlFor='respuesta'>Respuesta:</label>
                    <input type='respuesta' id='respuesta' name='respuesta' value={respuesta} onChange={e => setRespuesta(e.target.value)} />
                    <button type='submit' onSubmit={add}>Registrar</button>
                </form>
            </div>
        </div>
    )
}

