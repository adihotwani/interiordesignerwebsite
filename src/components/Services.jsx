import React from 'react';
import './Services.scss';
import { images } from '../constants';
const Services = () => {
  return (
    
    <div className="services-container" >
      <h4>Our Services</h4>
      <h3>SOME FEATURES THAT MADE US UNIQUE</h3>
      <h5>We understand that the choice for designing living space tends to be cumbersome, henceforth. At Dev Interiors, we guide our clients in each step from the first instance till the accomplishment of the project with seamless and stress-ridden experience.</h5>
      <ul className="services-list">
  <li className="service-item">
    <img src={images.service1} alt="Interior design and execution" />
    <h5>Interior design and execution</h5>
    <p>Complete designing of false ceiling, furniture, electric, paint</p>
  </li>
  <li className="service-item">
    <img src={images.service2} alt="Designing" />
    <h5>Designing</h5>
    <p>designing you interior furniture</p>
  </li>
  <li className="service-item">
    <img src={images.service3} alt="Furnitures" />
    <h5>Furnitures</h5>
    <p>Furniture designing and executions</p>
  </li>
  <li className="service-item">
    <img src={images.service4} alt="False ceiling" />
    <h5>False ceiling</h5>
    <p>designing beautiful ceilings and applying</p>
  </li>
  <li className="service-item">
    <img src={images.service5} alt="Modular Kitchen" />
    <h5>Modular Kitchen</h5>
    <p>designing and complete furnishing of kitchen</p>
  </li>
  <li className="service-item">
    <img src={images.service6} alt="Electrical Beautification" />
    <h5>Electrical Beautification</h5>
    <p>lighting, switches and all electrical designing</p>
  </li>
  <li className="service-item center-item">
    <img src={images.service7} alt="After Sales support" />
    <h5>After Sales support</h5>
    <p>If anything is not made properly we fix it in no time</p>
  </li>
</ul>

    </div>
  );
};

export default Services;
