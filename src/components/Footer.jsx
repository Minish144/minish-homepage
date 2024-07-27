import { useTranslations } from "next-intl";

const { Box } = require("@chakra-ui/react");

function Footer() {
  const t = useTranslations("HomePage.Footer");

  return (
    <Box className="text-sm mt-5 mb-5 text-white text-opacity-40">
      {t("text")}
    </Box>
  );
}

export default Footer;
