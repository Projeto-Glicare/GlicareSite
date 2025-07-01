"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

export default function AdBanner({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-sm md:max-w-2xl xl:max-w-5xl mx-auto px-4 my-8 ">
      <div className="mx-auto w-60 md:w-96 lg:w-[600px] h-60 md:h-32 lg:h-[200px] relative">
        <ins
          className="adsbygoogle absolute inset-0"
          style={{ display: "block" }}
          data-ad-client={process.env.NEXT_PUBLIC_PUBLISHER_ID}
          data-ad-slot={dataAdSlot}
          data-ad-format={dataAdFormat}
          data-full-width-responsive={dataFullWidthResponsive.toString()}
        />
      </div>
    </div>
  );
}
