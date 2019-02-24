import React, {Component} from 'react';
import './App.css';
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
        }
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
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objToSend)
            })
                .then(response => response.json())
    }

    /**
     * @name getDataFromServerByUrl
     * @description fetch data by given url, exmaple: connecting url with baseUrl = 'http://localhost:9999 with url = /feed/games => http://localhost:9999/feed/games
     * @type {method}
     * @param {String} url
     * @returns {Promise}
     */

    getDataFromServerByUrl = (url) => {
        return fetch(`${baseUrl}${url}`)
                .then(response => response.json())
    }

    registerUser = (user) => {
        const { email, password, username } = user;
        const objToSend = { username, password, email };

        this.postDataByUrlAndObj('/auth/signUp', objToSend)
        .then(data => {
            if(data.errors) {
                data.errors.forEach((error) => {
                    console.log(error)
                })
            } else {
                const { username, userId } = data;

                localStorage.setItem('username', username);
                localStorage.setItem('userId', userId);

                this.setState({
                    user: username,
                });
            }
        })
    }

    loginUser = (user) => {

        const { username, password } = user;
        const objToSend = { username, password }

        this.postDataByUrlAndObj('/auth/signIn', objToSend)
        .then(data => {
            if(data.errors) {
                data.errors.forEach((error) => {
                    console.log(error)
                })
            } else {
                const { username, userId } = data;

                localStorage.setItem('user', username);
                localStorage.setItem('userId', userId);

                this.setState({
                    user: username,
                });
            }
        })
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        this.setState({ user: null })
    }

    createGame = (data) => {

        const { title, description, imageUrl } = data;
        const objToSend = {
            title, description, imageUrl
        }

        this.postDataByUrlAndObj('/feed/game/create', objToSend)
        .then(data => {
            if(data.errors) {
                data.errors.forEach((error) => {
                    console.log(error)
                })
            } else {
               this.getDataFromServerByUrl('/feed/games')
                .then(data => {
                    this.setState({
                        games: data.games
                    })
                })
            }
        })
    }

    switchForm = () => {
        this.setState((prevState) => ({ loginForm: !prevState.loginForm }));
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user || localStorage.getItem('user')}
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
                />
                <AppFooter/>
            </main>
        )
    }

    componentDidMount() {
        const username = localStorage.getItem('username');
        if(username) {
            this.setState({
                username
            })
        } else {
            this.setState({ username: null })
        }
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)

       // TODO: fetch all the games
    }
}

export default App;


