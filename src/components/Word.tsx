import type { WordKey } from "../database/data";
import { useWord } from "../queries/useWord";

type Props = { wordKey: WordKey };

export function Word({ wordKey }: Props) {
  const { value: word } = useWord(wordKey);
  if (!word) return null;
  return (
    <span>
      {word.japanese} ({word.romaji}, {word.english})
    </span>
  );
}
