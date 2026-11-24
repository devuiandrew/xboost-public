// Library imports
import Image from "next/image";

// Data and resources
import logo from "@/public/svg/logo-green-black-text.svg";
import VideoLoader from "@/components/ui/video-loader";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Case({ name, description, reverse, text, href, src }) {
  return (
    <>
      <div className="mb-8 flex flex-col items-center justify-center gap-2 md:flex-row">
        <div
          className={cn("w-full", reverse && "flex-row-reverse md:order-2 xl:pl-20")}
        >
          <div
            className={`flex flex-col gap-1 rounded-xs border-y p-4 md:p-8 lg:gap-4`}
          >
            <h3 className="text-center text-2xl font-black tracking-tighter text-boost-dark md:text-left lg:text-4xl">
              {name}
            </h3>
            <p className="mt-1 text-center text-lg leading-tight tracking-tight text-boost-gray md:text-left lg:mt-4 lg:text-2xl">
              {description}
            </p>
            <div
              className={`flex w-full items-center justify-center md:justify-start`}
            >
              <Link
                className="text-lg font-semibold uppercase text-boost-green lg:text-xl"
                href={href}
                target="_blank"
              >
                {text}
              </Link>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "relative flex h-full w-full flex-col items-center justify-center",
            reverse && "lg:order-1",
          )}
        >
          <div className="relative rounded-xs p-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Image
                src={logo}
                alt="green and black logo X-boost"
                className="hidden w-44 md:block"
                priority
                quality={100}
              />
            </div>
            <VideoLoader
              src={src}
              className="w-72 rounded-xs shadow-sm shadow-boost-dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
