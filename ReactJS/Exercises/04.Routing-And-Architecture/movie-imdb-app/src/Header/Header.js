import React, { Component } from "react";
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header>
                <a href="#default" class="logo">
                    Interactive IMDB
                </a>
                <div class="header-right">
                    <a href="/">Home</a>
                    <span>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </span>
                </div>
            </header>
        );
    }
}

export default Header;