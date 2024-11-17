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
      <main className="p-16">
        <LanguageSelect />
        <Outlet />
        <hr className="my-16" />
        <Footer />
      </main>
    </I18nProvider>
  );
}

export const Route = createRootRoute({
  component: () => <Main />,
});
