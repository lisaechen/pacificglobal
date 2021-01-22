import React, { Component } from "react";
import "../../css/VegetablesStyles.css";

import almond_cover from "../../images/cover_imgs/almond_cover.jpg";
import cashew_cover from "../../images/cover_imgs/cashew_cover.jpg";
import pecan_cover from "../../images/cover_imgs/pecan_cover.jpg";
import walnut_cover from "../../images/cover_imgs/walnut_cover.jpg";
import canola_cover from "../../images/cover_imgs/canola_cover.jpg";
import corn_cover from "../../images/cover_imgs/corn_cover.jpg";

export default class Fruits extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">FOODS</span>
        </div>
        <div className="products-container">
          <div className="product-container">
            <img className="product-cover-img" src={almond_cover} />
            <span className="product-name-overlay">ALMONDS</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={cashew_cover} />
            <span className="product-name-overlay">CASHEWS</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={pecan_cover} />
            <span className="product-name-overlay">PECANS</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={walnut_cover} />
            <span className="product-name-overlay">WALNUTS</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={canola_cover} />
            <span className="product-name-overlay">CANOLA OIL</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={corn_cover} />
            <span className="product-name-overlay">CORN OIL</span>
          </div>
        </div>
      </div>
    );
  }
}
