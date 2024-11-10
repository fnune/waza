import { useLiveQuery } from "@electric-sql/pglite-react";

import { useQuery } from "../services/database";

export function Main() {
  const version = useLiveQuery("SELECT version();");

  const { value: waza } = useQuery((db) =>
    db.selectFrom("waza").select(["id", "name", "romaji"]).execute(),
  );

  return (
    <>
      <h1>Waza</h1>
      <p>A learning resource for judo practitioners.</p>
      <h2>Techniques</h2>
      <pre>
        <code>{JSON.stringify(waza, null, 2)}</code>
      </pre>
      <h2>Health</h2>
      <pre>
        <code>{JSON.stringify(version, null, 2)}</code>
      </pre>
    </>
  );
}
