import React from "react";
import facebook from "../../images/Ecommerce-assets/facebook.svg";
import twitter from "../../images/Ecommerce-assets/twitter.svg";
import youtube from "../../images/Ecommerce-assets/youtube.svg";
import messenger from "../../images/Ecommerce-assets/messenger.svg";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-media-flex">
      <div>
        <a href="https://www.facebook.com/nike" target="_blank">
          <img src={facebook} className="social-media-icon" />
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/user/nike" target="_blank">
          <img src={youtube} className="social-media-icon" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/Nike" target="_blank">
          <img src={twitter} className="social-media-icon" />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/nike" target="_blank">
          <img src={messenger} className="social-media-icon" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
