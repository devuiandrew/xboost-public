import { Link } from "@/app/navigation";
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/headers";
import SectionContainer from "@/components/ui/section-container";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("mainPage.not-found");
  return (
    <SectionContainer className="bg-white text-center h-lvh flex justify-center  items-center">
      <H1 className="mb-4 text-3xl tracking-tight font-bold text-boost-dark md:text-4xl">{t("text")}</H1>
      <p className="mb-10 text-lg font-light text-gray-500 ">{t("info")}</p>
      <Button asChild>
        <Link href={t("button.href")}>{t("button.text")}</Link>
      </Button>
    </SectionContainer>
  );
}
