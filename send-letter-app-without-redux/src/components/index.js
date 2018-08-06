import React from 'react';
import LetterForm from './LetterForm';

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
        <LetterForm handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default MainPage
