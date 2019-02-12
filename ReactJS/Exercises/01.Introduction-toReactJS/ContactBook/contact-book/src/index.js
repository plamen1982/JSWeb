import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WelcomeStranger = () => (
    <h1>Welcome, stranger!</h1>
);

const HelloDearFellow = ({moneyOfTheStranger}) => (
    <div>
        <h2>Hello, dear fellow!</h2>
        <h3>I have some money to spend. Exactly ${moneyOfTheStranger}</h3>
    </div>
);

const ComponentBlender = () => (
    <div>
        <WelcomeStranger />
        <HelloDearFellow moneyOfTheStranger={5 * 80} />
    </div>
);


ReactDOM.render(<ComponentBlender />, document.getElementById('root'));


