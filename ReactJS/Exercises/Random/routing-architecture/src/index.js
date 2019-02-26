import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Router is deployed at the most upper part of the app

const HomeComponent = () => (<h1>Home</h1>)

const AppWrapper = () => {
    return (
        <Router>
            <Route path="/" component={HomeComponent} />
        </Router>
    );
}
ReactDOM.render(
    <AppWrapper />
    , document.getElementById('root'));