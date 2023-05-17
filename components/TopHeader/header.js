import React from "react";
import "./header.css";

function TopHeader() {
  return (
    <>
      <div className="top-header">
        <a
          href="tel:9528679979"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="inside-flex">
            <div>
              <span className="material-icons phone_enabled">
                phone_enabled
              </span>
            </div>

            <div>
              <p className="top-header-text">+91 95286 79979</p>
            </div>
          </div>
        </a>

        <a
          href="mailto: developerjoshi577@gmail.com"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="inside-flex">
            <div>
              <span className="material-icons email">email</span>
            </div>
            <div>
              <p className="top-header-text">Rohitjoshi80061@gmail.com</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default TopHeader;
