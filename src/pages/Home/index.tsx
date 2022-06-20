import React from "react";

import Banner from "../../components/Home/Banner";
import Description from "../../components/Home/Description";
import Items from "../../components/Home/Items";
import Partners from "../../components/Home/Partners";
import Steps from "../../components/Home/Steps";

const Home: React.FC<any> = (props: any) => {
  return (
    <div>
      <Banner />
      <div className="container">
        <Steps />
        <Description />
        <Items />
        <Partners />
      </div>
    </div>
  );
};

export default Home;
