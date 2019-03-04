import React, { Component } from 'react';
import StartWarsService from '../services/star-wars-service';

class BookList extends Component {
    constructor(props) {
        super(props);

        //creating new instanse from the class charactersService();
        this.service = new StartWarsService();

        this.state = {
            characters: [],
            error: '',
        }
    }
    //add all side effects inside componentDidMount, side effect is functionality
    // that is not releted to rendering, more offen is connected with fetching data, making some animations
    async componentDidMount() {
        try {
            const characters = await this.service.getStarWarsCharacters();

            this.setState({ characters });
        } catch(error) {
            this.setState({ error });
        }
    }

    render() {
        const { characters, error } = this.state;

        if(!characters.length) {
            return null;
        }

        if(error) {
            return <span>Something went wrong!</span>;
        }

        return(
            <ul>
                {
                    characters.map(charackter => (
                        <li key={charackter.url}>Name: {charackter.name}</li>
                    ))
                }
            </ul>
        );
    }
}

export default BookList;