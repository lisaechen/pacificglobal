import React, { Component } from "react";
import "../css/NavBarStyles.css";
import logo from "../icons/logo.svg";
import menu_peach from "../icons/icons8-menu-peach.svg";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function scrollToContact() {
  scroll.scrollToBottom();
}

function scrollToHome() {
  scroll.scrollToTop();
}

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  }

  updateDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    if (this.state.windowWidth >= 750) {
      return (
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 100,
            backgroundColor: "white",
          }}
        >
          {/* {this.state.windowWidth} */}
          <div className="nav-bar-background">
            <div className="nav-bar-logo-container">
              <img
                onClick={() => {
                  scrollToHome();
                }}
                src={logo}
                className="nav-bar-logo"
              />
              <div className="nav-bar-background-cut-out-circle" />
              <div className="nav-bar-background-cut-out-rect" />
            </div>

            <div className="nav-bar-titles-container">
              <Link
                className="nav-bar-title"
                to="about-us"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-this.state.windowWidth / 12}
                duration={500}
              >
                ABOUT US
              </Link>
              <Link
                className="nav-bar-title"
                to="fresh-veg"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-this.state.windowWidth / 12}
                duration={500}
              >
                FRESH VEGETABLES
              </Link>
              <Link
                className="nav-bar-title"
                to="fresh-fruit"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-this.state.windowWidth / 12}
                duration={500}
              >
                FRESH FRUITS
              </Link>
              <Link
                className="nav-bar-title"
                to="food"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-this.state.windowWidth / 12}
                duration={500}
              >
                FOOD
              </Link>
              <span
                onClick={() => {
                  scrollToContact();
                }}
                className="nav-bar-title"
              >
                CONTACT
              </span>
            </div>
          </div>
          <div className="nav-bar-line-separator" />
        </div>
      );
    } else {
      return (
        <div>
          {/* {this.state.windowWidth} */}
          <div className="nav-bar-background">
            <div className="nav-bar-logo-container">
              <img src={logo} className="nav-bar-logo" />
              <div className="nav-bar-background-cut-out-circle" />
              <div className="nav-bar-background-cut-out-rect" />
            </div>

            <div className="nav-bar-menu-container">
              <ChakraProvider>
                <Menu style={{ zIndex: "1000" }}>
                  <MenuButton style={{ position: "fixed", zIndex: "200" }}>
                    <img className="nav-bar-menu-icon" src={menu_peach} />
                  </MenuButton>
                  <MenuList>
                    <Link
                      to="about-us"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <MenuItem>ABOUT US</MenuItem>
                    </Link>
                    <Link
                      to="fresh-veg"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <MenuItem>FRESH VEGETABLES</MenuItem>
                    </Link>
                    <Link
                      to="fresh-fruit"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <MenuItem>FRESH FRUITS</MenuItem>
                    </Link>
                    <Link
                      to="food"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <MenuItem>FOOD</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        scrollToContact();
                      }}
                    >
                      CONTACT
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ChakraProvider>
            </div>
          </div>
          <div className="nav-bar-line-separator" />
        </div>
      );
    }
  }
}
