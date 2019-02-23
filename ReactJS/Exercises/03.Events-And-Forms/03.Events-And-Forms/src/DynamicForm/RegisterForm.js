import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleSubmit = (eventForm) => {
        eventForm.preventDefault();

        const { username, email, password } = eventForm.target;
        const { registerUser } = this.props;

        this.setState({ 
            username,
            email,
            password
         });

         registerUser(this.state);
         this.setState({
             username: '',
             email: '',
             password: ''
         })
    };

    handleOnChange = (eventInput) => {
        const { name, value } = eventInput.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" id="usernameReg" name="username" onChange={this.handleOnChange}/>
                    <label>Email</label>
                    <input type="email" id="emailReg" name="email" onChange={this.handleOnChange}/>
                    <label>Password</label>
                    <input type="password" id="passwordReg" name="password" onChange={this.handleOnChange}/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;