import React, { Component } from "react";
import "./App.css";

import Street from "../Street/Street";

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

    render() {
        if(!this.state.hasFetched) {
            return null;
        }
        return (
            <div className="App">
                <div className="streets">
                    {this.state.streets.length > 0 ? this.state.streets.map((street) => {
                        return <Street street={street} key={street._id}/>
                    }): null
                }
                </div>

            </div>
        );
    }
}

export default App;
