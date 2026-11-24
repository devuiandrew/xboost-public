// Library Imports
import { useTranslations } from "next-intl";

// UI Components
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import Link from "next/link";

export default function Home({ categoryName }) {
  const t = useTranslations(`categoryPage.${categoryName}.hero`);

  return (
    <section id="home" className="bg-boost-dark">
      <div className="container px-4 mx-auto pb-8">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center text-boost-light space-y-4 md:space-x-4">
            <div className="flex-col w-full md:w-1/2 pt-4 flex items-center md:items-start text-center md:text-start space-y-4">
              <H1>{t("header")}</H1>
              <LeadingParagraph>{t("text")}</LeadingParagraph>
              <Button asChild>
                <Link href={"#formats"}>{t("button-text")}</Link>
              </Button>
            </div>
            <div className="relative w-full h-full md:w-1/2 flex justify-center bg-grid-boost-neutral/20">
              <div
                className="absolute pointer-events-none inset-0
                            flex items-center justify-center bg-boost-dark
                            [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
              ></div>
              <div className="max-h-max max-w-96 my-auto">
                <video className="rounded-xs w-full h-full object-cover" autoPlay playsInline loop muted preload="none">
                  <source src={t("video-src")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
