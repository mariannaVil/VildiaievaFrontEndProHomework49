import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './pages/MainContainer';
import ModalForm from './components/ModalForm';
import Card from './components/Card';
import { creativeCards } from './api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedCard: null,
      isModalOpen: false,
      formInput: { title: '', message: '' },
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchCards();
  }
  
  fetchCards = async () => {
    try {
      this.setState({ loading: true });
      const response = await creativeCards.get();
      this.setState({ cards: response.data, error: null });
    } catch (error) {
      this.setState({ error: 'Error fetching cards' });
      console.error('Error fetching cards:', error);
    } finally {
      this.setState({ loading: false });
    }
  };  

  handleGenerateClick = () => {
    const { cards } = this.state;

    if (cards && cards.length) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const randomCard = cards[randomIndex];
      this.setState({ selectedCard: randomCard });
    }
  };

  handleCreateClick = () => {
    this.setState({ isModalOpen: true });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  handleFormSubmit = async () => {
    const { formInput } = this.state;

    try {
      await creativeCards.post({ ...formInput, imgURL: formInput.url });
      this.fetchCards();
      this.setState({ isModalOpen: false });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formInput: {
        ...prevState.formInput,
        [name]: value,
      },
    }));
  };

  handleDeleteClick = async (id) => {
    try {
      await creativeCards.delete(id);
      console.log('Deleted successfully');
      this.fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  render() {
    const { cards, selectedCard, isModalOpen } = this.state;

    return (
      <>
        <Header />
        <MainContainer
          handleGenerateClick={this.handleGenerateClick}
          handleCreateClick={this.handleCreateClick}
          handleDeleteClick={this.handleDeleteClick}
          cards={cards}
        />
        {isModalOpen && (
          <ModalForm
            handleCancel={this.handleCancel}
            handleSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        )}
        {selectedCard && (
          <Card
            id={selectedCard.id}
            title={selectedCard.title}
            message={selectedCard.message}
            imgURL={selectedCard.imgURL}
          />
        )}
        {Array.isArray(cards) && cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            message={card.message}
            imgURL={card.imgURL}
            handleDeleteClick={() => this.handleDeleteClick(card.id)}
          />
        ))}
      </>
    );
  }
}
