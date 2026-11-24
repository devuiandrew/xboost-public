import { unstable_setRequestLocale } from "next-intl/server";

//local imports
import { Home } from "@/components/page/main-page/home/home";
import { SocialProof } from "@/components/page/main-page/social-prof/social-proof";
import { CompanyCases } from "@/components/page/main-page/cases/company-cases";
import { MoreLanguage } from "@/components/page/main-page/more-lang/more-language";
import Specificity from "@/components/page/main-page/cooperation-specificity/specificity";
import { CTA } from "@/components/page/main-page/cta/cta";
import CategoryList from "@/components/page/main-page/categories/categories";
import { alternates } from "@/lib/metadata";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params: { locale } }: Props) {
  return { alternates: alternates(locale) };
}

export default function VerticalContentPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Home />
      <SocialProof />
      <CompanyCases />
      <MoreLanguage />
      <Specificity />
      <CategoryList />
      <CTA />
    </main>
  );
}
