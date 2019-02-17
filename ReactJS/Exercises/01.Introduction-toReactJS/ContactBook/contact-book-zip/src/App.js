import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';

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
