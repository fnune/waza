import { useLiveQuery } from "@electric-sql/pglite-react";
import { sql } from "kysely";

import { useQuery } from "../services/database";

export function Main() {
  const version = useLiveQuery("SELECT version();");

  const { value: waza } = useQuery((db) => db.selectFrom("waza").selectAll("waza").execute());

  const { value: commonWords } = useQuery((db) =>
    sql`
      SELECT
        wd.japanese AS japanese,
        COUNT(wd.japanese) AS count,
        MIN(wd.romaji) AS romaji,
        MIN(wd.english) AS english
      FROM waza_words ww
      JOIN words wd ON ww.word_key = wd.key
      GROUP BY wd.japanese
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
          <pre>
            <code>{JSON.stringify(commonWords, null, 2)}</code>
          </pre>
        </>
      )}
      <h2>Health</h2>
      <pre>
        <code>{JSON.stringify(version, null, 2)}</code>
      </pre>
    </>
  );
}
