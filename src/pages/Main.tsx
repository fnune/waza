import { useLiveQuery } from "@electric-sql/pglite-react";
import { sql } from "kysely";

import { Word } from "../components/Word";
import type { WordKey } from "../database/data";
import { useQuery } from "../services/database";

export function Main() {
  const version = useLiveQuery("SELECT version();");

  const { value: waza } = useQuery((db) => db.selectFrom("waza").selectAll("waza").execute());

  const { value: commonWords } = useQuery((db) =>
    sql`
      SELECT ww.word_key AS key, COUNT(ww.word_key) AS count
      FROM waza_words ww
      GROUP BY ww.word_key
      ORDER BY count DESC
  `.execute(db),
  );

  return (
    <>
      <h1>Waza</h1>
      <p>A learning resource for judo practitioners.</p>
      {!waza && <p>Loading...</p>}
      {waza && (
        <>
          <h2>Techniques ({waza.length})</h2>
          <ul>
            {waza.map(({ id, japanese, romaji }) => {
              return (
                <li key={id}>
                  {japanese} ({romaji})
                </li>
              );
            })}
          </ul>
        </>
      )}
      {commonWords && (
        <>
          <h2>Common Words</h2>
          <ul>
            {commonWords.rows.map((word) => {
              const key = (word as { key: WordKey }).key;
              const count = (word as { count: number }).count;
              return (
                <li key={key}>
                  <Word wordKey={key} />: {count}
                </li>
              );
            })}
          </ul>
        </>
      )}
      <h2>Health</h2>
      <pre>
        <code>{JSON.stringify(version, null, 2)}</code>
      </pre>
    </>
  );
}
