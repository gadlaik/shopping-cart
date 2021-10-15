import { useState } from "react";
import pepe1 from "../assets/pepe1.jpg";
import pepe2 from "../assets/pepe2.jpg";
import pepe3 from "../assets/pepe3.jpg";
import pepe4 from "../assets/pepe4.jpg";
import pepe5 from "../assets/pepe5.png";
import pepe6 from "../assets/pepe6.jpg";

const Shop = () => {
  const [basketCount, setbasketCount] = useState(1);

  const handleHover = (e) => {
    if (e.target.parentElement.id === "pepe-item")
      e.target.parentElement.querySelector("h1").style.opacity = 0.9;
    else
      e.target.parentElement
        .querySelectorAll("#pepe-item > h1")
        .forEach((pepe) => (pepe.style.opacity = 0));
  };

  const handleClick = (e) => {
    let basket = document.getElementById("item-count").textContent;

    if (e.target.parentElement.id === "pepe-item") {
      if (basket > basketCount) {
        setbasketCount(Number(basket) + 1);
        basket = Number(basket) + 1;
      } else {
        setbasketCount(basketCount + 1);
        basket = basketCount;
      }
    }
  };

  return (
    <div id="shop" onMouseOver={handleHover} onClick={handleClick}>
      <ul id="shop-list">
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe1} alt="pepe1" />
          <p>1.99$</p>
        </li>
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe2} alt="pepe1" />
          <p>3.99$</p>
        </li>
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe3} alt="pepe1" />
          <p>2.99$</p>
        </li>
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe4} alt="pepe1" />
          <p>9.99$</p>
        </li>
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe5} alt="pepe1" />
          <p>11.49$</p>
        </li>
        <li id="pepe-item">
          <h1 id="buy-pepe">+</h1>
          <img src={pepe6} alt="pepe1" />
          <p>4.20$</p>
        </li>
      </ul>
    </div>
  );
};

export default Shop;
