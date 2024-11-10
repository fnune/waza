import { type Atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";

export type AsyncState<Value> =
  | {
      value: Value;
      isLoading?: false;
      isError?: false;
      error?: never;
    }
  | {
      value?: never;
      isError: true;
      isLoading?: false;
      error: unknown;
    }
  | {
      value?: never;
      isLoading: true;
      isError?: false;
      error?: never;
    };

export function useAsyncStateFromLoadable<Value>(atom: Atom<Value>): AsyncState<Awaited<Value>> {
  const asLoadable = useAtomValue(loadable(atom));
  if (asLoadable.state === "hasError") return { isError: true, error: asLoadable.error };
  if (asLoadable.state === "loading") return { isLoading: true };
  return { value: asLoadable.data, isLoading: false };
}
