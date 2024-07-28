import { Box } from "@chakra-ui/react";
import TitledLayout from "./layouts/titled";
import { Image } from "@chakra-ui/next-js";
import { useTranslations } from "next-intl";

function Hackathons() {
  const t = useTranslations("HomePage.Hackathons");

  return (
    <TitledLayout title={t("title")}>
      <Box className="flex flex-col md:flex-row md:items-center items-start justify-between">
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          width={1280 / 4.5}
          height={960 / 4.5}
          display="inline-block"
          borderRadius="10px"
          overflow="hidden"
          className="m-2"
        >
          <Image
            src="/images/hackathons/leaders2022.jpg"
            alt="Leaders hack 2022"
            loading="lazy"
            width={(1280 * 1.1) / 4.5}
            height={960 / 4.5}
            quality={100}
          />
        </Box>

        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          width={1280 / 4.5}
          height={960 / 4.5}
          display="inline-block"
          borderRadius="10px"
          overflow="hidden"
          className="m-2"
        >
          <Image
            src="/images/hackathons/travel2024.jpg"
            alt="Leaders hack 2022"
            loading="lazy"
            width={(1280 * 1.1) / 4.5}
            height={960 / 4.5}
            quality={100}
          />
        </Box>
      </Box>
    </TitledLayout>
  );
}

export default Hackathons;
