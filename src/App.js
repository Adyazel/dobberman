import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main_body } from './components/Microcomponents/Main_body';
import { LoginRegister } from './components/Microcomponents/LoginRegister';
import { PageArticulos } from './components/Microcomponents/PageArticulos';
import { Trabajos } from './components/Microcomponents/Trabajos';
import AboutUs from './components/Microcomponents/AboutUs';
import Loading from './components/Loading';
import Contacto from './components/Microcomponents/Contacto';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import User from './components/Microcomponents/User';

function App() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Iniciar la carga al cambiar de ruta
    setLoading(true);

    // Simular carga o esperar la carga real
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajustar tiempo de carga según sea necesario

    return () => clearTimeout(timer);
  }, [location]); // Depender de la ubicación para reaccionar a los cambios de ruta

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='landing'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main_body />} />
        <Route path='/home' element={<Main_body />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/account' element={<LoginRegister />} />
        <Route path='/articles' element={<PageArticulos />} />
        <Route path='/works' element={<Trabajos />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path='/Acount' element={<LoginRegister/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
