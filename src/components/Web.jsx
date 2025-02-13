import { Link } from "@chakra-ui/next-js";
import TitledLayout from "./layouts/titled";
import LinkedinIcon from "./icons/linkedinIcon";
import GithubIcon from "./icons/githubIcon";
import InstaIcon from "./icons/instaIcon";
import TelegramIcon from "./icons/telegramIcon";
import { Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

function Web() {
  const t = useTranslations("HomePage.Web");

  return (
    <TitledLayout title={t("title")}>
      <Box>
        <Link
          isExternal={true}
          href="https://www.linkedin.com/in/minish144"
          sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
          className="flex items-center p-2 hover:bg-teal-400 hover:bg-opacity-15 rounded-md"
        >
          <LinkedinIcon className="mr-2 dark:text-teal-400" />
          <span className="font-medium dark:text-teal-400">@minish144</span>
        </Link>

        <Link
          isExternal={true}
          href="https://github.com/minish144"
          sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
          className="flex items-center p-2 hover:bg-teal-400 hover:bg-opacity-15 rounded-md"
        >
          <GithubIcon className="mr-2 dark:text-teal-400" />
          <span className="font-medium dark:text-teal-400">@minish144</span>
        </Link>

        <Link
          isExternal={true}
          href="https://instagram.com/minish144"
          sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
          className="flex items-center p-2 hover:bg-teal-400 hover:bg-opacity-15 rounded-md"
        >
          <InstaIcon className="mr-2 dark:text-teal-400" />
          <span className="font-medium dark:text-teal-400">@minish144</span>
        </Link>

        <Link
          isExternal={true}
          href="https://telegram.me/minish144"
          sx={{ textDecoration: "none", ":hover": { textDecoration: "none" } }}
          className="flex items-center p-2 hover:bg-teal-400 hover:bg-opacity-15 rounded-md"
        >
          <TelegramIcon className="mr-2 dark:text-teal-400" />
          <span className="font-medium dark:text-teal-400">@minish144</span>
        </Link>
      </Box>
    </TitledLayout>
  );
}

export default Web;
