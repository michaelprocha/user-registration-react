import { Trash } from "lucide-react";
import Icon from "./ui/Icon";
import Skeleton from "./ui/Skeleton";
import Text from "./ui/Text";

function App() {
  return (
    <>
      <div className="p-5 flex flex-col gap-4 bg-yellow-500">
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
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-500" />
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-100" />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Text
          as="h1"
          variant="xl"
        >
          titulo
        </Text>
        <Text as="p">base</Text>
        <Text
          variant="lg"
          as="p"
        >
          large text
        </Text>
        <Text
          variant="md"
          as="p"
        >
          medium text
        </Text>
        <Text
          as="p"
          variant="sm"
        >
          small
        </Text>
      </div>
    </>
  );
}

export default App;
