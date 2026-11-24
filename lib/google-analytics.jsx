import React from "react";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// Rendered only after the visitor accepts cookies (see CookieConsent)
const GoogleAnalytics = () => {
  if (!gaId) return null;

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id={"google-analytics"}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
