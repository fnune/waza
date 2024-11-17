import type { PropsWithChildren } from "react";
import type { WordKey } from "~/data";
import { InlineWaza, Waza } from "../Waza";
import { InlineWord, Word } from "../Word";

function WordGroup({ children }: PropsWithChildren) {
  return <section className="flex items-center gap-8 p-8">{children}</section>;
}

function NewWord({
  children,
  word,
  alternative,
}: PropsWithChildren<{ word: WordKey; alternative?: WordKey }>) {
  return (
    <aside className="text-center">
      <p>
        <b>
          <Word wordKey={word} />
        </b>
        {alternative && (
          <>
            , or <Word wordKey={alternative} />
          </>
        )}
      </p>
      <p>{children}</p>
    </aside>
  );
}

function UnderstandableWaza({ children }: PropsWithChildren) {
  return <section className="flex flex-col gap-8 rounded bg-slate-200 p-8">{children}</section>;
}

export function Vocabulary() {
  return (
    <article className="flex flex-col items-center gap-16">
      <WordGroup>
        <NewWord word="ko">The foot moves inward.</NewWord>
        <NewWord word="o">The foot moves outward.</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="uchi">Attack between the legs.</NewWord>
        <NewWord word="soto">Attack outside the legs.</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="gari">Reap the leg that has most of the weight on it.</NewWord>
        <NewWord word="harai" alternative="barai">
          Sweep the leg that has less weight on it.
        </NewWord>
        <NewWord word="gake">Hook the leg with weight on it.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="osoto-gari" />
        <Waza wazaKey="kosoto-gake" />
        <Waza wazaKey="ouchi-gari" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="yoko">Side ⟷</NewWord>
        <NewWord word="kami">Above ↑</NewWord>
        <NewWord word="ushiro">Behind ↑</NewWord>
        <NewWord word="ma">Front ↓</NewWord>
        <NewWord word="ura">Back ↑</NewWord>
        <NewWord word="sumi">Corner ↘</NewWord>
        <NewWord word="tate">Vertical ↥</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="shiho">Four directions ⛶</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="ude">Arm.</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="gatame">Stretched hold.</NewWord>
        <NewWord word="garami">Twisting or entanglement using torque.</NewWord>
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
        <NewWord word="kesa">Scarf.</NewWord>
        <NewWord word="kuzure">Variation, or modified.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="kesa-gatame" />
        <Waza wazaKey="ushiro-kesa-gatame" />
        <Waza wazaKey="kuzure-kami-shiho-gatame" />
        <Waza wazaKey="kuzure-kesa-gatame" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="ashi-foot" alternative="ashi-leg">
          Foot, but sometimes lower leg.
        </NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="de">The forward foot that is currently advancing.</NewWord>
        <NewWord word="okuri">The foot that is sliding to catch up with a movement.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="deashi-harai" />
        <Waza wazaKey="okuriashi-harai" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="goshi" alternative="koshi">
          Hip.
        </NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="o-goshi" />
        <Waza wazaKey="harai-goshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="guruma">Wheel.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="koshi-guruma" />
        <Waza wazaKey="ashi-guruma" />
        <Waza wazaKey="o-guruma" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="seoi">To carry over the shoulder.</NewWord>
        <NewWord word="nage">Throw.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="seoi-nage" />
        <Waza wazaKey="ura-nage" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="tai">Body.</NewWord>
        <NewWord word="tani">Valley.</NewWord>
        <NewWord word="otoshi">Body.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="tai-otoshi" />
        <Waza wazaKey="seoi-otoshi" />
        <Waza wazaKey="yoko-otoshi" />
        <Waza wazaKey="tani-otoshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="gaeshi" alternative="kaeshi">
          Reversal, turn-over.
        </NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="sumi-gaeshi" />
        <Waza wazaKey="osoto-gaeshi" />
        <Waza wazaKey="kouchi-gaeshi" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="juji">Cross.</NewWord>
        <NewWord word="jime">Choke.</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="gyaku">Reversed.</NewWord>
        <NewWord word="nami">Normal.</NewWord>
        <NewWord word="kata-single">Single.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="juji-gatame" />
        <Waza wazaKey="nami-juji-jime" />
        <Waza wazaKey="kata-juji-jime" />
        <Waza wazaKey="gyaku-juji-jime" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="te">Hand.</NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="tsuri">To lift or to fish.</NewWord>
        <NewWord word="hiki">To pull.</NewWord>
        <NewWord word="osae">To suppress.</NewWord>
        <NewWord word="komi">Inward.</NewWord>
        <NewWord word="moro">
          Two, when paired with <Word wordKey="te" />.
        </NewWord>
      </WordGroup>
      <WordGroup>
        <NewWord word="tsurikomi">Pulling and lifting.</NewWord>
        <NewWord word="hikite">The pulling hand, usually grabbing the sleeve.</NewWord>
        <NewWord word="tsurite">The lifting hand, usually grabbing the lapel.</NewWord>
        <NewWord word="osaekomi">Pinning down.</NewWord>
        <NewWord word="hikikomi">Pulling inward.</NewWord>
        <NewWord word="morote">Two hands.</NewWord>
      </WordGroup>
      <UnderstandableWaza>
        <Waza wazaKey="tsuri-goshi" />
        <Waza wazaKey="tsurikomi-goshi" />
        <Waza wazaKey="sasae-tsurikomi-ashi" />
        <Waza wazaKey="hikikomi-gaeshi" />
        <Waza wazaKey="morote-gari" />
      </UnderstandableWaza>

      <WordGroup>
        <NewWord word="maki">Roll.</NewWord>
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
