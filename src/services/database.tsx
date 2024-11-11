import { PGlite } from "@electric-sql/pglite";
import { type LiveNamespace, live } from "@electric-sql/pglite/live";
import { atom } from "jotai";
import { Kysely, PostgresAdapter, PostgresIntrospector, PostgresQueryCompiler } from "kysely";
import { Migrator } from "kysely";
import { useEffect, useState } from "react";

import { PGliteDriver } from "~/database/driver";
import { down, up } from "~/database/schema";
import type { DB } from "~/database/types";

import { type AsyncState, useAsyncStateFromLoadable } from "./async";

async function initializePGlite() {
  return PGlite.create({ extensions: { live } });
}

async function initializeDatabase(pglite: Promise<PGlite & { live: LiveNamespace }>) {
  const pgliteConnection = await pglite;

  const dialect = {
    createAdapter: () => new PostgresAdapter(),
    createDriver: () => new PGliteDriver(pgliteConnection),
    createIntrospector: (database: Kysely<DB>) => new PostgresIntrospector(database),
    createQueryCompiler: () => new PostgresQueryCompiler(),
  };

  const database = new Kysely<DB>({ dialect });

  const migrations = await new Migrator({
    db: database,
    provider: { getMigrations: () => Promise.resolve({ init: { up, down } }) },
  }).migrateToLatest();

  if (migrations.error) {
    throw Error(JSON.stringify(migrations.error, null, 2));
  }

  return database;
}

export const pgliteAtom = atom(initializePGlite);
export const clientAtom = atom(async (get) => initializeDatabase(get(pgliteAtom)));

export function usePGlite() {
  return useAsyncStateFromLoadable(pgliteAtom);
}

export function useQuery<Result>(
  fetcher: (database: Kysely<DB>) => Promise<Result>,
): AsyncState<Result> {
  const client = useAsyncStateFromLoadable(clientAtom);

  const [state, setState] = useState<AsyncState<Result>>({ isLoading: true });

  useEffect(() => {
    async function fetch() {
      if (!client.value) return;
      try {
        const result = await fetcher(client.value);
        setState({ value: result, isLoading: false });
      } catch (error) {
        setState({ isError: true, error });
      }
    }

    void fetch();
  }, [fetcher, client]);

  if (client.isLoading) return { isLoading: true };
  if (client.isError) return { isError: true, error: client.error };

  return state;
}
