import { useI18nContext } from "~/locales/i18n-react";
import { InlineWaza } from "../Waza";
import { InlineWord } from "../Word";

function FooterContent() {
  const { locale } = useI18nContext();

  switch (locale) {
    case "en": {
      return (
        <footer className="flex flex-col gap-2">
          <b>Notes</b>
          <ul className="flex flex-col gap-2">
            <li>
              The consonant used in a word may change depending on its position. For example{" "}
              <i>k</i> and <i>g</i> in <InlineWord wordKey="goshi" /> and{" "}
              <InlineWord wordKey="koshi" />, as in <InlineWaza wazaKey="koshi-guruma" /> or{" "}
              <InlineWaza wazaKey="harai-goshi" />, or <i>b</i> and <i>h</i> in{" "}
              <InlineWord wordKey="barai" /> or <InlineWord wordKey="harai" />, as in{" "}
              <InlineWaza wazaKey="harai-makikomi" />.
            </li>
            <li>
              <InlineWord wordKey="kata-shoulder" /> and <InlineWord wordKey="kata-single" /> read
              the same way but mean different things. The most-commonly-used meaning is{" "}
              <InlineWord wordKey="kata-shoulder" />. Examples: <InlineWaza wazaKey="kata-guruma" />{" "}
              and <InlineWaza wazaKey="kata-juji-jime" />.
            </li>
            <li>
              The purpose of this content is not to provide precise Japanese translations or
              interpretations but to aid in the understanding of the meaning of judo techniques,
              focusing only on a judo context.
            </li>
            <li>Created by Fausto Núñez Alberro, 2024.</li>
          </ul>
        </footer>
      );
    }
    case "de": {
      return (
        <footer className="flex flex-col gap-2">
          <b>Hinweise</b>
          <ul className="flex flex-col gap-2">
            <li>
              Der Konsonant eines Wortes kann sich je nach Position ändern. Zum Beispiel <i>k</i>{" "}
              und <i>g</i> in <InlineWord wordKey="goshi" /> und <InlineWord wordKey="koshi" />, wie
              in <InlineWaza wazaKey="koshi-guruma" /> oder <InlineWaza wazaKey="harai-goshi" />,
              oder <i>b</i> und <i>h</i> in <InlineWord wordKey="barai" /> oder{" "}
              <InlineWord wordKey="harai" />, wie in <InlineWaza wazaKey="harai-makikomi" />.
            </li>
            <li>
              <InlineWord wordKey="kata-shoulder" /> und <InlineWord wordKey="kata-single" /> werden
              gleich gelesen, bedeuten aber unterschiedliche Dinge. Die häufigste Bedeutung ist{" "}
              <InlineWord wordKey="kata-shoulder" />. Beispiele:{" "}
              <InlineWaza wazaKey="kata-guruma" /> und <InlineWaza wazaKey="kata-juji-jime" />.
            </li>
            <li>
              Der Zweck dieses Inhalts ist nicht, genaue japanische Übersetzungen oder
              Interpretationen bereitzustellen, sondern das Verständnis der Bedeutung von
              Judotechniken zu erleichtern, wobei ausschließlich der Judo-Kontext im Fokus steht.
            </li>
            <li>Erstellt von Fausto Núñez Alberro, 2024.</li>
          </ul>
        </footer>
      );
    }
  }
}

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 print:break-inside-avoid">
      <FooterContent />
    </footer>
  );
}
