import React from "react";
import "./Footer.css";
import ArrowImage from '../../assets/VectorArrow.svg'

const Footer = () => {
  return (
    <div>
      <div className="FooterSection">
        <div className="FooterContent">
          <h4>Furns</h4>
        </div>
        <div className="FooterC1">
          <h5>Shop</h5>
          <ul>
            <li>Furniture Store</li>
            <li>Interior Design</li>
            <li>Ceramics</li>
            <li>Decorations</li>
          </ul>
        </div>

        <div className="FooterC2">
          <h5>About Us</h5>
          <ul>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="NewsLetter">
          <label className="LabelTag" htmlFor="">
            Subscribe to our newsletter
          </label>
          <br />
          <input
            className="InputTag"
            type="text"
            placeholder="Email Address"
            id=""
           />
          <button>Subscribe <img src={ArrowImage} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
