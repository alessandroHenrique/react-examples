import { ADD_TODO, TOGGLE_TODO } from '../actionTypes/todos';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todosReducer;
