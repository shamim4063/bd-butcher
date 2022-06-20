import React from "react";

import "./index.scss";

const Description: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="row descrition">
        <div className="col-12">
          <h3>BD BUTCHER</h3>
          <h4>
            Banladeshi wholesale, frozen chicken, Beef and Mutton Exporters.
          </h4>
          <p>
            BD Butcher Processing Industry is an export oriented world class
            meat industry. We produce safe wholesome meat and meat products that
            are of the highest quality and standard for domestic and
            international markets. <br /> We ensure meeting statutory and
            regulatory requirements and food safety requirements for our
            consumers. Accordingly, we meet world export standard and other
            crucial benchmarks like ISO (HACCP Inclusive), HALAL and environment
            license. Bengal Meat offers Halal, Fresh, Hygienic and Superior
            Quality meat of Cattle, Goat, Sheep, Chicken and Birds.
            <br />
            We aim to provide completely halal meat products throughout
            Bangladesh and we never compromise with it. We ensure that each step
            is accomplished in Halal way. As all our meat products are Halal,
            they all are 100 percent safe for consumption. That’s why we have
            international Halal Certifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
