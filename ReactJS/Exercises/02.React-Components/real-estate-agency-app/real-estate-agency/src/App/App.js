import React, { Component } from "react";
import "./App.css";

import Street from "../Street/Street";
import House from "../House/House";
import HouseDetails from "../HouseDetails/HouseDetails";

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

    //================================ Helpers ===============================//

    getSelectedHouse() {
        return this.state.streets[this.state.selectedStreetIdx].homes[
            this.state.selectedHouseIdx
        ];
    }

    getSelectedStreet() {
        return this.state.streets[this.state.selectedStreetIdx].homes;
    }

    streetHoverEvent(idx) {
        this.setState({
            selectedStreetIdx: idx
        });
    }

    houseHoverEvent(idx) {
        this.setState({
            selectedHouseIdx: idx
        });
    }

    render() {
        if (!this.state.hasFetched) {
            return null;
        }
        return (
            <div className="App">
                <div className="streets">
                    <h2>Streets</h2>
                    {this.state.streets.length > 0
                        ? this.state.streets.map((street, idx) => {
                              return (
                                  <Street
                                      street={street}
                                      key={idx}
                                      id={idx}
                                      streetHoverEvent={this.streetHoverEvent.bind(
                                          this
                                      )}
                                  />
                              );
                          })
                        : null}
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
                                houseHoverEvent={this.houseHoverEvent.bind(
                                    this
                                )}
                            />
                        );
                    })}
                </div>
                <div className="house-details">
                        {this.state.streets.length > 0 ? (
                            <HouseDetails
                                type={this.getSelectedHouse().type}
                                description={
                                    this.getSelectedHouse().description
                                }
                                price={this.getSelectedHouse().price}
                                image={this.getSelectedHouse().imageUrl}
                                key={this.state.selectedHouseIdx}
                            />
                        ) : null}
                    </div>
            </div>
        );
    }
}

export default App;
