import React, { Component } from "react";
import "../../css/VegetablesStyles.css";

import asparagus_cover from "../../images/cover_imgs/asparagus_cover.jpg";
import broccoli_cover from "../../images/cover_imgs/broccoli_cover.jpg";
import cabbage_cover from "../../images/cover_imgs/cabbage_cover.jpg";
import celery_cover from "../../images/cover_imgs/celery_cover.jpg";
import lettuce_cover from "../../images/cover_imgs/lettuce_cover.jpg";
import onion_cover from "../../images/cover_imgs/onion_cover.jpg";
import potato_cover from "../../images/cover_imgs/potato_cover.jpg";

export default class Vegetables extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">FRESH VEGETABLES</span>
        </div>
        <div className="products-container">
          <div className="product-container">
            <img className="product-cover-img" src={asparagus_cover} />
            <span className="product-name-overlay">ASPARAGUS</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={onion_cover} />
            <span className="product-name-overlay">ONION</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={broccoli_cover} />
            <span className="product-name-overlay">BROCCOLI</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={cabbage_cover} />
            <span className="product-name-overlay">CABBAGE</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={potato_cover} />
            <span className="product-name-overlay">POTATO</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={celery_cover} />
            <span className="product-name-overlay">CELERY</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={lettuce_cover} />
            <span className="product-name-overlay">LETTUCE</span>
          </div>
        </div>
      </div>
    );
  }
}
