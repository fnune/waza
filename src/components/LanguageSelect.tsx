import { useCallback } from "react";
import { useI18nContext } from "~/locales/i18n-react";
import type { Locales } from "~/locales/i18n-types";
import type { locales } from "~/locales/i18n-util";

export function LanguageSelect() {
  const { locale, setLocale } = useI18nContext();
  const sorted: typeof locales = ["en", "de", "es"];
  const labels: Record<Locales, string> = {
    en: "English",
    de: "Deutsch",
    es: "Español",
  };

  const onSetLocale = useCallback((lang: Locales) => () => {
    setLocale(lang)
  }, [setLocale])

  return (
    <ul className="flex justify-center gap-2 pb-6 print:hidden">
      {sorted.map((lang) => (
        <button
          key={lang}
          type="button"
          style={{ textDecoration: lang === locale ? "underline" : "none" }}
          onClick={onSetLocale(lang)}
        >
          {labels[lang]}
        </button>
      ))}
    </ul>
  );
}
