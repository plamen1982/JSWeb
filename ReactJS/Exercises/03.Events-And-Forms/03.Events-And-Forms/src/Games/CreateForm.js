import React from 'react';

const innerState = {
    title: '',
    description: '',
    imageUrl: ''
}

const handleOnChange = (event) => {
    event.preventDefault();

    innerState[event.target.name] = event.target.value;
}

const CreateForm = (props) => {

    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createGame(innerState);
            }}>
                <label>Title</label>
                <input type="text" id="title" name="title" onChange={handleOnChange}/>
                <label>Description</label>
                <textarea type="text" id="description" name="description" onChange={handleOnChange}/>
                <label>ImageUrl</label>
                <input type="text" id="imageUrl" name="imageUrl" onChange={handleOnChange}/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

