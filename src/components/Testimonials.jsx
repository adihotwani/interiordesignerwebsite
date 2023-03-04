import React, { useState, useEffect } from "react";
import './Testimonials.scss'
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const testimonials = [
    {
      name: "Manish Talreja",
      message:
        "The execution was taken with utmost care, we really loved the way he handled the work and made sure he integrated everything we asked.",
      image: require("../assets/house4.jpg")
    },
    {
      name: "Shyam Chabria",
      message:
        "Quality of work is outstanding. Took some time to finish but at the end of the day it was worth it. My wife and daughter were overwhelmed with the output. The 3D design and the actual output has a more then 95% match.",
      image: require("../assets/house11.jpg"),
    },
    {
      name: "Suniel Ratra",
      message: "The services were very professional and in line with the expectations. What stood out was the ability to adjust changes in the middle of the project.Highly recommended.",
      image: require("../assets/house12.jpeg"),
    },
    {
      name: "Anand Audio Video (Karnataka’s music label)",
      message: "Overall, I would highly recommend Dev Interiors to anyone looking for a talented and professional interior designer. They truly went above and beyond to create a space that reflects my company's values and has made a positive impact on our productivity and morale. Thank you for your great work!",
      image: require("../assets/office11.jpg"),
    },
    
  ];

  useEffect(() => {
    let intervalId = null;
    if (autoSwitch) {
      intervalId = setInterval(() => {
        setIndex((index + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [index, autoSwitch]);

  const handleNext = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const handleAutoSwitch = () => {
    setAutoSwitch(!autoSwitch);
  };

  return (
    <div className="testimonials">
      <h4>Our Testimonials</h4>
      <h3>What People Say About Us</h3>
      <img src={testimonials[index].image} alt={testimonials[index].name} />
      <p>
        {testimonials[index].message}
        <br />
        <br />
        <em>- {testimonials[index].name}</em>
      </p>
      <div>
        <button onClick={handleNext}>Next</button>
        
      </div>
    </div>
  );
};

export default Testimonials;
