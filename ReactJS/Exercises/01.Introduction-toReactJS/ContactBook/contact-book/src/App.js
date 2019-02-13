import React, { Component } from "react";
import contacts from "./contacts";

const Header = () => <header>&#9993; Contact Book</header>;

const Footer = () => <footer>Contact Book SPA &copy; 2019</footer>;

const DetailsSection = ({ contact }) => (
  <div id="details">
    <h1>Details</h1>
    <div className="content">
      <div className="info">
        <div className="col">
          <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
          <span className="name">{contact.firstName}</span>
          <span className="name">{contact.lastName}</span>
        </div>
      </div>
      <div className="info">
        <span className="info-line">&phone; {contact.phone}</span>
        <span className="info-line">&#9993; {contact.email}</span>
      </div>
    </div>
  </div>
);

class ContactList extends Component {
  state = {
    contact : {
      firstName: "Maria",
      lastName: "Ivanov",
      phone: "0888 123 456",
      email: "i.ivanov@gmail.com"
    }
  }
  handleOnClick = (currentContact) => {
    console.log(currentContact)
    this.setState({ contact: currentContact })
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
      <div>
        <div id="list">
          <h1>Contacts</h1>
          <div className="content">{contactList}</div>
        </div>
        <DetailsSection contact={this.state.contact}/>
      </div>
    );
  }
}

class ContactCard extends Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(event) {
    event.preventDefault();
    this.props.eventClick(this.props.contact);
  }

  render() {
    const { contact } = this.props;

    return (
      <div className="contact" data-id="id" onClick={this.handleClick}>
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
    </div>
    <Footer />
  </div>
);

export default App;
