import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './pages/MainContainer';
import ModalForm from './components/ModalForm';
import Card from './components/Card';
import { creativeCards } from './api';

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInput, setFormInput] = useState({ title: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await creativeCards.get();
        setCards(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching cards');
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCards();
  }, []);

  const handleGenerateClick = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    setSelectedCard(randomCard);
  };
  
  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async () => {
    try {
      await creativeCards.post({ ...formInput, imgURL: formInput.url });
      const updatedCards = await creativeCards.get();
      setCards(updatedCards.data);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  
  const handleDeleteClick = async (id) => {
    try {
      await creativeCards.delete(id);
      console.log('Deleted successfully');
  
      const updatedCards = await creativeCards.get();
      setCards(updatedCards.data);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };
  
  return (
    <>
      <Header />
      <MainContainer
        handleGenerateClick={handleGenerateClick}
        handleCreateClick={handleCreateClick}
        handleDeleteClick={handleDeleteClick}
        cards={cards}
      />
      {isModalOpen && (
        <ModalForm
          handleCancel={handleCancel}
          handleSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )}
      {selectedCard && <Card id={selectedCard.id} title={selectedCard.title} message={selectedCard.message} imgURL={selectedCard.imgURL} />}
      {cards.map((card) => (
        <Card id={card.id} 
          title={card.title} 
          message={card.message} 
          imgURL={card.imgURL} 
          handleDeleteClick={() => handleDeleteClick(card.id)}
          
        />
      ))}
    </>
  );
};

export default App;
