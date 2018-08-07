import { ADD_TODO, REMOVE_TODO } from '../actionTypes/todos';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});
