import React from "react";
import "tachyons";
import Card from "../Components/Card";
import { marbles } from "../marbles";
import "../Styles/shop.css";
import clearGroup3Crop from "../Images/clearGroup3Crop.jpg"

const Shop = () => {
  return (
    <div>
      <div className="header">
        <img className="header_img" src={clearGroup3Crop} alt="marble" ></img>
        <h1 className="header_txt">
        Lorem ipsum dolor
        </h1>
      </div>
      <div className="cards">
      {marbles.map(marble => {
      return <Card name={marble.name} price={marble.price} image={marble.image}/>
        })
        }
      </div>
    </div>
  );
};
  
export default Shop;