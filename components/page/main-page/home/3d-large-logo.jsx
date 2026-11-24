// Library Imports
import Image from "next/image";

// Local Imports
import img from "@/public/imgs/logo-3d-v2.png";

// UI Components
export const LargeLogo = () => {
  return (
    <div className="w-full pb-8 lg:w-1/2">
      <Image
        src={img}
        alt="3d logo x-boost without text"
        className="h-auto w-full"
        priority
        quality={100}
      />
    </div>
  );
};
