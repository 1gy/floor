export type SoundInfo = {
  artist: string;
  title: string;
  source: string;
  comment: string;
  removed?: boolean;
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
      {
        artist: "源屋(第１回目配信楽曲）",
        title: "Ray",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/09ori_ray_minamotoya.mp3",
        comment:
          "はじめまして、源屋だったりKazuPだったりする者です！\nレイシステーマ曲ということで、どういう形にしようか色々と考えた結果、\nゲーム画面や収録楽曲、FLOORのテーマから伝わる「疾走感」やアナログデバイスやロングボタンを使って光を操るゲームシステム、\nプレイヤーも参加できるSOUND VOLTEX BOOTH / FLOOR をまとめてレイシスのテーマとして表現してみました！\nSOUND VOLTEXのオープニングテーマみたいな雰囲気の曲になったと思います！\n楽しんで頂ければ幸いです！！よろしくお願いいたします！",
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Soundscape",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/10ori_soundscape_hommarju.mp3",
        comment:
          "今回はレイシステーマ曲を制作しました！\n果たしてレイシスとは一体何者なのか…\nどこからやってきて何が目的なのか…\nなんとこの曲で…！ついにその全てが！\n明かされることはないですが！！\nこの歌とレイシスを通じてSOUND VOLTEXプレーヤーのみなさんを応援します！\nHommarjuでした！",
      },
    ],
  },
  remix02: {
    name: "dj TAKA 楽曲REMIX 1ST STYLE",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_02.jpg",
    sounds: [
      {
        artist: "Dustboxxxx(第１回目配信楽曲）",
        title: "Blue Rain Dustboxxxx RMX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/01remix_bluerain.mp3",
        comment:
          "皆様初めまして、Dustboxxxxと申します。この度はこのような企画に参加することができて、大変光栄に思っております！！古くから続くBEMANIシリーズに自分が参加できるとは感無量ですｗ\n普段はPsycho Filth Recordsやろりすたいる☆がばーずというレーベルでハードコアテクノ方面で活動しています。\nボルテは稼働初期からずっとやっていまして、非常に楽しみながら遊んでます！\nBluerainはTAKAさんの曲の中でもかなり好きな曲で、今回は自分なりの疾走感を押し出したスタイルを貫きつつ、つまみや鍵盤やエフェクトがここでこう入るといいなあ・・・と思いながらリミックスしてみました。\n楽しんでいただけたら幸いデスヽ(〃▽〃 )ﾉ",
      },
      {
        artist: "borzy(第１回目配信楽曲）",
        title: "Abyss (sharp stepp remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/02remix_abyss_borzy.mp3",
        comment:
          "beatmaniaIIDXの名曲、「Abyss」は時を経て、SOUND VOLTEXへ\n。あの　どこまでも深く青い世界は、色を変え、姿を変えて、今度は光のトンネルを駆け抜ける。\n疾走感175%で　鋭利なドラムンデバイスを体感せよ！\n…そんな曲です。（？）\nぜひお近くのアミューズメント施設で体感してみてください！\nはじめまして、borzy（ボージーと読みます）と申します。\nbemaniシリーズは、自分がテクノやダンス音楽などを知るきっかけにもなったゲームなので、ご採用いただけて大変嬉しく思います。\n今回採用される自体奇跡的に思ってますが、前からの夢の１つだったIIDXへの楽曲提供を目指して、また頑張ってコンテスト楽曲作っていきたいと思います。",
      },
      {
        artist: "PHQUASE(第１回目配信楽曲）",
        title: "rainbow flyer -gratitude remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/03remix_rainbowflyer_phquase.mp3",
        comment:
          "ハジメマシテ！？PHQUASEデス！！ふかせと読みマス！！\nあー、レイシスちゃんホント可愛いなぁ。はわわっ＞＜\nさて、dj TAKA楽曲リミックスコンテスト、ということで迷うことなく選んだのは「rainbow flyer」！\n空を漂っているようなイメージを湧き立てられる素敵で最強な楽曲です。\nリミックスはすんなり・・・とはいかず、正直とても苦悩しながらの制作になりましたが、遊んでいると筐体ごと体が空へ吹っ飛んじゃいそうな、そんなリミックスになったかと存じますジュゥン！\n是非レイシスちゃんと一緒にプレイしてみて下さいね！！\n何卒！！",
      },
      {
        artist: "C-Show(第１回目配信楽曲）",
        title: "Tomorrow Perfume (C-Show Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/04remix_tomorrow_perfume_cshow.mp3",
        comment:
          "はじめまして。C-Showと申します。\n音楽ゲーム関連のＣＤを購入したのはmilestoneが初めてで、その中でもTomorrow Perfumeが一番好きだったこともあり、この楽曲をリミックスしました。\n原曲の心地よい爽快さに、BEMANI音楽に対するリスペクトそれと自分なりのBEMANI音楽の解釈を取り入れ、２分間という時間をドラマチックに演出してみました。\n中盤のブレイクはdj TAKA氏へのオマージュです。",
      },
      {
        artist: "t+pazolite(第２回目配信楽曲）",
        title: "Tomorrow Perfume (tpz Despair Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/05remix_tomorrow_perfume_tpazoli.mp3",
        comment:
          "はじめまして！HARDCORE TANO*CやC.H.Sやその他諸々で活動してるt+pazoliteです！\n「とぱぞらいと」って読みます。大抵てぃーぷらす…？って言われます。かなしい。\nこの度はリミックス採用本当にありがとうございます！\n原曲の「なんかこう明日が希望溢れる感じ」を思いっきり絶望に染めてみましたが、良い感じにバッドエンドに染まったんじゃないでしょうか。\n是非是非皆様は絶望に負けず、クールにクリアしちゃってくださいませ。",
      },
      {
        artist: "Yu_Asahina(第２回目配信楽曲）",
        title: "Freeway Shuffle -More2 HAPPY Re-Mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/06remix_freeway_shuffle_yuasahina.mp3",
        comment:
          'イェイワッツアップオール、アイム Yu_Asahina。（この形式すごく被りそう）\nはじめまして！アサヒナユウとも言います。英語のがしっくりきたので、英語で。\n自称作編曲家だったり、クラムノプというサークルをやってたりーなどします。\n"beatmania" から今までビーマニシリーズのフォロワーを続けている身としては、\nこのような機会、光栄に思います。\nFreeway～は、失くすには惜しいエッセンスだらけなので王道でいったろうと思いました。\nこの曲、DDRでやると物凄くマッチしていて驚きます。\nなので、SDVXでやると物凄くマッチしていて驚く感じになってたら幸いです。\nとにかく楽しんで作ったのでテンションがものすごい。なので、以下略。\nそう最近、すごく運がいいんですよ。この曲は縁起物であり開運にも一役買うに違いありません。\nこの曲が誰かと誰かを繋ぐきっかけになっていけば幸いです。\nフィールザビート！イェイ！ではまた！',
      },
      {
        artist: "Maozon(第２回目配信楽曲）",
        title: "pandora (Maozon Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/07remix_pandora_maozon.mp3",
        comment:
          "こんにちは！こんばんは！初めての方は初めまして！\nこの度はこのような舞台に立たせていただきまことに光栄でございます！\nありがたきしあわせ！！\n曲に関しては言うことはあまりないです。\nプレイして！楽しんでください！！\nうごご。",
      },
      {
        artist: "BlackY(第２回目配信楽曲）",
        title: "AA BlackY mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/02/08remix_aa_blacky.mp3",
        comment:
          "皆さんこんにちは、BlackYです！pop'n musicに続いてSOUND VOLTEXへの参戦となります！採用していただいて超嬉しいです。ありがとうございます！\n僕が強く影響を受けたアーティストの一人でもあるdj TAKAさんの楽曲リミックスで参加できるなんてまるで夢のようですごく胸が熱いです！！\n僕なりに「AA」から伝わってくる世界感を残しつつ、それにSOUND VOLTEXの世界感やイメージもあわせて僕のBEMANI愛と情熱(？)をフルに注ぎ込んだ熱くて熱いリミックスになったなあと感じられ！SOUND VOLTEXの熱いエフェクトをギュインギュインかけてさらに熱く盛り上がっていただけると非常に幸いです！",
      },
    ],
  },
  original05: {
    name: "BEMANI Backstage テーマソングコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/BMBS_vtex_banner.gif",
    sounds: [
      {
        artist: "ismK(11月8日配信楽曲）",
        title: "V.I.P.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/05/vip_ismk.mp3",
        comment:
          "どうも初めまして、ismK（イズミケイ）というものです。\nこの度は、採用していただき本当にありがとうございました。\n楽曲はラジオのBGMということを念頭に、BEMANI楽曲から受けた影響とリスペクトを込めつつ、\nとにかく明るく元気にそしてポジティブかつアッパーにを心がけました。\nそれに加えて、ゴアトランスを意識してインドやアラブといったあの辺の怪しい旋律を途中に突っ込むことで、ラジオのあのどことなく混沌とした感じが出せたらなと。\nそんなあれこれは置いておいて、この楽曲が皆様に受け入れていただければ幸いです。\n------------------------------------------\nDJ YoshitakaとCodyがゲストの\n（8:00あたり～）で決定したBEMANI Backstageテーマソング募集。\nで遂に結果発表となりました！Webラジオも是非チェック！！",
      },
    ],
  },
  original04: {
    name: "GUMI限定！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_04.jpg",
    sounds: [
      {
        artist: "じろうす",
        title: "灰色の空想をつかんで",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/01_gumi.mp3",
        comment:
          "はじめまして！じろうすです！\n実はSOUND VOLTEXは、ぼくを人生で初めてゲームセンターに通うキッカケにしてくれたゲームで、本当に思い入れがあり、大好きなゲームです。\n今回、GUMI限定！オリジナル楽曲コンテストということで、やはりGUMIといえば、ぼくの中では真っ直ぐなロック！ということで、この楽曲で挑戦させて頂きました！\nみなさんがこの楽曲をプレイ、体感されて、何か伝わればと思います！\nぜひたくさん遊んで、楽しんでください！ぼくもプレイしにいきますよー！",
      },
      {
        artist: "さたな",
        title: "MANDARA(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/02_gumi.mp3",
        comment:
          "さたなと申します。\n僕の楽曲を収録して頂けることを嬉しく思います。\nお祭りみたいなどんちゃんした感じの楽曲になりましたので、楽しく遊んでいただければ幸いです。\n最後に、この楽曲以外にもニコニコ動画にいくつか楽曲を投稿しておりますので、出来ればそちらの方も宜しくお願い致します。",
      },
      {
        artist: "uno(IOSYS)",
        title: "センチメント(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/03_gumi.mp3",
        comment:
          "二度目まして！札幌でIOSYSというサークルに所属しております。uno（ウノ）と申します。\nGUMI限定！オリジナル楽曲コンテスト受賞、ありがとうございます！嬉しいです！\n作詞で協力してくれたオミ織葉(IOSYS)氏も嬉しいって言ってましたよ！嬉しい嬉しい！\n音楽はポップで、ちょっぴりおセンチなハウス、テクノポップ系トラックです。\nプレイしていただけるとより一層嬉しいです！\nでは、次はその辺でお会いしましょう！",
      },
      {
        artist: "uno(IOSYS)",
        title: "Disagree Feelings",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/04_gumi.mp3",
        comment:
          "初めまして！札幌でIOSYSというサークルに所属しております。uno（ウノ）と申します。\nGUMI限定！オリジナル楽曲コンテスト受賞、ありがとうございます！嬉しいです！\n作詞で協力してくれたオミ織葉(IOSYS)氏も、ギターを弾いてくれたminami(IOSYS)氏も嬉しいって言ってましたよ！嬉しい嬉しい！\n音楽は切なくて、アツくて、切ないJ-CORE、ユーロビート系トラックです。\nプレイしていただけるとより一層嬉しいです！\nでは、次はマッチングでお会いしましょう！",
      },
      {
        artist: "stereoberry",
        title: "ナツノメイロ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/05_gumi.mp3",
        comment:
          "初めまして、stereoberryと申します。\n普段はelectro planetというリア充サークル(こう書けってメンバーに言われました)で信州の野鳥を観察したり、同人音楽を制作しております。\n自分の楽曲がBEMANIシリーズに収録される夢が現実のものとなり、筆舌に尽くし難い喜びを噛み締めております。ありがとうございます。嬉しさのあまり自宅で床ローリングをキメる日々です。\n夏の海ではしゃぐGUMIの姿を思い描いて作りました。水着GUMIかわいい！\n季節は巡りもうじき冬がやってきますが、皆様にも夏の空気を思い浮かべつつプレイして頂ければ幸いです。\n※こちらの作品はジャケットも一緒に採用されました！\nイラストレーター名：斉藤アキ\n皆様はじめまして！斉藤アキと申します。\nこのたびはstereoberry氏と共に採用していただきまして、大変光栄に思っております。\n夏っぽい雰囲気の曲に合わせ、海！波！青春！なGUMIを描きました。\n作業中、これがもし採用されるとしたら季節は冬真っ最中なのでは…と思ったりもしましたが、\n「次の夏こそは海に行ってキャッキャウフフしたり、夕焼けの海に向かって叫んだりしたいなぁ」\nと感じて頂ければ作者冥利に尽きます。",
      },
      {
        artist: "shin",
        title: "true feeling？～本当の気持ち♪～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/06_gumi.mp3",
        comment:
          "いつも一緒にいる友達に、ある日、自分が恋しているのかも？と、急に意識してしまいドキドキする女の子の物語です♪\nアニメのOP or ED等やアイドル用等の楽曲でありそうなイメージでリズムゲーム用を意識して制作しました（「Bメロ中盤（どっち）」，「サビ前のキメ」，「サビ途中の4分音符での刻みの上りと下がり」，「1回目のサビ後半」，「2回目のサビ後半」「アウトロ最後」等、リズムを決めると気持ちよくなるようなアレンジ等）。\n『ドキドキ感』を「ちょっぴりコミカルな歌詞」と「キャッチーなメロディー」と「upテンポのPOPな曲調」でまとめてみました。\nゲーム内の高速でクールなダンスミュージック達の合間に、こういったPOPで元気になるような楽曲があると良いなぁ、と思いました。\n私の音楽をコナミデジタルエンタテインメント様の技術力で魅力的なゲームとして皆様に遊んで頂けるとは、本当に楽しみです♪ありがとうございます！！",
      },
      {
        artist: "飛鳥男",
        title: "夕焼のナパーム (SDVX Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/07_gumi.mp3",
        comment:
          "株式会社コナミデジタルエンタテインメント 御中\nこの度は、僕ら NOMI and ASKA の楽曲を採用して頂いて、誠に有難う御座います。\n最後になりますが、全国の SDVX 愛好家の皆様、そして御社の今後増々の御発展と御活躍を陰ながら御祈り申し上げております。\n追伸: コナミさん、いつでも楽曲作成の依頼お待ちしておりますので\n宜しくお願い申し上げます。╭☞(•́⍛•̀)☜╮\n2012年11月16日\n飛鳥男™",
        removed: true,
      },
      {
        artist: "Toma+o",
        title: "境界インサニティー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/08_gumi.mp3",
        comment:
          "豆腐だいすき\n※こちらの作品はジャケットも一緒に採用されました！\nイラストレーター名：くまお\nハムだいすき",
      },
      {
        artist: "Noriyuki",
        title: "BlueSky(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/09_gumi.mp3",
        comment:
          "はじめましてNoriyukiと申します！\nこのたびは楽曲採用して頂き大変ありがとうございました。\n自分なりにSOUNDVOLTEXのイメージを研究して音作りをしていったのでこのような結果が出せてとてもうれしいです。\n楽曲に関しては細かいこだわりは沢山あるのですが基本はシンプルな元気8ビートソングなので気軽にゲーム上で楽しんで頂けたらうれしいデス！",
        removed: true,
      },
      {
        artist: "はるなば",
        title: "金縛りの逢を(ジャケットコンテスト対象曲）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/04/10_gumi.mp3",
        comment:
          '皆さんこんにちは！"はるなば"と申します。\nこの度は、「GUMI限定！オリジナル楽曲コンテスト」の採用を賜り厚く御礼申し上げます。\n腕前はまだまだですが、SOUND VOLTEXで遊ぶのが最近の楽しみなので本当に感謝です。\n今回はGUMI限定！と言う事でこのボーカル音源を使用させて頂きましたが、パワーある歌声で出来に満足しています！\n皆様は金縛りになって割と黒髪の美少女に遭遇されると思いますが、今回はそんな経験を基に最近流行りの日常系ポジティブ・ホラー・恋愛ファンタジーなる曲を製作致しました！\n金縛りの細かな原理が重要な曲ですが、それは扨措き音楽ゲームとして楽しんで頂けたら誠に幸いです！',
      },
    ],
  },
  original06: {
    name: "KAC2012オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_06.jpg",
    sounds: [
      {
        artist: "ginkiha(第１回目配信楽曲）",
        title: "EGG",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/01.mp3",
        comment:
          "どうもginkihaと申します～ 初めまして。\n普段は同人サークル「NIZI-RINGO」にて作編曲しております。\n音ゲーは大好きなものの上手くはなく，KACには挑戦したいんだけども……と思っていたところ\nこういった形で参加でき、更に採用までしていただけて本当に嬉しい限りです。\nさてこの曲ですが，KAC2012のコンテストでかつボルテの曲ということで、\n疾走感溢れる本気系Drum'n'Bassを目指して作りました…！\n楽しんでいただければ幸いです…！v('ω')",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "大宇宙ステージ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/02.mp3",
        comment:
          "こんにちは、黒魔です！\n受賞、とても嬉しいです。\nとても幸せです。ありがとうございます！！\n今回は速い曲を作りたかったので、作ってみました。\n戦っている場面を想像しながら作ったので、そういう緊迫感や疾走感を曲に表すことが出来ていればいいなあ、と思います！",
      },
      {
        artist: "siromaru(第１回目配信楽曲）",
        title: "Absurd Gaff",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/03.mp3",
        comment:
          "はじめまして、siromaruと言います。\n普段は会社員しながらHEKATONCHEIR BEATSというサークルで活動してます。\n13年ほど前、PS版ビートマニアを友人の家で遊んだのがきっかけで\nBEMANIシリーズにのめり込み、そのまま作曲活動にまで至った身としては、\nこの度の採用は本当に本当に嬉しいです！！\n本楽曲のジャンルはSDVXにありそうで無かったSchranzです。\nタイトルだけ見ると一部の方はもしかするとご存知の曲かもしれませんが、\nまさにボルテナイズとばかりにゴリゴリにパワーアップしてます。\n楽しく遊んでいただければ幸いです。\n＼＼＼＼＼ L( ﾟ 〆ﾟ )┘／／／／／",
      },
      {
        artist: "nora2r(第１回目配信楽曲）",
        title: "VISION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/04.mp3",
        comment:
          "はじめまして、nora2rというものです。\n私も例に洩れずBEMANI作品に触れてDTMを始めたタイプの人なので、今回の採用はとても嬉しいというか、\n実感がわかないというか、未だに実はドッキリなんじゃないかと少し疑っています。夢みたいです。\n楽曲については、ゲーム性と音楽性の両方を交互に意識しメリハリが効いたものになるようにと心掛けて制作しました。\nメロディからアンセム感が少しでも伝わるといいなァと思います。\nそれではどうぞよろしくお願いします。楽しんでいただければ幸いです！",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "線香花火 SDVX edit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/05.mp3",
        comment:
          "採用頂きありがとうございます！\n8月も第18週辺りに入りましたがみなさんいかがお過ごしでしょうか。\n夏といえば花火、花火といえば線香花火ということで、線香花火な感じの曲です！\n楽しんで頂けたら幸いです^^",
        removed: true,
      },
      {
        artist: "P*Light(第１回目配信楽曲）",
        title: "TRIGGER★HAPPY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/06.mp3",
        comment:
          "KACということで、いわゆるボス曲的なものを作ろうと考えたわけですが、\nシリアスでカッコイイボス曲はすでにいっぱいあるなぁと思い、\nならとびきりキャッチーでハッピーなボス曲があってもいいのかな、という感じで出来たのがこの曲です。\nいや、明るい曲しか作れないとかそんな事はないんだよ！！\n中盤のジャンルごちゃ混ぜ地帯とか、いろんな要素盛りだくさんな楽曲となっております。\nぜひジャケットのアメコミ調P子とともに楽しんで頂ければと思います！\nP*Lightでした！イェーイ↑↑フゥフゥ↑↑\n※こちらの作品はジャケットも一緒に採用されました！\nイラストレーター名：はちぷよ\nニコちゃんヘッドフォンと白いリボンのサイドテールがトレードマーク！名前はP子と申します！\n今回はTRIGGER★HAPPYという事でハッピーを乱射するなんちゃってギャングになって頂きました！！やったやったー！\nP*Lightさんの楽曲はいつも底抜けに明るくて聞いてるととってもハッピーな気持ちになれるのでそんな気持ちがこのイラストから少しでも伝われば嬉しいです！！\n曲共々愛されるジャケットになれればとってもハッピーになれるのでよろしくお願いします！！\nはちぷよでした！イェーイ↑↑フゥフゥ↑↑(P*Light風)",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "éclair au chocolat",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/07.mp3",
        comment: "KAC！\n14文字変えたらéclair au chocolat！",
      },
      {
        artist: "C-Show(第２回目配信楽曲）",
        title: "PANIC HOLIC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/08.mp3",
        comment:
          "どうも、明日香CのCのほう担当C-Show（ししょう）です。再びサウンドボルテックスに収録されることになり非常に嬉しく思います。\n前回の明るさとはうってかわって、今回のテーマは「頭のネジが5本くらい取れたっ」です！\n朝起きた時間が集合時間だった・電車で寝過ごした・締切が今日だった・台風で傘が壊れた。\nそんなパニック状態になった日には、そのストレスをこちらの楽曲で発散していただければと思います。",
      },
      {
        artist: "Yooh(第２回目配信楽曲）",
        title: "Dynasty",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/09.mp3",
        comment:
          "初めまして！Yoohと申します。\nこの度、SOUND VOLTEXにて楽曲が採用されたことを非常に嬉しく思っております！\nこのゲームをプレイしながら、いつか自分の楽曲が採用されたらいいな～なんて思っていました。\nFLOOR採用が一つの夢でした。それが現実のものとなって本当に感激です！\nさて、この「Dynasty」という曲は「KACで王者を決める！」ということで古代の大帝国みたいなもの（？）をイメージして作りました。\nかっこよさと迫力を追及し、３拍子にすることでさらに疾走感を出してみました！\nこの曲をプレイして、楽しんで頂ければ幸いです！！\n是非、プレイしまくってみてくださいね！！",
      },
      {
        artist: "TeamGrimoire+あま猫(第２回目配信楽曲）",
        title: "croiX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/10.mp3",
        comment:
          "初めまして、TeamGrimoireと申します。\nオリジナル曲が筐体に入るとは…　心から喜ばしい限りです。\n惜しくも決勝戦の曲とはなりませんでしたが、\n筐体でプレイできる　それだけでも手の震えが止まりません。\nドラムパートはあま猫さんにご協力頂いた合作です。\nいかに難しさと絶望を与え、プレイヤーをズンドコに落とすか考えながら作曲致しました！\nタイトルの意味は「十字架」です。　TRUCK CLASHの磔にされないように…\n是非楽しんで立ち向かってみてください！\nTeamGrimoire\nドラムパート担当あま猫です。ハードコアな気まぐれ猫がゴシック調に誘われて、\n踊り暴れた末に見る十字架は歪んでいました。ありがとうございます。\nあま猫",
      },
      {
        artist: "Hommarju(第２回目配信楽曲）",
        title: "Gott",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/11.mp3",
        comment:
          "あなたは今、神の御前に立っている。\n全ての音を手に掴み、奏で揃えてきた先に待っていた最後の試練。\n誰も立ち入ったことのないその境地に、身をもって挑むことになる。\n神を倒し、覇者の証をその手に掴め...！\nKAC2012を勝ち抜いたSOUND VOLTEX初代チャンピオンに輝くのは誰かな！\nみんな頑張ってねー！\nHommarjuでした！",
      },
      {
        artist: "BlackY(KAC決勝楽曲）",
        title: "Max Burning!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/06/12.mp3",
        comment:
          "皆さんこんにちは、BlackYです。。\n今回はKAC2012決勝ステージ専用楽曲ということで僕の中のイメージで「SOUND VOLTEXのラスボス曲」を作ってみました。\nKAC最終決戦は熱く、燃えるような闘いになると思い、「Max Burning!!」という曲名・テーマで制作しました。\n最優秀作品に選んでいただけて非常に嬉しいです！僕の気持ちも今まさに「Max Burning!!」状態です。\n難しい譜面を想定して作ったのでクリアは大変になるかもしれませんが、もしそうならばったら頑張ってクリア目指していただければかと思いマス！！\n本当にありがとうございました！！",
      },
    ],
  },
  original07: {
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_07.jpg",
    sounds: [
      {
        artist: "Music by 源屋, Vocal by SOPHY",
        title: "Hello world!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/05.mp3",
        comment:
          "コラボレーションコンテスト!とのことで、一体どんなボーカルさんが歌ってくれるのかなと色々な想像を巡らせながら作りました！\nひたすらに明るく可愛く前向きに楽しくハイテンションなガールズポップを目指したので、是非ともプレイして楽しんでください！！\n源屋でした！！！\nはじめまして、普段はナースとして働いていますSOPHYです。\nこの度はボーカル部門での採用、誠にありがとうございました。\n作曲された源屋さんにもこの場をお借りして厚く御礼申し上げます。\n今回歌わせて頂いた「Hello world!」では、ボルテを通して新しい世界に飛び込むことができた自分の気持ちを思いっきりぶつけて、自分らしく歌うことができたかなと思います！\nプレイして下さった皆さんがハッピーな気持ちになってくれたらすごく嬉しいです！\nそして、ゲームセンターでPUC100回達成する位の勢いでいっぱい楽しんで下さい！",
      },
      {
        artist: "Music by Ryuwitty, Vocal by Kuroa*",
        title: "The world of sound",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/06.mp3",
        comment:
          "Ryuwittyと申します。\nこの度は曲を採用いただきありがとうございました。\n採用通知が来たときは本当に驚き、一瞬置き、ブワッと激喜びました。\nメロディーはキャッチーさを意識しましたが、無謀にも出来ない英語で書いた歌をどんなボーカリストさんが歌ってくれるのか非常に楽しみです。\nピアノ協奏曲：The world of sound　を楽しんでプレイしていただけたら幸いです。どうぞよろしくお願いします！\nなんと二度目まして！Kuroa*です。\n「The world of sound」歌わせていただきました。\n浮遊感があってすごく不思議で綺麗な曲で初めてデモを聴かせていただいた時には\nおもわず「うわー・・・！すごいですね・・・！」となんとも語彙の足りないコメントをしてしまいました。\nそしてなんとこの楽曲は全英語歌詞ということで普段あまり英語歌詞を歌わないため非常にドキドキしております。英語さんとは仲良くしなくてはいけないな、と改めて思いました。\nこの曲はエフェクトがかっこよくきまったら相当気持ちいいだろうな・・・と今から自分でもプレイできるのを楽しみにしています！\nそれでは、ゲームセンターでお会いしましょう！",
      },
      {
        artist: "Music by MasKaleido, Vocal by ぁゅ",
        title: "STARDUST MERMAID",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/07.mp3",
        comment:
          "はじめまして、MasKaleidoと申します。\n映像/音楽創作集団「SOUND HOLIC」等で活動しております。\nオリジナル楽曲コンテストということで、今回は思い切って個人で応募したところ、まさかまさかの採用を頂き、本当にありがとうございました！\n作詞で協力してくれたBlue Eさんにも感謝です。\nテクノポップな楽しい曲になったと思いますので、是非ぜひ遊んでみて下さい。\nこんにちはー！ぁゅです！！！\n今日も元気に歌ってます～！\nみなさんボルテ楽しんでますか！？？\n今回はSOUND HOLICさんの「STARDUST MERMAID」を歌わせていただきました！\nキラキラで優しくて、女の子の好きの気持ちがつまった素敵な楽曲です！！\n好きだけど好きすぎて言葉にできないという、切なさというか甘酸っぱさが伝わったらと思って歌いました！\n胸きゅんすること間違いなしの１曲です、たくさん遊んでくださいね！",
      },
      {
        artist: "Music by 上村香月, Vocal by みゅい",
        title: "七色のウタ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/08.mp3",
        comment:
          "初めまして！上村香月と申します。\nこの度は採用ありがとうございます！\n初代ビートマニアからプレイしてきて（HAPPY SKYあたりで挫折しましたが...）\nまさか自分の楽曲がBEMANIシリーズのアーケードゲームに収録されることは本当に嬉しい限りです。\n一つ夢が叶った感じです。\n収録されたら早速プレイしに行きたいと思います！\nSDVX収録を目指すクリエイターの皆様、制作活動諦めず頑張ってください！！\nこんにちはー！みゅいです。\n今回の採用曲2曲目はこちら「七色のウタ」ということで、前回の「超恋愛☆エクストリームガール」とはかなり雰囲気の違う曲を上村香月さんより提供していただきました。ありがとうございます。\n心機一転、曲の雰囲気をイメージしながらしっとりと、思い出を探るような曲に仕上げました。\n儚い思い出に浸りながらつまみを捻る…ああなんて素敵なことでしょう…(＊´ω｀＊)\nというわけでよろしくお願いします。\nみゅいでした！",
      },
      {
        artist: "Music by 音遊人 -mu-jin-, Vocal by みかん汁",
        title: "ずっとそばにいさせてよね！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/09.mp3",
        comment:
          "皆様、おはこんばんにちは！ 「音遊人 -mu-jin-」と申す者です。\nこの度は、こういう機会を与えてくださいました皆様に、本当に感謝申し上げます。\n昔から、「自分の曲が、音ゲーに入ったらいいなぁ」と、夢に思っていたことが、今回、実現しようとしているのですから！\n私の夢はさておき。\nコラボレーションコンテストということで、もう一つの「VOCAL部門」にて選出された方に、歌っていただけるという、なんと素晴らしい企画でしょうか！\nどういう感じになるのか、非常に楽しみでございます。\n曲の方は、「片思い！？両想い！？」的な、ほんのり淡い恋愛ソングな感じになっております。\nSOUND VOLTEXには、あまり似合わない曲かもしれませんが、他のゲームにも移植されたらなんて、ちょっとした希望を持ちつつ作りました。\n見かけた際には、是非是非、選曲して遊んでみてくださいませませ！\nではでは～。\nお初にお目にかかります、みかん汁です。\nこの度は、光栄にもSDVXボーカルとして採用頂きました！\n普段は特にクリエイティブな活動を行なっていない、\nしなびた女子高生なので、本当に驚いています。\nサンボルプレイ中の告知を見て、\nもしも…まさか！と思い応募してみたのがきっかけでした。\nそんな状況なので未だに少し信じられていませんが、\n筐体から自分の歌が流れるのを想像して、よだれをたらす日々です。\n早くプレイしたい！",
      },
      {
        artist: "でもたまに居場所とか見失うかぼちゃ",
        title: "僕たちは此処にいる",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/01.mp3",
        comment:
          "「こいつ！　SDVX採用されても浮かれたりしないだと！　本当は嬉しくて字数制限いっぱいに痛い自分語りしたいのに何て冷静っぽい我慢！只者じゃない感じもしないでもないような気配もあったりなかったりするし強烈なプレッシャーっぽいのを感じる人は感じるかも知れん！こいつ、できる！先に動いた方が負ける！こいつ、こいつぅー！」と言う演出の為多くは語れませんが、この度は大変な名誉をありがとうございます。\n本当にありがとうございます。とても嬉しいです。拙い作品ですが是非遊んであげてください。\n浮かれてません。",
      },
      {
        artist: "Music by コバヤシユウヤ, Vocal by Kuroa*",
        title: "Life is Beautiful",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/02.mp3",
        comment:
          "うおおおおおおおおお！！！！サンボル採用ありがとうございます！！！！\nはじめまして！コバヤシユウヤと申します！\n普段は同人サークル「イオシス」でvoidというHNで活動しています。\n念願のアーケード音ゲーです！感無量です！！\n今回は最近好きで良く聴いているピコリーモのコロコロと展開やBPMが変わる要素を意識して、\nしっとりとしたピアノからシンセ、ギターが入りどんどん激しくなっていく、という曲を目指して作りました！\nぜひぜひ何度も選曲して、楽しんでいただけると嬉しいです！\nはじめまして。Kuroa*と申します。\n普段はうたう方でなく曲を作る勉強をしていたりします。\n今回、ボーカリストとして採用していただいて\nほんっとうに嬉しく思います！！\n憧れ続けた音楽ゲームに自分が歌った歌が入るなんて\nいまだに夢でもみてるんじゃないかとふわふわした気持ちです。\n「Life is Beautiful」という素敵な楽曲と巡り合え、歌わせていただけたということも\nすごくすごく大事な経験になりました。\nロック！ギター！カッコイイ！三拍子そろっていて歌っていてとても興奮しました・・・！\nぜひ、遊んで頂けると嬉しいです！では、ゲームセンターで会いましょう！",
      },
      {
        artist: "Music by PHQUASE, Vocal by ぁゅ",
        title: "draw!!!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/03.mp3",
        comment:
          "どうも、PHQUASEです。ふかせと読みマス！！\nあー、レイシスちゃんホント可愛いなぁ。はわわｗ！\nこの度なんと「draw!!!!」が採用されました、ありがとうございます！！！！！！！\n例のgratitudeなリミックスとはまた違った雰囲気の曲で、元気出る系ミュージックになっております！\nまた歌詞のほうは「夢」をテーマにした内容になっていて、こちらも元気出る系リリックになっております！\n是非レイシスちゃんと一緒にプレイしてみて下さいね＞＜\n何卒！\n夢を描きましょう・・・っしゃぁぁあああッッ！！！\nボルテでははじめまして！ぁゅと申します！\nいつもはプレイする側だった大好きなBEMANIシリーズでボーカリストとして採用していただけて、わたしの歌った楽曲をプレイしていただけるなんて、本当に嬉しいです！感激！！！！\nがんばって歌いますので、これからどうぞよろしくお願いします！！！！\n今回歌わせていただいたPHQUASEさんの楽曲「draw!!!!」は、みなさん譜面に期待していらっしゃると思いますが、わたしは歌詞がとっても好きです！（もちろん譜面も期待していますよ！）\nまるで自分のことみたいですごく勇気をもらえるいい歌詞なのです、PHQUASEさんすごい…！\n早く実際に遊んでみたい！楽しみにしています！！！！",
      },
      {
        artist: "Music by Ayatsugu_Otowa, Vocal by みゅい",
        title: "超恋愛☆エクストリーム・ガール",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/07/04.mp3",
        comment:
          "オーッホッホ！！\n＿人人人人人人＿\n＞　たわしよ　＜\n￣Y^Y^Y^Y^Y￣\nどうも、アヤツグオトワといいます。曲とか文章とか書いてます。\n今回の楽曲、「ドキドキ！！バクバク！！LOVE！！めっちゃ恋してる！！\n純愛ガチ勢！！ハンパない超恋愛！！人生銀河級！！」をコンセプトに作りました。\n今、音楽はとても手に取り易い時代になりました。\n僕はまだまだ未熟者ですが、凄まじいサウンドを作れる人は本当に沢山居ます。\nそんな中で僕が、皆さんにプロデュース出来る面白さは何かな、と考えた結果、\nこの『最幸』という形になりました。もし楽しんで頂ければ、本当に嬉しく思います。\nはじめまして。みゅいです。\nボーカル採用すっっっごく嬉しいです！ありがとうございます！\n音ゲーが大好きでユーザーとして楽しませていただいている身としては、自分の歌った曲が音ゲーに収録されてプレーできるなんて夢のようです。\n曲調や歌詞を全力で表現することを意識し、テンション高めでレコーディングに臨みました！\nアップテンポでかなり楽しいかんじの曲になっています！提供していただいたAyatsugu_Otowaさんに感謝です。プレーするみなさまにも楽しんでいただけたら幸いです。是非遊んでみてくださいっ☆",
      },
    ],
  },
  remix03: {
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_03.jpg",
    sounds: [
      {
        artist: "BlackY(第8回目配信楽曲）",
        title: "DEADLOCK XXX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/8_01.mp3",
        comment:
          "我が名はMAX VOLTENIZER、背徳と絶望の最後の番人。ではない。\n皆さんこんにちは！BlackYです！\nかつてリフレク界に衝撃を与えたと言われている「DEADLOCK」のリミックスです。\nDEADLOCKが課題曲と聞いて真っ先に浮かんだリミックスの曲調がスピードコアだったので、元々激しい曲ではありますが、イメージをそのままぶつけてさらに激しくスピコアさせてみました！\nこの度は「DEADLOCK XXX」採用ありがとうございました！\nさあ奏でたまえ。踊りたまえ。そして、狂いたまえ・・・。",
      },
      {
        artist: "Yooh(第8回目配信楽曲）",
        title: "snow storm -euphoria-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/8_02.mp3",
        comment:
          "僕がbeatmaniaIIDXやDTMを始めるきっかけになったのがこのsnow stormという曲でした。\n初めて聞いた時の感動は今でも忘れられないです。\nBEMANIシリーズの中で一番好きな曲と言っても過言ではないくらいです。\nいつかこのような曲を作ってみようと決心した曲です。\nその曲が今回リミックスコンテストとして課題曲に入っていただけでも自分にとっては非常に嬉しかったし、さらに採用させて頂けるなんて本当に感謝感激の嵐です！！\nこのリミックスは自分のやりたかったことをすべて出し切りました。\n是非プレーしてみてくださいね！！\n僕は今、最大に-euphoria-です。\n本当にありがとうございました！！　Yooh",
      },
      {
        artist: "提供(第7回目配信楽曲）",
        title: "Daily Lunch Special～DeliciousREMIX～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/7_01.mp3",
        comment:
          "こんちゃす！多くの方々はハジメマシテ！！\n提供と申すものでございます！\nまさか自分が憧れていた舞台に今、自分自身が立っているだなんて未だに信じられません！\n考えるだけでにやけてしまいマス！\n本当にありがとうゴザイマス！\nさて、皆さんはどんなランチが好きですか？\nパスタにサンドイッチ、サラダにハンバーガー、ラーメンに牛丼・・・！\nボクはなんといってもカツカレー！！！\nあぁ想像してたらお腹が空いてｷﾀｧｱ...！\nみなさんも大好きなランチを想像して、\n「よっしゃ食うぞ！」っていう勢いでこの楽曲に挑んでみてください！\nきっと楽しめる譜面になっているとオモイマス！\n以上、提供でした！！\n『コチラのリミックスは、提供の提供でお送りイタシマス。』",
      },
      {
        artist: "Dustboxxxx(第7回目配信楽曲）",
        title: "Unicorn tail Dustboxxxx RMX",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/7_02.mp3",
        comment:
          "皆様お久しぶりです。Dustboxxxxデス！！\n普段はPsycho Filth Recordsやろりすたいる☆がばーずというレーベルで活動しています。\n今回ラインナップを見たときに、「この曲はリミックスするしかない！」と思い全力で作り上げましたｗ\nボルテIIでは新エフェクト搭載＆疾走感400%ということで、自分の得意かつ大好きなジャンルであるフレンチコアをベースに、このジャンルの持つ魅力を伝えるべくディープにへヴィーなサウンドを織り込みながらも、原曲の持つファンシーでいてかつ悲壮感漂う綺麗な雰囲気を最大限にリスペクトしつつ、ボルテージ401%に加速すべく硬核一角獣ﾌｫｱﾋｭｰﾏﾝﾌﾞﾗｧｧｯﾄﾞ…な展開に仕上がっております。\nぜひぜひ楽しんでいただけたら幸いデスヽ(´ー｀)ノ",
      },
      {
        artist: "Yu_Asahina(第6回目配信楽曲）",
        title: "音楽 -resolve-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/6_01.mp3",
        comment:
          "『音楽 -resolve-』は、Virkato Wakhmaninov(1873-1974)の未完成ピアノ協奏曲第2番『人生いろいろ！』(俗称)を、実業家 Andante Cantabileo(生没年不詳)が映画『音楽』に使用する際にアレンジしたものを、新たに現代の音楽家 Yu_Asahina(生きている)が独自に“解決”を図ったといった数奇な運命のもと、産まれおちた作品である。俗称は『人生いろいろ！～解決ズバッと！～』。\nまあるい 9 つのボタンで演奏を嗜まれている楽譜とともに、新たにVirkato 氏の作品が記録されている CD、\nの当該表題曲からも旋律を引用しており、また違った人生を覗き見ることが出来る作品となっている。\n解決した彼曰く「この機会はとても光栄でした。あぁ音楽は素晴らしい！」とのこと。\n(解説：小林 剣三）",
      },
      {
        artist: "とろまる(第6回目配信楽曲）",
        title: "少年は空を辿る Prog Piano Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/6_02.mp3",
        comment:
          "とろまると申します。この度は採用していただき大変光栄です。\n原曲の複雑さを残しつつ自分らしい音楽を表現するため、プログレッシブ感のあるピアノとベースにダンス系のビートを加えたアレンジに仕上げました。\n間違いなく今までで一番耳コピに苦労した曲でしたが、成長に繋がる良い経験になったと思います。\n是非楽しんでプレイして下さい。",
      },
      {
        artist: "源屋(第5回目配信楽曲）",
        title: "Sakura Reflection音頭 -盆踊Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/5_01.mp3",
        comment:
          "はじめに、採用頂きありがとうございます！\nRyu☆さんのアンセムをリミックスでき、非常に光栄です！\nどうリミックスしたら面白いかなと色々考え、和風なメロディを三連符にアレンジし、ちょびっとの和のエッセンスを加えた結果こうなりました！！！\n････すみませんでした　石を、石を投げるのはやめてください\nこれからの季節にピッタリ？な感じに仕上がりましたので、楽しんで頂ければ幸いデス！\n一緒にソイヤソイヤしていきましょう！！！！\n源屋でした！　＼ポンッ／",
      },
      {
        artist: "Hommarju(第5回目配信楽曲）",
        title: "Survival Games (Hommarju Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/5_02.mp3",
        comment:
          "今回はVENUSの大ヒット曲「Survival Games」をリミックスさせて頂きました！\nきっと一度は耳にしたことあるはず！\nそんなVENUSの楽曲が、ついにSOUND VOLTEXにも進出！！\n音から漂う懐かしさと、敷き詰められたバラの花びらと、SunnyなParkでウィザウチュナイしたり、素肌でWow Wowなジャケット写真を撮ったりはしませんが！！\nVENUSの新たな活躍の場に貢献できたことを光栄に思います！\n歌詞を覚えてみんなで一緒にウィザウチュナイしようね！\nHommarjuでした！",
      },
      {
        artist: "kuroburger(第4回目配信楽曲）",
        title: "アルストロメリア（KURO-HACO Remix）",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_01.mp3",
        comment:
          "初めまして、kuroburger（クロバーガー）と申します。\nアルストロメリア、とても大好きな曲です。\njubeat copious当時、解禁したときの嬉しさもあって（確か解禁条件が称号パーツ1000個取得でしたっけ！）、この曲はかなりプレイしまくりましたよ～！\nそんな大好きなアルストロメリアをリミックスさせて頂き、それがSDVXに収録されることになるなんて…まるで夢みたいです！ありがとうございます！！\n原曲よりもBPMがちょい速！疾走感を感じて頂ければ、幸いです。",
      },
      {
        artist: "Verdammt(第4回目配信楽曲）",
        title: "カラルの月 Verdammt Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_02.mp3",
        comment:
          "ぎゃあああ初めまして！名前が読めないことに定評のあるVerdammtと申します。ヴぁーなんとかってよく呼ばれるのでそれでいいと思います。\nBEMANIシリーズへの楽曲提供という長年の夢が叶って、本当に感激しています。筐体の上で逆立ちできそうな気分です。ありがとうございます！\n実を言うと私はリミックスよりもアレンジの方が得意で、曲の構成をガラリと変えるのは苦手な方なので、その分曲調をガラリと変えました。\n月のように形を変える曲調を楽しんで頂ければ幸いです。\nちなみに曲のジャンルは特に決めていません。まさになんとかネイションです。",
      },
      {
        artist: "Daisuke Ohnuma(大福P)(第4回目配信楽曲）",
        title: "隅田川夏恋歌(I/O Angel mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/4_03.mp3",
        comment:
          "お久しぶりです。Daisuke Ohnumaです。\nこの度は、隅田川夏恋歌のRemixでの採用、本当にありがとうございます。\nALTちゃんに魅せられて音声合成ソフトを使い始めた私にとって、このRemixはまさに念願でした。\nポップン8の頃、突然出会った「A.I.テクノ」とポップン9に収録された「コンピューターおばあちゃん」のカバーは、当時ちょっとだけテクノを聴き始めていた中学生の私に、とてつもない衝撃を与えました。\n「ヴォコーダーではなく、ソフトウェア自体がヴォーカルを担当する」というまさに最先端っぽさ溢れる世界に完全に魅了されていたのです。\nその影響は非常に大きく、高校を卒業した後にとうとう作曲を始めるということで、音声合成ソフトをほぼ同時に導入したのですが、わざわざ海外製の英語しか歌えないソフトを揃えてみたりもしていたのですよ。\nさて、今回のRemix、リズム隊やシンセを疾走感マシマシ仕様にしつつ、原曲の良さをできるだけ引き出せるように、隅田川夏恋歌とのファーストコンタクトがこのRemixだったとしても、原曲まで一緒に聴きたくなるように、そんなことを思いながら制作しました。\nそして、ポップン時代からALTちゃんを知っている人たちがちょっと懐かしい気持ちになってくれたらいいな、と思って入れた部分は前述の海外製のソフトを使いました。\n2002年、私のALTちゃんとの出会いは「あの言葉」からでした。\nそれから11年、このRemixを皆さんへ、「あの言葉」と一緒にお届けします。\nぜひ、ゲームセンターで遊んでみてくださいね。",
      },
      {
        artist: "LeaF(第3回目配信楽曲）",
        title: "音楽 -壊音楽 mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/3_01.mp3",
        comment:
          "人生は　こんな　ありえない　音樂　にも似ている\n初めましてLeaFといいます。こんにちは。\n普段はどこかで活動してたりします、そして誰も作らないような曲を作ってます。でも無所属！孤独！\n全く思ってもいなかった採用でとっても嬉しいです！\n弁士カンタビレオさんの「音楽」をリミックスさせて頂きました。\n原曲の「音の誕生」に対する「音の破滅」をバッキバキなBreakcoreで表現しました。多分めっちゃ早いです。\nあらゆる面で「音楽」とは対照的な曲です。譜面…？さ、さぁ…",
      },
      {
        artist: "syzfonics(第2回目配信楽曲）",
        title: "Fly to Next World (syzfonics Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/2_01.mp3",
        comment:
          "初めまして、syzfonics（しずふぉにくす）というよくわかんない名前の人です。\n採用されたのは意外でした。音楽ゲームとして遊んで楽しいものになるようにだとか一切考えずに自分の好きなようにしたので、これは筐体で遊ぶとどうなるのか気になる所ですね。本当に有難うございます。\nこれ以上言えることが無いです。コメント考える為にエナジードリンクを飲んで、挙句の果てに徹夜もしましたがこの様です。宜しくお願いします。",
      },
      {
        artist: "kamome sano(第１回目配信楽曲）",
        title: "concon(picom'n'bass rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/01.mp3",
        comment:
          "こーん。こんこんこーん。こんこーん。\nこんここ。ここーん。\nこんこんこーん、ここっこんこん。\nこんこーんこん。\nこんここ、こんこーんこん、こんこーん。こんこーんこん。\n(訳)こんにちは。沙野キツネと申します。爬虫類から突然変異しました。\nまたもや採用して頂き、本当に嬉しいです。ありがとうございます。\n苦戦して一度諦めていたんですが、方向が決まった途端パッと出来たので楽しく終えられました。\nところで、身も心も狐になって制作に臨んのっそのそー、のそ？のそそー！！？？！？？\n(翻訳：狐田狐太郎)",
      },
      {
        artist: "t+pazolite(第１回目配信楽曲）",
        title: "Daily Lunch Special (tpz Overcute Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/02.mp3",
        comment:
          "t+pazoliteこととぱぞです。ティープラスじゃないです。\nYOSHITAKAさんの曲はどんなジャンルであれ、曲にハウスのエッセンスが\n含まれている事が多くてかっこいいなあと感じているのですが、\nそのハウス感を存分に出したらどうなるだろうと思い、\n「Daily Lunch Special」をおしゃれなハウスにリミックスしてみました！(※最初の20秒だけ)\nその後は原曲より早いです。不思議なことってあるもんですね。\n結果タイトルは「ランチスペシャル」ですが、\nカレーがなければお菓子を食べればいいじゃないの精神で\nキュートでキャッチーでグロテスクなリミックスとなりました。\n中盤の特盛トッピングも合わせてご賞味あれ。",
      },
      {
        artist: "C-YA(第1回目配信楽曲）",
        title: "Mother Ship (C-YA MIX)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/03.mp3",
        comment:
          "( ^o^)母艦がぼっかーん\n( ?o?) 。o(待てよ？なんで母艦なんだ？)\n|Sota Fujimoriさん|┗(3｀ )┓三\n( ^o^ )→やっぱ母艦かな\n<<<<<<(’ω’)>>>>>>ぼっかああああああん\n大好きですこの曲。\nリミックス対象楽曲に選ばれてて一人うっひょひょいってなってました。\nハイスピードなアレンジとなっております！声ネタも調味料として入れてみました(笑)\n楽しんでプレイしていただければなーと思います！\nC-YAでした～",
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "Sakura Reflection (P*Light Slayer Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/04.mp3",
        comment:
          "P*Lightです。\n今回はRyu☆さんのSakura Reflectionをリミックスさせて頂きました。\n自分の名義のアスタリスクは、Ryu☆さんに憧れて付けたくらいリスペクトしているクリエイターの一人です。\nですので、こうしてRyu☆さんの作品に関わることが出来て本当に嬉しいです！\n楽曲の方は、原曲よりもさらにハイテンションで、声ネタもマシマシな感じでございます。\n視聴じゃ聞けないところにもたくさん面白いギミックを詰め込んだので、\nぜひゲーセンでプレーしてみてね！",
      },
      {
        artist: "高井さんとuno(IOSYS)(第1回目配信楽曲）",
        title: "すーぱーアイドル☆ミツル子Remixちゃん",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/05.mp3",
        comment:
          "初めまして、高井さんと申します。\nこのたび、unoさんremixの「she is my wife　すーぱーアイドル☆ミツル子Remixちゃん」\nを採用して頂けたこと、とても嬉しく思います！！！ありがとうございます！\n「かわいい…かわいい…」とつぶやきながら、\nとにかくフリフリなかわいいアイドル！を目指して歌わせてもらいました。\nプレイしてくださる方に少しでもアイドル感が伝わればうれしいです！\n（高井さん(IOSYS)）\nGUMI楽曲コンテスト以来、三度目まして！unoと申します！\nshe is my wifeのRemixを採用いただき、嬉しい限りです！\n課題曲が発表された瞬間「この曲しかない！！」とRemixに飛びつきました！\n協力してくれたミツル子ちゃん（CV:高井さん）に感謝！\n是非、握手券付きEXHAUST（50000 Blc）を解禁していただければ幸いです！！（嘘\n（uno(IOSYS)）",
      },
      {
        artist: "DJ Amane(第1回目配信楽曲）",
        title: "UNLIMITED FIRE (DJ Amane Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/06.mp3",
        comment:
          "2012年末から「Amazing Records」というところで音楽活動を始めました、\n「DJ Amane」と申します。\n名前に「DJ」と付いているのに、実際DJしたことはまだありません。カッコワルーイ。\nこの度は屈指の名曲「UNLIMITED FIRE」を、原曲の良さを残しつつも\nアゲアゲなトランス・ハードダンスにリミックスさせて頂きました。\n両腕をクロスさせて炎を出し、且つ天を仰ぎながら頑張ってリミックスしたので、\n是非ぜひ楽しんでプレイして頂けると嬉しいです！",
      },
    ],
  },
  original08: {
    name: "SOUND VOLTEX II -infinite infection-制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_08.jpg",
    sounds: [
      {
        artist: "Lite Show Magic (t+pazolite vs C-Show)(第9回目配信楽曲）",
        title: "Crack Traxxxx",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_01.mp3",
        comment:
          "どうも、Crack TraxxxxのCの方、およびLiteShowMagicのShowの方担当のC-Showと申します！\nこの度はこうやってまた皆さんにお会い出来て、大変嬉しく思います！\n以前、「dj TAKA 楽曲 REMIX 1ST STYLE」でTomorrow Perfumeのリミックスを採用していただきましたが、もう一人、僕とは正反対の曲調でTomorrow Perfumeのリミックスを提供されたのがt+pazoliteさんでした！\nそんな繋がりもあって「合作できたらいいなぁ～」とは常々思っていましたが、あちらが大先輩だという事もあり、「いつか合作出来るように自分も頑張ろう！」とか思っていましたが、なんとt+pazoliteさん側から声を掛けていただきました！\n驚きと嬉しさの反面、大変なプレッシャーでしたが、双方とも自画自賛の楽曲、そして素晴らしいジャケットで無事に皆さんに届ける事が出来ました！\n今後共々、LiteShowMagicをよろしくお願いします！（ﾁﾗｯ\n(C-Show)\nCrack TraxxxxのTの方でLiteShowMagicのLiteの方でTomorrowPerfumeリミックスの原曲好きな人に怒られそうな方担当、t+pazoliteです！\nとぱぞって読みますが大抵ティープラって言われます。しょうがないですね。\nSound Voltex IIの公募が決定した際、なんかしら面白いことをやろう！と思ったのですがこれがなかなか決まらない。\nBPM600や17/16拍子などいろいろ考えた挙句C-Showさんに菓子折りをもって土下座しに行ったところ、「儂と合作か…辛い戦いになるぞ…」と快諾いただきましたがだいたい嘘です。\n曲はもらった時点でガッチガチのクールなトラックだったので、そこからキュート成分と遊び心を加えたらあら不思議、カヲル＆アシタっぽい雰囲気が！ってことでジャケもカヲルちゃんとアシタちゃんで描いてもらいました。\nなんだか(勝手に)テーマソングっぽい雰囲気になったので大満足です。\nそんなこんなで今回は採用いただきありがとうございました！\nいろいろ120％詰め込んだ楽曲、「Crack Traxxxx」をよろしくお願いします！\n(t+pazolite)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：azuki vs clbU\n今晩はあしうら、Ha・lle・lu・jah以来ご無沙汰しておりますあしうら。SDVX II の門出にて当方のジャケットを採用いただいた事を深く感謝するとともにあしうら、新たなボルテワールドを楽しめることを心待ちにしておりますあしうら。\nazuki:彩度が高い背景で妖しさを出してみましたあしうら。普段はAcuticNotesってサークルで活動してますあしうら。\nclbU: 悪魔的なカヲル＆アシタの魅力を描いてみましたあしうら。普段はあしうら。",
      },
      {
        artist: "Hommarju vs P*Light(第9回目配信楽曲）",
        title: "Double Universe",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_02.mp3",
        comment:
          "一発目は大きな花火をドカンと打ち上げたくて、TRIGGER★HAPPYでもおなじみのP*LightとVSしたよ！わーい！ケンカだケンカ！\n二人で「最高の曲を作ろう！」と始まったこの曲も、気付けばジャケットもVSしてて、曲名が決まって、いつの間にか完成してて、人が集まると曲って勝手に生まれ育つんだなあと実感しました。\nどんな内容になっているかは、聞いてからのお楽しみ！\nさあみんなで今からSOUND VOLTEX IIをプレイしに行こう！\nHommarjuでした！\n(Hommarju)\nP*Lightです。\nなんと今回はVSです。合作ですよ。\n曲だけじゃなくジャケットまでVSです。戦いまくり！\nHommarjuさんは楽曲はもちろんですが、クリエイターとしてもとてもストイックに活動していて、いつもいい刺激をもらってます。\nいつか一緒にやりたいなーと思っていたのですが、今回念願叶ってコラボすることが出来ました！\n楽曲の方は、明らかにコイツ作っただろってパートもあれば、意外にそうじゃないパートもあったりと、かなり面白い出来になったと思います。\n全部わかるかな～？\n(P*Light)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：はちぷよ vs TOHRU MiTSUHASHi\n「Hommarju星とP*Light星を発見しました！」\n「いけいけー！探索だー！」\nをイメージに楽しく描かせてもらいました！\nHommarjuさんもP*LightさんもTOHRU MiTSUHASHiさんもみんなクリエイターとしてすごく尊敬してるので一緒に作品を作る事が出来て本当に嬉しいです！\n何よりすごく楽しかった！！\nこの気持ちがプレイしてくれる人みんなに伝わったら嬉しいです！\nちなみにTOHRU MiTSUHASHiさんとのvsは私の完敗です。\nはちぷよでした！\n(はちぷよ)\nお初となります。TOHRU MiTSUHASHiです。\n今回はお招きいただきデザイン的なアレを担当しました。\n採用していただけて大変光栄に思います。\n冷静ぶってますが、心は非常にユニバースです。\n合作は創作家同士の異なる二つの宇宙の衝突と考えており、今回はHommarjuさん・P*Lightさんという宇宙が生み出す爆発力を力強く表現した気分でございます。\nちなみにはちぷよさんとのvsは俺の完敗です。\n改めて思い返しても本当に楽しかったです。\nまた御三方にこの場を借りて感謝します。\n(TOHRU MiTSUHASHi)",
      },
      {
        artist: "ginkiha+kamome sano(第9回目配信楽曲）",
        title: "Dawn of Asia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_03.mp3",
        comment:
          "今回はあのkamome sanoさんと合作で曲を作っちゃいました！\nアジアンな感じのムンベで，お互いの持ち味が出た曲になって作ってる間も非常に楽しかったので，ぜひぜひプレイして楽しんでいただけると幸いですv('ω')\n(ベースとかピアノストリングス系担当 ginkiha)\n今回はあのginkihaさんと合作で曲を作っちゃいました！\nほんの軽い気持ちで始まった合作でしたが、かなりすんなりと進んだので制作が本当に楽しかったです。\nお互いのいい部分がいい感じに出てると思うのでよろしくですd(0v0)\n(ドラムとかシンセ系担当 kamome sano)",
      },
      {
        artist: "BlackY vs. Yooh(第9回目配信楽曲）",
        title: "XROSS INFECTION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_04.mp3",
        comment:
          "採用ありがとうございます！！\nあの世界一Max burning!!なBlackYさんとのコラボが実現しました！！\n大体の構想はBlackYさんが考えてくれて僕はそれに乗っかるという形です。\n疾走感400％で二人で突っ走ってます（笑）\n曲の中で僕ら二人がいろいろXROSSしちゃってるんで是非実際にプレーして体感してみてくださいね！！\n二人で力を合わせてめちゃくちゃ頑張りました（特にBlackYさんが）ので何卒よろしくお願いします！！！！\n(Yooh)\n採用ありがとうございます！！\n今回はなんとあの世界一Dynastyな男、Yoohさんとのコラボが実現しました！！\n大体の構想はYoohさんが考えてくれたので僕はそれに乗っかるという形です。\n合作は初めてでしたが、やってて良かったし、すごくいいものが出来たと思います。マジYoohさんヤバイ。\nXROSSを体感してください。何卒よろしくお願いします！！\n(BlackY)",
      },
      {
        artist: "DecisionS(kanone + nora2r)(第9回目配信楽曲）",
        title: "INFINITY OVERDRIVE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/9_05.mp3",
        comment:
          "二度目まして！DecisionSのフライパンでやらない方、nora2rです！\n今回はkanoneとの合作です！僕は主にメロディや展開など曲の基盤となる部分を担当しました！\n僕が以前のコンテストにVISIONを応募したのも、彼に発破を掛けられたのがキッカケだったので、なんだか縁って凄いなァーと思いながら曲を作りました。\n楽しんでプレイしていただければ幸いです！\n(nora2r)\nお久しぶりです！DecisionSのEXPLOSION担当のkanoneです。\n勢いで合作でもしてみないかという話をnora2rにしたところ、あっさりOKが出てササッとデモが飛んできて仰天しました。\n細かいことは口で説明するのはしんどいので、直接プレイしてください！\nこの度はありがとうございました！\n(kanone)",
      },
      {
        artist: "しけもく(第8回目配信楽曲）",
        title: "VERSUS!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_01.mp3",
        comment:
          "はじめまして、しけもく と申します！\nニコニコ動画でVOCALOIDを用いたオリジナル楽曲の制作を中心に活動しています。\n好きなものはラーメンとゴリラです。就活中です。\n今回採用して頂いた楽曲「VERSUS!!」は\n色んなアイデアや音を詰め込んだ疾走感のある作品になったと思います。\nころころと変わる複雑な展開はきっとプレイしても手応えのある曲になっていますので\nぜひぜひ楽しんで頂ければ幸いです！\nしけもく",
      },
      {
        artist: 'RoughSketch + DD"ナカタ"Metal(第8回目配信楽曲）',
        title: "Booths of Fighters",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_02.mp3",
        comment:
          '2度目の採用ありがとう御座います！\n札幌でNotebook Recordsというレーベルを運営しているRoughSketch(ラフスケッチ)です！\nハードで、歪んでいて、疾走感相当ある感じを目指しました！\n激しい曲が好きな方に是非プレイしていただきたいです！\n(RoughSketch)\n初めまして。DD"ナカタ"Metalっていう名前で作詞、ヴォーカル等やってます。\n前回は"Distorted Floor"のボイスをちょろっとやらせていただいたのですが、\n今回の曲は全面的に作詞とヴォーカルを担当させていただきました。\nボルテプレイヤー応援歌っぽく仕上げたつもりです。プレイしていただけると幸いでございます！\n(DD"ナカタ"Metal)',
      },
      {
        artist: "xi(第8回目配信楽曲）",
        title: "Quietus Ray",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/8_03.mp3",
        comment:
          "はじめまして！xiです。\n普段は同人サークル｢100sec Records｣にて作曲をしています。\n音楽ゲームが大好きで作曲活動を続けていたので\nこの度の採用は本当に嬉しいです！ありがとうございます！！\n楽曲に関しては、近未来的なレーザービームがテーマの曲です。\nとどめの一撃に戦艦が大量のビームを放ち敵をオーバーキルするイメージです！\n自分の得意な事をしつつ、SE、リズムやギミックに力を入れ、\n勢いで突っ走るハイテンションな曲に仕上げました。\n楽しんでいただければ幸いです。(・`ω・)+",
      },
      {
        artist: "cittan* feat. kalon.&core*mc(第7回目配信楽曲）",
        title: "L4TS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_01.mp3",
        comment:
          "初めまして！cittan*（シッタン）といいます。\n東京で音楽作りつつ、個人サークル「Sprite Recordings」やサークル「Polo Rockers」「signum/ii」でも活動してます！\n大好きなBEMANIシリーズに採用して頂き光栄です♪\nL4TSは疾走&哀愁がテーマのエモです！\nキュートでパワーボーカルなkalon.ちゃん、アツいMCはcore*mcが盛り上げてくれます！\n是非プレイしてみんなで歌って下さいね！Leave for the Sky!!",
        removed: true,
      },
      {
        artist: "桜華(第7回目配信楽曲）",
        title: "デストロイマーチ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_02.mp3",
        comment:
          "桜華と申します。\n世間では魔界からやってきたボカロPと呼ばれる存在です。\nいつも楽曲を聴いてくださっている皆様に『聴く』以外で楽しんでもらえる方法は無いかと考えた事が今回のコンテストに応募するきっかけになりました。\n”全ての破滅””秩序の殲滅”を願ったこの戦闘曲は私の新たな代表曲でもあります。\nたくさんの方々にプレイして楽しんでもらえれば良いなと思います。",
      },
      {
        artist: "Hommarju feat. 実谷なな(第7回目配信楽曲）",
        title: "Smile",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_03.mp3",
        comment:
          "SOUND VOLTEXにどうしてもユーロビート曲を増やしたくて作った一曲！\n更にこのユーロビートを歌うのはこの人しかいないでしょ！ということで\nボーカルには実谷ななちゃんをお迎えしました！ヤッター！\n新しいことにはワクワクやドキドキと、ちょっと不安があって初めの一歩を踏み出すのはなかなか勇気が要るけど、\nその先にある嬉しさや楽しさを\n新しいSOUND VOLTEXと一緒にみんなにも感じてもらえたら嬉しいな！\nHommarjuでした！(Hommarju)\nわあーい★\n大好きなHommarjuさんの曲が歌えて幸せー！！！\nノリノリ曲と勇気が湧いてくる歌詞で楽しみながら気持ちを込めて歌わせて頂きました！！\nたくさんの人に聴いてもらえると嬉しいです！！(実谷なな)",
      },
      {
        artist: "MAD CHILD(第7回目配信楽曲）",
        title: "Voice 2 Voice",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/7_04.mp3",
        comment:
          "はじめまして！（？）R135 TracksのMAD CHILDです！\nSOUND VOLTEXではエフェクトをやらせていただいてますが、楽曲でも参加させていただくことになりました！\n採用いただきありがとうございます！\nテッキーにドッチャカスカポコ鳴らしすぎて、気づいたらシンセを窓から投げ捨てていました！！！！！！\nそんな感じのトライバルサウンドです。お楽しみくださいませ。\nブラジルの人「日本の人、聞こえますか～！？」",
      },
      {
        artist: "ヒゲドライバー(第6回目配信楽曲）",
        title: "HAPPY HEART BEAT",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_01.mp3",
        comment:
          "お久しぶりです、ヒゲドライバーです！\n今回、同時に2曲も採用していただきました、ありがとうございます！\nこっちはハッピーなハートのビートをイメージした曲です。\nキャッチーなメロディーで、ピコピコして、ポップでノリのいい感じになってます。カタカナが多い！\nヨロシクお願いします！",
      },
      {
        artist: "源屋 feat.Kuroa*(第6回目配信楽曲）",
        title: "華陽炎-Hana Kagerou-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_02.mp3",
        comment:
          "Music:源屋\n皆様今日和！！！！\nこの曲はJAEPO会場でIIの筐体を初めて見た時、頭の中にブワワワっと浮かんできたイメージを元に作曲しました！\n同時に会場で発表された歌声を聞いてKuroa*さんにボーカルをお願いしましたが、イメージ通りに歌いあげて下さいました！ありがとうございます！！！\n和風でハードコア感のある、いわば撫子ハードコア的な感じを目指しました！\n是非、プレイして楽しんで下さい！！！\n源屋デシタ！！！\nVocal:Kuroa*\nKuroa*です。今回ご縁があってボーカルとして参加をさせて頂きました。\n曲を最初に聴いたときにとても綺麗で可愛らしく、感動したのを覚えております！\n前回と違った感じで歌えたのでは？と個人的に思っております。\n収録に当たってかなり踏ん張りましたので是非聴いて、遊んでいただけたら光栄です！！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：upfordead\nこのたび、源屋さんの大変素敵な曲にジャケットを描かせて頂きました。\nSOUND VOLTEX IIの筐体カラーである白とピンク、歌詞にある桜の花、そして花びらに切ない恋心を託す少女、そんなキーワードをムニャムニャ考えながらカリカリ描いていたら桜の季節もとうに終わってしまったのですが、曲の雰囲気に合ったものは出来たのではないかと自負しています。\n季節を問わず愛される桜のように、長くご愛顧頂ければ幸いです。\nupfordeadでした。",
      },
      {
        artist: "PROCYON KNIGHTS PROJECT(第6回目配信楽曲）",
        title: "獣性オーバーフロウ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/6_03.mp3",
        comment:
          "健康で逞しい肉食系日本男子が育ちますように、という想いを込めて、\nSDVXらしい曲調にババッガシッとキメました。どうぞ夜露死苦！＜作詞作曲：Flying Kite＞\n普段肉に喰らい付く早さで歌えって言われたのでそれをイメージしたら滑舌が良くなり\nこんなに早口で歌えました。肉食最高！みんなも歌うときマネしてみてね！＜歌：Aramaki＞\n好き勝手弾いていいと言われたので好き勝手やってみました！\nゲーセンで流れるのが楽しみですっ！＜ギターっぽいもの：Ress＞",
      },
      {
        artist: "七誌(第5回目配信楽曲）",
        title: "サヨナラデイズ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_02.mp3",
        comment:
          "皆様はじめして、七誌と申します。\nポップンミュージック公募でもお世話になりましてこの度はサウンドボルテックスにも採用して頂き大変嬉しく思います。\n早速曲の方ですがファンキーで４つ打ちな青春ロックをご用意致しました。\nブラスとﾜｶﾁｮｺギターと暑苦しいボーカルという相も変わらずの編成となりますが、今回もくさいキメをふんだんに取り入れてありますので是非ドヤ顔でバシバシと楽しんで頂ければ幸いです。",
      },
      {
        artist: "nmk feat.日向ももこ(第5回目配信楽曲）",
        title: "skyful of stars-SDVX EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_03.mp3",
        comment:
          '初めまして！nmk/佐原誠と言います！\n普段は商用ノベルゲームや、歌手様への楽曲提供、その他受注形式での作編曲で、フリーランスとして活動しております！\n自サークルにてストーリー＋ヴォーカルをコンセプトにした作品"ClarityOratorio"シリーズも製作中でアリマス。\n私自信も幼い頃よりNO 音ゲー, NO LIFEで生きてきた為、このような場に採用して頂き、感無量です。\nSOUND VOLTEXのプレイ画面をそのままイメージした疾走感とトランス感を楽曲として起こしてみました。\nこの曲を製作するにあたり、多数の方のお力添えを頂きました。\n歌唱の日向ももこさん、作詞のTiaさん、ギターソロ演奏のRYU-GA君、本当にありがとうございます！\nぜひともskyful of stars、聞いて覚えて口ずさみながらプレイしてみてください！',
      },
      {
        artist: "ke-ji(第5回目配信楽曲）",
        title: "Joyeuse",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_04.mp3",
        comment:
          "初めまして、ke-jiと申します。\n当楽曲Joyeuse（ジュワユース。ジョワユーズとも）は、シャルルマーニュが所持していた日に３０回その色彩を変じるという同名の剣の伝説を元に、その色彩の様に次々と楽曲が展開していくネオクラシカルプログレです。\nBPMの変化は冒頭部分のみで、変拍子やポリリズムを用いて速度が変わった様な錯覚をもたらしたり、部分的に対位法を用いて聞く箇所を変える度新しいメロディラインが発見できたりと、聴き手の聴く角度によって様々な変化をもたらす仕掛けを施しました。\nなお、ギタリストしらこいし君には計り知れない難易度のフレーズを何度もごめんね。と謝りながら弾いて頂きました。\nごめんね。",
      },
      {
        artist: "P*Light feat. mow*2(第5回目配信楽曲）",
        title: "OVERDRIVERS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_05.mp3",
        comment:
          "P*Lightです。\nこの曲は自分なりのボルテをテーマに書きました。\n細かい解釈はプレイヤーのみなさんに委ねます。\nあまり詳しく説明するのもなんかサムいしね！\nボルテがきっかけで目標が出来た人、夢を叶えた人、たくさんのクリエイターとの出会いなど、色々な人に影響を与えたと思います。\nそんなみんなを繋いでくれたボルテに精一杯感謝です。\nボルテもIIが稼働してきっとまだまだ躍進していくはず！\nこれからも、プレイヤー、クリエイターみんなでボルテを盛り上げていければいいな！\nはじめまして！mow*2と申します。\n普段はP*Lightさんの所で歌わせてもらっています。\n初めてデモも聞かせてもらった時の印象は、とてもスピード感があってまさに400％にふさわしいなーなんて思ってました。\n力強く！夢に向かって突き進むぞー！という前向きな気持ちを込めまくって歌いました！いえいっ！\n僕らが変えて！僕らが創る！SOUND VOLTEX！！！\nOVERDRIVERSをよろしくお願いします！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：はちぷよ×TOHRU MiTSUHASHi\nP*Lightさんに「ボルテをテーマにした曲を作ったよ」と言われたので「じゃあボルテをイメージして描こう！」と思って出来たジャケットです！\nたくさんのネットワークからいろんな想いを受け取って形を成していく、そんなイメージが伝われば幸いです。\n「不可能」なんて打ち砕きまくるしかない！\nはちぷよでした！\nお初となります。TOHRU MiTSUHASHiです。\n今回はお招きいただきデザイン的なアレを担当しました。\n採用していただけて大変光栄に思います。\n冷静ぶってますが、心は非常にオーバードライブです。\n今作は「SDVXのテーマ」をイメージしたと聞き、BEMANIで音楽や映像を知り、友達と出会い、人生を左右された世代である自分は猛烈に共感し、当時のあらゆる気持ちが溢れかえり、その思いの丈をジャケットに込めました。\nこの作品を通して何か共感して貰えると嬉しいですね。",
      },
      {
        artist: "かねこちはる(第5回目配信楽曲）",
        title: "殯",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_06.mp3",
        comment:
          "お初にお目にかかります。\nかねこちはる、と申します。\n今後ともよろしくお願い致します。\n普段皆様は、耳から溢れる程の良曲を聴きながら、SDVXを楽しんでいると思いますが、たまには、こんな悪戯な楽曲と一緒に遊んでみては如何でしょうか？\n曲名『殯』←「もがり」と気軽に呼んで、仲良くしてあげて下さい。\n皆様に選曲して頂けると、この子『殯』も喜びます。\n採用ありがとうございました。とても嬉しかったです。",
      },
      {
        artist: "Hommarju(第5回目配信楽曲）",
        title: "GEROL",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_07.mp3",
        comment:
          "祝 SOUND VOLTEX II 稼動！\nまた新しい一歩が踏み出されて、新しい歴史の一ページが刻まれたんだけど、そんな大きな出来事をリアルタイムで経験できるって考えてみれば凄いことだよね！\n前作ではたくさんの追加曲があって、FLOORコンテストがあって、KAC 2012があって、今年はこれから何が起こるのか、考えるだけでワクワクする！\n今作もみんなで一緒に遊ぼうね！\n言いたいことは全部曲に詰め込んでおいたから！\nHommarjuでした！",
      },
      {
        artist: "orangentle / Yu_Asahina(第5回目配信楽曲）",
        title: "HAELEQUIN",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_08.mp3",
        comment:
          '曲名である"ハーレクイン"には「道化師」という意味があります。\nピエロも家に帰ればただの人間であって普通に飯食い始めるワケです。\n恐らく誰もが「二面性」なんつうものを持ってるんじゃないでしょうかと。\n理想と現実・正直者と嘘吐き狼・緊張と解決…なんか読んだことないですけど罪と罰っぽい？\n"orangentle"と"Yu_Asahina"は紛れもなく同一人物ですが、自分の中では違う人ぽかったり。\nついこの前に某所で出した楽曲ですが、アレンジしきれていなかったのでしました。\n本来の綴りは HARLEQUIN ですが R は E に変えちゃいました。エンジョイ！',
      },
      {
        artist: "臨界モスキー党(第5回目配信楽曲）",
        title: "悪いところがひとつもない！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/5_01.mp3",
        comment:
          "おはよーさん！初めましてでも四度（シド）・ヴィシャス！\n臨界モスキー党、略して臨モスの犬田彦です。\n何を間違ったのか悪いところだらけの臨モスの曲が初採用となりました！\n是非とも悪い人にプレイしてもらい悪いところがひとつもない人間になって頂きたいです！\n（犬田彦）\nこんばんは！ダメなとこしか良いとこ無いDJ一戸建です！\nこの曲は作詞、作曲を担当しました。\n僕の生まれ故郷は炭鉱町で過疎化しています！でも僕の心は過疎化していません！\n皆さん、根拠の無いポジティブで明るく楽しく生きていきましょう！\n（DJ一戸建）\nSDVXプレイヤーに悪い人なんて居るわけないでしょう！！\n編曲しました！まさか採用されるとは\n（ラフ助）\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：オヌマ愛子\n臨界モスキー党、党首のあべぢです。\n赤いランドセルに黄色いヘルメットに黄色いＴシャツに黄色いヌンチャク！\n交通安全第一です！悪いところがひとつもない！\nバーン！\n（あべぢ/モデル）\nデザイン担当のオヌマ愛子です。\n今回は一瞬見ただけで伝わる、インパクトのあるデザインを追求しました。\n見る度に笑って頂ければ、嬉しいです！\n（オヌマ愛子/デザイン）",
      },
      {
        artist: "Team Grimoire(第4回目配信楽曲）",
        title: "C18H27NO3",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/4_01.mp3",
        comment:
          "初めましての方は初めまして。お久しぶりの方はこんにちわ。\ncroiXの片割れ、Team Grimoireと申します。\n二回目の楽曲採用となりまして…　自分でもビックリしております。\n今回採用させていただいた曲は、ゴリゴリのハードコアでございます。\nちょっと自分でも前回のcroiXからどうしてこうなったのかわかりませんが、とりあえず蒙○タンメンや暴君○バネロとかを食べながら作曲致しました。\n多分プレイしてると発汗作用があると思います。\n楽しんでプレイして下＼＼＼＼＼ ┗(⌒)(#´゜ω゜`#)(⌒)┛／／／／／ｳｵｵｵｵｵｵｵｵｵｵｗｗｗｗｗｗｗｗｗｗｗｗ",
      },
      {
        artist: "wa.(第4回目配信楽曲）",
        title: "Lieselotte",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/4_02.mp3",
        comment:
          "はじめまして。wa.と申します。\n楽曲の採用、大変嬉しく思います。\n自分の作風としてこだわり続けてきた「過剰なまでに派手でかつドラマティックに」というテーマの、ひとつの集大成として仕上げました。\n楽しんでいただければ幸いです。",
      },
      {
        artist: "Relect(第3回目配信楽曲）",
        title: "WobbleTangleFestival",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_01.mp3",
        comment:
          "はじめまして、Relectと申します！！！！！！\n偉大なる右側刈り上げおじさんとか、KnifeなPartyみたいな人達から影響を受けてしまい、普段よりBPMを20くらい落としたらこんな曲が出来上がってしまいました！！！！！！！\n割と戦艦みたいな雰囲気の曲になったと思います！\nWobbleがTangleしまくるFestivalな曲を感じろ！！！！！！\nでは皆さん次回はUKでハードでコアな曲でお会いしましょう！！！",
      },
      {
        artist: "DJ Amane(第3回目配信楽曲）",
        title: "Party Stream !!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_02.mp3",
        comment:
          "2012年末から「Amazing Records」というところで音楽活動を始めました、「DJ Amane」と申します。\nこの度は、あの今一番アツい、僕が毎日20クレはつぎ込もうという勢いの新感覚ゲーム、「SOUND VOLTEX」に楽曲を収録して頂ける運びになりました。超アメージングです。\n楽曲は、楽しいDJパーティーでかかりそうな楽曲を意識し、疾走感のあるハードコアの中でもポップなものを形にしてみました。\n楽しんで頂けたら嬉しいです。\nそんな僕の曲をプレイしてくれたそこの貴方…マジでアメージングだぜ…。",
      },
      {
        artist: "そよもぎ(第3回目配信楽曲）",
        title: "honey trap",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_03.mp3",
        comment:
          "ぼるて(はぁと)\nこんにちはそよもぎです この度は採用して頂けて非常に嬉しいです！\nタイトルと曲調に若干ギャップがありますがそこをムフフする曲として作りました。ギャップ萌え。\n当方としては黒髪ロングな感じを想定しております。\nちなみにハチミツはカフェラテに沈めると美味しく頂けると思います！！！",
      },
      {
        artist: "かめりあ feat. ななひら(第3回目配信楽曲）",
        title: "ませまてぃっく♥ま+ま=まじっく！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_04.mp3",
        comment:
          "かめりあです。採用ありがとうございます！\n初のオリジナル楽曲でとても嬉しく思っています。\n合いの手マシマシの電波ソングで頑張りましたので、ななひらさんのウルトラかわいいボイスと合わせて楽しんで下さい！（かめりあ）\nこんにちは、ななひらです。\nこの度は採用ありがとうございます！\n今回の曲はヤサイマシ(曲名略)や物凄い(ry)より大人しめですが、とにかく可愛くて楽しめる雰囲気に仕上がったと思います。\nたくさん遊んでいただけたら嬉しいです＞ω＜＊（ななひら）",
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "En FIRE-G SOUL",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/3_05.mp3",
        comment:
          '演歌とハードコア、決して交わることのなかった二つのジャンルが今、SOUND VOLTEXを通じて一つになる。\nそれは瞬く間に炎となり、「炎火（エンカ：En FIRE）」となり、やがて1人の男の魂を呼び覚ます。\nその名も「G(爺)ちゃん」。\n彼はそれをJ-COREならぬG(爺)-COREと名付けた。\nここから音楽の歴史に大きな変革が訪れようとしていた…。\nという妄想をしながら作りました。コメントがこんなのでえ"えんか"！？！？（笑）\n宜しくお願いします。\nYooh',
      },
      {
        artist: "millstones(第2回目配信楽曲）",
        title: "Tomato Leaf Breaks",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_01.mp3",
        comment:
          "お初にお目にかかります、millstonesです。\n普段は歌声合成ソフトを使ったり使わなかったりしつつ音楽を作っています。\nラグタイムを超高速で演奏するピアニストの動画を眺めているときにふと「この疾走感はブレイクコアではないか」と思ったのでそのまま形にしました。\n投稿後暫くして、これはジョークとか一発ネタの類いなのではと我に返りましたが、こうして採用して頂けることになり、SOUND VOLTEXというゲームの懐の広さを改めて感じた次第です。\n陽気なピアノに襲いかかる怒濤のブレイクビーツをご堪能あれ！",
      },
      {
        artist: "Noriyuki(第2回目配信楽曲）",
        title: "届け！シューティングスター☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_02.mp3",
        comment:
          "楽曲採用いただきありがとうございます！\nハードな曲調にしたいと思ってBPMを上げ過ぎたせいかギターを弾くのが辛かったのが制作時の思い出です。\n（SDVXの中では速い方ではないと思いますが、、、）\nノリの良いロックな感じの曲になったと思うので是非遊んでいただけたらうれしいです！！",
        removed: true,
      },
      {
        artist: "Hate vs Brilliance(第2回目配信楽曲）",
        title: "Qubism",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/2_03.mp3",
        comment:
          "以前にも採用頂きました IDEA+RHYTHM こと Hate と、はじめましての Brilliance です。\n実は、5年ほど前にも同じメンバーで合作をした経緯があったのですが、\nSDVX II が発表された瞬間、筐体イメージから強烈なインスピレーションを感じ「これはやるしかない！」と、また同じメンバーでの合作となりました。\nタイトルは美術用語のキュビズムをもじったもので、dj TAKA さん、DJ YOSHITAKA さんの RENAISSANCE系楽曲へ敬意を表しつつ、\n更に色々な要素を一つの楽曲に再構成、恐れ多くも（？）「ルネサンスの進化形」を意識し制作しました。\n「過去があって今がある」と書くと当たり前の事なのですが、\nそんな今に作用してくれた人々や機会、歴史に感謝な楽曲です。楽しんで頂ければ幸いです！\n※こちらの作品はジャケットも一緒に採用されました！\nイラストレーター名：TOHRU MiTSUHASHi\nお初となります。TOHRU MiTSUHASHiです。\n今回はお招きいただき、デジタルアート的なものを頑張りました。\n採用していただけて大変光栄に思います。\n冷静ぶってますが、心は非常にキュビズムです。\nテーマとしては「心臓」と「愛」をモチーフとして制作しており、\n「敬愛によって生命が成り立つ」という意図を込めております。\n自分でも文字に起こすと何言ってるかよくわからないですがそんな感じでございます。\n詳しく説明するのも野暮ですので、どのオブジェにどういう意図があるか憶測して貰えると幸いです。",
      },
      {
        artist: "Sanaas(第１回目配信楽曲）",
        title: "Next infection",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/01.mp3",
        comment:
          "おはようございます。こんにちは。こんばんは。そして初めまして。Sanaas（さなあず）と申します。\n普段はネットレーベル「Wahhei Records」「DigitalAcid Force」という所で曲を作らせて頂いています。\n今回の採用、本当に嬉しいです！本当にありがとうございます！感謝感激です！\n自分はまだBEMANIに触れて2年ほどしか経っていませんが、BEMANIに触れることによってDTMを始めることができ、\nそしてFLOOR採用という目標を達成できました。ありがとうBEMANI!\nさて、曲の方ですが、SDVXⅡ記念ということで、「SDVXⅡのOP」をコンセプトにして制作しました。\n中々いい感じのハピコアに仕上がったのではないかなと思います。\n展開は少ないですが純粋に楽しめる曲なので、是非プレイしていただければ幸いです！",
      },
      {
        artist: "たちのん(第１回目配信楽曲）",
        title: "DELETED MOTION",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/02.mp3",
        comment:
          "ハジメマシテ、たちのんと言います。\n普段は「Citrus and Ocean Colour」という同人サークルでドラマー兼エンジニアをしてます。\n日頃よりポップンミュージックで遊ばせていただいており\n「作曲する人ってすげーなー。自分の曲で遊べたら楽しいんだろーなー」\nと常々考えていたのですが、まさかこんな形で実現してしまうとは…。\n採用していただき本当に嬉しいです。感謝しても感謝しきれません。\n大好きな中東をイメージしていたらぽこっと生まれた曲で、ジャンル…よくわかりませんね。笑\n今までのSDVXに無いヘヴィな音と中東の風を感じていただければと思います。\nヌッ！",
      },
      {
        artist: "LV.4(第１回目配信楽曲）",
        title: "青春☆してるかい？READY&amp;LADY!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/03.mp3",
        comment:
          "今日和!!SDVXプレイヤーの皆様ハジメマシテ!!\nCODE-49のLV.4です!\n今回の楽曲は、ヴォーカルに萌えボイスの持ち主、みゆを迎え\n好きな男の子と初めてデートに行くけど、なかなか思い通りに行かない、\n女の子のドキドキ恋心を歌った\nパワフルでハイテンションなポップチューンです!\n作詞する時は、女の子の気持ちを妄想して書きましたが、いかがでしょうか？\n結局、この女の子はこの後どうなるんでしょうね・・・？\nそれでは、鈍感な男の子をぶん殴るように、ボタンを叩いて、ツマミを回しまくって楽しんでください！",
      },
      {
        artist: "黒魔(第１回目配信楽曲）",
        title: "Goodbye-bye Planet",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/04.mp3",
        comment:
          "こんにちは、黒魔です！\n採用、ほんとうに嬉しいです。ありがとうございます！\nこの曲は「一人の子供が宇宙を夢見てロケットを作り、宇宙へ飛び立つ」事をイメージして作りました。\n子供の可愛さとか、色んな物がこの曲を聞いて伝わってくれば嬉しいな、と思います！",
      },
      {
        artist: "C-YA(第１回目配信楽曲）",
        title: "dream control",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/05.mp3",
        comment:
          "夢世界に住む、幼い少年がいた。\nある日、少年が夢世界を探索していると、そこには少女がひとり、ただ佇んでいた。\n―これは、夢世界の少年と、夢の中の少女の、短くて切ない恋物語である。\n・・・とか書いてあった中学校2年生の頃のノートが見つかりまして、\n頭を壁にぶつけながら曲をかきました(･ω＜)\n曲としては少し哀愁を漂わせたちょっと速めなドラムンベースとなっております！\nSOUND VOLTEXらしい疾走感も風味として加えてみました！\n楽しんでプレイしていただければなーと思います！\nC-YAでした～",
      },
      {
        artist: "上村香月(第１回目配信楽曲）",
        title: "自由のための不自由",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/06.mp3",
        comment:
          "上村香月と申します。\nこの度は採用の方、誠にありがとうございます！\n前回「七色のウタ」で採用をいただき、今回二度目の採用ということで\n大変光栄に思っております！\n今回の曲は、ロックを主にJAZZのテイスト等を盛り込んで\n少しおしゃれな感じに仕上げました。\n是非プレイしてみてください！！\nよろしくお願いします＾＾",
      },
      {
        artist: "lapix(第１回目配信楽曲）",
        title: "Foolish Hero",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/07.mp3",
        comment:
          "はじめまして！lapix(ラピス)です！\n溢れるサウンドを全力で描いた今回の曲「Foolish Hero」\n採用して頂いて本当に嬉しいです！\nグルーヴと疾走感に何よりも力を込めました！\n駆け抜けるような展開、そして仕掛けが満載となっております！\n最初から最後までアクセル全開なので、是非みなさん楽しんでプレイしてくださいね！",
      },
      {
        artist: "ノマ(第１回目配信楽曲）",
        title: "Brain Power",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/08.mp3",
        comment:
          "初めまして。ノマと申します。この度はSOUND VOLTEXに私の曲を収録して頂き大変嬉しく思います。\nSOUND VOLTEXのゲーム性を考慮し、プレイしていて気持ち良いキメやブレイクを意識しました。\n飽きさせない曲の構成を意識し「一度聴いただけで印象に残る曲」を目指しました。\nサビのボーカルエディットを映えさせる為にサビ以外は普通の歌にしました。\nちなみに、歌詞に意味は特にありません（笑）\n最後に改めてありがとうございます。私の曲でSOUND VOLTEXを楽しくプレイして頂ければ幸いです！",
        removed: true,
      },
      {
        artist: "ニシジマユーキ(第１回目配信楽曲）",
        title: "Diffused Reflection",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/09.mp3",
        comment:
          "SOUND VOLTEXをお楽しみの皆様、初めまして！ニシジマユーキといいます。\n普段はGINGAレーベルなどで曲を作っています。念願叶って初採用、感無量です。\nこの曲は実際に譜面になった時にどんな風になるか考えながら作った曲で、ばばばばっ！でギュイーンっ！でシュワシュワ！な感じです。\nスーパーソニックなドラムンベースです！存分に楽しんで貰えたらとても嬉しいです！\n＜(。ε゜)＞ENJOY ショートボタンを叩き続ける\n※こちらの作品はジャケットも一緒に採用されました！\nイラストレーター名：ピコハン\nねんがんの　ボルテこうぼに　ごうかくしたぞ！\nキャライラストを担当させていただきましたピコハンです！今とても嬉しいです！最高な気分です！\nでもSOUND VOLTEXプレイしたことないのでこれを機にどんどんプレイしていきたいと思います！\nイラストレーター名：HYOUTAN\nはじめまして、その他諸々担当しました黒幕のHYOUTANです。採用が決まった時は興奮のあまり鼻血を出してしまいました。\n皆さんも鼻血には気をつけてハイスコアを目指しましょう。私も1クールのハイスコアより1回の伝説を目指して頑張ります。",
      },
      {
        artist: "ヒゲドライバー(第１回目配信楽曲）",
        title: "GIGI BABA",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/10.mp3",
        comment:
          'お久しぶりです、ヒゲドライバーです！\n今回、同時に2曲も採用していただきました、ありがとうございます！\nこの曲は「PULSE LASER」同様、メロディーで押していく感じの、速い4つ打ち曲です。\nサビで転調して、一気に盛り上がります、ホーホー！\nタイトルの読みは元々「ギギババ」だったんですが、\n周りに「爺婆」って言われたので、もうそれでいいです。\nジジババ、よろしくお願いします！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Litbi\nお久しぶりです。「PULSE LASER」に引き続き、再度採用頂きましてありがとうございました！\nしかもまさかのヒゲドライバーさんご本人との正式コラボ、自分が一番驚いております（笑）\n曲を聴いて、ライバル同士を感じさせるような印象を受けたので、"アイツ"を参戦させてみました♪\nジャック「JACK POT！ よっしゃー！ハイスコア更新…って、げげっ！同点？！」\nローズ「甘いなジャック。これくらい、私には造作も無いよ♪」\nジャック「マジかよ？！わ…ワンモア！負っけねー！！」\nさぁ、皆もこの曲でマッチングバトルだ！\n.*｡.:・゜.v(￣┏3┓￣)vv(*´ω｀*)v.｡.:・゜*',
      },
      {
        artist: "void (Mournfinale)(第１回目配信楽曲）",
        title: "Vindicator",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/11.mp3",
        comment:
          "World Vertex以来になります、お久しぶりですvoidです。\n今回はとても辛い時期にあらゆる鬱憤を叩きつけるように作った曲のため、\n執念深いというか力強い曲になったと感じています。\n懲りずに映画音楽色を出していますが、シーンとしては前作と真逆、\n絶望の底から再び立ち上がって行くイメージで制作いたしました。\n普段なかなかここまでテンポの高い4つ打ちは作らないのですが、\nこれは自分がクリアできないくらいの譜面がつかないかなーとか\n疾走感とかそんな事を考えて作った結果です。\nTYHYされたい。",
      },
      {
        artist: "ginkiha(第１回目配信楽曲）",
        title: "Starlight Express",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/12.mp3",
        comment:
          'どうもginkihaと申します～，またまた採用シテイタダケマシタ！\n普段は同人サークル「NIZI-RINGO」にて作編曲しております。\n今回は他でも色々お世話になっているイラストレーターのwk.と一緒にボルテにやって参りました．\n楽曲のイメージにぴったりなイラストと共にお楽しみいただければ幸いです！\nさてこの曲ですが，\nタイトルの通り，スターライトでエクスプレスな(？)曲です！！\nさながらGG現示で"光速"進行といったところでしょうか，\nピコピコキラキラで最高ォ???にドチャ速なリズムへ乗り遅れないようお気をつけ下さい！！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：wk.\n本日はスターライトエクスプレスをご利用いただき誠にありがとうございマス。\nお降りの際はスペースデブリにご注意下さい、お出口は右側です。',
      },
      {
        artist: "削除(第１回目配信楽曲）",
        title: "Raptate",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/08/13.mp3",
        comment: "はじめまして。\n削除です。\nファンキーな曲作りました。\n是非プレイしていただけると嬉しいです！",
      },
    ],
  },
  remix04: {
    name: "東方紅魔郷リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_04.jpg",
    sounds: [
      {
        artist: "すのうまん(第7回目配信楽曲）",
        title: "おお われら喜び讃うべし、主よ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/28.mp3",
        comment:
          "初めまして、すのうまんです。\nまさか自分が採用して頂けると思わなかったので、とても驚きました。\n驚き過ぎて、昼食の唐揚げ定食が喉を通りませんでした。\n(´^ω^｀)",
      },
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: "Lunatic Rough Party!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/29.mp3",
        comment:
          'かめりあです！採用ありがとうございます。\n昨今の"Bass Music"ブームに強烈にハマッてしまった強いエモーションをふとましいサウンドに込めました。\n深夜のクラブに響く熱狂的なクラウドの歓声、そして冷めることを知らないLunaticなParty、というイメージでの制作でした。\nそのためか自分も深夜の自室で、この曲とともに一人首を振ったりするなど盛り上がって（楽曲の盛り上がり感等に繋がっていれば幸いです）制作できました。\nベースラインに原曲のメロディを隠すなど、色々やりたいことをやってしまったような感じがありますが、是非リズムに乗って楽しんで頂ければ、と思います。\nドゥユワナパーティ？',
      },
      {
        artist: "Yooh(第7回目配信楽曲）",
        title: "上海紅茶館 ～ Chinese Tea Orchid Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/30.mp3",
        comment:
          "採用ありがとうございます！！Yoohです！！（ヨーフでもヨーホでもないですよ！）\n今回もSOUND VOLTEXらしく疾走感を大切に、そして少し華やかな感じにアレンジしてみました！\n原曲らしさを残しつつどのようにメロディーを崩していくか等、色々苦労しましたがとても楽しく製作できました！\nスピード感溢れる上海紅茶館、是非実際の筐体で体感してみてくださいね！！\nそして今回なんとなんとあのアピカ採用者のアサヤさんにジャケットを描いていただきました！！\nとても素晴らしいジャケットすぎでデータを頂いた時は本当に感動しました…！！\nアサヤさんバイヤーです！！\n楽曲の方もジャケットの方も本当に素晴らしい作品に仕上がったと思います！！\n「上海紅茶館 ～ Chinese Tea Orchid Remix」どうぞよろしくお願いします！！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：アサヤ\nこんにちは、どうもアサヤです。\nこの度ジャケットをかかせていただきました。このような機会をくださりYoohさんには本当に感謝です。\nジャケットは私なりに楽曲のイメージをぶつけてみましたので実際にプレイして何か感じていただけたら幸いです。\nちなみに曲のタイトルの「Orchid」には二人で考えたとある花の意味が込められています。\n直訳すれば「蘭」ですが、それとは違うある花からとっています。その花の名前は…それに込められた意味とは？\n明るいのにどこか切ない、そんな素敵な楽曲、是非プレイしてみてください！",
      },
      {
        artist: "はるなば(第7回目配信楽曲）",
        title: "U.N.オーエンは彼女なのか？haru_naba Remix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/27.mp3",
        comment:
          '皆さんこんにちは。"はるなば"と申します。\nこの度は、「東方紅魔郷リミックス楽曲コンテスト」の受賞を賜り厚く御礼申し上げます。\nこの原曲を基にしたアレンジ曲などは数多くあり、ご存知の通り既にSOUND VOLTEXにも素晴らしいアレンジ曲が数曲収録されております。\nそこで私めは今回SOUND VOLTEXとしての「U.N.オーエンは彼女なのか？」そしてフランドール・スカーレット様をテーマにあの凶悪且つ鬼畜で絶望的なちょっとおかしな人向けの楽曲になるよう想いを込めてカオティックハードコア風アレンジをさせて頂きました。\n楽曲的にも自分がSDVXでやりたい感じの楽曲に近づいて来たかなと少し実感しつつ、何よりも皆様が実機で楽しく遊んで頂ける事を心から願っております。\n最後に一言失礼いたします。\n飛ばすゼッ！！弾幕ッ！！',
      },
      {
        artist: "Riz(第6回目配信楽曲）",
        title: "ルーネイトエルフ(Riz Mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/25.mp3",
        comment:
          "初めまして。Rizと申します。\n以前はグラサンねこと名乗って細々と曲を作っておりました。\nポップンとIIDXに特に強く影響を受けながら音楽を続けてきた私としては今回の採用はとても大きなニュースでした！\n今回はドラムンベース調の曲ですが、普段はオーケストラ、ジャズ、トランス、ガバなどいろいろ作ってますので、またお目見えできる機会があれば今回とは全く違う曲調かもしれません。\nともあれ、この度はありがとうございました！\nまだ見ぬ譜面は私がクリアできる範囲の控えめな難易度だといいな！！！",
      },
      {
        artist: "天音 (Rolling Contact)(第6回目配信楽曲）",
        title: "We Are The Scarlet (SDVX Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/26.mp3",
        comment:
          "初めまして。普段はRolling Contactというサークルでいろいろやっております、天音と申します。\nかれこれ10年以上触れている「音ゲー」というものに、公募という形ですが参加できてとても嬉しいです！\nそんな記念すべき初参加の楽曲は、自分の得意とするハードコアというジャンルで挑んでみました。\nまさに疾走感400％、思う存分ノリノリでプレイして頂けたら嬉しいです！",
      },
      {
        artist: "void (Mournfinale)(第6回目配信楽曲）",
        title: "Devotion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/24.mp3",
        comment:
          "3ヶ月（推定）ぶり、3度目の出場です。Mournfinaleの方のvoidです。そろそろ覚えて頂けたら幸いです。\nFINAL STAGEの道中曲ということで、BPMを必要以上に盛らず、重々しい雰囲気を出せるよう制作しました。\nようやく、締め切りの1週間前くらいから曲を作り始める事を学びました。\n人はこうやって成長していくんですね・・・\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：灼\n灼です！最近はときレスばっかりやってます。\nクラッとしてグラッとする一瞬を永遠に、\nそんな感じで描きました！！ゆるふわ。",
      },
      {
        artist: "Shiron feat. Kuroa*(第5回目配信楽曲）",
        title: "やばいつよくてあたまいいあたいのうた",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/22.mp3",
        comment:
          "げんそうきょういちのびしょうじょがたのしいうたをうたうよ！みんなおどりくるってしまえー！\nこんにちは！Shiron(シロン)です！\n初合格でまさかの2曲採用…なんと言ったら良いか。嬉しさを形容するだけの言葉が思い浮かびません…\n今回は不朽の名曲『おてんば恋娘』に超インテリジェントなRemixを施しやがりました！\n歌ってくれたのはなんとあのKuroa*さん！彼女に一体なんてことをさせてしまったのでしょう。\n作詞は『croiX』の片割れのあま猫さんが手伝ってくれました！\nハハハ\n『やばいつよくてあたまいいあたいのうた』を是非とも宜しくお願いします！L('ω')┘三└('ω')」(Shiron：編曲、作詞)\n作詞という形でまたFLOORに参加できるとは思いもよりませんでした。あのあま猫です。\n「電波ソングを作りたい」「あたい強いぜ強すぎてやばいぜ的なことを羅列してください」\nということで、ありったけのあたい強いぜ強すぎてやばいぜ的なことを羅列しました。\n本当に歌詞に採用していただいて、歌っていただいて、FLOORに採用していただけるとは、私が＼YABAI／と叫ばざるを得ません。\nYABAIYABAIYABAIYABAI(ﾆｬｯﾎｲ)ありがとうございます。(あま猫：作詞)\n東方では射命丸が好き。\nこんにちわ、Kuroa*です！\nこのたび、めっちゃやばい感じでやばいなあ～つよいなあ～とおもいながらやらせていただきました・・・！！！\n今までSDVXさんで歌ってきた歌とはまったくカラーが違うのでKuroa*の今までうたった歌を聞いてくださっている方が聞いたらオッ・・・と思われるのではないでしょうか？\n私的にもこんなヤバい歌を歌わせていただけるとはちょっと夢にも思っていなかったので非常にヤバいなあ～と思っております。\nとにかくとってもやばいつよくてあたまいいあたい！という感じを出せてたら嬉しいです。(Kuroa*：歌唱)",
      },
      {
        artist: "源屋 feat. 3L(第5回目配信楽曲）",
        title: "桜華月想-SDVX EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/23.mp3",
        comment:
          "東方アレンジコンテスト、どうしようか悩んだ結果お気に入りの楽曲をブラッシュアップすることに致しました！\n3Lさんの歌声に、妖魔夜行の何処と無くオリエンタルで憂いのあるメロディをキャッチーなハウス的ダンスポップにしました！\n楽しんでいただければ幸いです！！！\n源屋でした！",
      },
      {
        artist: "t+pazolite(第5回目配信楽曲）",
        title: 'Electric "Sister" Bitch',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/21.mp3",
        comment:
          "とぱぞなんちゃらさんです。\n東方アレンジのコンテストということで、なんだかんだ東方を10年近くやっている身としては是非とも！\nという感じだったので、実際に受かって嬉しく思います。\nそんな経緯もあり、今回の曲は昔作った曲のリメイク版です。\n今は全然使わなくなった音とか展開とか当時を思い出して作ったので普段とはちょっと違う雰囲気ですが、なかなかハッピーな感じに仕上がったんじゃないでしょうか。\nリメイク前を知っているという稀有な方は、色々ニヤニヤしちゃってくださいな。",
      },
      {
        artist: "Jerico(第4回目配信楽曲）",
        title: "Catadioptric",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/16.mp3",
        comment:
          "この度は採用頂き有難うございます。Jericoと申します。\n同人音楽サークル「ジェリコの法則」を1人で活動中です。\n原曲「U.N.オーエンは彼女なのか?」は大好きな曲で過去4回ニコニコ動画で発表しております。\n激しいアレンジを楽しんでプレイして頂ければ幸いです！",
      },
      {
        artist: "wobble magic library(第4回目配信楽曲）",
        title: "ワヴル魔法図書館",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/17.mp3",
        comment: "喘息です。",
      },
      {
        artist: "Illusion Sonic(第4回目配信楽曲）",
        title: "夢の空、約束の場所",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/18.mp3",
        comment:
          "ただ楽しい音楽を作りたい！ －という気持ちで\n誕生したサークル「Illusion Sonic」です。\n多国籍のメンバーが集まって、\n皆が楽しめる音楽を作るためにいつも頑張っております。\nよろしくお願い致します。",
      },
      {
        artist: "Ayatsugu_Otowa(第4回目配信楽曲）",
        title: "赤より紅い夢-Aya2g Tech Dance Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/19.mp3",
        comment:
          "どうも、Ayatsugu_Otowaです。皆さん、音楽で競い合った事ってありますか？\nSOUND VOLTEXはミーツマで、簡単に誰でも競い合う事が出来ます。\n全国の――いや、全世界のユーザーとオンライン対戦で競い合ったらいいじゃん！\nえっ！？(驚愕の表情で)　始めるのが、怖い？　ﾊﾞｯｶｵﾏ…俺がついてるだろ！？\n俺と一緒に、サンボル！v('ω')\nと、いう訳で\nどうも、超恋愛☆エクストリーム・ガールマンです(ﾌﾌｯ\nまた来ちゃった！ﾏｧｰﾀ来ちゃった！人のネタ…！\n流石にこれ以上ネタはないです！だから今日は勢い！勢いだけで曲紹介します！\n今回のリミックス、めっちゃ気合いをダメだ字数が足りな",
      },
      {
        artist: "Tracy feat.ほたる(第4回目配信楽曲）",
        title: "Indomitable Spirit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/20.mp3",
        comment:
          "皆さんはじめまして！\nAmateras RecordsというサークルをやってますTracyと申します。\nラーメン屋さんで、ラーメンが出てくるのを待ってる時に、Twitterを見てて偶然、\n今回のコンテストの存在を知り、ラーメンを食べてすぐ制作に取り掛かりました。\nボーカルはサークルのメンバーで、個人サークル[LUCIOLE*CAFE]でも活動中のほたるさんが、\n作詞はこちらもCDでいつも参加してくれている[EastNewSound]の海兎さんが担当してくれました！\n是非楽しんでプレイして頂けたら嬉しいです…！",
      },
      {
        artist: "MUZIK SERVANT feat.CHERICa(第3回目配信楽曲）",
        title: "Over the Starlit sky",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/13.mp3",
        comment:
          "楽曲採用ありがとうございます！\nヒマワリRemix以来になります、お久しぶりです。MUZIK SERVANTです！\n今回は「東方紅魔郷リミックスコンテスト」という事で、図書館にいるロケット開発も出来ちゃう少女の曲を僕が普段運営している東方アレンジを中心とした同人サークル「音召缶-OTOMEKAN-」の主力メンバーで(ボーカル:CHERICa、ギター:ヲタクのコマ）疾走感とグルーヴ感テンコ盛りのVOCALアレンジを作りました！\n唸るギターにハードコアサウンド×女性ヴォーカル！\n更に、細かく刻まれたシンセリフや要所要所でのビートやフィル展開等実際にゲームをプレイしている姿を想像しながら作り上げた曲でもあるので一人でも多くのプレーヤーの方にゲームセンターでプレイして楽しんで頂けたら嬉しいです！！\nよろしくお願いします！！！",
      },
      {
        artist: "masty(第3回目配信楽曲）",
        title: "魔法少女達の百年祭（masty core remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/14.mp3",
        comment:
          "どうも初めまして、そしてお久しぶり(？)、mastyと申します。\nこの度の採用大変嬉しく思っております。自分が手がけた楽曲が音楽ゲームで遊べる日がこようとは‥\nなんというか、感無量というか言う事ありませんね。\n今回は「魔法少女の百年祭」をハードコア風にリミックスさせていただきました。\nピコピコ音を作って打ち込んでみたり転調させてみたり‥といろいろ工夫するのが作ってて楽しかったです。\nこの曲をプレイして楽しんでいただければ幸いです。それでは。",
      },
      {
        artist: "Hull feat.℃iel(第3回目配信楽曲）",
        title: "Darkness Pleasure",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/15.mp3",
        comment:
          "はじめましてHullと申します。このたびは採用ありがとうございます！\n普段はvaguedgeという個人サークルで楽曲を作っています。\nルーミアの可愛らしさと妖しさ、サウンドの格好良さと爽快感を意識して作りましたので、楽しくプレイしていただけたら何よりです。\n(Hull)\n初めまして、℃iel（シエル）と申します。\nBEMANIシリーズは初代からプレイしておりましたので、いつか自分がVocal担当出来たらなぁ……という淡い夢を抱いていました。\n今回Hullさんをお誘いして参加させて頂きましたが、採用して頂き本当に嬉しいです！\nちょっと大人なルーミアが夜の散歩中に…？というイメージで作詞しました。\n妖怪である彼女と永遠の時を誓うとこうなりますよという曲です。\n「貴方は食べられる人間ですか？」\n(℃iel)",
      },
      {
        artist: "Hyuji(第2回目配信楽曲）",
        title: "U.N. Owen was her? (Hyuji Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/08.mp3",
        comment:
          "『RTTF Records』『DARKSIDE APPROACH』を中心に活動中のHyujiです。\n僕の音楽への興味は15年程前にDDRから始まったので、今回SDVXで合格出来たことを光栄に思いますし、散々お世話になった音ゲーに少しでも恩返しが出来るなら嬉しい限りです。\n選曲はリミックスに対してプレッシャーや責任すら感じたほどの名曲ですが、原曲が好きな人とSDVXが好きな人双方に納得して頂けるものに仕上げたつもりです。\n素晴らしい楽曲をリミックスする機会と多くの方に聴いて貰える場を頂けたことを感謝致します。",
      },
      {
        artist: "2ボス如きに負けるかぼちゃではなｙうわー(第2回目配信楽曲）",
        title: "愛くるしフール　-Not EASY!!-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/09.mp3",
        comment: "(ｸﾟﾛﾟ)ｸ　あかん。",
      },
      {
        artist: "Shiron(第2回目配信楽曲）",
        title: "Lunartic Dial",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/10.mp3",
        comment:
          "初めまして！Cyberaser Records等で活動しているShiron(シロン)と申します。以後、どうぞお見知り置きください。\nこの度はご採用頂き、誠にありがとうございます！正直、仮採用メール見た時心臓止まるかと思いました。\n「ボルテの公募に合格する」というのが目標のひとつだったので、言葉に表しきれないくらい嬉しいです。\n今まで投稿された音楽の数だけ、やり場のない苛立ちや、その何倍、何十倍もの喜びがあるんだなー、ということを実感しました。\nさて、今回は『月時計 ～ ルナ・ダイアル』をゴリゴリのバッキバキのシュランツにRemixしました！\nレイヴ的な要素を織り交ぜつつ、声ネタマシマシのズンシャカドコバキに仕上げました。\n頑張って作ったので、是非楽しんでプレーしてください:(:;ﾞﾟ'vﾞﾟ';人;):！！\n感想をtwitterやらなんやらで送ってもらえると嬉しいですo(^＿^)o",
      },
      {
        artist: "くるぶっこちゃん(第2回目配信楽曲）",
        title: "赤より紅い夢 -lucid dream Mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/11.mp3",
        comment:
          "誰もが一度は夢見る東方の世界。\n遠い夢であるからこそ、より強く現実であれと願うのでしょう。\n赤より紅い夢 -lucid dream Mix-\nあなたにとって、最も近い夢でありますように。",
      },
      {
        artist: "七条レタスグループ starring ココ(第2回目配信楽曲）",
        title: "太陽はやめて！ぼくらのスカーレット警察",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/12.mp3",
        comment:
          "七条レタスグループの代表を務めております、七条レタスと申します。\nこの度はリミックスコンテスト採用の栄誉を頂き、大変光栄に存じます。\n弊グループでは「テン年代の新しい電波ソング」をスローガンに、日夜（電波ソングの）研究開発を進めております。\n本作は記念すべき初の成果物ですが、これを端緒に更なる（電波ソングの）殺傷力・破壊力の向上、実戦における（電波ソングの）優位性確立、そして来る（電波ソング）最終戦争への貢献を目指し活動して参ります。\nどうぞ今後ともお引き立ての程、宜しくお願いいたします。",
      },
      {
        artist: "C-Show(第1回目配信楽曲）",
        title: "U.N.オーエンは彼女なのか?(TO-HOlic mix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/01.mp3",
        comment:
          "どうも、明日香CのCの方、PANIC HOLICのCの方、Lite Show MagicのShowの方及び広報担当C-Show(ししょう)です！\nSOUND VOLTEX FLOORを通じて、こうしてまた皆さんに楽曲をご提供出来る事になりまして、感激です！\n今回は大人気コンテンツである東方アレンジのコンテスト。自分にしか出来ないようなアレンジをしちゃおう！\nという事で、今回はネジ数本抜けたなんともホリッキーな曲に仕上がりました！\nホリッカーの皆さんには喜んでもらえるようなアレンジになったと思いますんで、ノリノリでプレイしてくださいまし！",
      },
      {
        artist: "さわわ(第1回目配信楽曲）",
        title: "Cirno Break",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/02.mp3",
        comment:
          "はじめまして!『さわわ』と申します!この度は採用して頂き誠に有難うございました！\n東方アレンジはよく疾走感溢れるアレンジを作成するので『疾走の人』なんて呼ばれる事も有ります。\n今回の『おてんば恋娘』も疾走感溢れるremixに仕上げました。\n楽しんで疾走…プレイして頂けたら嬉しいです。\n最後に・・・我が子のように送り出したremixが初めて受賞され皆様にお届けする事ができとても光栄です。\n今後とも何卒『さわわ』を宜しくお願いします。\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ",
      },
      {
        artist: "Arch(第1回目配信楽曲）",
        title: "Silver Impact",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/03.mp3",
        comment:
          "( ´>_ゝ<`)<はわわｗ！僕はワッヘイ君デスｗ\nはじめまして、Archです！知っている人は知っている「SDVXの公募落ちたら女装して逆立ち」の人です！！\n普段はLilium RecordsやWahhei Recordsで活動しています。\n自分が曲作りを始めたきっかけに音ゲーがあるので、ゲーセンの筐体で自分の曲を聴けると思うと胸熱！！\n採用通知見た時は嬉しすぎて椅子から転げ落ちました！\n曲のほうはUK HARDCOREを強く意識したものになってます！ぜひぜひプレイしてください！！\nv('ω')",
      },
      {
        artist: "DOUBLE HELIX【たちのん&amp;零-zero-】(第1回目配信楽曲）",
        title: "Venona",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/04.mp3",
        comment:
          "ﾄﾞﾝﾄﾞｺﾄﾞﾝﾄﾞｺ ﾄﾞﾄﾞﾝﾄﾞﾝ\nｽﾞｯﾀﾝｽﾞｽﾞﾀﾝｽﾞｯﾀﾝｽﾞｽﾞﾀﾝｽﾀﾀﾀﾀﾀﾀﾀ…(ｼｬｰﾝｼｬｰﾝｼｬｰﾝ!!)\nﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺﾄﾞｺ\nﾃｹｽﾃﾀﾝ―――！！(決めポーズ)\nあ、どうも。DOUBLE HELIXのDなほうです。\nドラムとかピアノとか色々やりました。夏なんで爽やかなメタルです。\n涼しげに疾走する感じの曲ですが、心はきっと熱く燃え上がるはず！？\n素敵にキラキラなジャケットとともに爽やかにプレイしてみてね！ﾃｹｽﾃﾀﾝ!!\n(たちのん)\nはじめまして。DOUBLE HELIXのHなほうの零 -zero-です。\nFaded Azureとかいうサークルでギター鳴らしてます。\nあ、いや、エッチじゃないです。本当です。\nDなほうに言わされてるんですよ、これ。勘違いしないでくださいね。\n……やっぱりエッチかも…？だって男の子だもん。\nということで、ギターとかギターとかベースとかギターとか弾きました。\nメタルで且つちょいちょい爽やかかもしれません。爽やか推しです。\nよろしくお願いします。\n(零 -zero-)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：teco_uk\n初めましての方は初めまして。そうでない方は…多分いません。\nDOUBLE HELIXでもDなほうでもHなほうでもない普通のteco_ukです。\n今回は、楽曲ジャケットイラストを爽やかに担当させていただきました。\nそしてそして採用してもらえてとても嬉しいです。ありがとうございます！\nそう･･･マジカルきらきら爽やかパチュリーが描きたかっただけです！！！！！\n･･･はい。\n(teco_uk)",
      },
      {
        artist: "uno(IOSYS)(第1回目配信楽曲）",
        title: "#Fairy_dancing_in_lake",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/05.mp3",
        comment:
          "GUMIオリジナル、SDVXII製作記念リミックスコンテストに続き4度目まして！四度（シド）・ヴィシャス！uno(IOSYS)と申します。\n東方紅魔郷リミックス楽曲コンテストでの楽曲採用、嬉しいです。ありがとう御座います！\n楽曲募集の時期から推測して、きっとこの曲は夏にリリースされるに違いない！\nそう思い、話題のシーパンクにスポットを当て、湖で踊る大妖精をイメージしました。\n爽やかで、水の中を漂うようなアレンジになったと思いますが、このままいくとこの曲がリリースされる頃には夏が終わってそうですね！ｸｯｿｰ!へこたれへん！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：猫餅\n猫餅と申します＼＼└('ω')」//／／\n採用していただけて本当に恐縮です！はわわｗ！\nジャケット制作に慣れていない苦労はありましたが、\nunoさんはもちろんのこと、RoughSketch様にアドバイスしてもらったり、\nDJ.Laugh氏に作品のチェックをしてもらったり、\nたまにラフ助さんに愚痴を聞いてもらったりしながら、\nダサくてスタイリッシュでシーパンクなジャケットが完成しました！\nゆっるーい大妖精ちゃんがお気に入りですね。あと水草。\nそんなわけで「#フェアリーダンシングインレイク」。\n「どんな譜面になるんかなー」って妄想が絶えない良い曲です。\nプレイするときはハッシュタグにしちゃえばいいと思います！",
      },
      {
        artist: "signum/ii feat. irony(第1回目配信楽曲）",
        title: "INVITATION SiGN -SDVX Version-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/06.mp3",
        comment:
          "初めまして！\n同人音楽サークルsignum/ii（ハーフシグナム）と申しまして東方Projectのアレンジ楽曲を中心にCDリリースなどで活動しております。\n紅魔郷といえば…！？そうだね、セプテットだね。\nというわけでsignum/iiでも人気の高いINVITATION SiGNをゲーム性重視で再アレンジしたところ…見事ジャケットと共に採用して頂きました！\n本当にありがとうございますッ\nメンバーの江口孝宏とジャケットのUGUME君でバンザイバンザイ！\n是非是非！プレーしてみてください！signum/iiでした！\np.s. FLOORで配信の僕の曲も宜しくお願いしますｗ　by cittan*\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：UGUME\n今回signum/ii様のジャケットイラストを描かせていただきましたUGUMEです。\n亡き王女の為のセプテットのヴォーカルアレンジ「INVITATION SiGN」ということで、香霖堂Verのレミリアを描かせていただきました！！\n「運命は気まぐれ、忠実な下僕...」\n優雅で壮大で、時に激しい運命の旋律を、是非お楽しみ下さい！！！\n私自身ClearLeMelという同人音楽サークルで代表をやっていますので、良かったらそちらの方もよろしくお願いします！！",
        removed: true,
      },
      {
        artist: "ねこみりん feat.みゆ(第1回目配信楽曲）",
        title: "モモンが門番ばんっ☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/04/07.mp3",
        comment:
          "皆様はじめまして！「nekomimi style」のねこみりんと申します。\nこの度は採用して頂きましてありがとうございます！\n多分皆さんが思ってる通りの東方電波ソングアレンジです。\n一緒に歌っちゃうくらいのテンションで＼ババババーン！／と楽しんでくだサイ！\n最後に一言。\n『クイズマジックアカデミーのユウは俺の嫁！』\nみゆです。この度は本当にありがとうございます！\n今回の楽曲は、紅美鈴のキャラソンをイメージして制作いたしました。\n明るくて元気いっぱいだけど、ちょっぴり空回りしている所がなんとも可愛らしい、ちゅうg…め、メイリンの歌です！\n歌詞にもぜひ注目してみてくださいね！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：石王マサト\nヤケ顔ダブルピース！！\n初めましてこんばんはこんにちは石王マサトです！ いしおうです！\n普段は寝たり起きたり筋肉と猫耳をこよなく愛したり寝たりしています。\n見知った方々や尊敬する方々がひしめくホットなゲームに僭越ながらねこみさん＆みゆさんらと共に馳せ参じる機会を頂けました。\nありがとうございます！！ ありがとうございます！！！\n美鈴さんかわいい！！ 幸薄そう！！ 代わりになぐられたい！！ 踏まれたい！！\nありがとうございます！！！ ありがとうございます！！！",
      },
    ],
  },
  original10: {
    name: "夏だ！休みだ！自由研究オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_10.jpg",
    sounds: [
      {
        artist: "Diceros Bicornis(第7回目配信楽曲）",
        title: "Innocent Tempest",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_01.mp3",
        comment:
          "採用ありがとうございます！\n主にピアノとか曲構成とか担当しました。xiです。\n今回はあのBlackYさんと合作させていただきました！わいわい！\nピアノで構想を練っている時に、テクニック重視で行くか、それともノリ重視で行くかという相談をした所、｢両方でおねがいします！｣と言われたので、変拍子の要素を入れつつ、ノリを重視しつつ、良い所取りして頑張ってみました！\nお互いの個性が合わさった結果、今までにないようなものが出来あがったと思いますので、楽しんでプレイして頂ければ幸いです。\n(xi)\n採用ありがとうございます！\n主にピアノ以外のいろいろドンドコ担当してるのはBlackYって人です。\n今回はかなり意外な？組み合わせでの参戦となります。\nなんせ自分ですらあのxiさんと合作させていただくことになるなんて思いもしなかったんです・・・！わいわい！\n自分の色を出し切って見せました。曲を聴いて頂ければ全てがわかる、と、思います。是非ともプレイして頂ければ、と、思います。\n(BlackY)",
      },
      {
        artist: "Kaoru feat.FG75(第7回目配信楽曲）",
        title: "ボルテ体操第一",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_02.mp3",
        comment:
          "「夏休みといえば自由研究、そしてボルテ体操！\n夏休みが過ぎても、ボルテ体操は全国のボルテプレイヤーの皆さんの健全なボルテライフをお助けします。\nボルテ体操で準備はOK！ツマミもボタンも絶好調で行きましょう。」by Kaoru\n「うっほ！！うほうほうーっほほほーぅ！！！！！(※大変喜んでいるようです。採用誠にありがとうございました！)」by FG75",
      },
      {
        artist: "かぼちゃ「黒幕はあやつぐ」と供述しており(第7回目配信楽曲）",
        title: "侵蝕コード：666　-今日ちょっと指（略-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/7_03.mp3",
        comment:
          "-かぼちゃ-\nお世話になっております。かぼちゃです。\n思えば幼い頃は夏休みの宿題もやらずに登校して「宿題やったんですが家に忘れました」「じゃあ家に取りに帰って下さい」「Oh……」って先生の前で棒立ちしてたものです。\nでも今はちゃんとこうして夏休みの自由研究をこなして投稿してるわけですね。\n登校ならぬ、投稿、ってわけですね。\n登校ならぬ、投稿、って、ね。\n……ね！\n-Ayatsugu_Otowa-\nあ「むきゅーっ！悪のコメント思いつかない大魔王が現れためう！」\nか「落ち着いて！このかぼちゃステッキで魔法少女フィーバーロボに変身するんだよ！」\nあ「そそそそんな設定聞いてないめう！」\nか「大丈夫だよ！絶対、大丈夫だよっ！」\nというやりとりや\nあ「めうー！DAWが落ちたー！？」\nか「大丈夫！必殺！締切前のエナジードリンク光線だよっ！」\n（！どっかーん！）\nあ「こうしてアツい新曲が出来ためう！」\nか「自由研究のおかげだね！」\nというやりとりがあったりなかったりしました。\n二人の情熱がクロスしたテッキーでロックな曲、楽しんでいただければ幸いです。",
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "crazy cinema story",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_01.mp3",
        comment:
          "採用、ありがとうございます。黒魔です！\n今回は「自由研究」がテーマになっていたので、新しいジャンルに挑戦してみました。\n感情を持ち暴れ回る映画館の一生をイメージした曲になっています。\nプレーしながら、色んな物語を妄想して貰えたら嬉しいです。どうぞ、よろしくお願いします！\nイラストレーター名：かぶと山\nこの度はとても素敵な曲のジャケット絵を描かせていただきまして、誠にありがとうございます！\n曲がとてもボス曲っぽかったので、ボスキャラっぽい感じのコをイメージして描きました。「黒」魔さんの曲なので、黒い服を着ていますｗ\n他のボルテキャラ共々、是非可愛がってあげてください！ｗ",
      },
      {
        artist: "上村香月(第6回目配信楽曲）",
        title: "神となり彼が見た境界線",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_02.mp3",
        comment:
          "こんにちは！普段はボカロPとして活動している上村香月と申します。\nこの度は三度目の採用、誠にありがとうございます！！\n自分の楽曲がこうして色々な方にプレーしていただけるのは本当に嬉しい限りです！\nそれで今回の楽曲ですが、今までとは違いかなり激しく仕上がりましたww\n歪の深いギターサウンドにシンセを乗せた疾走感あるロックです。\n中二病全開の歌詞とタイトルですが是非プレイしてみて下さい！\nそれではよろしくおねがいします！！\nイラストレーター名：みずは\n皆様はじめまして、こんにちは。\n今回「神となり彼が見た境界線」のジャケットイラストを描かせて頂きました、みずはと申します。\nこのような機会を与えて頂いたこと、大変光栄に思います。\n楽曲の顔となるジャケットには、曲中に登場する「彼」に登場してもらいました。\nこれまでに収録頂いたアピールカードとは少々テイストの違うイラストとなりましたが、中二病全開の歌詞(上村さん談)を感じて頂ければと思います。\nとてもかっこいいサウンドですので、皆様是非プレイして疾走感を味わってください。\nそして楽曲と一緒に「彼」をよろしくお願いいたします。",
      },
      {
        artist: "yozaquar feat.ぁゅ(第6回目配信楽曲）",
        title: "嘘と接吻",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_03.mp3",
        comment:
          "初めまして！　yozaquarと申します。この度は採用ありがとうございます。\nオリジナリティーあふれる楽曲を募集という事でしたので、哀愁漂うビッグバンドシャッフルな曲を作りました。\nボーカルはフロアボーカリストでもお馴染みのぁゅさんです。大人っぽくて、刺激的な感じに歌っていただきました。\n遊んでも良し、聴いて楽しむのも良し、な楽曲に仕上がってます。\nよろしくお願いします！（yozaquar）\nこんにちは～ぁゅです！\nyozaquarさんの嘘と接吻を歌わせていただきました！\nこの曲にはスキャットや吐息が入っているのですが、普段なかなかやる機会のない表現方法なので、歌っていてとても楽しかったです！\nぜひたくさん遊んでください！（ぁゅ）\nイラストレーター名：pen\n「嘘と接吻」のジャケットイラストを描かせて頂きました、penと申します。\n力強いボーカルとホーンセクションにビビッ！と、情熱的で切ない歌詞にビビビッ！！と来て、鬼とけもののあいのこの悲恋愛をイメージしつつペンを走らせました。\n叶わぬ恋や届かぬ愛に身を焦がす系がたまらなく好きです…！\n改めてこの度はこのような光栄な場を頂き、ありがとうございました。\nこれから沢山の方に愛されるこちらの楽曲と共に、長く親しんで頂ければ幸いです。",
      },
      {
        artist: "xi(第6回目配信楽曲）",
        title: "Fiat Lux",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_04.mp3",
        comment:
          "二度目の採用ありがとうございます！xiです！\n今回は創造の光をイメージした曲です。光りあれ！\n疾走感を意識しつつ、自分の得意なことをやりつつ頑張りましたので、楽しんでいただけたら幸いです！\nイラストレーター名：雉本ユーヒ\nジャケットを担当させて頂きました雉本ユーヒです。\nこのような機会を頂きまして、とても光栄です!\n「Fiat Lux」を拝聴した時に、光が広がっていく様な美しさと力強さを感じました。\nそして、楽曲のイメージ【創造の光】がSOUND VOLTEXの世界感と近い印象を受けました。\nこの壮大な楽曲と世界観をどう表現するか考えた時、SOUND VOLTEX世界の中核を担っているレイシスちゃん達で展開しようと踏み切りました。\n画面に秘められた力強い光を感じて頂けたら幸いでございます...!",
      },
      {
        artist: "8284 feat. みかん汁(第6回目配信楽曲）",
        title: "ゴーイング マイ ウェイ！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/6_05.mp3",
        comment:
          "初めまして、8284と申します。\nこの度はSOUND VOLTEXに自分の曲を収録して頂き本当にありがとうございます！\n自分は作詞作編曲を担当致しました。\n「爽やかハッピー！でとにかく元気いっぱい！な女の子の曲」をイメージして作りました。\n見ていてこっちまで釣られて笑っちゃうような、そんな全力少女の爆進撃ストーリーを思い浮かべながら、どこまで突っ走れるか楽曲で挑戦してみました。\n笑ったり悩んだり、怒ったり泣いたり、憧れたり・・・そんな夢のある女の子を音で上手く表現する、それを一番に考えながら音を作っていきました。\n疾走感もしっかり持たせつつ、何度もプレイしてもらえるような曲に仕上げました。\n是非プレイしてみてくださいなっ！\n(8284)\nいつもお世話になっております！みかん汁と申します。\n歌いました！元気ハツラツ！\nまたまくらを濡らす日々です、よだれで！\n(みかん汁)\nこんにちは！ドラムで参加させていただきました！\n元気な曲なので元気にプレイしてもらえると嬉しいです！\n(たちのん)\nはじめまして、ギターで参加させていただきましたみゅーです。\n今回はポップな明るい曲だったのでギターも負けじと元気なノリで演奏しました！\nカワイイ歌詞にも是非耳を傾けながらプレイしてみてください！\nこの度は誠にありがとうございました！\n(みゅー)\nイラストレーター名：かさね\n8284 feat.みかん汁さまの素敵な楽曲のジャケットイラストを描かせていただきましたかさねと申します。\n明るくポップな曲と可愛い歌詞と歌声から「辛いことがあっても常に全力で笑顔で前向きな女の子の成長物語」をイメージして、その物語の主人公という設定で描かせていただきました。\n背景にも色んな表情の彼女がいますのでお暇があれば探してみてください。\nジャケットで楽曲の魅力を少しでも伝えることができれば嬉しいです…！",
        removed: true,
      },
      {
        artist: "かめりあ feat. ななひら(第5回目配信楽曲）",
        title: 'コンベア速度Max!? しゃいにん☆廻転ズシ"Sushi&amp;Peace"',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_01.mp3",
        comment:
          "本自由研究では“日本食における「回転寿司」と電波楽曲のハイブリッド化”について研究を行った。加えて「寿司によって世界平和をもたらす」という未知の理論に関する発見を含む。\nまた、共著（ボーカル）にななひら名誉寿司教授を迎え執筆した事をここに記す。（かめりあ）\nA piece of sushi is peace―――\n寿司の一部は平和です。\nそして大多数の寿司は一部の富豪寿司の平和のため働かされる。不平不満も溜まるが、毎日の労働で反乱する気力ｍサーモン美味しい\nそんなイメージで歌いました。どうぞよろしくお願いします！（ななひら）",
      },
      {
        artist: "Ym1024 feat. lamie*(第5回目配信楽曲）",
        title: "Future MUSiC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_02.mp3",
        comment:
          "皆さん、はじめまして！Ym1024と申します。\n今回採用していただいた楽曲「Future MUSiC」は、キラキラしたキャッチーなエレクトロポップです。\n楽しんでいただければ光栄です。\n(Ym1024)",
      },
      {
        artist: "こふ(第5回目配信楽曲）",
        title: "snow motion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_03.mp3",
        comment:
          "初めまして、こふと申します！この度は、楽曲を採用して頂きまして誠にありがとうございます。\n自分の曲がボルテに収録される事に強く憧れていたので、本当に胸がいっぱいです！\n「snow motion」は、白銀のゲレンデを駆け巡るキュートでポップなナンバーです。\nかわいさ＆爽やかさ＆疾走感の三拍子が揃った曲を目指して制作しました。\n是非とも楽しみまくって頂けると幸いですので、宜しくお願い致しますm(_ _)m",
      },
      {
        artist: "ke-ji(第5回目配信楽曲）",
        title: "絢爛創世絵巻物",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/5_04.mp3",
        comment:
          '前回Joyeuse(ジュワユース)という楽曲を提供させて頂きましたke-jiと申します。\n今回の楽曲はコナミ様の、がんばれゴエモンシリーズの様な"和洋折衷・絢爛豪華でカッコいいけど何処か変"な雰囲気を目指した楽曲です。\n南はスリーツー（ツースリー）と呼ばれるブラジル音楽はボサノバクラーベのリズムを軸に、北は北欧のバグパイプやティンホイッスル、中東はガムランやタブラにターキッシュなストリングス、それらを４つ打ち＋日本的な雰囲気で纏め上げました。\n和風な雰囲気を出す為には、俗にヨナ抜き音階と呼ばれる音階を用いて構成していくのが常ですが、当楽曲では単純なヨナ抜きではなく…とかやってるとキリがありませんね！\nともかく、無国籍風で何だか変だけどちょっとカッコいい気がする当楽曲「絢爛創世絵巻物」何卒よろしくお願いいたします！',
      },
      {
        artist: "XIzE(第4回目配信楽曲）",
        title: "will o' the wisp",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_01.mp3",
        comment:
          "「いつか僕もBEMANIに楽曲を…！」と夢見てから何年が経っただろう。早いものです。\nあの時、9つのボタン(正確には5ボタンから)に触れてから僕の人生は変わりました。\nスクラッチ、ギターやドラム、パネルに矢印(ﾊﾟｰﾉｩ)。僕はBEMANIに夢中になった。\n夜遅くまでゲーセンに通って腕を磨き、楽曲を解禁し、難関曲に挑む毎日。\n気の合う仲間もできて、切磋琢磨するライバルもできた。本当に楽しかった。\n僕の青春はBEMANIそのものであり、毎日たくさんの音色に包まれていた気がします。\nそんな僕も、いつしか作曲に興味を持ち始めるようになりました。\n―――「自分もBEMANIシリーズのような曲が作りたい！」\nこれが僕が作曲を始めるきっかけです。\nそれからはbeatnation RecordsのコラムやSotaさんの動画をひたすら見る毎日。\n(最近はkors kさんのインタビューを1ページ目から舐め回すように見ています。)\n「いつか僕もここで…！」と、それだけをモチベーションに独学で作り続けました。\nしかし作曲というのは難しく、僕の前に大きな壁をいくつも作っていきました。\n何度も何度も、僕の心を折っていくのです。\n向いてないのかな、センスがないのかな、自信がなくなることも多々ありました。\n挫けそうだった僕の前に現れたのは新しいBEMANIシリーズSOUND VOLTEXでした。\n誰もが平等にBEMANIに参加するチャンスを得られる、新しいBEMANI機種。\nそれは僕の心に大きな火を灯し、どこまでも頑張る力と希望をくれました。\n何度も何度も落選して、悔しかった。けれど、その度に強くなれた気がします。\n全力で挑んだ「夏だ！休みだ！自由研究オリジナル楽曲コンテスト」から1ヶ月。\nメールボックスを覗いて、仮採用の文字が見えたとき。\n僕は大きな声で叫び、頬が引きつるほど笑い、枯れるまで涙をながしました。\nその日は、今までの人生で一番の喜びと冷めない興奮が僕を寝かせなかった。\n―――ありがとうBEMANI、ありがとうFLOOR。\nこの曲と共に、ここから僕の新しい旅が始まります。\n皆様、今後とも末永くよろしくお願い申し上げます。―――(XIzEの手記より抜粋)\nおっと、前置きが長くなってしまいました。それでは改めまして･･･。\n皆様、はじめまして！XIzE(サイズ)と申します。名前だけでも覚えて帰って下さいね！\nこの度は大好きなBEMANIシリーズに自分の楽曲を採用して頂いて本当に嬉しいです！\nちなみに、小学2年生の頃の自由研究は「紙コップで作るコモドオオトカゲ」でした！\n「will o' the wisp」は妖狐と狐火をテーマに作った三味線エレポップです！\n三味線が涼しさを出しつつもシンセがピコリとなる賑やかな曲に仕上がりました。\n自分らしさとBEMANIらしさを上手く掛け合わせられたのではないかと思っています！\nぜひノリノリでプレーして頂けると嬉しいです！目指せ、Perfect Ultimate Chain！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：テステス\nテステスです！ジャケットを描かせていただきました！ここがボルテか…!!!!＞ヾ(:3ｼヾ)ｼ\n燐狐さん(妖狐)と黒火くん(ちっこい狐)と鬼火たちの一晩の狐祭！ワイワイ一緒に楽しんでいってね！！",
      },
      {
        artist: "かねこちはる(第4回目配信楽曲）",
        title: "雪女",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_02.mp3",
        comment:
          "こんにちは。\n前回採用して頂いた『殯』は歌モノでしたが、今回はインストでチャレンジしました。\n収録される時期が冬になると予想し、『雪女』をイメージして作曲しました。\n彼女の持つ「冷たさ、力強さ、孤独」を感じて頂けたら幸いです。\n採用ありがとうございました。\nかねこちはる",
      },
      {
        artist: "syzfonics(第4回目配信楽曲）",
        title: "Profession",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_03.mp3",
        comment:
          "初めまして、syzfonics（しずふぉにくす）とかいう人です。\nとりあえず最初はTech Houseを作ろうとして、結局Tech Houseとはかけ離れたプロットが出来て、その後保存をする際にプロジェクトファイルの名前を何故か「どちらかというとTechno」にして、音を色々足していって、最終的にはこんな物になったよくわからない曲です。\n作り始めた時にどんな思考をしていたのかすら忘れました。\n人として駄目なのかもしれません。\n宜しくお願いします。",
      },
      {
        artist: "日本楽音ノイズ協会(第4回目配信楽曲）",
        title: "イゴモヨス＝オムルのテーマによるブヨブヨ・スケッチの試み",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/4_04.mp3",
        comment:
          "本日は私たちの師匠である日本楽音ノイズ協会会長「イゴモヨス＝オムル」の個展にお越しいただき、誠にありがとうございます。師匠からメッセージを預かって参りました。\n「皆の衆。わしの名はイゴモヨス＝オムルである。ふぉっふぉ。\nわしの記念すべき第573回目の個展『ロペロペ・スクッテルボ・ドンウサ』にお越しいただき、誠にありがとう。ふぉっふぉ。\n今回の個展のためにブヨブヨをテーマにした作品を沢山こしらえておいた。\n皆の衆にはちと難解であったかもしれないが、ブヨブヨこそ、わしの正義！ジャスティスである！\nその世界を存分に味わってほしい。ふぉっふぉっふぉ。」\n以上です。ご確認ください。（？）\n928番弟子　lumo\n1003番弟子　そよもぎ",
      },
      {
        artist: "Project Mayhem(第3回目配信楽曲）",
        title: "Decretum",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_01.mp3",
        comment:
          "自由を求めるか。\nならば、決断せよ。\n───Project Mayhem\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：たちのん & Seigo Kotani\nこの度は楽曲ジャケットも採用していただきました！\n「ダダイスム的な感じで」と相棒のSeigo Kotaniくんと力を合わせ、インクをどばどばとぶちまけた奇怪な見てくれの天秤様が誕生したわけです。\nきらきらぴかぴかなジャケットの多いSOUND VOLTEXにおいてこのような猛然たる退廃的な代物が混ざりこんで良いものなのか！\n些か疑問を残しながら、コメントを考えるに至っております。\n次いで楽曲ですが、音楽ゲームのボスとはなんぞや。\nを自分なりに解釈した結果を詰め込みました。\nそんな感じです。\n(たちのん)\nどうも初めまして、Seigo Kotaniと申します。\n普段はデザイナーのフリをしながら、公園の岩をひっくり返しています。\n([[[[[)<\nジャケット制作なのですが、相棒のたちのんくんと色んな議論を交わし、秤に何を乗せるか悩むような天秤が出来上がってしまいました。\n最後に一つだけ話をします。\n例え話になりますが、あなたの大切な人が2人居ます。\nその内1人しか助けなければいけない場面に出くわした時、\nあなたはどちらを助けますか──？\n(Seigo Kotani)",
      },
      {
        artist: "全日本スッポコニャーゴ親衛隊(第3回目配信楽曲）",
        title: "ムーニャポヨポヨスッポコニャーゴ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_02.mp3",
        comment:
          "………\n時は20XX年、まだ暑さの残る8月…暑さとは無関係な大宇宙で2匹のエージェントによる闇の計画が遂行されようとしていた…。\n彼らは地球上のあらゆる生物をひっとらえて己の可愛さを認識させるまで尋問を続けるのだ…。\nその名も「プロジェクト・スッポコニャーゴ」…！！！\n………\n今回黒魔さんと合作しました！リズム・効果音・音色・ごく一部メロを担当しています。\nふざけたタイトルですがポップで可愛い曲です。企画は僕なのですが、黒魔さんのおかげで当初の想像を上回る素敵な楽曲に仕上がり、そんな楽曲と完璧にマッチする可愛いジャケットもXionさんにつけていただき、一緒にやってよかったなぁと思いました！\nリズム隊は自分でドラムを叩いたらこんな感じだと楽しいな～ってのをイメージして打ち込んでました。ぜひノリノリでプレイしていただければ幸いです。\nよろしくお願いします！\n(siromaru)\n今回siromaruさんと合作しました！全体構成・効果音・音色・ミックスを担当しています。\n最初に、お話を持ちかけてくれたsiromaruさん、ジャケットを描いて下さったXionさんにとても感謝しています。本当にありがとうございます！\n可愛く、でもほんの少し切なく…そんなキュンとなる曲を目指しました。口ずさめるようなメロディも入れてみたので、楽しみながらノリノリで遊んで貰えると嬉しいです。\nそれではどうぞ、よろしくお願いします！\n(黒魔)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Xion\nスッポコニャーゴ！(挨拶)\nこんにちは、Xionと申します！\nこの度は大変素敵な楽曲のジャケットを描き下ろさせていただきました！\nジャケット制作というものは初めてなので、「未知なる領域への挑戦」という自身の自由研究テーマの元、全力で取り組みました。\n「ポップ・スペース・スッポコニャーゴ」をコンセプトにした、この楽しい曲のイメージを描く事ができたと思います！\n是非ボルテでこの曲をプレイして、ノリノリでスッポコニャーゴしてください！！",
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "Dignity",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/3_03.mp3",
        comment:
          "わいわい！！採用ありがとうございます！！\nEn FIRE-G SOULの”Y”、及びXROSS INFECTIONの”Y”を担当しております。Yoohです。\n今回のコンテストは自Yooh研究と聞いてどんな曲にしようかなーといろいろ考えていた時に何かの続編曲っていいなあと思い、あの！「3拍子の曲」の続編となる曲を作ってみました。\n今でもプレイヤーの皆様があの曲をプレーしてくれていることがとても嬉しかったので今回はさらに変拍子を混ぜてパワーアップさせてみました。\n曲調はもちろんあの曲を意識していますが自分なりにいろいろ新しい要素を入れてみたつもりです！\n（ジャケットはあのレイシスちゃんだったらいいなあなんて思ったり…(ﾎﾞｿｯ)）\nDynastyもこれから配信されるDignityもどうぞよろしくお願いします！！！！",
      },
      {
        artist: "Sta(第2回目配信楽曲）",
        title: "Shadows in the Light",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_01.mp3",
        comment:
          "幼いころコンピュータに感銘を受けて以来、音楽も、グラフィックも、自分の作品なれば全てドゥーイットユアセルフな精神でちまちまやっています。どなたか、かまってくださいね。\nシャドウ・イン・ザ・ライトというのはパラドックスから。\n音ゲーといえば4つ打ちでどんちき鳴るイメージだけど、このドラムステップは重心後ろ寄りの半アナログなリズム感があって、音符のないところでリズムを取る感覚が、音符で正確にリズムを刻んでいくゲームにとってはまさしくパラドックスの世界です。\n今のダンスミュージックは日進月歩で面白いですよね。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Sta",
      },
      {
        artist: "Verdammt(第2回目配信楽曲）",
        title: "ゆうしゃのなつやすみ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_02.mp3",
        comment:
          "おぎゃああご無沙汰してます！Verdammtです。\nオリジナル楽曲での採用という第二の目標を達成できたこと、本当に嬉しく思います。\nこの曲は、退屈な学校生活から一転してドキドキワクワクの夏休みを迎えた男の子が、どのように夏休みを過ごしていくのかを描いた物語です。\n男の子ならやっぱりゲームですよね。でも宿題もちゃんとやりましょうね。\n夏休み序盤のワクワク感や、終盤の儚さ等が伝われば何よりです。\nちなみに、この曲は「匿名の数十文字の助言」から生まれました。\nこの場を借りてお礼申し上げます。エレビッツのカイは私の嫁です。",
      },
      {
        artist: "ETIA.(第2回目配信楽曲）",
        title: "Demetel",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_03.mp3",
        comment:
          "初めまして、ETIA.です。エチアと読みますが別にエティアでもなんでも構いません。\n曲名は「デーメーテール」と読みます。「母なる大地」を意味する豊穣神の名前だそうです。\nトランスに、EDMやプロッグなどの要素を取り入れました。よろしくお願いします。",
      },
      {
        artist: "Noah(第2回目配信楽曲）",
        title: "トラウィスカルパンテクートリ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/2_04.mp3",
        comment:
          "どうも初めまして、Noahと申します。\n普段は同人サークル「タチドコロ」で作曲しています。\n音ゲーなのにこんな曲でいいのかと考えながら制作していましたが、無事採用されて大変嬉しく思います。\n皆さんに楽しんでプレイして頂ければ幸いです。",
      },
      {
        artist: "ぺのれり(第1回目配信楽曲）",
        title: "- dirty rouge -",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_01.mp3",
        comment:
          "初めまして。ぺのれりと申します。\nこの度は楽曲の採用、誠にありがとうございます！心より嬉しく思います。\n普段はボカロだったりインストだったりクラシックだったりと、わりと何でも作ってる人です。\n曲名から察して頂けるかもわかりませんが、裏の世界で生きる女性の心の内を叫んだ楽曲となってます。\nキメどころ多々あり、変拍子あり、シャッフルビート等々…盛り沢山な楽曲ですので色々な面でお楽しみ頂けるのではないかなと思います！\n沢山プレイして頂ければ幸いです。それでは皆様、踊り明かしましょう───\nぺのれり",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "Paradoxy",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_02.mp3",
        comment:
          "皆さんこんにちは。lapixです！\n最高にクールでテクニカルでアッパーな曲を目指すために、縦ノリで踊りながら作りました。\nみなさんも縦ノリでプレイしていただけると嬉しいです。\n現在「ハイテック(Hi-TECH)」というジャンルが個人的に凄くアツいので、今回は自分なりのハイテックをうまく表現できたかなと思います。ハイテック。\n魂を込めた一曲なので、楽しんでいただけると幸いです。",
      },
      {
        artist: "パイタン(第1回目配信楽曲）",
        title: "LEMON SUMMER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_03.mp3",
        comment:
          "初めまして、パイタンと申します。\n今回初めて公募というものに応募してなんと合格してしまいました！\n夏休みということで夏をイメージした楽曲に仕上げました。\n小学校の夏休みの思い出を思い出しながらメロディを作っていた気がします。\nギターも盛り込んでみたり色々やったつもりです。\n是非ゲームセンターにてそれぞれの夏を思い出しながら楽しんでください！\nパイタンでした！本当にありがとございました！",
      },
      {
        artist: "Hommarju(第1回目配信楽曲）",
        title: "Rings of Rainbow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_04.mp3",
        comment:
          "気分が沈んでた時に作ったはずなのに、気付けば底抜けな超ハッピーサウンドに！\nだったらこれはもう超かわいいジャケットしかない！\nという一瞬から始まったコラボ！\n超かわいいイラストにぐぅの音も出ず、自分の中でまとまらなかった曲のイメージを示してくれた神谷ズズさんのイラスト！\nそして曲とイラストを元にみんなをバックアップしてまとめてくれたヒトマスモドルくんのデザイン！\nSOUND VOLTEXだからできた、曲ありきのジャケットではないどれが欠けても成り立たなかった三位一体の作品！\nみんなで奏でて楽しんでね！\nHommarjuでした！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：神谷ズズ＆ヒトマスモドル\n初めまして、神谷ズズと申します。\nビーマニシリーズは昔から大好きでしたので、こういう形で関われて大変嬉しいです！！\nまさかHommarjuさんと一緒に作品を作れる日がくるとは思ってもいませんでした…！\n曲を聞かせて頂いた時にレースをしているようなイメージが湧いたのと同時に、すごく可愛らしいイメージもありましたので、すぐにこのジャケットイメージが決まりました！\nとっても可愛いく盛り上がれる曲なので是非みなさんもプレイして楽しんでください！\nｳｻｳｻｳｻｳｻ！\n(神谷ズズ)\n初めまして、ヒトマスモドルと申します。\n普段はロゴを作ったり、なんなりしております。\n今回Hommarjuさんと一緒に作品が作れて凄い楽しかったです！\n自分は色々と色々させて頂きましたので色々よろしくお願いします！\n虹だけに。\n(｀・ω・´)\n(ヒトマスモドル)",
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "BUBBLE RAVER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/10/1_05.mp3",
        comment:
          "P*Lightです。\n自由研究ということで、今回はいつものハッピー系ではなく、前から作りたかったEUROBEAT風RAVE風HARDCORE風な曲です。\n某RAVEコンピレーションアルバムを聞いてから、ずっと作りたかったのですがなかなかタイミングがなく。。。\nそんな中このコンテストの告知があり、作ってみた次第であります。\n残りの人生で一度くらいはハイパー好景気体験してみたいなぁ。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：はちぷよ×TOHRU MiTSUHASHi\nバブリーでイケイケなチャンネーをイメージして描きました！楽曲と合わせてアゲアゲして頂ければ幸いです！はちぷよでした！\n(はちぷよ)\nご無沙汰しております。TOHRU MiTSUHASHiです。\n今回もお招きいただきデザイン的なアレを担当しました。\n採用していただけて大変光栄に思います。\n冷静ぶってますが、心は非常にレイバーです。\n今作は非常にバブリー＆ゴージャスなサウンドで、それに合わせはちぷよさんがラグジュアリーでナイスなイラストをドローしてらっしゃったので、自分もストレートにマッシヴで、シャイニーにデザインしました。\n何言ってるか自分もよくわからないですが、どうかよろしくお願いします。\n(TOHRU MiTSUHASHi)",
      },
    ],
  },
  original09: {
    name: "ZOLA PROJECTオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_09.jpg",
    sounds: [
      {
        artist: "かめりあ",
        title: "FLYING OUT TO THE SKY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_01.mp3",
        comment:
          "かめりあです。採用ありがとうございます！\n男性VOCALOID「ZOLA PROJECT」でのコンテストということで、どんな楽曲にしようか色々悩みましたが、せっかくの男声ボーカルということでギタージャカジャカ、バスドラドコドコなジャンルを選んでみました。\n本格的なサウンドを作りたいということで、ギターに火をつける、首をむち打ちにする、メロイックサインの練習、果ては機材を破壊するなど大変な宅録でしたが、無事楽曲となって安心しています。\nそれでは、楽しんでいただけると幸いです。",
      },
      {
        artist: "u-z",
        title: "十六夜桜-Zakura-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_02.mp3",
        comment:
          "＿人人人人人人人人＿\n＞     ゲームの      ＜\n＞OPっぽい曲作った＜\n￣^Y^Y^Y^Y^Y^Y￣\n初応募にして初採用しました！！ありがとうございますッ！！\nどこかでお会いした時に「u-zの曲をプレイしたょ☆(｡･ ω<)ゞ」\nって言ってくだされば一杯おごります！！！\nu-z（ゆーじ）",
      },
      {
        artist: "unatra / カラクサ",
        title: "群青硝子のスピカ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_03.mp3",
        comment:
          "作曲担当のunatraです。\nこの度は楽曲の採用、ありがとうございます！\n普段は主にボーカロイドを使用した様々なジャンルの楽曲制作をしております。\n『ZOLA PROJECT』3人全員の声が引き立つよう工夫を凝らしました。\n楽しんでプレイして頂ければ幸いです！\n(unatra)\n歌詞・調声担当のカラクサです。\nunatra君がかっこいい曲を仕上げてきたのでボーカルも負けないよう「地平線の先」が見えるような歌詞を目指して作りました。よろしくお願いします！\n(カラクサ)",
      },
      {
        artist: "Ayatsugu_Otowa",
        title: "超爽快☆パッショネイト・フィーバー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_04.mp3",
        comment:
          "ウェ～！！ユーロの皮を被ったエクストリーム・ボーイズだぜっ！\nどうもです。またお邪魔させて頂きました。\n今回はボーカロイドという事で「作る」というテーマの歌になってたりします。\n創作は触れる程に、”こう在らねば成らない”という「正しさ」や「プライド」に目を眩せられがちです。\nそれ自体は悪い事ではないのですが、本質的に自身が示したいテーゼは何だ！？　ゴタクは全部うっちゃってしまえ！　裸の心でバッチコイ！　という奴です。\n何時だって直球勝負、そんな超エクストリーム第二弾、よろしくねーー。",
      },
      {
        artist: "CHRIS (Sound Libero)",
        title: "Arcadia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/09/zola_05.mp3",
        comment:
          "初めまして。CHRISと申します！\n普段はフリーランスでゲーム音楽やアーティストさんへの楽曲提供などの仕事をしつつ、同人ではボカロなどの活動をしています。\n通常、ゲームの音楽は演出の為の脇役的な立ち位置ですが、音ゲーなら主役になれる！ということで、今回初めて採用して頂き、とても嬉しいです♪\n楽曲については男性３人組ということで、３人ならではのフレーズの組み立てを心がけました。\nファンタジー系な世界観をイメージしています。\nTwitterなどでコメント頂けると、とても喜びますｗ\nぜひプレイして楽しんで頂けたら幸いです！\nこれからも頑張っていきますので、今後ともよろしくお願い致します！！",
      },
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
