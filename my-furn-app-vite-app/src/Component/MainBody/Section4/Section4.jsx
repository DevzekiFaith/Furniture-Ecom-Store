import { useState } from "react";
import React from "react";
import "./Section4.css";
import image01 from "../../../assets/Rectangle 7.png";
import image02 from "../../../assets/Rectangle 8.png";
import image03 from "../../../assets/Rectangle 9.png";
import image04 from "../../../assets/Rectangle 10.png";

const Section4 = () => {
  const [name, setName] = useState("Baron");
  setName;

  const [next, setNext] = useState("Angela");
  setNext;

  const [image004, setImage004] = useState("Micheal");
  setImage004;

  const [first, setFirst] = useState("Precious");
  setFirst;

  return (
    <div>
      <div className="Section4">
        <div className="Section4Flex">
          <h6>OUR CREATIVE FORCE</h6>
          <h3>MEET OUR TEAM</h3>
        </div>

        <div className="ImageGridFlex">
          <div className="ImageGrid">
            <img src={image01} alt="" />
            <p>{first}</p>
            <h6>STORE MANAGER</h6>
          </div>

          <div className="ImageGrid">
            <img src={image02} alt="" />
            <p>{name}</p>
            <h6>STORE MANAGER</h6>
          </div>

          <div className="ImageGrid">
            <img src={image03} alt="" />
            <p>{next}</p>
            <h6>STORE MANAGER</h6>
          </div>

          <div className="ImageGrid">
            <img src={image04} alt="" />
            <p>{image004}</p>
            <h6>STORE MANAGER</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
