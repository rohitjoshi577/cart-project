import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import "./BottomHeader.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BottomHeader() {
  const cartItems = useSelector((store) => store.cart.value);
  let quantity = cartItems.reduce((total, product) => {
    total = total + product.quantity;
    return total;
  }, 0);
  const [stickHeader, setStickHeader] = useState(false);
  function changeClass() {
    if (window.scrollY > 60) {
      setStickHeader(true);
    } else {
      setStickHeader(false);
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeClass);
    }
    watchScroll();

    // clean up -> 1 -- 2,1---2,1--2,1
    return () => {
      window.removeEventListener("scroll", changeClass);
    };
  }, []);

  return (
    <div className="top-fixed">
      <div className={stickHeader ? "sticked-bottom-header" : "bottom-header"}>
        <div>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>

        <Link
          to={"/cart"}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="cart">
            <span className="material-icons shopping_cart">shopping_cart</span>
            <div className="number-of-items">
              <p className="cart-items">{quantity}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomHeader;
