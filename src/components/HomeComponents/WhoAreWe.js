import React, { Component } from "react";
import "../../css/WhoAreWeStyles.css";

export default class WhoAreWe extends Component {
  render() {
    return (
      <div>
        <div className="who-are-we-container">
          <span className="who-are-we-title-container">WHO ARE WE?</span>
        </div>
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
          <div>
            美國加拿大新鮮水果蔬菜蘋果櫻桃葡萄青花菜西芹
            美生菜馬鈴薯洋蔥出口商進口商
          </div>
        </div>
      </div>
    );
  }
}
