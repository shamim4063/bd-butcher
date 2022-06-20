import React from "react";
import { Button, Carousel, Col } from "react-bootstrap";

import "./index.scss";

import banner1 from "../../../images/banner1.jpeg";
import banner2 from "../../../images/banner2.jpeg";

const Banner: React.FC<any> = (props: any) => {
  return (
    <div className="banner-section"> 
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h3>FRESH, HYGIENIC AND HALAL!</h3>
              <p>Your direct connection with local farmers and artisans</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Best in the world</h3>
              <p>Your very own farmers market in house</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
    </div>
  );
};

export default Banner;
