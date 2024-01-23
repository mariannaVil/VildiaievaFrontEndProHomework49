import React from 'react';
import './styles.css';
import Card from '../components/Card';
import { creativeCards } from '../api';

const MainContainer = ({ cards , handleGenerateClick, handleCreateClick, handleDeleteClick }) => {
 
    return (
      <div className='main-wrapper'>
        <div className='buttons'>
          <button className='generate' onClick={handleGenerateClick}>Generate Congratulation</button>
          <button className='create' onClick={handleCreateClick}>Create New Congratulation</button>
        </div>
        <div className='main-field'>
          {Array.isArray(cards) && cards.map((card) => (
      <Card
        id={card.id}
        title={card.title}
        message={card.message}
        imgURL={card.imgURL}
        handleDeleteClick={() => handleDeleteClick(card.id)}
      />
    ))}
        </div>
      </div>
    );
  }  

export default MainContainer;
