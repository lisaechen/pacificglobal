import React, { Component } from "react";
import "../../css/VegetablesStyles.css";

import apple_cover from "../../images/cover_imgs/apple_cover.jpg";
import blueberries_cover from "../../images/cover_imgs/blueberries_cover.jpg";
import cherries_cover from "../../images/cover_imgs/cherries_cover.jpg";
import grapes_cover from "../../images/cover_imgs/grapes_cover.jpg";
import lemon_cover from "../../images/cover_imgs/lemon_cover.jpg";
import nectarine_cover from "../../images/cover_imgs/nectarine_cover.jpg";
import oranges_cover from "../../images/cover_imgs/oranges_cover.jpg";
import peach_cover from "../../images/cover_imgs/peach_cover.jpg";
import prune_cover from "../../images/cover_imgs/prune_cover.jpg";
import tomato_cover from "../../images/cover_imgs/tomato_cover.jpg";

export default class Fruits extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">FRESH FRUITS</span>
        </div>
        <div className="products-container">
          <div className="product-container">
            <img className="product-cover-img" src={apple_cover} />
            <span className="product-name-overlay">APPLE</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={nectarine_cover} />
            <span className="product-name-overlay">NECTARINE</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={blueberries_cover} />
            <span className="product-name-overlay">BLUEBERRIES</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={cherries_cover} />
            <span className="product-name-overlay">CHERRIES</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={oranges_cover} />
            <span className="product-name-overlay">ORANGE</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={grapes_cover} />
            <span className="product-name-overlay">GRAPES</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={lemon_cover} />
            <span className="product-name-overlay">LEMON</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={peach_cover} />
            <span className="product-name-overlay">PEACH</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={prune_cover} />
            <span className="product-name-overlay">PRUNE</span>
          </div>
          <div className="product-container">
            <img className="product-cover-img" src={tomato_cover} />
            <span className="product-name-overlay">TOMATO</span>
          </div>
        </div>
      </div>
    );
  }
}
