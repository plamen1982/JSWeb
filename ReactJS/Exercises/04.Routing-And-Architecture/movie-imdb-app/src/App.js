import React, { Component } from "react";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Header from "./Header/Header";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {

    state = {
        username: null,
        email:null,
        password: null,
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        const user = {
            username,
            password,
            email
        }
        fetch("http://localhost:9999/auth/signup", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
    }

    render() {
        return (
            <div className="App">
                {/* TODO */}
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route exact path="/register" render={
                        () => <Register 
                                    handleSubmit={this.handleSubmit} 
                                    handleChange={this.handleChange}
                        /> } 
                    />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/create" component={Create} />
                </Switch>
            </div>
        );
    }
}

export default App;
