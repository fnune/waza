import { type WordKey, wordsRecord } from "~/data";
import { TermDisplay } from "./TermDisplay";

type Props = { wordKey: WordKey };

export function Word({ wordKey }: Props) {
  const word = wordsRecord[wordKey];
  return (
    <TermDisplay
      japanese={word.japanese}
      romaji={word.romaji}
      meaning={word.english}
      anchor={word.key}
    />
  );
}

export function InlineWord({ wordKey }: Props) {
  const word = wordsRecord[wordKey];
  return (
    <>
      {word.japanese} {word.romaji}, {word.english}
    </>
  );
}
