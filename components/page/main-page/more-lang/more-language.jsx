// Library imports
import { BiSolidCheckCircle } from "react-icons/bi";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Local modules
import collageSmall from "@/public/imgs/webp/Collage.webp";
import collageBig from "@/public/imgs/webp/CollageB.webp";
import languageGroupImg from "@/public/imgs/webp/languange.webp";

// User interface components
import { ContactFormButton } from "@/components/ui/contact-form-button";
import SectionContainer from "@/components/ui/section-container";
import { H2 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";

export function MoreLanguage() {
  const t = useTranslations("mainPage.moreLang");
  const langs = Object.values(t.raw("languages"));
  return (
    <SectionContainer id={"more-language"} className="bg-boost-light">
      <div className="bg-white text-center lg:text-left">
        <div className="flex flex-wrap-reverse items-center">
          <div className="w-full lg:w-7/12 py-12 md:px-12">
            <H2 className="text-boost-dark">{t("header")}</H2>
            <LeadingParagraph className="text-boost-gray">{t("text")}</LeadingParagraph>
            <div className="flex justify-center lg:justify-start col-span-2">
              <Image src={languageGroupImg} alt="Flags of countries" className="w-auto h-16 sm:h-20 mb-4" />
            </div>
            <div className="w-1/2 md:w-2/4 lg:w-3/4 xl:w-2/4 grid grid-cols-1 auto-rows-auto justify-center sm:grid-cols-2 mb-8 px-6 gap-y-4 mx-auto lg:mx-0">
              {langs.map((item, index) => (
                <p key={index} className="flex justify-start">
                  <BiSolidCheckCircle className="mt-1 float-left text-boost-green mr-2" />
                  {item}
                </p>
              ))}
            </div>
            <ContactFormButton className={"px-8 py-4"}>{t("button.text")}</ContactFormButton>
          </div>
          <div className="w-full lg:w-5/12">
            <Image src={collageSmall} alt="Trendy Pants and Shoes" className="w-full lg:hidden rounded-lg" />
            <Image src={collageBig} alt="Trendy Pants and Shoes" className="hidden lg:block w-full rounded-lg" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
