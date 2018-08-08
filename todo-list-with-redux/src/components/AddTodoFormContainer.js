import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import addTodoForm from './AddTodoForm';

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(addTodoForm);
