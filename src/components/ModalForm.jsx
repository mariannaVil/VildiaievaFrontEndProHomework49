import { Component } from 'react';
import './style.css';

export default class ModalForm extends Component {
  render() {
    const { handleSubmit, handleCancel, handleInputChange } = this.props;

    return (
      <div className='modal-wrapper'>
        <div className='modal'>
          <input type='text' className='title-input' placeholder='Title' name='title' onChange={handleInputChange} />
          <input type='text' className='message-input' placeholder='Message' name='message' onChange={handleInputChange} />
          <input type='url' className='url-input' placeholder='Url' name='url' onChange={handleInputChange} />
          <button type='submit' className='send-button' onClick={handleSubmit}>Send</button>
          <button type='button' className='cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
