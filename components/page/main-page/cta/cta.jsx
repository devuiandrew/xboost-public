import { ContactFormButton } from "../../../ui/contact-form-button";
import { useTranslations } from "next-intl";
import { ModalHandler } from "./state-button";
import { SubscriptionPopup } from "../popup/subscription-popup";
import SectionContainer from "@/components/ui/section-container";
import VideoLoader from "@/components/ui/video-loader";

export function CTA() {
  const t = useTranslations("mainPage.cta");
  return (
    <SectionContainer id="book-a-call" className="bg-boost-dark">
      <div className="flex">
        <div className="w-full flex flex-col justify-center text-center lg:text-left lg:pr-4 lg:w-2/3">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-boost-light">{t("header")}</h2>

          <p className="mb-4 font-light md:text-lg lg:text-lg text-boost-neutral">{t("topText")}</p>
          <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-lg text-boost-neutral ">{t("bottomText")}</p>

          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <ContactFormButton>{t("call.text")}</ContactFormButton>
            {/* TODO: re-enable once the subscription popup has a backend */}
            {/* <ModalHandler translation={t("button.text")} /> */}
          </div>
        </div>
        <div className="hidden lg:flex justify-center w-1/3">
          <div className="h-full rounded-xs  w-72  shadow  shadow-boost-gray">
            <VideoLoader src={"/video/main-page/main-video.mp4"} className={"rounded-xs w-72 h-full object-cover"} />
          </div>
        </div>
      </div>
      <SubscriptionPopup />
    </SectionContainer>
  );
}
