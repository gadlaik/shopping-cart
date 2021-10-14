import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

const Nav = () => {
  return (
    <div>
      <Router>
        <nav>
          <h1>Pepe Shop</h1>
          <ul id="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <br />
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default Nav;
