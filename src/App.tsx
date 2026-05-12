import { Trash } from "lucide-react";
import { Search } from "lucide-react";
import Icon from "./ui/Icon";
import Skeleton from "./ui/Skeleton";
import Text from "./ui/Text";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <div className="p-5 flex flex-col gap-4 bg-black">
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
      <div className="p-5 flex flex-col gap-4 bg-black">
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-100" />
      </div>
      <div className="p-5 flex flex-col gap-4 bg-white">
        <Skeleton className="h-21.5 border-2 md:border-y-2 md:border-x-0 border-gray-500" />
      </div>
      <div className="p-5 flex flex-col gap-4 bg-black">
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
      <div className="p-5 flex flex-col gap-4 bg-black">
        <Input type="search" />
      </div>
      <div className="p-5 flex flex-col gap-4 bg-black">
        <Input
          icon={Search}
          iconPosition="left"
        />
        <Input
          variant="secondary"
          icon={Search}
          iconPosition="right"
        />
        <Input
          variant="secondary"
          size="lg"
        />
      </div>
    </>
  );
}

export default App;
