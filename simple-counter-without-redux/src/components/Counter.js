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
        <h1>Counter</h1>
        <button>+1</button>
        <button>-1</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Counter;
