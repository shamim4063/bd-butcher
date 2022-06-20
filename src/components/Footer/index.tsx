import React from "react";

import "./index.scss";

const Footer: React.FC<any> = (props: any) => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="copyright-text">
            © BD BUTCHER 1979, All Rights Reserved  <br /> 110, Tejgaon I/A, Love Road,
            Dhaka-1208 || Hotline: 09678-444-555 || Email: contact@bdboucher.com <br />
            Developed with love by Beatnik <br /> CONTACT THE TEAM
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
