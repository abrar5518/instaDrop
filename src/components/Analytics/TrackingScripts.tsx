"use client";

/* eslint-disable @next/next/no-img-element -- Meta requires a 1x1 noscript tracking pixel. */
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useContactSettings } from "@/components/Contact/ContactSettings";
import { useCookieConsent } from "@/components/Analytics/CookieConsent";

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

const validGtmId = (value: string | null) => {
  const id = value?.trim().toUpperCase() ?? "";
  return /^GTM-[A-Z0-9]+$/.test(id) ? id : null;
};

const validGaId = (value: string | null) => {
  const id = value?.trim().toUpperCase() ?? "";
  return /^G-[A-Z0-9]+$/.test(id) ? id : null;
};

const validMetaPixelId = (value: string | null) => {
  const id = value?.trim() ?? "";
  return /^\d+$/.test(id) ? id : null;
};

function ClientNavigationTracking({ gaId, metaPixelId }: { gaId: string | null; metaPixelId: string | null }) {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === null) {
      lastPath.current = pathname;
      return;
    }

    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    const trackingWindow = window as TrackingWindow;
    const pagePath = `${pathname}${window.location.search}`;
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({
      event: "virtual_page_view",
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });

    if (gaId && trackingWindow.gtag) {
      trackingWindow.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    if (metaPixelId && trackingWindow.fbq) {
      trackingWindow.fbq("track", "PageView");
    }
  }, [gaId, metaPixelId, pathname]);

  return null;
}

export default function TrackingScripts() {
  const pathname = usePathname();
  const consent = useCookieConsent();
  const { tracking } = useContactSettings();
  const gtmId = validGtmId(tracking.gtm_id);
  const gaId = validGaId(tracking.ga_id);
  const metaPixelId = validMetaPixelId(tracking.meta_pixel_id);

  if (pathname.startsWith("/pay/") || consent !== "accepted") return null;

  return (
    <>
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden invisible"
              title="Google Tag Manager"
            />
          </noscript>
        </>
      )}

      {gaId && (
        <>
          <Script
            id="google-analytics-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');window.fbq('init','${metaPixelId}');window.fbq('track','PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              alt=""
              className="hidden"
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      <ClientNavigationTracking gaId={gaId} metaPixelId={metaPixelId} />
    </>
  );
}
