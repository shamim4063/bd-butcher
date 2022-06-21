import { ItemType } from "../types/ItemType";

import item5 from "../images/item5.jpeg";
import item6 from "../images/item6.jpeg";
import item7 from "../images/item7.jpeg";
import item8 from "../images/item8.jpeg";

import mutton1 from "../images/mutton1.jpeg";
import mutton2 from "../images/mutton2.jpeg";
import mutton3 from "../images/mutton3.jpeg";
import mutton4 from "../images/mutton4.jpeg";

export const MuttonItems: ItemType[] = [
  {
    image: item5,
    name: "Minced Mutton",
  },
  {
    image: item6,
    name: "Loin Mutton",
  },
  {
    image: item7,
    name: "Ribloin Chop",
  },
  {
    image: item8,
    name: "Shoulder Chop",
  },
];


export const ALLMutton: ItemType[] = [
  ...MuttonItems,
  ...
  [
    {
      image: mutton1,
      name: "Mutton Backleg",
    },{
      image: mutton2,
      name: "Mutton Backleg Boneless",
    },{
      image: mutton3,
      name: "Mutton Shank",
    },{
      image: mutton4,
      name: "Mutton Keema",
    }
  ]
]
