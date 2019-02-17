import React, { Component } from "react";
import "./App.css";

import Street from "../Street/Street";
import House from "../House/House";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streets: [],
            selectedStreetIdx: 0,
            selectedHouseIdx: 0,
            hasFetched: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:9999/feed/street/all")
            .then(data => data.json())
            .then(data => {
                this.setState({
                    streets: data.streets,
                    hasFetched: true
                });
            });
    }

    getSelectedStreet() {
        return this.state.streets[this.state.selectedStreetIdx].homes;
    }   

    render() {
        if(!this.state.hasFetched) {
            return null;
        }
        return (
            <div className="App">
                <div className="streets">
                <h2>Streets</h2>
                    {this.state.streets.length > 0 ? this.state.streets.map((street) => {
                        return <Street street={street} key={street._id}/>
                    }): null
                }
                </div>
                <div className="houses">
                    <h2>Houses</h2>
                    {this.getSelectedStreet().map((home, idx) => {
                        return (
                        <House 
                            type={home.type} 
                            description={home.description} 
                            id={idx} 
                            image={home.imageUrl}
                            price={home.price}
                            key={home._id}
                        />
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default App;
