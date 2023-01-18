import React from 'react';
import Card from './Card';


const CardList = ({marbles}) => {

    return(
        <div>
           {marbles.map((user, i) => {
                 return (
                    <Card 
                        key={i} 
                        id= {marbles[i].id} 
                        name= {marbles[i].name} 
                        price= {marbles[i].price}
                    />
                 );
             })}
        </div>
    );
}

export default CardList;