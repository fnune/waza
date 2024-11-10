import type { Kysely } from "kysely";

import type { DB } from "./generated";

export async function up(db: Kysely<DB>) {
  await db.schema
    .createTable("waza")
    .ifNotExists()
    .addColumn("id", "serial", (cb) => cb.primaryKey())
    .addColumn("name", "text", (cb) => cb.notNull())
    .addColumn("romaji", "text", (cb) => cb.notNull())
    .execute();

  await db
    .insertInto("waza")
    .values([
      { romaji: "ippon-seoi-nage", name: "一本背負い投げ" },
      { romaji: "osoto-gari", name: "大外刈" },
      { romaji: "uchi-mata", name: "内股" },
      { romaji: "kata-guruma", name: "肩車" },
      { romaji: "harai-goshi", name: "払腰" },
    ])
    .execute();
}

export async function down(db: Kysely<DB>) {
  await db.schema.dropTable("waza").execute();
}
