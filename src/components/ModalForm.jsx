import React from 'react';

const ModalForm = ({ handleSubmit, handleCancel, handleInputChange }) => {
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
    )  
}

export default ModalForm;
