import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Nav = ({ items = [], theme  }) => (
    <nav className={theme}>
        {
            items.map(item => (
                <a href="/" key={item.id}>
                    {item.name}
                </a>
            ))
        }
    </nav>
);

const PhoneBook = ({ contacts = [], theme }) => (
    <div className={theme}>
        {
            contacts.map(contact => (
                <div key={contact.id}>
                    <h4>Name: {contact.name}</h4>
                    <h4>Telephone: {contact.tel}</h4>
                </div>
            ))
        }
    </div>
);

ReactDOM.render(
    <Fragment>
        <PhoneBook />
        <Nav />
    </Fragment>
    , document.getElementById('root')
    );

