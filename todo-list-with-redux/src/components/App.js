import React, { Component } from 'react';
import AddTodoFormContainer from './AddTodoFormContainer';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodoFormContainer />
        <Todos />
      </div>
    );
  }
}

export default App;
