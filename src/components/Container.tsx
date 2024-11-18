import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <article
      className={`
        sm:border-border flex flex-col items-center
        gap-y-16 rounded-3xl bg-white px-4 pb-4 pt-16 md:container sm:border
        sm:shadow-2xl md:mx-auto md:px-16 md:pb-20 md:pt-24
        dark:border-neutral-800 dark:bg-black print:gap-y-8 print:border-none
        print:p-0 print:shadow-none
      `}
    >
      {children}
    </article>
  );
}
