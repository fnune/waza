import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export interface Categories {
  japanese: string;
  parent: string | null;
  romaji: string;
  words_japanese: Json;
  words_romaji: Json;
}

export interface Waza {
  categories: Generated<Json>;
  id: Generated<number>;
  japanese: string;
  romaji: string;
  video_links: Generated<Json>;
  words_japanese: Json;
  words_romaji: Json;
}

export interface Words {
  description: string | null;
  english: string;
  japanese: string;
  romaji: string;
}

export interface DB {
  categories: Categories;
  waza: Waza;
  words: Words;
}
