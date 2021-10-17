import pepe1 from "../assets/pepe1.jpg";
import pepe2 from "../assets/pepe2.jpg";
import pepe3 from "../assets/pepe3.jpg";
import pepe4 from "../assets/pepe4.jpg";
import pepe5 from "../assets/pepe5.png";
import pepe6 from "../assets/pepe6.jpg";

const Shop = () => {
  const prices = { pepe1: 9.99 };

  return (
    <ul id="shop-list">
      <li id="shop-item">
        <img src={pepe1} alt="pepe1" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe1}</p>
        </div>
      </li>
      <li id="shop-item">
        <img src={pepe2} alt="pepe2" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe2}</p>
        </div>
      </li>
      <li id="shop-item">
        <img src={pepe3} alt="pepe3" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe3}</p>
        </div>
      </li>
      <li id="shop-item">
        <img src={pepe4} alt="pepe4" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe4}</p>
        </div>
      </li>
      <li id="shop-item">
        <img src={pepe5} alt="pepe5" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe5}</p>
        </div>
      </li>
      <li id="shop-item">
        <img src={pepe6} alt="pepe6" />
        <div id="price">
          Quantity
          <input type="number" value={1} />
          <p>{"$" + prices.pepe6}</p>
        </div>
      </li>
    </ul>
  );
};

export default Shop;
