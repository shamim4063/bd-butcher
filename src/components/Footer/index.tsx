import React from "react";

import "./index.scss";

const Footer: React.FC<any> = (props: any) => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="copyright-text">
            © BD BUTCHER 1979, All Rights Reserved <br /> 57 Purana Paltan Line,
            VIP Road, Paltan Industrial Aria, Dhaka-1201 <br />
            <small>
              Phone: +880 1824-589241 || Email: bdbutch@outlook.com
            </small>
            <br />
            <small> Developed with love by Springtide </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
