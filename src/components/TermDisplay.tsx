import type { ReactNode } from "@tanstack/react-router";

type Props = {
  japanese: ReactNode;
  romaji: ReactNode;
  meaning?: ReactNode;
  anchor?: string;
};

export function TermDisplay({ japanese, romaji, meaning, anchor }: Props) {
  return (
    <div id={anchor} className="flex flex-col items-center gap-1 whitespace-nowrap">
      <h3 className="mb-2 text-4xl text-neutral-400">{japanese}</h3>
      <p className="font-mono text-xl md:text-2xl">{romaji}</p>
      <p className="font-mono text-xl md:text-2xl">{meaning}</p>
    </div>
  );
}
