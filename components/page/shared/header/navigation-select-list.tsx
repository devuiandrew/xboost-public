import * as React from "react";
import { Link } from "@/app/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

type Props = {
  translationsKey: string;
  verticalContentList: string[];
  categoryList: string[];
};

export function NavigationSelectList({
  translationsKey,
  verticalContentList,
  categoryList,
}: Props) {
  const t = useTranslations(translationsKey);
  const menuItemClass =
    "text-lg 2xl:text-xl uppercase text-gray-500 data-[state=open]:bg-boost-green data-[state=open]:text-boost-dark data-[active]:text-boost-green focus:bg-boost-green hover:bg-boost-green rounded-xs";

  return (
    <ul className="flex space-x-2">
      <NavigationMenuItem>
        <NavigationMenuTrigger className={menuItemClass}>
          {t("vertical-content.header")}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="rounded-xs">
          <ul className="grid w-[200px] gap-3 px-1 py-2 lg:grid-cols-1">
            {verticalContentList.map((item) => (
              <ListItem
                key={item}
                href={t(`vertical-content.list.${item}.href`)}
              >
                {t(`vertical-content.list.${item}.text`)}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className={menuItemClass}>
          {t("categories.header")}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="rounded-xs">
          <ul className="grid w-[200px] gap-3 p-4 md:grid-cols-1">
            {categoryList.map((item) => (
              <ListItem key={item} href={t(`categories.list.${item}.href`)}>
                {t(`categories.list.${item}.text`)}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <Link href={t("blog.href")} legacyBehavior passHref>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), menuItemClass)}>{t("blog.header")}</NavigationMenuLink>
        </Link>
      </NavigationMenuItem> */}
    </ul>
  );
}

type ListItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const ListItem = ({ href, className, children }: ListItemProps) => {
  return (
    <li className="hover:underline">
      <Link
        prefetch={false}
        href={href}
        className={cn(
          "block select-none p-3 text-gray-500 no-underline outline-none transition-colors hover:text-black",
          className,
        )}
        scroll={true}
      >
        <div className="text-sm font-medium leading-none text-inherit">
          {children}
        </div>
      </Link>
    </li>
  );
};
