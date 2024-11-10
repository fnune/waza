import { PGliteProvider } from "@electric-sql/pglite-react";
import { useAtomValue } from "jotai";
import { loadable } from "jotai/utils";

import { Main } from "./pages/Main";
import { pgliteAtom } from "./services/database";

function App() {
  const pglite = useAtomValue(loadable(pgliteAtom));
  if (pglite.state === "loading") return <>Loading...</>;
  if (pglite.state === "hasError") return <>Error: {JSON.stringify(pglite, null, 2)}</>;
  return (
    <PGliteProvider db={pglite.data}>
      <Main />
    </PGliteProvider>
  );
}

export default App;
