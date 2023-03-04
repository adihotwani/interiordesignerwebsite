import React, { useState } from "react";
import "./Contact.scss";
import { images } from "../constants";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // state to track form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    //console.log({ name, email, mobileNumber, description });
    const data = {
      Name: name,
      Email: email,
      MNumber: mobileNumber,
      Description: description,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/f431124e-9e40-4449-8177-2737d64263fb",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMobileNumber("");
        setDescription("");
        setFormSubmitted(true); // set form submission state to true
      });
  };

  return (
    <div>
      <h3 className="contact-header">Contact us</h3>

      <div className="contact-container">
        <div className="contact-images">
          <a href="https://www.instagram.com/dev_interiorsblr/">
            {" "}
            <img
              className="contact-image1 "
              src={images.instagram}
              alt="Example Image"
            />
          </a>
          <a href="tel:+917090090064">
            <img
              className="contact-image2 "
              src={images.phone}
              alt="Example Image"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=9206603084">
            <img
              className="contact-image3 "
              src={images.whatsapp}
              alt="Example Image"
            />
          </a>
        </div>

        {formSubmitted ? ( // render message if form is submitted
          <div className="contact-message">
            <h1>Thank you<br></br>for contacting us</h1>
            <p>we will reach back to you in a short time!</p>
            <button onClick={() => setFormSubmitted(false)}>X</button> {/* add a button to close the message */}
          </div>
        ) : ( // render form if form is not submitted
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                  maxLength="10"
                  required
                  placeholder="Contact Number"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                  placeholder="Message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;







