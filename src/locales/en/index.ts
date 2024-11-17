import type { WordKey } from "~/data";
import type { BaseTranslation } from "../i18n-types";

const words: Record<WordKey, string> = {
  arashi: "storm",
  "ashi-leg": "leg",
  "ashi-foot": "foot",
  ate: "strike",
  barai: "sweep",
  basami: "scissors",
  dai: "great or major",
  daki: "embrace",
  de: "advancing",
  do: "trunk",
  eri: "lapel",
  gaeshi: "reversal",
  gake: "hook",
  garami: "entanglement",
  gari: "reap",
  gatame: "hold",
  gokyo: "fifth group",
  goshi: "hip",
  guruma: "wheel",
  gyaku: "reverse",
  ha: "wing or side",
  habukareta: "omitted",
  hadaka: "naked",
  hane: "spring",
  hara: "abdomen",
  harai: "sweep",
  hiki: "pull",
  hikikomi: "pulling inward",
  hikite: "pulling hand",
  hiza: "knee",
  ikkyo: "first group",
  ippon: "one full point",
  jime: "choke",
  juji: "cross",
  kaeshi: "reversal",
  kakato: "heel",
  kami: "above",
  kani: "crab",
  kansetsu: "joint-lock",
  "kata-single": "single",
  "kata-shoulder": "shoulder",
  katame: "hold",
  kawazu: "one-leg entanglement",
  kesa: "scarf",
  kibisu: "heel",
  kinshi: "forbidden",
  ko: "small",
  kobushi: "fist",
  komi: "inward",
  koshi: "hip",
  kubi: "neck",
  kuchiki: "rotten wood",
  kuzure: "variation",
  kyusho: "vital spot",
  ma: "front",
  maki: "wrap",
  makura: "pillow",
  mata: "thigh",
  mi: "body",
  moro: "two",
  morote: "two hands",
  mune: "chest",
  nage: "throwing",
  nami: "normal",
  nikyo: "second group",
  no: "of",
  o: "big",
  obi: "belt",
  okuri: "sliding",
  okuriashi: "sliding foot",
  osae: "suppress",
  osaekomi: "pinning",
  otoshi: "drop",
  ryo: "both",
  sankaku: "triangle",
  sankyo: "third group",
  sasae: "support",
  seoi: "carry-on-the-back",
  shiho: "four directions",
  shime: "choke",
  shinmeisho: "new designation",
  sode: "sleeve",
  soto: "outer",
  sukashi: "evasion",
  sukui: "scoop",
  sumi: "corner",
  sutemi: "sacrifice",
  tachi: "standing",
  tai: "body",
  tani: "valley",
  taoshi: "takedown",
  tate: "vertical",
  tawara: "rice bag",
  te: "hand",
  tomoe: "circle",
  tori: "taking or grabbing",
  tsubame: "swallow",
  tsukkomi: "thrust",
  tsuri: "lifting",
  tsurikomi: "lifting and pulling",
  tsurite: "lifting hand",
  uchi: "inside",
  ude: "arm",
  uki: "floating",
  ura: "back",
  ushiro: "behind",
  utsuri: "shift",
  wakare: "separation",
  waki: "armpit",
  waza: "techniques",
  yama: "mountain",
  yoko: "side",
  yonkyo: "fourth group",
  yubisaki: "fingertip",
} as const;

const wordComments: Record<WordKey, string> = {
  arashi: "",
  "ashi-leg": "",
  "ashi-foot": "Foot, but sometimes lower leg.",
  ate: "",
  barai: "",
  basami: "",
  dai: "",
  daki: "",
  de: "The foot that is initiating a movement.",
  do: "",
  eri: "",
  gaeshi: "Reversal, turn-over.",
  gake: "Hook the leg with weight on it.",
  garami: "Twisting or entanglement using torque.",
  gari: "Reap the leg that has most of the weight on it.",
  gatame: "Stretched hold.",
  gokyo: "",
  goshi: "Hip.",
  guruma: "Wheel.",
  gyaku: "Reversed.",
  ha: "",
  habukareta: "",
  hadaka: "",
  hane: "",
  hara: "",
  harai: "Sweep the leg that has less weight on it.",
  hiki: "To pull.",
  hikikomi: "Pulling inward.",
  hikite: "The pulling hand, usually grabbing the sleeve.",
  hiza: "",
  ikkyo: "",
  ippon: "",
  jime: "Choke.",
  juji: "Cross.",
  kaeshi: "",
  kakato: "",
  kami: "Above ↑",
  kani: "",
  kansetsu: "",
  "kata-single": "Single.",
  "kata-shoulder": "",
  katame: "",
  kawazu: "",
  kesa: "Scarf.",
  kibisu: "",
  kinshi: "",
  ko: "The foot moves inward.",
  kobushi: "",
  komi: "Inward.",
  koshi: "",
  kubi: "",
  kuchiki: "",
  kuzure: "Variation, or modified.",
  kyusho: "",
  ma: "Front ↓",
  maki: "Roll.",
  makura: "",
  mata: "",
  mi: "",
  moro: 'Two, when paired with "te" (hand).',
  morote: "Two hands.",
  mune: "",
  nage: "Throw.",
  nami: "Normal.",
  nikyo: "",
  no: "",
  o: "The foot moves outward.",
  obi: "",
  okuri: "The foot that is sliding to catch up.",
  okuriashi: "",
  osae: "To suppress.",
  osaekomi: "Pinning down.",
  otoshi: "Drop.",
  ryo: "",
  sankaku: "",
  sankyo: "",
  sasae: "",
  seoi: "To carry over the shoulder.",
  shiho: "Four directions ⛶",
  shime: "",
  shinmeisho: "",
  sode: "",
  soto: "Attack outside the legs.",
  sukashi: "",
  sukui: "",
  sumi: "Corner.",
  sutemi: "",
  tachi: "",
  tai: "Body.",
  tani: "Valley:",
  taoshi: "",
  tate: "Vertical ↥",
  tawara: "",
  te: "Hand.",
  tomoe: "",
  tori: "",
  tsubame: "",
  tsukkomi: "",
  tsuri: "To lift or to fish.",
  tsurikomi: "Lifting and pulling.",
  tsurite: "The lifting hand, usually grabbing the lapel.",
  uchi: "Attack between the legs.",
  ude: "Arm.",
  uki: "",
  ura: "One's own back.",
  ushiro: "Behind ↑",
  utsuri: "",
  wakare: "",
  waki: "",
  waza: "",
  yama: "",
  yoko: "Side ⟷",
  yonkyo: "",
  yubisaki: "",
} as const;

const en = {
  or: "or",
  ...words,
  wordComments,
} satisfies BaseTranslation;

export default en;
