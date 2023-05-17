import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  value: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedBefore = state.value.filter(
        (product) => product.id === action.payload.id
      );
      if (addedBefore.length == 1) {
        addedBefore[0].quantity++;
        localStorage.setItem("cart", JSON.stringify(state.value));
        toast(`${action.payload.title} QUANTITY INCREASED `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const data = { ...action.payload, quantity: 1 };
        state.value = [...state.value, data];
        console.log(state.value);
        localStorage.setItem("cart", JSON.stringify(state.value));
        toast.success(`${action.payload.title} ADDED TO CART`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id != action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.info(`${action.payload.title} is removed from cart`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    increaseQuantity: (state, action) => {
      const addedBefore = state.value.filter(
        (product) => product.id === action.payload.id
      );
      addedBefore[0].quantity++;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decreaseQuantity: (state, action) => {
      const addedBefore = state.value.filter(
        (product) => product.id === action.payload.id
      );
      if (addedBefore[0].quantity <= 1) {
        toast.error("can't have 0 quatity in cart , PRESS DELETE ITEM BUTTON", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        addedBefore[0].quantity--;
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },

    clearCart: (state, action) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
