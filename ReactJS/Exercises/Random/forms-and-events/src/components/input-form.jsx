import React from 'react';

const Input = ({ id, pattern, name, type }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            pattern={pattern}
            value={name}
            onChange={this.handleFormElementChange}
            required
    />
    );
}

export default Input;