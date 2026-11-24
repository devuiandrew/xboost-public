// Library imports
import { useTranslations } from "next-intl";

// Local modules
import SectionContainer from "@/components/ui/section-container";

//Ui imports
import { H2 } from "@/components/ui/headers";
import { Case } from "./case-card";

export function CompanyCases() {
  const t = useTranslations("mainPage.ourCases");

  const cases = Object.values(t.raw("cases"));

  return (
    <SectionContainer id="our-cases">
      <div className="text-center pb-4 xl:grid xl:grid-cols-2 w-4/6 mx-auto">
        <H2 className="text-boost-dark">{t("header")}</H2>
      </div>
      {cases.map((item, index) => (
        <Case
          key={index}
          reverse={item.reverse}
          name={item.name}
          description={item.description}
          text={item.button.text}
          href={item.button.href}
          src={item.src}
        />
      ))}
    </SectionContainer>
  );
}
