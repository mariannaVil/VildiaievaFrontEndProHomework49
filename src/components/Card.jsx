import { Component } from 'react';
import './style.css';

export default class Card extends Component {
  render() {
    const { title, message, imgURL, handleDeleteClick } = this.props;

    return (
      <div className='card-wrapper'>
        <div className='card'>
          <p className='title'>{title}</p>
          <p className='message'>{message}</p>
          <p className='url'>{imgURL}</p>
          <button className='delete' onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
