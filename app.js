import React from "react";
import TopHeader from "./components/TopHeader/header";
import BottomHeader from "./components/BottomHeader/BottomHeader";
import Responsive from "./components/Slider/slider";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Highlight from "./components/Highlight/highlight";
import highlightData from "./productsData/highlightData";
import sneaker from "./productsData/SneakerData";
import Story from "./components/Story/story";
import Footer from "./components/Footer/footer";
import Filter from "./components/Filters/filter";
import Cart from "./components/Cart/cart";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Responsive />
              <SocialMedia />
              <Highlight highlightData={highlightData} />
              <Filter />

              <Highlight highlightData={sneaker} />
              <Story />
            </>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
