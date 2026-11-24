"use client";

// Library imports
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

// User interface components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoLoader from "@/components/ui/video-loader";
import { cn } from "@/lib/utils";

// Arrows sit in the side gutters of the carousel (lg:px-16) instead of overlapping the videos
const arrowClassName =
  "h-12 w-12 bg-boost-dark text-boost-green hover:bg-boost-green hover:text-boost-dark max-lg:hidden";

export function FormatCarouselContent({ categoryName }) {
  const t = useTranslations(`categoryPage.${categoryName}.formats`);
  const list = Object.values(t.raw("list"));
  return (
    <>
      <Carousel
        className="lg:px-16"
        opts={{
          loop: true,
          align: "center",
          dragFree: true,
        }}
      >
        <CarouselContent className={cn(list.length <= 3 && "justify-center")}>
          {list.map((item, index) => (
            <CarouselItem
              key={index}
              className="relative min-w-96 basis-auto rounded-lg"
            >
              <Card className="relative border-none">
                <CardContent className="z-0 p-0">
                  <VideoLoader
                    src={item.videoSrc}
                    className="h-[70vh] max-w-96 rounded-lg bg-boost-dark"
                  />
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 flex flex-wrap gap-x-2 px-4 py-2">
                  {item.names.map((name, nameIndex) => (
                    <p
                      key={nameIndex}
                      className="mt-2 rounded border border-boost-green bg-boost-dark bg-opacity-30 px-2 py-1 text-xs text-boost-green backdrop-blur-xl md:text-sm"
                    >
                      {name}
                    </p>
                  ))}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn(arrowClassName, "left-0")} />
        <CarouselNext className={cn(arrowClassName, "right-0")} />
      </Carousel>
    </>
  );
}
