import CategoryLink from "./category-link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import VideoLoader from "@/components/ui/video-loader";

export function CategoryCard({ src, title, info, url, buttonText }) {
  return (
    <>
      <Card className="rounded-xs">
        <CardHeader className="p-0 shrink-0">
          <VideoLoader src={src} className={"h-max max-h-[70vh] object-fill"} />
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-white p-6 flex flex-col justify-between">
            <CategoryLink slug={url} className="mb-4">
              {buttonText}
            </CategoryLink>
            <div className="flex-1">
              <p className="text-xl font-semibold text-boost-dark">{title}</p>
              <p className="mt-3 text-base text-boost-gray/80">{info}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
