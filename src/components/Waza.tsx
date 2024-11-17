import { type WazaKey, wazaRecord } from "~/data";

import React from "react";
import { TermDisplay } from "./TermDisplay";
import { InlineWord } from "./Word";

type Props = { wazaKey: WazaKey };

export function Waza({ wazaKey }: Props) {
  const waza = wazaRecord[wazaKey];
  return (
    <article className="flex flex-col items-center gap-3">
      <TermDisplay japanese={waza.japanese} romaji={waza.romaji} anchor={waza.romaji} />
      <footer className="w-full">
        {waza.words.map((word) => (
          <p key={word}>
            <InlineWord wordKey={word} />
          </p>
        ))}
      </footer>
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
