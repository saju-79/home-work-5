import React from 'react';
import './all.css'

const Bottle = ({bottle , handelclickToCard}) => {
    // console.log(bottle)
    const {name ,img , price , stock} = bottle;
    return (
      
       
            
          <div className="card-c">
          <img className='card-b' src={img} alt="" />
          <h1>{name}</h1> 
          <p> price:${price}</p>
          <p > stock :{stock} reaminding</p>
          <button onClick={() => handelclickToCard(bottle)} className='button-color'>Buy Now</button>
          </div>
      
    );
};

export default Bottle;