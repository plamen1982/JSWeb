import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WelcomeStranger = () => (
    <h1>Welcome, stranger!</h1>
);

const HelloDearFellow = () => (
    <h2>Hello from dear fellow!</h2>
);

const ComponentBlender = () => (
    <div>
        <WelcomeStranger />
        <HelloDearFellow />
    </div>
);


ReactDOM.render(<ComponentBlender />, document.getElementById('root'));


