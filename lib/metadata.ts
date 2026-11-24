import { locales } from "@/app/navigation";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xboosthub.com";

// canonical + hreflang links for a page that exists in every locale
export function alternates(locale: string, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(
      locales.map((lang) => [lang, `/${lang}${path}`]),
    ),
  };
}
