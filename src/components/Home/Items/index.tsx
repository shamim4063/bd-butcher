import React from "react";

import "./index.scss";

import { Card } from "react-bootstrap";
import { ChickenItems } from "../../../data/chickens";
import { BeefItems } from "../../../data/beef";
import { MuttonItems } from "../../../data/mutton";

interface ItemType {
  image: string;
  name: string;
}

const Items: React.FC<any> = () => {
  
  const ALL_ITEMS: ItemType[] = [...BeefItems, ...MuttonItems, ...ChickenItems];

  return (
    <>
      <div className="row selling-items">
        <div className="col-12">
          <h3>OUR FEATURED FROZEN CHICKEN, BEEF AND MUTTON</h3> <br />
        </div>
        {ALL_ITEMS.map((item: ItemType, index:number) => (
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} alt="beef1" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;