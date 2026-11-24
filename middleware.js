import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/app/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  localeDetection: false,
});

export const config = {
  matcher: ["/", "/(en|ru|uk)/:path*"],
};
