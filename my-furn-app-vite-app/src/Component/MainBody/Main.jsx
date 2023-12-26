import React from "react";
import './Main.css'
import MainImage from '../../assets/Rectangle 4.png'

const Main = () => {
  return (
    <div className="MainClassOne">
      <div className="MainClassContent">
        <h6>Furns</h6>
        <h1>FULL-FLEDGED FURNITURE STORE & INTERIOR DESIGN</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, elit
          purus aliquam varius fusce. Proin viverra pharetra, iaculis id morbi
          tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.
        </p>
        <button>Get Started</button>
      </div>
      <div className="MainClassImage">
        <img src={MainImage} alt="" />
      </div>
    </div>
  );
};

export default Main;
