import React, { Component } from "react";
import "../css/NavBarStyles.css";
import logo from "../icons/logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar-background">
          <img src={logo} className="nav-bar-logo" />
          <div className="nav-bar-background-cut-out-circle" />
          <div className="nav-bar-background-cut-out-rect" />
        </div>
      </div>
    );
  }
}
