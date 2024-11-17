import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navigatorDetector } from "typesafe-i18n/detectors";

import { Footer } from "~/components/layout/Footer";
import I18nProvider from "~/locales/i18n-react";
import { detectLocale } from "~/locales/i18n-util";
import { loadLocaleAsync } from "~/locales/i18n-util.async";

function Main() {
  const locale = detectLocale(navigatorDetector);

  const [localesLoaded, setLocalesLoaded] = useState(false);
  useEffect(() => {
    async function load() {
      await loadLocaleAsync(locale);
      setLocalesLoaded(true);
    }
    void load();
  }, [locale]);

  if (!localesLoaded) {
    return null;
  }

  return (
    <I18nProvider locale="en">
      <main className="p-16">
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
