import { Link } from "@chakra-ui/next-js";
import { Container } from "@chakra-ui/react";

function Menu() {
  return (
    <Container className="fixed z-50 w-full p-3 font-bold text-lg items-center backdrop-blur-md">
      <Link
        href="/"
        className="ml-2 hover:text-gray-400"
        sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
      >
        🤖 Minish144
      </Link>
    </Container>
  );
}

export default Menu;
