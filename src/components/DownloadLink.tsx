import { Download } from "lucide-react";
import { useI18nContext } from "~/locales/i18n-react";

export function DownloadLink() {
  const { locale, LL } = useI18nContext();
  const link = `${window.location.pathname.replace(/\/$/, "")}/waza-${locale}.pdf`;
  return (
    <a className="flex items-center justify-center gap-2" href={link}>
      <Download /> {LL.downloadPdf()}
    </a>
  );
}
