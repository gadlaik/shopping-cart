import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import basket from "./assets/basket.png";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div id="container">
        <nav id="nav-bar">
          <h1 id="logo">Pepe Shop</h1>
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
          <div id="basket">
            <img src={basket} alt="basket" />
            <div id="item-count">0</div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
