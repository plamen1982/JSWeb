import React, { Component } from 'react';
import Input from '../input/input';
import { camelCased } from '../../helpers/validation';
import { Button, Form } from 'semantic-ui-react'

const patternName = "[A-Za-z]{1,32}";

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            errorMessages: []
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.handleFormElementChange = this.handleFormElementChange.bind(this);
    }

    handleRegister(event) {
        event.preventDefault();
        console.log(this.state);
    
    } 

    handleFormElementChange(event) {
        const { target: { value, id } } = event;
        const parsedId = camelCased(id);
        debugger;
        this.setState({
            [parsedId]: value,
        })
    }



    render() {
        const { email, firstName, lastName, password, errorMessages } = this.state;
        return(
            <div className="ui container">
                <Form onSubmit={this.handleRegister}>
                    <Form.Field>
                        <Input 
                            type="text"
                            name={firstName}
                            id="first-name"
                            pattern={patternName}
                            value={firstName}
                            onChange={this.handleFormElementChange}
                            nameField="First Name"
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            type="text"
                            name={lastName}
                            id="last-name"
                            pattern={patternName}
                            value={lastName}
                            onChange={this.handleFormElementChange}
                            nameField="Last Name"
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            type="email"
                            name={email}
                            id="email"
                            value={email}
                            onChange={this.handleFormElementChange}
                            nameField="Email"
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            type="password"
                            name={password}
                            id="password"
                            value={password}
                            onChange={this.handleFormElementChange}
                            nameField="Password"
                            required
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default RegistrationForm;