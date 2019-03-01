import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    username: null,
    email: null,
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
    const { username, password } = this.state;
    const user = {
        username,
        password,
    }
    fetch("http://localhost:9999/auth/signin", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
}
    render() {
        return (
            <div class="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="usernameLogin">Username</label>
                    <input
                        type="text"
                        id="usernameLogin"
                        placeholder="Ivan Ivanov"
                        onChange={this.handleChange}
                        name="username"
                    />
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                        type="password"
                        id="passwordLogin"
                        placeholder="******"
                        onChange={this.handleChange}
                        name="password"
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;
