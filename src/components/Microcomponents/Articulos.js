import React from 'react'
import './Articulos.css'
export const Articulos = () => {

    
    let arti = [
        ['GitHub Copilot: Best Practices for Prompt Crafting','septiembre 21, 2002','Este artículo podría abordar cómo los desarrolladores pueden aprovechar al máximo GitHub Copilot, una herramienta de asistencia de codificación AI, ofreciendo consejos y estrategias para formular solicitudes efectivas que mejoren la calidad y relevancia de las sugerencias de código generadas por la AI.'],
        ['Git: The Definitive Guide','enero 15, 2020','Un artículo que ofrece una visión exhaustiva sobre Git, el sistema de control de versiones distribuido ampliamente utilizado por desarrolladores en todo el mundo. Podría cubrir desde los conceptos básicos hasta técnicas avanzadas, incluyendo mejores prácticas para la gestión de ramas, fusiones y resolución de conflictos, así como consejos para optimizar el flujo de trabajo en proyectos de desarrollo de software.'],
        ['Docker Essentials: A Practical Introduction','mayo 11,2022','Este artículo posiblemente se centra en Docker, una plataforma de contenedores que permite a los desarrolladores empaquetar aplicaciones en contenedores, facilitando así su despliegue y escalabilidad. Puede incluir una introducción a los conceptos fundamentales de los contenedores, cómo crear y gestionar imágenes de Docker, y cómo utilizar Docker Compose para orquestar múltiples contenedores en entornos de desarrollo y producción.'],
        ['Introduction to Kubernetes for Developers','febrero 2, 2020','Un artículo dirigido a desarrolladores que buscan familiarizarse con Kubernetes, un sistema de orquestación de contenedores de código abierto que automatiza la implementación, escalado y gestión de aplicaciones contenerizadas. Podría abarcar los principios básicos de Kubernetes, cómo configurar y desplegar aplicaciones en un clúster de Kubernetes, y cómo utilizar las características de Kubernetes para lograr una alta disponibilidad y escalabilidad de las aplicaciones.'],
        ['IEEE 829 Test Documentation for Quality Assurance','septiembre 4, 2019','Este artículo se enfocaría en la norma IEEE 829, que proporciona un marco para la documentación de las actividades de pruebas en proyectos de software, asegurando que los procesos de prueba sean sistemáticos, rastreables y efectivos. Podría describir los diferentes documentos que forman parte de la norma, como la especificación del plan de pruebas, la especificación de diseño de pruebas, la especificación de casos de prueba, y los informes de incidentes, destacando su importancia en el aseguramiento de la calidad del software']
    ]

    console.log(arti);

  return (
    <div>
    {
        arti.map((art, ind) => {
            return (
            <div key={ind} className='Articulo_class'>
                <cite>{art[1]}</cite>
                <h1>{art[0]}</h1>
                <p>{art[2]}</p>
                <a href='###'>Leer articulo</a>
            </div>
            );
        })


    }
    
    </div>
  )
}
