import React from "react";
import Image from 'react-bootstrap/Image'

import Title from "../../Common/Title";
import "./index.scss";
import partner1 from '../../../images/partner1.jpeg';
import partner2 from '../../../images/partner2.jpeg';
import partner3 from '../../../images/partner3.jpeg';
import partner4 from '../../../images/partner4.jpeg';

const Partners: React.FC<any> = () => {
  return (
    <>
      <Title text="OUR PARTNERS" />
      <div className="row partner-list">
          <div className="col-lg-3 col-6 mb-4">
              <Image src={partner1} thumbnail={true}/>
          </div>
          <div className="col-lg-3 col-6 mb-4">
              <Image src={partner2} thumbnail={true}/>
          </div>
          <div className="col-lg-3 col-6 mb-4">
              <Image src={partner3} thumbnail={true}/>
          </div>
          <div className="col-lg-3 col-6 mb-4">
              <Image src={partner4} thumbnail={true}/>
          </div>
      </div>
    </>
  );
};

export default Partners;
