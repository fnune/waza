import type { WordKey } from "~/database/data";
import { useQuery } from "~/services/database";

export function useWord(wordKey: WordKey) {
  const state = useQuery((db) =>
    db.selectFrom("words").selectAll("words").where("words.key", "=", wordKey).execute(),
  );
  if (state.isLoading || state.isError) return state;
  return { ...state, value: state.value[0] };
}
