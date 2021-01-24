import React, { Component } from "react";
import "../../css/SlideShowStyles.css";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

export default class SlideShow extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <span className="slide-show-heading">
          {/* {"IMPORTER & EXPORTER"}
          <br /> {"OF FRESH PRODUCE"} */}
          {"IMPORTER & EXPORTER OF FRESH PRODUCE"}
        </span>
        <ImageGallery
          items={images}
          showThumbnails={false}
          autoPlay={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={false}
          showNav={false}
          style={{ position: "absolute" }}
        />
      </div>
    );
  }
}

const images = [
  {
    original:
      "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1552670070-7c3a4ffba6a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1509377247011-956cd2cc7dab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3367&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1543528176-61b239494933?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3453&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1484759288640-783b22c95d54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2560&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1530886510400-bb0d90a5f26f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1568584952634-e9bb8a163e28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80",
  },
  {
    original:
      "https://images.unsplash.com/photo-1599665919133-b48fb1c2194f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80",
  },
];
