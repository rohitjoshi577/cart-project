import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { increaseQuantity, decreaseQuantity } from "../../redux/cartSlice";
import emptyCart from "./../../images/Ecommerce-assets/emptybag.png";
import { clearCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const popularsales = useSelector((store) => store.cart.value);
  let quantity = popularsales.reduce((total, product) => {
    total = total + product.quantity;
    return total;
  }, 0);

  let total = popularsales.reduce((total, product) => {
    total = total + product.quantity * product.price;
    return total;
  }, 0);

  function deleteProduct(item) {
    dispatch(removeFromCart(item));
  }

  function increase(item) {
    dispatch(increaseQuantity(item));
  }

  function decrease(item) {
    dispatch(decreaseQuantity(item));
  }

  function checkout() {
    dispatch(clearCart());
    toast.success("Your order will be deliverd soon thank you", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="cart-container">
      <p className="mid-cart-heading">Your Cart - {quantity} items</p>

      {popularsales.length == 0 ? (
        <EmptyCart />
      ) : (
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

              <div className="image-container">
                <img src={product.img} alt="" className="image-product" />
              </div>
              <div className="flex-rating">
                <p className="text">
                  {" "}
                  sub Total : {product.quantity * product.price}$
                </p>
              </div>
              <div className="btn-flex">
                <button
                  className="btn-items"
                  onClick={() => {
                    decrease(product);
                  }}
                >
                  <span className="material-icons remove_circle_outline">
                    remove_circle_outline
                  </span>
                </button>

                <p className="items-in-order">{product.quantity}</p>
                <button
                  className="btn-items"
                  onClick={() => {
                    increase(product);
                  }}
                >
                  <span className="material-icons add_circle_outline">
                    add_circle_outline
                  </span>
                </button>
              </div>

              <p className="text" style={{ fontSize: "24px" }}>
                Price $ {product.price}
              </p>

              <button
                className="delete-items"
                onClick={() => {
                  deleteProduct(product);
                }}
              >
                delete item
              </button>
            </div>
          ))}
        </div>
      )}

      {popularsales.length == 0 ? null : (
        <Link to="/">
          <button
            className="checkout"
            onClick={() => {
              checkout();
            }}
          >
            Checkout total $ {total}
          </button>
        </Link>
      )}
    </div>
  );
}

function EmptyCart() {
  return (
    <>
      <img src={emptyCart} alt="" className="empty-cart" />
    </>
  );
}

export default Cart;
