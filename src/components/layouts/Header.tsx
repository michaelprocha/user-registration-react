import type { ComponentProps } from "react";
import Text from "../ui/Text";
import { NavLink } from "react-router";

interface Link {
  text: string;
  link: string;
}

type HeaderProps = ComponentProps<"header"> & {
  link?: Link;
};

function Header({ link, ...props }: HeaderProps) {
  return (
    <header
      className={`border-b-2 border-black dark:border-white 
    h-21 flex justify-between items-center px-8 bg-gray-300 dark:bg-black`}
      {...props}
    >
      <Text
        as="h1"
        className="uppercase border border-black dark:border-white p-1"
        variant="lg"
      >
        Usercore
      </Text>
      {link && (
        <NavLink
          to={link.link}
          className={`bg-yellow-300 border-2 border-black
        dark:border-white shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(250,250,250,1)]
        py-1 px-2`}
        >
          <Text
            variant="lg"
            className="uppercase text-black dark:text-black"
          >
            {link.text}
          </Text>
        </NavLink>
      )}
    </header>
  );
}

export default Header;
