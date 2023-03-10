
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React from 'react'
import './Portfolio.scss'

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      
      <div className='row'>
      <h3>Portfolio</h3>
        <div>
          <h4>Offices</h4>
          <div className="card">
      <div className="card-body">
        <div className="row">
          {props.images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <Zoom>
              <img src={image} alt={`Image ${index}`} className="img-fluid" />
              </Zoom>
              
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
        <div>
          <h4>Houses</h4>
          <div className="card">
      <div className="card-body">
        <div className="row">
          {props.houseimges.map((house, index) => (
            <div className="col-md-4" key={index}>
              <Zoom>
              <img src={house} alt={`Image ${index}`} className="img-fluid" />
              </Zoom>
            
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>

      </div>
      
    
    </div>
  )
}

export default Portfolio