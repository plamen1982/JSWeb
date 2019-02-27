import React, { Component } from 'react';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';
import { Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
         { /* TODO */ }
         <Route path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/create" component={Create} />
         <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
