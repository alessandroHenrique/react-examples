import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todos';
import TodoList from './TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
