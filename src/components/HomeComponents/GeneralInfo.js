import React, { Component } from "react";
import "../../css/GeneralInfoStyles.css";

import natural from "../../icons/icons8-natural-food-100.svg";
import global from "../../icons/icons8-earth-planet-100.svg";
import fresh from "../../icons/icons8-sparkling-100.svg";

import { Element } from "react-scroll";

export default class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">WHAT WE DO</span>
        </div>
        <div className="info-background-img-container">
          <div className="background-img-1">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={natural} />
              </div>
              <span className="info-title">Always Natural</span>
            </div>
          </div>
          <div className="background-img-2">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={global} />
              </div>
              <span className="info-title">Global Sourcing</span>
            </div>
          </div>
          <div className="background-img-3">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={fresh} />
              </div>
              <span className="info-title">Always Fresh</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
