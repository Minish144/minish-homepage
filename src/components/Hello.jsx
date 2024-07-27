import { Box, Container } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

function Hello() {
  const t = useTranslations("HomePage.Hello");

  return (
    <Container>
      <Box className="text-center bg-gray_custom dark:bg-dark_gray_custom p-3 mb-5 rounded-lg">
        {t("text")}
      </Box>
    </Container>
  );
}

export default Hello;
