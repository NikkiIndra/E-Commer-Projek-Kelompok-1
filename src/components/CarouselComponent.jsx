import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselComponent = () => {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
      <div className="item">
        <h4>Item 1</h4>
      </div>
      <div className="item">
        <h4>Item 2</h4>
      </div>
      <div className="item">
        <h4>Item 3</h4>
      </div>
      <div className="item">
        <h4>Item 2</h4>
      </div>
      <div className="item">
        <h4>Item 3</h4>
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
