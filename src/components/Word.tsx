import { type WordKey, wordsRecord } from "~/data";
import { useI18nContext } from "~/locales/i18n-react";
import { TermDisplay } from "./TermDisplay";

type Props = { wordKey: WordKey };

export function Word({ wordKey }: Props) {
  const { LL } = useI18nContext();
  const word = wordsRecord[wordKey];
  return (
    <TermDisplay
      japanese={word.japanese}
      romaji={word.romaji}
      meaning={LL[wordKey]()}
      anchor={word.key}
    />
  );
}

export function InlineWord({ wordKey }: Props) {
  const { LL } = useI18nContext();
  const word = wordsRecord[wordKey];
  return (
    <>
      {word.japanese} {word.romaji}, {LL[wordKey]()}
    </>
  );
}
