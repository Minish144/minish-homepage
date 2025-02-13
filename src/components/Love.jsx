import { useTranslations } from "next-intl";
import TitledLayout from "./layouts/titled";

function Love() {
  const t = useTranslations("HomePage.Love");

  return (
    <TitledLayout title={t("title")}>
      <p className="text-indent">{t("text")}</p>
    </TitledLayout>
  );
}

export default Love;
