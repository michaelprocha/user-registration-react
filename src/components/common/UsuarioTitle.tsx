import Text from "../ui/Text";

function UsuarioTitle() {
  return (
    <div className="flex flex-col gap-3">
      <Text
        variant="xl"
        className="uppercase font-bold"
      >
        usuários
      </Text>
      <Text
        variant="base"
        className="dark:text-gray-300 text-gray-700"
      >
        Gerenciamento central do sistema operacional.
      </Text>
    </div>
  );
}

export default UsuarioTitle;
