import React, { Component } from "react";
import "./App.css";

const defaultTheme = {
  // color: 'light',
  // changeTheme() {}
}
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
      ({ theme, changeTheme }) => <PhoneBook theme={theme} contacts={contacts} changeTheme={changeTheme}/>
    }
  </ThemeConsumer>
);

const PhoneBook = ({ contacts = [], theme, changeTheme }) => (
    <div className={theme} style={{ backgroundColor: theme.color === 'dark' ? 'darkblue': 'skyblue', color: 'white' }}>
        {
          contacts.map(contact => (
            <div key={contact.id}>
                <h4>Name: {contact.name}</h4>
                <h4>Telephone: {contact.tel}</h4>
            </div>
        ))
      }
      <button onClick={changeTheme}>Change Theme</button>
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
            theme: {
              color: 'light'
            }
        };
    }

    componentDidMount() {
      const hours = new Date().getHours();

      if(hours > 18) {
        setTimeout(() => {
          this.setState({ theme: "dark" })
        }, 2000)
      }
    }

    handleThemeChange = () => {
      this.setState({
        theme: {
          color: 'dark'
        }
      })
    }

    render() {
        const { items, contacts, theme } = this.state;

        return (
            <ThemeProvider value={{ theme, changeTheme: this.handleThemeChange }}>
                <NavConsumer items={items} />
                <PhoneBookConsumer contacts={contacts}  />
            </ThemeProvider>
        );
    }
}

export default App;
