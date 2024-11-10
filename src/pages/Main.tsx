import { useLiveQuery } from "@electric-sql/pglite-react";

export function Main() {
  const version = useLiveQuery("SELECT version();");
  return (
    <>
      <h1>Waza</h1>
      <p>A learning resource for judo practitioners.</p>
      <pre>
        <code>{JSON.stringify(version, null, 2)}</code>
      </pre>
    </>
  );
}
