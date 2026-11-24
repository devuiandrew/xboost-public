"use client";

import { useEffect, useRef, useState } from "react";
import LoadingSkeleton from "./loading-skeleton";
import VideoPlayer from "./video";
import { cn } from "@/lib/utils";

const VideoLoader = ({ src, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  // The <video> is mounted only once the container gets close to the viewport,
  // otherwise every autoplaying video on the page starts downloading at once.
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        `relative flex h-full w-full shrink-0 grow overflow-hidden`,
        className,
      )}
      {...props}
    >
      <LoadingSkeleton isLoading={isLoading} />
      {isInView && (
        <VideoPlayer
          src={src}
          onLoadedData={() => {
            setIsLoading(false);
          }}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default VideoLoader;
