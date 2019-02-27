import React, { Component } from "react";
import "./Register.css";

class Register extends Component {

    render() {
        const { handleSubmit, handleChange } = this.props;
        return (
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ivan Ivanov"
                        name="username"
                        value={this.value}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="ivan@gmail.com"
                        name="email"
                        value={this.value}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="******" 
                        name="password"
                        value={this.value}
                        onChange={handleChange}
                    />
                    <input type="submit" value="REGISTER" />
                </form>
            </div>
        );
    }
}

export default Register;
