import React, { Component } from 'react';
import "./App.css";
const { Provider, Consumer } = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        inc: () => {
          this.setState({ number: this.state.number + 1 });
        }
        }} >
        {this.props.children}
      </Provider>
    );
  }
}

const MrGreen = () => (
  <Consumer>
    {
      ({ state: { number }}) => (<div className="green">{ number }</div>)
    }
  </Consumer>
);

const MrBlue = () => (
  <div className="blue">
    <Consumer>
      {
        ({ inc }) => {
          return (<button onClick={ inc }>Increase the number</button>);
        }
      }
    </Consumer>
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
              (context) => <div>{context.state.number}</div>
            }
          </Consumer>
          <MrBlue/>
        </div>
      </AppProvider>
    );
  }
}

export default App;
