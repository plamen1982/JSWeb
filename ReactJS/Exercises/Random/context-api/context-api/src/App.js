import React, { Component } from 'react';
import "./App.css";
const { Provider, Consumer } = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
  }

  render() {
    return (
      <Provider value={this.state} >
        {this.props.children}
      </Provider>
    );
  }
}

const MrGreen = () => (
  <Consumer>
    {
      ({ number }) => (<div className="green">{number}</div>)
    }
  </Consumer>
);

const MrBlue = () => (
  <div className="blue">
    <MrGreen />
  </div>
);

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="red">
          <Consumer>
            {
              ({ number }) => <div>{number}</div>
            }
          </Consumer>
          <MrBlue/>
        </div>
      </AppProvider>
    );
  }
}

export default App;
