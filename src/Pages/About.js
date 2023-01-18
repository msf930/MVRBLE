import React from "react";
import multiSet1 from "../Images/multiSet1.jpg";
import multiSet2 from "../Images/multiSet2.jpg";
import "../Styles/about.css";

  
const About = () => {
  return (
    <div>
      <div className="container-main">
        <div className="about-container1">
          <div className="text1-container">
          <img className="multiSet2" src={multiSet2} alt="marbles"/>
            <h2 className="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </h2>
          </div>
          
        </div>
        <div className="about-container2">
          <div className="text2-container">
            <h1 className="title1">
              ABOUT US
            </h1>
            <h2 className="body2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut   enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>Duis aute irure dolor in    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt   in   culpa qui officia deserunt mollit anim id est laborum."
            </h2>
          </div>
        </div>
      </div>  
    </div>
  );
};
  
export default About;