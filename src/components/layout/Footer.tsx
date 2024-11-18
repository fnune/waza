import { useI18nContext } from "~/locales/i18n-react";
import { InlineWaza } from "../Waza";
import { InlineWord } from "../Word";

const translations: Record<string, React.ReactNode> = {
  en: (
    <footer className="flex flex-col gap-2">
      <b>Notes</b>
      <ul className="flex flex-col gap-2">
        <li>
          The consonant used in a word may change depending on its position. For example <i>k</i>{" "}
          and <i>g</i> in <InlineWord wordKey="goshi" /> and <InlineWord wordKey="koshi" />, as in{" "}
          <InlineWaza wazaKey="koshi-guruma" /> or <InlineWaza wazaKey="harai-goshi" />, or <i>b</i>{" "}
          and <i>h</i> in <InlineWord wordKey="barai" /> or <InlineWord wordKey="harai" />, as in{" "}
          <InlineWaza wazaKey="harai-makikomi" />.
        </li>
        <li>
          <InlineWord wordKey="kata-shoulder" /> and <InlineWord wordKey="kata-single" /> read the
          same way but mean different things. The most-commonly-used meaning is{" "}
          <InlineWord wordKey="kata-shoulder" />. Examples: <InlineWaza wazaKey="kata-guruma" /> and{" "}
          <InlineWaza wazaKey="kata-juji-jime" />.
        </li>
        <li>
          The purpose of this content is not to provide precise translations or interpretations of
          the Japanese language but to aid in the understanding of the meaning of judo techniques.
        </li>
        <li>Created by Fausto Núñez Alberro, 2024.</li>
      </ul>
    </footer>
  ),
  de: (
    <footer className="flex flex-col gap-2">
      <b>Hinweise</b>
      <ul className="flex flex-col gap-2">
        <li>
          Der Konsonant eines Wortes kann sich je nach Position ändern. Zum Beispiel <i>k</i> und{" "}
          <i>g</i> in <InlineWord wordKey="goshi" /> und <InlineWord wordKey="koshi" />, wie in{" "}
          <InlineWaza wazaKey="koshi-guruma" /> oder <InlineWaza wazaKey="harai-goshi" />, oder{" "}
          <i>b</i> und <i>h</i> in <InlineWord wordKey="barai" /> oder{" "}
          <InlineWord wordKey="harai" />, wie in <InlineWaza wazaKey="harai-makikomi" />.
        </li>
        <li>
          <InlineWord wordKey="kata-shoulder" /> und <InlineWord wordKey="kata-single" /> werden
          gleich gelesen, bedeuten aber unterschiedliche Dinge. Die häufigste Bedeutung ist{" "}
          <InlineWord wordKey="kata-shoulder" />. Beispiele: <InlineWaza wazaKey="kata-guruma" />{" "}
          und <InlineWaza wazaKey="kata-juji-jime" />.
        </li>
        <li>
          Der Zweck dieses Inhalts ist nicht, genaue Übersetzungen oder Interpretationen der
          japanischen Sprache bereitzustellen, sondern das Verständnis der Bedeutung von
          Judotechniken zu erleichtern.
        </li>
        <li>Erstellt von Fausto Núñez Alberro, 2024.</li>
      </ul>
    </footer>
  ),
  es: (
    <footer className="flex flex-col gap-2">
      <b>Notas</b>
      <ul className="flex flex-col gap-2">
        <li>
          La consonante usada en una palabra puede cambiar dependiendo de su posición. Por ejemplo,{" "}
          <i>k</i> y <i>g</i> en <InlineWord wordKey="goshi" /> y <InlineWord wordKey="koshi" />,
          como en <InlineWaza wazaKey="koshi-guruma" /> o <InlineWaza wazaKey="harai-goshi" />, o{" "}
          <i>b</i> y <i>h</i> en <InlineWord wordKey="barai" /> o <InlineWord wordKey="harai" />,
          como en <InlineWaza wazaKey="harai-makikomi" />.
        </li>
        <li>
          <InlineWord wordKey="kata-shoulder" /> y <InlineWord wordKey="kata-single" /> se leen
          igual pero significan cosas diferentes. El significado más común es{" "}
          <InlineWord wordKey="kata-shoulder" />. Ejemplos: <InlineWaza wazaKey="kata-guruma" /> y{" "}
          <InlineWaza wazaKey="kata-juji-jime" />.
        </li>
        <li>
          El propósito de este contenido no es proporcionar traducciones o interpretaciones precisas
          del japonés, sino ayudar a comprender el significado de las técnicas de judo.
        </li>
        <li>Creado por Fausto Núñez Alberro, 2024.</li>
      </ul>
    </footer>
  ),
};

export function Footer() {
  const { locale } = useI18nContext();
  return (
    <footer className="flex flex-col gap-2 px-4 pb-16 md:px-0 print:bg-white print:p-16">
      {translations[locale]}
    </footer>
  );
}
