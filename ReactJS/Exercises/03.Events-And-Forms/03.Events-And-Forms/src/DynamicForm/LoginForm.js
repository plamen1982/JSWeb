import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = (eventForm) => {
        eventForm.preventDefault();
        debugger;

        const { username, password } = eventForm.target;
        const { loginUser } = this.props;

        this.setState({ 
            username,
            password,
         });

         loginUser(this.state);
    };

    handleOnChange = (eventInput) => {
        const { name, value } = eventInput.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" id="usernameLogin" name="username" onChange={this.handleOnChange}/>
                    <label>Password</label>
                    <input type="password" id="passwordLogin" name="password" onChange={this.handleOnChange}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;
