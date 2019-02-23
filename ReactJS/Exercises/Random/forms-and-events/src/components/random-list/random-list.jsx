import React from 'react';

const RandomList = ({ randomList }) => (
    <ul>
        { randomList.map((item, idx) => <li key={idx}>{item.name}</li>) }
    </ul>
);

export default RandomList;