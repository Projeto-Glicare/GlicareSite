"use client";

import { useEffect, useState } from "react";
import { getLocalStoreage, setLocalStorage } from "../models/storage-values";

export default function CookieModal() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const storedCookieConsent = getLocalStoreage("cookie_consent", null);
    console.log(
      "Consentimento dos cookies do armazenamento: ",
      storedCookieConsent
    );
    setCookieConsent(storedCookieConsent);
    setIsloading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white text-gray-800 shadow-lg p-5 rounded-xl max-w-xl w-[80%] border border-gray-200">
      <p className="mb-4 text-sm">
        Este site usa cookies para melhorar sua experiência. Ao clicar em
        &quot;Aceitar&quot;, você autoriza o uso para fins analíticos conforme
        nossa política de privacidade.
      </p>
      <div className="flex justify-center gap-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
          onClick={() => setCookieConsent(false)}
        >
          Recusar
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          onClick={() => setCookieConsent(true)}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
