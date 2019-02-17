import React, { Component } from 'react';
import './Street.css';

class Street extends Component {
    render() {
        return (
            <div className = "Street">
                <p className="street-info">{this.props.street.location}</p>
            </div>
        );
    }
}

export default Street;