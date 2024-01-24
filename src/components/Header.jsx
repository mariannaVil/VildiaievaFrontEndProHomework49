import { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>Happy New Year</h1>
        <p className='textCongratulation'>
          Take a moment to reflect on how much you accomplished in 2023.
          There's no limit to what you can do in 2024!
        </p>
      </header>
    );
  }
}
