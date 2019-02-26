import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Router is deployed at the most upper part of the app

const HomeComponent = () => (<h1>Home</h1>);
const AboutComponent = () => (<h1>About</h1>);
const ContactComponent = () => (<h1>Contact</h1>);

const AppWrapper = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeComponent} exact/>
                <Route path="/about" component={AboutComponent} exact/>
                <Route path="/contact" component={ContactComponent} exact/>
            </Switch>
        </Router>
    );
}
ReactDOM.render(
    <AppWrapper />
    ,document.getElementById('root'));