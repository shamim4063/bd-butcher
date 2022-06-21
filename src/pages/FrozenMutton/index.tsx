import Items from "../../components/Common/Items";
import { ALLMutton } from "../../data/mutton";
import { ItemType } from "../../types/ItemType";

const FrozenMutton: React.FC<any> = (props: any) => {

  const ALLMuttonItems: ItemType[] = [...ALLMutton];

  return (
    <div className="container">
      <div className="row selling-items">
        <Items items={ALLMuttonItems} title="Mutton" />
      </div>
    </div>
  );
};

export default FrozenMutton;
