// Library imports
import { useTranslations } from "next-intl";

// UI Components
import { ContactFormButton } from "@/components/ui/contact-form-button";
import { LargeLogo } from "./3d-large-logo";
import { H1 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import SectionContainer from "@/components/ui/section-container";

export function Home() {
  const t = useTranslations("mainPage.home");

  return (
    <SectionContainer id="home" className="bg-boost-dark">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:gap-4">
        <div className="w-full flex flex-col lg:w-1/2 gap-4 lg:my-0">
          <H1 className="text-boost-light lg:text-left text-center text-2xl">{t("header")}</H1>

          <LeadingParagraph className="lg:text-left text-center">{t("text")}</LeadingParagraph>

          <div className="lg:justify-start flex flex-shrink-0 justify-center w-full">
            <ContactFormButton className="py-5 md:px-10 text-md lg:text-xl">{t("actions.text")}</ContactFormButton>
          </div>
        </div>
        <LargeLogo />
      </div>
    </SectionContainer>
  );
}
