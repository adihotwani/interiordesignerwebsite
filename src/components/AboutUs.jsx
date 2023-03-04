import React from 'react'
import './AboutUs.scss'
import { images } from '../constants'
const AboutUs = () => {
  return (
    <div className="about-us">
      <h3>About Us</h3>
      <div className='div1'>
        <div  className='div2'>
          <p>Welcome to our interior design website!

            We are a team of passionate interior designers who believe that your home or office should be a reflection of your unique personality and style. Our mission is to help you transform your space into a functional and beautiful environment that truly feels like home.

            With years of experience in the industry, we have worked with a variety of clients, from homeowners to business owners, to create spaces that are both visually stunning and highly functional. </p>
            <img className='img1' src={images.office6} alt=''></img>
        </div>
        <div className='div2'>
        
        <p className='p2'>We understand the importance of good design and how it can positively impact your daily life.

Our design philosophy is centered around creating personalized and functional spaces that reflect our clients' unique tastes and needs. We believe that every space has the potential to be beautiful and we work closely with our clients to make their design dreams a reality.</p>

        </div>

        
      </div>

    </div>

  )
}

export default AboutUs
