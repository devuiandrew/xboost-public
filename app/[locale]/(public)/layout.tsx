// Library imports
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// UI imports
import Navigation from "@/components/page/shared/header/navigation";
import Footer from "@/components/page/shared/footer/footer";

// Local modules
import { NavigationContextProvider } from "@/context/context-api";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AnAuthLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <NavigationContextProvider>
      <Navigation locale={locale} />
      {children}
      <Footer />
    </NavigationContextProvider>
  );
}
