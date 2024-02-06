import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
import { localePrefix } from "./navConfig";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ko)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
