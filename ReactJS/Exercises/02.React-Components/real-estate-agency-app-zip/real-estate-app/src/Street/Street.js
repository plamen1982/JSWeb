import React from 'react';
import './Street.css';

const Street = (props) => (
    <div className = "Street" onMouseEnter={() => props.streetHoverEvent(props.id)}>
        <p className="street-info">{props.street.location}</p>
    </div>
) 

export default Street;