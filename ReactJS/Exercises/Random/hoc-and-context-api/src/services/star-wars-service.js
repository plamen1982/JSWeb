class StarWarsService {
    constructor() {
        this.baseUrl = 'https://swapi.co/api';
        this.charactersUrl = `${this.baseUrl}/people`;
    }

    getStarWarsCharacters = (page = 1) => {
        return fetch(`${this.charactersUrl}?page=${page}`)
            .then(response => response.json())
            .then(data => data.results);
    }
}

export default StarWarsService;