import React from 'react';
import Bottle from './Bottle';
import './all.css'

const Card = ({card ,handelremoveCard}) => {
 
    return (
        <div className='choice-card-2'>
            {
                card.map(bottle =>
                    <div >
                        <img className='choice-card-1' src={bottle.img} alt="" />
                        <button onClick={() => handelremoveCard(bottle)} className='delete'>Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default Card;