// Library imports
import { useTranslations } from "next-intl";

// UI imports
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ContactFormButton } from "@/components/ui/contact-form-button";

// Local modules
import { NavigationLogo } from "./navigation-logo";
import { NavigationSelectList } from "./navigation-select-list";
import { SideNavigation } from "./side-navigation";
import { NavigaitonSideMenuButton } from "./navigation-side-menu-button";
import { ChangeLanguage } from "./change-language";
import { categories } from "@/lib/categories";

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("mainPage.navigation");
  const verticalContentList = ["why-x-boost", "our-cases", "how-it-works"];
  const categoryList = [...categories];

  return (
    <>
      <FloatingNav className="shadow">
        <header className="container mx-auto px-4 py-2">
          <NavigationMenu className="block">
            <NavigationMenuList className="justify-between">
              <NavigationMenuItem>
                <NavigationLogo />
              </NavigationMenuItem>
              <li className="hidden lg:block">
                <NavigationSelectList
                  translationsKey={"mainPage.navigation.select-list"}
                  verticalContentList={verticalContentList}
                  categoryList={categoryList}
                />
              </li>
              <NavigationMenuItem className="hidden items-center gap-4 lg:flex">
                <ContactFormButton>{t("getStarted")}</ContactFormButton>
                <ChangeLanguage locale={locale} />
              </NavigationMenuItem>
              <NavigationMenuItem className="block lg:hidden">
                <NavigaitonSideMenuButton />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
      </FloatingNav>
      {/* Outside of FloatingNav: its transform/opacity animation would move and hide the fixed side menu */}
      <SideNavigation
        translationsKey={"mainPage.navigation.select-list"}
        locale={locale}
        buttonText={t("getStarted")}
        verticalContentList={verticalContentList}
        categoryList={categoryList}
      />
    </>
  );
}
