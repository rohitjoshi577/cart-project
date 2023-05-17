import React from "react";
import footer from "../../productsData/FooterData";
import "./footer.css";
import { v4 as uuidv4 } from "uuid";

function Footer() {
  return (
    <div className="footer-gradient">
      <div className="footer">
        {footer.titles.map((options) => {
          return (
            <div key={uuidv4()}>
              <p className="footer-title">{options.title}</p>
              {options.links.map((link) => (
                <p className="footer-link" key={uuidv4()}>
                  {link.link}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      <p className="footer-copy"> @ DEVLOPED BY ROHIT JOSHI</p>
    </div>
  );
}

export default Footer;
