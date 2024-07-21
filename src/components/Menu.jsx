import { Link } from "@chakra-ui/next-js";
import { Container } from "@chakra-ui/react";
import GithubIcon from "./icons/Github";

function Menu() {
  return (
    <Container className="flex justify-between fixed z-50 w-full p-3 items-center backdrop-blur-md">
      <Link
        href="/"
        className="text-md font-bold hover:text-gray-400"
        sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
      >
        Nikolay Varlamov
      </Link>
      <Link
        href="https://github.com/Minish144/minish-homepage"
        isExternal={true}
        className="flex items-center ml-2 hover:text-gray-400"
      >
        <GithubIcon />
        <span className="ml-1.5">Source</span>
      </Link>
    </Container>
  );
}

export default Menu;
