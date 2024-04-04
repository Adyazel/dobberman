import React, { useState, useEffect } from 'react';
import './Trabajos.css';
import { getWorks } from '../../conexion/conexion.js';

export const Trabajos = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos

  useEffect(() => {
    getWorks().then(dataArray => {
      console.log('Datos obtenidos:', dataArray);
      setData(dataArray); // Actualiza el estado con los nuevos datos
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  }, []); // El array vacío asegura que el efecto se ejecute sólo una vez al montar el componente
  return (
    <div className='worksPage'>
      <h1>Trabajos</h1>
      <section id='container_works'>
        {data.map((doc ,ind) => (
          <a href={doc.link} key={ind} id={doc.id} > {/* Asegúrate de tener una 'key' única para cada elemento */}
            <div>
              <h2>{doc.titulo}</h2>
              <cite>{doc.cliente}</cite>
            </div>
            <img src={doc.imagen} alt='imagen de la página'/>
            
          </a>
        ))}
      </section>
    </div>
  );
}
