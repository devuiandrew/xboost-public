import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Home from "@/components/page/categories-page/home/home";
import Formats from "@/components/page/categories-page/format/formats";
import Calculator from "@/components/page/categories-page/calculator/calculator";
import CTA from "@/components/page/categories-page/cta/cta";
import OtherCategories from "@/components/page/categories-page/other-categories/other-categories";
import { categories, isCategory } from "@/lib/categories";
import { alternates } from "@/lib/metadata";

type Props = {
  params: { locale: string; slug: string };
};

// Unknown slugs render the 404 page instead of crashing on missing translations
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { locale, slug } }: Props) {
  if (!isCategory(slug)) return {};
  const t = await getTranslations({
    locale,
    namespace: `categoryPage.${slug}.hero`,
  });
  return {
    title: `${t("header")} | X-Boost`,
    description: t("text"),
    alternates: alternates(locale, `/category/${slug}`),
  };
}

export default function Category({ params: { locale, slug } }: Props) {
  if (!isCategory(slug)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Home categoryName={slug} />
      <Formats categoryName={slug} />

      {/* TODO: pricing is being redesigned as a dynamic price builder */}
      {/* <CategoryPrice categoryName={params.slug} /> */}

      <Calculator categoryName={slug} />
      <OtherCategories categoryName={slug} />
      <CTA />
    </main>
  );
}
