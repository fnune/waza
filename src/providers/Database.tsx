import { PGlite } from "@electric-sql/pglite";
import { PGliteProvider } from "@electric-sql/pglite-react";
import { live } from "@electric-sql/pglite/live";

import type { PropsWithChildren } from "react";

const db = await PGlite.create({
  extensions: { live },
});

export function Database({ children }: PropsWithChildren) {
  return <PGliteProvider db={db}>{children}</PGliteProvider>;
}
