import React from "react";
import "./slide1.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Slide(props) {
  return (
    <div className={`${props.classGiven} slider-flex`}>
      <p className="slider-title">BEST STYLES FOR YOU</p>
      <p className="slider-subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates
        suscipit amet minus ipsam officia.
      </p>
      <img src={props.Tshirt} className="tshirt-slider" />
      <AnchorLink href="#search-part">
        <button className="slider-button">Search Products</button>
      </AnchorLink>
    </div>
  );
}

export default Slide;
