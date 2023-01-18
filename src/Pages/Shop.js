import React from "react";
import "tachyons";
import CardList from "../Components/CardList"
import { marbles } from "../marbles";
import "../Styles/shop.css";
import clearGroup3Crop from "../Images/clearGroup3Crop.jpg"
import SearchBox from "../Components/SearchBox";


class Shop extends React.Component {
  constructor(){
    super()
    this.state = {
      marbles: marbles,
      searchfield: ""
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }
  render(){
    const filteredMarbles = this.state.marbles.filter(marbles =>{
      return marbles.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
        <div className="header">
          <img className="header_img" src={clearGroup3Crop} alt="marble" ></img>
          <h1 className="header_txt">
          Lorem ipsum dolor
          </h1>
        </div>
        <div className="filter">
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <div className="cardList">
          <CardList marbles={filteredMarbles}/>
        </div>
      </div>
    );
  }
};
  
export default Shop;