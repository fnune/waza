import type { ReactNode } from "@tanstack/react-router";

type Props = {
  japanese: ReactNode;
  romaji: ReactNode;
  meaning?: ReactNode;
};

export function TermDisplay({ japanese, romaji, meaning }: Props) {
  return (
    <div className="flex flex-col items-center gap-1 whitespace-nowrap">
      <h3 className="text-4xl text-neutral-400">{japanese}</h3>
      <p className="font-mono text-2xl">{romaji}</p>
      <p className="font-mono text-2xl">{meaning}</p>
    </div>
  );
}
