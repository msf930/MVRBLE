import React from "react";
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from "react";
import multiSet3 from "../Images/multiSet3.jpg";
import pair from "../Images/pair.jpg";
import "../Styles/home.css";

const Home = () => {
  const { ref: myRef1, inView: myElementIsVisible1} = useInView();
  const { ref: myRef2, inView: myElementIsVisible2} = useInView();
  console.log("myElementIsVisible1", myElementIsVisible1);
  return (
    <div>
      <div className="container_home">
        <div className="container_home1">
          <h1 className="m">M</h1>
          <h1 className="v">V</h1>
          <h1 className="rble">RBLE</h1>
          <img className="mutliSet3" src={multiSet3} alt="marbles"/>
          <a className="shopBtn" href="/Shop">SHOP NOW</a>
        </div>
        <div>
        </div>
        <div ref={myRef1} className={"${space1 actor1} ${myElementIsVisible1 ? space1 animateActor1 :''}"}> 
          <h1 className="space1_txt1"> Lorem ipsum </h1>
          <h2 className="space1_txt2"> Lorem ipsum dolor sit amet</h2>
        </div>
        <div ref={myRef2} className={"${container_home2 actor2} ${myElementIsVisible2 ? container_home2 animateActor2 :''}"}>
          <div className="home2_container1">
            <a className="shopBtn2" href="/Shop">New</a>
            <img className="pair" src={pair} alt="marbles"/>
          </div>
          <div className="home2_container2">
            <h2 className="home2_txt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
          </div>
          
        </div>
        <div className="space2"></div>
      </div>
    </div>
  );
};
  
export default Home;