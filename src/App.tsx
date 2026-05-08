import { Trash } from "lucide-react";
import Icon from "./ui/Icon";
import Skeleton from "./ui/Skeleton";

function App() {
  return (
    <>
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
      <div className="p-5 flex flex-col gap-4">
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-500" />
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-100" />
      </div>
    </>
  );
}

export default App;
