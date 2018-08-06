import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0
  }

  handleIncrementButton = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecrementButton = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  handleResetButton = () => {
    this.setState((prevState) => ({
      counter: 0
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter {this.state.counter}</h1>
        <button onClick={this.handleIncrementButton}>+1</button>
        <button onClick={this.handleDecrementButton}>-1</button>
        <button onClick={this.handleResetButton}>Reset</button>
      </div>
    );
  }
}

export default Counter;
