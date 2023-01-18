import React from "react";
import "tachyons";
import Card from "../Components/Card";
import { marbles } from "../marbles";
import "../Styles/shop.css";
import clearGroup3Crop from "../Images/clearGroup3Crop.jpg"

import marble1 from "../Images/Single/marble1.jpg";
import marble2 from "../Images/Single/marble2.jpg";
import marble3 from "../Images/Single/marble3.jpg";
import marble4 from "../Images/Single/marble4.jpg";
import marble5 from "../Images/Single/marble5.jpg";
import marble6 from "../Images/Single/marble6.jpg";
import marble7 from "../Images/Single/marble7.jpg";
import marble8 from "../Images/Single/marble8.jpg";
import marble9 from "../Images/Single/marble9.jpg";
import marble10 from "../Images/Single/marble10.jpg";
import marble11 from "../Images/Single/marble11.jpg";
import marble12 from "../Images/Single/marble12.jpg";
import marble13 from "../Images/Single/marble13.jpg";
import marble14 from "../Images/Single/marble14.jpg";
import marble15 from "../Images/Single/marble15.jpg";
import marble16 from "../Images/Single/marble16.jpg";
  
const Shop = () => {
  return (
    <div>
      <div className="header">
        <img className="header_img" src={clearGroup3Crop}></img>
        <h1 className="header_txt">
        Lorem ipsum dolor
        </h1>
      </div>
      <div className="cards">
      {marbles.map(marble => {
      return <Card name={marble.name} price={marble.price} image={marble.image}/>
        })
        }
        {/* <Card  name={marbles[0].name} price={marbles[0].price} image={marbles[0].image}/>
        <Card  name={marbles[1].name} price={marbles[1].price} image={marble2}/>
        <Card  name={marbles[2].name} price={marbles[2].price} image={marble3}/>
        <Card  name={marbles[3].name} price={marbles[3].price} image={marble4}/>
        <Card  name={marbles[4].name} price={marbles[4].price} image={marble5}/>
        <Card  name={marbles[5].name} price={marbles[5].price} image={marble6}/>
        <Card  name={marbles[6].name} price={marbles[6].price} image={marble7}/>
        <Card  name={marbles[7].name} price={marbles[7].price} image={marble8}/>
        <Card  name={marbles[8].name} price={marbles[8].price} image={marble9}/>
        <Card  name={marbles[9].name} price={marbles[9].price} image={marble10}/>
        <Card  name={marbles[10].name} price={marbles[10].price} image={marble11}/>
        <Card  name={marbles[11].name} price={marbles[11].price} image={marble12}/>
        <Card  name={marbles[12].name} price={marbles[12].price} image={marble13}/>
        <Card  name={marbles[13].name} price={marbles[13].price} image={marble14}/>
        <Card  name={marbles[14].name} price={marbles[14].price} image={marble15}/>
        <Card  name={marbles[15].name} price={marbles[15].price} image={marble16}/> */}
      </div>
    </div>
  );
};
  
export default Shop;