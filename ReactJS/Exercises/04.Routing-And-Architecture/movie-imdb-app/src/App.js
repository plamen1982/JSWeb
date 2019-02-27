import React, { Component } from "react";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Header from "./Header/Header";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* TODO */}
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/create" component={Create} exact/>
                    <Route path="/register" component={Register} exact/>
                </Switch>
            </div>
        );
    }
}

export default App;
