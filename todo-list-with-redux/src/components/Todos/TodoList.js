import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func
};

export default TodoList;
