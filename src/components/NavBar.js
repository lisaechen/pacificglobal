import React, { Component } from "react";
import "../css/NavBarStyles.css";
import logo from "../icons/logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          backgroundColor: "white",
        }}
      >
        <div className="nav-bar-background">
          <div className="nav-bar-logo-container">
            <img src={logo} className="nav-bar-logo" />
            <div className="nav-bar-background-cut-out-circle" />
            <div className="nav-bar-background-cut-out-rect" />
          </div>

          <div className="nav-bar-titles-container">
            <span className="nav-bar-title">ABOUT US</span>
            <span className="nav-bar-title">FRESH VEGETABLES</span>
            <span className="nav-bar-title">FRESH FRUITS</span>
            <span className="nav-bar-title">FOOD</span>
            <span className="nav-bar-title">CONTACT</span>
          </div>
        </div>
        <div className="nav-bar-line-separator" />
      </div>
    );
  }
}
