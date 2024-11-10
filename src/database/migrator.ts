import type { Kysely } from "kysely";

import type { DB } from "./generated";

export async function up(db: Kysely<DB>) {
  await db.schema
    .createTable("waza")
    .addColumn("id", "serial", (cb) => cb.primaryKey())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("romaji", "text", (cb) => cb.notNull())
    .addColumn("video_links", "jsonb", (cb) => cb.notNull().defaultTo("[]"))
    .addColumn("words_japanese", "jsonb", (cb) => cb.notNull())
    .addColumn("words_romaji", "jsonb", (cb) => cb.notNull())
    .addColumn("categories", "jsonb", (cb) => cb.notNull().defaultTo("[]"))
    .execute();

  await db.schema
    .createTable("categories")
    .addColumn("romaji", "text", (cb) => cb.primaryKey().unique())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("words_japanese", "jsonb", (cb) => cb.notNull())
    .addColumn("words_romaji", "jsonb", (cb) => cb.notNull())
    .addColumn("parent", "text")
    .addForeignKeyConstraint("categories_parent_fk", ["parent"], "categories", ["romaji"])
    .execute();

  await db.schema
    .createTable("words")
    .ifNotExists()
    .addColumn("romaji", "text", (cb) => cb.primaryKey().unique())
    .addColumn("japanese", "text", (cb) => cb.notNull())
    .addColumn("english", "text", (cb) => cb.notNull())
    .addColumn("description", "text")
    .execute();

  await db
    .insertInto("categories")
    .values([
      {
        romaji: "nage-waza",
        japanese: "投げ技",
        words_japanese: ["投げ", "技"],
        words_romaji: ["nage", "waza"],
        parent: null,
      },
      {
        romaji: "te-waza",
        japanese: "手技",
        words_japanese: ["手", "技"],
        words_romaji: ["te", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "koshi-waza",
        japanese: "腰技",
        words_japanese: ["腰", "技"],
        words_romaji: ["koshi", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "ashi-waza",
        japanese: "足技",
        words_japanese: ["足", "技"],
        words_romaji: ["ashi", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "ma-sutemi-waza",
        japanese: "真捨身技",
        words_japanese: ["真", "捨身", "技"],
        words_romaji: ["ma", "sutemi", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "yoko-sutemi-waza",
        japanese: "横捨身技",
        words_japanese: ["横", "捨身", "技"],
        words_romaji: ["yoko", "sutemi", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "dai-ikkyo",
        japanese: "第一教",
        words_japanese: ["第一", "教"],
        words_romaji: ["dai", "ikkyo"],
        parent: "nage-waza",
      },
      {
        romaji: "dai-nikyo",
        japanese: "第二教",
        words_japanese: ["第二", "教"],
        words_romaji: ["dai", "nikyo"],
        parent: "nage-waza",
      },
      {
        romaji: "dai-sankyo",
        japanese: "第三教",
        words_japanese: ["第三", "教"],
        words_romaji: ["dai", "sankyo"],
        parent: "nage-waza",
      },
      {
        romaji: "dai-yonkyo",
        japanese: "第四教",
        words_japanese: ["第四", "教"],
        words_romaji: ["dai", "yonkyo"],
        parent: "nage-waza",
      },
      {
        romaji: "dai-gokyo",
        japanese: "第五教",
        words_japanese: ["第五", "教"],
        words_romaji: ["dai", "gokyo"],
        parent: "nage-waza",
      },
      {
        romaji: "habukareta-waza",
        japanese: "省かれた技",
        words_japanese: ["省かれた", "技"],
        words_romaji: ["habukareta", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "shinmeisho-no-waza",
        japanese: "新名称の技",
        words_japanese: ["新名称", "技"],
        words_romaji: ["shinmeisho", "waza"],
        parent: "nage-waza",
      },
      {
        romaji: "katame-waza",
        japanese: "固め技",
        words_japanese: ["固め", "技"],
        words_romaji: ["katame", "waza"],
        parent: null,
      },
      {
        romaji: "osaekomi-waza",
        japanese: "抑え込み技",
        words_japanese: ["抑え込み", "技"],
        words_romaji: ["osaekomi", "waza"],
        parent: "katame-waza",
      },
      {
        romaji: "shime-waza",
        japanese: "絞め技",
        words_japanese: ["絞め", "技"],
        words_romaji: ["shime", "waza"],
        parent: "katame-waza",
      },
      {
        romaji: "kansetsu-waza",
        japanese: "関節技",
        words_japanese: ["関節", "技"],
        words_romaji: ["kansetsu", "waza"],
        parent: "katame-waza",
      },
      {
        romaji: "kinshi-waza",
        japanese: "禁止技",
        words_japanese: ["禁止", "技"],
        words_romaji: ["kinshi", "waza"],
        parent: null,
      },
    ])
    .execute();

  await db
    .insertInto("waza")
    .values([
      // Dai Ikkyo (1st Group)
      {
        romaji: "deashi-harai",
        japanese: "出足払",
        video_links: [],
        words_japanese: ["出", "足", "払"],
        words_romaji: ["de", "ashi", "harai"],
        categories: ["nage-waza", "ashi-waza", "dai-ikkyo"],
      },
      {
        romaji: "hiza-guruma",
        japanese: "膝車",
        video_links: [],
        words_japanese: ["膝", "車"],
        words_romaji: ["hiza", "guruma"],
        categories: ["nage-waza", "ashi-waza", "dai-ikkyo"],
      },
      {
        romaji: "sasae-tsurikomi-ashi",
        japanese: "支釣込足",
        video_links: [],
        words_japanese: ["支", "釣込", "足"],
        words_romaji: ["sasae", "tsuri", "komi", "ashi"],
        categories: ["nage-waza", "ashi-waza", "dai-ikkyo"],
      },
      {
        romaji: "uki-goshi",
        japanese: "浮腰",
        video_links: [],
        words_japanese: ["浮", "腰"],
        words_romaji: ["uki", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-ikkyo"],
      },
      {
        romaji: "osoto-gari",
        japanese: "大外刈",
        video_links: [],
        words_japanese: ["大", "外", "刈"],
        words_romaji: ["o", "soto", "gari"],
        categories: ["nage-waza", "ashi-waza", "dai-ikkyo"],
      },
      {
        romaji: "o-goshi",
        japanese: "大腰",
        video_links: [],
        words_japanese: ["大", "腰"],
        words_romaji: ["o", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-ikkyo"],
      },
      {
        romaji: "ouchi-gari",
        japanese: "大内刈",
        video_links: [],
        words_japanese: ["大", "内", "刈"],
        words_romaji: ["o", "uchi", "gari"],
        categories: ["nage-waza", "ashi-waza", "dai-ikkyo"],
      },
      {
        romaji: "seoi-nage",
        japanese: "背負投",
        video_links: [],
        words_japanese: ["背負", "投"],
        words_romaji: ["seoi", "nage"],
        categories: ["nage-waza", "te-waza", "dai-ikkyo"],
      },

      // Dai Nikyo (2nd Group)
      {
        romaji: "kosoto-gari",
        japanese: "小外刈",
        video_links: [],
        words_japanese: ["小", "外", "刈"],
        words_romaji: ["ko", "soto", "gari"],
        categories: ["nage-waza", "ashi-waza", "dai-nikyo"],
      },
      {
        romaji: "kouchi-gari",
        japanese: "小内刈",
        video_links: [],
        words_japanese: ["小", "内", "刈"],
        words_romaji: ["ko", "uchi", "gari"],
        categories: ["nage-waza", "ashi-waza", "dai-nikyo"],
      },
      {
        romaji: "koshi-guruma",
        japanese: "腰車",
        video_links: [],
        words_japanese: ["腰", "車"],
        words_romaji: ["koshi", "guruma"],
        categories: ["nage-waza", "koshi-waza", "dai-nikyo"],
      },
      {
        romaji: "tsurikomi-goshi",
        japanese: "釣込腰",
        video_links: [],
        words_japanese: ["釣", "込", "腰"],
        words_romaji: ["tsuri", "komi", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-nikyo"],
      },
      {
        romaji: "okuriashi-harai",
        japanese: "送足払",
        video_links: [],
        words_japanese: ["送", "足", "払"],
        words_romaji: ["okuri", "ashi", "harai"],
        categories: ["nage-waza", "ashi-waza", "dai-nikyo"],
      },
      {
        romaji: "tai-otoshi",
        japanese: "体落",
        video_links: [],
        words_japanese: ["体", "落"],
        words_romaji: ["tai", "otoshi"],
        categories: ["nage-waza", "te-waza", "dai-nikyo"],
      },
      {
        romaji: "harai-goshi",
        japanese: "払腰",
        video_links: [],
        words_japanese: ["払", "腰"],
        words_romaji: ["harai", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-nikyo"],
      },
      {
        romaji: "uchi-mata",
        japanese: "内股",
        video_links: [],
        words_japanese: ["内", "股"],
        words_romaji: ["uchi", "mata"],
        categories: ["nage-waza", "ashi-waza", "dai-nikyo"],
      },

      // Dai Sankyo (3rd Group)
      {
        romaji: "kosoto-gake",
        japanese: "小外掛",
        video_links: [],
        words_japanese: ["小", "外", "掛"],
        words_romaji: ["ko", "soto", "gake"],
        categories: ["nage-waza", "ashi-waza", "dai-sankyo"],
      },
      {
        romaji: "tsuri-goshi",
        japanese: "釣腰",
        video_links: [],
        words_japanese: ["釣", "腰"],
        words_romaji: ["tsuri", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-sankyo"],
      },
      {
        romaji: "yoko-otoshi",
        japanese: "横落",
        video_links: [],
        words_japanese: ["横", "落"],
        words_romaji: ["yoko", "otoshi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-sankyo"],
      },
      {
        romaji: "ashi-guruma",
        japanese: "足車",
        video_links: [],
        words_japanese: ["足", "車"],
        words_romaji: ["ashi", "guruma"],
        categories: ["nage-waza", "ashi-waza", "dai-sankyo"],
      },
      {
        romaji: "hane-goshi",
        japanese: "跳腰",
        video_links: [],
        words_japanese: ["跳", "腰"],
        words_romaji: ["hane", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-sankyo"],
      },
      {
        romaji: "harai-tsurikomi-ashi",
        japanese: "払釣込足",
        video_links: [],
        words_japanese: ["払", "釣", "込", "足"],
        words_romaji: ["harai", "tsuri", "komi", "ashi"],
        categories: ["nage-waza", "ashi-waza", "dai-sankyo"],
      },
      {
        romaji: "tomoe-nage",
        japanese: "巴投",
        video_links: [],
        words_japanese: ["巴", "投"],
        words_romaji: ["tomoe", "nage"],
        categories: ["nage-waza", "ma-sutemi-waza", "dai-sankyo"],
      },
      {
        romaji: "kata-guruma",
        japanese: "肩車",
        video_links: [],
        words_japanese: ["肩", "車"],
        words_romaji: ["kata", "guruma"],
        categories: ["nage-waza", "te-waza", "dai-sankyo"],
      },

      // Dai Yonkyo (4th Group)
      {
        romaji: "sumi-gaeshi",
        japanese: "隅返",
        video_links: [],
        words_japanese: ["隅", "返"],
        words_romaji: ["sumi", "gaeshi"],
        categories: ["nage-waza", "ma-sutemi-waza", "dai-yonkyo"],
      },
      {
        romaji: "tani-otoshi",
        japanese: "谷落",
        video_links: [],
        words_japanese: ["谷", "落"],
        words_romaji: ["tani", "otoshi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-yonkyo"],
      },
      {
        romaji: "hane-makikomi",
        japanese: "跳巻込",
        video_links: [],
        words_japanese: ["跳", "巻込"],
        words_romaji: ["hane", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-yonkyo"],
      },
      {
        romaji: "sukui-nage",
        japanese: "掬投",
        video_links: [],
        words_japanese: ["掬", "投"],
        words_romaji: ["sukui", "nage"],
        categories: ["nage-waza", "te-waza", "dai-yonkyo"],
      },
      {
        romaji: "utsuri-goshi",
        japanese: "移腰",
        video_links: [],
        words_japanese: ["移", "腰"],
        words_romaji: ["utsuri", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-yonkyo"],
      },
      {
        romaji: "o-guruma",
        japanese: "大車",
        video_links: [],
        words_japanese: ["大", "車"],
        words_romaji: ["o", "guruma"],
        categories: ["nage-waza", "ashi-waza", "dai-yonkyo"],
      },
      {
        romaji: "soto-makikomi",
        japanese: "外巻込",
        video_links: [],
        words_japanese: ["外", "巻込"],
        words_romaji: ["soto", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-yonkyo"],
      },
      {
        romaji: "uki-otoshi",
        japanese: "浮落",
        video_links: [],
        words_japanese: ["浮", "落"],
        words_romaji: ["uki", "otoshi"],
        categories: ["nage-waza", "te-waza", "dai-yonkyo"],
      },

      // Dai Gokyo (5th Group)
      {
        romaji: "osoto-guruma",
        japanese: "大外車",
        video_links: [],
        words_japanese: ["大", "外", "車"],
        words_romaji: ["o", "soto", "guruma"],
        categories: ["nage-waza", "ashi-waza", "dai-gokyo"],
      },
      {
        romaji: "uki-waza",
        japanese: "浮技",
        video_links: [],
        words_japanese: ["浮", "技"],
        words_romaji: ["uki", "waza"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-gokyo"],
      },
      {
        romaji: "yoko-wakare",
        japanese: "横分",
        video_links: [],
        words_japanese: ["横", "分"],
        words_romaji: ["yoko", "wakare"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-gokyo"],
      },
      {
        romaji: "yoko-guruma",
        japanese: "横車",
        video_links: [],
        words_japanese: ["横", "車"],
        words_romaji: ["yoko", "guruma"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-gokyo"],
      },
      {
        romaji: "ushiro-goshi",
        japanese: "後腰",
        video_links: [],
        words_japanese: ["後", "腰"],
        words_romaji: ["ushiro", "goshi"],
        categories: ["nage-waza", "koshi-waza", "dai-gokyo"],
      },
      {
        romaji: "ura-nage",
        japanese: "裏投",
        video_links: [],
        words_japanese: ["裏", "投"],
        words_romaji: ["ura", "nage"],
        categories: ["nage-waza", "ma-sutemi-waza", "dai-gokyo"],
      },
      {
        romaji: "sumi-otoshi",
        japanese: "隅落",
        video_links: [],
        words_japanese: ["隅", "落"],
        words_romaji: ["sumi", "otoshi"],
        categories: ["nage-waza", "te-waza", "dai-gokyo"],
      },
      {
        romaji: "yoko-gake",
        japanese: "横掛",
        video_links: [],
        words_japanese: ["横", "掛"],
        words_romaji: ["yoko", "gake"],
        categories: ["nage-waza", "yoko-sutemi-waza", "dai-gokyo"],
      },

      // Habukareta Waza
      {
        romaji: "obi-otoshi",
        japanese: "帯落",
        video_links: [],
        words_japanese: ["帯", "落"],
        words_romaji: ["obi", "otoshi"],
        categories: ["nage-waza", "te-waza", "habukareta-waza"],
      },
      {
        romaji: "seoi-otoshi",
        japanese: "背負落",
        video_links: [],
        words_japanese: ["背負", "落"],
        words_romaji: ["seoi", "otoshi"],
        categories: ["nage-waza", "te-waza", "habukareta-waza"],
      },
      {
        romaji: "yama-arashi",
        japanese: "山嵐",
        video_links: [],
        words_japanese: ["山", "嵐"],
        words_romaji: ["yama", "arashi"],
        categories: ["nage-waza", "habukareta-waza"],
      },
      {
        romaji: "osoto-otoshi",
        japanese: "大外落",
        video_links: [],
        words_japanese: ["大", "外", "落"],
        words_romaji: ["o", "soto", "otoshi"],
        categories: ["nage-waza", "ashi-waza", "habukareta-waza"],
      },
      {
        romaji: "daki-wakare",
        japanese: "抱分",
        video_links: [],
        words_japanese: ["抱", "分"],
        words_romaji: ["daki", "wakare"],
        categories: ["nage-waza", "yoko-sutemi-waza", "habukareta-waza"],
      },
      {
        romaji: "hikikomi-gaeshi",
        japanese: "引込返",
        video_links: [],
        words_japanese: ["引込", "返"],
        words_romaji: ["hikikomi", "gaeshi"],
        categories: ["nage-waza", "ma-sutemi-waza", "habukareta-waza"],
      },
      {
        romaji: "tawara-gaeshi",
        japanese: "俵返",
        video_links: [],
        words_japanese: ["俵", "返"],
        words_romaji: ["tawara", "gaeshi"],
        categories: ["nage-waza", "ma-sutemi-waza", "habukareta-waza"],
      },
      {
        romaji: "uchi-makikomi",
        japanese: "内巻込",
        video_links: [],
        words_japanese: ["内", "巻込"],
        words_romaji: ["uchi", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "habukareta-waza"],
      },

      // Shinmeisho No Waza
      {
        romaji: "morote-gari",
        japanese: "双手刈",
        video_links: [],
        words_japanese: ["双手", "刈"],
        words_romaji: ["morote", "gari"],
        categories: ["nage-waza", "te-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kuchiki-taoshi",
        japanese: "朽木倒",
        video_links: [],
        words_japanese: ["朽木", "倒"],
        words_romaji: ["kuchiki", "taoshi"],
        categories: ["nage-waza", "te-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kibisu-gaeshi",
        japanese: "踵返",
        video_links: [],
        words_japanese: ["踵", "返"],
        words_romaji: ["kibisu", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "uchi-mata-sukashi",
        japanese: "内股透",
        video_links: [],
        words_japanese: ["内", "股", "透"],
        words_romaji: ["uchi", "mata", "sukashi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "tsubame-gaeshi",
        japanese: "燕返",
        video_links: [],
        words_japanese: ["燕", "返"],
        words_romaji: ["tsubame", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kouchi-gaeshi",
        japanese: "小内返",
        video_links: [],
        words_japanese: ["小", "内", "返"],
        words_romaji: ["ko", "uchi", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "ouchi-gaeshi",
        japanese: "大内返",
        video_links: [],
        words_japanese: ["大", "内", "返"],
        words_romaji: ["o", "uchi", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "osoto-gaeshi",
        japanese: "大外返",
        video_links: [],
        words_japanese: ["大", "外", "返"],
        words_romaji: ["o", "soto", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "harai-goshi-gaeshi",
        japanese: "払腰返",
        video_links: [],
        words_japanese: ["払", "腰", "返"],
        words_romaji: ["harai", "goshi", "gaeshi"],
        categories: ["nage-waza", "koshi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "uchi-mata-gaeshi",
        japanese: "内股返",
        video_links: [],
        words_japanese: ["内", "股", "返"],
        words_romaji: ["uchi", "mata", "gaeshi"],
        categories: ["nage-waza", "ashi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "hane-goshi-gaeshi",
        japanese: "跳腰返",
        video_links: [],
        words_japanese: ["跳", "腰", "返"],
        words_romaji: ["hane", "goshi", "gaeshi"],
        categories: ["nage-waza", "koshi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kani-basami",
        japanese: "蟹挟",
        video_links: [],
        words_japanese: ["蟹", "挟"],
        words_romaji: ["kani", "basami"],
        categories: ["nage-waza", "kinshi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "osoto-makikomi",
        japanese: "大外巻込",
        video_links: [],
        words_japanese: ["大", "外", "巻込"],
        words_romaji: ["o", "soto", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kawazu-gake",
        japanese: "河津掛",
        video_links: [],
        words_japanese: ["河津", "掛"],
        words_romaji: ["kawazu", "gake"],
        categories: ["nage-waza", "kinshi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "harai-makikomi",
        japanese: "払巻込",
        video_links: [],
        words_japanese: ["払", "巻込"],
        words_romaji: ["harai", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "uchi-mata-makikomi",
        japanese: "内股巻込",
        video_links: [],
        words_japanese: ["内", "股", "巻込"],
        words_romaji: ["uchi", "mata", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "sode-tsurikomi-goshi",
        japanese: "袖釣込腰",
        video_links: [],
        words_japanese: ["袖", "釣", "込", "腰"],
        words_romaji: ["sode", "tsuri", "komi", "goshi"],
        categories: ["nage-waza", "koshi-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "ippon-seoi-nage",
        japanese: "一本背負投",
        video_links: [],
        words_japanese: ["一本", "背負", "投"],
        words_romaji: ["ippon", "seoi", "nage"],
        categories: ["nage-waza", "te-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "obi-tori-gaeshi",
        japanese: "帯取返",
        video_links: [],
        words_japanese: ["帯", "取", "返"],
        words_romaji: ["obi", "tori", "gaeshi"],
        categories: ["nage-waza", "te-waza", "shinmeisho-no-waza"],
      },
      {
        romaji: "kouchi-makikomi",
        japanese: "小内巻込",
        video_links: [],
        words_japanese: ["小", "内", "巻込"],
        words_romaji: ["ko", "uchi", "makikomi"],
        categories: ["nage-waza", "yoko-sutemi-waza", "shinmeisho-no-waza"],
      },

      // Osaekomi-waza (Pins)
      {
        romaji: "kesa-gatame",
        japanese: "袈裟固",
        video_links: [],
        words_japanese: ["袈裟", "固"],
        words_romaji: ["kesa", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "kata-gatame",
        japanese: "肩固",
        video_links: [],
        words_japanese: ["肩", "固"],
        words_romaji: ["kata", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "kami-shiho-gatame",
        japanese: "上四方固",
        video_links: [],
        words_japanese: ["上", "四方", "固"],
        words_romaji: ["kami", "shiho", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "kuzure-kami-shiho-gatame",
        japanese: "崩上四方固",
        video_links: [],
        words_japanese: ["崩", "上", "四方", "固"],
        words_romaji: ["kuzure", "kami", "shiho", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "yoko-shiho-gatame",
        japanese: "横四方固",
        video_links: [],
        words_japanese: ["横", "四方", "固"],
        words_romaji: ["yoko", "shiho", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "tate-shiho-gatame",
        japanese: "縦四方固",
        video_links: [],
        words_japanese: ["縦", "四方", "固"],
        words_romaji: ["tate", "shiho", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "kuzure-kesa-gatame",
        japanese: "崩袈裟固",
        video_links: [],
        words_japanese: ["崩", "袈裟", "固"],
        words_romaji: ["kuzure", "kesa", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "uki-gatame",
        japanese: "浮固",
        video_links: [],
        words_japanese: ["浮", "固"],
        words_romaji: ["uki", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "ura-gatame",
        japanese: "裏固",
        video_links: [],
        words_japanese: ["裏", "固"],
        words_romaji: ["ura", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },
      {
        romaji: "ushiro-kesa-gatame",
        japanese: "後袈裟固",
        video_links: [],
        words_japanese: ["後", "袈裟", "固"],
        words_romaji: ["ushiro", "kesa", "gatame"],
        categories: ["katame-waza", "osaekomi-waza"],
      },

      // Shime-waza (Chokes)
      {
        romaji: "nami-juji-jime",
        japanese: "並十字絞",
        video_links: [],
        words_japanese: ["並", "十字", "絞"],
        words_romaji: ["nami", "juji", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "gyaku-juji-jime",
        japanese: "逆十字絞",
        video_links: [],
        words_japanese: ["逆", "十字", "絞"],
        words_romaji: ["gyaku", "juji", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "kata-juji-jime",
        japanese: "片十字絞",
        video_links: [],
        words_japanese: ["片", "十字", "絞"],
        words_romaji: ["kata", "juji", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "hadaka-jime",
        japanese: "裸絞",
        video_links: [],
        words_japanese: ["裸", "絞"],
        words_romaji: ["hadaka", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "okuri-eri-jime",
        japanese: "送襟絞",
        video_links: [],
        words_japanese: ["送", "襟", "絞"],
        words_romaji: ["okuri", "eri", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "kata-ha-jime",
        japanese: "片羽絞",
        video_links: [],
        words_japanese: ["片", "羽", "絞"],
        words_romaji: ["kata", "ha", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "do-jime",
        japanese: "胴絞",
        video_links: [],
        words_japanese: ["胴", "絞"],
        words_romaji: ["do", "jime"],
        categories: ["katame-waza", "shime-waza", "kinshi-waza"],
      },
      {
        romaji: "sode-guruma-jime",
        japanese: "袖車絞",
        video_links: [],
        words_japanese: ["袖", "車", "絞"],
        words_romaji: ["sode", "guruma", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "kata-te-jime",
        japanese: "片手絞",
        video_links: [],
        words_japanese: ["片", "手", "絞"],
        words_romaji: ["kata", "te", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "ryo-te-jime",
        japanese: "両手絞",
        video_links: [],
        words_japanese: ["両", "手", "絞"],
        words_romaji: ["ryo", "te", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "tsukkomi-jime",
        japanese: "突込絞",
        video_links: [],
        words_japanese: ["突込", "絞"],
        words_romaji: ["tsukkomi", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },
      {
        romaji: "sankaku-jime",
        japanese: "三角絞",
        video_links: [],
        words_japanese: ["三角", "絞"],
        words_romaji: ["sankaku", "jime"],
        categories: ["katame-waza", "shime-waza"],
      },

      // Kansetsu-waza (Joint Locks)
      {
        romaji: "ude-garami",
        japanese: "腕緘",
        video_links: [],
        words_japanese: ["腕", "緘"],
        words_romaji: ["ude", "garami"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "juji-gatame",
        japanese: "十字固",
        video_links: [],
        words_japanese: ["十字", "固"],
        words_romaji: ["juji", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "ude-gatame",
        japanese: "腕固",
        video_links: [],
        words_japanese: ["腕", "固"],
        words_romaji: ["ude", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "hiza-gatame",
        japanese: "膝固",
        video_links: [],
        words_japanese: ["膝", "固"],
        words_romaji: ["hiza", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "waki-gatame",
        japanese: "腋固",
        video_links: [],
        words_japanese: ["腋", "固"],
        words_romaji: ["waki", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "hara-gatame",
        japanese: "腹固",
        video_links: [],
        words_japanese: ["腹", "固"],
        words_romaji: ["hara", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "ashi-garami",
        japanese: "足緘",
        video_links: [],
        words_japanese: ["足", "緘"],
        words_romaji: ["ashi", "garami"],
        categories: ["katame-waza", "kansetsu-waza", "kinshi-waza"],
      },
      {
        romaji: "ashi-gatame",
        japanese: "脚固",
        video_links: [],
        words_japanese: ["脚", "固"],
        words_romaji: ["ashi", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "te-gatame",
        japanese: "手固",
        video_links: [],
        words_japanese: ["手", "固"],
        words_romaji: ["te", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
      {
        romaji: "sankaku-gatame",
        japanese: "三角固",
        video_links: [],
        words_japanese: ["三角", "固"],
        words_romaji: ["sankaku", "gatame"],
        categories: ["katame-waza", "kansetsu-waza"],
      },
    ])
    .execute();

  await db
    .insertInto("words")
    .values([
      { romaji: "arashi", japanese: "嵐", english: "storm", description: null },
      { romaji: "ashi", japanese: "足", english: "foot", description: null },
      { romaji: "ate", japanese: "当て", english: "strike", description: null },
      { romaji: "basami", japanese: "挟", english: "scissors", description: null },
      { romaji: "dai", japanese: "大", english: "great or major", description: null },
      { romaji: "de", japanese: "出", english: "advanced", description: null },
      { romaji: "eri", japanese: "襟", english: "lapel", description: null },
      { romaji: "gaeshi", japanese: "返", english: "reversal", description: null },
      { romaji: "gake", japanese: "掛", english: "hook", description: null },
      { romaji: "garami", japanese: "絡み", english: "entanglement", description: null },
      { romaji: "gari", japanese: "刈", english: "reap", description: null },
      { romaji: "gatame", japanese: "固", english: "hold", description: null },
      { romaji: "gokyo", japanese: "五教", english: "fifth group", description: null },
      { romaji: "goshi", japanese: "腰", english: "hip", description: null },
      { romaji: "guruma", japanese: "車", english: "wheel", description: null },
      { romaji: "habukareta", japanese: "省かれた", english: "omitted", description: null },
      { romaji: "hane", japanese: "跳", english: "spring", description: null },
      { romaji: "harai", japanese: "払", english: "sweep", description: null },
      { romaji: "hiji", japanese: "肘", english: "elbow", description: null },
      { romaji: "hikikomi", japanese: "引込", english: "pulling in", description: null },
      { romaji: "hiza", japanese: "膝", english: "knee", description: null },
      { romaji: "ikkyo", japanese: "一教", english: "first group", description: null },
      { romaji: "ippon", japanese: "一本", english: "one full point", description: null },
      { romaji: "kakato", japanese: "踵", english: "heel", description: null },
      { romaji: "kani", japanese: "蟹", english: "crab", description: null },
      { romaji: "kansetsu", japanese: "関節", english: "joint-lock", description: null },
      { romaji: "kata", japanese: "肩", english: "shoulder", description: null },
      { romaji: "kata-ha", japanese: "片羽", english: "single wing", description: null },
      { romaji: "katame", japanese: "固", english: "grappling", description: null },
      { romaji: "kawazu", japanese: "河津", english: "one-leg entanglement", description: null },
      { romaji: "kibisu", japanese: "踵", english: "heel", description: null },
      { romaji: "ko", japanese: "小", english: "small", description: null },
      { romaji: "kobushi", japanese: "拳", english: "fist", description: null },
      { romaji: "komi", japanese: "込", english: "pulling", description: null },
      { romaji: "koshi", japanese: "腰", english: "hip", description: null },
      { romaji: "kuchiki", japanese: "朽木", english: "rotten wood", description: null },
      { romaji: "kuzure", japanese: "崩", english: "variation", description: null },
      { romaji: "kyusho", japanese: "急所", english: "vital spot", description: null },
      { romaji: "ma", japanese: "真", english: "rear", description: null },
      { romaji: "makikomi", japanese: "巻込", english: "wraparound", description: null },
      { romaji: "makura", japanese: "枕", english: "pillow", description: null },
      { romaji: "mata", japanese: "股", english: "thigh", description: null },
      { romaji: "mi", japanese: "身", english: "body", description: null },
      { romaji: "morote", japanese: "双手", english: "two hands", description: null },
      { romaji: "nage", japanese: "投げ", english: "throwing", description: null },
      { romaji: "nikyo", japanese: "二教", english: "second group", description: null },
      { romaji: "no", japanese: "の", english: "of", description: null },
      { romaji: "o", japanese: "大", english: "big", description: null },
      { romaji: "obi", japanese: "帯", english: "belt", description: null },
      { romaji: "okuri", japanese: "送", english: "sliding", description: null },
      { romaji: "okuriashi", japanese: "送足", english: "sliding foot", description: null },
      { romaji: "osaekomi", japanese: "抑込", english: "pinning", description: null },
      { romaji: "otoshi", japanese: "落", english: "drop", description: null },
      { romaji: "ryo", japanese: "両", english: "both", description: null },
      { romaji: "sankaku", japanese: "三角", english: "triangle", description: null },
      { romaji: "sankyo", japanese: "三教", english: "third group", description: null },
      { romaji: "sasae", japanese: "支", english: "support", description: null },
      { romaji: "seoi", japanese: "背負", english: "carry-on-the-back", description: null },
      { romaji: "shiho", japanese: "四方", english: "four directions", description: null },
      { romaji: "shime", japanese: "絞", english: "choke", description: null },
      { romaji: "shinmeisho", japanese: "新名称", english: "new designation", description: null },
      { romaji: "sode", japanese: "袖", english: "sleeve", description: null },
      { romaji: "soto", japanese: "外", english: "outer", description: null },
      { romaji: "sukashi", japanese: "透", english: "evasion", description: null },
      { romaji: "sukui", japanese: "掬", english: "scoop", description: null },
      { romaji: "sumi", japanese: "隅", english: "corner", description: null },
      { romaji: "sutemi", japanese: "捨身", english: "sacrifice", description: null },
      { romaji: "tachi", japanese: "立ち", english: "standing", description: null },
      { romaji: "tai", japanese: "体", english: "body", description: null },
      { romaji: "taoshi", japanese: "倒", english: "takedown", description: null },
      { romaji: "tate", japanese: "縦", english: "vertical", description: null },
      { romaji: "tawara", japanese: "俵", english: "rice bag", description: null },
      { romaji: "te", japanese: "手", english: "hand", description: null },
      { romaji: "tori", japanese: "取", english: "taking or grabbing", description: null },
      { romaji: "tsukkomi", japanese: "突込", english: "thrust", description: null },
      { romaji: "tsuri", japanese: "釣", english: "lifting", description: null },
      { romaji: "uchi", japanese: "内", english: "inside", description: null },
      { romaji: "ude", japanese: "腕", english: "arm", description: null },
      { romaji: "uki", japanese: "浮", english: "floating", description: null },
      { romaji: "ura", japanese: "裏", english: "reverse", description: null },
      { romaji: "ushiro", japanese: "後", english: "rear", description: null },
      { romaji: "waza", japanese: "技", english: "techniques", description: null },
      { romaji: "yama", japanese: "山", english: "mountain", description: null },
      { romaji: "yoko", japanese: "横", english: "side", description: null },
      { romaji: "yonkyo", japanese: "四教", english: "fourth group", description: null },
      { romaji: "yubisaki", japanese: "指先", english: "fingertip", description: null },
    ])
    .execute();
}

export async function down(db: Kysely<DB>) {
  await db.schema.dropTable("waza").execute();
  await db.schema.dropTable("categories").execute();
  await db.schema.dropTable("words").execute();
}
