import React, { Component } from "react";
import "../css/HomeStyles.css";

import SlideShow from "./SlideShow";
import WhoAreWe from "./WhoAreWe";
import Location from "./Location";
import GeneralInfo from "./GeneralInfo";

export default class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
