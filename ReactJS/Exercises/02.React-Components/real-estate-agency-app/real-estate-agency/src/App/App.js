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

  componentDidMount() {
      fetch('http://localhost:9999/feed/street/all')
        .then(data => data.json())
        .then(data => {
            this.setState({
                streets: data.streets,
                hasFetched: true
            })
        })
  }

  render() {
    return <div className="App">
                {this.state.streets.map((street, index) => {
                    return <div className="streets">{index}: street</div>
                })}
            </div>;
  }
}

export default App;
