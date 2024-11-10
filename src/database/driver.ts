import type { PGlite } from "@electric-sql/pglite";
import {
  CompiledQuery,
  type DatabaseConnection,
  type QueryResult,
  type TransactionSettings,
} from "kysely";

// Taken from: https://github.com/dnlsandiego/kysely-pglite/blob/main/src/pglite-driver.ts
// That module is not built to run in browsers, so we vendor what we need.
export class PGliteDriver {
  #client: PGlite;

  constructor(client: PGlite) {
    this.#client = client;
  }

  acquireConnection(): Promise<DatabaseConnection> {
    return Promise.resolve(new PGliteConnection(this.#client));
  }

  async beginTransaction(
    connection: DatabaseConnection,
    _settings: TransactionSettings,
  ): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("BEGIN"));
  }

  async commitTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("COMMIT"));
  }

  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("ROLLBACK"));
  }

  async destroy(): Promise<void> {
    await this.#client.close();
  }

  async init(): Promise<void> {}
  async releaseConnection(_connection: DatabaseConnection): Promise<void> {}
}

class PGliteConnection implements DatabaseConnection {
  #client: PGlite;

  constructor(client: PGlite) {
    this.#client = client;
  }

  streamQuery<R>(
    _compiledQuery: CompiledQuery,
    _chunkSize?: number,
  ): AsyncIterableIterator<QueryResult<R>> {
    throw new Error("Method not implemented.");
  }

  async executeQuery<R>(compiledQuery: CompiledQuery): Promise<QueryResult<R>> {
    return await this.#client.query<R>(compiledQuery.sql, [...compiledQuery.parameters]);
  }
}
