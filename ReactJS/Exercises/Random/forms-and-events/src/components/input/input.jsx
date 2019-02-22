import React from 'react';

const Input = ({id, pattern, name, type, onChange, nameField }) => {
    return (
        <div className="ui container">
        <label className="ui label">{nameField}</label>
        <input
            id={id}
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