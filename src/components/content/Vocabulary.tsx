import type { PropsWithChildren } from "react";
import type { WordKey } from "~/data";
import { useI18nContext } from "~/locales/i18n-react";

import { Container } from "../Container";
import { Waza } from "../Waza";
import { InlineWord, Word } from "../Word";

function WordGroup({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-wrap justify-center gap-x-2 gap-y-16 md:gap-x-8">
      {children}
    </section>
  );
}

function NewWord({ word, alternative }: { word: WordKey; alternative?: WordKey }) {
  const { LL } = useI18nContext();
  return (
    <aside className="flex w-48 flex-col items-center gap-3 print:break-inside-avoid">
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

function Page({ children }: PropsWithChildren) {
  return (
    <div className="print:h-100dvh print:w-100dvw flex max-w-full flex-col items-center gap-y-16 sm:gap-x-8 md:gap-x-16 print:break-before-page print:break-inside-avoid print:justify-center print:gap-8 print:overflow-hidden">
      {children}
    </div>
  );
}

function UnderstandableWaza({ children }: PropsWithChildren) {
  return (
    <section className="border-border flex flex-row flex-wrap justify-around gap-16 rounded-3xl border bg-white p-12 shadow-xl md:justify-center md:p-16 dark:border-neutral-800 dark:bg-neutral-900 print:break-inside-avoid print:gap-8 print:border-4 print:bg-none print:p-12 print:shadow-none">
      {children}
    </section>
  );
}

export function Vocabulary() {
  return (
    <Container>
      <Page>
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
      </Page>

      <Page>
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
          <NewWord word="gatame" />
          <NewWord word="garami" />
        </WordGroup>
        <UnderstandableWaza>
          <Waza wazaKey="yoko-shiho-gatame" />
          <Waza wazaKey="kami-shiho-gatame" />
          <Waza wazaKey="tate-shiho-gatame" />
          <Waza wazaKey="ura-gatame" />
        </UnderstandableWaza>
      </Page>

      <Page>
        <WordGroup>
          <NewWord word="ude" />
        </WordGroup>
        <UnderstandableWaza>
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
      </Page>

      <Page>
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
      </Page>

      <Page>
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
      </Page>

      <Page>
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
      </Page>

      <Page>
        <WordGroup>
          <NewWord word="gaeshi" alternative="kaeshi" />
        </WordGroup>
        <UnderstandableWaza>
          <Waza wazaKey="sumi-gaeshi" />
          <Waza wazaKey="osoto-gaeshi" />
          <Waza wazaKey="kouchi-gaeshi" />
        </UnderstandableWaza>
      </Page>

      <Page>
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
      </Page>

      <Page>
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
      </Page>

      <Page>
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
      </Page>
    </Container>
  );
}
