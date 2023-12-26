import React from "react";
import { useState } from "react";
import "./Section3.css";
import Image1 from "../../../assets/Rectangle 5.png";
import image2 from "../../../assets/Rectangle 5-1.png";
import image3 from "../../../assets/Rectangle 5-3.png";
import image4 from "../../../assets/Rectangle 5-4.png";
import image5 from "../../../assets/Rectangle 5-5.png";
import image6 from "../../../assets/Rectangle 11.png";
import Icon1 from "../../../assets/Group 8.svg";
import Icon2 from "../../../assets/Vector.svg";

//! USE STATE FUNCTION>>>>>>>>>>>>>>

const Section3 = () => {
  const [name, setName] = useState("Furniture");
  const [price, setPrice] = useState("$100.00");

  //! CLICK FUNCTION>>>>>>>>>>>

  const handleClick = () => {
    setName("mario");
    setPrice("$99.99");
  };

  return (
    <div>
      <div className="Section3">
        <div className="Section3Content">
          <img src={Image1} alt="" />
          <div className="ItemPrice">
            <div className="ItemPriceContent">
              <h5>Item #1</h5>
              <p>{name}</p>
            </div>
            <span>{price}</span>
          </div>
          <div className="Button">
            <button onClick={handleClick} className="Cart">
              <img className="Icon2" src={Icon1} alt="" /> Add to Cart
            </button>
            <button className="SaveItem">
              <img className="SaveItem1" src={Icon2} alt="" /> Save Item
            </button>
          </div>
        </div>

        {/* SECOND DIV IMAGE GRID */}

        <div className="Section3Content">
          <img src={image2} alt="" />
          <div className="ItemPrice">
            <div className="ItemPriceContent">
              <h5>Item #1</h5>
              <p>Furniture</p>
            </div>
            <span>$99.99</span>
          </div>
          <div className="Button">
            <button className="Cart">
              <img className="Icon2" src={Icon1} alt="" /> Add to Cart
            </button>
            <button className="SaveItem">
              <img className="SaveItem1" src={Icon2} alt="" /> Save Item
            </button>
          </div>
        </div>

        {/* THIRD DIV IMAGE GRID */}

        <div className="Section3Content">
          <img src={image3} alt="" />
          <div className="ItemPrice">
            <div className="ItemPriceContent">
              <h5>Item #1</h5>
              <p>Furniture</p>
            </div>
            <span>$99.99</span>
          </div>
          <div className="Button">
            <button className="Cart">
              <img className="Icon2" src={Icon1} alt="" /> Add to Cart
            </button>
            <button className="SaveItem">
              <img className="SaveItem1" src={Icon2} alt="" /> Save Item
            </button>
          </div>
        </div>
      </div>
      {/* SECOND ROlL OF IMAGE GRID */}

      <div>
        <div className="Section3">
          <div className="Section3Content">
            <img src={image4} alt="" />
            <div className="ItemPrice">
              <div className="ItemPriceContent">
                <h5>Item #1</h5>
                <p>{name}</p>
              </div>
              <span>{price}</span>
            </div>
            <div className="Button">
              <button onClick={handleClick} className="Cart">
                <img className="Icon2" src={Icon1} alt="" /> Add to Cart
              </button>
              <button className="SaveItem">
                <img className="SaveItem1" src={Icon2} alt="" /> Save Item
              </button>
            </div>
          </div>

          {/* SECOND DIV IMAGE GRID */}

          <div className="Section3Content">
            <img src={image5} alt="" />
            <div className="ItemPrice">
              <div className="ItemPriceContent">
                <h5>Item #1</h5>
                <p>Furniture</p>
              </div>
              <span>$99.99</span>
            </div>
            <div className="Button">
              <button className="Cart">
                <img className="Icon2" src={Icon1} alt="" /> Add to Cart
              </button>
              <button className="SaveItem">
                <img className="SaveItem1" src={Icon2} alt="" /> Save Item
              </button>
            </div>
          </div>

          {/* THIRD DIV IMAGE GRID */}

          <div className="Section3Content">
            <img src={image6} alt="" />
            <div className="ItemPrice">
              <div className="ItemPriceContent">
                <h5>Item #1</h5>
                <p>Furniture</p>
              </div>
              <span>$99.99</span>
            </div>
            <div className="Button">
              <button className="Cart">
                <img className="Icon2" src={Icon1} alt="" /> Add to Cart
              </button>
              <button className="SaveItem">
                <img className="SaveItem1" src={Icon2} alt="" /> Save Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
