import { useLiveQuery } from "@electric-sql/pglite-react";
import { useQuery } from "../services/database";

export function Main() {
  const version = useLiveQuery("SELECT version();");

  const { value: waza } = useQuery((db) =>
    db
      .selectFrom("waza")
      .select(["id", "japanese", "romaji", "video_links", "categories"])
      .execute(),
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
            {waza.map(({ id, japanese, romaji, ...rest }) => {
              const categories = rest.categories as string[];
              return (
                <li key={id}>
                  <h3>
                    {japanese} ({romaji})
                  </h3>
                  <p>{categories.join(", ")}</p>
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
