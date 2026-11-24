import { H2 } from "@/components/ui/headers";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import SectionContainer from "@/components/ui/section-container";
import VideoLoader from "@/components/ui/video-loader";
import { useTranslations } from "next-intl";

function Specificity({}) {
  const t = useTranslations("mainPage.specificity");

  return (
    <SectionContainer id={"how-it-works"} className={"bg-boost-dark"}>
      <div className="text-center mb-12 ">
        <H2>{t("header")}</H2>
        <LeadingParagraph>{t("text")}</LeadingParagraph>
      </div>
      <div className="flex flex-col">
        {Object.values(t.raw("stages")).map((item, index) => (
          <div key={index} className="border-y w-full flex justify-center p-0">
            <div className="py-8 h-full w-full gap-4 lg:grid lg:grid-cols-3 lg:space-x-4 lg:space-y-0 space-y-4 flex flex-col">
              <div className="flex h-16 w-16 mx-auto items-center justify-center text-boost-dark bg-boost-green rounded-xs">
                <span className="text-3xl font-bold">{item.count}</span>
              </div>
              <div className="flex flex-col max-lg:text-center flex-1">
                <h3 className="text-2xl text-boost-light leading-tight font-bold mb-2">{item.header}</h3>
                <div className="text-boost-neutral font-medium tracking-normal leading-6 whitespace-pre-line">{item.text}</div>
                {item.subtext &&
                  item.subtext.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-xl text-boost-light leading-tight font-bold mt-6">{item.header}</h4>
                      <p className="text-boost-neutral font-medium tracking-normal leading-6 whitespace-pre-line">{item.text}</p>
                    </div>
                  ))}
              </div>
              <div className="h-[70vh] w-full object-contain">
                <VideoLoader src={item.src} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Specificity;
