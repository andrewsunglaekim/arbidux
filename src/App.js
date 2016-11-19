import React, { Component } from 'react';
import QuizContainer from './containers/Quiz'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizContainer size={parseInt(this.props.params.size, 10)}/>
      </div>
    );
  }
}

export default App;
