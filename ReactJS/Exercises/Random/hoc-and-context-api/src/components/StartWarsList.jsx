import React from 'react';
import StartWarsService from '../services/star-wars-service';
import withDataFromService from "./hocs/with-data-from-services";

const StarWarsList = (props) => {
    const { data, error } = props;

    if(!data.length) {
        return null;
    }

    if(error) {
        return <span>Something went wrong!</span>;
    }

    return(
        <ul>
            {
                data.map(charackter => (
                    <li key={charackter.url}>Name: {charackter.name}</li>
                ))
            }
        </ul>
    );
}

export default withDataFromService(StarWarsList, [], new StartWarsService().getStarWarsCharacters);