// Library imports
import { useTranslations } from "next-intl";

// Local modules
import { H2 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";

// User interface components
import { Card } from "./social-card";
import SectionContainer from "@/components/ui/section-container";

export function SocialProof() {
  const t = useTranslations("mainPage.socialProof");

  return (
    <SectionContainer id="why-x-boost" className="bg-boost-dark">
      {/* <H2 className="text-boost-light text-center mb-16">{t("header")}</H2> */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 text-boost-light mb-12">
        {Object.values(t.raw("statistics")).map((item, index) => (
          <Card key={index} number={item.value} type={item.label} />
        ))}
      </div>
      <div className="text-lg text-gray-400">
        <LeadingParagraph className="text-center lg:text-left text-boost-neutral">{t("text")}</LeadingParagraph>
      </div>
    </SectionContainer>
  );
}
