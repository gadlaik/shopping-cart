import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import basket from "./assets/basket.png";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";

const App = () => {
  const [basketCount, setbasketCount] = useState(0);

  function handleBuyClick(e) {
    let quantity = Number(e.target.parentElement.children[1].value);

    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 200);

    setbasketCount(basketCount + quantity);
  }
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
            <div id="item-count">{basketCount}</div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop">
            <Shop handleBuyClick={handleBuyClick} />
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
