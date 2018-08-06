import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
      text: 'Letter sent!'
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Write the letter content here!</ControlLabel>
          <FormControl componentClass="textarea" onChange={this.handleTextChange} value={this.state.text} />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Send Letter!</Button>
      </form>
    );
  }
}

export default LetterForm;
