import React, { Component } from "react";
import "../css/GeneralInfoStyles.css";

export default class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">Why choose us?</span>
        </div>
        <div className="info-background-img-container">
          <div className="background-img-1">
            <span className="info-title">Always Natural</span>
          </div>
          <div className="background-img-2">
            <span className="info-title">Global Sourcing</span>
          </div>
          <div className="background-img-3">
            <span className="info-title">Always Fresh</span>
          </div>
        </div>
      </div>
    );
  }
}
