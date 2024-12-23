import type { WordKey } from "~/data";
import type { BaseTranslation } from "../i18n-types";

const words: Record<WordKey, string> = {
  arashi: "Sturm",
  "ashi-leg": "Bein",
  "ashi-foot": "Fuß",
  ate: "Schlag",
  barai: "Fegen",
  basami: "Schere",
  dai: "Groß oder wichtig",
  daki: "Umarmung",
  de: "Vorgehend",
  do: "Rumpf",
  eri: "Revers",
  gaeshi: "Umkehr",
  gake: "Haken",
  garami: "Verwicklung",
  gari: "Sichel",
  gatame: "Halt",
  gokyo: "Fünfte Gruppe",
  goshi: "Hüfte",
  guruma: "Rad",
  gyaku: "Umgekehrt",
  ha: "Flügel oder Seite",
  habukareta: "Ausgelassen",
  hadaka: "Nackt",
  hane: "Feder",
  hara: "Bauch",
  harai: "Fegen",
  hiki: "Ziehen",
  hikikomi: "Eindrücken",
  hikite: "Ziehende Hand",
  hiza: "Knie",
  ikkyo: "Erste Gruppe",
  ippon: "Ein voller Punkt",
  jime: "Würgen",
  juji: "Kreuz",
  kaeshi: "Umkehr",
  kakato: "Ferse",
  kami: "Oben",
  kani: "Krabbe",
  kansetsu: "Gelenkhebel",
  "kata-single": "Einzeln",
  "kata-shoulder": "Schulter",
  katame: "Fixieren",
  kawazu: "Ein-Bein-Verwicklung",
  kesa: "Schal",
  kibisu: "Ferse",
  kinshi: "Verboten",
  ko: "Klein",
  kobushi: "Faust",
  komi: "Herein",
  koshi: "Hüfte",
  kubi: "Nacken",
  kuchiki: "Faules Holz",
  kuzure: "Variation",
  kyusho: "Vitalpunkt",
  ma: "Vorne",
  maki: "Rolle",
  makura: "Kissen",
  mata: "Oberschenkel",
  mi: "Körper",
  moro: "Zwei",
  morote: "Zwei Hände",
  mune: "Brust",
  nage: "Wurf",
  nami: "Normal",
  nikyo: "Zweite Gruppe",
  no: "Von",
  o: "Groß",
  obi: "Gürtel",
  okuri: "Nachfolgend",
  okuriashi: "Nachfolgender Fuß",
  osae: "Unterdrücken",
  osaekomi: "Festhalten",
  otoshi: "Fall",
  ryo: "Beide",
  sankaku: "Dreieck",
  sankyo: "Dritte Gruppe",
  sasae: "Stützen",
  seoi: "Auf der Schulter tragen",
  shiho: "Vier Richtungen",
  shime: "Würgegriff",
  shinmeisho: "Neue Bezeichnung",
  sode: "Ärmel",
  soto: "Außen",
  sukashi: "Ausweichen",
  sukui: "Schöpfen",
  sumi: "Ecke",
  sutemi: "Opfer",
  tachi: "Stehend",
  tai: "Körper",
  tani: "Tal",
  taoshi: "Umwerfen",
  tate: "Vertikal",
  tawara: "Reissack",
  te: "Hand",
  tomoe: "Kreis",
  tori: "Nehmen",
  tsubame: "Schwalbe",
  tsukkomi: "Stoßen",
  tsuri: "Heben",
  tsurikomi: "Heben und Ziehen",
  tsurite: "Hebende Hand",
  uchi: "Innen",
  ude: "Arm",
  uki: "Schwebend",
  ura: "Hinten",
  ushiro: "Hinten",
  utsuri: "Verschiebung",
  wakare: "Trennung",
  waki: "Achsel",
  waza: "Techniken",
  yama: "Berg",
  yoko: "Seite",
  yonkyo: "Vierte Gruppe",
  yubisaki: "Fingerspitze",
} as const;

const wordComments: Record<WordKey, string> = {
  arashi: "",
  "ashi-leg": "",
  "ashi-foot": "Fuß, manchmal Unterschenkel.",
  ate: "",
  barai: "",
  basami: "",
  dai: "",
  daki: "",
  de: "Der Fuß, der die Bewegung einleitet.",
  do: "",
  eri: "",
  gaeshi: "Umkehr, Umdrehen.",
  gake: "Haken des belasteten Beins.",
  garami: "Verdrehen oder Verflechten mit Drehmoment.",
  gari: "Sichel des belasteten Beins.",
  gatame: "Gestreckter Halt.",
  gokyo: "",
  goshi: "Hüfte.",
  guruma: "Rad.",
  gyaku: "Umgekehrt.",
  ha: "",
  habukareta: "",
  hadaka: "",
  hane: "",
  hara: "",
  harai: "Fegen des weniger belasteten Beins.",
  hiki: "Ziehen.",
  hikikomi: "Hereinziehen.",
  hikite: "Die ziehende Hand, meist am Ärmel greifend.",
  hiza: "",
  ikkyo: "",
  ippon: "",
  jime: "Würgen.",
  juji: "Kreuz.",
  kaeshi: "",
  kakato: "",
  kami: "Oben ↑",
  kani: "",
  kansetsu: "",
  "kata-single": 'Wird genauso ausgesprochen wie "kata" (Schulter).',
  "kata-shoulder": 'Wird genauso ausgesprochen wie "kata" (einzeln).',
  katame: "",
  kawazu: "",
  kesa: "Schal.",
  kibisu: "",
  kinshi: "",
  ko: "Der Fuß bewegt sich nach innen.",
  kobushi: "",
  komi: "Herein.",
  koshi: "",
  kubi: "",
  kuchiki: "",
  kuzure: "Variation, oder modifiziert.",
  kyusho: "",
  ma: "Vorne ↓",
  maki: "Rolle.",
  makura: "",
  mata: "",
  mi: "",
  moro: 'Zwei, oft zusammen mit "te" (Hand).',
  morote: "Zwei Hände.",
  mune: "",
  nage: "Wurf.",
  nami: "Normal.",
  nikyo: "",
  no: "",
  o: "Der Fuß bewegt sich nach außen.",
  obi: "",
  okuri: "Der Fuß, der nachzieht.",
  okuriashi: "",
  osae: "Unterdrücken.",
  osaekomi: "Festhalten.",
  otoshi: "Fall.",
  ryo: "",
  sankaku: "",
  sankyo: "",
  sasae: "",
  seoi: "Auf der Schulter tragen.",
  shiho: "Vier Richtungen.",
  shime: "",
  shinmeisho: "",
  sode: "",
  soto: "Angriff außerhalb der Beine.",
  sukashi: "",
  sukui: "",
  sumi: "Ecke.",
  sutemi: "",
  tachi: "",
  tai: "Körper.",
  tani: "Tal.",
  taoshi: "",
  tate: "Vertikal ↥",
  tawara: "",
  te: "Hand.",
  tomoe: "",
  tori: "",
  tsubame: "",
  tsukkomi: "",
  tsuri: "Heben oder Angeln.",
  tsurikomi: "Heben und Ziehen.",
  tsurite: "Die hebende Hand, meist am Revers greifend.",
  uchi: "Angriff zwischen den Beinen.",
  ude: "Arm.",
  uki: "Schwebende oder instabile Position.",
  ura: "Der eigene Rücken.",
  ushiro: "Hinten ↑",
  utsuri: "",
  wakare: "",
  waki: "",
  waza: "",
  yama: "",
  yoko: "Seite ⟷",
  yonkyo: "",
  yubisaki: "",
} as const;

const de = {
  or: "oder",
  downloadPdf: "PDF herunterladen",
  ...words,
  wordComments,
} satisfies BaseTranslation;

export default de;
