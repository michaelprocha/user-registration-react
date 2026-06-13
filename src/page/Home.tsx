import Text from "../components/ui/Text";
import InputSearch from "../components/common/InputSearch";
import { useState } from "react";
import UsersList from "../components/common/UsersList";

function Home() {
  const [inputToFilterList, setInputToFilterList] = useState<string>("");
  const [filterList, setFilterList] = useState<string>("");

  const handleFilterList = () => {
    setFilterList(inputToFilterList);
  };

  return (
    <>
      <div className="pt-16 pb-4 mb-14 flex items-end justify-between border-b-2 dark:border-white border-black">
        <div>
          <Text
            as="h1"
            variant="xl"
          >
            Usuários
          </Text>
          <Text
            as="p"
            variant="base"
          >
            Gerenciamento central do sistema operacional.
          </Text>
        </div>
        <InputSearch
          value={inputToFilterList}
          setValue={setInputToFilterList}
          onClick={handleFilterList}
        />
      </div>
      <UsersList filterList={filterList} />
    </>
  );
}

export default Home;
