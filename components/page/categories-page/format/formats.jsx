// Library imports
import * as React from "react";
import { useTranslations } from "next-intl";

// Local components
import { FormatCarouselContent } from "./carusel";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import { H2 } from "@/components/ui/headers";
import SectionContainer from "@/components/ui/section-container";

export default function Formats({ categoryName }) {
  const t = useTranslations(`categoryPage.${categoryName}.formats`);

  return (
    <SectionContainer id="formats" className="bg-boost-dark">
      <div className="text-center">
        <H2>{t("header")}</H2>
        <LeadingParagraph>{t("text")}</LeadingParagraph>
      </div>
      <FormatCarouselContent categoryName={categoryName} />
    </SectionContainer>
  );
}
