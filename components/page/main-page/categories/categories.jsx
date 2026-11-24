import { useTranslations } from "next-intl";
import { CategoryList } from "./category-list";
import SectionContainer from "@/components/ui/section-container";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import { H2 } from "@/components/ui/headers";

export default function Categories() {
  const t = useTranslations("mainPage.categories");
  const categoryList = Object.values(t.raw("list"));

  return (
    <SectionContainer id="categories" className="bg-boost-light">
      <div className="text-center">
        <LeadingParagraph className="font-semibold text-boost-green">
          {t("header")}
        </LeadingParagraph>
        <H2 className="text-boost-dark">{t("text")}</H2>
      </div>
      <CategoryList categoryList={categoryList} />
    </SectionContainer>
  );
}
