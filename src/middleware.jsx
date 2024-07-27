import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, defaultMW } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|jp|ru)/:path*"],
};
