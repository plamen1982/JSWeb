import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    render() {
        const { counter } = this.state;
        return(
            <div className="ui container">
                <div className="column docs-icon-set-column">
                 <i aria-hidden="true" class="clock big icon"></i>
                    <span className="name">{counter}</span>
                </div>
                <button className="ui button">+</button>
                <button className="ui button">-</button>
            </div>

        );
    }
}

export default Counter;