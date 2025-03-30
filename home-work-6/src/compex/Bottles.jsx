import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './all.css'


const Bottles = ({bottleSpane}) => {

    const bottles = use(bottleSpane);
    const [card ,  setcard] =  useState([])


    const handelclickToCard = (bottle) =>{
        const newCard = [...card , bottle];
        setcard(newCard)
    }
      
    return (
       
       <div className="">
        add to caard = {card.length}
             <h1>all bottles collection : {bottles.length}</h1>
        <div className="card-a">

        {
            
            bottles.map(bottle => <Bottle
                key={bottle.id}
                handelclickToCard = {handelclickToCard}
                bottle = { bottle}></Bottle> )
            }
        </div>
            </div>
            );
        };
        
        export default Bottles;