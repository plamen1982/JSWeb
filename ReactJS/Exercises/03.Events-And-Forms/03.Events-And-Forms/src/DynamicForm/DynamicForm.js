import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        return (
            <div>
                <div>
                   <RegisterForm registerUser={this.props.registerUser}/>
                </div>
            </div>
        )
    }
}

export default DynamicForm