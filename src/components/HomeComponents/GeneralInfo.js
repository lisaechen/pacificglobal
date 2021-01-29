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
            <div className="info-title-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={natural} />
              </div>
              <span className="info-title">Always Natural</span>
            </div>
            <div className="info-overlay-container">{always_natural}</div>
          </div>

          <div className="background-img-2">
            <div className="info-title-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={global} />
              </div>
              <span className="info-title">Global Sourcing</span>
            </div>
            <div className="info-overlay-container">{global_sourcing}</div>
          </div>

          <div className="background-img-3">
            <div className="info-title-container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="info-title-icon" src={fresh} />
              </div>
              <span className="info-title">Always Fresh</span>
            </div>
            <div className="info-overlay-container">{always_fresh}</div>
          </div>
        </div>
      </div>
    );
  }
}

const always_natural =
  "No artificial stimulants, ever. All our partner farms use natural pesticide and fertilizer to ensure that no harmful substances get onto the produce your customers will consume.";
const global_sourcing =
  "We have a network of farms and logistics supplies from around the world to ensure that whatever you need, we have during every season. No compromises necessary. ";
const always_fresh =
  "From the farm to the consumer, our network of logistics partners will ensure that the produce gets to you, the distributor, in a timely manner. A fresh and appealing look guaranteed. ";
