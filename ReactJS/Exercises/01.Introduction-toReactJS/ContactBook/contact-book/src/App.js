import React, { Component } from "react";
import contacts from "./contacts";

const Header = () => <header>&#9993; Contact Book</header>;

const Footer = () => <footer>Contact Book SPA &copy; 2019</footer>;

const DetailsSection = () => (
  <div id="details">
    <h1>Details</h1>
    <div className="content">
      <div className="info">
        <div className="col">
          <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
          <span className="name">Ivan</span>
          <span className="name">Ivanov</span>
        </div>
      </div>
      <div className="info">
        <span className="info-line">&phone; 0887 123 456</span>
        <span className="info-line">&#9993; i.ivanov@gmail.com</span>
      </div>
    </div>
  </div>
);

class ContactList extends Component {
  handleOnClick(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const contactList = contacts.map(contact => (
      <ContactCard
        key={contact.email}
        contact={contact}
        eventClick={this.handleOnClick}
      />
    ));

    return (
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">{contactList}</div>
      </div>
    );
  }
}

class ContactCard extends Component {
  handleClick() {
    this.props.eventClick(this.props.contact);
    console.log('clicked')
  }

  render() {
    const { contact } = this.props;

    return (
      <div href="/" className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName}</span>
      </div>
    );
  }
}

const App = () => (
  <div className="container">
    <Header />
    <div id="book">
      <ContactList />
      <DetailsSection />
    </div>
    <Footer />
  </div>
);

export default App;
