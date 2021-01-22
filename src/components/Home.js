import React, { Component } from "react";
import "../css/HomeStyles.css";

import SlideShow from "./HomeComponents/SlideShow";
import WhoAreWe from "./HomeComponents/WhoAreWe";
import Location from "./HomeComponents/Location";
import GeneralInfo from "./HomeComponents/GeneralInfo";
import Vegetables from "./HomeComponents/Vegetables";
import Fruits from "./HomeComponents/Fruits";
import Foods from "./HomeComponents/Foods";

export default class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "6em" }}>
        <div className="home-margin">
          <SlideShow />
        </div>
        <div className="home-margin">
          <WhoAreWe />
        </div>
        <div className="home-margin">
          <Location />
        </div>
        <div className="home-margin">
          <GeneralInfo />
        </div>
        <div className="home-margin">
          <Vegetables />
        </div>
        <div className="home-margin">
          <Fruits />
        </div>
        <div className="home-margin">
          <Foods />
        </div>
      </div>
    );
  }
}
