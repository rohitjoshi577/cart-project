import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

function Index() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Index />);
