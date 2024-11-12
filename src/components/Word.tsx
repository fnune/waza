import { type WordKey, wordsRecord } from "~/data";

type Props = { wordKey: WordKey };

export function Word({ wordKey }: Props) {
  const word = wordsRecord[wordKey];
  return (
    <span>
      {word.japanese} ({word.romaji}, {word.english})
    </span>
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
