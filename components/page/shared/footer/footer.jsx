import Image from "next/image";
import { BiLogoYoutube, BiLogoInstagram, BiLogoTiktok, BiLogoTelegram, BiRightDownArrowCircle } from "react-icons/bi";

import logo from "@/public/svg/logo-green-black-text.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/app/navigation";

export default function Footer() {
  const t = useTranslations("mainPage.footer");
  const urlList = Object.values(t.raw("links"));
  return (
    <footer className="bg-white text-boost-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div>
              <Link href="/" aria-label="X-Boost" title="Company" className="inline-flex items-center">
                <Image src={logo} alt="logo x-boost " className="h-8 w-auto" />
              </Link>
            </div>
            <p className="text-sm mt-1">{t("textUp")}</p>
            <p className="mt-4 text-sm">{t("textDown")}</p>
          </div>

          <div className="flex flex-col gap-y-2 md:border-x md:mx-auto md:px-8 lg:px-14 xl:px-28">
            {urlList.map((item, index) => (
              <Link key={index} className="block text-sm text-boost-gray/60 hover:underline" href={item.href}>
                <BiRightDownArrowCircle className="float-left mt-1 mr-1" /> {item.text}
              </Link>
            ))}
          </div>

          <div>
            {/* <h3 className="text-sm font-semibold">{t("socials.header")}</h3>
            <div className="flex mt-2 space-x-2">
              <BiLogoTelegram className="h-5 w-5 text-boost-gray/60" />
              <BiLogoTiktok className="h-5 w-5 text-boost-gray/60" />
              <BiLogoInstagram className="h-5 w-5 text-boost-gray/60" />
              <BiLogoYoutube className="h-5 w-5 text-boost-gray/60" />
            </div> */}
            <div className="my-4 ">
              <h3 className="text-sm font-semibold">{t("contacts.header")}</h3>
              <div className="md:col-start-4 text-sm">
                {/* <div className="flex">
                  <p className="mr-1 "> {t("contacts.phone")}</p>
                  <a href="tel:(+380)97-466-5809" aria-label="(+380)97-466-5809" className="transition-colors duration-300 text-gray-400 hover:">
                    (+380) 97-466-5809
                  </a>
                </div> */}
                <div className="flex flex-wrap">
                  <p className="mr-1  ">{t("contacts.email")}</p>
                  <a href="mailto:xboosthub@gmail.com" aria-label=" xboosthub@gmail.com" className="transition-colors duration-300 text-gray-400 hover:">
                    xboosthub@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* Placeholder for payment methods */}
            {/* <div className="mt-4">
              <p className="text-xs text-boost-gray/60">Most payment methods and cryptocurrencies accepted</p>
              <div className="flex mt-2 space-x-2"></div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between pt-5 pb-10 max-md:border-t">
          <p className="text-sm text-gray-400">{t("rights")}</p>
          {/* TODO: add FAQ and legal pages */}
          {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="/" className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
