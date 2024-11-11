import { createLazyFileRoute } from "@tanstack/react-router";

import { Word } from "~/components/Word";
import { type WordKey, waza } from "~/data";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const counts = waza.reduce<Partial<Record<WordKey, number>>>((acc, item) => {
    for (const word of item.words) {
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .reduce<Partial<Record<WordKey, number>>>((acc, [word, count]) => {
      acc[word as WordKey] = count;
      return acc;
    }, {});

  return (
    <>
      <h1>Waza</h1>
      <p>A learning resource for judo practitioners.</p>
      <>
        <h2>Techniques ({waza.length})</h2>
        <ul>
          {waza.map(({ japanese, romaji }) => {
            return (
              <li key={romaji}>
                {japanese} ({romaji})
              </li>
            );
          })}
        </ul>
      </>
      <>
        <h2>Common Words</h2>
        <ul>
          {Object.entries(sorted).map(([wordKey, count]) => {
            return (
              <li key={wordKey}>
                <Word wordKey={wordKey as WordKey} />: {count}
              </li>
            );
          })}
        </ul>
      </>
    </>
  );
}
