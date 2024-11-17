import type { PropsWithChildren } from "react";
import type { WordKey } from "~/data";
import { useI18nContext } from "~/locales/i18n-react";

import { Waza } from "../Waza";
import { InlineWord, Word } from "../Word";

function WordGroup({ children }: PropsWithChildren) {
  return <section className="flex gap-8 p-8">{children}</section>;
}

function NewWord({ word, alternative }: { word: WordKey; alternative?: WordKey }) {
  const { LL } = useI18nContext();
  return (
    <aside className="flex w-48 flex-col items-center gap-3">
      <Word wordKey={word} />
      <p className="text-center">
        {alternative && (
          <>
            {LL.or()} <InlineWord wordKey={alternative} />:{" "}
          </>
        )}
        {LL.wordComments[word]()}
      </p>
    </aside>
  );
}

function UnderstandableWaza({ children }: PropsWithChildren) {
  return (
    <section className="border-border border-border flex flex-col gap-16 rounded-3xl border p-16 shadow-xl">
      {children}
    </section>
  );
}

export function Vocabulary() {
  return (
    <article className="border-border container mx-auto flex flex-col items-center gap-16 rounded-3xl border bg-white py-32 shadow-2xl">
      <WordGroup>
        <NewWord word="ko" />
        <NewWord word="o" />
      </WordGroup>
      <WordGroup>
        <NewWord word="uchi" />
        <NewWord word="soto" />
      </WordGroup>
      <WordGroup>
        <NewWord word="gari" />
        <NewWord word="harai" alternative="barai" />
        <NewWord word="gake" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="osoto-gari" />
        <Waza wazaKey="kosoto-gake" />
        <Waza wazaKey="ouchi-gari" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="yoko" />
        <NewWord word="kami" />
        <NewWord word="ushiro" />
        <NewWord word="tate" />
        <NewWord word="ma" />
      </WordGroup>
      <WordGroup>
        <NewWord word="ura" />
        <NewWord word="sumi" />
      </WordGroup>
      <WordGroup>
        <NewWord word="shiho" />
      </WordGroup>
      <WordGroup>
        <NewWord word="ude" />
      </WordGroup>
      <WordGroup>
        <NewWord word="gatame" />
        <NewWord word="garami" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="yoko-shiho-gatame" />
        <Waza wazaKey="kami-shiho-gatame" />
        <Waza wazaKey="tate-shiho-gatame" />
        <Waza wazaKey="ura-gatame" />
        <Waza wazaKey="ude-gatame" />
        <Waza wazaKey="ude-garami" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="kesa" />
        <NewWord word="kuzure" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="kesa-gatame" />
        <Waza wazaKey="ushiro-kesa-gatame" />
        <Waza wazaKey="kuzure-kami-shiho-gatame" />
        <Waza wazaKey="kuzure-kesa-gatame" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="ashi-foot" alternative="ashi-leg" />
      </WordGroup>
      <WordGroup>
        <NewWord word="de" />
        <NewWord word="okuri" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="deashi-harai" />
        <Waza wazaKey="okuriashi-harai" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="goshi" alternative="koshi" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="o-goshi" />
        <Waza wazaKey="harai-goshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="guruma" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="koshi-guruma" />
        <Waza wazaKey="ashi-guruma" />
        <Waza wazaKey="o-guruma" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="seoi" />
        <NewWord word="nage" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="seoi-nage" />
        <Waza wazaKey="ura-nage" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="tai" />
        <NewWord word="tani" />
        <NewWord word="otoshi" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="tai-otoshi" />
        <Waza wazaKey="seoi-otoshi" />
        <Waza wazaKey="yoko-otoshi" />
        <Waza wazaKey="tani-otoshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="gaeshi" alternative="kaeshi" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="sumi-gaeshi" />
        <Waza wazaKey="osoto-gaeshi" />
        <Waza wazaKey="kouchi-gaeshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="juji" />
        <NewWord word="jime" />
      </WordGroup>
      <WordGroup>
        <NewWord word="gyaku" />
        <NewWord word="nami" />
        <NewWord word="kata-single" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="juji-gatame" />
        <Waza wazaKey="nami-juji-jime" />
        <Waza wazaKey="kata-juji-jime" />
        <Waza wazaKey="gyaku-juji-jime" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="te" />
      </WordGroup>
      <WordGroup>
        <NewWord word="tsuri" />
        <NewWord word="hiki" />
        <NewWord word="osae" />
        <NewWord word="komi" />
        <NewWord word="moro" />
      </WordGroup>
      <WordGroup>
        <NewWord word="tsurikomi" />
        <NewWord word="osaekomi" />
        <NewWord word="hikikomi" />
      </WordGroup>
      <WordGroup>
        <NewWord word="hikite" />
        <NewWord word="tsurite" />
        <NewWord word="morote" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="tsuri-goshi" />
        <Waza wazaKey="tsurikomi-goshi" />
        <Waza wazaKey="sasae-tsurikomi-ashi" />
        <Waza wazaKey="hikikomi-gaeshi" />
        <Waza wazaKey="morote-gari" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="maki" />
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="soto-makikomi" />
        <Waza wazaKey="osoto-makikomi" />
        <Waza wazaKey="kouchi-makikomi" />
        <Waza wazaKey="harai-makikomi" />
        <Waza wazaKey="uchi-makikomi" />
      </UnderstandableWaza>
    </article>
  );
}
