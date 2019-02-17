import React, { Component } from 'react';
import contacts from "../contacts";
import DetailsSection from './DetailsSection';
import ContactCard from './ContactCard';

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

  export default ContactList;