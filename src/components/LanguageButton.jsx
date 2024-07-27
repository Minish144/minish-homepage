import { Button } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";

import { locales, defaultLocale } from "@/i18n";

const LanguageButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentLocale = () => {
    const pathSegments = pathname.split("/");
    return pathSegments[1] || defaultLocale;
  };

  const getNextLocale = () => {
    const currentLocale = getCurrentLocale();
    const currentIndex = locales.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    return locales[nextIndex];
  };

  const changeLocale = () => {
    const nextLocale = getNextLocale();
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <Button size="xs" colorScheme="teal" onClick={changeLocale}>
      {getCurrentLocale().toUpperCase()}
    </Button>
  );
};

export default LanguageButton;
