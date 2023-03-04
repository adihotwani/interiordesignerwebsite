import React from 'react';
import './App.scss';


import Contact from './components/Contact';
import Home from './components/Home';
import Navabar from './components/Navbar';
import Services from './components/Services'
import Portfolio from './components/Portfolio';

import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs'


import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  
    const images = [
      require('./assets/office1.jpg'),
      require('./assets/office2.jpg'),
      require('./assets/office3.jpg'),
      require('./assets/office4.jpg'),
      
      require('./assets/office6.jpg'),
      require('./assets/office7.jpg'),
      require('./assets/office8.jpg'),
      require('./assets/office9.jpg'),
      require('./assets/office10.jpg'),
      require('./assets/office11.jpg'),
     
    ];
    const houseimges=[
      require('./assets/house1.jpg'),
      require('./assets/house2.jpg'),
      require('./assets/house3.jpg'),
      require('./assets/house4.jpg'),
      require('./assets/house5.jpg'),
      require('./assets/house6.jpg'),
      require('./assets/house7.jpg'),
      require('./assets/house8.jpg'),
     
      require('./assets/house10.jpg'),
      require('./assets/house11.jpg'),
    ]
  return (
    <div className='App'>
    <BrowserRouter >
    <Navabar />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio images={images} houseimges={houseimges} />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    
    <section id="contact">
      <Contact />
    </section>
  </BrowserRouter>
  </div>

    

    
  );
}

export default App;
