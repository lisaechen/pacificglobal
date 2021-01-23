import React, { Component } from "react";
import "../../css/WhoAreWeStyles.css";

import { Element } from "react-scroll";

export default class WhoAreWe extends Component {
  render() {
    return (
      <div>
        <Element name="about-us" className="who-are-we-container">
          <span className="who-are-we-title-container">WHO WE ARE</span>
        </Element>
        <div className="who-we-are-text-container">
          <div>
            We are one of the competitive exporters of fresh fruits and
            vegetables, as well as other food products, currently shipping from
            United States, Canada, Mexico, Chile to Asia and other international
            markets.
          </div>
          <br />
          <div>
            We are also importing many kinds of products. Please feel free to
            contact us directly for more details.
          </div>
          <br />
          <br />
          <div>我們出口美國和加拿大產地的</div>
          <br />
          <div>
            新鮮水果: 蘋果，櫻桃，水蜜桃，油桃，李子，葡萄，臍橙，葡萄柚 ...
          </div>
          <br />
          <div>
            新鮮蔬菜: 美生菜，蘿蔓心，青花菜，花椰菜，西芹，蘆筍，洋蔥，馬鈴薯
            ...
          </div>
        </div>
      </div>
    );
  }
}
