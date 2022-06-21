import React from "react";

import Banner from "../../components/Home/Banner";
import Description from "../../components/Home/Description";
import Partners from "../../components/Home/Partners";
import Steps from "../../components/Home/Steps";
import Items from "../../components/Common/Items";

import { BeefItems } from "../../data/beef";
import { ChickenItems } from "../../data/chickens";
import { MuttonItems } from "../../data/mutton";
import { ItemType } from "../../types/ItemType";

const Home: React.FC<any> = (props: any) => {
  const ALL_ITEMS: ItemType[] = [...BeefItems, ...MuttonItems, ...ChickenItems];

  return (
    <div>
      <Banner />
      <div className="container">
        <Steps />
        <Description />
        <Items
          items={ALL_ITEMS}
          title="OUR FEATURED FROZEN CHICKEN, BEEF AND MUTTON"
        />
        <Partners />
      </div>
    </div>
  );
};

export default Home;
