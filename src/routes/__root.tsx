import { Outlet, createRootRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navigatorDetector } from "typesafe-i18n/detectors";

import { DownloadLink } from "~/components/DownloadLink";
import { LanguageSelect } from "~/components/LanguageSelect";
import { ThemeSelect } from "~/components/ThemeSelect";
import { Footer } from "~/components/layout/Footer";
import I18nProvider from "~/locales/i18n-react";
import type { Locales } from "~/locales/i18n-types";
import { detectLocale, locales } from "~/locales/i18n-util";
import { loadLocaleAsync } from "~/locales/i18n-util.async";

function Main() {
  const search = useSearch({ strict: false });
  const languageParam = (search as { language?: Locales }).language;
  const languagePreference = localStorage.getItem("language") as Locales | undefined;
  const languageDefault = detectLocale(navigatorDetector);
  const defaultLocale = languageParam ?? languagePreference ?? languageDefault;

  const [localesLoaded, setLocalesLoaded] = useState(false);
  useEffect(() => {
    async function load() {
      await Promise.all(locales.map(loadLocaleAsync));
      setLocalesLoaded(true);
    }
    void load();
  }, []);

  if (!localesLoaded) {
    return null;
  }

  return (
    <I18nProvider locale={defaultLocale}>
      <main className="bg-white px-4 pb-4 pt-6 text-neutral-900 sm:bg-gradient-to-t sm:from-neutral-300 sm:to-stone-400 md:p-16 dark:bg-black dark:from-neutral-800 dark:to-stone-900 dark:text-neutral-200 print:bg-white print:from-white print:to-white print:p-0">
        <nav className="flex flex-wrap justify-center gap-3 pb-4 md:container md:mx-auto md:gap-8 print:hidden">
          <LanguageSelect />
          <ThemeSelect />
          <DownloadLink />
        </nav>
        <div className="min-h-dvh">
          <Outlet />
        </div>
        <div className="my-8 md:my-16" />
        <Footer />
      </main>
    </I18nProvider>
  );
}

export const Route = createRootRoute({
  component: () => <Main />,
});
