export type MusicInfo = {
  artist: string;
  title: string;
  source: string;
  removed?: boolean;
};

export type Contest = {
  id: string;
  name: string;
  banner: string;
  musics: MusicInfo[];
};

export const contests: Contest[] = [
  {
    id: "remix01",
    name: "第一回スピードアップコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_01.jpg",
    musics: [
      {
        artist: "かめりあ(第１回目配信楽曲）",
        title: "サヨナラ・ヘヴン（かめりあ's NEKOMATAelectroRMX）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/11_ssayonara_heaven_kameria.mp3",
      },
      {
        artist: "IDEA+RHYTHM(第１回目配信楽曲）",
        title: ".59-BOOTH BOOST REMIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/12_59_idearhythm.mp3",
      },
      {
        artist: "N-driver(第１回目配信楽曲）",
        title: "Ignited Night burst",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/13_ignited_night_ndriver.mp3",
      },
      {
        artist: "D.F.K. Soundsystem(第２回目配信楽曲）",
        title: "GAMBOL(dfk SLC rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/14_gambol_dfk.mp3",
      },
      {
        artist: "kamome sano(第２回目配信楽曲）",
        title: "Ganymede kamome mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/15_ganymede_kamome.mp3",
      },
      {
        artist: "DJ Noriken(第２回目配信楽曲）",
        title: "SEED(DJ Noriken Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/16_seed_noriken.mp3",
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Clione Hommarju Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/17_clione_hommarju.mp3",
      },
    ],
  },
  {
    id: "original01",
    name: "BPM145-180限定! ハイテンション4つ打ちインストオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_01.jpg",
    musics: [
      {
        artist: "P*Light(第１回目配信楽曲）",
        title: "caramel ribbon",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/01_caramel_ribbon_plight.mp3",
      },
      {
        artist: "Daisuke Ohnuma(第１回目配信楽曲）",
        title: "香港功夫大旋風",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/02_hongkong_ohnuma.mp3",
      },
      {
        artist: "はるなば(第１回目配信楽曲）",
        title: "レトロスペクティビリー・メリーゴーランド",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/03_retrospec_harunaba.mp3",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "Space Diver Tama",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/04_space_diver_kuroma.mp3",
      },
      {
        artist: "Hommarju(第１回目配信楽曲）",
        title: "Onigo",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/05_onigo_hommarju.mp3",
      },
      {
        artist: "kanone(第１回目配信楽曲）",
        title: "SOUL EXPLOSION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/06_soul_explosion_kanone.mp3",
      },
      {
        artist: "Junk(第２回目配信楽曲）",
        title: "Fire Strike",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/07_fire_strike_junk.mp3",
      },
      {
        artist: "void(第２回目配信楽曲）",
        title: "World Vertex",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/08_world_vertex_void.mp3",
      },
      {
        artist: "RoughSketch(第２回目配信楽曲）",
        title: "Distorted Floor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/09_distorted_floor_roughsket.mp3",
      },
      {
        artist: "kamome sano(第２回目配信楽曲）",
        title: "freaky freak",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/10_freaky_freak_kamome.mp3",
      },
    ],
  },
  {
    id: "original02",
    name: "レイシステーマ曲 -アナタ色に染めてくだサイ",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_02.jpg",
    musics: [
      {
        artist: "源屋(第１回目配信楽曲）",
        title: "Ray",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/09ori_ray_minamotoya.mp3",
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Soundscape",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/10ori_soundscape_hommarju.mp3",
      },
    ],
  },
  {
    id: "remix02",
    name: "dj TAKA 楽曲REMIX 1ST STYLE",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_02.jpg",
    musics: [
      {
        artist: "Dustboxxxx(第１回目配信楽曲）",
        title: "Blue Rain Dustboxxxx RMX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/01remix_bluerain.mp3",
      },
      {
        artist: "borzy(第１回目配信楽曲）",
        title: "Abyss (sharp stepp remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/02remix_abyss_borzy.mp3",
      },
      {
        artist: "PHQUASE(第１回目配信楽曲）",
        title: "rainbow flyer -gratitude remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/03remix_rainbowflyer_phquase.mp3",
      },
      {
        artist: "C-Show(第１回目配信楽曲）",
        title: "Tomorrow Perfume (C-Show Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/04remix_tomorrow_perfume_cshow.mp3",
      },
      {
        artist: "t+pazolite(第２回目配信楽曲）",
        title: "Tomorrow Perfume (tpz Despair Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/05remix_tomorrow_perfume_tpazoli.mp3",
      },
      {
        artist: "Yu_Asahina(第２回目配信楽曲）",
        title: "Freeway Shuffle -More2 HAPPY Re-Mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/06remix_freeway_shuffle_yuasahina.mp3",
      },
      {
        artist: "Maozon(第２回目配信楽曲）",
        title: "pandora (Maozon Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/07remix_pandora_maozon.mp3",
      },
      {
        artist: "BlackY(第２回目配信楽曲）",
        title: "AA BlackY mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/08remix_aa_blacky.mp3",
      },
    ],
  },
  {
    id: "original05",
    name: "BEMANI Backstage テーマソングコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/BMBS_vtex_banner.gif",
    musics: [
      {
        artist: "ismK(11月8日配信楽曲）",
        title: "V.I.P.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/05/vip_ismk.mp3",
      },
    ],
  },
  {
    id: "original04",
    name: "GUMI限定！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_04.jpg",
    musics: [
      {
        artist: "じろうす",
        title: "灰色の空想をつかんで",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/01_gumi.mp3",
      },
      {
        artist: "さたな",
        title: "MANDARA(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/02_gumi.mp3",
      },
      {
        artist: "uno(IOSYS)",
        title: "センチメント(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/03_gumi.mp3",
      },
      {
        artist: "uno(IOSYS)",
        title: "Disagree Feelings",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/04_gumi.mp3",
      },
      {
        artist: "stereoberry",
        title: "ナツノメイロ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/05_gumi.mp3",
      },
      {
        artist: "shin",
        title: "true feeling？～本当の気持ち♪～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/06_gumi.mp3",
      },
      {
        artist: "飛鳥男",
        title: "夕焼のナパーム (SDVX Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/07_gumi.mp3",
        removed: true,
      },
      {
        artist: "Toma+o",
        title: "境界インサニティー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/08_gumi.mp3",
      },
      {
        artist: "Noriyuki",
        title: "BlueSky(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/09_gumi.mp3",
        removed: true,
      },
      {
        artist: "はるなば",
        title: "金縛りの逢を(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/10_gumi.mp3",
      },
    ],
  },
  {
    id: "original06",
    name: "KAC2012オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_06.jpg",
    musics: [
      {
        artist: "ginkiha(第１回目配信楽曲）",
        title: "EGG",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/01.mp3",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "大宇宙ステージ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/02.mp3",
      },
      {
        artist: "siromaru(第１回目配信楽曲）",
        title: "Absurd Gaff",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/03.mp3",
      },
      {
        artist: "nora2r(第１回目配信楽曲）",
        title: "VISION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/04.mp3",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "線香花火 SDVX edit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/05.mp3",
        removed: true,
      },
      {
        artist: "P*Light(第１回目配信楽曲）",
        title: "TRIGGER★HAPPY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/06.mp3",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "éclair au chocolat",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/07.mp3",
      },
      {
        artist: "C-Show(第２回目配信楽曲）",
        title: "PANIC HOLIC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/08.mp3",
      },
      {
        artist: "Yooh(第２回目配信楽曲）",
        title: "Dynasty",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/09.mp3",
      },
      {
        artist: "TeamGrimoire+あま猫(第２回目配信楽曲）",
        title: "croiX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/10.mp3",
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Gott",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/11.mp3",
      },
      {
        artist: "BlackY(KAC決勝楽曲）",
        title: "Max Burning!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/12.mp3",
      },
    ],
  },
  {
    id: "original07",
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_07.jpg",
    musics: [
      {
        artist: "Music by 源屋, Vocal by SOPHY",
        title: "Hello world!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/05.mp3",
      },
      {
        artist: "Music by Ryuwitty, Vocal by Kuroa*",
        title: "The world of sound",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/06.mp3",
      },
      {
        artist: "Music by MasKaleido, Vocal by ぁゅ",
        title: "STARDUST MERMAID",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/07.mp3",
      },
      {
        artist: "Music by 上村香月, Vocal by みゅい",
        title: "七色のウタ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/08.mp3",
      },
      {
        artist: "Music by 音遊人 -mu-jin-, Vocal by みかん汁",
        title: "ずっとそばにいさせてよね！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/09.mp3",
      },
      {
        artist: "でもたまに居場所とか見失うかぼちゃ",
        title: "僕たちは此処にいる",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/01.mp3",
      },
      {
        artist: "Music by コバヤシユウヤ, Vocal by Kuroa*",
        title: "Life is Beautiful",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/02.mp3",
      },
      {
        artist: "Music by PHQUASE, Vocal by ぁゅ",
        title: "draw!!!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/03.mp3",
      },
      {
        artist: "Music by Ayatsugu_Otowa, Vocal by みゅい",
        title: "超恋愛☆エクストリーム・ガール",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/04.mp3",
      },
    ],
  },
  {
    id: "remix03",
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_03.jpg",
    musics: [
      {
        artist: "BlackY(第8回目配信楽曲）",
        title: "DEADLOCK XXX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/8_01.mp3",
      },
      {
        artist: "Yooh(第8回目配信楽曲）",
        title: "snow storm -euphoria-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/8_02.mp3",
      },
      {
        artist: "提供(第7回目配信楽曲）",
        title: "Daily Lunch Special～DeliciousREMIX～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/7_01.mp3",
      },
      {
        artist: "Dustboxxxx(第7回目配信楽曲）",
        title: "Unicorn tail Dustboxxxx RMX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/7_02.mp3",
      },
      {
        artist: "Yu_Asahina(第6回目配信楽曲）",
        title: "音楽 -resolve-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/6_01.mp3",
      },
      {
        artist: "とろまる(第6回目配信楽曲）",
        title: "少年は空を辿る Prog Piano Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/6_02.mp3",
      },
      {
        artist: "源屋(第5回目配信楽曲）",
        title: "Sakura Reflection音頭 -盆踊Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/5_01.mp3",
      },
      {
        artist: "Hommarju(第5回目配信楽曲）",
        title: "Survival Games (Hommarju Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/5_02.mp3",
      },
      {
        artist: "kuroburger(第4回目配信楽曲）",
        title: "アルストロメリア（KURO-HACO Remix）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_01.mp3",
      },
      {
        artist: "Verdammt(第4回目配信楽曲）",
        title: "カラルの月 Verdammt Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_02.mp3",
      },
      {
        artist: "Daisuke Ohnuma(大福P)(第4回目配信楽曲）",
        title: "隅田川夏恋歌(I/O Angel mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_03.mp3",
      },
      {
        artist: "LeaF(第3回目配信楽曲）",
        title: "音楽 -壊音楽 mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/3_01.mp3",
      },
      {
        artist: "syzfonics(第2回目配信楽曲）",
        title: "Fly to Next World (syzfonics Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/2_01.mp3",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "concon(picom'n'bass rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/01.mp3",
      },
      {
        artist: "t+pazolite(第１回目配信楽曲）",
        title: "Daily Lunch Special (tpz Overcute Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/02.mp3",
      },
      {
        artist: "C-YA(第1回目配信楽曲）",
        title: "Mother Ship (C-YA MIX)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/03.mp3",
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "Sakura Reflection (P*Light Slayer Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/04.mp3",
      },
      {
        artist: "高井さんとuno(IOSYS)(第1回目配信楽曲）",
        title: "すーぱーアイドル☆ミツル子Remixちゃん",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/05.mp3",
      },
      {
        artist: "DJ Amane(第1回目配信楽曲）",
        title: "UNLIMITED FIRE (DJ Amane Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/06.mp3",
      },
    ],
  },
  {
    id: "original08",
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_08.jpg",
    musics: [
      {
        artist: "Lite Show Magic (t+pazolite vs C-Show)(第9回目配信楽曲）",
        title: "Crack Traxxxx",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_01.mp3",
      },
      {
        artist: "Hommarju vs P*Light(第9回目配信楽曲）",
        title: "Double Universe",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_02.mp3",
      },
      {
        artist: "ginkiha+kamome sano(第9回目配信楽曲）",
        title: "Dawn of Asia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_03.mp3",
      },
      {
        artist: "BlackY vs. Yooh(第9回目配信楽曲）",
        title: "XROSS INFECTION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_04.mp3",
      },
      {
        artist: "DecisionS(kanone + nora2r)(第9回目配信楽曲）",
        title: "INFINITY OVERDRIVE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_05.mp3",
      },
      {
        artist: "しけもく(第8回目配信楽曲）",
        title: "VERSUS!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_01.mp3",
      },
      {
        artist: 'RoughSketch + DD"ナカタ"Metal(第8回目配信楽曲）',
        title: "Booths of Fighters",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_02.mp3",
      },
      {
        artist: "xi(第8回目配信楽曲）",
        title: "Quietus Ray",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_03.mp3",
      },
      {
        artist: "cittan* feat. kalon.&core*mc(第7回目配信楽曲）",
        title: "L4TS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_01.mp3",
        removed: true,
      },
      {
        artist: "桜華(第7回目配信楽曲）",
        title: "デストロイマーチ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_02.mp3",
      },
      {
        artist: "Hommarju feat. 実谷なな(第7回目配信楽曲）",
        title: "Smile",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_03.mp3",
      },
      {
        artist: "MAD CHILD(第7回目配信楽曲）",
        title: "Voice 2 Voice",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_04.mp3",
      },
      {
        artist: "ヒゲドライバー(第6回目配信楽曲）",
        title: "HAPPY HEART BEAT",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_01.mp3",
      },
      {
        artist: "源屋 feat.Kuroa*(第6回目配信楽曲）",
        title: "華陽炎-Hana Kagerou-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_02.mp3",
      },
      {
        artist: "PROCYON KNIGHTS PROJECT(第6回目配信楽曲）",
        title: "獣性オーバーフロウ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_03.mp3",
      },
      {
        artist: "七誌(第5回目配信楽曲）",
        title: "サヨナラデイズ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_02.mp3",
      },
      {
        artist: "nmk feat.日向ももこ(第5回目配信楽曲）",
        title: "skyful of stars-SDVX EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_03.mp3",
      },
      {
        artist: "ke-ji(第5回目配信楽曲）",
        title: "Joyeuse",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_04.mp3",
      },
      {
        artist: "P*Light feat. mow*2(第5回目配信楽曲）",
        title: "OVERDRIVERS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_05.mp3",
      },
      {
        artist: "かねこちはる(第5回目配信楽曲）",
        title: "殯",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_06.mp3",
      },
      {
        artist: "Hommarju(第5回目配信楽曲）",
        title: "GEROL",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_07.mp3",
      },
      {
        artist: "orangentle / Yu_Asahina(第5回目配信楽曲）",
        title: "HAELEQUIN",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_08.mp3",
      },
      {
        artist: "臨界モスキー党(第5回目配信楽曲）",
        title: "悪いところがひとつもない！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_01.mp3",
      },
      {
        artist: "Team Grimoire(第4回目配信楽曲）",
        title: "C18H27NO3",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/4_01.mp3",
      },
      {
        artist: "wa.(第4回目配信楽曲）",
        title: "Lieselotte",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/4_02.mp3",
      },
      {
        artist: "Relect(第3回目配信楽曲）",
        title: "WobbleTangleFestival",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_01.mp3",
      },
      {
        artist: "DJ Amane(第3回目配信楽曲）",
        title: "Party Stream !!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_02.mp3",
      },
      {
        artist: "そよもぎ(第3回目配信楽曲）",
        title: "honey trap",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_03.mp3",
      },
      {
        artist: "かめりあ feat. ななひら(第3回目配信楽曲）",
        title: "ませまてぃっく♥ま+ま=まじっく！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_04.mp3",
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "En FIRE-G SOUL",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_05.mp3",
      },
      {
        artist: "millstones(第2回目配信楽曲）",
        title: "Tomato Leaf Breaks",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_01.mp3",
      },
      {
        artist: "Noriyuki(第2回目配信楽曲）",
        title: "届け！シューティングスター☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_02.mp3",
        removed: true,
      },
      {
        artist: "Hate vs Brilliance(第2回目配信楽曲）",
        title: "Qubism",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_03.mp3",
      },
      {
        artist: "Sanaas(第１回目配信楽曲）",
        title: "Next infection",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/01.mp3",
      },
      {
        artist: "たちのん(第１回目配信楽曲）",
        title: "DELETED MOTION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/02.mp3",
      },
      {
        artist: "LV.4(第１回目配信楽曲）",
        title: "青春☆してるかい？READY&LADY!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/03.mp3",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "Goodbye-bye Planet",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/04.mp3",
      },
      {
        artist: "C-YA(第１回目配信楽曲）",
        title: "dream control",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/05.mp3",
      },
      {
        artist: "上村香月(第１回目配信楽曲）",
        title: "自由のための不自由",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/06.mp3",
      },
      {
        artist: "lapix(第１回目配信楽曲）",
        title: "Foolish Hero",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/07.mp3",
      },
      {
        artist: "ノマ(第１回目配信楽曲）",
        title: "Brain Power",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/08.mp3",
        removed: true,
      },
      {
        artist: "ニシジマユーキ(第１回目配信楽曲）",
        title: "Diffused Reflection",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/09.mp3",
      },
      {
        artist: "ヒゲドライバー(第１回目配信楽曲）",
        title: "GIGI BABA",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/10.mp3",
      },
      {
        artist: "void (Mournfinale)(第１回目配信楽曲）",
        title: "Vindicator",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/11.mp3",
      },
      {
        artist: "ginkiha(第１回目配信楽曲）",
        title: "Starlight Express",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/12.mp3",
      },
      {
        artist: "削除(第１回目配信楽曲）",
        title: "Raptate",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/13.mp3",
      },
    ],
  },
  {
    id: "remix04",
    name: "東方紅魔郷リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_04.jpg",
    musics: [
      {
        artist: "すのうまん(第7回目配信楽曲）",
        title: "おお われら喜び讃うべし、主よ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/28.mp3",
      },
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: "Lunatic Rough Party!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/29.mp3",
      },
      {
        artist: "Yooh(第7回目配信楽曲）",
        title: "上海紅茶館 ～ Chinese Tea Orchid Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/30.mp3",
      },
      {
        artist: "はるなば(第7回目配信楽曲）",
        title: "U.N.オーエンは彼女なのか？haru_naba Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/27.mp3",
      },
      {
        artist: "Riz(第6回目配信楽曲）",
        title: "ルーネイトエルフ(Riz Mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/25.mp3",
      },
      {
        artist: "天音 (Rolling Contact)(第6回目配信楽曲）",
        title: "We Are The Scarlet (SDVX Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/26.mp3",
      },
      {
        artist: "void (Mournfinale)(第6回目配信楽曲）",
        title: "Devotion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/24.mp3",
      },
      {
        artist: "Shiron feat. Kuroa*(第5回目配信楽曲）",
        title: "やばいつよくてあたまいいあたいのうた",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/22.mp3",
      },
      {
        artist: "源屋 feat. 3L(第5回目配信楽曲）",
        title: "桜華月想-SDVX EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/23.mp3",
      },
      {
        artist: "t+pazolite(第5回目配信楽曲）",
        title: 'Electric "Sister" Bitch',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/21.mp3",
      },
      {
        artist: "Jerico(第4回目配信楽曲）",
        title: "Catadioptric",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/16.mp3",
      },
      {
        artist: "wobble magic library(第4回目配信楽曲）",
        title: "ワヴル魔法図書館",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/17.mp3",
      },
      {
        artist: "Illusion Sonic(第4回目配信楽曲）",
        title: "夢の空、約束の場所",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/18.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第4回目配信楽曲）",
        title: "赤より紅い夢-Aya2g Tech Dance Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/19.mp3",
      },
      {
        artist: "Tracy feat.ほたる(第4回目配信楽曲）",
        title: "Indomitable Spirit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/20.mp3",
      },
      {
        artist: "MUZIK SERVANT feat.CHERICa(第3回目配信楽曲）",
        title: "Over the Starlit sky",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/13.mp3",
      },
      {
        artist: "masty(第3回目配信楽曲）",
        title: "魔法少女達の百年祭（masty core remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/14.mp3",
      },
      {
        artist: "Hull feat.℃iel(第3回目配信楽曲）",
        title: "Darkness Pleasure",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/15.mp3",
      },
      {
        artist: "Hyuji(第2回目配信楽曲）",
        title: "U.N. Owen was her? (Hyuji Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/08.mp3",
      },
      {
        artist: "2ボス如きに負けるかぼちゃではなｙうわー(第2回目配信楽曲）",
        title: "愛くるしフール　-Not EASY!!-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/09.mp3",
      },
      {
        artist: "Shiron(第2回目配信楽曲）",
        title: "Lunartic Dial",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/10.mp3",
      },
      {
        artist: "くるぶっこちゃん(第2回目配信楽曲）",
        title: "赤より紅い夢 -lucid dream Mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/11.mp3",
      },
      {
        artist: "七条レタスグループ starring ココ(第2回目配信楽曲）",
        title: "太陽はやめて！ぼくらのスカーレット警察",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/12.mp3",
      },
      {
        artist: "C-Show(第1回目配信楽曲）",
        title: "U.N.オーエンは彼女なのか?(TO-HOlic mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/01.mp3",
      },
      {
        artist: "さわわ(第1回目配信楽曲）",
        title: "Cirno Break",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/02.mp3",
      },
      {
        artist: "Arch(第1回目配信楽曲）",
        title: "Silver Impact",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/03.mp3",
      },
      {
        artist: "DOUBLE HELIX【たちのん&零-zero-】(第1回目配信楽曲）",
        title: "Venona",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/04.mp3",
      },
      {
        artist: "uno(IOSYS)(第1回目配信楽曲）",
        title: "#Fairy_dancing_in_lake",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/05.mp3",
      },
      {
        artist: "signum/ii feat. irony(第1回目配信楽曲）",
        title: "INVITATION SiGN -SDVX Version-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/06.mp3",
        removed: true,
      },
      {
        artist: "ねこみりん feat.みゆ(第1回目配信楽曲）",
        title: "モモンが門番ばんっ☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/07.mp3",
      },
    ],
  },
  {
    id: "original10",
    name: "夏だ！休みだ！自由研究オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_10.jpg",
    musics: [
      {
        artist: "Diceros Bicornis(第7回目配信楽曲）",
        title: "Innocent Tempest",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_01.mp3",
      },
      {
        artist: "Kaoru feat.FG75(第7回目配信楽曲）",
        title: "ボルテ体操第一",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_02.mp3",
      },
      {
        artist: "かぼちゃ「黒幕はあやつぐ」と供述しており(第7回目配信楽曲）",
        title: "侵蝕コード：666　-今日ちょっと指（略-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_03.mp3",
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "crazy cinema story",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_01.mp3",
      },
      {
        artist: "上村香月(第6回目配信楽曲）",
        title: "神となり彼が見た境界線",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_02.mp3",
      },
      {
        artist: "yozaquar feat.ぁゅ(第6回目配信楽曲）",
        title: "嘘と接吻",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_03.mp3",
      },
      {
        artist: "xi(第6回目配信楽曲）",
        title: "Fiat Lux",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_04.mp3",
      },
      {
        artist: "8284 feat. みかん汁(第6回目配信楽曲）",
        title: "ゴーイング マイ ウェイ！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_05.mp3",
        removed: true,
      },
      {
        artist: "かめりあ feat. ななひら(第5回目配信楽曲）",
        title: 'コンベア速度Max!? しゃいにん☆廻転ズシ"Sushi&Peace"',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_01.mp3",
      },
      {
        artist: "Ym1024 feat. lamie*(第5回目配信楽曲）",
        title: "Future MUSiC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_02.mp3",
      },
      {
        artist: "こふ(第5回目配信楽曲）",
        title: "snow motion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_03.mp3",
      },
      {
        artist: "ke-ji(第5回目配信楽曲）",
        title: "絢爛創世絵巻物",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_04.mp3",
      },
      {
        artist: "XIzE(第4回目配信楽曲）",
        title: "will o' the wisp",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_01.mp3",
      },
      {
        artist: "かねこちはる(第4回目配信楽曲）",
        title: "雪女",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_02.mp3",
      },
      {
        artist: "syzfonics(第4回目配信楽曲）",
        title: "Profession",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_03.mp3",
      },
      {
        artist: "日本楽音ノイズ協会(第4回目配信楽曲）",
        title: "イゴモヨス＝オムルのテーマによるブヨブヨ・スケッチの試み",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_04.mp3",
      },
      {
        artist: "Project Mayhem(第3回目配信楽曲）",
        title: "Decretum",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_01.mp3",
      },
      {
        artist: "全日本スッポコニャーゴ親衛隊(第3回目配信楽曲）",
        title: "ムーニャポヨポヨスッポコニャーゴ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_02.mp3",
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "Dignity",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_03.mp3",
      },
      {
        artist: "Sta(第2回目配信楽曲）",
        title: "Shadows in the Light",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_01.mp3",
      },
      {
        artist: "Verdammt(第2回目配信楽曲）",
        title: "ゆうしゃのなつやすみ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_02.mp3",
      },
      {
        artist: "ETIA.(第2回目配信楽曲）",
        title: "Demetel",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_03.mp3",
      },
      {
        artist: "Noah(第2回目配信楽曲）",
        title: "トラウィスカルパンテクートリ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_04.mp3",
      },
      {
        artist: "ぺのれり(第1回目配信楽曲）",
        title: "- dirty rouge -",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_01.mp3",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "Paradoxy",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_02.mp3",
      },
      {
        artist: "パイタン(第1回目配信楽曲）",
        title: "LEMON SUMMER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_03.mp3",
      },
      {
        artist: "Hommarju(第1回目配信楽曲）",
        title: "Rings of Rainbow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_04.mp3",
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "BUBBLE RAVER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_05.mp3",
      },
    ],
  },
  {
    id: "original09",
    name: "ZOLA PROJECTオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_09.jpg",
    musics: [
      {
        artist: "かめりあ",
        title: "FLYING OUT TO THE SKY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_01.mp3",
      },
      {
        artist: "u-z",
        title: "十六夜桜-Zakura-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_02.mp3",
      },
      {
        artist: "unatra / カラクサ",
        title: "群青硝子のスピカ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_03.mp3",
      },
      {
        artist: "Ayatsugu_Otowa",
        title: "超爽快☆パッショネイト・フィーバー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_04.mp3",
      },
      {
        artist: "CHRIS (Sound Libero)",
        title: "Arcadia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_05.mp3",
      },
    ],
  },
  {
    id: "original11",
    name: "KAC2013オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_11.jpg",
    musics: [
      {
        artist: "黒魔(第4回目配信楽曲）",
        title: "Black Emperor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_01.mp3",
      },
      {
        artist: "BlackY(第4回目配信楽曲）",
        title: "Harpuia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_02.mp3",
      },
      {
        artist: "you(第4回目配信楽曲）",
        title: "Hoshizora　Illumination",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_03.mp3",
      },
      {
        artist: "MarcheИ(第4回目配信楽曲）",
        title: "odds and ends",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_04.mp3",
      },
      {
        artist: "ふる(第4回目配信楽曲）",
        title: "はなむけ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_05.mp3",
      },
      {
        artist: "An(第3回目配信楽曲）",
        title: "LittleGameStar",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_01.mp3",
      },
      {
        artist: "ginkiha(第3回目配信楽曲）",
        title: "EOS -INFINITE EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_02.mp3",
      },
      {
        artist: "TAKU1175(第3回目配信楽曲）",
        title: "ウバワレ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_03.mp3",
      },
      {
        artist: "ZOGRAPHOS (Yu_Asahina+Yamajet)(第3回目配信楽曲）",
        title: "Verse IV",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_04.mp3",
      },
      {
        artist: "cosMo＠暴走P(第2回目配信楽曲）",
        title: "For UltraPlayers",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_01.mp3",
      },
      {
        artist: "かめりあ(第2回目配信楽曲）",
        title: "Bangin' Burst",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_02.mp3",
      },
      {
        artist: "BlackYooh vs. siromaru(第2回目配信楽曲）",
        title: "BLACK or WHITE?",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_06.mp3",
      },
      {
        artist: "Hommarju(第2回目配信楽曲）",
        title: "Hellfire",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_04.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "超越してしまった彼女と其を生み落した理由",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_05.mp3",
      },
      {
        artist: "ke-ji(第2回目配信楽曲）",
        title: "Last Concerto",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_03.mp3",
      },
      {
        artist: "ETIA.(第1回目配信楽曲）",
        title: "Last Battalion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_01.mp3",
      },
      {
        artist: "cold kiss(第1回目配信楽曲）",
        title: "TrailBlazer",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_02.mp3",
      },
      {
        artist: "kamome sano(第1回目配信楽曲）",
        title: "choux à la crème",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_03.mp3",
      },
      {
        artist: "uma(第1回目配信楽曲）",
        title: "take a step forward",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_04.mp3",
      },
      {
        artist: "削除(第1回目配信楽曲）",
        title: "Erlung",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_05.mp3",
      },
    ],
  },
  {
    id: "original12",
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_12.jpg",
    musics: [
      {
        artist: "Music by BlackY, Vocal by ぁゅ(第3回目配信楽曲）",
        title: "SPARKLING FANTASY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_01.mp3",
      },
      {
        artist: "Music by Hommarju, Vocal by かぼちゃ(第3回目配信楽曲）",
        title: "mon$tage",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_02.mp3",
      },
      {
        artist: "Music by アサヒナユウ, Vocal by みかん汁(第3回目配信楽曲）",
        title: "カレクレンマ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_03.mp3",
      },
      {
        artist: "Music by 上村香月, Vocal by Kuroa*(第2回目配信楽曲）",
        title: "Unlimited Field",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_01.mp3",
      },
      {
        artist: "Music by nmk/佐原誠&kei_iwata, Vocal by SOPHY(第2回目配信楽曲）",
        title: "冬に桜が咲くようなキセキ。",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_02.mp3",
      },
      {
        artist: "Music by Hommarju, Vocal by ぁゅ(第2回目配信楽曲）",
        title: "REPLiCA",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_03.mp3",
      },
      {
        artist: "Music by ismK, Vocal by Kuroa*(第1回目配信楽曲）",
        title: "Liar World Monologue",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_01.mp3",
      },
      {
        artist: "Music by 沙野カモメ, Vocal by SOPHY(第1回目配信楽曲）",
        title: "流れ星と君の歌",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_02.mp3",
      },
      {
        artist: "Music by akira asano feat.Tia, Vocal by みゅい(第1回目配信楽曲）",
        title: "ぱられる",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_03.mp3",
      },
    ],
  },
  {
    id: "remix05",
    name: "東方輝針城リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_05.jpg",
    musics: [
      {
        artist: "unatra(第3回目配信楽曲）",
        title: "Attack on Dwarf",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_01.mp3",
      },
      {
        artist: "かめりあ(第3回目配信楽曲）",
        title: "werewolf howls.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_02.mp3",
      },
      {
        artist: "you(第3回目配信楽曲）",
        title: "Mist Tek",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_03.mp3",
      },
      {
        artist: "0kash(第3回目配信楽曲）",
        title: "Little princess has no identity.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_04.mp3",
      },
      {
        artist: "Y*Quartet project(第3回目配信楽曲）",
        title: "Pristine Bigband",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_05.mp3",
      },
      {
        artist: "uma(第2回目配信楽曲）",
        title: "wander+wonder+wand",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_01.mp3",
      },
      {
        artist: "albel.(第2回目配信楽曲）",
        title: "柳の下のデュラハン hard chaos mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_02.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "幻想浄瑠璃-Aya2g Tech Dance Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_03.mp3",
      },
      {
        artist: "Shiron(第2回目配信楽曲）",
        title: "Wave of Craze",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_04.mp3",
      },
      {
        artist: "Tracy feat.築山さえ(第2回目配信楽曲）",
        title: "Flying!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_05.mp3",
      },
      {
        artist: "QURELESS(第1回目配信楽曲）",
        title: "KiLLeR MeRMaiD",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_01.mp3",
      },
      {
        artist: "MUZIK SERVANT feat.CHERICa(第1回目配信楽曲）",
        title: "REVERSE LIMITED!(SDVX  Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_02.mp3",
      },
      {
        artist: "dawn-system(第1回目配信楽曲）",
        title: "進め！イッスン軍団 -Rebellion of the Dwarfs-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_03.mp3",
        removed: true,
      },
      {
        artist: "ZYTOKINE feat. itori(第1回目配信楽曲）",
        title: "WAVE WAVE WAVE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_04.mp3",
      },
      {
        artist: "LUNA(第1回目配信楽曲）",
        title: "Mist In Hell",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_05.mp3",
      },
      {
        artist: "Jerico(第1回目配信楽曲）",
        title: "Frantic Wolf",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_06.mp3",
      },
    ],
  },
  {
    id: "original13",
    name: "GUMI限定！オリジナル楽曲コンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_13.jpg",
    musics: [
      {
        artist: "C-YA(第2回目配信楽曲）",
        title: "shiny rainbow flower",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_01.mp3",
      },
      {
        artist: "たちのん(第2回目配信楽曲）",
        title: "始まりへと続く帰り道",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_02.mp3",
      },
      {
        artist: "nana(Sevencolors) (第2回目配信楽曲）",
        title: "I love you even now",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_03.mp3",
      },
      {
        artist: "TAKU1175(第2回目配信楽曲）",
        title: "VILE CAT",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_04.mp3",
      },
      {
        artist: "FILTER SYSTEM(第2回目配信楽曲）",
        title: "アルテミス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_05.mp3",
      },
      {
        artist: "上村香月(第2回目配信楽曲）",
        title: "further the future",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_06.mp3",
      },
      {
        artist: "Salk2d(第2回目配信楽曲）",
        title: "断片Story",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_07.mp3",
      },
      {
        artist: "winddrums(第1回目配信楽曲）",
        title: "City Edge",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_01.mp3",
      },
      {
        artist: "u-z(第1回目配信楽曲）",
        title: "憂恋☆アクティベーション",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_02.mp3",
      },
      {
        artist: "流星トラップボーイズ(第1回目配信楽曲）",
        title: "ドキドキ☆流星トラップガール!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_03.mp3",
      },
      {
        artist: "colate(第1回目配信楽曲）",
        title: "Strobe♡Girl",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_04.mp3",
        removed: true,
      },
      {
        artist: "Spacelectro(第1回目配信楽曲）",
        title: "second spring storm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_05.mp3",
      },
      {
        artist: "ぺのれり(第1回目配信楽曲）",
        title: "Baby Sherry",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_06.mp3",
      },
    ],
  },
  {
    id: "remix06",
    name: "kors k楽曲リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_06.jpg",
    musics: [
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: 'gigadelic (かめりあ\'s "The TERA" RMX)',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_01.mp3",
      },
      {
        artist: "daph(第7回目配信楽曲）",
        title: "Monkey Business(Band Edit.)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_02.mp3",
      },
      {
        artist: "飛翔鳶交響楽団(第7回目配信楽曲）",
        title: "The Wind of Gold(飛翔鳶 Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_03.mp3",
      },
      {
        artist: "kamome sano(第7回目配信楽曲）",
        title: "Wuv U(pico/ustic rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_04.mp3",
      },
      {
        artist: "LeaF(第6回目配信楽曲）",
        title: "Monkey Business -Satire mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_01.mp3",
      },
      {
        artist: "takdrive(第6回目配信楽曲）",
        title: "Our Faith (takdrive remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_02.mp3",
      },
      {
        artist: "nana(Sevencolors)(第6回目配信楽曲）",
        title: "Virtual Sunrise(nana's Festival EDM Remix) feat. Kanae Asaba",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_03.mp3",
      },
      {
        artist: "millstones(第5回目配信楽曲）",
        title: "FIRE FIREは電気スウィングの夢を見るか？",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/5_01.mp3",
      },
      {
        artist: "ねこみりん feat.えみゅう。×みゆ×小宮真央(第5回目配信楽曲）",
        title: "Wuv U (Colorful QT3 nekomix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/5_02.mp3",
      },
      {
        artist: "Kobaryo(第4回目配信楽曲）",
        title: "Pure Evil (Kobaryo FTN-Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/4_01.mp3",
      },
      {
        artist: "P*Light(第4回目配信楽曲）",
        title: "The Sampling Paradise (P*Light Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/4_02.mp3",
      },
      {
        artist: "Kazmasa(第3回目配信楽曲）",
        title: "FIRE FIRE(Kazmasa Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_01.mp3",
      },
      {
        artist: "ikaruga_nex(第3回目配信楽曲）",
        title: "gigadelic(m3rkAb4# R3m!x)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_02.mp3",
      },
      {
        artist: "sky_delta(第3回目配信楽曲）",
        title: "The Wind of Gold -HΔPPY MIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_03.mp3",
      },
      {
        artist: "MYTK(第3回目配信楽曲）",
        title: "Virtual Sunrise (MYTK Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_04.mp3",
      },
      {
        artist: "DOUBLE HELIX(第2回目配信楽曲）",
        title: "Our Faith (Faithful MTL Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_01.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "Pure Evil-Aya2g Drm'n Tech Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_02.mp3",
      },
      {
        artist: "N-Driver(第2回目配信楽曲）",
        title: "The Sampling Paradise (N-Driver Style)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_03.mp3",
      },
      {
        artist: "xac(第2回目配信楽曲）",
        title: "Virtual Sunrise (xac remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_04.mp3",
      },
      {
        artist: "Yooh(第1回目配信楽曲）",
        title: "FIRE FIRE -DARK BLAZE REMIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_01.mp3",
      },
      {
        artist: "Hate(第1回目配信楽曲）",
        title: "gigadelic -stance xxxx-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_02.mp3",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "Monkey Business (lapix Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_03.mp3",
      },
      {
        artist: "borzy(第1回目配信楽曲）",
        title: "The Wind of Gold (folkcore remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_04.mp3",
      },
      {
        artist: "Yu_Asahina(第1回目配信楽曲）",
        title: "Wuv U -More2 HAPPY Re-Mix Special-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_05.mp3",
      },
    ],
  },
  {
    id: "original14",
    name: "第一回ボルテキャラテーマ曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_14.jpg",
    musics: [
      {
        artist: "Yooh(第9回目配信楽曲）",
        title: "Seraphim",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_01.mp3",
      },
      {
        artist: "VALLEYSTONE feat. 紫崎 雪(第9回目配信楽曲）",
        title: "君がいる場所へ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_02.mp3",
      },
      {
        artist: "XIzE(第9回目配信楽曲）",
        title: "twilight signal",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_03.mp3",
      },
      {
        artist: "BlackY(第9回目配信楽曲）",
        title: "CUTIE☆EX-DREAM",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_04.mp3",
      },
      {
        artist: "DJ YASETAKA(第9回目配信楽曲）",
        title: "The setting sun",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_05.mp3",
      },
      {
        artist: "ぺのれり(第8回目配信楽曲）",
        title: "ちぇいす いん ざ さんしゃいん！！！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/8_01.mp3",
      },
      {
        artist: "KO3(第7回目配信楽曲）",
        title: "My name is TSUMABUKI",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_01.mp3",
      },
      {
        artist: "RoughSketch vs MAD CHILD(第7回目配信楽曲）",
        title: "Warriors Aboot",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_02.mp3",
      },
      {
        artist: "かねこちはる(第7回目配信楽曲）",
        title: "紅の剣舞",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_03.mp3",
      },
      {
        artist: "とろまる(第7回目配信楽曲）",
        title: "Sourire",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_04.mp3",
      },
      {
        artist: "ETIA.(第7回目配信楽曲）",
        title: "Firestorm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_05.mp3",
      },
      {
        artist: "polysha+tcheb(第6回目配信楽曲）",
        title: "Twin Blaster",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_01.mp3",
      },
      {
        artist: "かねこちはる(第6回目配信楽曲）",
        title: "INF-B《L-aste-R》",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_02.mp3",
      },
      {
        artist: "20文字と言う字数制限に挑み続けるかぼち(第6回目配信楽曲）",
        title: "Princessどうかお願い!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_03.mp3",
      },
      {
        artist: "IckPo(第5回目配信楽曲）",
        title: "Happy Sensation",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/5_01.mp3",
      },
      {
        artist: "こふ(第5回目配信楽曲）",
        title: "Milkyway - memorable - ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/5_02.mp3",
      },
      {
        artist: "udouddo(第4回目配信楽曲）",
        title: "Poison Blood",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/4_01.mp3",
      },
      {
        artist: "Hommarju(第4回目配信楽曲）",
        title: "AYAKASHI",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/4_02.mp3",
      },
      {
        artist: "とろまる(第3回目配信楽曲）",
        title: "Hustle Beat!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_01.mp3",
      },
      {
        artist: "xi underground(第3回目配信楽曲）",
        title: "TU-MA-MI△ALL-NIGHTER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_02.mp3",
      },
      {
        artist: "さわわ(第3回目配信楽曲）",
        title: "きらきらタイム☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_03.mp3",
      },
      {
        artist: "uno feat.ちよこ(IOSYS)(第3回目配信楽曲）",
        title: "Twin Rocket",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_04.mp3",
      },
      {
        artist: "8284 feat. 榎楠(第3回目配信楽曲）",
        title: "感情Xerography",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_05.mp3",
      },
      {
        artist: "みゅー feat. ゆいこんぬ(第2回目配信楽曲）",
        title: "Find the Answer",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_01.mp3",
      },
      {
        artist: "Nizikawa(第2回目配信楽曲）",
        title: "F.K.S.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_02.mp3",
      },
      {
        artist: "Soleily(第2回目配信楽曲）",
        title: "Violet Soul",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_03.mp3",
      },
      {
        artist: "梅干茶漬け(第2回目配信楽曲）",
        title: "トリコロール・ダイアリー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_04.mp3",
      },
      {
        artist: "かねこちはる feat. 紫崎 雪(第1回目配信楽曲）",
        title: "はわわｗ！な展開っ！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_01.mp3",
      },
      {
        artist: "モリモリあつし(第1回目配信楽曲）",
        title: "Appliqué",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_05.mp3",
      },
      {
        artist: "xi(第1回目配信楽曲）",
        title: "Wish upon Twin Stars",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_03.mp3",
      },
      {
        artist: "Shiron(第1回目配信楽曲）",
        title: "CODE -CRiMSON-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_04.mp3",
      },
      {
        artist: "Hidra-Xjeil(第1回目配信楽曲）",
        title: "Growth Memories",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_02.mp3",
      },
    ],
  },
  {
    id: "original15",
    name: "SOUND VOLTEX VERSION 3 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_15.jpg",
    musics: [
      {
        artist: "Hirayasu Matsudo(第15回目配信楽曲）",
        title: "Pet Peeve",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/15_01.mp3",
      },
      {
        artist: "かねこちはる + はぁち + 飛鳥男(第15回目配信楽曲）",
        title: "ドゥンガドゥンガ狂詩曲",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/15_02.mp3",
      },
      {
        artist: "Orange Vox+ ft.konomi*(第14回目配信楽曲）",
        title: "Le ××××",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/14_01.mp3",
      },
      {
        artist: "borzy & 結月そら(第13回目配信楽曲）",
        title: "零れる夢のレミニセンス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/13_01.mp3",
      },
      {
        artist: "かめりあ feat. ななひら(第13回目配信楽曲）",
        title: "じゅーじゅー♥焼肉の火からフェニックス！？～再誕の†炭火焼き～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/13_02.mp3",
      },
      {
        artist: "u-z(第12回目配信楽曲）",
        title: "Vampire's Territory",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_01.mp3",
      },
      {
        artist: "Hommarju(第12回目配信楽曲）",
        title: "Shanghai Wu Long ～上海舞龍～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_02.mp3",
      },
      {
        artist: "かゆき＆yoa feat.もちこまめ(第12回目配信楽曲）",
        title: "ハナビラ:リンクス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_03.mp3",
      },
      {
        artist: "ke-ji(第11回目配信楽曲）",
        title: "6弦とピアノのためのエチュード op.4",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/11_01.mp3",
      },
      {
        artist: "U-ske feat.ななひら(第11回目配信楽曲）",
        title: "ギャラクシィ・トラベラー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/11_02.mp3",
      },
      {
        artist: "Riz vs. Shiron(第10回目配信楽曲）",
        title: "veRtrageS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/10_01.mp3",
      },
      {
        artist: "Antinomic Paradox(第9回目配信楽曲）",
        title: "UnivEarth",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_01.mp3",
      },
      {
        artist: "モリモリあつし+Verdammt(第9回目配信楽曲）",
        title: "Le Fruit Défendu",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_02.mp3",
      },
      {
        artist: "COOKIE MONSTERS(winddrums+黒魔)(第9回目配信楽曲）",
        title: "Witch in Sweetsland",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_03.mp3",
      },
      {
        artist: "kanone vs. Yooh(第9回目配信楽曲）",
        title: "Cold Inflation",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_04.mp3",
      },
      {
        artist: "ZYTOKINE feat. itori(第8回目配信楽曲）",
        title: "BOUNCE BOUNCE BOUNCE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/8_01.mp3",
      },
      {
        artist: "Larca(第8回目配信楽曲）",
        title: "ネメシス SDVX Edit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/8_02.mp3",
      },
      {
        artist: "uno feat.ちよこ(IOSYS)(第7回目配信楽曲）",
        title: "disco KAWAii",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_01.mp3",
      },
      {
        artist: "10calorie(第7回目配信楽曲）",
        title: "New Days",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_02.mp3",
      },
      {
        artist: "P*Light(第7回目配信楽曲）",
        title: "Innocent Floor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_03.mp3",
      },
      {
        artist: "VALLEYSTONE feat. 紫崎 雪(第6回目配信楽曲）",
        title: "Lovesick Lovetune",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_01.mp3",
      },
      {
        artist: "Salk2d(第6回目配信楽曲）",
        title: "One & Only",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_02.mp3",
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "Pon-Pon-Pompoko Dai-Sen-Saw!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_03.mp3",
      },
      {
        artist: "かねこちはる feat. はぁち(第6回目配信楽曲）",
        title: "好きトキメキとキス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_04.mp3",
      },
      {
        artist: "餡若feat.みゅい(第6回目配信楽曲）",
        title: "時計仕掛けのメリーゴーランド",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_05.mp3",
      },
      {
        artist: "saminun(第5回目配信楽曲）",
        title: "The willow and snow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_01.mp3",
      },
      {
        artist: "lapix(第5回目配信楽曲）",
        title: "Discloze",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_02.mp3",
      },
      {
        artist: "ニシジマユーキ(第5回目配信楽曲）",
        title: "ON FIRE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_03.mp3",
      },
      {
        artist: "ginkiha(第4回目配信楽曲）",
        title: "Borealis",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/4_01.mp3",
      },
      {
        artist: "kamome sano(第4回目配信楽曲）",
        title: "tricky trick",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/4_02.mp3",
      },
      {
        artist: "そよもぎ(第3回目配信楽曲）",
        title: "瞬間ドリップ♪秘蜜のケーキセット",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/3_01.mp3",
      },
      {
        artist: "colate(第3回目配信楽曲）",
        title: "macaron",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/3_02.mp3",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Scarlet Pinheel",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_01.mp3",
      },
      {
        artist: "パピ子りんft.ビタミンな兄貴♂＆ゆずり(第2回目配信楽曲）",
        title: "恋愛方程式",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_02.mp3",
      },
      {
        artist: "源屋(第2回目配信楽曲）",
        title: "Prelude-Hereafter-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_03.mp3",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "False Cross",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_04.mp3",
      },
      {
        artist: "Gowrock(第1回目配信楽曲）",
        title: "bloom",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_01.mp3",
      },
      {
        artist: "ぬゆり(第1回目配信楽曲）",
        title: "ぼくらしかしらない",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_02.mp3",
      },
      {
        artist: "Saiph(第1回目配信楽曲）",
        title: "Hyper☆Chipspace",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_03.mp3",
      },
      {
        artist: "O2i3(第1回目配信楽曲）",
        title: "Belly Flopper",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_04.mp3",
      },
      {
        artist: "影虎。(第1回目配信楽曲）",
        title: "Never Regret Anything",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_05.mp3",
      },
      {
        artist: "negi(第1回目配信楽曲）",
        title: "Liming Light",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_06.mp3",
      },
      {
        artist: "RedMuffleR(第1回目配信楽曲）",
        title: "Rubeus",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_07.mp3",
      },
    ],
  },
  {
    id: "original16",
    name: "The 4th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_16.jpg",
    musics: [
      {
        artist: "たちのん(第8回目配信楽曲）",
        title: "Aliquam",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_01.mp3",
      },
      {
        artist: "ぬゆり(第8回目配信楽曲）",
        title: "Stleq",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_02.mp3",
      },
      {
        artist: "u-z(第8回目配信楽曲）",
        title: "冥天・ヘメロカリス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_03.mp3",
      },
      {
        artist: "BlackYooh vs. siromaru(第8回目配信楽曲）",
        title: "XHAOS JUDGE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_04.mp3",
      },
      {
        artist: "unatra(第8回目配信楽曲）",
        title: "Nofram",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_05.mp3",
      },
      {
        artist: "syzfonics(第8回目配信楽曲）",
        title: "Never Ending",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_06.mp3",
      },
      {
        artist: "影翔鼓舞(第7回目配信楽曲）",
        title: "Oriental Blossom",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_01.mp3",
      },
      {
        artist: "lapix(第7回目配信楽曲）",
        title: "Backflow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_02.mp3",
      },
      {
        artist: "JourneyCat(第7回目配信楽曲）",
        title: "Beyond the Sandstorm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_03.mp3",
      },
      {
        artist: "提供(第7回目配信楽曲）",
        title: "Asian Chip City",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_04.mp3",
      },
      {
        artist: "uma vs. モリモリあつし(第7回目配信楽曲）",
        title: "Pieces of a Dream",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_05.mp3",
      },
      {
        artist: "FAKE TYPE.(第6回目配信楽曲）",
        title: "FAKE STYLE II",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_01.mp3",
      },
      {
        artist: "Verdammt(第6回目配信楽曲）",
        title: "continew",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_02.mp3",
      },
      {
        artist: "s-don as Iriss(第6回目配信楽曲）",
        title: "Blacksphere",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_03.mp3",
      },
      {
        artist: "you(第5回目配信楽曲）",
        title: "Shiawase Transmission",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_01.mp3",
      },
      {
        artist: "Shiron＋こふ×モリモリあつしと提供でお送りします。(第5回目配信楽曲）",
        title: "Lucky*Clover",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_02.mp3",
      },
      {
        artist: "kamome sano(第5回目配信楽曲）",
        title: "crêpe suzette",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_03.mp3",
      },
      {
        artist: "cosMo＠暴走P(第4回目配信楽曲）",
        title: "eternita",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/4_01.mp3",
      },
      {
        artist: "Getty vs. DJ DiA(第3回目配信楽曲）",
        title: "Ops:Code-Rapture-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/3_01.mp3",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Everlasting Message",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_01.mp3",
      },
      {
        artist: "黒魔(第2回目配信楽曲）",
        title: "Sayonara Planet Wars",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_02.mp3",
      },
      {
        artist: "ke-ji(第2回目配信楽曲）",
        title: "Chant du Cygne",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_03.mp3",
      },
      {
        artist: "かめりあ feat. ななひら(第2回目配信楽曲）",
        title: "混乱少女♥そふらんちゃん!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_04.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "到達してしまった僕らと夢と希望の最之果",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_05.mp3",
      },
      {
        artist: "C-Show(第1回目配信楽曲）",
        title: "Invitation from Mr.C",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_01.mp3",
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "2 MINUTES FIGHTERS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_02.mp3",
      },
      {
        artist: "Yooh(第1回目配信楽曲）",
        title: "LegenD.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_03.mp3",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "World's end",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_04.mp3",
      },
    ],
  },
  {
    id: "remix07",
    name: "東方妖々夢リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_07.jpg",
    musics: [
      {
        artist: "ふりらい feat. あにょ(第8回目配信楽曲）",
        title: "アルティメットトゥルース -Phantasm-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_01.mp3",
      },
      {
        artist: "梅干茶漬け(第8回目配信楽曲）",
        title: "ジャンピン・スマイル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_02.mp3",
      },
      {
        artist: "uma vs. モリモリあつし(第8回目配信楽曲）",
        title: "東方妖々夢 ULTIMATE MEDLEY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_03.mp3",
      },
      {
        artist: "まぁ言うてかぼちゃの色も橙だし多分大丈夫(第8回目配信楽曲）",
        title: "lost chain",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_04.mp3",
      },
      {
        artist: "Noah(第8回目配信楽曲）",
        title: "Clash of swords",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_05.mp3",
      },
      {
        artist: "tanso a.k.a. モリヤマサト(第8回目配信楽曲）",
        title: "Issen",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_06.mp3",
      },
      {
        artist: "Tomoya feat. 黒崎朔夜(第8回目配信楽曲）",
        title: "Phantom dinning tonight!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_07.mp3",
      },
      {
        artist: "C-CLAYS feat.小峠舞(第8回目配信楽曲）",
        title: "Spice Road",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_08.mp3",
      },
      {
        artist: "nmk vs b-UMB feat.青砥 雫 a.k.a. ℃iel(第7回目配信楽曲）",
        title: "Shirogane",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_01.mp3",
      },
      {
        artist: "源屋 with Kuroa*(第7回目配信楽曲）",
        title: "You Know-SDVX EDIT-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_02.mp3",
      },
      {
        artist: "黄泉路テヂーモ×dawn-system(第7回目配信楽曲）",
        title: "そして紫の幻想曲は全てを受け入れる",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_03.mp3",
      },
      {
        artist: "unatra(第7回目配信楽曲）",
        title: "Fabula Nova",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_04.mp3",
      },
      {
        artist: "上村香月(第7回目配信楽曲）",
        title: "MAGATORO",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_05.mp3",
      },
      {
        artist: "Shiron(第6回目配信楽曲）",
        title: "Deadly Dolly Dance",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_01.mp3",
      },
      {
        artist: "Cororo(第6回目配信楽曲）",
        title: "ancient garden",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_02.mp3",
      },
      {
        artist: "Jan★Key(第6回目配信楽曲）",
        title: "花ノ下連歌",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_03.mp3",
      },
      {
        artist: "かめりあ(第5回目配信楽曲）",
        title: "Ultimate Ascension",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_01.mp3",
      },
      {
        artist: "VALLEYSTONE vs udouddo(第5回目配信楽曲）",
        title: "NECRO PARTY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_02.mp3",
      },
      {
        artist: "とろまる(第5回目配信楽曲）",
        title: "Smooth Wind",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_03.mp3",
      },
      {
        artist: "マッカチン企画(第5回目配信楽曲）",
        title: "鳥と桜と嘴と",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_04.mp3",
      },
      {
        artist: "はがね(第5回目配信楽曲）",
        title: "ハイスピヰド・ランパンシヰ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_05.mp3",
      },
      {
        artist: "ばんし(第4回目配信楽曲）",
        title: "-約束-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_01.mp3",
      },
      {
        artist: "Tracy feat.築山さえ(第4回目配信楽曲）",
        title: "Question.",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_02.mp3",
      },
      {
        artist: "激戦の人(第4回目配信楽曲）",
        title: "人形裁判 -THIRD IMPACT-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_03.mp3",
      },
      {
        artist: "wellow(第3回目配信楽曲）",
        title: "Russet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_01.mp3",
      },
      {
        artist: "HOUJIROU(第3回目配信楽曲）",
        title: "S1CK_F41RY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_02.mp3",
      },
      {
        artist: "ゆんゆん(第3回目配信楽曲）",
        title: "Phantom Ensemble (ゆんゆん Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_03.mp3",
      },
      {
        artist: "Arch vs n3pu(第2回目配信楽曲）",
        title: "Ultimate Fury",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_01.mp3",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "常夏！！クリスタライズ・シャーベット",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_02.mp3",
      },
      {
        artist: "kuroburger(第2回目配信楽曲）",
        title: "spectroscape",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_03.mp3",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "JEHANNEDARC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_04.mp3",
      },
      {
        artist: "C-CLAYS feat.小峠舞(第2回目配信楽曲）",
        title: "ツインソウル～輪廻する旋律～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_05.mp3",
      },
      {
        artist: "すのうまん(第1回目配信楽曲）",
        title: "Angels And Demons",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_01.mp3",
      },
      {
        artist: "溝口ゆうま feat. 大瀬良あい(第1回目配信楽曲）",
        title: "Utopia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_02.mp3",
      },
      {
        artist: "さわわ(第1回目配信楽曲）",
        title: "Mayohiga Spurt",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_03.mp3",
      },
      {
        artist: "七条レタスグループ starring nachi(第1回目配信楽曲）",
        title: "交渉人・西行寺幽々子 vs スカーレット警察",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_04.mp3",
      },
    ],
  },
  {
    id: "original17",
    name: "みんなでここなつをプロデュース！ オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_17.jpg",
    musics: [
      {
        artist: "シンゴ（マッカチン企画）＆アラ(第2回目配信楽曲）",
        title: "モラトリアムノオト",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_01.mp3",
      },
      {
        artist: "上村香月(第2回目配信楽曲）",
        title: "キズナ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_02.mp3",
      },
      {
        artist: "A than_Lily(第2回目配信楽曲）",
        title: "「ここなつ☆」は夢のカタチ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_03.mp3",
      },
      {
        artist: "ぬゆり(第2回目配信楽曲）",
        title: "アナーキーインザ夕景",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_04.mp3",
      },
      {
        artist: "lapix(第2回目配信楽曲）",
        title: "Finally Dive",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_05.mp3",
      },
      {
        artist: "U-ske(第1回目配信楽曲）",
        title: "コンフェイト＊コンチェルト",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_01.mp3",
      },
      {
        artist: "はるなば(第1回目配信楽曲）",
        title: "ムラサキグルマ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_02.mp3",
      },
      {
        artist: "uma(第1回目配信楽曲）",
        title: "千客万来☆無問題！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_03.mp3",
      },
      {
        artist: "あおいひと with イオ(第1回目配信楽曲）",
        title: "闇夜舞踏会 -緋碧と蝶のためのmasquerade-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_04.mp3",
      },
    ],
  },
  {
    id: "original19",
    name: "The 5th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_19.jpg",
    musics: [
      {
        artist: "Riz(第8回目配信楽曲）",
        title: "REGALIA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_01.mp3",
      },
      {
        artist: "Verdammt(第8回目配信楽曲）",
        title: "ゆうしゃのふゆやすみ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_02.mp3",
      },
      {
        artist: "KLing(Aoi+Yunosuke)(第8回目配信楽曲）",
        title: "Quaint Echo",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_03.mp3",
      },
      {
        artist: "uno & D.watt (IOSYS TRAX)(第8回目配信楽曲）",
        title: "#Endroll",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_04.mp3",
      },
      {
        artist: "TAKU1175 ft. 駄々子(第8回目配信楽曲）",
        title: "いつかの夢、またねの約束。",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_05.mp3",
      },
      {
        artist: "Trerey-U(第8回目配信楽曲）",
        title: "Zero-Day Exploit",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_06.mp3",
      },
      {
        artist: "uma(第7回目配信楽曲）",
        title: "cross the future",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_03.mp3",
      },
      {
        artist: "にゃそ(第7回目配信楽曲）",
        title: "Emperor's Divide",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_01.mp3",
      },
      {
        artist: "Shiron(第7回目配信楽曲）",
        title: "GEOMETRIA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_05.mp3",
      },
      {
        artist: "庭師(第7回目配信楽曲）",
        title: "↓↓↓",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_02.mp3",
      },
      {
        artist: "BlackY(第7回目配信楽曲）",
        title: "IKAROS DYNAMITE!!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_06.mp3",
      },
      {
        artist: "ぺのれり(第7回目配信楽曲）",
        title: "Prayer",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_04.mp3",
      },
      {
        artist: "たちのん(第6回目配信楽曲）",
        title: "The End of War",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_01.mp3",
      },
      {
        artist: "かゆき(第6回目配信楽曲）",
        title: "Voynich:Manuscript",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_02.mp3",
      },
      {
        artist: "ginkiha(第6回目配信楽曲）",
        title: "eastward -sdvx edit-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_03.mp3",
      },
      {
        artist: "溝口ゆうま feat. 大瀬良あい(第5回目配信楽曲）",
        title: "UROBØROS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/5_01.mp3",
      },
      {
        artist: "QURELESS(第4回目配信楽曲）",
        title: "侍Annihilate!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_01.mp3",
      },
      {
        artist: "溝口ゆうま feat. みこ♡なち♡あい(第4回目配信楽曲）",
        title: "ブチアゲドクター☆ハイテッコ三姉妹",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_02.mp3",
      },
      {
        artist: "uma&hurirai feat.ましろ(第4回目配信楽曲）",
        title: "Apex of the World",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_03.mp3",
      },
      {
        artist: "kanone(第4回目配信楽曲）",
        title: "Endless GRAVITY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_04.mp3",
      },
      {
        artist: "tsuzu(第4回目配信楽曲）",
        title: "relegation grimoire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_05.mp3",
      },
      {
        artist: "あるふぁ(第3回目配信楽曲）",
        title: "Follow Up",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_01.mp3",
      },
      {
        artist: "とろまる(第3回目配信楽曲）",
        title: "Enigma",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_02.mp3",
      },
      {
        artist: "eicaTV vs kanone(第3回目配信楽曲）",
        title: "MG277",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_03.mp3",
      },
      {
        artist: "Getty vs. DJ DiA(第3回目配信楽曲）",
        title: "Fox4-Raize-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_04.mp3",
      },
      {
        artist: "sky_delta(第3回目配信楽曲）",
        title: "REVOLVER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_05.mp3",
      },
      {
        artist: "Shiron＋こふ×モリモリあつしと提供でお送りします。(第2回目配信楽曲）",
        title: "Demise Quartet",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/2_01.mp3",
      },
      {
        artist: "Cororo(第1回目配信楽曲）",
        title: "雲の彼方",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_01.mp3",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "NEO GRAVITY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_03.mp3",
      },
      {
        artist: "はるなば(第1回目配信楽曲）",
        title: "Candy Colored Hearts",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_02.mp3",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "End to end",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_04.mp3",
      },
      {
        artist: "かめりあ(第1回目配信楽曲）",
        title: "EMPIRE OF FLAME",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_05.mp3",
      },
      {
        artist: "かねこちはる(第1回目配信楽曲）",
        title: "Lachryma《Re:Queen’M》",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_06.mp3",
      },
    ],
  },
  {
    id: "remix08",
    name: "アルバム「STARLiGHT」発売記念 Ryu☆リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_08.jpg",
    musics: [
      {
        artist: "borzy(第10回目配信楽曲）",
        title: "Time to Air (jazz it up style)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/10_01.mp3",
      },
      {
        artist: "しま兄(第10回目配信楽曲）",
        title: "waxing and wanding(SS Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/10_02.mp3",
      },
      {
        artist: "Shu※(第9回目配信楽曲）",
        title: "405nm(Shu※mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/9_01.mp3",
      },
      {
        artist: "ag(第9回目配信楽曲）",
        title: "Mind Mapping(ag Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/9_02.mp3",
      },
      {
        artist: "Freezer(第8回目配信楽曲）",
        title: "Narcissus At Oasis (Freezer Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/8_01.mp3",
      },
      {
        artist: "Shiron vs. Sound Artz(第8回目配信楽曲）",
        title: "雪月花 (Shiron & Sound Artz Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/8_02.mp3",
      },
      {
        artist: "Hirayasu Matsudo(第7回目配信楽曲）",
        title: "Genesis At Oasis (Hirayasu Matsudo Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/7_01.mp3",
      },
      {
        artist: "こふ(第7回目配信楽曲）",
        title: "Line 4 Ruin -kohumix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/7_02.mp3",
      },
      {
        artist: "影虎。(第6回目配信楽曲）",
        title: "Narcissus At Oasis -影虎。 style-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/6_01.mp3",
      },
      {
        artist: "LeaF(第6回目配信楽曲）",
        title: "壊Rave*it!! 壊Rave*it!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/6_02.mp3",
      },
      {
        artist: "Laur(第5回目配信楽曲）",
        title: "Rebuilding of Paradise Lost",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_01.mp3",
      },
      {
        artist: "Gowrock(第5回目配信楽曲）",
        title: "Engraved Mark-Gow's ill! RMX-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_02.mp3",
      },
      {
        artist: "Kairys(第5回目配信楽曲）",
        title: "Sakura Mirage -Drum'n World-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_03.mp3",
      },
      {
        artist: "mommy(第4回目配信楽曲）",
        title: "Aurora(Latinized Style)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_01.mp3",
      },
      {
        artist: 'Jockie "MASTA BASS" Suama(第4回目配信楽曲）',
        title: "3y3s (JMBS FUNKOT RMX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_02.mp3",
      },
      {
        artist: "cosMo＠暴走P(第4回目配信楽曲）",
        title: "Second Heaven GravityPfArrange",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_03.mp3",
      },
      {
        artist: "nora2r(第4回目配信楽曲）",
        title: "starmine (nora2r Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_04.mp3",
      },
      {
        artist: "Tracy vs. Astronomical(第4回目配信楽曲）",
        title: "bass 2 bass [Tracy vs. Astronomical Remix]",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_05.mp3",
      },
      {
        artist: "kamome sano feat. Kuroa*(第4回目配信楽曲）",
        title: "朧 (kamome sano remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_06.mp3",
      },
      {
        artist: "xi(第3回目配信楽曲）",
        title: "Time to Air -Fly High Remix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/3_01.mp3",
      },
      {
        artist: "Hyuji feat. LIQU@。(第3回目配信楽曲）",
        title: "Mermaid girl (Tropical Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/3_02.mp3",
      },
      {
        artist: "brz(第2回目配信楽曲）",
        title: "Critical Crystal(brz_remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_01.mp3",
      },
      {
        artist: "borzy(第2回目配信楽曲）",
        title: "Mind Mapping (hard liquid remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_02.mp3",
      },
      {
        artist: "さわわ(第2回目配信楽曲）",
        title: "雪月花 -さわわRemix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_03.mp3",
      },
      {
        artist: "polysha(第2回目配信楽曲）",
        title: "I'm so happy(Happy Hoppin Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_04.mp3",
      },
      {
        artist: "しーけー(第1回目配信楽曲）",
        title: "The star in eclipse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/1_01.mp3",
      },
      {
        artist: "TAKU1175 feat.かなたん(第1回目配信楽曲）",
        title: "Din Don Dan (Fusion Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/1_02.mp3",
      },
    ],
  },
  {
    id: "original20",
    name: "SOUND VOLTEX IV 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_20.jpg",
    musics: [
      {
        artist: "かめりあ feat. 歌劇派学生(第13回目配信楽曲）",
        title: "Lowermost revolt",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_01.mp3",
      },
      {
        artist: "BlackY(第13回目配信楽曲）",
        title: "Royal Action",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_02.mp3",
      },
      {
        artist: "タケノコ少年(第13回目配信楽曲）",
        title: "ツキアカリ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_03.mp3",
      },
      {
        artist: "ぺのれり feat.ぁゅ(第13回目配信楽曲）",
        title: "Zelophilia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_04.mp3",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第13回目配信楽曲）",
        title: "ボーイミーツ・ブルー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_05.mp3",
      },
      {
        artist: "かゆき(第13回目配信楽曲）",
        title: "極彩天奏",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_06.mp3",
      },
      {
        artist: "Verdammt(第12回目配信楽曲）",
        title: "HP:1",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_01.mp3",
      },
      {
        artist: "まし(第12回目配信楽曲）",
        title: "春時雨",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_02.mp3",
      },
      {
        artist: "Laur(第12回目配信楽曲）",
        title: "Fairy in Strasbourg",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_03.mp3",
      },
      {
        artist: "パピ子りんft.ビタミンな兄貴♂＆ゆずり(第12回目配信楽曲）",
        title: "It's a new day!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_04.mp3",
      },
      {
        artist: "Polyphonix(第12回目配信楽曲）",
        title: "QUAKE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_05.mp3",
      },
      {
        artist: "やどりぎ(第12回目配信楽曲）",
        title: "Poppin’Cats!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_06.mp3",
      },
      {
        artist: "Ange;art(第12回目配信楽曲）",
        title: "゜*。Chantilly Fille。*°",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_07.mp3",
      },
      {
        artist: "ぬゆりとびす(第11回目配信楽曲）",
        title: "Sadistic Stabbing",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_01.mp3",
      },
      {
        artist: "パイタン(第11回目配信楽曲）",
        title: "NEON LOVE♥POTION!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_02.mp3",
      },
      {
        artist: "Citrus and Ocean Colour(第11回目配信楽曲）",
        title: "couleur automnes de chocolat",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_03.mp3",
      },
      {
        artist: "brz(第11回目配信楽曲）",
        title: "WONDER_WOBBLER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_04.mp3",
      },
      {
        artist: "u-z feat.CHERICa(第11回目配信楽曲）",
        title: "Ghost Trigger",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_05.mp3",
      },
      {
        artist: "ZYTOKINE feat. aki(第11回目配信楽曲）",
        title: "444",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_06.mp3",
      },
      {
        artist: "Shiron(第10回目配信楽曲）",
        title: "Gorgetech",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_01.mp3",
      },
      {
        artist: "かねこちはる(第10回目配信楽曲）",
        title: "オンディーヌの泪",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_02.mp3",
      },
      {
        artist: "はるなば feat.みかん汁(第10回目配信楽曲）",
        title: "ゴーストマスコット",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_03.mp3",
      },
      {
        artist: "立秋 feat.ちょこ(第10回目配信楽曲）",
        title: "ぱあ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_04.mp3",
      },
      {
        artist: "MisoilePunch♪ feat.KIRARI(第10回目配信楽曲）",
        title: "SprrRush!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_05.mp3",
      },
      {
        artist: "Yooh(第9回目配信楽曲）",
        title: "Vigor",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/9_01.mp3",
      },
      {
        artist: "polysha(第9回目配信楽曲）",
        title: "The Golden Era",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/9_02.mp3",
      },
      {
        artist: "Omnis(第8回目配信楽曲）",
        title: "Gaze ft. 紫崎 雪",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/8_01.mp3",
      },
      {
        artist: "udouddo&VALLEYSTONE(第8回目配信楽曲）",
        title: "Junk Mania",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/8_02.mp3",
      },
      {
        artist: "nyankobrq(第7回目配信楽曲）",
        title: "VAMPIRE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_01.mp3",
      },
      {
        artist: "しらこいし(第7回目配信楽曲）",
        title: "Cepheus",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_02.mp3",
      },
      {
        artist: "フーリンキャットマーク～with 鳴紗(第7回目配信楽曲）",
        title: "クリスタルミサイル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_03.mp3",
      },
      {
        artist: "a_hisa(第7回目配信楽曲）",
        title: "Smoked Turkey Rag",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_04.mp3",
      },
      {
        artist: "technoplanet(第7回目配信楽曲）",
        title: "Inscape",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_05.mp3",
      },
      {
        artist: "borzy & 結月そら(第6回目配信楽曲）",
        title: "湖底遺跡のヴィダー・ハル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/6_01.mp3",
      },
      {
        artist: "uma(第6回目配信楽曲）",
        title: "sink into the dream",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/6_02.mp3",
      },
      {
        artist: "lapix(第5回目配信楽曲）",
        title: "Carry Me Away",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/5_01.mp3",
      },
      {
        artist: "ローゼライト powered by mu-ray(第5回目配信楽曲）",
        title: "SO FLY ME TO YOU",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/5_02.mp3",
      },
      {
        artist: "アメツチ絵日記(第4回目配信楽曲）",
        title: "黎明スケッチブック",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_01.mp3",
      },
      {
        artist: "すのうまん(第4回目配信楽曲）",
        title: "準備運動",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_02.mp3",
      },
      {
        artist: "あるふぁ(第4回目配信楽曲）",
        title: "fancy cake!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_03.mp3",
      },
      {
        artist: "ぽんきち(第3回目配信楽曲）",
        title: "ドリームエンド・サバイバー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/3_01.mp3",
      },
      {
        artist: "庭師(第2回目配信楽曲）",
        title: "キュリオシティ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/2_01.mp3",
      },
      {
        artist: "Dj Grimoire(第2回目配信楽曲）",
        title: "Noisy Minority",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/2_02.mp3",
      },
      {
        artist: "Massive New Krew(第1回目配信楽曲）",
        title: "Dharma",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_01.mp3",
      },
      {
        artist: "Ras(第1回目配信楽曲）",
        title: "JUGGLE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_02.mp3",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第1回目配信楽曲）",
        title: "水槽のクジラ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_03.mp3",
      },
      {
        artist: "Freezer feat.妃苺(第1回目配信楽曲）",
        title: "Chocolate Planet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_04.mp3",
      },
      {
        artist: "Soleily(第1回目配信楽曲）",
        title: "Heavenly Adventure",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_05.mp3",
      },
      {
        artist: "Endorfin.(第1回目配信楽曲）",
        title: "Four Leaves",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_06.mp3",
      },
      {
        artist: "Braflare(kanone&かぼちゃ)(第1回目配信楽曲）",
        title: "EDEN of TRUTH",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_07.mp3",
      },
    ],
  },
  {
    id: "original21",
    name: "The 6th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_21.jpg",
    musics: [
      {
        artist: "はるなば(第5回目配信楽曲）",
        title: "Chaotic Romance",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_01.mp3",
      },
      {
        artist: "Getty vs. DJ DiA(第5回目配信楽曲）",
        title: "DropZ-Line-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_02.mp3",
      },
      {
        artist: "Ellim Gnirps vs よみぃ(第5回目配信楽曲）",
        title: "Khionos TiARA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_03.mp3",
      },
      {
        artist: "立秋 feat.ちょこ(第5回目配信楽曲）",
        title: "おにいちゃんハイテック",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_04.mp3",
      },
      {
        artist: "polysha+inusack(第5回目配信楽曲）",
        title: "Destruction & Qreation",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_05.mp3",
      },
      {
        artist: "winddrums(第5回目配信楽曲）",
        title: "Goddess Bless You",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_06.mp3",
      },
      {
        artist: "まろん (IOSYS)(第5回目配信楽曲）",
        title: "PIERROT KNIfE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_07.mp3",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第5回目配信楽曲）",
        title: "Xibercannon",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_08.mp3",
      },
      {
        artist: "お月さま交響曲(第4回目配信楽曲）",
        title: "Apocrypha",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_01.mp3",
      },
      {
        artist: "Aoi Sumito a.k.a. あおいひと(第4回目配信楽曲）",
        title: "Fáfnir",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_02.mp3",
      },
      {
        artist: "a_hisa vs KV.S&はらたま(第4回目配信楽曲）",
        title: "獅子奮迅",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_03.mp3",
      },
      {
        artist: "ikaruga_nex fw.tcheb(第4回目配信楽曲）",
        title: "Spirit of the Beast",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_04.mp3",
      },
      {
        artist: "モリモリあつし(第4回目配信楽曲）",
        title: "Grand-Guignol",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_05.mp3",
      },
      {
        artist: "古屋直雪(第3回目配信楽曲）",
        title: "rhythmology study",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_01.mp3",
      },
      {
        artist: "yaseta + Hidra-Xjeil(第3回目配信楽曲）",
        title: "JUNKIE FLAVOR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_02.mp3",
      },
      {
        artist: "kanone(第3回目配信楽曲）",
        title: "Legendary Road",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_03.mp3",
      },
      {
        artist: "Ancraft(第3回目配信楽曲）",
        title: "Game Over",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_04.mp3",
      },
      {
        artist: "Jun Kuroda(第3回目配信楽曲）",
        title: "dreamin' of u",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_05.mp3",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第2回目配信楽曲）",
        title: "Gamerz FestivaL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_01.mp3",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Sailing Force",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_02.mp3",
      },
      {
        artist: "かねこちはる(第2回目配信楽曲）",
        title: "iLLness LiLin",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_03.mp3",
      },
      {
        artist: "かめりあ feat. ななひら(第2回目配信楽曲）",
        title: "超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_04.mp3",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "ΩVERSOUL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_05.mp3",
      },
      {
        artist: "Lite Show Magic(第1回目配信楽曲）",
        title: "Make Magic",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_01.mp3",
      },
      {
        artist: "かゆき(第1回目配信楽曲）",
        title: "infinite:youniverse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_02.mp3",
      },
      {
        artist: "カモメサノエレクトリックオーケストラ(第1回目配信楽曲）",
        title: "HE4VEN ～天国へようこそ～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_03.mp3",
      },
      {
        artist: "MisoilePunch♪ ～タケノコ添え～(第1回目配信楽曲）",
        title: "Fin.ArcDeaR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_04.mp3",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "Immortal saga",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_05.mp3",
      },
    ],
  },
  {
    id: "original22",
    name: "The 7th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_22.jpg",
    musics: [
      {
        artist: "winddrums vs cosMo(第9回目配信楽曲）",
        title: "Divine's or Deal",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_01.mp3",
      },
      {
        artist: "かねこちはる(第9回目配信楽曲）",
        title: "ファイナルレター",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_02.mp3",
      },
      {
        artist: "溝口ゆうま feat. みこ♡なち♡あい(第9回目配信楽曲）",
        title: "ブチ上げ候！現代忍者三姉妹",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_03.mp3",
      },
      {
        artist: "NA7(第9回目配信楽曲）",
        title: "Musha Vibration",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_04.mp3",
      },
      {
        artist: "影虎。(第8回目配信楽曲）",
        title: "No way",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_01.mp3",
      },
      {
        artist: "Aoi vs. r0y(第8回目配信楽曲）",
        title: "Coldlapse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_02.mp3",
      },
      {
        artist: "Ayato × sak × 田島千種(第8回目配信楽曲）",
        title: "Beyond the BLUE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_03.mp3",
      },
      {
        artist: "Team&Dj Grimoire(第8回目配信楽曲）",
        title: "Akzeriyyuth",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_04.mp3",
      },
      {
        artist: "Yooh(第7回目配信楽曲）",
        title: "Dark Matter",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_01.mp3",
      },
      {
        artist: "MisoilePunch♪ ~Take No Complete~(第7回目配信楽曲）",
        title: "Levier'n NābYss",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_02.mp3",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Justitia Gladius",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_03.mp3",
      },
      {
        artist: "Verdammt(第7回目配信楽曲）",
        title: "ひとりぼっちの魔王",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_04.mp3",
      },
      {
        artist: "梅干茶漬け(第7回目配信楽曲）",
        title: "ホワイトパレード",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_05.mp3",
      },
      {
        artist: "brz1128(第6回目配信楽曲）",
        title: "BLAZING_LAZER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/6_01.mp3",
      },
      {
        artist: "Ironami(第6回目配信楽曲）",
        title: "Melty Sweets",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/6_02.mp3",
      },
      {
        artist: "pan(第5回目配信楽曲）",
        title: "MeteorGlow Aftermath",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_01.mp3",
      },
      {
        artist: "零 -zero-(第5回目配信楽曲）",
        title: "Knights Assault",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_02.mp3",
      },
      {
        artist: "MasKaleido(第5回目配信楽曲）",
        title: "Gate of Atlantis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_03.mp3",
      },
      {
        artist: "BlackY(第4回目配信楽曲）",
        title: "LastΩmegA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_01.mp3",
      },
      {
        artist: "こふ(第4回目配信楽曲）",
        title: "SUPER BUBBLE JOURNEY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_02.mp3",
      },
      {
        artist: "とろまる(第4回目配信楽曲）",
        title: "Blue Stream",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_03.mp3",
      },
      {
        artist: "Hidra-Xjeil(第3回目配信楽曲）",
        title: "Iridescent Clouds",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_01.mp3",
      },
      {
        artist: "P*Light(第3回目配信楽曲）",
        title: "SAtAN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_02.mp3",
      },
      {
        artist: "かゆき(第3回目配信楽曲）",
        title: "Divine's:Bugscript",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_03.mp3",
      },
      {
        artist: "かめりあ(第2回目配信楽曲）",
        title: "Xéroa",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_02.mp3",
      },
      {
        artist: "technoplanet(第2回目配信楽曲）",
        title: "Awakening",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_01.mp3",
      },
      {
        artist: "U-ske feat.棗いつき(第2回目配信楽曲）",
        title: "プラネタジャーニー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_08.mp3",
      },
      {
        artist: "はるなば with すずしろ&桃箱(第2回目配信楽曲）",
        title: "メルヘン風紀委員会",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_07.mp3",
      },
      {
        artist: "Crawk × Capchii(第2回目配信楽曲）",
        title: "Wings of Glory",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_06.mp3",
      },
      {
        artist: "からとP feat.リた☆(第2回目配信楽曲）",
        title: "Яe's NoVǢ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_05.mp3",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第2回目配信楽曲）",
        title: "BlueMoon Princess",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_04.mp3",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "crossing blue",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_03.mp3",
      },
      {
        artist: "黒魔(第1回目配信楽曲）",
        title: "I",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_07.mp3",
      },
      {
        artist: "xi(第1回目配信楽曲）",
        title: "Last Resort",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_01.mp3",
      },
      {
        artist: "Laur(第1回目配信楽曲）",
        title: "A Lasting Promise",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_02.mp3",
      },
      {
        artist: "TAKU1175 × かにまゆ(第1回目配信楽曲）",
        title: "羅生門",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_05.mp3",
      },
      {
        artist: "Cororo(第1回目配信楽曲）",
        title: "神話に芽吹く",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_08.mp3",
      },
      {
        artist: "雄之助(第1回目配信楽曲）",
        title: "Cloud 9",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_03.mp3",
      },
      {
        artist: "ℱsinfonia（Yu_Asahina　溝口ゆうま　かなたん　大瀬良あい）(第1回目配信楽曲）",
        title: "Sacrifice and Faith",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_04.mp3",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第1回目配信楽曲）",
        title: "僕らの時間",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_06.mp3",
      },
      {
        artist: "7mai(第1回目配信楽曲）",
        title: "CUTE-Reflection",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_09.mp3",
      },
    ],
  },
  {
    id: "remix09",
    name: "東方永夜抄リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_09.jpg",
    musics: [
      {
        artist: "brz1128(第7回目配信楽曲）",
        title: "Invisible Bullets",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_01.mp3",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Night Rockin' Bird",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_02.mp3",
      },
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: "Venomous Firefly",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_03.mp3",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第7回目配信楽曲）",
        title: "Princess K",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_04.mp3",
      },
      {
        artist: "Laur(第7回目配信楽曲）",
        title: "Nostalgic Blood of the Strife",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_05.mp3",
      },
      {
        artist: "Die Ellipse (deli. with 倉田美和)(第7回目配信楽曲）",
        title: "マイネ・クライネ・ナハトムジーク",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_06.mp3",
      },
      {
        artist: "Se-U-Ra(第7回目配信楽曲）",
        title: "Tic Exe",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_07.mp3",
      },
      {
        artist: "かたぎり(第6回目配信楽曲）",
        title: "Breakin' Asia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_01.mp3",
      },
      {
        artist: "N-Driver(第6回目配信楽曲）",
        title: "4NT1 D34D",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_02.mp3",
      },
      {
        artist: "さわわ(第6回目配信楽曲）",
        title: "Lunatic Sprinter",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_03.mp3",
      },
      {
        artist: "溝口ゆうま feat. みこ♥なち♥あい(第6回目配信楽曲）",
        title: "蓬莱フェスティボー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_04.mp3",
      },
      {
        artist: "Noah(第5回目配信楽曲）",
        title: "Black night",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_01.mp3",
      },
      {
        artist: "CielArc(第5回目配信楽曲）",
        title: "灼熱のBlazin' Beat",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_02.mp3",
      },
      {
        artist: "Diartzh(第5回目配信楽曲）",
        title: "Liévre -blanche-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_03.mp3",
      },
      {
        artist: "uma & nmk feat. 橘花音(第5回目配信楽曲）",
        title: "Burning Spark!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_04.mp3",
      },
      {
        artist: "あさり(第4回目配信楽曲）",
        title: "Mysterious Nights",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/4_01.mp3",
      },
      {
        artist: "古屋直雪(第4回目配信楽曲）",
        title: "Invisible Full Moon 古屋直雪 remix",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/4_02.mp3",
      },
      {
        artist: "激戦の人(第4回目配信楽曲）",
        title: "少女綺想曲 -G.X.N. Remix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/4_03.mp3",
      },
      {
        artist: "すのうまん(第4回目配信楽曲）",
        title: "Victim of Nights",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/4_04.mp3",
      },
      {
        artist: "モリモリあつし(第3回目配信楽曲）",
        title: "プレインエイジア(MRM REMIX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/3_01.mp3",
      },
      {
        artist: "梅干茶漬け(第3回目配信楽曲）",
        title: "KIMIDORI Streak!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/3_02.mp3",
      },
      {
        artist: "Adust Rain(第3回目配信楽曲）",
        title: "Secret Traveler -MeniRemix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/3_03.mp3",
      },
      {
        artist: "庭師(第2回目配信楽曲）",
        title: "煙",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/2_01.mp3",
      },
      {
        artist: "polysha(第2回目配信楽曲）",
        title: "ILL-STARRED Diver",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/2_02.mp3",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第2回目配信楽曲）",
        title: "誰が為に兎は舞う＝狂速狂騒曲＝",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/2_03.mp3",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第1回目配信楽曲）",
        title: "私の恋色。",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/1_01.mp3",
      },
      {
        artist: "シイナフユキ(第1回目配信楽曲）",
        title: "disordered asia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/1_02.mp3",
      },
      {
        artist: "AMAZE(第1回目配信楽曲）",
        title: "アワデコノヨヲ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/1_03.mp3",
      },
    ],
  },
  {
    id: "original24",
    name: "The 8th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_24.jpg",
    musics: [
      {
        artist: "technoplanet feat. Kuroto Sion(第5回目配信楽曲)",
        title: "Turn the story",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_01.mp3",
      },
      {
        artist: "お月さま交響曲(第5回目配信楽曲)",
        title: "Call of the World",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_02.mp3",
      },
      {
        artist: "からとP vs タケノコ少年(第5回目配信楽曲)",
        title: "ЯegreT of MemoRy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_03.mp3",
      },
      {
        artist: "まろん (IOSYS)(第5回目配信楽曲)",
        title: "Jacob’s Elevator",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_04.mp3",
      },
      {
        artist: "uma vs. モリモリあつし(第4回目配信楽曲)",
        title: "FIRST：DREAMS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_01.mp3",
      },
      {
        artist: "YumAeL ex. 溝口ゆうま(第4回目配信楽曲)",
        title: "JǛPITΨR ♃ GЯÃVITÝ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_02.mp3",
      },
      {
        artist: "Λerdammt(第4回目配信楽曲)",
        title: "empty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_03.mp3",
      },
      {
        artist: "cosMo＠暴走P(第3回目配信楽曲)",
        title: "THE凸GENERATOR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_01.mp3",
      },
      {
        artist: "かゆき(第3回目配信楽曲)",
        title: "clear:wings",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_02.mp3",
      },
      {
        artist: "HOUJIROU(第3回目配信楽曲)",
        title: "Atropa bella-donna",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_03.mp3",
      },
      {
        artist: "Crawk × Capchii(第3回目配信楽曲)",
        title: "Barbatos",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_04.mp3",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第3回目配信楽曲)",
        title: "Xicholauncher",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_05.mp3",
      },
      {
        artist: "Cororo feat.Yuria Miyazono(第2回目配信楽曲)",
        title: "翠雨の祷",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_01.mp3",
      },
      {
        artist: "memex(第2回目配信楽曲)",
        title: "Sacrifice Escape: 不条理の模倣による感情と代償",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_02.mp3",
      },
      {
        artist: "とろまる(第2回目配信楽曲)",
        title: "Enigma II",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_03.mp3",
      },
      {
        artist: "MisoilePunch♪(第2回目配信楽曲)",
        title: "Aurolla",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_04.mp3",
      },
      {
        artist: "Ellim Gnirps vs よみぃ(第2回目配信楽曲)",
        title: "SociuS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_05.mp3",
      },
      {
        artist: "古屋直雪(第2回目配信楽曲)",
        title: "Glorious Journey",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_06.mp3",
      },
      {
        artist: "かめりあ(第1回目配信楽曲)",
        title: "*Feels Seasickness...*",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_01.mp3",
      },
      {
        artist: "かぼちゃ(第1回目配信楽曲)",
        title: "ΣmbryØ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_02.mp3",
      },
      {
        artist: "Hommarju vs RoughSketch(第1回目配信楽曲)",
        title: "Cross Fire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_03.mp3",
      },
      {
        artist: "BlackY(第1回目配信楽曲)",
        title: "GODHEART",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_04.mp3",
      },
      {
        artist: "Juggernaut.(第1回目配信楽曲)",
        title: "THE HEAVEN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_05.mp3",
      },
      {
        artist: "Yu-dachi(第1回目配信楽曲)",
        title: "祝福の色彩は想い結ぶ君たち迄",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_06.mp3",
      },
      {
        artist: "はがね(第1回目配信楽曲)",
        title: "ULTRAVELOCITY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_07.mp3",
      },
      {
        artist: "Yooh(第1回目配信楽曲)",
        title: "Destiny",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_08.mp3",
      },
    ],
  },
  {
    id: "original23",
    name: "SOUND VOLTEX VIVID WAVE 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_23.jpg",
    musics: [
      {
        artist: "BlackY(第9回目配信楽曲）",
        title: "Vividly Impromptu",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/9_01.mp3",
      },
      {
        artist: "709sec. feat.Yui Chinen(第9回目配信楽曲）",
        title: "祭囃子",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/9_02.mp3",
      },
      {
        artist: "RoughSketch & Hommarju(第8回目配信楽曲）",
        title: "PARTY TIME!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_01.mp3",
      },
      {
        artist: "近未来妖怪活劇をかぼちゃが謡う！　いざ！(第8回目配信楽曲）",
        title: "近未来百鬼夜行譚～死返之巻～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_02.mp3",
      },
      {
        artist: "kamome sano(第8回目配信楽曲）",
        title: "ultra turbo",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_03.mp3",
      },
      {
        artist: "pan(第7回目配信楽曲）",
        title: "Pixelated Platform",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/7_01.mp3",
      },
      {
        artist: "シルクパラソル（yoa＆かゆき） feat. まめこ(第7回目配信楽曲）",
        title: "D1g1t1ze b0dy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/7_02.mp3",
      },
      {
        artist: "brz1128(第6回目配信楽曲）",
        title: "Cynical Joker",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_01.mp3",
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "Mischievous theater",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_02.mp3",
      },
      {
        artist: "Yu_Asahina(第6回目配信楽曲）",
        title: "eighth-slave",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_03.mp3",
      },
      {
        artist: "Tsubusare BOZZ(第6回目配信楽曲）",
        title: "PIZZATIME",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_04.mp3",
      },
      {
        artist: "Croire(第5回目配信楽曲）",
        title: "エンゲージ〆ント",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_01.mp3",
      },
      {
        artist: "Dustvoxx(第5回目配信楽曲）",
        title: "Sunflower Vibes",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_02.mp3",
      },
      {
        artist: "ginkiha(第5回目配信楽曲）",
        title: "CLOUDS FLYER -sdvx edit-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_03.mp3",
      },
      {
        artist: "MasKaleido VS 709sec.(第5回目配信楽曲）",
        title: "V Sen5eS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_04.mp3",
      },
      {
        artist: "諸星なな feat.加藤はるか&YKI(第5回目配信楽曲）",
        title: "偶然？ 必然？ アンビバレンス！",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_05.mp3",
      },
      {
        artist: "あらいぐまファクトリー feat. okogeeechann(第4回目配信楽曲）",
        title: "アライヴ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_01.mp3",
      },
      {
        artist: "Reaper(第4回目配信楽曲）",
        title: "Circulator",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_02.mp3",
      },
      {
        artist: "せいぎのあおぢる(第4回目配信楽曲）",
        title: "To:BrandNewDeadline",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_03.mp3",
      },
      {
        artist: "Yuta Imai(第4回目配信楽曲）",
        title: "Into The Madness",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_04.mp3",
      },
      {
        artist: "ツマミセンタイタテレンジャー(第3回目配信楽曲）",
        title: "ツマミ戦隊 タテレンジャー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_01.mp3",
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "Tribal Trial",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_02.mp3",
      },
      {
        artist: "Freezer feat.妃苺(第3回目配信楽曲）",
        title: "Chocolate Parade",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_03.mp3",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第3回目配信楽曲）",
        title: "シープドリーミン",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_04.mp3",
      },
      {
        artist: "siqlo(第3回目配信楽曲）",
        title: "Adrenaline Rush",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_05.mp3",
      },
      {
        artist: "やどりぎ(第2回目配信楽曲）",
        title: "アオアラシ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_01.mp3",
      },
      {
        artist: "フーリンキャットマーク(第2回目配信楽曲）",
        title: "港町レディ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_02.mp3",
      },
      {
        artist: "#EmoCosine(第2回目配信楽曲）",
        title: "VIVID DEBUT!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_03.mp3",
      },
      {
        artist: "winddrums(第2回目配信楽曲）",
        title: "Enchanté",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_04.mp3",
      },
      {
        artist: "PSYQUI feat. mikanzil(第2回目配信楽曲）",
        title: "Bye or not",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_05.mp3",
      },
      {
        artist: "technoplanet feat. ＯＲＩ姫 & やみん(第1回目配信楽曲）",
        title: "Hi-Fi!!双子'S",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_01.mp3",
      },
      {
        artist: "ryhki(第1回目配信楽曲）",
        title: "Sharkbait",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_02.mp3",
      },
      {
        artist: "立秋 feat.ちょこ(第1回目配信楽曲）",
        title: "び",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_03.mp3",
      },
      {
        artist: "colorless（からとP feat.脱線ぐーぅ）(第1回目配信楽曲）",
        title: "120秒のエンドロール",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_04.mp3",
      },
      {
        artist: "cosMo＠暴走P(第1回目配信楽曲）",
        title: "無魎大数",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_05.mp3",
      },
    ],
  },
  {
    id: "remix10",
    name: "BEMANI楽曲リミックスコンテスト ～2019～",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_10.png",
    musics: [
      {
        artist: "ismK(第8回目配信楽曲）",
        title: "ABSOLUTE(ismK passionate remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_01.mp3",
      },
      {
        artist: "Ange;art(第8回目配信楽曲）",
        title: "EGOISM 440 (Ange;art remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_02.mp3",
      },
      {
        artist: "かめりあ feat. ななひら(第8回目配信楽曲）",
        title: "ばらんが!!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_03.mp3",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第8回目配信楽曲）",
        title: "ナナホシのうた",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_04.mp3",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Blue Forest(NightBounce Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_01.mp3",
      },
      {
        artist: "xi(第7回目配信楽曲）",
        title: "Elemental Creation -xiRemix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_02.mp3",
      },
      {
        artist: "siqlo(第7回目配信楽曲）",
        title: "Impress(siqlo's Hi-Tech Veats)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_03.mp3",
      },
      {
        artist: "technoplanet(第7回目配信楽曲）",
        title: "Macuilxochitl (Latin Jazz Mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_04.mp3",
      },
      {
        artist: "Se-U-Ra + しーけー(第7回目配信楽曲）",
        title: "nostos -ark remix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_05.mp3",
      },
      {
        artist: "かめりあ(第6回目配信楽曲）",
        title: "onslaught -Retaliation of Bahamūt-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_04.mp3",
      },
      {
        artist: "Aoi(第6回目配信楽曲）",
        title: "POSSESSION (Aoi Q.E.D. RMX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_05.mp3",
      },
      {
        artist: "ろひ(第6回目配信楽曲）",
        title: "Scars of FAUNA(ろひ Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_06.mp3",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第6回目配信楽曲）",
        title: "SHION -sublimation mix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_07.mp3",
      },
      {
        artist: "Hyuji feat. LIQU@。& TadashiYamamoto(第6回目配信楽曲）",
        title: "ナスカの丘 (Hi-NRG Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_08.mp3",
      },
      {
        artist: "naka3(第6回目配信楽曲）",
        title: "ナナホシ(lovely bubbly party mix!)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_09.mp3",
      },
      {
        artist: "あさり(saminun)(第6回目配信楽曲）",
        title: "ABSOLUTE (saminun mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_01.mp3",
      },
      {
        artist: "#EmoCosine(第6回目配信楽曲）",
        title: "#EmoCloche",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_02.mp3",
      },
      {
        artist: "Yuta Imai(第6回目配信楽曲）",
        title: "EMERALDAS (Yuta Imai Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_03.mp3",
      },
      {
        artist: "とろまる(第5回目配信楽曲）",
        title: "Blue Forest (Prog Keys Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/5_01.mp3",
      },
      {
        artist: "coTatsu(第5回目配信楽曲）",
        title: "cloche(といぼっくすうぃんぐ　みっくす)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/5_02.mp3",
      },
      {
        artist: "uma meets モリモリあつし(第4回目配信楽曲）",
        title: "Re：Elemental Creation",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_01.mp3",
      },
      {
        artist: "Gowrock(第4回目配信楽曲）",
        title: "POSSESSION(Gowrock Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_02.mp3",
      },
      {
        artist: "影虎。(第4回目配信楽曲）",
        title: "DEEP PSYCHEDELIC STRIKER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_03.mp3",
      },
      {
        artist: "HAMA topground(第3回目配信楽曲）",
        title: "EGOISM -Rebuild-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/3_01.mp3",
      },
      {
        artist: "Akizuki Nagomu feat. fu-ko(第3回目配信楽曲）",
        title: "Mynarco(Nagomu 2Step Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/3_02.mp3",
      },
      {
        artist: "kamome sano(第2回目配信楽曲）",
        title: "Elemental Creation (kamome sano Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/2_01.mp3",
      },
      {
        artist: "bansou(第2回目配信楽曲）",
        title: "Impress (bansou Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/2_02.mp3",
      },
      {
        artist: "Tracy vs. Yu_Asahina(第1回目配信楽曲）",
        title: "ABSOLUTE (EUROBEAT REMIX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_01.mp3",
      },
      {
        artist: "HOUJIROU feat. 駄々子(第1回目配信楽曲）",
        title: "SHION (ロースピード幻想チューン Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_02.mp3",
      },
      {
        artist: "polysha(第1回目配信楽曲）",
        title: "Valanga(polysha Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_03.mp3",
      },
    ],
  },
  {
    id: "original26",
    name: "The 9th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_26.jpg",
    musics: [
      {
        artist: "Croire(第5回目配信楽曲）",
        title: "Non RolicK!!大冒険",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_01.mp3",
      },
      {
        artist: "かぼちゃ feat. miko(第5回目配信楽曲）",
        title: "Thank you for your playing music",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_02.mp3",
      },
      {
        artist: "！すでのな(第5回目配信楽曲）",
        title: "Defining Future",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_03.mp3",
      },
      {
        artist: "U-ske feat.Ri9(第5回目配信楽曲）",
        title: "le coeur patissiere",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_04.mp3",
      },
      {
        artist: "カエルとネコ(第5回目配信楽曲）",
        title: "who I am",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_05.mp3",
      },
      {
        artist: "Ryo Arue(第5回目配信楽曲）",
        title: "eternite",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_06.mp3",
      },
      {
        artist: "諸星なな feat.加藤はるか＆廣瀬祐輝(第4回目配信楽曲）",
        title: "おどりましょうよ！ドラゴンさん ～転生したらゲーム曲でした～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_01.mp3",
      },
      {
        artist: "かゆき(第4回目配信楽曲）",
        title: "Φnd:you",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_02.mp3",
      },
      {
        artist: "ℱsinfonia (Yu_Asahina 溝口ゆうま かなたん 大瀬良あい)(第4回目配信楽曲）",
        title: "Valkyrja ~Aldrlag~",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_03.mp3",
      },
      {
        artist: "708/残響P(第4回目配信楽曲）",
        title: "MICHIZURE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_04.mp3",
      },
      {
        artist: "タケノコ少年 feat. 荒巻(第4回目配信楽曲）",
        title: "Me:Tear",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_05.mp3",
      },
      {
        artist: "setu-O(第4回目配信楽曲）",
        title: "Blessing Bouquet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_06.mp3",
      },
      {
        artist: "しーけー feat.arinco(第3回目配信楽曲）",
        title: "星の詩",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_01.mp3",
      },
      {
        artist: "sazanami(第3回目配信楽曲）",
        title: "Lazurite",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_02.mp3",
      },
      {
        artist: "めと（Metomate）(第3回目配信楽曲）",
        title: "濁色踊るオートマタ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_03.mp3",
      },
      {
        artist: "Alkome(第3回目配信楽曲）",
        title: "Innocent",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_04.mp3",
      },
      {
        artist: "wa. + 杠葉えりか(第3回目配信楽曲）",
        title: "Ethereal Lotus",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_05.mp3",
      },
      {
        artist: "MisoilePunch♪(第2回目配信楽曲）",
        title: "VVelcome!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_01.mp3",
      },
      {
        artist: "technoplanet(第2回目配信楽曲）",
        title: "Redshift 2nd Ignition",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_02.mp3",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第2回目配信楽曲）",
        title: "ミュージックプレイヤー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_03.mp3",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第2回目配信楽曲）",
        title: "春告胡蝶",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_04.mp3",
      },
      {
        artist: "Juggernaut.(第2回目配信楽曲）",
        title: "†:OLPHEUX:†",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_05.mp3",
      },
      {
        artist: "ミカルコスモ(せらみかる×cosMo＠暴走P)(第2回目配信楽曲）",
        title: "GEMINI LA2ER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_06.mp3",
      },
      {
        artist: "C-Show(第2回目配信楽曲）",
        title: "LubedeR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_07.mp3",
      },
      {
        artist: "SCHOOL CASTE(石見＆とおる)(第2回目配信楽曲）",
        title: "Яe:son D'être",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_08.mp3",
      },
      {
        artist: "RoughSketch(第1回目配信楽曲）",
        title: "666",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_01.mp3",
      },
      {
        artist: "かめりあ feat. かめりあ(第1回目配信楽曲）",
        title: "色を喪った街",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_02.mp3",
      },
      {
        artist: "Diceros Bicornis(第1回目配信楽曲）",
        title: "ЯeviveR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_03.mp3",
      },
      {
        artist: "ETIA.(第1回目配信楽曲）",
        title: "9TH5IN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_04.mp3",
      },
      {
        artist: "u-z feat.CHERICa(第1回目配信楽曲）",
        title: "Katharsis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_05.mp3",
      },
      {
        artist: "Ashrount vs polysha(第1回目配信楽曲）",
        title: "ZEИITH",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_06.mp3",
      },
      {
        artist: "ぽんきち&ゆんゆん(第1回目配信楽曲）",
        title: "SAMURAI TIGER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_07.mp3",
      },
    ],
  },
  {
    id: "original25",
    name: "コナステ版 SOUND VOLTEX 先行配信！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_25.jpg",
    musics: [
      {
        artist: "かめりあ(第6回目配信楽曲)",
        title: "PSYCHO+HEROES",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_01.mp3",
      },
      {
        artist: "fZy(第6回目配信楽曲)",
        title: "Your SOUL Is Mine",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_02.mp3",
      },
      {
        artist: "CielArc(第6回目配信楽曲)",
        title: "Screaming!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_03.mp3",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第6回目配信楽曲)",
        title: "Gimme dreamin'",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_04.mp3",
      },
      {
        artist: "めと（Metomate）(第6回目配信楽曲)",
        title: "孤月群雲に沈む",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_05.mp3",
      },
      {
        artist: "ryhki(第5回目配信楽曲)",
        title: "Devastated Territory",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_01.mp3",
      },
      {
        artist: "pan(第5回目配信楽曲)",
        title: "€omet popcorn",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_02.mp3",
      },
      {
        artist: "Noah(第5回目配信楽曲)",
        title: "Hurt me plenty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_03.mp3",
      },
      {
        artist: "みーに(第4回目配信楽曲)",
        title: "トーキョーサマーナイト",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_01.mp3",
      },
      {
        artist: "rider(第4回目配信楽曲)",
        title: "Hexennacht",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_02.mp3",
      },
      {
        artist: "MisomyL(第4回目配信楽曲)",
        title: "Ring！Run！Nyan!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_03.mp3",
      },
      {
        artist: "あるふぁ feat. とおる(第4回目配信楽曲)",
        title: "floating girl",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_04.mp3",
      },
      {
        artist: "すのうまん(第4回目配信楽曲)",
        title: "Holy Legacy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_05.mp3",
      },
      {
        artist: "monoq+RIZARDI(第4回目配信楽曲)",
        title: "SLEEPWALKER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_06.mp3",
      },
      {
        artist: "siqlo(第3回目配信楽曲)",
        title: "Electric Injury",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_01.mp3",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第3回目配信楽曲)",
        title: "遷",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_02.mp3",
      },
      {
        artist: "7mai(第3回目配信楽曲)",
        title: "月々紅花",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_03.mp3",
      },
      {
        artist: "MasKaleido feat. ぁゅ(第3回目配信楽曲)",
        title: "恋するレインガール",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_04.mp3",
      },
      {
        artist: "you(第3回目配信楽曲)",
        title: "Sparkling Laser Beam",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_05.mp3",
      },
      {
        artist: "gaburyu feat. Frosch(第3回目配信楽曲)",
        title: "iberis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_06.mp3",
      },
      {
        artist: "MYUKKE.(第2回目配信楽曲)",
        title: "DO-IT-AMA-SITE!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_01.mp3",
      },
      {
        artist: "梅干茶漬け(第2回目配信楽曲)",
        title: "Ichi-Go! DX Pancake!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_02.mp3",
      },
      {
        artist: "立秋 feat.ちょこ(第2回目配信楽曲)",
        title: "おはようからおやすみまでかまってポメポメ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_03.mp3",
      },
      {
        artist: "テヅカ(第2回目配信楽曲)",
        title: "floorkiller",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_04.mp3",
      },
      {
        artist: "borzy(第2回目配信楽曲)",
        title: "Flaa Behavior",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_05.mp3",
      },
      {
        artist: "RiMo(第2回目配信楽曲)",
        title: "Dooooope",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_06.mp3",
      },
      {
        artist: "Spacelectro feat.椎木レク(第1回目配信楽曲)",
        title: "トマヨイ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_01.mp3",
      },
      {
        artist: "Paradise Eve feat.しゃみお(第1回目配信楽曲)",
        title: "夢見草奇譚",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_02.mp3",
      },
      {
        artist: "Ashrount(第1回目配信楽曲)",
        title: "Over The Top",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_03.mp3",
      },
      {
        artist: "KV.S&はらたま(第1回目配信楽曲)",
        title: "Historia of Velnoti",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_04.mp3",
      },
      {
        artist: "polysha(第1回目配信楽曲)",
        title: "World of Iris",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_05.mp3",
      },
    ],
  },
  {
    id: "original27",
    name: "SOUND VOLTEX EXCEED GEAR制作決定記念 キャラクターテーマ楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_27.png",
    musics: [
      {
        artist: "DecisionS (kanone + nora2r)(第13回目配信楽曲）",
        title: "Unleashed Redness",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_01.mp3",
      },
      {
        artist: "かゆき(第13回目配信楽曲）",
        title: "party:stage",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_02.mp3",
      },
      {
        artist: "xi(第13回目配信楽曲）",
        title: "Rapsodia d'amore",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_03.mp3",
      },
      {
        artist: "#EmoCosine(第12回目配信楽曲）",
        title: "Going My Future!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_01.mp3",
      },
      {
        artist: "みーに＠メルヘン風紀委員会書記(第12回目配信楽曲）",
        title: "フェアリーテイル・ラヴァーズ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_02.mp3",
      },
      {
        artist: "Juggernaut.(第12回目配信楽曲）",
        title: "Archangelio",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_03.mp3",
      },
      {
        artist: "概念(第11回目配信楽曲）",
        title: "XXanadu#climaXX",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/11_01.mp3",
      },
      {
        artist: "BlackY(第11回目配信楽曲）",
        title: "Bigbang Faker",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/11_02.mp3",
      },
      {
        artist: 'かめりあ as "まいたけラヴ" feat. ななひら as "エリンギ大好き"(第10回目配信楽曲）',
        title: "まみむめ🍄まるっと🍄まっしゅるーむ🍄🍄",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_01.mp3",
      },
      {
        artist: "Yu_Asahina(第10回目配信楽曲）",
        title: "The Clown of 24stairs",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_02.mp3",
      },
      {
        artist: "Hommarju(第10回目配信楽曲）",
        title: "The King Of Red",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_03.mp3",
      },
      {
        artist: "TAKU1175 ft.駄々子(第10回目配信楽曲）",
        title: "黎明の情",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_04.mp3",
      },
      {
        artist: "あの日字数制限に負けて追い出された「ゃ」(第10回目配信楽曲）",
        title: "I Left for my Right",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_05.mp3",
      },
      {
        artist: "nonomori feat. 亜沙美(第9回目配信楽曲）",
        title: "文月",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_01.mp3",
      },
      {
        artist: "U-ske feat.花柚(第9回目配信楽曲）",
        title: "charm♡you",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_02.mp3",
      },
      {
        artist: "kanone(第9回目配信楽曲）",
        title: "End of Guilty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_03.mp3",
      },
      {
        artist: "影虎。(第8回目配信楽曲）",
        title: "Continuous Moment",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_01.mp3",
      },
      {
        artist: "winddrums(第8回目配信楽曲）",
        title: "Restless Waitress",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_02.mp3",
      },
      {
        artist: "uma(第8回目配信楽曲）",
        title: "Chakra",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_03.mp3",
      },
      {
        artist: "凛々咲(第7回目配信楽曲）",
        title: "Aqua,Luna-rium",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_01.mp3",
      },
      {
        artist: "ろひ(第7回目配信楽曲）",
        title: "Vallasotiena",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_02.mp3",
      },
      {
        artist: "Yuta Imai vs Blacklolita(第7回目配信楽曲）",
        title: "2094",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_03.mp3",
      },
      {
        artist: "Takenoko boy feat. metyao(第7回目配信楽曲）",
        title: "G4ME ØVEЯ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_04.mp3",
      },
      {
        artist: "がるる(第6回目配信楽曲）",
        title: "WILD FIRE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_01.mp3",
      },
      {
        artist: "nora2r(第6回目配信楽曲）",
        title: "Cappuccino Hearts",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_02.mp3",
      },
      {
        artist: "MasKaleido feat. ぁゅ(第6回目配信楽曲）",
        title: "Xymatic Scope",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_03.mp3",
      },
      {
        artist: "brz1128(第5回目配信楽曲）",
        title: "FEEL THE FORCE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_01.mp3",
      },
      {
        artist: "榮田一貴 feat.冬乃桜＆永久毎日(第5回目配信楽曲）",
        title: "恋は君のそばでサクラサク",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_02.mp3",
      },
      {
        artist: "Yooh(第5回目配信楽曲）",
        title: "Enter The Fire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_03.mp3",
      },
      {
        artist: "u-z feat.紫咲ほたる(第5回目配信楽曲）",
        title: "M-O-R-F-I-N-E",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_04.mp3",
      },
      {
        artist: "上村香月(第4回目配信楽曲）",
        title: "神にした彼女が示す世界線",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/4_01.mp3",
      },
      {
        artist: "#Namescapes(第4回目配信楽曲）",
        title: "#Namescapes",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/4_02.mp3",
      },
      {
        artist: "立秋 feat.ちょこ(第3回目配信楽曲）",
        title: "りむむむむむむ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_01.mp3",
      },
      {
        artist: "さわわ feat.杠葉えりか＆凜々(第3回目配信楽曲）",
        title: "恋愛♡悪戯！？まじかる☆ぱふゅ～む！！",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_02.mp3",
      },
      {
        artist: "Aoi feat. Gra+yanshu(第3回目配信楽曲）",
        title: "運命超過乃巡合",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_03.mp3",
      },
      {
        artist: "Rigel Theatre(第2回目配信楽曲）",
        title: "Le Merle Noir",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_01.mp3",
      },
      {
        artist: "めと（Metomate）(第2回目配信楽曲）",
        title: "Vanishing Eidos",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_02.mp3",
      },
      {
        artist: "RoughSketch vs MAD CHILD(第2回目配信楽曲）",
        title: "Metagame Matador",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_03.mp3",
      },
      {
        artist: "seatrus feat.杠葉えりか(第2回目配信楽曲）",
        title: "木洩れ日に咲く",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_04.mp3",
      },
      {
        artist: "あるふぁ＋凜々(第2回目配信楽曲）",
        title: "恋獄対刃",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_05.mp3",
      },
      {
        artist: "fnylsp(第2回目配信楽曲）",
        title: "SuperMiracleEnsemble",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_06.mp3",
      },
      {
        artist: "テヅカ(第2回目配信楽曲）",
        title: "響く静寂",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_07.mp3",
      },
      {
        artist: "kuro(第1回目配信楽曲）",
        title: "Innocent Azure",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_01.mp3",
      },
      {
        artist: "しーけー(第1回目配信楽曲）",
        title: "Souhait bleu",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_02.mp3",
      },
      {
        artist: "Ponchi♪ feat.はぁち(第1回目配信楽曲）",
        title: "ラヴ♡チャンス!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_03.mp3",
      },
      {
        artist: "Aoi feat. Kuroa*(第1回目配信楽曲）",
        title: "月下の舞兎祭",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_04.mp3",
      },
      {
        artist: "つきみぐー、×如月結愛(第1回目配信楽曲）",
        title: "Now loading...",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_05.mp3",
      },
      {
        artist: "pan+テヅカ feat.桃雛なの(第1回目配信楽曲）",
        title: "Whip✩Drip",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_06.mp3",
      },
      {
        artist: "MALVA.(第1回目配信楽曲）",
        title: "Verstärkt Killer",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_07.mp3",
      },
      {
        artist: "Enterskip(第1回目配信楽曲）",
        title: "Fun walk!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_08.mp3",
      },
    ],
  },
  {
    id: "original28",
    name: "The 10th KACオリジナル楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_28.png",
    musics: [
      {
        artist: "MisoilePunch♪(第2回目配信楽曲）",
        title: "MixxioN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_01.mp3",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第2回目配信楽曲）",
        title: "Xb10r",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_02.mp3",
      },
      {
        artist: "打打だいず vs. siromaru(第2回目配信楽曲）",
        title: "十の試煉",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_03.mp3",
      },
      {
        artist: "かめりあ・超機裝旋楽隊(第2回目配信楽曲）",
        title: "Rhapsody ⚙f Triumph",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_04.mp3",
      },
      {
        artist: "影虎。(第2回目配信楽曲）",
        title: "火狐之舞",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_05.mp3",
      },
      {
        artist: "めと（Metomate）(第2回目配信楽曲）",
        title: "蝕",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_06.mp3",
      },
      {
        artist: "Juggernaut.(第2回目配信楽曲）",
        title: "refluxio",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_07.mp3",
      },
      {
        artist: "Silentroom(第1回目配信楽曲）",
        title: "XHRONOXAPSULΞ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_01.mp3",
      },
      {
        artist: "CHUBAY(第1回目配信楽曲）",
        title: "EncorE & cALL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_02.mp3",
      },
      {
        artist: "Ashrount(第1回目配信楽曲）",
        title: "AμreoLe ~for Triumph~",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_03.mp3",
      },
      {
        artist: "BlackY(第1回目配信楽曲）",
        title: "ZEUS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_04.mp3",
      },
      {
        artist: "CANVAS feat. Quimär(第1回目配信楽曲）",
        title: "All for One",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_05.mp3",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "Wings to fly high",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_06.mp3",
      },
      {
        artist: "U-ske feat. 棗いつき(第1回目配信楽曲）",
        title: "AIM HIGHER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_07.mp3",
      },
    ],
  },
];
