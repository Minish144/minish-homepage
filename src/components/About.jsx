import { useTranslations } from "next-intl";
import TitledLayout from "./layouts/titled";

function About() {
  const t = useTranslations("HomePage.About");

  return (
    <TitledLayout title={t("title")}>
      <p className="text-indent">{t("text")}</p>
    </TitledLayout>
  );
}

export default About;
