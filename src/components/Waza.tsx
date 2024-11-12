import { type WazaKey, wazaRecord } from "~/data";

import React from "react";
import { InlineWord, Word } from "./Word";

type Props = { wazaKey: WazaKey };

export function Waza({ wazaKey }: Props) {
  const waza = wazaRecord[wazaKey];
  return (
    <article className="flex flex-col items-center">
      <header>
        <b>
          {waza.japanese} ({waza.romaji})
        </b>
      </header>
      {waza.words.map((word) => (
        <p key={word}>
          <Word wordKey={word} />
        </p>
      ))}
    </article>
  );
}

export function InlineWaza({ wazaKey }: Props) {
  const waza = wazaRecord[wazaKey];
  return (
    <>
      <b>
        {waza.japanese} ({waza.romaji})
      </b>{" "}
      [
      {waza.words.map((word, index) => (
        <React.Fragment key={word}>
          <InlineWord wordKey={word} />
          {index < waza.words.length - 1 ? <>, </> : null}
        </React.Fragment>
      ))}
      ]
    </>
  );
}
