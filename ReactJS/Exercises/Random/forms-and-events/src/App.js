import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter/counter';
import './App.css';

let initialState = 10;

class App extends Component {
  render() {
    return (
      <Counter initialState={initialState}/>
    );
  }
}

setTimeout(() => {
  initialState = 20;
  ReactDOM.render(<Counter initialState={initialState}/>, document.getElementById('root'));
}, 2000);

export default App;
