import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Router is deployed at the most upper part of the app

const HomeComponent = ({ home }) => <h1>{home}</h1>;
const AboutComponent = () => <h1>About</h1>;
const ContactComponent = () => <h1>Contact</h1>;

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);
const Bananas = () => (<h1>Bananas</h1>);
const Grocery = () => (<h1>Grocery</h1>);

const GroceryWrapper = () => (
    <div>
        <Route path="/grocery" component={Grocery} exact/>
        <Route path="/grocery/bananas" component={Bananas} exact/>
    </div>
);

const AppWrapper = () => {
    return (

            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" render={() => <HomeComponent home="Home from props"/> } exact />
                        <Route path="/grocery" component={GroceryWrapper} />
                        <Route path="/about" component={AboutComponent} exact />
                        <Route path="/contact" component={ContactComponent} exact />
                    </Switch>
                    <footer>Footer</footer>
                </Fragment>
            </Router>

    );
};
ReactDOM.render(<AppWrapper />, document.getElementById("root"));
