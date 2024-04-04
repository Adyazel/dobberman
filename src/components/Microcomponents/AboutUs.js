import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
   <div className='aboutus'>
     <div className='AboutUs_container'>
    
         <div className='block_about'>
             <h1>Sobre nosotros</h1>
             <p>Dobberman Software es una innovadora empresa de desarrollo de software con sede en Silicon Valley, fundada en 2020.
                  Nos especializamos en crear soluciones de software a medida que impulsan la transformación digital de negocios en diversos sectores,
                   incluidos financiero, educación, y tecnología. Nuestra misión es brindar productos de software que no solo cumplan con las expectativas de nuestros clientes sino que también superen los estándares de la industria, 
                   asegurando así su máxima satisfacción.
             </p>
         </div>
    
         <div className='sep_block'>
             <div className='block_about'>
                 <h1>Servicios</h1>
                 <p>
                     En Dobberman Software, ofrecemos una amplia gama de servicios diseñados para atender las necesidades específicas de nuestros clientes. 
                     Nuestros servicios incluyen:
                 </p>
                 <ul>
                     <li>Desarrollo de software a medida</li>
                     <li>Consultoría tecnológica</li>
                     <li>Integración de sistemas</li>
                     <li>Desarrollo de aplicaciones móviles</li>
                     <li>Soluciones de inteligencia artificial y machine learning</li>
                     <li>Mantenimiento y soporte técnico</li>
                 </ul>
             </div>
             <div className='block_about'>
                 <h1>Tecnologias</h1>
                 <p>
                 Utilizamos las últimas tecnologías y prácticas de la industria para garantizar que nuestros productos sean de la máxima calidad y estén a la vanguardia de la innovación tecnológica. 
                 Algunas de las tecnologías clave en nuestra herramienta incluyen:
                 </p>
                 <ul>
                     <li>Python y Django para el desarrollo web</li>
                     <li>React y Angular para el desarrollo frontend</li>
                     <li>Kotlin y Swift para aplicaciones móviles</li>
                     <li>AWS y Google Cloud para infraestructura en la nube</li>
                     <li>TensorFlow y PyTorch para proyectos de IA</li>
                 </ul>
             </div>
         
         </div>
    
         <div className='block_about'>
             <h1>Equipo</h1>
             <p>
             Nuestro equipo está compuesto por más de 5 profesionales apasionados por la tecnología, incluidos desarrolladores de software, diseñadores de UX/UI, ingenieros de datos, 
             y especialistas en IA. Juntos, trabajamos arduamente para entregar productos excepcionales que no solo cumplen con las expectativas de nuestros clientes, 
             sino que también contribuyen positivamente a la comunidad tecnológica.
             </p>
         </div>
     </div>
   </div>
  )
}

export default AboutUs