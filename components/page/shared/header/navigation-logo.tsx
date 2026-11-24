// Library imports
import Image from "next/image";

// UI imports
import { Link } from "@/app/navigation";

// Data and resources
import logo from "@/public/svg/logo-green-black-text.svg";
import alternativeLogo from "@/public/svg/logo-icon-green-black.svg";

// User interface components
export function NavigationLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      className="flex cursor-pointer items-center gap-1"
      href="/"
      onClick={onClick}
    >
      <Image
        src={logo}
        alt="green and black logo X-boost"
        className="block w-44 max-[420px]:hidden"
        priority
      />
      <Image
        src={alternativeLogo}
        alt="green and black logo X"
        className="hidden h-8 max-w-max max-[420px]:block lg:h-10"
        priority
      />
    </Link>
  );
}
