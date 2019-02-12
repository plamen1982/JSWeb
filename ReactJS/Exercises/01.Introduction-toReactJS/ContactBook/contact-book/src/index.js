import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/app.css";

//reuse MainHeader to become just Header
const HeaderMain = () => <header>&#9993; Contact Book</header>;

class ContactList extends Component {
  render() {
    return (
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const ContactCard = () => (
  <div className="contact" data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">Maria Petrova</span>
  </div>
);

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

const Footer = () => (
  <footer>Contact Book SPA &copy; 2017</footer>
);

const Page = () => (
  <div className="container">
    <HeaderMain />
    <div id="book">
      <ContactList>
        <ContactCard />
      </ContactList>
      <DetailsSection />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("root"));
