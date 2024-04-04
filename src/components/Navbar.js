import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("refreshed") !== "true") {
        localStorage.setItem("refreshed", "true");
         // Redirige a la página de inicio o cualquier otra página deseada
    } else {
        localStorage.removeItem("refreshed"); // Limpia la marca para futuras recargas
    }
}, [navigate]); 

    let Nombre_min_web = "Dobermann soft";
    const [nombreUsuario, setnu] = useState(localStorage.getItem("nombreus"));

    const cerrarSesion = () => {
        localStorage.removeItem("nombreus");
        setnu(null);
        navigate("/Acount");
         // Opcionalmente, recargar después de cerrar sesión
    };

    const Links = [
        {texto: "Inicio", href:"/"},
        {texto: "Nosotros", href:"/aboutus"},
        {texto: "Articulos", href:"/articles"},
        {texto: "Trabajos", href:"/works"},
        {texto: "Contacto", href:"/contact"},
        {texto: "Cuenta", href:"/Acount"},
    ];

    if (nombreUsuario) {
        Links[Links.length - 1] = {texto: nombreUsuario, href:"/user"};
    }

    return (
        <nav className='Navbar'>
            <h1><Link to="/">{Nombre_min_web}</Link></h1>
            <ul>
                {Links.map((link, indice) => (
                    <li key={indice}><Link to={link.href}>{link.texto}</Link></li>
                ))}
                {nombreUsuario && (
                    <li onClick={cerrarSesion}><Link to="/login">Cerrar sesión</Link></li>
                )}
            </ul>
        </nav>
    );
};
