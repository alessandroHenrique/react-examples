import React from 'react';
import PropTypes from 'prop-types';

class LetterForm extends React.Component {
  state = {
    text: ''
  }

  static propTypes = {
    handleSubmit: PropTypes.func
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      text: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.text)
    this.setState(() => ({
      text: ''
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleTextChange} value={this.state.text}></textarea>
        <button type="submit">Send Letter!</button>
      </form>
    );
  }
}

export default LetterForm;
