import React, { Component } from "react";

import "../css/FooterBarStyles.css";

import mail from "../icons/icons8-envelope-96.svg";
import phone from "../icons/icons8-phone-96.svg";
import marker from "../icons/icons8-marker-96.svg";

import icons8 from "../icons/Icons8_logo.svg";
import unsplash from "../icons/Unsplash_wordmark_logo.svg";

export default class FooterBar extends Component {
  render() {
    return (
      <div>
        <div className="footer-outer-container">
          <div className="footer-left-side-container">
            <div className="footer-contact-us">Contact us</div>
            <div className="footer-contact-info-container">
              <ul className="contact-container">
                <img className="contact-icon" src={mail} />
                <span>kevin</span>
                <span style={{ fontSize: "1.5em" }}>@</span>
                <span>pacificglobal.ca</span>
              </ul>
              <ul className="contact-container">
                <img className="contact-icon" src={marker} />
                <span>3725 WINSFORD CRT., BURNABY BC, CANADA, V5A 4Y9</span>
              </ul>
              <ul className="contact-container">
                <img className="contact-icon" src={phone} />
                <span>+1 (604) - 688 - 8003</span>
              </ul>
            </div>
          </div>
          <div className="footer-right-side-container">
            <div className="footer-links-icon-container">
              <a href="https://icons8.com/">
                <img className="footer-links-icon" src={icons8} />
              </a>
              <a href="https://unsplash.com/">
                <img className="footer-links-icon" src={unsplash} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © 2021 PACIFIC GLOBAL ENTERPRISES INC.
        </div>
      </div>
    );
  }
}
