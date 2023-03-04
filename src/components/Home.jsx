import React from 'react'
import { images } from '../constants'
import './Home.css';
import './Home.scss'
import { useState} from 'react';
import axios from 'axios';


const Home = () => {
  
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
   
    event.preventDefault();
    // handle form submission here
    const data={
      Name:name,
      Email:email,
      MNumber:mobileNumber,
      Description:description
    }
    axios.post('https://sheet.best/api/sheets/f431124e-9e40-4449-8177-2737d64263fb',data).then((response)=>{
      console.log(response);
      setName('');
      setEmail('');
      setMobileNumber('');
      setDescription('');
      setShowMessage(true);
    })
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images.house11} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={images.house10} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={images.office8} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={images.office11} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={images.office4} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container">

      <h4 className='tag1'>Complete</h4>
    <h3 className='tag2'>HOME</h3>
    <h3 className='tag3'>INTERIORS</h3>
    <h4 className='tag4'>At Unimaginable Price!</h4>
    <form onSubmit={handleSubmit} className="form-container">
          <h3>TALK TO A DESIGNER</h3>
          <div>
            
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required placeholder='Name'
            />
          </div>
          <div>
            
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required placeholder='Email'
            />
          </div>
          <div>
            
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              required placeholder='Contact Number'
            />
          </div>
          <div>
            
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required placeholder='Description'
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {showMessage && (
          <div className="message-container">
             <button className='close-button' onClick={handleCloseMessage}>X</button>
            <p className='p'>Thank you for getting in touch, we will get back to you as soon as possible!</p>
           
          </div>
        )}
      
    </div>
    
    </div>
  )
}


export default Home
