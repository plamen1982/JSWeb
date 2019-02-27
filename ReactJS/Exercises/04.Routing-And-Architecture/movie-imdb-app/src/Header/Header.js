import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header>
                <Link to="/" className="logo">Interactive IMDB</Link>
                <div className="header-right">
                        <Link to="/">Home</Link>
                    <span>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </header>
        );
    }
}

export default Header;