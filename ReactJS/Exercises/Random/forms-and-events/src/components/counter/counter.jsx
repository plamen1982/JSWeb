import React, { Component } from 'react';

const DisplayCounter = (props) => (
    <div>    
        <div className="column docs-icon-set-column">
            <i aria-hidden="true" className="stopwatch big icon"></i>
            <span className="ui label">{props.counter}</span>
        </div>
    </div>
);

const Decrement = (props) => (
    <button className="ui button" onClick={props.decrement}>-</button>
);

const Increment = (props) => (
    <button className="ui button" onClick={props.increment}>+</button>
);

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialState,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    } 

    static getDerivedStateFromProps(props, state) {
        if(state.count !== state.initialState) {
            return {
                count: state.count,
            }
        }
        return {
            initalCounter: props.initalCounter
        }
    }

    render() {
        const { count } = this.state;
        return(
            <div className="ui container">
                <DisplayCounter counter={count} />
                <Decrement decrement={this.decrement}/>
                <Increment increment={this.increment} />
            </div>
        );
    }

    componentDidMount() {
        console.log('component Mounted!')
    }
}

export default Counter;

export {
    Increment,
    Decrement
}