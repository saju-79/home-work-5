import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './all.css'
import Card from './Card';


const Bottles = ({bottleSpane}) => {

    const bottles = use(bottleSpane);
    const [card ,  setcard] =  useState([])


    const handelclickToCard = (bottle) =>{
        const newCard = [...card , bottle];
        setcard(newCard)
    }


    const handelremoveCard = (id)=>{
        
        console.log('remove the card ' , id)
           const remaningFiltar = card.filter(id  !== id)
           setcard(remaningFiltar)
    }
      
    return (
       
       <div className="">
                
             <h1>all bottles collection : {bottles.length}</h1>
             <h1>  add to caard = {card.length}</h1>
             <Card 
             handelremoveCard = {handelremoveCard}
             card ={card}></Card>
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