import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navigatorDetector } from "typesafe-i18n/detectors";

import { LanguageSelect } from "~/components/LanguageSelect";
import { Footer } from "~/components/layout/Footer";
import I18nProvider from "~/locales/i18n-react";
import { detectLocale, locales } from "~/locales/i18n-util";
import { loadLocaleAsync } from "~/locales/i18n-util.async";

function Main() {
  const defaultLocale = detectLocale(navigatorDetector);

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
      <main className="bg-white px-4 pb-4 pt-6 sm:bg-gradient-to-t sm:from-neutral-300 sm:to-stone-400 md:p-16 dark:bg-black dark:from-neutral-800 dark:to-stone-900 dark:text-neutral-200 print:bg-white print:from-white print:to-white print:p-0">
        <LanguageSelect />
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
