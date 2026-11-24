"use client";
import React, { useEffect, useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IoIosClose } from "react-icons/io";

import { ContactFormButton } from "@/components/ui/contact-form-button";
import { ChangeLanguage } from "./change-language";
import { useNavigationContext } from "../../../../context/context-api";
import { NavigationLogo } from "./navigation-logo";
import { Link } from "@/app/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  translationsKey: string;
  locale: string;
  buttonText: string;
  verticalContentList: string[];
  categoryList: string[];
};

export function SideNavigation({
  translationsKey,
  locale,
  buttonText,
  verticalContentList,
  categoryList,
}: Props) {
  const { navmenu, setNavmenu } = useNavigationContext();
  const t = useTranslations(translationsKey);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNavmenu]);
  return (
    <div
      ref={menuRef}
      className={`fixed bottom-0 right-0 top-0 z-[5001] w-9/12 max-w-md transform bg-white p-4 shadow-md transition-all duration-500 ease-in-out lg:hidden ${navmenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="m-auto flex flex-col gap-8 p-4">
        <div className="flex justify-between">
          <NavigationLogo
            onClick={() => {
              setNavmenu(false);
            }}
          />
          <button onClick={() => setNavmenu(!navmenu)}>
            <IoIosClose
              size={50}
              className="rounded-sm text-boost-green hover:bg-boost-green hover:text-boost-dark active:opacity-90"
            />
          </button>
        </div>
        <Accordion type="single" collapsible className="text- w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md data-[state=open]:underline data-[state=open]:decoration-boost-green">
              {t("vertical-content.header")}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4">
                {verticalContentList.map((item) => (
                  <AccordingItem
                    key={item}
                    href={t(`vertical-content.list.${item}.href`)}
                  >
                    {t(`vertical-content.list.${item}.text`)}
                  </AccordingItem>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md data-[state=open]:underline data-[state=open]:decoration-boost-green">
              {t("categories.header")}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4">
                {categoryList.map((item) => (
                  <AccordingItem
                    key={item}
                    href={t(`categories.list.${item}.href`)}
                  >
                    {t(`categories.list.${item}.text`)}
                  </AccordingItem>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem
            value="item-3"
            className="flex flex-1 cursor-pointer items-center py-4 font-medium transition-all hover:underline active:decoration-boost-green"
            href="/blog"
          >
            {t("blog.header")}
          </AccordionItem> */}
        </Accordion>
        <div className="flex flex-wrap">
          <div className="flex w-full items-center justify-end max-[420px]:flex-col">
            <div className={"w-1/2 max-[420px]:w-full"}>
              <ContactFormButton>{buttonText}</ContactFormButton>
            </div>
            <div className="flex w-1/2 justify-end max-[420px]:w-full">
              <ChangeLanguage locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordingItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const AccordingItem = ({ href, className, children }: AccordingItemProps) => {
  const { setNavmenu } = useNavigationContext();
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex flex-1 cursor-pointer select-none border-b border-transparent text-lg text-gray-500 no-underline outline-none transition-all hover:border-black hover:text-black",
          className,
        )}
        onClick={() => {
          setNavmenu(false);
        }}
        scroll={true}
      >
        {children}
      </Link>
    </li>
  );
};
