import React from "react";
import "./popularsales.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function PopularSales({ popularsales }) {
  const dispatch = useDispatch();

  function addCart(product) {
    dispatch(addToCart(product));
  }
  return (
    <>
      <p className="mid-heading">Top Rated Sales</p>
      <div className="popular-sales-grid">
        {popularsales.map((product) => (
          <div
            style={{
              background: product.color,
              boxShadow: product.shadow,
              margin: "20px 10px 20px 10px",
              borderRadius: "25px",
            }}
            key={product.id}
          >
            <p className="title">{product.title}</p>
            <p className="text">{product.text}</p>
            <div className="image-container">
              <img src={product.img} alt="" className="image-product" />
            </div>
            <div className="flex-rating">
              <p className="text">
                <span className="material-icons star">star</span>
                {product.rating}
              </p>
              <p className="text">$ {product.price}</p>
            </div>
            <div className="btn-flex">
              <button className="btn" onClick={() => addCart(product)}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularSales;
