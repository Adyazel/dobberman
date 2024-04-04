import React, { useEffect, useState } from 'react';
import './User.css';
import {crud} from '../../conexion/conexion.js';



const User = () => {

const [username,setUserName] = useState(localStorage.getItem("nombreus"));
const [userrole,setRol] = useState(localStorage.getItem("role"));
const [usercorreo,setCorreo] = useState(localStorage.getItem("correo"));
const [userestado, setEstado] = useState(localStorage.getItem("estado"));
const [userskills, setuserSkills] = useState(localStorage.getItem("skills"));
let oldCorreo = usercorreo;
const [dataAct,setdataAct] = useState(false);
const [focustext,setfocustext] = useState(false);
const [arreglo,setArreglo] = useState(userskills.split(','));

// console.log(arreglo);
useEffect(() => {

    setArreglo(userskills.split(','));
},[userskills]);

const focusEvent = (add) => {
    console.log(add);
    setuserSkills(add);

};

const updateData = async (event) => {
    event.preventDefault();
    const response = await crud.updatePerfil(oldCorreo,username,usercorreo,userestado,arreglo);
  
    if (response) {

        alert(response.message);
      // Redirige a la página de inicio después del login exitoso
      localStorage.setItem("nombreus", response.user.nombre); // Guarda el nombre de usuario en el localStorage
      localStorage.setItem("role", response.user.role); // Guarda el rol de usuario en el localStorage
      localStorage.setItem("correo", response.user.correo); // Guarda el correo de usuario en el localStorage
      localStorage.setItem("pass", response.user.pass);
      localStorage.setItem("estado",response.user.estado);
      localStorage.setItem("skills",response.user.skills);
      setdataAct(!dataAct);
    //   window.location.reload();
    } else {
      alert(response.error); // Muestra un mensaje de error
    }
  };





  return (
    <div className='userPefil'>


        {!dataAct ?
        <div className='Perfil'>
        <h1>Perfil</h1>
            <div className='perfiltop'>
                <div className='img_perfil'><img src='./img/profile.png' width='100%' height="100%"/></div>

                <div className='user_datos'>
                    <div>
                        <h6>Nombre:</h6>
                        <p>{username}</p>
                    </div>
                    <div>
                        <h6>Nivel:</h6>
                        <p>{userrole != "" ?  userrole : "sin cargo"}</p>
                    </div>
                    <div>
                        <h6>Correo:</h6>
                        <p>{usercorreo}</p>
                    </div>
                    <div>
                        <h6>Estado</h6>
                        <p>{userestado}</p>
                    </div>
                </div>
            </div>

            <div className='perfilbottom'>
                <h6>Habilidades</h6>
                <div>
                {arreglo.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                </div>
                <button onClick={()=>{setdataAct(!dataAct)}}>Actualizar</button>
            </div>

        </div>

        :

        <form className='Perfil' onSubmit={updateData}>
        <h1>Perfil</h1>
            <div className='perfiltop'>
                <div className='img_perfil'><img src='./img/profile.png' width='100%' height="100%"/></div>

                <div className='user_datos'>
                    <div>
                        <h6>Nombre:</h6>
                        <input type='text' value={username} onChange={e => {setUserName(e.target.value)}}/>
                    </div>
                    <div>
                        <h6>Nivel:</h6>
                        <p className='dataNivel'>{userrole != "" ?  userrole : "sin cargo"}</p>
                    </div>
                    <div>
                        <h6>Correo:</h6>
                        <input type='text' disabled value={usercorreo} onChange={e => {setCorreo(e.target.value)}} />
                    </div>
                    <div>
                        <h6>Estado</h6>
                        <input type='text' value={userestado} onChange={e => {setEstado(e.target.value)}} />
                    </div>
                </div>
            </div>

            <div className='perfilbottom'  >
                <h6>Habilidades</h6>
                <cite>para agregar habilidades, escriba las habilidades separadas por comas</cite>
                <div onMouseEnter={()=>{setfocustext(true)}} onMouseLeave={()=>{setfocustext(false)}} >
                
                    {focustext ?   
                        <textarea name='skills'placeholder='poner las habilidades separadas por comas ejemplo: fuerte,honesto' defaultValue={userskills} onMouseLeave={e =>{focusEvent(e.target.value)}}></textarea>
                    :
                       
                    arreglo.map((skill, index) => (
                                    <p key={index}>{skill}</p>
                                ))
                    } 
                    
                </div>
                <button type='submit'>Guardar</button>
            </div>

        </form>
                }


    </div>





  )
}

export default User