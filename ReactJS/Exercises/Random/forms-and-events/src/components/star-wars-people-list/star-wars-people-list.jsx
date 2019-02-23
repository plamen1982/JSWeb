import React, { Component } from 'react';
import RandomList from '../random-list/random-list';

class StarWarsPeopleList extends Component {
    state = {
        people: [],
        isLoading: true,
        error: false
    }

    render() {
        const { isLoading, people } = this.state;
        return (
            <div>
                {
                    isLoading ? <div>Loading...</div> : <div><RandomList randomList={people}/></div>
                }
            </div>
        )
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => { 
                this.setState({ people: data.results, isLoading: false });
        })
    }
}

export default StarWarsPeopleList;