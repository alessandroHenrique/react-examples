import { ADD_TODO, TOGGLE_TODO } from '../actionTypes/todos';
import uuid from 'uuid';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: uuid()
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});
