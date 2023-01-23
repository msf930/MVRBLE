import React from 'react';
import "../Styles/card.css";


const Card = ({name, price, image}) => {
        return (
            <div className='card tc bg-white dib br0 pa3 ma2 grow bw1 b--solid b--black shadow-5'>
                <img className='cardImg' alt='marble' src = {image}/>
                <div className='text'>  
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                </div>
                <div className='buy'>
                    <h1> BUY </h1>
                </div>
            </div>
        )
}

export default Card;