import React from "react";
import "./DivCenter.css";
import HeroPage from "../assets/Component 1.png";

const DivCenter = () => {
  return (
    <div className="Main1">
      <nav className="MajorP">
        <h1>Furns</h1>
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
        </ul>
        <div className="SignLogIn">
          <button className="LogIn">Log in</button>
          <button className="SignIn">Sign up</button>
        </div>
      </nav>
      <div className="HeroPage">
        <div className="HeroContent">
          <h1>FURNITURE STORE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            elit purus aliquam varius fusce. Proin viverra pharetra, iaculis id
            morbi tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.
          </p>

          <button className="GetStarted">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DivCenter;
