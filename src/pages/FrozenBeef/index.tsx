import Items from "../../components/Common/Items";
import { ALLBeefItems } from "../../data/beef";
import { ItemType } from "../../types/ItemType";

const FrozenBeef: React.FC<any> = (props: any) => {

    const AllBeefItems: ItemType[] = [...ALLBeefItems];
    
    return (
      <div className="container">
        <div className="row selling-items">
          <Items items={AllBeefItems} title="Beef" />
        </div>
      </div>
    );
}

export default FrozenBeef;