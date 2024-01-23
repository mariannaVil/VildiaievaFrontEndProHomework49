import React from 'react';
import './style.css';

const Card = ({ title, message, imgURL, handleDeleteClick }) => {
    return (
        <div className='card-wrapper'>
            <div className='card'>
                <p className='title'>{title}</p>
                <p className='message'>{message}</p>
                <p className='url'>{imgURL}</p>
                <button className='delete' onClick={handleDeleteClick}>Delete</button>
    </div>

        </div>
        
    )
}

export default Card;
