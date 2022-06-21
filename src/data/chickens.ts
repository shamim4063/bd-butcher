import { ItemType } from "../types/ItemType";

import item9 from "../images/item9.jpeg";
import item10 from "../images/item10.jpeg";
import item11 from "../images/item11.jpeg";
import item12 from "../images/item12.jpeg";

import chicken1 from "../images/chicken1.jpeg";
import chicken2 from "../images/chicken2.jpeg";
import chicken3 from "../images/chicken3.jpeg";
import chicken4 from "../images/chicken4.jpeg";
import chicken5 from "../images/chicken5.jpeg";
import chicken6 from "../images/chicken6.jpeg";
import chicken7 from "../images/chicken7.jpeg";
import chicken8 from "../images/chicken8.jpeg";




export const ChickenItems: ItemType[] = [
  {
    image: item9,
    name: "Frozen Chicken",
  },
  {
    image: item10,
    name: "Beef Beacon",
  },
  {
    image: item11,
    name: "Chicken Wings",
  },
  {
    image: item12,
    name: "Chicken Breast",
  }
];

export const ALLChickens: ItemType[] = [
  ...ChickenItems,
  ...
  [
    {
      image: chicken1,
      name: "Chicken Liver",
    },{
      image: chicken2,
      name: "Chicken Wings",
    },{
      image: chicken3,
      name: "Half Chicken",
    },{
      image: chicken4,
      name: "Boneless Chicken",
    }
    ,{
      image: chicken5,
      name: "Chicken Sausages",
    },{
      image: chicken6,
      name: "Chicken Keema",
    },{
      image: chicken7,
      name: "Chicken Nuget",
    },{
      image: chicken8,
      name: "Chicken Ball",
    }
  ]
]