import type { WordKey } from "~/data";
import type { BaseTranslation } from "../i18n-types";

const words: Record<WordKey, string> = {
  arashi: "tormenta",
  "ashi-leg": "pierna",
  "ashi-foot": "pie",
  ate: "golpe",
  barai: "barrer",
  basami: "tijeras",
  dai: "grande o importante",
  daki: "abrazo",
  de: "avanzar",
  do: "tronco",
  eri: "solapa",
  gaeshi: "volteo",
  gake: "enganchar",
  garami: "enredo",
  gari: "segar",
  gatame: "sujeción",
  gokyo: "quinto grupo",
  goshi: "cadera",
  guruma: "rueda",
  gyaku: "inverso",
  ha: "ala o lado",
  habukareta: "omitido",
  hadaka: "desnudo",
  hane: "resorte",
  hara: "abdomen",
  harai: "barrer",
  hiki: "tirar",
  hikikomi: "tirar hacia adentro",
  hikite: "mano de tracción",
  hiza: "rodilla",
  ikkyo: "primer grupo",
  ippon: "un punto completo",
  jime: "estrangulación",
  juji: "cruz",
  kaeshi: "volteo",
  kakato: "talón",
  kami: "arriba",
  kani: "cangrejo",
  kansetsu: "bloqueo articular",
  "kata-single": "individual",
  "kata-shoulder": "hombro",
  katame: "control",
  kawazu: "enredo de una pierna",
  kesa: "bufanda",
  kibisu: "talón",
  kinshi: "prohibido",
  ko: "pequeño",
  kobushi: "puño",
  komi: "hacia adentro",
  koshi: "cadera",
  kubi: "cuello",
  kuchiki: "madera podrida",
  kuzure: "variación",
  kyusho: "punto vital",
  ma: "frente",
  maki: "rollo",
  makura: "almohada",
  mata: "muslo",
  mi: "cuerpo",
  moro: "dos",
  morote: "dos manos",
  mune: "pecho",
  nage: "derribo",
  nami: "normal",
  nikyo: "segundo grupo",
  no: "de",
  o: "grande",
  obi: "cinturón",
  okuri: "deslizar",
  okuriashi: "pie deslizante",
  osae: "suprimir",
  osaekomi: "fijación",
  otoshi: "caída",
  ryo: "ambos",
  sankaku: "triángulo",
  sankyo: "tercer grupo",
  sasae: "soporte",
  seoi: "cargar con el hombro",
  shiho: "cuatro direcciones",
  shime: "estrangulación",
  shinmeisho: "nueva designación",
  sode: "manga",
  soto: "exterior",
  sukashi: "evasión",
  sukui: "recoger",
  sumi: "esquina",
  sutemi: "sacrificio",
  tachi: "de pie",
  tai: "cuerpo",
  tani: "valle",
  taoshi: "derribo",
  tate: "vertical",
  tawara: "saco de arroz",
  te: "mano",
  tomoe: "círculo",
  tori: "tomar o agarrar",
  tsubame: "golondrina",
  tsukkomi: "empuje",
  tsuri: "elevar",
  tsurikomi: "elevar y tirar",
  tsurite: "mano elevadora",
  uchi: "interior",
  ude: "brazo",
  uki: "flotante",
  ura: "detrás",
  ushiro: "atrás",
  utsuri: "desplazamiento",
  wakare: "separación",
  waki: "axila",
  waza: "técnicas",
  yama: "montaña",
  yoko: "lado",
  yonkyo: "cuarto grupo",
  yubisaki: "punta del dedo",
} as const;

const wordComments: Record<WordKey, string> = {
  arashi: "",
  "ashi-leg": "",
  "ashi-foot": "Pie, pero a veces parte inferior de la pierna.",
  ate: "",
  barai: "",
  basami: "",
  dai: "",
  daki: "",
  de: "El pie que inicia el movimiento.",
  do: "",
  eri: "",
  gaeshi: "Reversión o volteo.",
  gake: "Enganchar el pie que soporta el peso.",
  garami: "Torsión o enredo usando torque.",
  gari: "Segar el pie que soporta el peso.",
  gatame: "Sujeción estirada.",
  gokyo: "",
  goshi: "Cadera.",
  guruma: "Rueda.",
  gyaku: "Inverso.",
  ha: "",
  habukareta: "",
  hadaka: "",
  hane: "",
  hara: "",
  harai: "Barrer el pie que soporta menos peso.",
  hiki: "Tirar.",
  hikikomi: "Tirar hacia adentro.",
  hikite: "La mano que tira, usualmente agarrando la manga.",
  hiza: "",
  ikkyo: "",
  ippon: "",
  jime: "Estrangulación.",
  juji: "Cruz.",
  kaeshi: "",
  kakato: "",
  kami: "Arriba ↑",
  kani: "",
  kansetsu: "",
  "kata-single": "Individual.",
  "kata-shoulder": "",
  katame: "",
  kawazu: "",
  kesa: "Bufanda.",
  kibisu: "",
  kinshi: "",
  ko: "El pie se mueve hacia adentro.",
  kobushi: "",
  komi: "Hacia adentro.",
  koshi: "",
  kubi: "",
  kuchiki: "",
  kuzure: "Variación o modificación.",
  kyusho: "",
  ma: "Frente ↓",
  maki: "Rollo.",
  makura: "",
  mata: "",
  mi: "",
  moro: 'Dos, cuando se combina con "te" (mano).',
  morote: "Dos manos.",
  mune: "",
  nage: "Derribo.",
  nami: "Normal.",
  nikyo: "",
  no: "",
  o: "El pie se mueve hacia afuera.",
  obi: "",
  okuri: "El pie que desliza para seguir el otro pie.",
  okuriashi: "",
  osae: "Reprimir.",
  osaekomi: "Mantener en el suelo.",
  otoshi: "Caída.",
  ryo: "",
  sankaku: "",
  sankyo: "",
  sasae: "",
  seoi: "Cargar con el hombro.",
  shiho: "Cuatro direcciones.",
  shime: "",
  shinmeisho: "",
  sode: "",
  soto: "Ataque por fuera de las piernas.",
  sukashi: "",
  sukui: "",
  sumi: "Esquina.",
  sutemi: "",
  tachi: "",
  tai: "Cuerpo.",
  tani: "Valle.",
  taoshi: "",
  tate: "Vertical ↥",
  tawara: "",
  te: "Mano.",
  tomoe: "",
  tori: "",
  tsubame: "",
  tsukkomi: "",
  tsuri: "Elevar o pescar.",
  tsurikomi: "Elevar y tirar.",
  tsurite: "La mano elevadora, usualmente agarrando el cuello.",
  uchi: "Ataque entre las piernas.",
  ude: "Brazo.",
  uki: "",
  ura: "Propia espalda.",
  ushiro: "Atrás ↑",
  utsuri: "",
  wakare: "",
  waki: "",
  waza: "",
  yama: "",
  yoko: "Lado ⟷",
  yonkyo: "",
  yubisaki: "",
} as const;

const es = {
  or: "o",
  downloadPdf: "Descargar PDF",
  ...words,
  wordComments,
} satisfies BaseTranslation;

export default es;
