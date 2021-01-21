import React, { Component } from "react";
import "../css/LocationStyles.css";
import van from "../images/vancouver.jpg";
import maple from "../icons/icons8-maple-leaf-96.png";

export default class Location extends Component {
  render() {
    return (
      <div className="location-container">
        <img src={van} className="vancouver-image" />
        <div className="vancouver-image-overlay">
          <div className="location-text-container">
            <div className="located-in-text">
              Located in the beautiful Vancouver, Canada
            </div>
            <img className="maple-leaf-icon" src={maple} />
          </div>
          <div className="we-do-business-text">
            We do business along the coast of Pacific Ocean and ship our
            products globally
          </div>
        </div>
      </div>
    );
  }
}
