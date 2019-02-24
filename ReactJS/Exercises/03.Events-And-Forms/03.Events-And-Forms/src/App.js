import React, { Component } from "react";
import "./App.css";
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";

const baseUrl = "http://localhost:9999";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
            isSnackOpen: false,
            message: "",
        };
    }

    /**
     * @name postDataByUrlAndObj
     * @description post data by given url, exmaple:  connecting url with baseUrl = 'http://localhost:9999 with url = /feed/create/game and use body => objToSend = { title: 'some title' }
     * @type {method}
     * @param {String} url
     * @param {Object} objToSend
     * @returns {Promise}
     */

    postDataByUrlAndObj = (url, objToSend) => {
        return fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToSend)
        }).then(response => response.json());
    };

    /**
     * @name getDataFromServerByUrl
     * @description fetch data by given url, exmaple: connecting url with baseUrl = 'http://localhost:9999 with url = /feed/games => http://localhost:9999/feed/games
     * @type {method}
     * @param {String} url
     * @returns {Promise}
     */

    getDataFromServerByUrl = url => {
        return fetch(`${baseUrl}${url}`).then(response => response.json());
    };

    registerUser = user => {
        const { email, password, username } = user;
        const objToSend = { username, password, email };

        this.postDataByUrlAndObj("/auth/signUp", objToSend).then(data => {
            if (data.errors) {
                data.errors.forEach(error => {
                   this.setState({
                       message: error.msg,
                       isSnackOpen: true
                   })
                });
            } else {
                const { username, userId, message } = data;

                localStorage.setItem("username", username);
                localStorage.setItem("userId", userId);

                this.setState({
                    user: username,
                    isSnackOpen: true,
                    message,
                    variant: 'success'
                });
            }
        });
    };

    loginUser = user => {
        const { username, password } = user;
        const objToSend = { username, password };

        this.postDataByUrlAndObj("/auth/signIn", objToSend).then(data => {
            const { username, message, userId, errors } = data;

            if (!username || !userId) {
                this.setState({
                    message
                })
            } else {
                const { username, userId, message } = data;
                debugger
                localStorage.setItem("user", username);
                localStorage.setItem("userId", userId);

                this.setState({
                    user: username,
                    isSnackOpen: true,
                    message,
                    variant: "success"
                });
            }
        });
    };

    logout = event => {
        event.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        this.setState({
            user: null,
            message: "Logout successfully",
            isSnackOpen: true,
        });
    };

    createGame = data => {
        const { title, description, imageUrl } = data;
        const objToSend = { title, description, imageUrl };

        this.postDataByUrlAndObj("/feed/game/create", objToSend).then(data => {
            const { errors } = data;
            if (errors) {
                errors.forEach(error => {
                    console.log(error);
                });
            } else {
                this.getDataFromServerByUrl("/feed/games").then(data => {
                    const { message, games } = data;
                    this.setState({
                        games,
                        message,
                        isSnackOpen: true,
                    });
                });
            }
        });
    };

    switchForm = () => {
        this.setState(prevState => ({ loginForm: !prevState.loginForm }));
    };

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user || localStorage.getItem("user")}
                    logout={this.logout}
                    switchForm={this.switchForm}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser}
                    loginUser={this.loginUser}
                    games={this.state.games}
                    createGame={this.createGame}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                    isSnackOpen={this.state.isSnackOpen}
                />
                <AppFooter
                    message={this.state.message}
                    isSnackOpen={this.state.isSnackOpen}
                />
            </main>
        );
    }

    componentDidMount() {
        const username = localStorage.getItem("username");
        if (username) {
            this.setState({
                username
            });
        } else {
            this.setState({ username: null });
        }
        this.getDataFromServerByUrl("/feed/games").then(data => {
            const { games } = data;
            this.setState({
                games: games
            });
        });
    }
}

export default App;
