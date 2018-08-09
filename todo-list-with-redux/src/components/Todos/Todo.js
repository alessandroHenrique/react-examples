import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, toggleTodo }) => (
  <li
    onClick={toggleTodo}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodo: PropTypes.func
};

export default Todo;
