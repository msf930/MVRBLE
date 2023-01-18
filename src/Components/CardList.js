import React from 'react';
import Card from './Card';
import "../Styles/card.css";


const CardList = ({marbles}) => {

    return(
        <div className='cardList'>
           {marbles.map((marble, i) => {
                 return (
                    <Card 
                        key={i}
                        name= {marbles[i].name} 
                        price= {marbles[i].price}
                        image={marbles[i].image}
                    />
                 );
             })}
        </div>
    );
}

export default CardList;