
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div className='page-container'>
        <div className='content-wrap'>
            <NavBar/>
            <Routes>
              <Route path='/'element={<Home/>} />
              <Route path='/Shop'element={<Shop/>} />
              <Route path='/About'element={<About/>} />
              <Route path='/Contact'element={<Contact/>} />
            </Routes>
        </div>
         <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
