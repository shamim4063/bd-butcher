import { ItemType } from "../types/ItemType";

import item1 from "../images/item1.png";
import item2 from "../images/item2.jpeg";
import item3 from "../images/item3.png";
import item4 from "../images/item4.jpeg";

import beef1 from "../images/beef1.jpeg";
import beef2 from "../images/beef2.jpeg";
import beef3 from "../images/beef3.jpeg";
import beef4 from "../images/beef4.jpeg";
import beef5 from "../images/beef5.jpeg";
import beef6 from "../images/beef6.jpeg";
import beef7 from "../images/beef7.jpeg";
import beef8 from "../images/beef8.jpeg";

export const BeefItems: ItemType[] = [
  {
    image: item1,
    name: "Beef Beacon",
  },
  {
    image: item2,
    name: "Beef Ham",
  },
  {
    image: item3,
    name: "Beef Chilli Salami",
  },
  {
    image: item4,
    name: "Beef Crumble Pizza Topping",
  },
];


export const ALLBeefItems: ItemType[] = [
  ...BeefItems,
  ...
  [
    {
      image: beef1,
      name: "Beef Bone In",
    },{
      image: beef2,
      name: "Beef Tehari Cut",
    },{
      image: beef3,
      name: "Beef Tenderloin Steak",
    },{
      image: beef4,
      name: "Beef T-Bone Steak",
    },{
      image: beef5,
      name: "Beef Sirloin Steak",
    },{
      image: beef6,
      name: "Beef Liver",
    },{
      image: beef7,
      name: "Beef Short Rib",
    },{
      image: beef8,
      name: "Beef Chuck Center Roast",
    }
  ]
]