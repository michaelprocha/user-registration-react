import { Trash } from "lucide-react";
import Icon from "./ui/Icon";

function App() {
  return (
    <div className="p-5 flex flex-col gap-4 bg-yellow-500">
      <Trash className="fill-transparent size-10" />
      <Icon
        svg={Trash}
        color="primary"
        size="sm"
        animation="none"
      />
      <Icon
        svg={Trash}
        color="secondary"
        size="md"
        animation="none"
      />
      <Icon
        svg={Trash}
        color="tertiary"
        size="lg"
        animation="spin"
      />
    </div>
  );
}

export default App;
