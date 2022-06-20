import React from "react";
import Title from "../../Common/Title";

import "./index.scss";

const Steps: React.FC<any> = (props: any) => {
  return (
    <>
      <Title text="We're With You Every Step of The Way" />
      <div className="step-items">
        <div className="st-quality">
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          <h3>FINEST QUALITY</h3>
        </div>
        <div className="st-care">
          <i className="fa fa-heart"></i>
          <h3>HANDLED WITH CARE</h3>
        </div>
        <div className="st-delivery">
          <i className="fa fa-truck"></i>
          <h3>QUICK AND FREE DELIVERY</h3>
        </div>
        <div className="st-lock">
          <i className="fa fa-lock"></i>
          <h3>QUICK AND FREE DELIVERY</h3>
        </div>
        <div className="st-support">
          <i className="fa fa-comment"></i>
          <h3>24/7 SUPPORT</h3>
        </div>
      </div>
    </>
  );
};

export default Steps;
