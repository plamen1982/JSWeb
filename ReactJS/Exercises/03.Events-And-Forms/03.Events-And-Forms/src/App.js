import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser = (user) => {
        fetch("http://localhost:9999/auth/signUp", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then((response => response.json()))
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
                    username,
                });
            }
        })
    }

    loginUser = (user) => {
        // TODO: login a user and set sessionStorage items username and token
    }

    logout = (event) => {
       // TODO: prevent the default state
       // TODO: delete the data from the sessionStorage
       // TODO: update the state (user: null)
    }

    createGame = (data) => {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
    }

    switchForm = () => {
        this.setState((prevState) => ({ loginForm: !prevState.loginForm }));
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.username}
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


