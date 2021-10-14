import pepe1 from "../assets/pepe1.jpg";
import pepe2 from "../assets/pepe2.jpg";
import pepe3 from "../assets/pepe3.jpg";
import pepe4 from "../assets/pepe4.jpg";
import pepe5 from "../assets/pepe5.png";
import pepe6 from "../assets/pepe6.jpg";

const Shop = () => {
  return (
    <div id="shop">
      <ul id="shop-list">
        <li id="pepe-item">
          <img src={pepe1} alt="pepe1" />
          <p>1.99$</p>
        </li>
        <li id="pepe-item">
          <img src={pepe2} alt="pepe1" />
          <p>3.99$</p>
        </li>
        <li id="pepe-item">
          <img src={pepe3} alt="pepe1" />
          <p>2.99$</p>
        </li>
        <li id="pepe-item">
          <img src={pepe4} alt="pepe1" />
          <p>9.99$</p>
        </li>
        <li id="pepe-item">
          <img src={pepe5} alt="pepe1" />
          <p>11.49$</p>
        </li>
        <li id="pepe-item">
          <img src={pepe6} alt="pepe1" />
          <p>4.20$</p>
        </li>
      </ul>
    </div>
  );
};

export default Shop;
