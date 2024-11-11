import type { WordKey } from "../database/data";
import { useWord } from "../queries/useWord";

type Props = { wordKey: WordKey };

export function Word({ wordKey }: Props) {
  const { value: word } = useWord(wordKey);
  if (!word) return null;
  return (
    <span title={`${word.romaji} — ${word.japanese} (${word.english})`}>
      {word.romaji} ({word.english})
    </span>
  );
}
