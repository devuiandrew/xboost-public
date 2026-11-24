"use client";

// Library imports
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

// UI imports
import { Button } from "@/components/ui/button";
import GoogleAnalytics from "@/lib/google-analytics";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const t = useTranslations("mainPage.cookies");
  // undefined until read from localStorage on the client, then "agree" | "disagree" | null
  const [consent, setConsent] = useState(undefined);

  useEffect(() => {
    try {
      setConsent(localStorage.getItem(STORAGE_KEY));
    } catch {
      setConsent(null);
    }
  }, []);

  const saveConsent = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage is blocked: keep the choice for this visit only
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "agree" && <GoogleAnalytics />}
      {consent === null && (
        <div
          role="dialog"
          aria-label={t("header")}
          className="fixed inset-x-0 bottom-0 z-[6000] border-t border-boost-gray bg-boost-dark text-boost-light"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">{t("header")}</p>
              <p className="text-sm text-boost-neutral">{t("text")}</p>
            </div>
            <div className="flex shrink-0 gap-4">
              <Button onClick={() => saveConsent("agree")}>
                {t("buttons.agree")}
              </Button>
              <Button variant="outline" onClick={() => saveConsent("disagree")}>
                {t("buttons.disagree")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
