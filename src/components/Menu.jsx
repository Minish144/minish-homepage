import { Link } from "@chakra-ui/next-js";
import { Box, Container } from "@chakra-ui/react";
import GithubIcon from "./icons/githubIcon";
import { useTranslations } from "next-intl";
import LanguageButton from "./LanguageButton";

function Menu() {
  const t = useTranslations("HomePage.Menu");

  return (
    <Container className="flex justify-between fixed z-50 w-full p-3 items-center backdrop-blur-md">
      <Link
        href="/"
        className="text-md font-bold hover:text-gray-400"
        sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
      >
        {t("name")}
      </Link>
      <Box className="flex items-center gap-0.5">
        <LanguageButton />
        <Link
          href="https://github.com/Minish144/minish-homepage"
          isExternal={true}
          className="flex items-center ml-2 hover:text-gray-400"
        >
          <GithubIcon />
          <span className="ml-1.5">{t("source")}</span>
        </Link>
      </Box>
    </Container>
  );
}

export default Menu;
