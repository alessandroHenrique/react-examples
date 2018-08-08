import React from 'react';
import PropTypes from 'prop-types';

class addTodoForm extends React.Component {
  state = {
    text: ''
  }

  static propTypes = {
    handleAddTodo: PropTypes.func.isRequired
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      text: value
    }));
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input type="text" onChange={this.handleTextChange} />
        <button type="submit">Add todo!</button>
      </form>
    );
  }
}

export default addTodoForm;