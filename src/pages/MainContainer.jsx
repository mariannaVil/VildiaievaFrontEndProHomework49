import { Component } from 'react';
import './styles.css';
import Card from '../components/Card';

export default class MainContainer extends Component {
  render() {
    const { cards, handleGenerateClick, handleCreateClick, handleDeleteClick } = this.props;

    return (
      <div className='main-wrapper'>
        <div className='buttons'>
          <button className='generate' onClick={handleGenerateClick}>Generate Congratulation</button>
          <button className='create' onClick={handleCreateClick}>Create New Congratulation</button>
        </div>
        <div className='main-field'>
          {Array.isArray(cards) && cards.map((card) => (
            <Card
              key={card.id}
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
}
