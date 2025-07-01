import Script from "next/script";

type AdsenseTypes = {
  publisherId: string;
};

export default function AdSense({ publisherId }: AdsenseTypes) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
