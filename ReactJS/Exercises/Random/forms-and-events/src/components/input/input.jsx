import React from 'react';

const Input = ({ pattern, name, type, onChange, nameField }) => {
    return (
        <div className="ui container">
        <label className="ui label">{nameField}</label>
        <input
            className="ui input"
            type={type}
            name={name}
            pattern={pattern}
            value={name}
            onChange={onChange}
            required
        />
        </div>

    );
}

export default Input;