// Library imports
import { useTranslations } from "next-intl";

// UI Component imports
import { H2 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import { ContactFormButton } from "@/components/ui/contact-form-button";
import VideoLoader from "@/components/ui/video-loader";

export default function CTA() {
  const t = useTranslations(`categoryPage.shared.cta`);

  return (
    <section id="cta" className="bg-boost-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col items-start justify-center md:w-1/2 lg:pr-8">
            <H2>{t("header")}</H2>
            <LeadingParagraph>{t("description")}</LeadingParagraph>
            <div className="self-center pb-8 md:self-start">
              <ContactFormButton className={""}>
                {t("button-text")}
              </ContactFormButton>
            </div>
          </div>
          <div className="flex h-[70vh] w-full flex-shrink-0 flex-grow justify-center md:w-1/2">
            <VideoLoader
              src={"/video/main-page/main-video.mp4"}
              className={"h-full w-72 rounded-xs object-cover"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
