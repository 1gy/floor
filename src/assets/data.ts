export type SoundInfo = {
  artist: string;
  title: string;
  source: string;
  comment: string;
};

export type Contest = {
  name: string;
  banner: string;
  sounds: SoundInfo[];
};

export const contests: Record<string, Contest> = {
  remix01: {
    name: "第一回スピードアップコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_01.jpg",
    sounds: [
      {
        artist: "かめりあ(第１回目配信楽曲）",
        title: "サヨナラ・ヘヴン（かめりあ's NEKOMATAelectroRMX）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/11_ssayonara_heaven_kameria.mp3",
        comment:
          "初めまして！かめりあと申します。この度はSOUND VOLTEX BOOTHに収録して頂きありがとうございます。\nコンポーザーさんの中でも猫叉masterさんが一番好きで、色んな人に「多分かめりあくんが一番猫叉さん好きでしょ」と言われ、恐らく「IIDX全曲から1曲選んでREMIXして下さい」と言われていたとしても、サヨナラ・ヘヴンを選んだと思います。\nBPM150ですっ飛ばすチューンに仕上げてみました。\n溢れる情熱を感じて頂ければ幸いです。",
      },
      {
        artist: "IDEA+RHYTHM(第１回目配信楽曲）",
        title: ".59-BOOTH BOOST REMIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/12_59_idearhythm.mp3",
        comment:
          "はじめまして、IDEA+RHYTHM（アイデアリズム）と申します。\n燃え盛るコンテストのバナーと、疾走感200％というフレーズ。更に、SOUND VOLTEXの奥行きの有るインターフェイスから、「夜の高速道路で、オレンジ色の照明の中トンネルを走り抜ける」イメージで大決定（季節はもちろん夏）\n熱帯夜の暑さとフロアの熱量はさながら地獄の業火の如く。でも車内はエアコンが効いてるので快適だし天国ですね！？\nという感じだったり、そうでもなかったりするのですが（適当）BOOTHをBOOSTする一曲になれたら幸いです。",
      },
      {
        artist: "N-driver(第１回目配信楽曲）",
        title: "Ignited Night burst",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/13_ignited_night_ndriver.mp3",
        comment:
          "採用ありがとうございます！憧れのビーマニシリーズに楽曲を提供する立場になれて、自分でも驚いています。\nこのリミックスは遊びごたえ抜群な曲を目標に、プレイして遊びごたえ抜群になるべく試行錯誤を重ねたので、結果的にすごく遊びごたえ抜群な曲になったと思います。\n自分は声ネタの編集が得意なので、原曲を思いっきり崩した声ネタ群も遊びごたえ抜群に拍車をかけられたと思います。\n皆さんにもこの曲を遊んで頂き、遊びごたえ抜群感を感じてもらえたら嬉しいです！",
      },
      {
        artist: "D.F.K. Soundsystem(第２回目配信楽曲）",
        title: "GAMBOL(dfk SLC rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/14_gambol_dfk.mp3",
        comment:
          "皆さま初めまして！D.F.K.SoundsystemことDaisuke Ohnumaと申します。\nこの度はオリジナル曲だけではなくRemix曲も採用とのことで、本当にありがとうございます。\nさて、私がRemixコンテスト、と聴いて真っ先に連想したのは「Beatmania CORE REMIX」でした。\nあれから12年、CORE REMIXで私が大好きだったSLAKE氏によるRemix「greed eater(DEAL WITH IT MIX)」に想いを馳せながら作った、そのSLAKE氏の曲であるGAMBOLのRemixです。\nプレイしながら色々な部分にニヤリとしてもらえたら、それほど幸せなことはありません。",
      },
      {
        artist: "kamome sano(第２回目配信楽曲）",
        title: "Ganymede kamome mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/15_ganymede_kamome.mp3",
        comment:
          "のそー。のそのそっそ。のそのっそ。\nのそのの。のそーの。\nのそのそのーそ、のそっそのそそ。\nのそのっそっそ。\nのそそそ、のそそーのーそ、のそのそん。のそそのーそ。\n(訳)こんにちは。沙野カメと申します。鳥類から突然変異しました。\n採用されてとても嬉しいです。ありがとうございます。\nある1つの音色を作るのがとっても大変でしたが、なにしろ原曲がすばらしいので楽しく終えられました。\nみなさまも楽しんで頂けたら幸いです。\nところで、身も心も亀になって制作に臨んだのですが、元に戻れません。誰か助けて下さい。\n(翻訳：鴎田鴎太郎)",
      },
      {
        artist: "DJ Noriken(第２回目配信楽曲）",
        title: "SEED(DJ Noriken Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/16_seed_noriken.mp3",
        comment:
          'こんにちは！もしくは初めまして？SKETCH UP! RecordingsのDJ Norikenです！普段からハードコア作ってます！\nボルテFLOOR開始！ってことでリミックスコンテストに自分の好きな"SEED"がリミックス対象として入っていたので早速挑戦させて頂きました！受賞、マジで嬉しいです！\nなんとな～くですが、ちょっと"種から花"が咲きそうな雰囲気も醸し出していたりしているのでそのあたりもじっくり聞いてみていただけたらな～と思います！',
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Clione Hommarju Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/17_clione_hommarju.mp3",
        comment:
          "今回はkors kさんの「Clione」をリミックスさせて頂きました！\nこの曲いいよねー！泣けるよねー！\n10年以上も前の曲が形を変え、受け継がれ、これからも愛され続けていくんだなあと心から実感します。\nそんな歴史と進化の1ページに僕がお手伝い出来たことを光栄に思います！\n愛され続ける名曲を生み出したkors kさん、スタッフの方々にリスペクト！\nそしてプレイして下さる皆様に感謝の気持ちを込めて、「Clione Hommarju Remix」をお届けします！\nHommarjuでした！",
      },
    ],
  },
  original01: {
    name: "BPM145-180限定! ハイテンション4つ打ちインストオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_01.jpg",
    sounds: [
      {
        artist: "P*Light(第１回目配信楽曲）",
        title: "caramel ribbon",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/01_caramel_ribbon_plight.mp3",
        comment:
          "はじめまして！P*Lightです！\n普段はHARDCORE TANO*Cやelectro planetていうサークルで活動してます！\n自分は明るくてポップで早い曲が大好きなので、もうこれはやるしかない的な感じでやらせて頂きました！\n採用して頂いて本当に嬉しかったです！自分にコングラッチュレーションって言ってあげたい！\n曲はとにかく底抜けにハッピーでリア充感のあるものを目指しました！\n難しいこと抜きに、とにかく楽しんでもらえたら自分も最高に嬉しいです！\nよろしくお願いします！＞＜ノ",
      },
      {
        artist: "Daisuke Ohnuma(第１回目配信楽曲）",
        title: "香港功夫大旋風",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/02_hongkong_ohnuma.mp3",
        comment:
          "皆さま初めまして！Daisuke Ohnumaと申します。\nこの度はオリジナル曲が採用して頂けたとのことで、Beatmania4thmixの頃からのプレイヤーとして天にも昇るような気持ちです。本当にありがとうございます。\nさて今回の「香港功夫大旋風」ですが、ハイテンションと言ったらカンフーだよね！と閃いた通りに作った楽曲です。\nドラが鳴ったり、女性の掛け声が響いたり、中華風なメロディが聴こえたり…な、最初から最後までぶっ続けのハイテンショントラックなので、おだんごチャイナなカンフーガール達のハチャメチャカンフーバトルを想像しながらプレイして頂けたら嬉しいです。",
      },
      {
        artist: "はるなば(第１回目配信楽曲）",
        title: "レトロスペクティビリー・メリーゴーランド",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/03_retrospec_harunaba.mp3",
        comment:
          "この度は、「ハイテンション４つ打ちインストオリジナル楽曲コンテスト」の受賞を賜り厚く御礼申し上げます。\n今回私めが制作した楽曲のテーマは、SOUND VOLTEXの実機を見て近未来的な乗り物を連想したので、メリーゴーランドで宇宙に行くレベルの意味深(意味不明)でハイテンション(危険人物)になる曲を作りました。\n割とアコースティックな曲に仕上がりましたので、声ネタ満載でシンセサイザーが唸る様な模範的な楽曲ではございませんが、近未来な感じとレトロな雰囲を持つ風変わりなこの楽曲が迎え入れられる事を誠に嬉しく思います。\nそして何よりも皆様が実機で楽しく遊んで頂ける事を心から願っています。",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "Space Diver Tama",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/04_space_diver_kuroma.mp3",
        comment:
          "受賞、ありがとうございます。本当に嬉しいです！\nこの「Space Diver Tama」で意識した点は、聞いていて飽きない展開を作る事、自分らしさを出す事、押していて楽しい部分を作る事です。\nしっかりこの3つが出来ていればいいなあ、と思います！",
      },
      {
        artist: "Hommarju(第１回目配信楽曲）",
        title: "Onigo",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/05_onigo_hommarju.mp3",
        comment:
          "IIDXに続いて今回はSOUND VOLTEXに参加させて頂きました！\n音ゲー期待の新人であるSOUND VOLTEX君を鍛え上げるべくハードな音に仕上げた曲をご用意しました！\nアナログデバイスはヒジの角度を45度に！\nボタンを叩く時は華麗に！そしてしなやかに！\nクリア出来た時の感激はみんなで分かち合う！\nそんな楽しさと喜びを与えてくれるSOUND VOLTEXを「Onigo」の音と共にお楽しみください！\nHommarjuでした！\nどうぞよろしくお願いします！",
      },
      {
        artist: "kanone(第１回目配信楽曲）",
        title: "SOUL EXPLOSION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/06_soul_explosion_kanone.mp3",
        comment:
          "皆さんはじめまして、kanoneです！\n今回のコンテストの受賞は言うまでもなく嬉しいです！嬉しすぎてまだ実感がわかない部分も・・・\nさて、この「SOUL EXPLOSION」ラフの段階ではもっと大人し目の曲だったんですが、声ネタ、エフェクト等を加えていくうちに気づいたらなんということか、超ハイテンションな楽曲になりました。\n自分の得意なことを好き勝手にやりました、という感じです。\n最後に、この曲をプレイして楽しんでいただけたら幸いです！",
      },
      {
        artist: "Junk(第２回目配信楽曲）",
        title: "Fire Strike",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/07_fire_strike_junk.mp3",
        comment:
          "初めまして、Junkと申します。\n普段はelectro planetというリア充サークルを中心に同人音楽活動をしております。\nこの度はこのような企画に参加することが出来てとても光栄です。\n自分の思う最大級のハイテンションを２分間に詰め込みました。\nファイヤーでストライクな勢いを感じて頂ければ幸いです。",
      },
      {
        artist: "void(第２回目配信楽曲）",
        title: "World Vertex",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/08_world_vertex_void.mp3",
        comment:
          "はじめまして、この様な舞台に立たせてもらえ光栄な限りです。\n普段はMournfinaleという個人レーベルと、electro planetというリア充サークルで活動しているvoidです。どうかよろしくお願いします。\nBEMANIシリーズならではのハイテンションなサウンドと、強烈なインパクトを与えるための映画音楽的な要素を組み合わせました。\nまるでハリウッド映画の主人公になったかのような高揚感を与える事を意識して、ドラマティックな展開を心がけてみました。\n楽しんでいただければ幸いです！",
      },
      {
        artist: "RoughSketch(第２回目配信楽曲）",
        title: "Distorted Floor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/09_distorted_floor_roughsket.mp3",
        comment:
          '初めまして！札幌でNotebook Recordsというハードコアレーベルを運営しております。RoughSketch（ラフスケッチ）と申します。\nSOUND VOLTEXの４つ打ちインストコンテスト受賞、ありがとうございます！嬉しいです！\nボイスサンプルで協力してくれたDD"ナカタ"Metal氏も嬉しいって言ってましたよ！嬉しい嬉しい！\n音楽はかなり激しくて、ゴツくて、イカついGABBA、ハードコアテクノ系トラックです。\nプレイしていただけるとより一層嬉しいです！\nでは、次はフロアでお会いしましょう！',
      },
      {
        artist: "kamome sano(第２回目配信楽曲）",
        title: "freaky freak",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/01/10_freaky_freak_kamome.mp3",
        comment:
          "この曲は「BPM145-180限定!ハイテンション４つ打ちインストオリジナル楽曲コンテスト」という文を元に作りました。\nまずBPMの制限がありますが、私はアマノジャクなので145で作ることを決めました。\n遅くした分、リズム難度を上げるため連符を散りばめることにしました。その中で「ハイテンションな4つ打ち」なリズムとメロディーを構成しました。\nあとは涼しげな音にするためギターを追加して完成です。\n最後になりますが、作り方などどうでもいいので楽しんで頂ければ嬉しいです。\nどうぞよろしくお願い致します。",
      },
    ],
  },
  original02: {
    name: "レイシステーマ曲 -アナタ色に染めてくだサイ",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_02.jpg",
    sounds: [
      // TODO
    ],
  },
  remix02: {
    name: "dj TAKA 楽曲REMIX 1ST STYLE",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_02.jpg",
    sounds: [
      // TODO
    ],
  },
  original05: {
    name: "BEMANI Backstage テーマソングコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/BMBS_vtex_banner.gif",
    sounds: [
      // TODO
    ],
  },
  original04: {
    name: "GUMI限定！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_04.jpg",
    sounds: [
      // TODO
    ],
  },
  original06: {
    name: "KAC2012オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_06.jpg",
    sounds: [
      // TODO
    ],
  },
  original07: {
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_07.jpg",
    sounds: [
      // TODO
    ],
  },
  remix03: {
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_03.jpg",
    sounds: [
      // TODO
    ],
  },
  original08: {
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_08.jpg",
    sounds: [
      // TODO
    ],
  },
  remix04: {
    name: "東方紅魔郷リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_04.jpg",
    sounds: [
      // TODO
    ],
  },
  original10: {
    name: "夏だ！休みだ！自由研究オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_10.jpg",
    sounds: [
      // TODO
    ],
  },
  original09: {
    name: "ZOLA PROJECTオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_09.jpg",
    sounds: [
      // TODO
    ],
  },
  original11: {
    name: "KAC2013オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_11.jpg",
    sounds: [
      // TODO
    ],
  },
  original12: {
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_12.jpg",
    sounds: [
      // TODO
    ],
  },
  remix05: {
    name: "東方輝針城リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_05.jpg",
    sounds: [
      // TODO
    ],
  },
  original13: {
    name: "GUMI限定！オリジナル楽曲コンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_13.jpg",
    sounds: [
      // TODO
    ],
  },
  remix06: {
    name: "kors k楽曲リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_06.jpg",
    sounds: [
      // TODO
    ],
  },
  original14: {
    name: "第一回ボルテキャラテーマ曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_14.jpg",
    sounds: [
      // TODO
    ],
  },
  original15: {
    name: "SOUND VOLTEX VERSION 3 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_15.jpg",
    sounds: [
      // TODO
    ],
  },
  original16: {
    name: "The 4th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_16.jpg",
    sounds: [
      // TODO
    ],
  },
  remix07: {
    name: "東方妖々夢リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_07.jpg",
    sounds: [
      // TODO
    ],
  },
  original17: {
    name: "みんなでここなつをプロデュース！ オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_17.jpg",
    sounds: [
      // TODO
    ],
  },
  original19: {
    name: "The 5th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_19.jpg",
    sounds: [
      // TODO
    ],
  },
  remix08: {
    name: "アルバム「STARLiGHT」発売記念 Ryu☆リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_08.jpg",
    sounds: [
      // TODO
    ],
  },
  original20: {
    name: "SOUND VOLTEX IV 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_20.jpg",
    sounds: [
      // TODO
    ],
  },
  original21: {
    name: "The 6th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_21.jpg",
    sounds: [
      // TODO
    ],
  },
  original22: {
    name: "The 7th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_22.jpg",
    sounds: [
      // TODO
    ],
  },
  remix09: {
    name: "東方永夜抄リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_09.jpg",
    sounds: [
      // TODO
    ],
  },
  original24: {
    name: "The 8th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_24.jpg",
    sounds: [
      // TODO
    ],
  },
  original23: {
    name: "SOUND VOLTEX VIVID WAVE 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_23.jpg",
    sounds: [
      // TODO
    ],
  },
  remix10: {
    name: "BEMANI楽曲リミックスコンテスト ～2019～",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_10.png",
    sounds: [
      // TODO
    ],
  },
  original26: {
    name: "The 9th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_26.jpg",
    sounds: [
      // TODO
    ],
  },
  original25: {
    name: "コナステ版 SOUND VOLTEX 先行配信！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_25.jpg",
    sounds: [
      // TODO
    ],
  },
  original27: {
    name: "SOUND VOLTEX EXCEED GEAR制作決定記念 キャラクターテーマ楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_27.png",
    sounds: [
      // TODO
    ],
  },
  original28: {
    name: "The 10th KACオリジナル楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_28.png",
    sounds: [
      // TODO
    ],
  },
};
