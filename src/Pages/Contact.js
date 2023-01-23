import React from "react";
import contactSet from "../Images/contactSet.jpeg";
import "../Styles/contact.css";

const Contact = () => {
    return (
      <div>
        <div className="header">
          <img className="headerImg" src={contactSet} alt="marbles" />
          <h1 className="headerTxt"> Lorem Ipsum</h1>
        </div>
        <div className="inputContainer">
          <div className="nameContainer">
            <input className="input first" type="text" placeholder="First"/>
            <input className="input last" type="text" placeholder="Last"/>
          </div>
          <input className="input email" type="text" placeholder="Email"/>
          <input className="input phone" type="text" placeholder="Phone Number"/>
          <textarea className="input message" placeholder="Message"></textarea>
          <input className="submit" type="submit"></input>
        </div>
      </div>
    );
  };
    
  export default Contact;