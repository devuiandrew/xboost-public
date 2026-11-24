import Image from "next/image";
import img from "@/public/gif/logo-green-black-text.gif";
export default function Loading() {
  return (
    <section className="flex h-screen w-full flex-shrink-0 flex-grow bg-boost-dark">
      <Image
        src={img}
        alt="loading animation"
        className="object-contain"
        priority
        quality={100}
        unoptimized
      />
    </section>
  );
}
