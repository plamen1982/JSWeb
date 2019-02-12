import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const handleNavLinkClick = (event) => {
    event.preventDefault();

    console.log(event.target.innerText);
}

const Navigation = () => {

  const siteNavClass = "site-nav";
  const linkClassName = `${siteNavClass}--link`;

  return (
    <header className={linkClassName}>
      <Logo />
      <Menu />
      <Search />
    </header>
  );
};
const Menu = () => (
  <ul>
    <li>
        <a href='/' onClick={handleNavLinkClick}>Home</a>
    </li>
    
    <li><a href='/contact-us' onClick={handleNavLinkClick}>Contact us</a></li>
    <li><a href='/our-services' onClick={handleNavLinkClick}>Our Services</a></li>
  </ul>
);
const Logo = () => (
  <div>
    <p>Logo Placeholder</p>
  </div>
);
const Search = () => (
  <input type="text" placeholder="search for our services" />
);

ReactDOM.render(<Navigation />, document.getElementById("root"));
