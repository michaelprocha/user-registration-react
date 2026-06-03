import { Trash } from "lucide-react";
import { Search } from "lucide-react";
import Icon from "./components/ui/Icon";
import Skeleton from "./components/ui/Skeleton";
import Text from "./components/ui/Text";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";
import Header from "./components/layouts/Header";
import InputSearch from "./components/common/InputSearch";
import { useState } from "react";
import UsersList from "./components/common/UsersList";
import Footer from "./components/layouts/Footer";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div className="p-5 flex flex-col gap-4 bg-white dark:bg-black">
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
      <div className="p-5 flex flex-col gap-4 bg-white dark:bg-black">
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
      <div className="p-5 flex flex-col gap-4 bg-white dark:bg-black">
        <Input type="search" />
      </div>
      <div className="p-5 flex flex-col gap-4 bg-white dark:bg-black">
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
      <div className="p-4 bg-white dark:bg-black">
        <Select
          options={[
            { value: "opt1" },
            { value: "opt2" },
            { value: "opt3", label: "Opção 3" },
          ]}
        />
      </div>
      <div className="p-4 bg-white dark:bg-black">
        <InputSearch
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="p-4 bg-white dark:bg-black w-full">
        <UsersList />
      </div>
      <Footer />
    </>
  );
}

export default App;
