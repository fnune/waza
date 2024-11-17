import { useI18nContext } from "~/locales/i18n-react";
import { locales } from "~/locales/i18n-util";

export function LanguageSelect() {
  const { locale, setLocale } = useI18nContext();
  const sorted: typeof locales = ["en", "de", "es"];
  const labels: Record<(typeof locales)[number], string> = {
    en: "English",
    de: "Deutsch",
    es: "Español",
  };
  return (
    <ul className="flex justify-center gap-2 pb-6 print:hidden">
      {sorted.map((lang) => (
        <li
          key={lang}
          className="cursor-pointer"
          style={{ textDecoration: lang === locale ? "underline" : "none" }}
          onClick={() => {
            setLocale(lang);
          }}
        >
          {labels[lang]}
        </li>
      ))}
    </ul>
  );
}
