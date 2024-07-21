"use client";

import { useEffect } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", process.env.GOOGLE_MEASUREMENT_ID);
    }
  }, []);

  return (
    <>
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleAnalytics;
