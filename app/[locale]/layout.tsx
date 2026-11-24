// Library imports
import { Suspense } from "react";
import localFont from "next/font/local";
import {
  NextIntlClientProvider,
  useMessages,
  type AbstractIntlMessages,
} from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// UI imports
import "./globals.css";
import Loading from "./loading";
import { CookieConsent } from "@/components/page/shared/cookie-consent/cookie-consent";

// Local modules
import { locales } from "@/app/navigation";
import { siteUrl } from "@/lib/metadata";

const unbounded = localFont({
  src: "./font/Unbounded/Unbounded-VariableFont_wght.ttf",
  display: "swap",
});

// Namespaces used by client components. Everything else is rendered on the server,
// so there is no need to ship it to the browser.
const clientMainPageNamespaces = ["navigation", "popup", "cookies"];

function pickClientMessages(
  messages: AbstractIntlMessages,
): AbstractIntlMessages {
  const mainPage = messages.mainPage as AbstractIntlMessages;
  return {
    shared: messages.shared,
    categoryPage: messages.categoryPage,
    mainPage: Object.fromEntries(
      clientMainPageNamespaces.map((key) => [key, mainPage[key]]),
    ),
  };
}

export const metadata = {
  metadataBase: new URL(siteUrl),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className={unbounded.className}>
      <body>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider messages={pickClientMessages(messages)}>
            {children}
            <CookieConsent />
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
