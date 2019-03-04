import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookList from './components/BooksList';
import StartWarsList from './components/StartWarsList';

ReactDOM.render(
    <Fragment>
        <BookList />
        <StartWarsList />
    </Fragment>
    , document.getElementById('root')
    );

