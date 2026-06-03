import Text from "../components/ui/Text";
import InputSearch from "../components/common/InputSearch";
import { useState } from "react";

function Home() {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <div>
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
          value={input}
          setValue={setInput}
        />
      </div>
    </>
  );
}

export default Home;
