import React from 'react';

class CreateForm extends React.Component {
    state = {
        title: '',
        description: '',
        imageUrl: ''
    }

    handleOnChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target; 

        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.props.createGame(this.state);
    }

    render() {
        return (
            <div className="create-form">
                <h1>Create game</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Title</label>
                    <input type="text" id="title" name="title" onChange={this.handleOnChange}/>
                    <label>Description</label>
                    <textarea type="text" id="description" name="description" onChange={this.handleOnChange}/>
                    <label>ImageUrl</label>
                    <input type="text" id="imageUrl" name="imageUrl" onChange={this.handleOnChange}/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }

};

export default CreateForm;

