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

interface ItemsProps {
  items: Array<ItemType>;
  title: string;
}

const Items: React.FC<ItemsProps> = (props: ItemsProps) => {
  const { items, title } = props;
  return (
    <>
      <div className="row selling-items">
        <div className="col-12">
          <h3>{title}</h3> <br />
        </div>
        {items?.map((item: ItemType, index: number) => (
          <div
            className="col-xl-3 col-lg-4 col-sm-6 mb-4 card-item"
            key={index}
          >
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
