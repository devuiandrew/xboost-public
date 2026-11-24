// Library Imports
import { BiRightArrowAlt } from "react-icons/bi";
import { useTranslations } from "next-intl";

// UI Component Imports
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { H2 } from "@/components/ui/headers";

// Local Component Imports
import { Link } from "@/app/navigation";
import VideoLoader from "@/components/ui/video-loader";

export default function OtherCategories({ categoryName }) {
  const t = useTranslations(`categoryPage.shared.other-categories`);
  const categoryList = Object.entries(t.raw("categoryList"));

  return (
    <section id="other-categories" className="bg-boost-light">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <H2>{t("header")}</H2>
        </div>
        <div className="block lg:grid lg:grid-cols-3 lg:gap-4">
          {categoryList.map(
            ([key, item], index) =>
              key !== categoryName && (
                <Card
                  key={key}
                  className="mx-auto mb-4 flex flex-col max-lg:max-w-96 max-lg:border-none max-lg:shadow-none"
                >
                  <CardHeader className={"p-0 pb-4"}>
                    <VideoLoader
                      src={item.src}
                      className={"min-h-[50vh] rounded-xs lg:rounded-t-lg"}
                    />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <h3 className="mb-2 text-lg font-semibold text-boost-green">
                      {item.title}
                    </h3>
                    <p className="text-sm text-boost-gray">{item.info}</p>
                  </CardContent>
                  <CardFooter className="flex flex-grow flex-col px-6 pb-4">
                    <Link
                      className="mt-auto flex w-full items-center justify-between text-boost-green"
                      href={item.url}
                    >
                      {t("buttonText")}
                      <BiRightArrowAlt className="size-6 text-boost-green" />
                    </Link>
                  </CardFooter>
                </Card>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
