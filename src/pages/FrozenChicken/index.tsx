import Items from "../../components/Common/Items";

import { ALLChickens } from "../../data/chickens";
import { ItemType } from "../../types/ItemType";

const FrozenChicken: React.FC<any> = (props: any) => {

  const AllChickens: ItemType[] = [...ALLChickens];
  
  return (
    <div className="container">
      <div className="row selling-items">
        <Items items={AllChickens} title="Chickens" />
      </div>
    </div>
  );
};

export default FrozenChicken;
