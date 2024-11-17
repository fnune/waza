import { InlineWaza } from "../Waza";
import { InlineWord } from "../Word";

export function Footer() {
  return (
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
      </ul>
    </footer>
  );
}
