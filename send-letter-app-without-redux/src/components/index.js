import React from 'react';
import LetterForm from './LetterForm';
import Letter from './Letter';

class MainPage extends React.Component {
  state = {
    text: ''
  }

  handleSubmit = (newText) => {
    this.setState(() => ({
      text: newText
    }));
  }

  render() {
    return (
      <div>
        <LetterForm handleSubmit={this.handleSubmit} />
        <Letter text={this.state.text} />
      </div>
    );
  }
}

export default MainPage
