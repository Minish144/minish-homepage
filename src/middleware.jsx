import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, defaultMW } from "./i18n";

export default createMiddleware({
  localeDetection: false,
  locales: locales,
  defaultLocale: defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|jp|ru)/:path*"],
};
