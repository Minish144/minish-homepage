import { Box } from "@chakra-ui/react";
import TitledLayout from "./layouts/titled";
import { useTranslations } from "next-intl";

function Bio() {
  const t = useTranslations("HomePage.Bio");

  return (
    <TitledLayout title={t("title")}>
      <Box className="mb-4 flex">
        <Box className="mr-5 font-bold">2001</Box>
        <Box>{t("born")}</Box>
      </Box>

      <Box className="mb-4 flex">
        <Box className="mr-4">
          <Box className="font-bold">2019-</Box>
          <Box className="font-bold">2023</Box>
        </Box>
        <Box>{t("uni")}</Box>
      </Box>

      <Box className="mb-4 flex">
        <Box className="mr-4">
          <Box className="font-bold">2021-</Box>
          <Box className="font-bold">2022</Box>
        </Box>
        <Box>{t("qoollo")}</Box>
      </Box>

      <Box className="flex">
        <Box className="mr-4">
          <Box className="font-bold">2022-</Box>
          <Box className="font-bold">now</Box>
        </Box>
        <Box>{t("smkt")}</Box>
      </Box>
    </TitledLayout>
  );
}

export default Bio;
