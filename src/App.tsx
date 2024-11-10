import { PGlite } from "@electric-sql/pglite";
import { PGliteProvider } from "@electric-sql/pglite-react";
import { live } from "@electric-sql/pglite/live";

const db = await PGlite.create({
  extensions: { live },
});

function App() {
  return (
    <PGliteProvider db={db}>
      <main>
        <h1>Waza</h1>
        <p>A learning resource for judo practitioners.</p>
      </main>
    </PGliteProvider>
  );
}

export default App;
