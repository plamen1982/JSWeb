import React, { Component } from 'react';

const DisplayCounter = (props) => (
    <div>    
        <div className="column docs-icon-set-column">
            <i aria-hidden="true" className="clock big icon"></i>
            <span className="ui label">{props.counter}</span>
        </div>
    </div>

);

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        let { counter } = this.state;
        this.setState({
            counter: this.state.counter - 1
        })
    } 

    render() {
        const { counter } = this.state;
        return(
            <div className="ui container">
                <DisplayCounter counter={counter} />
                <button className="ui button" onClick={this.decrement}>-</button>
                <button className="ui button" onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;