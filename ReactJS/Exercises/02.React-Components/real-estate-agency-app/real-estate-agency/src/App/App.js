import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          streets: [],
          selectedStreetIdx: 0,
          selectedHouseIdx: 0,
          hasFetched: false
      }
  }
  render() {
    return <div className="App">House Agent</div>;
  }
}

export default App;
