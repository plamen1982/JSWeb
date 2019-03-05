import React, { Component } from "react";
import "./App.css";

const defaultTheme = "light";
const { Provider: ThemeProvider, Consumer: ThemeConsumer } = React.createContext(defaultTheme);

const Nav = ({ items = [], theme }) => (
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

const NavConsumer = ({ items }) => (
  <ThemeConsumer>
    {
      (theme) => <Nav theme={theme} items={items}/>
    }
  </ThemeConsumer>
);

const PhoneBookConsumer = ({ contacts }) => (
  <ThemeConsumer>
    {
      (theme) => <PhoneBook theme={theme} contacts={contacts} />
    }
  </ThemeConsumer>
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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                { id: "pesho", name: "Pesho", tel: "0889999111" },
                { id: "gosho", name: "Gosho", tel: "0889999112" },
                { id: "rosho", name: "Gosho", tel: "0889999113" }
            ],
            items: [
                { id: "home", name: "Home" },
                { id: "about", name: "About" },
                { id: "contact", name: "Contact" }
            ],
            theme: "dark"
        };
    }

    render() {
        const { items, contacts, theme } = this.state;

        return (
            <ThemeProvider value={theme}>
                <NavConsumer items={items} />
                <PhoneBookConsumer contacts={contacts} />
            </ThemeProvider>
        );
    }
}

export default App;
