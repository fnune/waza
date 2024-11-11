import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Categories {
  japanese: string;
  key: string;
  parent_key: string | null;
  romaji: string;
}

export interface CategoryWords {
  category_key: string;
  word_key: string;
}

export interface Waza {
  id: Generated<number>;
  japanese: string;
  romaji: string;
}

export interface WazaCategories {
  category_key: string;
  waza_id: Generated<number>;
}

export interface WazaWords {
  waza_id: Generated<number>;
  word_key: string;
}

export interface Words {
  english: string;
  japanese: string;
  key: string;
  romaji: string;
}

export interface DB {
  categories: Categories;
  category_words: CategoryWords;
  waza: Waza;
  waza_categories: WazaCategories;
  waza_words: WazaWords;
  words: Words;
}
