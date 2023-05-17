import React from "react";
import "./highlight.css";

function Highlight({ highlightData }) {
  return (
    <div>
      <p className="mid-heading-headlines">{highlightData.heading}</p>
      <p className="mid-heading-small">{highlightData.title}</p>
      <p className="mid-title">{highlightData.text}</p>
      <img src={highlightData.img} alt="" className="product-image" />
    </div>
  );
}

export default Highlight;
