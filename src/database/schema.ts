import type { Kysely } from "kysely";

import { type CategoryKey, type WordKey, categories, waza, words } from "./data";
import type { DB } from "./types";

export async function up(db: Kysely<DB>) {
  await db.schema
    .createTable("waza")
    .addColumn("id", "serial", (cb) => cb.primaryKey())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("romaji", "text", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("categories")
    .addColumn("key", "text", (cb) => cb.primaryKey().unique())
    .addColumn("romaji", "text", (cb) => cb.notNull())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("parent_key", "text")
    .addForeignKeyConstraint("categories_parent_fk", ["parent_key"], "categories", ["key"])
    .execute();

  await db.schema
    .createTable("words")
    .addColumn("key", "text", (cb) => cb.primaryKey().unique())
    .addColumn("romaji", "text", (cb) => cb.notNull())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("english", "text", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("waza_categories")
    .addColumn("waza_id", "serial", (cb) => cb.notNull())
    .addColumn("category_key", "text", (cb) => cb.notNull())
    .addForeignKeyConstraint("waza_categories_waza_fk", ["waza_id"], "waza", ["id"])
    .addForeignKeyConstraint("waza_categories_category_fk", ["category_key"], "categories", ["key"])
    .execute();

  await db.schema
    .createTable("waza_words")
    .addColumn("waza_id", "serial", (cb) => cb.notNull())
    .addColumn("word_key", "text", (cb) => cb.notNull())
    .addForeignKeyConstraint("waza_words_waza_fk", ["waza_id"], "waza", ["id"])
    .addForeignKeyConstraint("waza_words_word_fk", ["word_key"], "words", ["key"])
    .execute();

  await db.schema
    .createTable("category_words")
    .addColumn("category_key", "text", (cb) => cb.notNull())
    .addColumn("word_key", "text", (cb) => cb.notNull())
    .addForeignKeyConstraint("category_words_category_fk", ["category_key"], "categories", ["key"])
    .addForeignKeyConstraint("category_words_word_fk", ["word_key"], "words", ["key"])
    .execute();

  const associate = {
    wazaWords: async (waza: number, words: string[]): Promise<void> => {
      await db
        .insertInto("waza_words")
        .values(words.map((word) => ({ waza_id: waza, word_key: word })))
        .execute();
    },

    wazaCategories: async (waza: number, categories: CategoryKey[]): Promise<void> => {
      await db
        .insertInto("waza_categories")
        .values(categories.map((category) => ({ waza_id: waza, category_key: category })))
        .execute();
    },

    categoryWords: async (category: CategoryKey, words: string[]): Promise<void> => {
      await db
        .insertInto("category_words")
        .values(words.map((word) => ({ category_key: category, word_key: word })))
        .execute();
    },
  };

  const insert = {
    waza: async (values: {
      romaji: string;
      japanese: string;
      words: WordKey[];
      categories: CategoryKey[];
    }): Promise<number> => {
      const result = await db
        .insertInto("waza")
        .values({ romaji: values.romaji, japanese: values.japanese })
        .returning("id")
        .execute();

      const waza = result[0].id;
      await associate.wazaWords(waza, values.words);
      await associate.wazaCategories(waza, values.categories);

      return waza;
    },

    category: async (values: {
      romaji: string;
      japanese: string;
      words: WordKey[];
      parent?: CategoryKey;
    }): Promise<CategoryKey> => {
      const { words, parent, ...insertValues } = values;
      const result = await db
        .insertInto("categories")
        .values({ ...insertValues, key: values.romaji, parent_key: parent })
        .returning("key")
        .execute();

      const category = result[0].key as CategoryKey;
      await associate.categoryWords(category, words);

      return category;
    },

    words: async (
      values: Readonly<
        {
          romaji: string;
          japanese: string;
          english: string;
          key: WordKey;
        }[]
      >,
    ): Promise<void> => {
      await db.insertInto("words").values(values).returning(["key"]).execute();
    },
  };

  await insert.words(words);
  await Promise.all(categories.map(insert.category));
  await Promise.all(waza.map(insert.waza));
}

export async function down() {}
