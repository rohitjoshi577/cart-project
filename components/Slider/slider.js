import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tshirt1 from "../../images/jacket1.png";
import Tshirt2 from "../../images/jacket2.png";
import Tshirt3 from "../../images/jacket3.png";
import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "./Slide1/slide1";
import "./slider.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <Slide Tshirt={Tshirt1} classGiven="slider-background1" />
          <Slide Tshirt={Tshirt2} classGiven="slider-background2" />
          <Slide Tshirt={Tshirt3} classGiven="slider-background3" />
        </Slider>
      </div>
    );
  }
}
