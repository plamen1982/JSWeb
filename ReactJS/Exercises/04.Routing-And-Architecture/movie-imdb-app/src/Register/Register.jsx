import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
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
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ivan Ivanov"
                        name="username"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="ivan@gmail.com"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="******" 
                        name="password"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="REGISTER" />
                </form>
            </div>
        );
    }
}

export default Register;
