import React, { Component } from "react";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Header from "./Header/Header";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className="App">
                {/* TODO */}
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/register" render={() => <Register handleSubmit={this.handleSubmit} /> } exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/create" component={Create} exact/>
                </Switch>
            </div>
        );
    }
}

export default App;
