export type SoundInfo = {
  artist: string;
  title: string;
  source: string;
  comment: string;
  removed?: boolean;
};

export type Contest = {
  id: string;
  name: string;
  banner: string;
  sounds: SoundInfo[];
};

export const contests: Contest[] = [
  {
    id: "remix01",
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
  {
    id: "original01",
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
  {
    id: "original02",
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
  {
    id: "remix02",
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
  {
    id: "original05",
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
  {
    id: "original04",
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
  {
    id: "original06",
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
  {
    id: "original07",
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
  {
    id: "remix03",
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
  {
    id: "original08",
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
        title: "青春☆してるかい？READY&LADY!",
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
  {
    id: "remix04",
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
        artist: "DOUBLE HELIX【たちのん&零-zero-】(第1回目配信楽曲）",
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
  {
    id: "original10",
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
        title: 'コンベア速度Max!? しゃいにん☆廻転ズシ"Sushi&Peace"',
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
  {
    id: "original09",
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
  {
    id: "original11",
    name: "KAC2013オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_11.jpg",
    sounds: [
      {
        artist: "黒魔(第4回目配信楽曲）",
        title: "Black Emperor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_01.mp3",
        comment:
          "採用ありがとうございます。黒魔です！\n「Black Emperor」は宇宙から突如現れた強敵に人間が闘いを挑み、決着が着く直前までをイメージした曲になっています。\nプレーしてくれる方々が熱くなれるような「黒い敵」になっていれば、とても嬉しいです。それでは、よろしくお願いします！！",
      },
      {
        artist: "BlackY(第4回目配信楽曲）",
        title: "Harpuia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_02.mp3",
        comment:
          "今年度もKACの楽曲コンテストで採用いただき非常に嬉しく思います！ここ最近合作続きのBlackYです。\n今回は昨年の「Max Burning!!」とは路線を変えて、ハードルネッサンス系な感じで攻めてみました。\n翼はためかせ美しく華麗に熱く舞い踊る長髪のボスい感じの綺麗なお姉さんみたいな感じをイメージしました(伝われ)。\nまたまた高難度な譜面になりそうですが、皆さんの華麗なプレイで是非とも倒してあげてください。\nまた、非常に光栄なことにdj TAKAさんの2nd Album「True Blue...」のDISC2にてリミキサーとして参加させていただいておりますのでそちらも合わせてどうぞよろしくです！！",
      },
      {
        artist: "you(第4回目配信楽曲）",
        title: "Hoshizora　Illumination",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_03.mp3",
        comment:
          "はじめまして、youといいます。ゆうと読みます、ようじゃないです。\nいつもはクラブで流れる長い音楽を作ったり、普通の長さの曲を作ったり、DJをやったり、マスタリングなど、総合的な音楽活動をしています。\n曲名は「ほしぞらいるみねーしょん」と読みます。\n夜空に光る満天の星のようなキラキラした雰囲気を意識しました。\nそれでは、たくさんの方に楽しんでいただけたら嬉しく思います。\nyou",
      },
      {
        artist: "MarcheИ(第4回目配信楽曲）",
        title: "odds and ends",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_04.mp3",
        comment:
          "MarcheИの曲担当のyozaquarです。採用ありがとうございます。\nKAC2013オリジナル楽曲コンテストと言うことで、ホラーファンタジーな曲を作りました。\n曲を色々展開させたり、迫力あるシネマサウンドをふんだんに入れてあるので盛り上がると思います。\nボーカルは前回に引き続き、今回もぁゅさんに歌っていただきました。感謝！\n遊び応え抜群な楽曲に仕上がってます。\nよろしくお願いします！\n（yozaquar）\nMarcheИの歌担当のぁゅです～！\n今回もyozaquarさんの楽曲を歌わせていただきました～！！感謝！！\n歌い方、声色を変えてチャレンジした楽曲です！！\nそのあたりも注目してプレイしてくださったら嬉しいです！！\nよろしくお願いします！！\n（ぁゅ）",
      },
      {
        artist: "ふる(第4回目配信楽曲）",
        title: "はなむけ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/4_05.mp3",
        comment:
          "初めまして、ふると申します。\nSOUND VOLTEXにはあまり無いタイプの曲にしようとしたらこんな事になりました。\n音ゲーに、そしてKACに情熱を注ぐ方々への餞となれるように作った勇壮な3拍子主体の小編成オーケストラです。コーラスは6人ぐらいの私です。\n気付けば自分も10年以上の音ゲープレーヤーになっていましたが、こうして楽曲が収録されて遊べる日が来るとは何とも感慨深いものがあります。\n音ゲーが与えてくれた幾多の曲との出会い、人との出会いに感謝です。\nありがとうございました。",
      },
      {
        artist: "An(第3回目配信楽曲）",
        title: "LittleGameStar",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_01.mp3",
        comment:
          "みなさんはじめまして。この度は採用を頂きました、ネットではユニット「AcuticNotes」 にて活動をしておりますAnという者です。\n今回採用して頂いたこの曲は、ハイスピードなBPMに、明るく突き抜けるような速さを意識した曲に仕上がりました！\nKACという事でトップを決める大会に輝けるよう、物語の主役をイメージした楽曲をイメージしました。\nプレーヤーのみなさんは是非、このSDVXというゲームの主役になりゲームを楽しんで下さい！",
      },
      {
        artist: "ginkiha(第3回目配信楽曲）",
        title: "EOS -INFINITE EDIT-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_02.mp3",
        comment:
          "どうもginkihaと申します，普段は同人サークル「NIZI-RINGO」にて作編曲しております。\n昨年のKAC2012に引き続きまたまた採用していただけました！\n曲名のEOSですが，読みはエオスで，古典ギリシア語で暁，または暁の女神の名前です．\nその名の通り，明け方の空が少しずつ明るくなる情景を曲で表現しようと頑張りました．\nこの曲は既にお聴きになった事がある方もいらっしゃるかもしれませんが，SOUND VOLTEXに似合うよう，INFINITEなEDITをしておりますので，ご存じの方も初めて聴く方も楽しんで頂ければ幸いです…！",
      },
      {
        artist: "TAKU1175(第3回目配信楽曲）",
        title: "ウバワレ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_03.mp3",
        comment:
          '初めまして、TAKU1175と申します。\n普段はGITADORAをメインに、三度の飯より音ゲーに勤しんでおります。\nあと麻婆豆腐がおそろしいほど好きです。\n今回ご採用頂いた"ウバワレ"は、「世の中には幸せを奪う側と奪われる側が居る。\n私はいつも奪われる側。なんなのよ…！！」\nというようなテーマの、ぐぬぬ系スカポップです。\nあと麻婆豆腐がおそろしいほど好きです。\n宜しくお願い致します！',
      },
      {
        artist: "ZOGRAPHOS (Yu_Asahina+Yamajet)(第3回目配信楽曲）",
        title: "Verse IV",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/3_04.mp3",
        comment:
          "お世話になっております、Yu_Asahinaです。Verse IVです。\nありがとうございます。\n4次元というのはどうもとらえられないものです。\n宇宙は4次元だ！なんて話もありますね。\n2次元が是か3次元が是か？というバトルが繰り広げられる昨今ですがなかなか4次元もロマンチックじゃないですか？\nKAC ですしカオスで難しい曲をブチ込みたいなということで、今回は Yamajet 氏のご協力も頂きこのようなよくわからない曲を完成させることが出来ました。\nあとになってみたら、この 2 分間の小宇宙の中で拍子がかなり変わってるじゃないですか。50 回以上も。\nなるほど、おかげで自分の頭もどこか遠くの宇宙に飛んでってたわけだと納得です。\n普通の 4 つ打ちみたいに聞こえたら勝利だ。Verse は 4 つ打ち。ハイハットは裏打ちよね。\nしかし音楽っていったい何次元なんですかね？\nともかく SDVX は 4 次元まで来ちゃいましたよ。\n（曲名には 4 つくらい意味を込めてるとかなんとか）\nこの曲の制作後もっと素直になろうと思った、Yu_Asahinaでした！\n(Yu_Asahina)\nはじめましてこんにちはYamajetです。ビール！\n長いこと音ゲープレイヤーを続けてきた身としては、なんだかここにコメントを掲載していただけるのが夢のようです。\n酔っぱらってるだけなのかもしれない。\nVerse IVでは、アサヒナ先生と綿密な打ち合わせを居酒屋で行ったのち、いただいた冒頭の難解な高速フレーズをもとに、泣きながら曲全体の骨組みを作りました。\nしかしアレンジを進めるごとにわたしの担当した部分がどんどん削られていき、結果的にわたしが担当したと言える割合は15％くらいです。アサヒナ御大ありがとう。\nめまぐるしく変わる曲調と圧倒的なスピード感、ドラマティックな展開がウリのVerse IVを、そしてついでにわたしYamajetをご愛顧いただきますよう、今後ともなにとぞ！よろしくお願いいたしまぁーす。\n(Yamajet)",
      },
      {
        artist: "cosMo＠暴走P(第2回目配信楽曲）",
        title: "For UltraPlayers",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_01.mp3",
        comment:
          "皆様はじめまして、cosMoと申します。このたびは最優秀作品に選んでいただきまして光栄です。\nランカーの方々の難しい曲を軽々と華麗にフルコンしてゆく姿は、BEMANIシリーズに出会った時から今に至るまで、僕にとって憧れでした。そんなトップランカーの方々への僕なりの精一杯の応援の気持ちをこの楽曲にこめてみました。\nこのコメントが出る頃にはもう勝負は決していると思いますが、決勝に出場された皆様が思う存分実力を発揮できますよう願っております！",
      },
      {
        artist: "かめりあ(第2回目配信楽曲）",
        title: "Bangin' Burst",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_02.mp3",
        comment:
          'かめりあです。\n作品の採用、そして最優秀賞作品、ありがとうございます！とっても嬉しいです！\n普段以上にどんな曲を作るか悩みましたが、熱く、過激で、そしてボスの迫力を持つ楽曲を目指し考えに考えた末、今まで制作したことがほとんど無いジャンルをあえて選び、作りこみました。\n高速なリズムとヘヴィなギター、"Max Burning!!"を想起させるメロディなど、この楽曲に込めた高難度感と熱い魂が伝わると嬉しいです。フゥーッ！\nどんな譜面が待ち受けているかは僕にも想像が付きませんが、ぜひプレイヤーの皆さんのパワーで倒してあげて下さい。\nどうぞよろしくお願いします！',
      },
      {
        artist: "BlackYooh vs. siromaru(第2回目配信楽曲）",
        title: "BLACK or WHITE?",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_06.mp3",
        comment:
          '合作という形ではありますが、昨年に引き続きKAC楽曲公募にご採用いただけたこと、大変嬉しく思います。\n一人で先に「リズムと効果音だけで音ゲーボスっぽいもの」を作り上げた後に、お二人に唐突に合作をお願いしたら快く引き受けていただき、最終的に物凄くカッコイイ曲に仕上がりました。\nBlackYさんYoohさん両名には本当頭が上がりません…！\nこの曲で"白黒"決着つけていただければ、という想いを込めました。楽しんでいただければ幸いです。\n(siromaru)\nBlackYooh vs. siromaruの黒いところはだいたいBlackYです。\nまたまた合作しました。3人合作とかもうなんていうかお祭り状態です。\nsiromaruさんから突如飛んできたバカカッチョエエェェリズム隊に圧倒され、最初はどんな展開をノせるか悩みましたが、最終的には非常に中身の濃い楽曲になってしまって自分もびっくりドキドキ。テーマとしては戦闘の雰囲気を出すため、シンフォニックな感じでいこうってなりました。siromaruさんのシュラァアンツな感じとYoohさんのユーフォォオリアな感じが重なって最強に聴こえます。僕はピアノとかあといろいろ頑張りました。いやー黒い！！そして白い！！\nそんなわけで、「BLACK or WHITE?」何卒よろしくお願いします。\n(BlackY)\nこんにちは！BlackYoohのYoohを担当しております。Yoohです！\n今回もBlackYさんとタッグを組み、さらにあのしろまるさんともコラボをしてしまいました！！\nKACコンテストは自分にとってもすごく思い入れのあるコンテストで去年のあのKACコンテストがなかったら今の自分は多分なかっただろうなあっていつも実感しております。\n楽曲の方はしろまるさんの素晴らしいリズム隊と僕らBlackYooh二人のボス級の旋律が重なってもうなんかすごいことになってます！\n実際のプレーで僕らの"ブラホワ"を是非体感してみてくださいね！！\nARE YOOH BLACK or WHITE?\n(Yooh)',
      },
      {
        artist: "Hommarju(第2回目配信楽曲）",
        title: "Hellfire",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_04.mp3",
        comment:
          "去年のKACでは沢山のドラマや出来事があったなあと、思い返してみればもう1年前。\n涙も驚きも感動もあったKAC2012を乗り越えて、この寒い時期に今年もまた熱い大会がやってきた！\nKAC2013チャレンジャーへ贈る、応援と挑戦状を備え合わせた地獄の業火に燃える1曲を用意しました！\n見るも良し、挑むも良し、今年も遊んでくれたみんなに残る素敵なKACを！\nHommarjuでした！",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "超越してしまった彼女と其を生み落した理由",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_05.mp3",
        comment:
          "ボルテナイザー・マキシマは両手を前に出すや否や、詠唱時間0.01秒で「KONAMI Arcade Championship （ギリシャ語）」を繰り出した！！\nどうも、そろそろなんか見た事あるなコイツって思って頂ければ嬉しいです。\nKACという事でボスボス&ボスなボス曲をボスってみました。決勝へ駒を進める選手ももちろんの事、プレイする全ての方にとってもお祭りパレードなこのイベント、やはり締め括りには物理かつウルトラ強い感じの曲でテンション高くツクツクパーンしていきたいですよね。\nエクストリームしてしまった彼女がどうなってしまったかは、その目でお確かめ下さい。！！あやつぐでした！！",
      },
      {
        artist: "ke-ji(第2回目配信楽曲）",
        title: "Last Concerto",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/2_03.mp3",
        comment:
          "採用頂きありがとうございます、ke-jiです。\n今回の楽曲はKACのエンディング的な雰囲気を想定して制作した、爽やか系？プログレです。\nイントロこそ重めのネオクラシカル系フレーズで始まりますが、その後明るめのフュージョン風エモコア→ジャズワルツの展開を経て、サビではまさにフィナーレ！といった感じの盛り上がりの展開を仕込みました。\nサビでは楽団をまとめタクトを振る指揮者になった気分でプレイして頂けると嬉しいです！\nなお、今回のギターもメタルバンドKreuZのしらこいし君に弾いていただきました。\n演奏オーダーにあたり、今回もやたら細かい注文を遠慮なくバシバシやってしまっています。すまぬ…すまぬ…",
      },
      {
        artist: "ETIA.(第1回目配信楽曲）",
        title: "Last Battalion",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_01.mp3",
        comment:
          "ETIA.です。\n「大歓声響き渡るアリーナで行われる、最後の決戦」をイメージして制作しました。\nよろしくお願いします。",
      },
      {
        artist: "cold kiss(第1回目配信楽曲）",
        title: "TrailBlazer",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_02.mp3",
        comment:
          "初めまして！「cold kiss」と申します。\nこの度は採用頂き 有り難うございます！\n「cold kiss」は、CYTOKINE/ZYTOKINEの隣人×Nana Takahashi で活動しているユニットです。\n「TrailBlazer」では、物語の幕開けを感じさせ、新しい世界を切り開いていくような世界観を、スペーシーかつ疾走感のあるデジタルロックなサウンドに乗せてみました！\nプレイ出来る日が待ち遠しい。。。うずうず\n皆さんにも楽しんで頂けたら幸いです!!",
      },
      {
        artist: "kamome sano(第1回目配信楽曲）",
        title: "choux à la crème",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_03.mp3",
        comment:
          "K　これは……\nA　アレッ？\nC　チョコかかってない！\nなんだかあっという間に1年経ってました…\n続編…甘い物…ということで、何やらスペルがカッコイイ(？)おなじみのアレです。\n楽しんでつくったので頑張ってプレーしてください！\nエクレアもよろしく。\nkamome sano(tatsuta recordings)",
      },
      {
        artist: "uma(第1回目配信楽曲）",
        title: "take a step forward",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_04.mp3",
        comment:
          '殆どの方々は初めて名前を聞くと思います、umaと申します。\n2010年終わり~2011頭頃から細々と楽曲公開をしています。\n現在はSOALAR氏が率いるH.M.C.というサークルに籍を置かせてもらっております。\n第一回目のコンテストから始め幾度も挑戦した末に、この度採用されることになりました。\n合格通知が来たときはやっと報われたと一人泣いていた反面、今に至っても未だ実感が湧いておりません。\n今回、"KAC2013オリジナル楽曲コンテスト"ということで頂点を目指す方々にとっての最初の一歩を踏み出すための楽曲になれればとそんな思いを込め、哀愁感のあるメロディにほんの少しのボス曲らしさを併せた楽曲となりました。\n一人でも私の楽曲を気に入ってくれる方が居れば幸いです。',
      },
      {
        artist: "削除(第1回目配信楽曲）",
        title: "Erlung",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/11/1_05.mp3",
        comment:
          "どうもこんにちは。削除です。\n前回は、僕を知ってる方は「こんな曲も作るの？！」と驚いた方もいると思います。\nそれに対し今回は製作の際に「自分とは何か」「自分は何を目指しているのか」を突き詰めに突き詰めた作品となっております。\nこの曲にはとても製作に手間がかかっていて、音やメロディを繰り返さず次々変えたり、展開ごとにスピード感をバラバラに変えたり、いろいろな情景表現を込めた曲に仕上げたつもりです。\n「2分という短い尺で起承転結させることを甘く見ない」というのを掲げて作った激しく場面が切り替わるストーリーを持たせたこの曲を、ゲームと共に世界観を感じていただけたら光栄だと思います。",
      },
    ],
  },
  {
    id: "original12",
    name: "SDVX × DTM MAGAZINE コラボレーションコンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_12.jpg",
    sounds: [
      {
        artist: "Music by BlackY, Vocal by ぁゅ(第3回目配信楽曲）",
        title: "SPARKLING FANTASY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_01.mp3",
        comment:
          "どうも、BlackYです！今回は普段あまり作らない歌モノを作りました！\nまさか採用されるとは！嬉しい限りです、ありがとうございます！！\n今回歌って頂くことになったぁゅさんは「ポップンポップ」などでもおなじみですが、普段はかっこいい感じの曲をよく歌っているとのことなので、「スターリートランス」の流れを汲むクールで爽快感のある感じを目指してみました。\n是非ともSOUND VOLTEXで遊んで頂けると幸いです！わいわい！！",
      },
      {
        artist: "Music by Hommarju, Vocal by かぼちゃ(第3回目配信楽曲）",
        title: "mon$tage",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_02.mp3",
        comment:
          "お世話になっております。かぼちゃです。\n本当はぼくなんぞコメントするほど活躍してもいないんですがHommarjuさんが是非にとおっしゃるので、この場をお借りしてます。\nタイトルはモンタージュ写真とモンスターをかけた造語でモンスタージュと読んで下さい。\n曲をいただいた時はかっこよすぎてビビりましたがプレッシャーに負けないよう、歌詞を書いて歌を歌ってギターを弾いてギターを窓から投げ捨ててギターをもう一回拾ってギターを弾いてやっぱり窓から投げ捨ててギターの墓を立てて何もかも忘れてアニメを見てゲームをしてとても頑張りました。\nよろしければ遊んであげてください。\n(かぼちゃ)\nコンテストで唯一男性ボーカルのかぼちゃくんですが、彼の歌声は弦楽器やギターのような艶のある音がして、とてもかっこよくて好きです。\n縦横無尽に、でもたまに居場所とか見失うくらい歌ってもらうべく「一応、歌メロは此処にいるけど気にせず好き勝手に歌ってください！」とお願いしたら、2ボス如きに負けないゴリゴリな一曲に仕上がりました！\nうぅ…やべぇ…なんて言わず歌いきってくれたかぼちゃくんと一緒に作った今回の楽曲「mon$tage」、みんなでぐっちゃぐちゃにして遊んでね！\nHommarjuでした！\n(Hommarju)",
      },
      {
        artist: "Music by アサヒナユウ, Vocal by みかん汁(第3回目配信楽曲）",
        title: "カレクレンマ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/3_03.mp3",
        comment:
          "Yu_Asahinaがお世話になっております、アサヒナユウです。\nカレーライスとハヤシライスの違いみたいなものだと思います。歌モノですよ歌モノ！\n今回はとても素直かつ、今までと打って変わって結構ナマっぽいです（楽器が）。\nラテンっぽいものに最近ハマってるというか元々好きなような気もしますが、あの楽しい感じが伝わってくるように、結構思いっきり好きなようにやってみました！\n曲のキモはハーモニーですね。コードとかもうめっちゃバリバリ弾き倒しました。\nコーラスもめっちゃお願いしました。というかこれからする予定です。\nみかん汁さんめっちゃがんばれ。というかもうめっちゃがんばった後のやつが上で聞けているんだなぁ。\nあとグルーヴもキモですね。ノリがめっちゃいい感じです。BDとSNでウンチャ！っていうアラレちゃんばりのやつです。\nベースはセールで買ったやつを弾きました。\n歌詞は、ナツノメイロのstereoberryとの共作です。旧友で、同じ穴のムジナといえます。\n3種のギターは、専門学校時代ウッドベースが折れてたいへん悲しんだことであまりにも有名な宅見圭之輔さんにお願いしました。\n2人とも…。イカしてるぜ！\nこの曲の裏テーマは、あれ？ゆっくりだけど早い！？です。\n何卒よろしくおねがいいたします。",
      },
      {
        artist: "Music by 上村香月, Vocal by Kuroa*(第2回目配信楽曲）",
        title: "Unlimited Field",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_01.mp3",
        comment:
          "こんにちは。普段はボカロPとして活動している上村香月です。\nDTM MAGAZINEコラボレーションコンテスト二回目、再び採用させていただきました！\n前回は「七色のウタ」というアニソン風な楽曲でしたが今回は約2分間の中に様々な要素を詰め込みました。\nゴリゴリなギター、シンセ、ファミコンサウンドにストリングス。\nちょっとやりすぎた感はありますが音ゲーならこれくらいがちょうど良いと信じています！！\n是非是非プレイよろしくお願いしますーーーーー！！！！",
      },
      {
        artist: "Music by nmk/佐原誠&kei_iwata, Vocal by SOPHY(第2回目配信楽曲）",
        title: "冬に桜が咲くようなキセキ。",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_02.mp3",
        comment:
          "二度目の採用を頂きました、nmkです！\nskyful of stars-SDVX EDIT-も皆様に大好評いただき、大変感謝しております！\n今回の楽曲はEUROBEAT！SOPHY様に歌唱して頂ける事となりました！\n冬に桜が咲くようなキセキを信じて、ヨロコビの白の世界で今咲き誇れ...！",
      },
      {
        artist: "Music by Hommarju, Vocal by ぁゅ(第2回目配信楽曲）",
        title: "REPLiCA",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/2_03.mp3",
        comment:
          "今回のコンテストでは、ボルテのボーカリストに向けて作られた曲を歌わせていただくということで、どんな楽曲を歌えるんだろう？わたしに歌ってほしいという方はいらっしゃるのかな…なんて楽しみでもあり不安でもあったコンテストでした。\nそしたらなんと！Hommarjuさんがわたしに作ってくださった曲を歌えると知り、すごく嬉しくて興奮してたのを覚えています。\nおまーじゅさん、ほんとにありがとうございます…！！\n素敵なメロディーと素敵な詩の「REPLiCA」を、情感を込めて歌いました！\nたくさん遊んでいただけると嬉しいです！！！\nぁゅでしたっ！！\n(ぁゅ)\n「STARDUST MERMAID」や「draw!!!!」のボーカルを担当しているぁゅさん。\n加えて「Like a pop'n music」でも見せた歌声の幅広さと優しさは彼女の魅力がよく表れていると思います。\nコンテスト発表時に「私も何かしなきゃ！」と一生懸命だったぁゅちゃんの力になりたくて作り始めたこの曲、作詞には「恋する☆宇宙戦争っ!!」等でお馴染みのmitsuくんという仲間が加わり、歌声が宿り、「REPLiCA」という名の冠が付いて完成しました。\nちょっとは力になれたかな？\nあとは聞いてくれたみんなの耳に託します！\nHommarjuでした！\n(Hommarju)\nこんにちは、初めまして。mitsuです！\n今回「REPLiCA」の作詞を担当しました。\nHommarjuくんの曲はいつもメロディが綺麗！\nだから、メッチャ心を込めて作詞しました！\nいつかHommarjuくんと一緒に楽曲を作ってみたかったのでこんな晴れ舞台でコラボ出来る日が来るとは…（泣）\n嬉しくてたまらないです！(^^ゞ\n歌詞は忘れられた人形のお話です。可哀想です…\nぜひプレイしてみてね☆\n(mitsu)",
      },
      {
        artist: "Music by ismK, Vocal by Kuroa*(第1回目配信楽曲）",
        title: "Liar World Monologue",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_01.mp3",
        comment:
          "ismK(イズミケイ）です。時折後ろに夕闇Pとかつくときもありますが、今回はismKです。\nこの度は、再びここでコメントを書く機会をいただき、とても光栄に思います。\nしかも今回はなんとボーカリストの方に自分の楽曲を歌っていただけるということで、自分でもどういう形になるのか、胸がどきわくしております。\nさて楽曲の方ですが、音楽ゲーム的楽曲を目指しつつも、どちらかというと内向的な世界観の楽曲を作ってみました。自分でもどうなのとは思いますが、この楽曲が一人でも多くの方に楽しんでいただけることを願っております。\n……たまには俯いたっていいじゃない。だって僕達人間だもの。",
      },
      {
        artist: "Music by 沙野カモメ, Vocal by SOPHY(第1回目配信楽曲）",
        title: "流れ星と君の歌",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_02.mp3",
        comment:
          "聴いてもらえて、嬉しいです。ありがとう。\n(Bass 村田クジャク)\nバンドでの久々の活動がこのような場でできて幸せです。\n(Guitar karugamo.)\nﾌﾟｧﾌﾟｧｯﾎﾟ!ﾇｧﾚﾇｫｯﾗｯﾗﾗﾗｯﾏｧ。ﾎﾟｯﾎﾟﾙﾝﾊﾞﾊﾟｯﾊﾟｷｹﾌｧﾛ！\n(Drums ペンギン)\n青春って何ですか\n(Keys, Prog. 沙野カモメ)\nｼｬｶｼｬﾝｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼｬﾝｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼｬﾝｼｬｶｼｬｶｼｬｶｼｬｶｼｬｶｼ\n(Perc., Prog. タンバリン)\nSOPHYさん、DTMマガジンのみなさん、ボルテスタッフのみなさん、プレイヤーのみなさんに感謝します。",
      },
      {
        artist: "Music by akira asano feat.Tia, Vocal by みゅい(第1回目配信楽曲）",
        title: "ぱられる",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/12/1_03.mp3",
        comment:
          "akira asanoです。フリーランスでPCゲーム、ドラマCD、アニメーション等のBGMや主題歌を書かせて頂いております。\n私個人はコナミさんのドラマCD「Roots26」シリーズでも参加させて頂いたのですが、念願のSOUND VOLTEXへの初収録！\n感謝の気持ちでいっぱいです。女の子の気持ちを感じ取ってもらえたら幸いです。\n作詞担当のTiaと申します。フリーランスで作詞・歌の活動をしております！\n素敵な作品に関わる事が出来て有り難い限りです！沢山の方にプレイして頂けたら幸いです♪",
      },
    ],
  },
  {
    id: "remix05",
    name: "東方輝針城リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_05.jpg",
    sounds: [
      {
        artist: "unatra(第3回目配信楽曲）",
        title: "Attack on Dwarf",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_01.mp3",
        comment:
          "2度目まして、unatraと申します。(うなとらって呼んでください！)\nZOLAコンに引き続き採用をいただけて、天にも昇る心地です！\n今回はED曲『小槌の魔力』をリミックスしました。\n原曲の静かな曲調から一変、ギュルゴリ＆ワル（？）なアレンジに仕上がったと思います！(制作めちゃ楽しかった！)\nアナログデバイスに進撃！！よろしくお願いします～～～↑",
      },
      {
        artist: "かめりあ(第3回目配信楽曲）",
        title: "werewolf howls.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_02.mp3",
        comment:
          "かめりあです！採用ありがとうございます。\n狼って、いいですよね。僕は基本的にネコ派なんですが、狼だけは別格と思っています。\n餌付けとかしてみたいですよね。懐かれたい。\nさて、楽曲の方はというと、「孤独なウェアウルフ」のリミックスになっています。\n原曲の頭に残るフレーズを力強いシンセに任せ、\nそれに負けないくらいのギターやキック、ワブルベースをワチャワチャしながら制作しました。\n遠吠えなんかもいれてみたりしました。実は某cametek氏の遠吠えだという噂が…！？\n色々書いてしまいましたが、楽しんでプレイしてもらえれば嬉しいです、ということでよろしくお願いします！",
      },
      {
        artist: "you(第3回目配信楽曲）",
        title: "Mist Tek",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_03.mp3",
        comment:
          "こんにちは、KACコンテストぶりです、youです。ようじゃないです。\n今回、東方輝針城リミックスコンテストということで、どれも素晴らしい曲なのですが、中でも好きなミストレイクをアレンジさせていただきました。\n前回同様ちょっと早めで、少し奇をてらったようなそんなアレンジにしてみました。\nそれでは、たくさんの方に楽しんでいただけたら嬉しく思います。\nyou",
      },
      {
        artist: "0kash(第3回目配信楽曲）",
        title: "Little princess has no identity.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_04.mp3",
        comment:
          "0kashです、こんにちは。初めましての方は初めまして。時々DTMやってる人間です。\n『輝く針の小人族 ～Little Princess～』と言う曲を、ハイテンションに、BPMも早めに、音ゲーっぽくリミックス致しました。原曲が展開が多くどんどん転調する曲だったため、２分の制限時間の中で展開させ切るのに苦労しました・・・　作った当時は完全にスランプで、曲が全く出来ずプロジェクトを開くのも辛い、という状態だったため、とにかく曲を作る事を楽しむ、という事をテーマに、あまり難しく考えないようにしつつ作りました。\n月並みな曲ですが、楽しげな感じにまとまったと思います。解禁されたら是非やってみて下さい、よろしくお願いします。",
      },
      {
        artist: "Y*Quartet project(第3回目配信楽曲）",
        title: "Pristine Bigband",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/3_05.mp3",
        comment:
          "この度は採用ありがとうございます。\nY*Quartet projectことyozaquarです。\n今回「東方輝針城リミックス楽曲コンテスト」と言うことで、始原のビート ～ Pristine Beatをアレンジしました。\n原曲が人気なので、応募数が多いかなと思い\n自分の個性を存分に引き出したビッグバンドインストを制作しました。\n過去に採用された私の楽曲が歌モノだったので、新鮮だと思います。\n勿論遊びやすさも意識して、音ネタやキメなどふんだんに入れてあります。\nいっぱい遊んであげてください。\nよろしくお願いします！\n（yozaquar）",
      },
      {
        artist: "uma(第2回目配信楽曲）",
        title: "wander+wonder+wand",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_01.mp3",
        comment:
          'KAC2013オリジナル楽曲コンテスト以来となりますumaと申します。\nやっと最初の一歩を踏み出せた、と思いましたら次の二歩目でも採用を頂くことが出来ました。\n本当に嬉しい限りです。\n思えば私がFLOOR採用を目指そうと考えたのは過去にHyujiさんより頂いた一言があったからだと思います。\n当時の私にとっては辛い言葉ではありましたがそれがあってこそ、今こうしてこの場所に立っていられるのだと思っております。\nこの場をお借り致しましてお礼申し上げます。本当に有難うございました。\nさて、今回の楽曲wander+wonder+wandは先に採用されましたHyujiさんのリミックス楽曲、U.N. Owen was her?(Hyuji Remix)を始めとした数多くの比較的低速なトランス系楽曲に感化を受け、私も低速系楽曲でまた挑んでみたいと思い制作した楽曲となっております。\n東方輝針城のタイトルテーマということで"東方輝針城リミックス楽曲コンテスト"のタイトルを飾ることが出来るような楽曲を目指しました。是非この楽曲を始め様々な楽曲、アピールカードからなるSDVXによる東方輝針城の世界を体感していって下さい。\n長くなりましたが、是非take a step forwardに引き続き本楽曲も気に入っていただけたら幸いです。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：ましろ\nはじめまして、ましろと申します。\n今回、大変素敵なumaさんの楽曲に描かせていただきました！\n素敵な楽曲のイメージが少しでも表現できていれば嬉しいです。\nとっても楽しく描かせていただきました、ぜひプレイしてくださいね！',
      },
      {
        artist: "albel.(第2回目配信楽曲）",
        title: "柳の下のデュラハン hard chaos mix",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_02.mp3",
        comment:
          "皆様初めまして、albel.と申します。\nFLOOR最初期から投稿させていただいて、ついに今回のコンテストで私の製作したリミックスが収録されることに決まりまして非常に喜ばしい限りでございます。\n今回のリミックスは原曲の面影をほんの少し残しつつもハードコア色を強く、そして禍々しさを追求いたしました。\n勿論、BPMはとてつもなく速いです、プレイの際は速さで目が回らぬようご注意を！！\nでは私のリミックスを是非、ゲームの方でプレイしていただければと思います。",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "幻想浄瑠璃-Aya2g Tech Dance Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_03.mp3",
        comment:
          "どうも！\nなんだかんだと云っている間に6曲目、今回は「ドラゴン」な感じでリミックスしてみました。\n原曲が和感が凄いので、沿いつつも真逆のアプローチをしていきたい・・・となると中国。\n中国といえばドラゴン。これだ！ボス戦曲だしピッタリだ！！\nそうと決まったら、さっそくドラゴンっぽいリミックスをしよう！！！\nという感じでドラゴン感あるドラゴンをドラゴンしました。\n中々『ドラゴン』な感じになったんじゃないでしょうか！？　沢山遊んでいただければ幸いです。\nドラゴン！！",
      },
      {
        artist: "Shiron(第2回目配信楽曲）",
        title: "Wave of Craze",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_04.mp3",
        comment:
          "紅魔郷リミコン以来になります！Shironです！\n最近、新たにWahhei Records、El Doradoというレーベルに所属致しました。\n今回はみんな大好きわかさぎ姫のテーマ、「秘境のマーメイド」のRemixです！ハンズアップ×レイヴ！\nオケヒがデケデケ言ったりスクラッチがキュコキュコ言ったり、ガチガチのアゲアゲな感じを目指しました！\nメチャクチャ頑張って作ったのでガンガン遊んでくださいv('ω')！\n天ぷら",
      },
      {
        artist: "Tracy feat.築山さえ(第2回目配信楽曲）",
        title: "Flying!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/2_05.mp3",
        comment:
          "皆さんご無沙汰しております！\nAmateras RecordsのTracyです！\n前回の紅魔郷コンテストに引き続き、2曲目の採用となりました！\n今回はグラコｒ(ｒｙでお馴染み？「柳の下のデュラハン」のアレンジになります！\nボーカルはAmateras Recordsのメンバーで、一緒に活動している築山さえさん、      作詞は前回同様、EastNewSoundの海兎さんが担当してくれました！\n今回の楽曲も個人的にとても気に入っていてプレイするのが楽しみです！\n是非皆さんも楽しんでプレイして頂けたら嬉しいです！\nP.S.今リアルタイムで猛烈にラーメンが食べたいです。",
      },
      {
        artist: "QURELESS(第1回目配信楽曲）",
        title: "KiLLeR MeRMaiD",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_01.mp3",
        comment:
          "「Psycho Filth Records」「DigitalAcid Force」等でDigital HardcoreやSpeedcoreの製作を主軸に活動しているQURELESSと言います\nこの度は採用していただきありがとうございます。とにかく嬉しいの一言に尽きます。\n作曲を始めた2012年の夏には、この場でコメントを発表することなんて一生ないだろうと思っていましたが、このように実現してとても幸せです。\nこれもひとえに今まで関わってくださった皆様、KONAMI関係者の皆様、その他様々な方のおかげでございます。\nさて、こちらの楽曲「KiLLeR MeRMaiD」ですが、どのような楽曲にしたかと言いますと…\n「敵意」に満ち溢れた曲にしてみました。\nわかさぎ姫かわいいですよね。普段は歌ったり平和に暮らしているらしいですね。\nそんなわかさぎ姫が何かをキッカケに敵意に満ち溢れた、殺人鬼と化したら…という感じで、      すごい勢いで迫り、追っかけてくるような雰囲気のSpeedcoreにしてみました。\n「SOUND VOLTEXにSpeedcoreは難しいのでは？」という声もたくさん今まで聞いてきましたが、      それでも自分の好きな、自分のプレイしたいジャンルの曲を投稿しよう！とこの曲を製作しました。\n作っていて、この曲に対して誇りのようなものを感じはじめ、      「この曲はキてる…。採用していただいて、これをきっかけにスピードコアをもっと盛り上げたい！」と考えるくらいには、力を入れた作品です！\nギターやシンセのメロディに、叩きのめすようなキックと暴れん坊なシャウト。\n凶暴さだけでなくどこか優しさを感じるようなキレイさを持っているような気がするこの曲、ぜひともプレイしていただけると嬉しいです！",
      },
      {
        artist: "MUZIK SERVANT feat.CHERICa(第1回目配信楽曲）",
        title: "REVERSE LIMITED!(SDVX  Edit)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_02.mp3",
        comment:
          "音召缶(おとめかん)代表のMUZIK SERVANTです！\n今回も採用して頂きありがとうございます！！\n今回は輝針城プレイ中に初めて耳にした時から、      アレンジをやってみたかった正邪ちゃん曲を      力強く、そして毎度お馴染み疾走感を強くイメージして      前回紅魔リミコンの際に採用していただいた      「Over the Starlit sky」の制作メンバーで作りました。\n前作よりパワフルに、そしてグルーヴ感やギミック等も      マシマシでゲームを更に楽しめる事を意識しながら      ショートエディットをして      仕上げた曲でもあるので、一人でも多くの方に      プレイして頂き、タカマッテ頂けたら嬉しいので      皆さんよろしくお願いします！\n（MUZIK SERVANT)\n二度目まして！音召缶(おとめかん)のCHERICa（ちぇりか）です。\n紅魔リミに続き2度目の採用ありがとうございます！！\n今回は久々の新作東方輝針城5面の正邪ちゃんの曲という事で、      彼女の抵抗、反逆はどこまで行けるのか、という事をテーマにしながら、      歌詞を書かせて頂きました。\n色々な思いを込めて書いて、歌ったので      楽しんでプレイしてもらえれば嬉しいです！\n（CHERICa）",
      },
      {
        artist: "dawn-system(第1回目配信楽曲）",
        title: "進め！イッスン軍団 -Rebellion of the Dwarfs-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_03.mp3",
        comment:
          "皆様はじめまして、おはようございます。こちらはdawn-systemでございます。\n私が音楽の道に進んだきっかけであるBEMANIシリーズに、自身も参加させて頂くというのは十年来の悲願であり、      今回それが叶いましたことを心より嬉しく思います。\nこの作品は「東方輝針城　～ Double Dealing Character.」より、      少名針妙丸のテーマ曲をアレンジさせて頂いた、小人さんたちの反乱のうたです。\n勇ましくカッコよくも、キャラクターが持つ本来の可愛さもちょっぴり、表現できていれば良いなぁと思います。\nぜひぜひ楽しんで頂けると幸いです。よろしくお願い致します。\nせーのっ　お前もわぶるになあれっ！",
        removed: true,
      },
      {
        artist: "ZYTOKINE feat. itori(第1回目配信楽曲）",
        title: "WAVE WAVE WAVE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_04.mp3",
        comment:
          "昨年はcold kissとして採用させていただきましたが、今回は      ZYTOKINEとして初のボルテ収録ということでテンション上がりまくりの隣人です、ハロにちは！\n「WAVE WAVE WAVE」は東方輝針城より、「秘境のマーメイド」のボーカルアレンジになります。\nZYTOKINEらしさを出しつつ、ボーカルのitoriちゃんがすごくがんばってくれた曲なので      楽しんでいただけたら嬉しいです！",
      },
      {
        artist: "LUNA(第1回目配信楽曲）",
        title: "Mist In Hell",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_05.mp3",
        comment:
          "皆様初めまして。RTTF Records等で曲作ったりDJしたりしているLUNAと申します。\nこの度は採用ありがとうございます！！\n初めてプレイしたbeatmania 2ndMIXに衝撃を受け、BEMANIシリーズに曲が収録されることを夢見てDTMを始めてウン十年。\nついに念願が叶い、感動しています。\n今回の曲ですが、最初はジャズ系のオシャレな曲にしようと考えていたのですが      ３連譜でノリノリで作っていたらいつの間にかハードな曲になっていました。\n楽しく頭を振れる曲に仕上がったので是非ヘドバンしながらプレイしてください。",
      },
      {
        artist: "Jerico(第1回目配信楽曲）",
        title: "Frantic Wolf",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/05/1_06.mp3",
        comment:
          "採用頂きありがとうございます。サビが明るく好きな原曲です。\nなんだか「ハードコア＆パンク」って言葉が似合うアレンジになったかもしれません。\nボルテと親和性があるサウンドだと思いますので、是非プレイして楽しんでください！",
      },
    ],
  },
  {
    id: "original13",
    name: "GUMI限定！オリジナル楽曲コンテスト第2回",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_13.jpg",
    sounds: [
      {
        artist: "C-YA(第2回目配信楽曲）",
        title: "shiny rainbow flower",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_01.mp3",
        comment:
          "お久しぶりです！C-YAです！\n誰やねんっていう方は初めまして！C-YAです！ちーやです！\nさてさてどんな曲かといいますと、GUMIちゃんが歌う、ちょっと切なくてサックスがトロピカ～ンなレトロポップです。\n何がトロピカ～ンやねんって話ですが、聞いていただければ、トロピカ～ンさがわかると思います。たぶん！\n初級者の方にも楽しみやすい難易度な曲（だと思う）なので、ぜひぜひプレイしていただければなと思います！\nC-YAでしたー！トロピカ～ン！",
      },
      {
        artist: "たちのん(第2回目配信楽曲）",
        title: "始まりへと続く帰り道",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_02.mp3",
        comment:
          "はじめまして、お久しぶりです、おはよう、こんにちは、こんばんは。\nアッサラームアライクム、たちのんです。\n巷では「SOUND VOLTEXで怖い曲を作る人」と言われているとか言われていないとか。\n多方面からそのような声をいただいたので、今回は応募にあたって違ったテイストで攻めてみました。\nピアノやストリングスをめいっぱい散りばめて、アニメのOPのような、そんな雰囲気に挑戦。\n広がる青空や瑞々しい芝生なんかが頭に浮かんできたら僕のやりたいことは大体成功だと思います。\nギターはお馴染み零-zero-くんです。あれ？これDOUBLE HELIXですかね。\nきゅんきゅんしてもらえればありがたいです。ｼｬﾗﾗﾝ\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：かんた\nこんにちは、このたび有難いことにたちのんさんの曲のジャケットを描かせて頂きました、かんたです。\n爽やかな曲に負けじとジャケットもサワヤカ全開です！\nまぶしいくらいキラキラした曲だなぁと思っていたので、GUMIちゃんもまぶしそうになっちゃいました。\nちょこっとだけ歌詞に合わせて描いていますので、何度もプレイして聴いて頂けたら嬉しいです。",
      },
      {
        artist: "nana(Sevencolors) (第2回目配信楽曲）",
        title: "I love you even now",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_03.mp3",
        comment:
          "みなさまはじめまして、nanaと申します。日頃VOCALOIDで曲を作ったりなんかしていたりします。\n今回、GUMIちゃんのコンテストということで近年世界中のダンスシーンを賑わせているEDMを作ってみました。\nはじめてGUMIちゃんのEnglishを使ってみたのですがすごくいい感じに歌ってくれたので、英詩の素敵な雰囲気を楽しんでいただければこれ幸い！\nぜひぜひプレイしてくださいね！",
      },
      {
        artist: "TAKU1175(第2回目配信楽曲）",
        title: "VILE CAT",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_04.mp3",
        comment:
          'こんにちは、TAKU1175と申します。\n普段はGITADORAをメインに、\n三度の飯より音ゲーに勤しんでおります。\n今回ご採用頂いた"VILE CAT"は、\n「イケナイことって解ってる。\nでも一度堕ちてしまうと、もう抗えない。\nならいっそ誇りを持って名乗ってやろう。\nああ、私は愚かなVILE CAT。」\nというようなテーマの、静かに激しい系ジャジーロックです。\nそうそう\nどのくらい麻婆豆腐が好きかって話ですけど\nうなされるほど好きです！',
      },
      {
        artist: "FILTER SYSTEM(第2回目配信楽曲）",
        title: "アルテミス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_05.mp3",
        comment:
          "こんにちはFILTER SYSTEMです。この度は音ゲー界の雄、KONAMI様のSOUND VOLTEXに収録して頂き恐悦至極に存じます。\nまた今日まで僕を支えてくれた家族・友人・犬のジョンにこの場を借りて御礼申し上げます。\n思えば5年前GUMIさんと街角の量販店で運命的な出会いをし、それ以来どんなに作業部屋が散らかっていても文句ひとつ言わずに僕についてきてくれた彼女は本当に感謝しています。\nそんな彼女が心をこめて歌い上げる曲です。是非プレイしてみて下さい。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：YUKI\nこの度はSOUND VOLTEXに収録して頂きありがとうございました。\nGUMIさんを画くのは3回目なんですが毎回大喜利をやっている気分にさせてくれます。\n今作は「アルテミス」と言うことでSpacyな感じになりました。楽しんで頂けたら幸いです！",
      },
      {
        artist: "上村香月(第2回目配信楽曲）",
        title: "further the future",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_06.mp3",
        comment:
          "皆さんこんにちは。普段はボカロ曲とか作ってる上村香月といいます。\nいつもと違って今回は4つ打ちテクノポップぽい感じに仕上げてみました。気に入ってもらえるでしょうか...明るい曲なのでノリノリで鍵盤叩いてハイテンションにつまみ回してください！\nそれからこの曲でFLOOR採用曲が5曲目になりました。今までの曲をプレイしてくれた方、応援して下さる方、本当にありがとうございます！これからもよろしくお願いしますー！",
      },
      {
        artist: "Salk2d(第2回目配信楽曲）",
        title: "断片Story",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/2_07.mp3",
        comment:
          "＜Salk2d＞\nはじめましてSalk2dです。\nこの度は「断片Story」を採用いただき誠にありがとうございます！\n命削った甲斐がありました。ボーカロイド、難しいですね！\nそれでは皆様、乱雑にプレイして頂ければ幸いです。ﾌｩｰ↑\n＜882ne＞\nはじめまして882neです。\n作詞は1時間ほどで完成させてしまいました。\n普段は、ひっぷほっぷさせて頂いております。\nありがとうございました。",
      },
      {
        artist: "winddrums(第1回目配信楽曲）",
        title: "City Edge",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_01.mp3",
        comment:
          '皆さんはじめまして、winddrumsと申します。\n普段はドラムの演奏などをお仕事としている者です。\nGUMIの楽曲コンテストの採用ありがとうございます！\nSDVXの楽曲公募に送る事自体が初だったので、まずはSDVXを知ったときに感じたレースゲーム風疾走感音ゲー（完全に私のイメージです）という物を直球で表現しようとしたらこの様な楽曲になりました。\n普通の歌ものとは違い歌うための楽曲ではなくインストの様な歌ものになったと思います。\nハイスピードなBPMで、4拍子が続くのですが譜割が変わっていったり、などやっていて楽しい楽曲を目指しました！\nプレーヤーの皆様がこの"City Edge"をプレイして爽快感MAXとなっていただければとても嬉しく思います♪\nありがとうございましたっ！',
      },
      {
        artist: "u-z(第1回目配信楽曲）",
        title: "憂恋☆アクティベーション",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_02.mp3",
        comment:
          "＿人人人人人人人人＿\n＞ 　連続採用　 ＜\n＞　ヤッター！！＜\n￣^Y^Y^Y^Y^Y^Y￣\n以前のZOLAコンテストに続き連続採用ありがとうございます！！\n今回は「女の子頑張れッ☆乙女パワーだょ☆(・ω<)ゞ」\nみたいな曲ですてへぺろ☆(・ω<)ゞ\nu-z（ゆーじ）",
      },
      {
        artist: "流星トラップボーイズ(第1回目配信楽曲）",
        title: "ドキドキ☆流星トラップガール!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_03.mp3",
        comment:
          "初めまして、流星トラップボーイズ代表取締役、モリモリあつしと申します。この度は採用頂き、ありがとうございます。\nいつか大好きな音楽ゲームに自分の曲を！と思いたった二年前。BOOTH時代は地力が足りないと感じていたためひたすらに作曲の経験を積み「SOUND VOLTEX II -infinite infection-制作決定記念 オリジナル楽曲コンテスト」以降から幾度も挑戦した末に、この度採用されることになりました。\nここまで来れたのは支えてくれた周りの人達のおかげだと心から思います。「ありがとう」という感謝が詰まった楽曲だと思います。\n突然の依頼にも関わらず夜なべして編曲してくれたpolyshaくん、ギリギリまで調教してくれたHALLPBESTUDIOくん、ありがとうございます。\n本当に嬉しく思います。\n「ドキドキ☆流星トラップガール!!」では作曲、ギター、ワブルベース、GUMIちゃんの加工を担当させて頂きました。ありがとうございます。\nキャッチーで口ずさみやすいメロディを意識して作曲させて頂きました。改めてこの雰囲気は他のVOCALOIDではなく、GUMIだから出せる雰囲気だなと思いました。今後ももっとGUMIちゃんと一緒に音楽作っていきたいです！\n(モリモリあつし)\nはじめまして、polyshaと申します。普段は夜風に当たりながら公園の遊具で遊んだりしてます！\n音楽制作を始めた当初からの目標であったSDVXへの収録に編曲という形で参加出来たことをとても嬉しく思います。\nドキドキ(以下略)はエレクトロサウンドを基調に謎の展開を繰り広げまくる曲です！半分徹夜みたいな状態で作ったからかかなり謎の展開をします！\nプレイしたらあんまり気にならないし楽しいかな？と思い入れた謎の展開がマシマシです！\n(polysha)\nボルテプレイヤーの皆様はじめまして、HALLPBESTUDIOという者です。「はるぷべ」でも「はるぺー」でもないです。「はるぷぶ」です。Jaxalate Recordsの主催をしております。\n今も自分がこの場にいるということが信じられないです。とても嬉しい限り…！ありがとうございます。\n今回作詞とGUMIちゃんをやらせて頂きマシタ。モリモリあつしさんから御依頼を受け、恋愛経験も無いのにも関わらず頑張って「恋」な歌詞を作りました。\nど直球で可愛らしく超絶キャッチーな歌詞になったと思います。可愛がってあげて下さい。恋しようぜ！したい！何卒よろしくお願い申し上げます。\n(HALLPBESTUDIO)",
      },
      {
        artist: "colate(第1回目配信楽曲）",
        title: "Strobe♡Girl",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_04.mp3",
        comment:
          "はじめまして。colateといいます。採用ありがとうございます！\nかわいいお洋服より甘いものより、曲をdigるのが一番好きな女の子(いるのかな)の曲です。\n満員のフロアをめいっぱい煽っているような気分でプレーしてもらえれば嬉しいです！\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：りつう\nはじめまして。今回ジャケットイラストを描かせて頂きました、りつうです。\nこの度は採用していただき、ありがとうございました。\nSOUND VOLTEXをきっかけに音楽ゲームを始めたので、このような機会をいただけてとても光栄です！\n女子力が高そうなDJ GUMIちゃんを描かせていただきました。\n曲の方も、かっこいいサウンドにGUMIのとっても可愛いボーカルが乗る、最高にあがれる曲！ですので、早くプレイしてみたいです！\n大好きなSDVXの筐体に自分のイラストが映るなんて夢みたいです…。本当にありがとうございます。\n「Strobe Girl」がたくさんの人に愛される楽曲になりますように。",
        removed: true,
      },
      {
        artist: "Spacelectro(第1回目配信楽曲）",
        title: "second spring storm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_05.mp3",
        comment:
          "採用ありがとうございました！\n世界的にもあまりないメジャーキーでのプログレッシブハウスを作ってみました。\nエレクトロポップではなくプログレッシブポップです。\n普段作ってる曲よりもゲームのリズム感を意識してみました。\n作曲的には切ない「レ」を印象付ける事と「ミファソ→ソド→ミレド」がうまくできた気がします。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：ちくわさび\nはじめまして、ちくわさびと申します。今回私の絵を収録して頂いたということで、感謝と感動でいっぱいです。ありがとうございます。\n私としても、このようなことは初めてなので、「本当に私でいいのかな～」という気持ちがあります。\nそれでも、私を選んで下さったということは、OKということなのでしょう。このゲームがたくさんの方の目に触れることを心より願っております。本当にありがとうございました。",
      },
      {
        artist: "ぺのれり(第1回目配信楽曲）",
        title: "Baby Sherry",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/13/1_06.mp3",
        comment:
          "ぺのれりです。採用誠にありがとうございます！\n噂によるとシェリー酒というものは女性が頼むと愛の告白を意味するらしく、「今夜は帰りたくないわ」ですとか「今夜は貴方に全てを捧げます」っていうことになるんですって！\nで、それを男性がご馳走すれば「今夜は離さないぞ」って意味になるんですって！！\nワオ！！！！！！！！やったぜ！！！！！！！！！！\nそういう曲を作りました。ちなみにお酒は飲めません。\n宜しくお願い致します。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：華\nはじめまして、華と申します。\n今回はこのような素敵な機会を頂き大変光栄です！\n普段は清楚で良い子なお嬢さんだけど、たまにはあなたとお酒でも飲みながらちょっと羽目を外してみたい！\nそんなかんじで描きました。ちなみにお酒は飲めません。\n宜しくお願い致します。",
      },
    ],
  },
  {
    id: "remix06",
    name: "kors k楽曲リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_06.jpg",
    sounds: [
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: 'gigadelic (かめりあ\'s "The TERA" RMX)',
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_01.mp3",
        comment:
          'かめりあです。採用ありがとうございます！\n新生beatnation(仮)への声が掛かる前に作った作品ですが、FLOORでの採用は、相変わらず嬉しい限りです。\n「リミックス」と言う形では、（東方"アレンジ"を除いて）初めて採用して頂いた「サヨナラ・ヘヴン」のリミックス以来になります。\nメタリックなギターやワブルなども取り入れ、原曲に忠実にリミックスしつつ、恐れ多くも「giga」から更に1,000倍の「TERA」の名に負けないよう、現代の凶悪なサウンドとしたつもりです。\nまた楽曲中のボイスなんかも自前で用意し（僕の声です）、音ゲーならではの展開に仕上がりました。\n当時から最強のNu-style Gabbaであった原曲「gigadelic」、そして「teranoid」こと、kors kさんにリスペクトを送りながら、IIDX同様、SOUND VOLTEXでも数多のプレイヤーに立ちはだかってくれることを楽しみにしています。',
      },
      {
        artist: "daph(第7回目配信楽曲）",
        title: "Monkey Business(Band Edit.)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_02.mp3",
        comment:
          "はじめまして。普段はEl Doradoという打ち込み生音系ネットレーベルの主催をさせて頂いております、daphと申します。\nSOUND VOLTEX様には初の採用で、音ゲー歴も浅い自分にとって新天地でありとてもワクワクしております。\n今回はkors k氏のMonkey Businessを、ビッグバンドアレンジ風に編曲させて頂きました。\n音ゲーを遊ばれる方の中には吹奏楽出身の人も少なくないと思うので、あの頃を思い出したりしてみては如何でしょうか。\nまた、クラブ系が多いゲームの中少なそうなジャンルを狙ったので、是非新鮮な気持ちで遊んでくださると嬉しいです、よろしくお願いします。",
      },
      {
        artist: "飛翔鳶交響楽団(第7回目配信楽曲）",
        title: "The Wind of Gold(飛翔鳶 Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_03.mp3",
        comment:
          "Welcome to サァウンドボォルテックゥス。親愛的音渦遊戯者皆様、早上好。此編曲採用多謝。過去弐寺編曲公募大会於我編曲kors k氏計算太陽落選無念、今日至再挑戦、感慨多々有。此編曲、電子的音色一切不使用。交響楽団的勇壮的編曲。美味、健康。我衷心希望皆様堪能、非電子的400%疾走感新鮮味。騎馬武者走駆気分。戦国烈伝、大陸震撼。焼肉定食。是《黄金旋風》也。情熱的爽快的亜細亜。謝謝。",
      },
      {
        artist: "kamome sano(第7回目配信楽曲）",
        title: "Wuv U(pico/ustic rmx)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/7_04.mp3",
        comment:
          "にゃー、にゃにゃーにゃー、にゃにゃ、にゃにゃーにゃにゃっにゃにゃ。\nにゃーにゃー、にゃにゃにゃにゃっにゃにゃ。\nにゃにゃー、にゃにゃにゃにゃにゃにゃーにゃにゃ。\nにゃ。\n(訳)こんにちは。沙野ネコと申します。哺乳類から突然変異しました。何度もすいません。\nまたもやまたもや採用して頂き、本当に嬉しいです。ありがとうございます。\nメロディだけ取り出して好き放題やりました。楽しい音になったと思います！\nにゃ！\n(翻訳：ワヴユ・マジック・ライブラリー)",
      },
      {
        artist: "LeaF(第6回目配信楽曲）",
        title: "Monkey Business -Satire mix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_01.mp3",
        comment:
          "こんにちは、LeaFです。\nkors kさんのMonkey Businessをリミックスさせて頂きました。\n一言で言うと原曲「新」に対し、こちらは「旧」。\n音楽の時代による変化、流行の風刺(Satire)になりました。\nこの曲はTribecoreというジャンルに属します。多分。\nそれを基礎にBig Band Jazzのような要素、\nそうして「Brass Tribecore」としています。\nと、文章は数十回何度も何度も書き直した末に、\n結果こんな無難な文章に帰結しましたこんな自分ですが、\n曲は気に入って頂けると嬉しく思います。",
      },
      {
        artist: "takdrive(第6回目配信楽曲）",
        title: "Our Faith (takdrive remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_02.mp3",
        comment:
          "初めまして！takdriveと申します。\n夢が叶いました！諦めないで良かった！！！\nいやぁ…本当にうれしいです！kors kさんの名曲、Our Faithを全力でリミックスさせていただきました。\nたのしい感じになってれば幸いです。\nしょうじきダメならもう無理なんじゃないか？というほど全力でやり切りました！\n今後も充実した活動をしたいと思っていますので、是非この曲をあそんでやってください！！\n最後に、この度は本当に採用していただきありがとうございました！！！",
      },
      {
        artist: "nana(Sevencolors)(第6回目配信楽曲）",
        title: "Virtual Sunrise(nana's Festival EDM Remix) feat. Kanae Asaba",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/6_03.mp3",
        comment:
          "前回のGUMIちゃんコンテストに引き続きまたまた採用していただきました！\n今回もEDMですが、原曲はかなりノリのいいハードコアなのでビッグルーム仕様にしてさらにボーカルを入れてみました。\n生まれて初めて英詩を書いてみたのですが、雰囲気が出てればいいなーと思っております。。\nそれではみなさん、是非是非プレイにしてくださいね！\nFrom nana(Sevencolors)\nサンボルファンのみなさま、こんにちは。浅場佳苗です！\n今回はじめてのSOUND VOLTEXデビューということで、とってもとっても嬉しいです。\n楽曲はド派手かつゴリゴリなEDMですがボーカルラインはすごく繊細で、その世界観をしっかり表現出来るよう心を込めて歌いました。\nぜひたくさんプレイしてみてください！\nBIG LOVE?\nFrom Kanae Asaba",
      },
      {
        artist: "millstones(第5回目配信楽曲）",
        title: "FIRE FIREは電気スウィングの夢を見るか？",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/5_01.mp3",
        comment:
          "トマトリーフなんとか以来、1年振りのmillstonesです。採用いただきありがとうございます。\n今回は『kors k楽曲リミックスコンテスト』ということで、『FIRE FIRE』のリミックスで応募しました。\nアレンジの方向性は色々考えたのですが、せっかくなのでご本人がやらなさそうなジャンルにと思い、エレクトロスウィング風に。\nタイトルこそおちゃらけてしまいましたが、中身は極めてお洒落に仕上がっています。ごあんしんください。\nホーンセクションに生まれ変わり、違和感無く溶け込んでいる原曲フレーズがチャームポイントです。\n原曲とは違った三倍アイスクリームをご堪能あれ！",
      },
      {
        artist: "ねこみりん feat.えみゅう。×みゆ×小宮真央(第5回目配信楽曲）",
        title: "Wuv U (Colorful QT3 nekomix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/5_02.mp3",
        comment:
          "皆様にどめまして！「nekomimi style」のねこみりんと申します。\nこの度は採用して頂きましてありがとうございます！\nボクの中のkors kさんの代表作といえば、何といってもあの3人娘が活躍する楽曲たち！\n今回はそんな3人娘を曲で表現すべく、「ボーカル三銃士を連れて来たよ。」って感じで普段お世話になっているボーカルのお三方協力のもと、カラフル＆キューティーでハチャメチャなアレンジを作りました。\nちょっぴり変わったWuv Uアレンジ、疾走感マシマシでお楽しみくだサイ！\n＾ｗ＾わぶわぶ\n(ねこみりん)\nおはこんおばんにちわっふる！（朝昼夕夜飯共通挨拶）（*・ｖ・）ぽょぽよ。\nえみゅう。とか申す者でう。ﾊｼﾞﾒﾏｼﾃの方もそうでない方もおぼえたってネ。\nねこみしゃまを筆頭に3声でわひわひやれて。とってもたのしかったですん。\nきゃんでぃんぽっぴん☆きゅーてぃくる な リみミ だとおもうちょりますので。\n想い入れある当曲が皆様に末永く楽しんでプレイングなうして頂ければ…！\nえ｡は大変非常に恐縮感激の極みが至りでございまする。\n＾ｗ＾わぶわぶ\n(えみゅう。)\n猫耳3人娘の内の1人、みゆです。\nこの度は本当にありがとうございます！\nねこみりんさんの手により、なんと！激甘マーブルキャンディーが出来上がりました！！\n三人三様のフレーバーをどうぞお楽みください。\nぜひ私たちの曲も、原曲と一緒に愛してね☆\n＾ｗ＾わぶわぶ\n(みゆ)\nこんにちは、小宮真央です！\nこの度は採用して頂いてありがとうございます。\nこ、この楽曲が本当に遊べちゃうわけですよね…！？\n未だになんだか信じられない気持ちで、ふぉぉぉぉってなってます。\n３人でわいわいやったら、出来上がりが可愛すぎてもう、幸せ！\n歌っててとっても楽しかったので、プレイする皆も楽しんでもらえたら嬉しいな！\n＾ｗ＾わぶわぶ\n(小宮真央)",
      },
      {
        artist: "Kobaryo(第4回目配信楽曲）",
        title: "Pure Evil (Kobaryo FTN-Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/4_01.mp3",
        comment:
          "初めまして、Kobaryoと申します。普段はハードコアテクノを製作しております。\nこの度は採用して頂き、誠にありがとうございます。\n原曲の激しさや凶悪な部分を更に倍増させたリミックスにしてみました。\n皆様に楽しんでプレイして頂ければ幸いです。",
      },
      {
        artist: "P*Light(第4回目配信楽曲）",
        title: "The Sampling Paradise (P*Light Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/4_02.mp3",
        comment:
          "今回のリミックスで一番苦労したのは「声ネタの耳コピ」です。\nこれがヒジョ～～～に大変でありました。\n心が折れかかって、現実逃避にラーメン屋に行くことも多々ありました。\nそこで折れそうになった心を支えてくれたのが、そのラーメンだったのです。\n「お前ならやれるよ」\nいつもラーメンはそう僕に優しく声をかけてくれました。\nしかし僕は気付きました。\n「ラーメンを食べている時間に曲を作ればさらにいい曲になるのでは・・・」\nそう思った僕は、そのラーメンと決別しました。\nラーメンを我慢したらその分時間が出来て、なんと曲が完成したのです！\n今回もたくさんのことを学べました。",
      },
      {
        artist: "Kazmasa(第3回目配信楽曲）",
        title: "FIRE FIRE(Kazmasa Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_01.mp3",
        comment:
          "君は萌えているか！\nはじめまして、Kazmasaです。\nphase trax recordsとsweetness recordsというサークルで音楽作ってます。\nkors kさんの曲は自分が2年程前から曲を作り始めたきっかけの一つだったので、      今回の採用は本当に嬉しいです！ありがとうございます。\nこのリミックスを作るちょっと前にHARD NRGというジャンルにドハマリしていて、      おかげで原曲のEnergetic Tranceとうまく融合した曲になったと思います。\nブレイク部分の哀愁とエナジー感を感じ取っていただけると嬉しいです！",
      },
      {
        artist: "ikaruga_nex(第3回目配信楽曲）",
        title: "gigadelic(m3rkAb4# R3m!x)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_02.mp3",
        comment:
          "はじめまして、ikaruga_nexです。\nイカルガでもイカルガネックスでもどちらでも呼んでくれて構いません。\n普段は不可逆ハードコアなどのサークルでフリーフォームとかシュランツとか      ダークな感じの長い曲を作ってます。\nまずは採用していただいたスタッフの方々と、      gigadelicを作ってくださったteranoidもといkorskさんに感謝いたします。\ngigadelicは、私がビーマニシリーズのゲームとDTMを始めたきっかけにもなった曲なので、      その曲を私がリミックスして、そしてサウンドボルテックスに収録されることになるというのは      なんだか不思議な気持ちがします。\nさて、私のリミックスなのですが、finnish freeformと呼ばれるfreeformの１ジャンルをベースにして、      うねるアシッドや凶悪な音でfreeformのかっこいいところを強調しつつ、      原曲の壮大でダークかつ暴力的な雰囲気をなるべく壊さないようにしながらも、      真逆の要素を入れてみました。\n私のイメージなのですが、gigadelicの曲とGOLIさんの描くBGAもあり、      繊細なイメージ、起重機みたいな「大きなものを動かし壊す」イメージの他にも、      スチームパンクでダークヒーロー的な印象がありました。\nですので、疾走感出してサイバーパンクにしつつ、      自己的で暴力的なダークさに対しての歪んだ秩序的なダークさを、      ということで神々しい感じにしてみました。\nなのでリミックス名もそれに従い、神々しくあらゆるもの動かす機械とならば      神の戦車みたいなのがいいなあということで、神の戦車「メルカバー」リミックスです。厨二ですね。\nfreeformは何度かビーマニシリーズにも登場してる上、言う必要もないかもですが、      私の曲でfreeformをもっと知るきっかけになったら嬉しいなと思います。\n蛇足になりますが、freeform作る人やDJが今恐ろしいほど少ないので、もっと増えてくれたらかなり嬉しいです。      フリーフォーム沼はだれでもウェルカムです。",
      },
      {
        artist: "sky_delta(第3回目配信楽曲）",
        title: "The Wind of Gold -HΔPPY MIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_03.mp3",
        comment:
          "はじめまして、sky_deltaと申します。採用ありがとうございます！\nこの度は長きにわたって目標としてきたSOUND VOLTEXに、愛しのkors k様の楽曲のリミックスを収録していただけるということで天にも昇る心地です！\n今回採用していただいた楽曲は疾走感あふれるハッピーハードコアとなっております。リミックスするに当たり、「いかに原曲を活かしつつ壊すか」ということを念頭に置いて制作したので、ぜひ耳を凝らしてプレーしていただきたいです！\n最後に、今まで応援してくださった皆様にこの場を借りて心よりお礼申し上げます。本当にありがとうございました。",
      },
      {
        artist: "MYTK(第3回目配信楽曲）",
        title: "Virtual Sunrise (MYTK Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/3_04.mp3",
        comment:
          "ドライブ中に見える日の出がVirtual Sunriseだとしたら、      浜辺で腰掛けて見る日の出がVirtual Sunrise (MYTK Remix)です。\n疾走感400%のHardcoreであるVirtual Sunriseを、      浮遊感400%のDubstepにRemixしました。\n楽曲の雰囲気を優先したため激しいWobble Bassがあまり飛び交いませんが、      そういうDubstepもあるんだなーくらいに軽く思っていただけたら幸いです。\n筐体で楽曲を見かけた際は何卒よろしくお願いします。\nMYTK",
      },
      {
        artist: "DOUBLE HELIX(第2回目配信楽曲）",
        title: "Our Faith (Faithful MTL Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_01.mp3",
        comment:
          "お久しぶりです、二度目まして。\nDOUBLE HELIXの弦楽器の方、零 -zero-です。\n今回Our Faithのリミックス採用有難うございますパチパチ。\n私達の信念とは何ぞや、ということなんですけども、      信念というからにはそう簡単には曲がったり壊れたりしない、      例えるならば鋼や鉄といった金属のように固いものでなければならないと思うわけです。\n・・・・・・鋼？鉄？金属？・・・・・・Metal？・・・\nはい、ということで激しく熱々でMetalなリミックス、しちゃいました。\nガッチガチの信念、感じてくださいまし。\nちなみに、ゴリゴリドコドコなこのリミックスに爽やかなコーラスを入れてくれたのは、      ボルテプレイヤー皆様お馴染みのKuroa*さんです。ハラショー！\n(零 -zero-)\nOur Faith。\nOur = 我々の\nFaith = 信念\n我々の信念って何？\n俺の信念は？\n・・・俺の、信念・・・？\nバスドラ・・・ドコドコ・・・ズンズンズシズシ・・・\n原曲がものすごくカッコいいクラブシーン感満載だったので      ものすごくカッコいいライブシーン感を目指して零くんとリミックスしました。\n信念たっぷりなメタルをご堪能くださいませ。\n(たちのん)",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "Pure Evil-Aya2g Drm'n Tech Remix-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_02.mp3",
        comment:
          "どうも、Ayatsugu_Otowaです。\n僕たちの大先輩にあたるkors kさんのリミックスコンテストで採用して頂けるとは、これはもうありがたやの極みです。ヤバい！！\n楽曲の方ですが、原曲が既にハード&攻撃的を極めているので同じ事をしちゃあ芸がない！という事で敢えて「こうくるか！(当社比」みたいなアプローチで勝負してみました。テクい！！\n悪魔というのは劇的で、過剰で過激で壊滅的。苛烈な誘いはあくまで導入、本当の姿はひっそりとした闇の中にあるもんだ。",
      },
      {
        artist: "N-Driver(第2回目配信楽曲）",
        title: "The Sampling Paradise (N-Driver Style)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_03.mp3",
        comment:
          "第一回スピードアップコンテストでの採用から実に2年ッ！！ぶりに2度目の採用になりました！！N-Driverですッ！！！！\nkors kリミックスコンテストの曲目がッ！！発表される前からッ！！リミコンにサンパラ入ってたらリミックスしたいッ！！\nと思っていましたところ本当に課題曲になってるだとッ！！？となったので全力で挑戦させて頂きました！！\n原曲の声ネタを殆ど持っていないので、手持ちの声ネタでやりくりした結果、メロディがそのまま故にようやくサンパラとして      成立するぐらいにアレンジを施したのですが、それもまた良いんじゃないかな？ってことになってます。\nIgnited Night burstと同じコンセプトでリミックスしたので、そちらにピンと来てる方なら今回も楽しめると思いますッ！！\nそんなこんなですが、音ゲーとして楽しめる曲となったと思うので、実際にプレイして頂ければ幸いです！！\nこれからも頑張って行きますので、今後ともよろしくお願いしますッ！！！！",
      },
      {
        artist: "xac(第2回目配信楽曲）",
        title: "Virtual Sunrise (xac remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/2_04.mp3",
        comment:
          "みなさん初めての人も初めてじゃない人も初めまして。xacと申します。\n今回kors kさんのリミックスコンテストという事で、デビュー時に続いて再びkors kさんリミックスをさせていただきました。\n原曲の勢いをそのままにリードバリバリ、ベースズンドコいうドラムンベースにしました。\nそれでは聴いてください、Yellow Sunrise",
      },
      {
        artist: "Yooh(第1回目配信楽曲）",
        title: "FIRE FIRE -DARK BLAZE REMIX-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_01.mp3",
        comment:
          "お久しぶりです。Yoohです。\n採用頂き、とても嬉しく思います！\nさて、今回のリミックスはサブタイトルからわかる通り、邪悪な雰囲気を醸し出しております。\n原曲のメロディーが個人的にとても悪魔チックに聞こえたので、ちょい悪な小悪魔ちゃんをイメージして作りました。\n雷の音や、悪魔の笑い声など、とにかく悪そうで怪しさてんこもりな音をふんだんに取り入れました。\nイヤホンでプレーしている方は是非、いろんな音に耳を傾けながら聞いてみると面白いかもしれません。\n――――――――小悪魔はあなたに微笑みかけます。小悪魔はあなたに囁きかけます。\n邪悪で、とても熱い-DARK BLAZE-な世界を、どうぞお楽しみください。",
      },
      {
        artist: "Hate(第1回目配信楽曲）",
        title: "gigadelic -stance xxxx-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_02.mp3",
        comment:
          "『超巨大起重機ギガデリック・熱暴走2時間スペシャル！！！』\nもぐりのドクター、Hateの魔改造により、攻撃態勢スイッチのリミッターが切られてしまった。\n八段を守る任務を忘れ、赫い渦を巻きながらあらゆる物をなぎ払い進行する目標を、ボタンビームとツマミレーザーで迎撃せよ！\n・\n・\n・\n的な、イメージの産物です（？）\nTHE・重厚長大をモットーに、爆音での制作が楽しかったので、そのような環境で遊んで頂けると非常に良いと思います！\n以上、Hate a.k.a. IDEA+RHYTHMでした ＼ｍ／",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "Monkey Business (lapix Remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_03.mp3",
        comment:
          "皆さんこんにちは。lapixです。\nこの度はkors k楽曲リミックスコンテストに採用していただき大変光栄です！\nリミックス対象楽曲を見たとき真っ先に「Monkey Business」をリミックスしようと決めました。\n大好きな楽曲に、自分のエッセンスを上手く融合する事ができたと思います。ハイテック。\n楽しんでいただけたら幸いです！",
      },
      {
        artist: "borzy(第1回目配信楽曲）",
        title: "The Wind of Gold (folkcore remix)",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_04.mp3",
        comment:
          "borzyと申します、はじめましてではなく実は2度目です。久しぶりです！\nご採用いただきありがとうございました！\n今回は、まだ誰も作っていないような新しいものを作れたらいいなという思いで挑みましたが、ギターのフレーズを試行錯誤してるうちに、カントリーミュージックとかフォークみたいになってきたので、そっちに寄せてみました。\n新しくはないかもしれませんが、アコースティックな感じがある曲なので、打ち込みだけど「人が作った感」を大切に作ってみたつもりです。\n是非やってみてください。\n次こそはオリジナルの採用を目指したい！",
      },
      {
        artist: "Yu_Asahina(第1回目配信楽曲）",
        title: "Wuv U -More2 HAPPY Re-Mix Special-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/06/1_05.mp3",
        comment:
          '(・∀・)こんにちは、Yu_Asahinaです(・∀・)\n(・∀・)＜泣く子も黙ると言われるあのハッピー3人娘な「Wuv U」をリミックスさせて頂きました！\n(・∀・)＜しかもあの、More2 HAPPYなヤツが帰ってきただって！？Ω ΩΩ< なんだってー!?\nこの曲、REFLEC BEATにハマるきっかけになった曲です。やる時はこの曲ばっかやってました。\nなので、このリミックスもSDVXにハマったりするきっかけになったりしてくれたら嬉しいなー！\nとにかく楽しんで作ったのでテンションがものすごい。なので、以下略。\nHey(・∀・)More2 HAPPY Re-Mix!!!Wuv U～♪!!!\n歴史あっての「Wuv U」ですからご期待かもなあんな要素も入れちゃったりして、"Special"でお届けします！アサヒナでした。',
      },
    ],
  },
  {
    id: "original14",
    name: "第一回ボルテキャラテーマ曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_14.jpg",
    sounds: [
      {
        artist: "Yooh(第9回目配信楽曲）",
        title: "Seraphim",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_01.mp3",
        comment:
          "採用ありがとうございます！Yoohです。\nキャラクターのテーマソングと聞いて、真っ先に作りたいと思ったのが、レイシスのテーマ曲でした。\nSDVX BOOTHの時もレイシスのテーマソングコンテストがありましたが、その時は応募を断念していたので、今回このような形で採用されてとても嬉しいです！\nさて、今回のテーマはズバリ、「天使」です。kors kリミコンの時の悪魔悪魔しい感じとは対照的に、明るくて、神々しい雰囲気にしました。\nレイシスはボルテで多くのプレイヤーに愛されている存在なので、天使の中でも一番位の高い、「熾天使（Seraphim）」を意味するタイトルをつけました。\n素晴らしいキャラクターたちと、素晴らしいゲームを作っていただいたボルテチームの皆様と、プレイヤーの皆様に感謝をしつつ、この曲を送りたいと思います。\nこの度は、本当にありがとうございました！！\n僕も天使になりたい。",
      },
      {
        artist: "VALLEYSTONE feat. 紫崎 雪(第9回目配信楽曲）",
        title: "君がいる場所へ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_02.mp3",
        comment:
          "初めまして！VALLEYSTONEと申します。\nこの度は採用頂き、ありがとうございます。\nレイシスをイメージして楽曲を書いていると、作業が進むにつれて、この子はとても感情が豊かなキャラクターなんだなと改めて気づかされました。\n「君がいる場所へ」という曲です。\n楽しんで頂けると幸いです。",
      },
      {
        artist: "XIzE(第9回目配信楽曲）",
        title: "twilight signal",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_03.mp3",
        comment:
          '皆様、ご無沙汰しております！XIzE(サイズ)です。名前だけでも覚えて帰って下さいね！\nこの度は大好きな"つまぶき"のテーマ曲として楽曲を採用して頂き、とても嬉しいです！\nスーパーの鮮魚コーナーで涙を堪えながら、お刺身を品定めしていたのはここだけの話。\n結局その日は何も買わずに近所のバルで地ビールを頂き…って全然関係ないですね。\n「twilight signal」は"小さなつまみ妖精"の旅をイメージした楽曲になります。\n信号のように移り変わっていく黄昏の中で、彼は何を思ったのでしょう。\n哀愁漂うエレクトロワールドは貴方の心にも届くだろうか、響くだろうか。\n"赤"と"青"が惹かれあい離れていく、そんな景色を想像しながら黄昏に語りかける。\n「△＜トワイライトォ…シグナァル…。」\nぜひノリノリでプレーして頂けると嬉しいです！！目指せ、Perfect Ultimate Chain！！',
      },
      {
        artist: "BlackY(第9回目配信楽曲）",
        title: "CUTIE☆EX-DREAM",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_04.mp3",
        comment:
          "本当はマキシマ先生をテーマにまたかなりマックスでバーニングな曲を作ろうかなと思ったりしていましたが、バタフライキャットでもおなじみのこの三人娘の可愛さにズッキュンハートでカモンベイベーだったので、元気よく走り回るあの娘たちを描いたキュートで元気いっぱいな曲を作りました。\n採用していただき非常に嬉しいです。ありがとうございます。\n曲のタイトルについてですが、でっかいイチゴの乗ったケーキが食べたいな～～。みたいな感じだと思っていただければと思います。",
      },
      {
        artist: "DJ YASETAKA(第9回目配信楽曲）",
        title: "The setting sun",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/9_05.mp3",
        comment: "よろしくパンダ",
      },
      {
        artist: "ぺのれり(第8回目配信楽曲）",
        title: "ちぇいす いん ざ さんしゃいん！！！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/8_01.mp3",
        comment:
          "ぺのれりです。この度は御採用誠にありがとうございます！\nとても嬉しいです。\n当楽曲を制作するにあたって、色々なことを考えました。\nいつだって全力だったあの頃。\n学校から帰ったらすぐ玄関に鞄を放り投げて遊びに出て、\n友達や兄弟たちと日が暮れるまで遊んで、\nお母さんが作った美味しいご飯を食べて、\nお風呂に入って、\nふかふかのお布団に包まれながらこう思うんだ。\n「こんな日々が、ずっとずっと続きますように」って───\n「「「そんなんどーだっていいから太陽のせいにしておっかけっこしよう！！！」」」\nという感じで、宜しくお願い致します。",
      },
      {
        artist: "KO3(第7回目配信楽曲）",
        title: "My name is TSUMABUKI",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_01.mp3",
        comment:
          "初めまして、KO3(こみ)と申します。\n普段はAttack The Music、Pell:Mell Recordsというレーベルでクラブ音楽を作ってます。\nこの度は「第一回ボルテキャラテーマ曲コンテスト」に採用して頂き、嬉しい限りです。\n自分がクラブ音楽を知り、興味を持ったのはKONAMI様の音楽ゲームからなので、この様な形で参加することができ、感無量でございます！\nキャラクターのテーマ曲を作る。という事でSOUND VOLTEXには無くてはならない存在の重要キャラ、つまぶき君のテーマ曲を作りました。\n小さく、可愛らしい見た目なので明るい曲調。そしていつもテンションが高いイメージがあるので180BPMと早めの音ゲーチックなハードコアです！\n渾身の楽曲なので是非、「ヨッシャ！！いっくゼ～！！」って感じで遊んでみてください！\nありがとうございましたー！！",
      },
      {
        artist: "RoughSketch vs MAD CHILD(第7回目配信楽曲）",
        title: "Warriors Aboot",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_02.mp3",
        comment:
          "おはようございます！RoughSketchです！\n記念すべき第一回のボルテキャラテーマ曲コンテスト採用頂き光栄です！\n今回はSDVXのエフェクト侍（？）MAD CHILDさんと「紅刃」のテーマ曲を作成させていただきました！\n剣を手にしたテッキーサウンド！激しいトラックになっています！\n切り裂くようにエフェクトかけまくって遊んでください！\nﾋﾟｰﾋﾟｰﾋﾟﾋﾟｯﾋﾟｰﾋﾟﾋﾟｰﾋﾟｰwww\n（RoughSketch）\nお久しぶりです（？）。MAD CHILDです。\nついに！！あのRoughSketchさんと！！！組んでしまいました！！！！\nなんと、現段階でRoughSketch名義の楽曲のエフェクトは僕が全曲担当させていただいてるんですね。（2014年8月現在）\nじゃあもう最初からタッグ組んで曲作ってみましょうか！ということでこちらを投稿させていただきました。採用頂けて光栄です。\nガバの人とテックダンスの人っていう、名前だけ見ると凸凹コンビかもしれませんがサウンドは聞いていただければ納得していただけるかと思います。\nタブー感満載の楽曲をお楽しみください！\nFeel the Game!!\n（MAD CHILD）",
      },
      {
        artist: "かねこちはる(第7回目配信楽曲）",
        title: "紅の剣舞",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_03.mp3",
        comment:
          "かねこちはるですけども。\n紅刃さん、\n剣を握ると性格が一変するらしいですね？\nそんな紅刃さんが、\n剣を振り回しながら、\n情熱的に舞い踊るシーンを想像して作曲したのですが…\nどうですか？\n…本当ですか！？\nありがとうございますっ！",
      },
      {
        artist: "とろまる(第7回目配信楽曲）",
        title: "Sourire",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_04.mp3",
        comment:
          "とろまると申します。この度は楽曲採用していただき大変光栄です。\nフランス出身のキャラクター＝フランスの音楽という安直な発想で音色はパリ・ミュゼットの印象からアコーディオンを中心に音が派手になり過ぎない楽器を選び、ジャズ風のコードに載せた哀愁漂うメロディで奈奈の大人しめでどこか寂しげな雰囲気を表現しました。\nフランスの情景やキャラクターのことを思い浮かべながら楽しんでプレイして頂けたら嬉しいです。",
      },
      {
        artist: "ETIA.(第7回目配信楽曲）",
        title: "Firestorm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/7_05.mp3",
        comment: "ETIA.です。\nファイヤーダンスをイメージして製作したUK Hardcoreです。\nよろしくお願いします。",
      },
      {
        artist: "polysha+tcheb(第6回目配信楽曲）",
        title: "Twin Blaster",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_01.mp3",
        comment:
          "採用ありがとうございます！この場でお目にかかるのは二度目となります、polyshaです！\n最近もやしが乗ってるラーメンと辛いラーメンにハマってます！\nまたまた編曲と一部作曲も(合いの手程度に)致しました！\nはじめはtchebさんより「ルネッサンスでハードなの作らない？？？」というお誘いをきっかけに作りはじめ、こんな感じっしょ？これはこっちじゃない？みたいなやりとりの末出来た曲です！\n目指していた方向性故にDJ YOSHITAKAさんの楽曲も強く意識し、二人の厨二魂が炸裂した結果見事に雷刀・烈風刀のイメージにメチャクチャピッタリカッチリドッキリハマって思わずｵｳｯﾍといった声が漏れました！\n色々手伝ってくれたモリモリあつしくんも採用おめでとうございます！(flex)(sun)\n(polysha)\n全国のボルテプレイヤーの皆様はじめまして、tchebと申します。\n普段は物理のお勉強をしたり、楽器を吹いたりしています。\nこの度は楽曲採用、非常に嬉しく思っております。ありがとうございます。\n今回の楽曲ですが、私の方からpolyshaに合作しようと声をかけワンフレーズのmidiを投げたところ、自分の思い描いた通りに編曲されて返ってきたのでそのまま私が主にどんどんフレーズを提供していく形で進めていきました。しかし展開のさせ方が自分で上手く思いつかず頭を悩ませていました。\nその間にpolyshaがほとんどまとめてくれていたので、そこに更に私がフレーズの推敲と和音の調整を行い完成に至りました。\nつまりだいたいpolyshaがやってくれました。いやーすごいぞpolysha。さすがだpolysha。\n曲名はちょうど「INFINITE BLASTER」が出てきたころに作ったのでそれにあやかって付けてしまいました。\n「Twin」には赤と青、「二つの」という意味だけでなく「双子」という意味合いも持たせているつもりです。\nまたボルテに関しましては稼働当初からプレーさせて頂いておりますが、当時はまだ作曲活動をしておりませんでした。\nなのでリミコン等を「自分だったらこの曲はこういうアレンジするだろうなー」と勝手に妄想したりして楽しんでいたものです。\nまさか自分がここに名を連ねることになるとは思ってもみなかったですし、正直に申し上げると未だに実感がありません。\n筐体から自分の作ったフレーズが流れるのを聴くのが楽しみで仕方ないです。\nというわけで「Twin Blaster」、他の採用者様方の作品と共にお楽しみいただければと思います。長文失礼いたしました。\n(tcheb)",
      },
      {
        artist: "かねこちはる(第6回目配信楽曲）",
        title: "INF-B《L-aste-R》",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_02.mp3",
        comment:
          "かねこちはるですけども。\n雷刀さん&烈風刀さんといえば、\n「INFINITE BLASTER」ですから、\nINFINITE BLASTERの舞台で活躍する彼等をイメージしました。\n鋭く躍動感のあるエレキギター（雷刀）を、\n繊細で柔軟なピアノ（烈風刀）が支える。\nという構図で作曲したのですが…\nどうですか？\n…本当ですか！？\nありがとうございますっ！",
      },
      {
        artist: "20文字と言う字数制限に挑み続けるかぼち(第6回目配信楽曲）",
        title: "Princessどうかお願い!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/6_03.mp3",
        comment:
          "お世話になっております。かぼちゃです。\nこの度は嬬武器兄弟のテーマ曲で採用いただきました。ありがとうございます。\nたとえばゲームセンターのプライズコーナーでレイシスちゃんのフィギュアを見つけて嬉しがって1800円で取るのが雷刀くんなら烈風刀くんはその喜ぶ様を見て実に興味なさげな態度を取りつつ後日改めて一人でサングラスとマスクを装着の上プライズコーナーに向かいレイシスちゃんのフィギュアを4800円かけても取れず結局店員さんに取りやすい位置に置き直してもらって今度こそと高揚しながら両替に行ってる隙に「あ、見て！　レイシスちゃんのお人形さんだ！」と通りかかったニア＆ノアに200円であっさり横取りされその場に声もなく立ち尽くしやがて重い足取りで向かった先にはボルテ筐体があり両替したばかりの100円で「Ray(源屋)」を遊んで手ぶらで帰る不様な姿を物陰からこっそり見守る謎の影（フゥーッ！　盛り上がってきたな……！）果たして烈風刀の運命や如何に――？！\nと言った感じの嬬武器兄弟の微妙なパワーバランスを少しでも表現出来ていれば幸いです。\n何卒、宜しくお願い致します。",
      },
      {
        artist: "IckPo(第5回目配信楽曲）",
        title: "Happy Sensation",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/5_01.mp3",
        comment:
          "お初にお目にかかります、IckPoという者です。\n作曲を初めて以来、ヒソヒソと作っておりましたので少々緊張しております。\nさて、楽曲についてですが、今回はボルテキャラテーマ曲コンテストということで、キャラに合った曲を作るよう心がけましたところ、すごく明るい曲ができました。\nこの曲を聴いたプレイヤーの皆様も、少しでもキャラの持つパワーを感じ取っていただけたらなと思います。\n今回はこの辺で失礼させていただきます。(次回があるとイイナー(ﾄｵｲﾒ\nそれでは(・ω・)ノシ",
      },
      {
        artist: "こふ(第5回目配信楽曲）",
        title: "Milkyway - memorable - ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/5_02.mp3",
        comment:
          "2度目の採用になります、こふと申します。\nたくさんの思い出の詰まったこの楽曲を無事皆様にお届けすることができ、非常に嬉しく思います。\nニア・ノアのテーマ楽曲ということで、星空＆プリティ＆スタイリッシュなエレクトロポップに仕上げました。\n是非プレイして耳に残して頂ければ幸いです。ニアノア！！！！！",
      },
      {
        artist: "udouddo(第4回目配信楽曲）",
        title: "Poison Blood",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/4_01.mp3",
        comment:
          "はじめましてudouddoと申します。\n今回僕の曲が採用されたのが未だに信じられないです。\nとにかくこの曲を一人でも多くのプレイヤーが楽しんで頂ければ嬉しいです。\nこれからも頑張って行くので応援よろしくお願いします。",
      },
      {
        artist: "Hommarju(第4回目配信楽曲）",
        title: "AYAKASHI",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/4_02.mp3",
        comment:
          "セーラー服に日本刀を持つ紅刃ちゃん。\nそのかわいい風貌と鋭い武器、そしてゴリゴリなサウンドの組み合わせから、ばったばったと斬り倒していく姿が浮かびます。\nSDVXは速い曲が多いけど、遅い曲には遅い曲なりの戦い方がある。\nそんな今回の新曲「AYAKASHI」で紅刃と一緒に戦ってね！\nHommarjuでした！",
      },
      {
        artist: "とろまる(第3回目配信楽曲）",
        title: "Hustle Beat!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_01.mp3",
        comment:
          "とろまると申します。この度は楽曲採用していただき大変光栄です。\nマキシマのイメージでとにかく「熱くて！」「ハイテンションで！！」「格好良い！！！」を目指した結果、ディスコ音楽をベースにビバップやジャズ等の要素を混ぜた終始騒がしい曲になりました。\n様々な楽器を使いましたがそれぞれに聴きどころがありますので是非沢山プレイして何度も聴いて頂きたいです。",
      },
      {
        artist: "xi underground(第3回目配信楽曲）",
        title: "TU-MA-MI△ALL-NIGHTER",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_02.mp3",
        comment:
          "どうもこんにちは！xiです。採用して頂きありがとうございます！\n今回は名義にundergroundをつけてみました。いつもとノリとか雰囲気が違う時につけていきたいと思います。\n曲については、ノリを重視したEDMのような曲になっていますので、\n楽しくつまみをうにうにして頂ければ幸いです。\nよろしくお願いします。",
      },
      {
        artist: "さわわ(第3回目配信楽曲）",
        title: "きらきらタイム☆",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_03.mp3",
        comment:
          "疾走の人改め『さわわ』と申します!この度は採用頂き誠に有難うございました！\n今回はキャラコンという事で、大好きな蒼＆雛＆桃のテーマを作成させて頂きました。\nイメージは、三匹が元気にはしゃいだり、悪戯したり、逃げ回ったり！\nそんなハイテンションで愉快でキラキラと輝いた楽しい時間を想像して作成しました。\n煌びやかな音色や明るいメロディーと、しつこすぎる沢山の声ネタにやられて下さい。・∀・ｹﾗｹﾗ\nそれでは、今後とも何卒『さわわ』を宜しくお願いします。(チルブレも←)\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ",
      },
      {
        artist: "uno feat.ちよこ(IOSYS)(第3回目配信楽曲）",
        title: "Twin Rocket",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_04.mp3",
        comment:
          "おはようございます！unoです！\n記念すべき第一回のボルテキャラテーマ曲コンテスト採用頂き光栄です！\n『猛スピードで学校を飛び回るニアちゃんを「待って危ないよ～！」と\n結局、猛スピードで追いまわすノアちゃん』ってイメージで作りました！\nCVはIOSYSのちよこ氏にお願いしました！ハイスピード×カワイイボイス！\nたのしぃーーーーッ！！！！\n（uno(IOSYS)）\nはじめまして、ちよこと申します。\nツインロケット、台詞の部分を担当させていただきました！\nかわいい双子ちゃんに声を当てることができてとってもうれしいです…！\nプレイするのがすごく楽しみなのですが、わたしはものすごくへたっぴなので\nこの曲で練習、もしくはこの曲のクリアを目標にしてがんばりたいと思います！（笑）\n自然と身体が動いてきちゃうような曲です！\nテンション上がること間違いなし！ですので、たくさん遊んでくださるとうれしいです！\nよろしくお願いいたします(´ｖ｀)\n（ちよこ）",
      },
      {
        artist: "8284 feat. 榎楠(第3回目配信楽曲）",
        title: "感情Xerography",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/3_05.mp3",
        comment:
          '2度目ましてになります！8284です！\nこの度は再びSOUND VOLTEXに自分の楽曲を収録して頂き本当にありがとうございます！\n自分は作詞作編曲を担当致しました。\n紅刃の"黒い感情"を嘆く様を歌で表現しつつ、そこに”音楽ゲームらしさ"をプラスし、「疾走感のあるずっしりとした重々しいサウンド」をイメージ、制作しました。\n理想の音に近づけれた楽曲になったと思います。\n是非プレイしてみてくださいなっ！\n（8284）\nボーカルを担当させていただいた榎楠です。\n8284さんが私をボーカルに選んでくださった時、まさか自分の歌声がゲームセンターで聞ける事になるとは思ってもみませんでした。\n8284さんありがとうございます。私も嬉しいです。ぜひたくさんの方にプレイしていただきたいです。\n『感情Xerography』をよろしくお願いします！\n（榎楠）\nこんにちは、ギターを担当していますみゅーです。\n今回はずっしり疾走感のある曲ということで音数多めのギターソロをラストに持ってきました！\n是非「感情Xerography」プレイしてみてください！\n（みゅー）',
      },
      {
        artist: "みゅー feat. ゆいこんぬ(第2回目配信楽曲）",
        title: "Find the Answer",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_01.mp3",
        comment:
          "初めまして、みゅーと申します！作編曲とギターを弾いています。\n友人のゆいこんぬによる作詞＆歌っていただいた楽曲「Find the Answer」が今回のキャラテーマ曲コンテストで採用していただくことが出来、光栄に思います！\nキャッチーなメロディーと前向きな歌詞で口ずさみたくなるような曲になっています。\n4つ打ちのリズムに乗りながら是非プレイしてみてください！",
      },
      {
        artist: "Nizikawa(第2回目配信楽曲）",
        title: "F.K.S.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_02.mp3",
        comment:
          "はじめまして、Nizikawaと申します。\n「F.K.S.」は、SOUND VOLTEXというゲームに対する自分なりの解釈と、同ゲームに対する、あるひとつのメッセージをぶつけた楽曲となっています。\n何卒よろしくお願いします。",
      },
      {
        artist: "Soleily(第2回目配信楽曲）",
        title: "Violet Soul",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_03.mp3",
        comment:
          "Soleilyと申します。\nこの度は採用頂きありがとうございます。曲を作り始めたきっかけがBEMANIシリーズだったので喜びも一入です。\n曲は雷刀と烈風刀のテーマということで二人の絆をイメージしたメロディアスな感じになってます。是非遊んで下さい！\n普段はWahhei Recordsというところで曲を作っています。興味ある方は他の曲も聞いて頂ければ嬉しいです。",
      },
      {
        artist: "梅干茶漬け(第2回目配信楽曲）",
        title: "トリコロール・ダイアリー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/2_04.mp3",
        comment:
          "初めまして、「梅干茶漬け」です。\n表記揺れには慣れっこですので、この際「梅干し茶漬け」でも「梅茶漬け」でも構いません（諦め）\n和太鼓打ったりレトロゲーム鳴らしたりカホン叩いたりしていたら、      新生chiptuneレーベル「parallelogramrecords」に所属することになりました。\nちなみにポップンのテトラちゃんが好きです。\nテーマ曲！という訳で雛・蒼・桃の一日をイメージして作りました。\n朝から元気いっぱいなんだろうなーだとか、喧嘩してもその日の内に仲直りできるんだろうなーだとか、色々と妄想は捗るのですがキリがないのでこの辺にしておきましょう。\nともかく、そんな3匹の日記帳のような楽曲です。楽しんで頂ければ！\nちなみにポップンのテトラちゃんが好きです。\n今回採用を頂いたこと、とても嬉しく思います。\nこれからもピコピコしていきたいと思っていますので、何卒！よろしくお願いいたします！\nちなみにポップンのテトラちゃんが好きです。\n以上、梅干茶漬けでした！\nあーテトラ",
      },
      {
        artist: "かねこちはる feat. 紫崎 雪(第1回目配信楽曲）",
        title: "はわわｗ！な展開っ！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_01.mp3",
        comment:
          "かねこちはるですけども。\nレイシス先輩といえば「はわわｗ」ですから、\nはわわｗなリズムに、\nはわわｗなメロディーを乗せ、\nはわわｗな歌詞を書いたのですが…\nどうですか？\n…本当ですか！？\nありがとうございますっ！\n（作詞・作曲・編曲：かねこちはる）\n『はわわｗ！な展開っ！』を歌わせて頂きました、紫崎 雪です。\n可愛くて明るい曲なので、ぜひぜひプレイしてみて下さい！\nそして報告待ってます(笑)れっつぷれい♪\n（歌唱：紫崎 雪）",
      },
      {
        artist: "モリモリあつし(第1回目配信楽曲）",
        title: "Appliqué",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_05.mp3",
        comment:
          "「ドキドキ☆流星トラップガール!!」以来の採用となります、流星トラップボーイズ代表取締役及び作曲担当、モリモリあつしです。単独での参戦は初となります、以後お見知りおきを。\n今回はボルテキャラテーマ曲コンテストということで、虹霓・シエル・奈奈、彼女のナナイロの瞳の秘密を紐解いていくようなイメージで楽曲を制作させて頂きました。\n上記の一文、そして曲名。・・・これだけで全てが伝わるような、非常に強いテーマ、ストーリー性を持った、まさに奈奈にピッタリのテーマだと自信を持って言えます。\nそして、私の音楽人生現時点における、最高傑作とも言える作品です。至る所に思いを散りばめていますので、是非とも皆様の手で一つ一つアップリケを紡いで頂けると幸いです。",
      },
      {
        artist: "xi(第1回目配信楽曲）",
        title: "Wish upon Twin Stars",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_03.mp3",
        comment:
          "どうもこんにちは！xiです。採用して頂きありがとうございます！\n今回はニアノアのテーマ曲とのことで、「双子星に願いを」というイメージの明るいけどちょっと切ない感じの曲になっております！\n楽しんで頂ければ幸いです！",
      },
      {
        artist: "Shiron(第1回目配信楽曲）",
        title: "CODE -CRiMSON-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_04.mp3",
        comment:
          "念願叶ってオリジナル曲での参戦！\nご採用ありがとうございます！Shironです！\nこの度は紅刃のテーマソング、「CODE -CRiMSON-」を引っさげての登場となりました！\n「赤」「狂気」をテーマに、嵐のような激しさと、その内に秘めた優しさを備えた曲をイメージしました。\n儚げで物寂しげなピアノフレーズとか、自分の中に芽生える\"何か\"に追われるような切迫感、焦燥感とか、紅刃のキャラクターと重ね合わせながら自由に想像してみるのも良いかもしれませんね。\n曲の方は音ゲナイズドされたシュランツ(？)を主軸に、フリーフォーム、映画音楽、チップチューンなど様々な要素を織り交ぜた楽曲となっております。\nどうぞ是非よろしくお願い致しますv('ω')！",
      },
      {
        artist: "Hidra-Xjeil(第1回目配信楽曲）",
        title: "Growth Memories",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/14/1_02.mp3",
        comment:
          '初めまして、Hidra-Xjeilと申します。\n普段は一人でちょこちょこ曲作ってます。\nこの度は採用ありがとうございます。\n仮採用のメールを見たときは、興奮して5時間くらい変なテンションで家の中を跳ね回ってました。\nボルテでの楽曲採用を目標にDTMというものを始めた身としては大変恐縮だったりします。\n肝心の楽曲の方ですが「ボルテナイザー・マキシマ」のテーマ曲を作りました。\n～幼かった頃を思い出し、物思いにふけるマキシマ…～\nみたいな曲です。普段のハイテンションなマキシマ先生ではなく、虚弱体質だったマキシマ少年が"成長"し大人になっていく過程をイメージしました。\n音色はマキシマ先生がジャケットになってる楽曲を意識したり…なけなしの声ネタを…展開は…と書きたいことはあるのですが、自分が考えるマキシマ像をぶつけた楽曲になってます。\n是非プレーしてもらって楽しんで頂ければ幸いです。\nよろしくお願いします。\nところで音楽ジャンルについて全く詳しくないので誰かこの曲のジャンルをこっそり教えてください。',
      },
    ],
  },
  {
    id: "original15",
    name: "SOUND VOLTEX VERSION 3 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_15.jpg",
    sounds: [
      {
        artist: "Hirayasu Matsudo(第15回目配信楽曲）",
        title: "Pet Peeve",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/15_01.mp3",
        comment: "こういうゲームだからこれ！",
      },
      {
        artist: "かねこちはる + はぁち + 飛鳥男(第15回目配信楽曲）",
        title: "ドゥンガドゥンガ狂詩曲",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/15_02.mp3",
        comment:
          "最後の転調がたまらなく好きです。駆け上がる感じが本当に興奮します。(p*′Д`*q)\n飛鳥男?さんの煽情的で昂揚感溢れる歌詞に、ここぞとばかりの”大人の色気”で挑みました。\n…少しでも”セクシー”を感じていただけたら嬉しいです。\n曲の最後、台詞にも耳を傾けて…ね?\n（歌唱：はぁち）\n彡(^)(^)「S.D.V.X. Fan☆Boys の皆様方『夕焼のナパーム』でお世話になっております。飛鳥男で御座います。\n私のようなニワカが再び皆様方の前にシャシャっても良いものなのかどうか今回非常に悩みました。\nその結果、結果発表があった日から皆様方を永らくお待たせする事になってしまい大変申し訳なく思っておる次第です。\nちはるのドープでイルなサウンド、はぁちの歌唱力、ワイのワックなリリックを篤と御堪能下さいませ。」\n（作詞・コーラス：飛鳥男）\n炉辺の懐かしい時節となりました。\n日頃はご無沙汰のみ致しております。\n今後ともご指導ご鞭撻の程宜しくお願い申し上げます。\n（作曲・編曲：かねこちはる）",
      },
      {
        artist: "Orange Vox+ ft.konomi*(第14回目配信楽曲）",
        title: "Le ××××",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/14_01.mp3",
        comment:
          "ども、アサヒナです。III稼働おめでとうございます。曲名は「れ」と呼んであげてください。れ。\n気づく方は気づいてくれていると信じていますが、某コケティッシュでおフレンチなあの方々のオマージュです。\n新曲をいつまでも待っていたのですがなかなか出ないので、じゃあ自分で作ろう！そして、モテよう！と思いました。\nコナミオリジナル楽曲として自分が今まで受け取ってきた中で自分がやれることでもあるな、と。\n（しかし、作っておきながら受かるとあんまり思っていなかったのでまたもやSDVXの裾野の広さをわからされた形に。。）\n奇しくもこの曲のテーマが何故人は争うの？的なことだったり、曲の後半の展開なんかがその輪廻を表していたりでGRAVITY WARSといった新しいテーマに偶然合った気がしてよかったなぁと思います。\nいや戦争にいきなり疑問投げかけてるけど、いいんだろうか。平和いちばん。\nそんなわけで SDVX III のヒロイン枠として愛でて頂ければ幸いです。\n歌はkonomi*ちゃんに頼ませてもらいましたが歌ってもらえてよかった～！\nフランス語、いいなぁ～。\nP.S. まだまだ復活待ってますよ！！\n（おとと歌詞のおにいさん Yu_Asahina）\nゲーム音楽やフランス語の歌詞は初めてでしたが楽しく歌わせていただきました。\n疾走感がありますがピアノがすてきなクールな楽曲になっています。\n楽しんでいただけたらと思います。\n（うたのおねえさん konomi*）\nPourquoi les hommes se battent-ils ?\nÀ petit feu se détruisent, d'eux mêm0 es se brûlent les ailes.\n[Sans fondements] Mon coeur en ceRndres se fond, impatient.\nMon Dieu, qu'avez vous fais ?\nPourquoi, les fourmis vénéneuses, prônant la justice,\nMoi, je vaincrais, dans la lumière mon bouclier.\n-ne peuvent s'arreter, sans être écrasées.-\nOù sont donc allés les murmures du passé,\nnos amours, nos passions, toutes oubliées.\nMême dans ce monde cruel, brille une lueur\nje me retrouverai, me rappelerai, et je reviendrais\nQuand ais-je perdu la tête ?\nLa La La...\nQuand ais-je perdu la tête ?",
      },
      {
        artist: "borzy & 結月そら(第13回目配信楽曲）",
        title: "零れる夢のレミニセンス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/13_01.mp3",
        comment:
          "borzy(ボージー)です。編曲を担当しました。\n睡眠時間を削り、締め切り前日朝まで何度も修正を重ねた甲斐があったのか？\nついに念願のオリジナル楽曲です・・・！\n採用ありがとうございました！\n今回は、結月そらさんにご協力いただき、ボーカル曲を作ってみました。\nメロを活かせるよう、生楽器を主体にしたオーケストラサウンドや、民族音楽調な要素などいろいろミックスし、そこにベースラインと倍速のリズム掛け合わせ、疾走感を出してみたつもりです。\n造語によるコーラスにも注目！\n今度は無理をしすぎない程度に頑張ります。\n(borzy)\nはじめまして、結月そらです。作詞と作曲、歌唱を担当しました。\n今生きていられるのは歴史があるおかげですが、その歴史に縛られて視野が狭まることもあります。\n自分はどう感じて、どう行動したいか、自分を信じて進んで行こうというメッセージを、ファンタジックなメロディに載せて表現しました。\n楽しんでいただけたら嬉しいです。\n(結月そら)",
      },
      {
        artist: "かめりあ feat. ななひら(第13回目配信楽曲）",
        title: "じゅーじゅー♥焼肉の火からフェニックス！？～再誕の†炭火焼き～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/13_02.mp3",
        comment:
          "いらっしゃいませ！当楽曲ではオブジェクトに紛れてカルビ・ロース・ホルモンなどが流れて（※流れません）おりますのでご注意下さいませ。\nまた、デバイスは安全のためトングで（はなく、指で優しく）扱っていただきますようお願い致します。\n当店食べ放題制ですが、楽曲終了時に完食ティブレートが70%に達していない場合、喰リアとなりませんので予めご了承下さい。\n闘え、焦げるまで。よろしくお願い致します。（かめりあ）\nすいませ～ん。予約してたななひらです～。あ、はい１名です。\nみんなまとめてじゅーじゅーしてください。燃え燃えギュウ♡（ななひら）",
      },
      {
        artist: "u-z(第12回目配信楽曲）",
        title: "Vampire's Territory",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_01.mp3",
        comment:
          "＿人人人人人人人＿\n＞ 　   V3   　 ＜\n＞　ヤッター！！＜\n￣^Y^Y^Y^Y^Y^Y￣\n「十六夜桜」と「憂恋☆アクティベーション」に続いてまたまた採用して頂きました！！！\nやったー！！！\n3曲目の採用とSDVX3に勝手に運命を感じております。\n3って良いですよね。\n今回の曲はとにかく厨二病です。とんでもなく厨二です。\n「闇の炎に抱かれて消えろぉぉおお！！！」とか言いながらプレーする事をオススメします！！！\nu-z（ゆーじ）",
      },
      {
        artist: "Hommarju(第12回目配信楽曲）",
        title: "Shanghai Wu Long ～上海舞龍～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_02.mp3",
        comment:
          "SOUND VOLTEX III稼働おめでとうございます！ヤッター！\nシリーズと公募が始まった初代。\n曲数も難易度もドカンと上がったII。\n今作のIIIは一体どんな作品になってくれるのでしょうか。\n日本はもちろんのこと、世界中にもどんどん広がっていくことを願っています！\n前作までの感謝とこれからの期待、あと色んなものをひっくるめて今回のお届けする曲は「Shanghai Wu Long ～上海舞龍～」です！\nIIIでもみんなでいっぱい遊ぼうね！\nHommarjuでした！",
      },
      {
        artist: "かゆき＆yoa feat.もちこまめ(第12回目配信楽曲）",
        title: "ハナビラ:リンクス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/12_03.mp3",
        comment:
          "ハナビラ:リンクス、歌唱担当しましたもちこまめです。\nかゆきさんのピコピコした作曲とyoaさんのピコピコしたアレンジで可愛いを層重ねした音楽を、ぶりっこ１００％の声で歌わせていただきました～！\n楽しくピコピコ、プレイしていただけたら嬉しいです～！！\n（もちこまめ）\n採用ありがとうございます。\n「一度は諦めた夢を、もう一度追いかける為に。僕はまた、この街を訪れた。」\nそんな夢見る少女感の溢れるハートフルポップスです。\nどうぞ、よろしくお願い致します。\n（かゆき）\n皆様、おはようございます。またお会いしましたね。\ndawn-systemことyoaと申します。\n2014年秋より、友人とサークル『黎明紀行』を立ち上げまして、同人音楽活動を行っております。\n今回はそちらのサークルでも参加して頂いているお二方との共作となります。\nかゆきさんによる、普段のロックな彼らしからぬピコピコな良質ポップスに、私が少々アレンジを施し、もちこまめさんによるお歌が吹き込まれ、なんとも可愛らしく素敵な一曲に仕上がりました。\nこの機会に関わらせて頂くことができ、とても嬉しいです。\nぜひゲームでお楽しみくださいませ。\nどうぞ、よろしくお願い致します。\n（yoa / dawn-system）",
      },
      {
        artist: "ke-ji(第11回目配信楽曲）",
        title: "6弦とピアノのためのエチュード op.4",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/11_01.mp3",
        comment:
          "採用頂きありがとうございます。ピアノの方担当のke-jiです。\n今回の楽曲は現代音楽＋プログレの融合をテーマとした楽曲となっておりまして、その中でも特にジャズの要素を用いる現代音楽との融合を図っております。\n当曲はエチュード（練習曲）の名が示す通り、ピアノパートのみでも曲が単体として成立するように編曲してあるのですが、そのピアノに関しても右手・左手の技巧的なアルペジオフレーズからパラディドルを伴う強烈なシンコペーションパッセージ、ソステヌートペダルを用いた奏法にソリッドなフレーズの中で9度を含む和音等、実演奏においても様々な技術が必要、または習得できるような構成となっております。\nまた一見変拍子に聞こえるユニゾンフレーズですが、こちらはアクセントによるスリップビートを応用し、4/4であるにも関わらず不可解な拍子に聞こえるような仕掛けを施しております。\nそしてギターはJoyeuse、Last Concertoに続きしらこいし君に弾いて頂いているのですが、その演奏難易度は推して知るべし。どうでしょう、何か感想とかありますでしょうか、しらこいしくん。とりあえずごめんなさい。\n（ke-ji）\n皆さまはじめまして。６弦の方担当のしらこいしと申します。\nJoyeuse、Last Concertoに続いてke-jiくんの楽曲でギターを弾かせて頂けて、本当に幸せです！\n前作2作に続き、超絶テクニカルながら流麗なメロディが印象的な楽曲となっておりますのでプレイされる際は、僕が苦悶の表情でギター弾いている所を想像してください！\nうそです！思いっきり楽しんでくださいー！\n(しらこいし)",
      },
      {
        artist: "U-ske feat.ななひら(第11回目配信楽曲）",
        title: "ギャラクシィ・トラベラー",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/11_02.mp3",
        comment:
          "U-skeと申します。この度はSOUND VOLTEX楽曲採用ありがとうございます！\nずっとずっと未来に生まれる子供たちにとっては、宇宙はきっとすぐ近くにあって僕らでは見つけることのできなかった景色を宇宙船の窓から眺めるのでしょう。\nそんな未来系チップチューン、銀河の旅へいってらっしゃいませ！\n(U-ske)\nこんにちは、ななひらです。この度は採用ありがとうございます！\n遠い遠い宇宙なので、電波は届きませんでした。\nU-skeさんの作り出すキラキラワールド、僭越ながら一緒に旅行させていただきます。\n目的地はずっと遠くのアンドロメダ！れっつごー！\n(ななひら)",
      },
      {
        artist: "Riz vs. Shiron(第10回目配信楽曲）",
        title: "veRtrageS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/10_01.mp3",
        comment:
          'ツインテールっていいですよね…少女の幼さや無邪気さをより際立てるところに魅力を感じます。\n普段はロングヘアで大人びたあの娘もツインテールになったことでより"""可愛らしく"""見えたり…。\nそしてふとももも大好きです。\n特にむっちりしたふとももにニーハイソックスが食い込んでいたりしていた時には飛びついて顔をうずめたくなりますね…。\n黒いニーソックスと白い素肌のコントラストとかもう、最高です。\nあ！\nお久しぶりです。Rizです！\n今回はShiron君と厨二な曲の合作ということで、オーケストラサウンドマシマシな感じにしてみました！\nたぶん難しい部分はだいたいShiron君の担当パートだと思います。\n(Riz：作曲、編曲)\nShironです！この度もご採用頂き誠に幸甚に存じます。\nSOUND VOLTEXが出展していた春季例大祭2014のときのことでした。\nその場に居合わせたRizさんに「中二系で合作しようぜ！」と言い寄ってみたところ、快く承諾してくれたのが当楽曲"veRtrageS"の生い立ちです。\n曲名の"veRtrageS"は「契約」を意味するドイツ語です。英語読みで「ヴァートレイジス」とお読みください。\n荘厳なクワイアから始まり、なんかピロピロシンセとかもあり、あとピアノピロピロもあり、とても愉快でたのしい楽曲となっております。\n互いの個性を引き出しあったり、得意なところをぶつけ合ったりで、非常に良い合作になりました！\nこの場をお借りしてRizさんにお礼申し上げます。\nこの度もどうぞ宜しくお願い致します。\nおめでとう、SDVXIII！v(\'ω\')イエイ\nパンの耳\n(Shiron：作曲、編曲)',
      },
      {
        artist: "Antinomic Paradox(第9回目配信楽曲）",
        title: "UnivEarth",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_01.mp3",
        comment:
          'このたびは採用していただきまして、ありがとうございます。\nAntinomic ParadoxのAntinomic成分を担当させていただきましたAntinomicと申します。\n合作の相手がParadox感800％なParadoxさんということもあり、ParadoxさんのParadox感に負けないよう、日々のアンチノミック・トレーニングを欠かさず作曲に励みましたが、特にこれといったAntinomic感は得られませんでした。これが徒労というやつか。\nそれはさておき、お互いの個性が激突して宇宙が生まれるくらいにはユニバースでグラビティウォーズ感出てる楽曲になったと思いますので、ぜひぜひ遊んでいただけると幸いです。\n＜Antinomic＞\nAntinomic ParadoxのParadox担当、Paradoxです。\nタイトルはIIIにちなんで、太陽系第"三"惑星である地球ことEarthに、万物を意味するUniverseとを掛けあわせた造語です。\nIIIの発展を祈り、またIIIを代表する曲の一つになるといいなぁという願いも込めてます。\nAntinomicさんがアンチノミック800％な全体像を作り、私がいろいろとParadoxな補強をさせていただきました。\n相反する方向性の楽曲を作る二人が合わさり、未だかつて無い、天地万有でユニバースなグラビティウォーズをプレイヤーの皆様にお届けすることができれば、嬉しいです。\n＜Paradox＞',
      },
      {
        artist: "モリモリあつし+Verdammt(第9回目配信楽曲）",
        title: "Le Fruit Défendu",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_02.mp3",
        comment:
          "「Appliqué」以来の採用となります、流星トラップボーイズ代表取締役及びモリモリあつし+Verdammtの作曲、シンセ、ギター、ドラム担当のモリモリあつしです。\n月日が経つのは早いもので、とうとう三曲目となりました。変なアーティスト名ですが、そろそろ名前覚えて頂けると嬉しい…です。\n今回の楽曲は同郷の間柄であるVerdammtさんを弊社での立食パーティ「禁断の果実食事会」にご招待した際に今回の業務提携のお話をさせて頂き、快諾して頂きました。\nこの楽曲はもしかしたら既に知っている方も居るかもしれませんが「Appliqué」の前身となった楽曲で、以前SOUND VOLTEX FLOORにて開催されていた「KAC2013オリジナル楽曲コンテスト」で落選してしまった、私が初めて自分の「個性」を認識して作曲した楽曲でした。\nこの楽曲がなければ今の自分はありませんし、「Appliqué」も生まれていなかったと思います。\nそんな思い出深い楽曲がSOUND VOLTEXの新たなるステージを彩る楽曲にまでなれたことを、大変嬉しく思います。\nちなみに曲名の「Le Fruit Défendu」の読みは「ル フリュイ デフェンデュ」と読み、禁断の果実を意味しているのですが、読みにくいので普段私は「ルフルーツ」と読んでいます。\n(モリモリあつし)\nうぎゃああ大変お世話になっております、Verdammtです。\nこの曲を合作した当時から1年ほど前、私とモリモリさんは一切面識がありませんでした。\nただ一つ、共通点がありました。「くよくよしていたこと」です。\n自分の曲を収録したいという強い意志が繋がりを生み、最終的にこのような合作の機会に結びついたのだと思っています。\n作曲は全てあつしさん担当で、私は主にオーケストラとチップチューン要素を担当しています。\n私の中ではリミックスコンテストだったと言える程に力を入れて作りましたので、ぜひとも「変なアーティスト名+Verdammt」を宜しくお願いします！\n(Verdammt)",
      },
      {
        artist: "COOKIE MONSTERS(winddrums+黒魔)(第9回目配信楽曲）",
        title: "Witch in Sweetsland",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_03.mp3",
        comment:
          'お菓子の世界へようこそ！\n採用ありがとうございます！COOKIE MONSTERのwinddrumsです。\nこの楽曲は初対面の黒魔さんと喫茶店にて「なんか曲作ってみようか！」という話に二人でなりましてスケッチブックに二人でストーリーやら楽器やら構成などを殴り書きしてその次の日にポンと魔法の様に出来た楽曲です。\nテーマは<<お菓子と魔女>>、可愛くて恐ろしい世界を作れたら良いなぁと二人で妄想を繰り広げて作ってみました。\n合作って上手くいくのかなぁという一抹の不安もあったのですが黒魔さんとの相性も良く、問題なく楽曲が融合できてとても満足しております。\n"お菓子の世界での魔女との戦いに君は勝てるか！？"\n頑張ってください！ありがとうございました！\n(winddrums)\nげへげへげへ…。可愛さと怖さが混ざり合った「お菓子」の世界へようこそ。\nオイラはクッキー大好きCOOKIE MONSTERの黒魔ってんだ。\n今回は採用頂き非常に嬉しい限りだぜ。バリボリ。\n相方であるwinddrumsさんと共に楽しく暴れまわってみたからよ。是非是非楽しんでください。だぜ。げへへぐふふふ…。\nそれじゃあオイラはアジトへ戻るぜ。あでぃおす。(ボリボリボリ。)\n(黒魔)',
      },
      {
        artist: "kanone vs. Yooh(第9回目配信楽曲）",
        title: "Cold Inflation",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/9_04.mp3",
        comment:
          "お久しぶりです、kanoneです！\n今回Yoohさんに「面白そうなんで一緒に作ってみませんか？」と声をお掛けした所なんとOKのお返事が！\n自分のハードというかテクノテクノした雰囲気が一体どうなるのか！？\nという気持ちで音源を送ったところ、綺麗なストリングスやピアノが乗っかってて心の琴線に触れる非常にシンフォニックでハードコアな良い作品に仕上がりました。\nColdな雰囲気の中にあるアツさというものを感じて頂ければ幸いです！\n(kanone)\nこんにちは！Yoohです！\nIIIでもこのように参加できてとても嬉しいです！\nさて今回は合作なのですが、お相手がなんとkanoneさんです！\nkanoneさんから合作しませんか？とお誘い頂いた時は嬉しくてびっくりしました！\nINFITINY OVERDRIVEのようなkanoneさんのガチハーコーな雰囲気に合わせて、自分はピアノやストリングスと言った綺麗な音をたくさん入れて頑張りました！（声ネタとかもいろいろ入れちゃったりしてます）\nColdだけどどんどんInflationしていくアツい楽曲となりました！\n宜しくお願いします！\n(Yooh)",
      },
      {
        artist: "ZYTOKINE feat. itori(第8回目配信楽曲）",
        title: "BOUNCE BOUNCE BOUNCE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/8_01.mp3",
        comment:
          "祝SOUND VOLTEX ver.3稼働開始！ということで、ありがたいことにZYTOKINEとして２曲目のボルテ収録となり、テンションうなぎ上がりの隣人です、ハロにちは！\n「BOUNCE BOUNCE BOUNCE」はボーカルにitoriちゃんをお迎えし、全体通してゲーム中で楽しんでもらえたらと考えながら制作しました！\n是非プレイしてみてください！",
      },
      {
        artist: "Larca(第8回目配信楽曲）",
        title: "ネメシス SDVX Edit",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/8_02.mp3",
        comment: "この度は採用して頂けて大変嬉しく思います。\n皆さんに楽しんでプレイして頂ければ幸いです。",
      },
      {
        artist: "uno feat.ちよこ(IOSYS)(第7回目配信楽曲）",
        title: "disco KAWAii",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_01.mp3",
        comment:
          "おはようございます！イオシスのunoです！！\nこの度はdisco KAWAiiを採用していただき有難うございました！！\nこの曲は何年か前から既に構想があったのですが\nこういった形でお披露目することが出来て嬉しい限りです！\n声はイオシスのカワイイボイス担当してくれている「ちよこ」氏！\nエレクトリックでデンパなミュージックを堪能して下さい！\n＜uno(IOSYS)＞\nこんにちは！「disco KAWAii」ボーカルのちよこと申します！\nこの度は採用していただきまして、ほんとうにありがとうございます！\nまたこうして関わることができるなんて夢のようです…！\n早くプレイしたいなあと思う反面とても難しい譜面になっていそうでどきどきしています…！\nごりごりのサウンドとゆるいボーカルパートとあいの手の絶妙（？）なアンバランスさをお楽しみいただければ幸いです！\nどうぞよろしくお願いいたします＊\n＜ちよこ＞\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：雉本ユーヒ\nどうも、雉本ユーヒと申します。\nジャケットの採用を頂き、大変嬉しく光栄に思います...!\ndisco KAWAiiのジャケットについてですが、ビビッドなネオンや、ハジケるキャンディのようなイメージをミックスして、楽曲の世界観を表現してみました。\n聴いたら体を動かさずにはいられない素敵な楽曲と共に、ビリリとした刺激を視覚的にもお楽しみ頂けたら嬉しいです！",
      },
      {
        artist: "10calorie(第7回目配信楽曲）",
        title: "New Days",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_02.mp3",
        comment:
          "はじめまして。10calorieと申します。\nこの度、３制作決定記念 オリジナル楽曲コンテストという新作稼動最初の公募で採用していただきありがとうございます。\n仮採用通知を受け取った時にうれしさのあまり涙がでました。\n曲のほうですが、サウンドボルテックスなのに楽器のみで構成されている曲となっております。\nGITADORA「えっ」\n嫌なこと、辛いことがあってもその場で立ち止まらず明日へ！というコンセプトで明るく爽やかに仕上げました。\nよろしくお願いします！",
      },
      {
        artist: "P*Light(第7回目配信楽曲）",
        title: "Innocent Floor",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/7_03.mp3",
        comment:
          "P*Lightです。\n今回はハッピー系ではなくて、シリアスめの楽曲となっております。\nIIIのサブタイトルが「GRAVITY WARS」ということで、いつもより激しめのアレンジです。\n・・・すみません、後付けです。\n戦いだったり、何かを乗り越えたあとって頭が真っ白になる瞬間ってありますよね。\n真っ白。イノセント。Innocent Floor。\n・・・すみません、後付けです。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：はちぷよ×TOHRU MiTSUHASHi\nSOUND VOLTEX Ⅲ稼働おめでとうございます！はちぷよと申します！\n採用して頂きありがとうございます！\n前作に引き続き今作でもトールミツハシさんとP*Light楽曲のジャケットを描かせて頂きました！ありがたい！\nジャケットにいるキャラクターはSOUND VOLTEXⅡで採用して頂いた「OVERDRIVERS」という楽曲の子です。\nしんどい事もたくさんあるけどめげずに立ち向かっていくぞー！負けないぞー！的な気持ちが伝われば幸いです。\nそんなこんなでSOUND VOLTEXⅢでもどうぞよろしくお願いします。\nはちぷよでした！\n＜はちぷよ＞\nご無沙汰しております。TOHRU MiTSUHASHiです。\n今回もお招きいただきデザイン的なアレを担当しました。\n採用していただけて大変光栄に思います。\n冷静ぶってますが、心は非常にイノセントです。\nそんなわけで自分なりにイノセントに、無邪気に昔憧れたようなものを、ロゴをはじめとするデザインに勢いで詰め込みました。\n楽曲・イラストともに楽しんでもらえると幸いでございます。\n＜TOHRU MiTSUHASHi＞",
      },
      {
        artist: "VALLEYSTONE feat. 紫崎 雪(第6回目配信楽曲）",
        title: "Lovesick Lovetune",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_01.mp3",
        comment:
          "どうも！VALLEYSTONEです。\nこの度は楽曲採用、ありがとうございます。\n甘酸っぱい、でもどこか切ないラブソングを書いてみました。\n楽しんで頂けると幸いです！\nどうも、紫崎 雪です！\n曲から伝わる音に言葉を乗せ可愛く歌わせていただきました！\nぜひ楽しくプレイしてみてくださいっ♪",
      },
      {
        artist: "Salk2d(第6回目配信楽曲）",
        title: "One & Only",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_02.mp3",
        comment:
          "＜Salk2d＞\nこの度は「One & Only」を採用頂きありがとうございます！\n2回目の採用という事で本当に嬉しく思います。\n前作同様、命削った甲斐がありました。\n皆様に楽しんで頂ければ本望です。\n＜もとみ＞\n作詞したもとみです。\nブイブイいっててリズミカルな音楽の邪魔をしないような、\nそんな歌詞になってればいいなあと思ってます。",
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "Pon-Pon-Pompoko Dai-Sen-Saw!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_03.mp3",
        comment:
          "時は平成！\n傷を負った一匹のタヌキを見つけ、介抱しようと近づくと、タヌキはどこかを目指してフラフラと走って行きます。\nその姿を追いかけ草むらの中を進んでいくと、そこには…少し開けた場所で兜を被り鎧を着たタヌキ達が、合戦を繰り広げているではありませんか！\nそして、自分の身体を見てみると、なんと自分もタヌキになっている！！\nこれは合戦に混ざるしかない…！そう思い、激しい音が飛び交う合戦の場へ足を急ぐのでした！\n……という話の後を妄想して作りました。\n今回は採用頂き、本当にありがとうございます。黒魔でした！",
      },
      {
        artist: "かねこちはる feat. はぁち(第6回目配信楽曲）",
        title: "好きトキメキとキス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_04.mp3",
        comment:
          "かねこさんの可愛くてキラキラした音に、\nキラキラした甘酸っぱい想いを作詞しました！\n…トキメキの魔法にかかってくれませんか？(*ゝωб)⌒★\n（作詞・歌唱：はぁち）\n最近キスしてる？\n（作曲・編曲：かねこちはる）",
      },
      {
        artist: "餡若feat.みゅい(第6回目配信楽曲）",
        title: "時計仕掛けのメリーゴーランド",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/6_05.mp3",
        comment:
          "歌:みゅい\nみゅいです！\nこの度は採用していただき本当に光栄に思っております。ありがとうございます！\nボルテもついにⅢになり、疾走感がどんどん増していることと思います！\nその疾走感に負けないぐらいなメリーゴーランドをみなさんにお届けします！\nロッタラロッタラ！☆\n楽しんでプレーしていただけたら幸いです！よろしくお願いします！\n作曲・ギター:餡若\n初めまして、餡若です。\n今回初めてサウンドボルテックスに採用されて、大変感無量です。\nいろいろ紆余曲折ありましたが、是非ゲームの一部として楽しんでいただければこれ以上にうれしい事はございません。\nろったらろったら！☆\nよろしくお願いします。",
      },
      {
        artist: "saminun(第5回目配信楽曲）",
        title: "The willow and snow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_01.mp3",
        comment:
          '初めまして、saminunと申します。\nもともと音楽ゲームが好きだったのもあり、作曲を経験するうちに、いつしかFLOORが大きなモチベーションの1つになっていました。\n今回このコンテストで私の作品が採用となり、本当に幸せな気持ちです。ありがとうございます。\n"The willow and snow"は、とにかく盛り上がれる曲に仕上げることを目標に制作しました。\n色々試行錯誤して、最終的にメロディーが活躍する楽しい曲になったと感じております。\nゲーム中この曲を楽しんで頂けるならば嬉しいです。よろしくお願いします！',
      },
      {
        artist: "lapix(第5回目配信楽曲）",
        title: "Discloze",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_02.mp3",
        comment:
          "皆さんこんにちは。lapixです！\nSOUND VOLTEX III 制作決定記念オリジナル楽曲コンテスト！\nという事で気合MAXで作りました！\n「Discloze」という曲です！\nグラビティ感とハイテック感、両方楽しめる楽曲になってます！ハイテック！\n是非プレイしてみてください～！\nlapix",
      },
      {
        artist: "ニシジマユーキ(第5回目配信楽曲）",
        title: "ON FIRE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/5_03.mp3",
        comment:
          "念願かなって2度目の参加となりました。\n今回は派手でハイテンションなブチアゲ系ダンスミュージックです。\nソウルフルなボーカル入りです。シブい！\nみなさんもぜひゲームセンターでI'm on fireな感じでよろしくお願いします。",
      },
      {
        artist: "ginkiha(第4回目配信楽曲）",
        title: "Borealis",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/4_01.mp3",
        comment:
          "ginkiha(ぎんきは)と申します！\n普段は同人サークル「NIZI-RINGO」にて作編曲しております。\nボルテもついに3作目，初代BOOTH，二代目IIと採用していただいて，大変ありがたい事にIIIでも楽曲参加させていただけて，本当に嬉しく思います…！\n今回の曲は，冬の光を反射してキラキラした雪原を疾走するようなイメージを，アートコア風ハードコアというハードなんだかそうじゃないんだかはっきりしろ！といった感じの曲調で形にしました！\nあとあんまりEOSに似てる！！EOS第二弾だ！！とか言うと泣きます！！\n穢れ無き真っ白な雪原と同じようなピュアな心でお楽しみいただければ幸いです！！",
      },
      {
        artist: "kamome sano(第4回目配信楽曲）",
        title: "tricky trick",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/4_02.mp3",
        comment:
          "スパソのフレーズピロピロ　ベースギュイギュイッ\nキックドドドドドド　クラップパッパッパッ…\nギュイーン　ズン・タッ・タッ！！",
      },
      {
        artist: "そよもぎ(第3回目配信楽曲）",
        title: "瞬間ドリップ♪秘蜜のケーキセット",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/3_01.mp3",
        comment:
          "そよもぎです。\nⅡ記念コンテストの時に採用して頂いた「honey trap」から早一年半。ジャケットのキャラクター、ハニーちゃん(通称)のジャケットの曲がなかなか来ない！\nならば作ってしまおう！ということで、キャラコンでもありませんが勝手にキャラソンを作らせて頂きました。\n昼下がりのカフェの裏側はドタドタのバタバタで大変！がテーマの曲です。そして、カフェで人気のケーキセット、ラテに入った禁断の蜜が○○で××が△△で・・・？？？\nなどという文章を書いていて冷や汗が出てきましたが、コーヒーでも片手に気楽にプレイしてみて下さい。\nという冗談はさておき、今回ボルテにあんまり無いスウィングワルツのリズムを取り入れました。BPMが早い割にはゆったり楽しめると思います。（色々な意味で原点回帰かも知れません。）\nどのような譜面になるかとても楽しみにしています！よろしくお願いします！",
      },
      {
        artist: "colate(第3回目配信楽曲）",
        title: "macaron",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/3_02.mp3",
        comment:
          "こんにちは。colateといいます。採用ありがとうございます！\nかわいい女の子がお菓子作りしてるのって魅力的ですよね。\nという曲です。\nマカロン作りをイメージして、いろんな音を詰め込んでみました。\nPUCできればあなたもクッキング美少女(・8・)おいしく楽しくプレイしてくださいね◎",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Scarlet Pinheel",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_01.mp3",
        comment:
          "ぺのれりです。\n誰かの何気ない優しさが、時に誰かの心に突き刺さることがあると思うんです。\nそんな風にして闇を幾重にも募らせながら、女性は美しくなっていく───\nそういう想いで書きました。楽しんで貰えれば嬉しいです。（焼きそばの湯切りに失敗しながら）",
      },
      {
        artist: "パピ子りんft.ビタミンな兄貴♂＆ゆずり(第2回目配信楽曲）",
        title: "恋愛方程式",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_02.mp3",
        comment:
          "初めまして、パピ子りんです。\nこの度はボルテに採用いただき、ありがとうございます。\n楽しい仲間と楽しく作った大切な曲なので、\n採用されてとってもうれしいです。\nぜひ、たくさんプレイして\nポップでキュートなサウンドを楽しんでください。",
      },
      {
        artist: "源屋(第2回目配信楽曲）",
        title: "Prelude-Hereafter-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_03.mp3",
        comment:
          "お久しぶりです、初めましての方ははじめまして！\nこの度はSOUND VOLTEX III稼働おめでとうございます！\n記念すべきコンテストに採用して頂き、とても嬉しいです。\n楽曲についてですが、セレモニー感を全面に押し出そうと思って\nSOUND VOLTEX IIへの感謝、そして一つの時代の終わりと新しい時代の幕開けをイメージしました。\nいままでと、これから。\n新しいSOUND VOLTEXを皆で楽しみたいですね！！！\n源屋でした。",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "False Cross",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/2_04.mp3",
        comment:
          'はわーーーっっ！！！！「SOUND VOLTEX III - GRAVITY WARS -」遂に稼動開始！！！！この瞬間を待っていた！！とってもとってもおめでとうございます！！！！フゥーーーッッ！！！！\n皆さんこんにちは！BlackYです！ブラックワイじゃないです！ブラッキーです！\nこの曲は自分が音ゲーマーとして自分がとにかくめっちゃ大好きな曲を作ろうと思って作った曲です！いや、だからっていつもあんまり好きじゃない曲ばっか作ってるとかそんなんじゃないんだよ！要は4つ打ちにピアノってのが大好きなんだってことです。わかりやすい。曲調とかはあの「Southern Cross」を彷彿させる感じのピアノ連弾～！な楽曲に仕上げました。思えばあの曲も自分がめっちゃ大好きな曲作ろうと思って作った曲でもありました。\nいわゆるボルテ版Southern Cross！みたいな曲になっちゃったので、ここで南半球で観られる南十字星と間違えられやすいと言われている十字型の星の配列、「ニセ十字(False Cross)」というものを曲名としてつけてみました。ニセモノなのか！\n今回"III"でも楽曲採用いただき非常に光栄でございます！自分でもすごくお気に入りの1曲なので、この「False Cross」気に入っていただけると僕はとっても幸せです。もし気に入っていただけたのでしたら、pop\'n musicで現役の「Southern Cross」という楽曲も一緒にどうぞよろしくです！でわでわ！＞＜',
      },
      {
        artist: "Gowrock(第1回目配信楽曲）",
        title: "bloom",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_01.mp3",
        comment:
          "どもっ！　ハジメマシテの方は「ハジメマシテ」。\nGowrockと書いて、ガウロックと申します。(｢ﾟДﾟ)｢ｶﾞｳｶﾞｳ\n先ずは、採用頂きまして本当に有難う御座います！\n「Gowrock」という名前は、2年前に開催された最初のコンテストに      楽曲を投稿するときに生まれた名なので、      何だか感慨深く、目頭に熱いものが込み上げてきます。\n干支が一つ廻る程にまで、ずっと憧れていた舞台にやっと立てるのですね…。\nその名の如く、種を蒔いて芽が出て、      綺麗な花を咲かせる情景とか優しさとか、      心が清らかになるのを感じながらプレイしてください！",
      },
      {
        artist: "ぬゆり(第1回目配信楽曲）",
        title: "ぼくらしかしらない",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_02.mp3",
        comment:
          "初めまして、ぬゆりと申します。普段はボーカロイドの曲とか作っています。\n採用頂きとても嬉しく思います！ありがとうございますぎゃー！\n我が家庭は昔ゲーム禁止区域だったので親に隠れてゲームやってました。\nなんかそういうドキドキ感とか楽しい気持ちとか怖い気持ちとか詰め込んで8bitのピッコピコのすっごいはやいやつ作ったのでもしよかったら楽しんでプレイしていただければ有難いです！",
      },
      {
        artist: "Saiph(第1回目配信楽曲）",
        title: "Hyper☆Chipspace",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_03.mp3",
        comment:
          "はじめまして、Saiphと申します。採用ありがとうございます！\nHyper☆ChipspaceはPxtone Collage（通称ピスコラ）という作曲ソフトを使った、      「ハイテンポでクールでキュート」がテーマのピコピコ楽曲です。\n拙作の紹介となって恐縮ですが、過去のFLOOR公募で落選してしまった      Miracle☆Chipstarsという楽曲の姉妹作のような位置づけの作品にもなっております。\nまた同じくピスコラー（ピスコラをつかうひと）として予てからご縁のある      黒魔さんの楽曲が大好きで、そのリスペクトも多分に込められております。\nどうぞよろしくお願いします！",
      },
      {
        artist: "O2i3(第1回目配信楽曲）",
        title: "Belly Flopper",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_04.mp3",
        comment:
          "初めまして！\n「Nanowig Studio」、「Attack the music」というレーベルで曲を作っているO2i3と申します。\n明るい雰囲気を持った185bpmの曲を作ってみました。\nぜひ！ゲームの中で楽しんでください！\nでは、よろしくお願いします！(*^ーﾟ)",
      },
      {
        artist: "影虎。(第1回目配信楽曲）",
        title: "Never Regret Anything",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_05.mp3",
        comment:
          '初めまして。"影虎。"と言います。この度は採用して頂き誠にありがとうございます！BEMANIに僕の曲が入ることが昔からの夢の1つだったので、このような形で実現して本当に嬉しいです！仮採用通知を見た時はあまりの嬉しさに絶叫してしまい、暫く震えが止まらなかったです……。\n元々、ピアノを主体とした綺麗なドラムンベースを作ろうと思ってこの曲の制作をしていました。途中で「8bitの音を入れてみよう」という発想から最初は1トラックだけ8bitの音を入れる予定でしたが、どんどん8bitの音が増えていきました。そして「折角8bitの音を使うのだから、途中で8bitの音のみの場所を入れてみよう」と思いサビ前に入れてみたところ、思った以上にメリハリがしっかりして効果的になったのではと思います。\n気付けばピアノ主体の曲ではなくなり、8bitの音が交差する哀愁漂うメロディアスな曲に仕上がりました。是非とも筐体でこの曲をお楽しみ下さい。改めてありがとうございました！影虎。でした。',
      },
      {
        artist: "negi(第1回目配信楽曲）",
        title: "Liming Light",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_06.mp3",
        comment:
          "初めまして！negiと申します。\nSweetness Recordsというネットレーベルに所属してたりします。\n採用を頂けたのも、今まで関わって下さった方々のおかげです。\nこの場を借りてお礼申し上げます。\nキャッチーで楽しい感じのHardcoreを目指して、      「明るくてキャッチーな曲作りてぇ～」って言いながら作ったので、      「キャッチーだなぁ～＾＾」って言いながら遊んで頂けると嬉しいです。\nここでﾓﾁｬﾓﾁｬせずに、またこの場に来れるよう精進します。\nありがとうございました。",
      },
      {
        artist: "RedMuffleR(第1回目配信楽曲）",
        title: "Rubeus",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/15/1_07.mp3",
        comment:
          "RedMuffleRです。SOUND VOLTEXのコンテストに採用されたこと、大変光栄に思います。\nコズミックでファンタジックな戦闘曲をイメージして書いた曲ですが、ゲームのテーマにも合致したようで嬉しい限りです。\nピアノとシンセサイザーを伴いながら、戦況は目まぐるしく変わります。この勝負、勝てる見込みはあるでしょうか。",
      },
    ],
  },
  {
    id: "original16",
    name: "The 4th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_16.jpg",
    sounds: [
      {
        artist: "たちのん(第8回目配信楽曲）",
        title: "Aliquam",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_01.mp3",
        comment:
          "こんにちは、お久しぶりです。たちのんです。\nKAC楽曲のコンテストということで、ボスらしさを漂わせながらもどこか哀愁ある雰囲気を匂わせてみました。\n日常に顕在する、ふとした瞬間の奇妙さ、世界が見せる別の表情。そんなイメージを元に作成したのが本楽曲です。\n古ぼけた書庫に眠る一冊の古書、その中には我々とは違う世界が息吹いているのかもしれない。\n当然その別世界にも『長く続く物語』が存在しており、生き物は繁栄し、築いてきた文明があることでしょう。\n我々の住む世界もひょっとしたら誰かに覗かれてるのかもしれませんね。\n開かれた一つの世界が始まり、そして常しえに続いていく、そんな様子を詰め込んだ2分間をお楽しみください。",
      },
      {
        artist: "ぬゆり(第8回目配信楽曲）",
        title: "Stleq",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_02.mp3",
        comment:
          "初めましての人もそうじゃない人も初めまして。ぬゆりと申します。\n前回に引き続き採用いただきありがとうございます。本当に嬉しいです。\nタイトルはすとれと読んであげてください。すとれきゅでもいいですかわいいので　なぜならかわいいので強そうな曲が作れたかなと思うのでぜひ皆プレイして強くなって下さい。アアアアアアア！！！！！！！！！",
      },
      {
        artist: "u-z(第8回目配信楽曲）",
        title: "冥天・ヘメロカリス",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_03.mp3",
        comment:
          "＿人人人人人人人＿\n＞ 　たいへん   ＜\n＞祭りカーニバル＜\n￣^Y^Y^Y^Y^Y^Y￣\nあ！！！！やばい！！！KACの楽曲コンテストに受かっちゃった！！！！\nやばいよ！！！たいへんたいへん！！！！\nどうしよう！！！！KONAMI Arcade Championship！！！！\n振り仮名にして星付けるとコナミ☆アーケード☆チャンピオンシップ！！！！\n今回すごい厨二！！！！ラスボスっぽい！！！！！途中で変拍子になる！！！\nやばい！！！！はんぱない！！！！\n採用頂きありがとうございました。\nu-z（ゆーじ）",
      },
      {
        artist: "BlackYooh vs. siromaru(第8回目配信楽曲）",
        title: "XHAOS JUDGE",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_04.mp3",
        comment:
          "たとえどこまで堕ちても、闘い続けるということです。\nバレンタインデーに行われたKAC決勝。KACとバレンタインデー、バレンタインデーとKAC。\n今こそXHAOS JUDGEの時であります。何卒よろしくお願い致します。\nBlackY\n今回もこの3人で組みました！！！！！！！前回と同じくしろまるさんの激しくかっこいいドラムに僕らBlackYoohコンビが旋律をのせてます！！今回は特にハチャメチャドチャカオスの曲に仕上がってしまいました（笑）\n宜しくお願いします！！！あと朝食はご飯派です。\nYooh\nなんとか毎回KACに何らかの形で関わることができて嬉しい限りです。\nクロスブリードというジャンルの曲が好きなのと作ってみたかったこともあり、そのような方向性でボスボスしい下地を作りました。\nその上でBlackYさんYoohさん両名にお願いした所、大変ステキでムテキでカッコイイ曲に仕上がり、前作BLACK or WHITE?に引き続きお二人に頭が上がらない事態となりました。\n各所から猛者が集うKACという混沌(カオス)の場に、審判(ジャッジ)を下すという想いで作られた本楽曲、楽しんでいただければ幸いです。\nなお、パンよりご飯派です。\nsiromaru",
      },
      {
        artist: "unatra(第8回目配信楽曲）",
        title: "Nofram",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_05.mp3",
        comment:
          "3度目まして！unatraと申します。\nKACコンテストという舞台、そしてオリジナルインストでは初採用ということでいつにも増して嬉しいです！ありがとうございます。\n今回は変拍子と転調を盛り込んだ、中々複雑な楽曲に仕上がったのではないかと思います。自身初の試みも多く普段以上に制作時間を要しましたが、完成の達成感は格別でした。\n是非楽しんで頂ければ！よろしくお願いします～↑↑",
      },
      {
        artist: "syzfonics(第8回目配信楽曲）",
        title: "Never Ending",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/8_06.mp3",
        comment:
          "初めまして、syzfonics（しずふぉにくす）とかいう人です。宜しくお願いします。\n前を見続けながら突っ走るようなエンディング曲を目指しました。なので何回も展開をする楽曲構成ですが、「それでも今走っている道は終わらない」というテーマにした楽曲なので最初のテーマに戻る構成にしています。\nそうです。まだまだ終わらないんです。\n以上、ボス曲らしさなんて一切考えずに突っ走ったひねくれ者でした。是非楽しんでください。",
      },
      {
        artist: "影翔鼓舞(第7回目配信楽曲）",
        title: "Oriental Blossom",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_01.mp3",
        comment:
          "3記念コンテストに続いて2回目の採用誠にありがとうございます！影翔鼓舞(えいしょうこぶ)の『影』の方の影虎。です。この曲のテーマは「和風ドラムン」で、ドラムンベースのリズムに合わせて和風の旋律・和楽器が交差する曲となっています。\nこの曲は1人で作って提出する予定だったのですが、一通り出来上がってから構成等に悩んだので友人である隼翔に一部編曲をお願いしてみました。そして隼翔から貰った音源を元にして再構成して……という流れを経た結果、1人で作った時よりも華やかさと格好良さが倍増しました。合作の力って凄いですね。\nKACでは恐らく派手なボス曲が目立つことになると思いますが、是非ともこの曲で癒されて欲しいです。宜しくお願い致します！\n【影虎。(作編曲)】\n初めまして。影翔鼓舞の『翔』の方、一白隼翔（ひとしろはやと）です。\nこの度は採用して頂き、誠にありがとうございます。\n普段は作曲よりも編曲していることが多いです。\nこの曲のタイトル“Oriental Blossom”は、和の旋律とドラムンベースの力強さ、そして咲き誇る花をイメージして編曲して名付けたものです。\nKACという華やかな舞台を、そしてSOUND VOLTEXを彩る曲として、皆様に楽しんで頂けることを願っています。\n【一白隼翔(編曲)】",
      },
      {
        artist: "lapix(第7回目配信楽曲）",
        title: "Backflow",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_02.mp3",
        comment:
          "どうも、lapixです！\n今回の楽曲は今までとは少し違ったカラーで挑戦してみました。\n開始早々から音幅全開のうねるようなベースや硬いキック等、一音一音こだわりぬいて作りました。\n「何かに立ち向かっていく」という意味を込めて「Backflow」という曲名に。\n楽しんでプレイして頂ければ幸いです。ハイテック。\nlapix",
      },
      {
        artist: "JourneyCat(第7回目配信楽曲）",
        title: "Beyond the Sandstorm",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_03.mp3",
        comment:
          "はじめまして、JourneyCatもといS.Percentageと申します。この度は採用をいただきまして嬉しい限りです。\n前回のKAC公募では速い曲を出してダメだったので今回は(比較的)遅めで攻めてみました。\nあと個人的に今ちょっぴり和風がブームだったりするのでそれを入れてみたりとか。\nイメージとしては「困難(難曲)を乗り越えていく」といったような感じです。\nあとはメタなとこでいろいろ変えたりとかしたんですが言わないことにしておきます（？\nそれでは、高難易度の息抜きみたいな感じで聴いてプレイしていただければ幸いです。",
      },
      {
        artist: "提供(第7回目配信楽曲）",
        title: "Asian Chip City",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_04.mp3",
        comment:
          "皆さんこんにちは！\n提供です！\n初めてのオリジナル楽曲採用、大変うれしゅうございます！\n謝謝！！\nさて、この曲はめっちゃアジア感を意識して制作させて頂きました！\nだってアジアってなんか良くないですか？\n上から読んでもアジア、下から読んでもアジア、右から読んでも左から読んでもアジアですからね！！\nアジのたたきもめっちゃ美味しい！\nチップサウンドやキック、メロディや声ネタなどに合わせてしっかりボタンもたたきましょう！！\n（実際のプレイではボタンは叩かず優しくプレーしてあげてね♪）\n最期にこのわたしのツマミ裁きを見るがイイ！\n:(#ﾞﾟ'ωﾟ'):ｲﾖｫオオ～～～～～～～～ッ？！！？\n;　'　　　　　;\n＼,,(' ⌒｀;;)\n(;; (´･:;⌒)/\n／⌒ヽ(;.　(´⌒` ,;) ）　’　　　！！PONG！！\n（　＾ω(（´:,(’ ,； ;'),`\n（　⊃　⊃ /￣￣￣/＿＿\n＼/＿＿＿/\n提供でした！",
      },
      {
        artist: "uma vs. モリモリあつし(第7回目配信楽曲）",
        title: "Pieces of a Dream",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/7_05.mp3",
        comment:
          'お久しぶりでしょうか、umaと申します。\n去年のKAC楽曲コンテストに引き続き、今回のKAC楽曲コンテストにて採用を頂けたこと、大変嬉しく思います。\nPieces of a Dreamは当初作るつもりは無かったのですがモリモリあつしさんから"take a step forwordのような楽曲を作りませんか"というお誘いを受け、製作に至った楽曲となっております。\n私が主体となって動き作曲はお互いに、編曲は私個人で行いました。\n作曲段階では合作ということであえてモリモリあつしさんに展開やパートを埋めて頂こうと一部手を加えなかったりと穴を残しながらの製作でしたが、モリモリあつしさんから良い具合にそれを埋めるように展開やメロディのピースを当て嵌めて頂きました。\nまた完成直前まで楽曲名が長らく思い付いておらず名無しのままでしたが、モリモリあつしさんに"Pieces of a Dream"と命名して頂き、欠けたままだった最後のピースを埋めて貰いました。\nモリモリあつしさんとは知り合ってから丁度一年程なのですがこうして合作するまでに至り、とても感慨深いものがあります。\n今まで仲良くして頂いておりますので今後も一緒に何かしら活動できたらいいな、と常々思っております。\nまたしても長くなってしまいましたが、今まで配信されました私やモリモリあつしさんの楽曲共々本楽曲もどうぞ宜しくお願い致します。\n(uma)\n流星トラップボーイズ代表取締役、モリモリあつしです。この度は採用頂きありがとうございます。\n今回は「take a step forward」等でお馴染みのumaさんとの合作楽曲となります。\nもしかしたら知っている方も居るかもしれませんが、私はSOUND VOLTEXに「ドキドキ☆流星トラップガール!!」が採用されるまで、何曲も、何曲も、何十曲も楽曲を投稿し、落選していました。\nそんなくよくよしていた時期に、私とumaさんは知り合いました。\n「私も、モリあつさんと同じように、何曲も、何曲も、何十曲も楽曲を投稿し、落選していましたよ」\numaさんは何度も私に言います。\n「早く同じ舞台に立ちましょうよ！モリあつさんなら大丈夫ですって！」\n最初の一歩を踏み出せたumaさんは私にとって目標である存在で、そんな素敵な方と交流させて頂いてるのだから、自分も相応の人間にならなくちゃ。と強く思うようになりました。\nそんな気持ちで臨んだのが、「GUMI限定！オリジナル楽曲コンテスト第2回」、「第一回ボルテキャラテーマ曲コンテスト」でした。\n彼は、当時私が一番「ありがとう」と言いたかった人の一人でした。もちろん、言いました。\nそんな彼との合作楽曲が、ついに、SOUND VOLTEXという舞台で発表できることを、本当に、本当に、本当に、本当に、本当に嬉しく思います。\n楽曲の方はumaさんとの合同作曲及び一部音色を担当させて頂きました。\numaさんっぽいメロディやコードを目指しつつ私の個性もちょっとだけモってみたので是非是非各担当箇所を探して頂けると幸いです。\nこれからもよろしくね。\n(モリモリあつし)',
      },
      {
        artist: "FAKE TYPE.(第6回目配信楽曲）",
        title: "FAKE STYLE II",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_01.mp3",
        comment:
          "SDVXの皆様、はじめまして。\nトラックメイカーとラッパーの二人組ユニット『FAKE TYPE.』と申します。\n初めてSDVXに僕らの楽曲が収録されるということで、大変嬉しく思います。\n採用頂きましてありがとうございます！是非ともプレイしてみてください。\n(FAKE TYPE.)\nトラック担当のDYES IWASAKIです！\n音ゲーに自分の楽曲が収録されるのが一つの夢であったので、この度は採用されてとても光栄に思います！\nこの曲は「最強・天上天下唯我独尊、他の追随を許さないラスボス」をテーマに制作しました！\nそんなバイブスを感じて貰えたら嬉しいです！\n(DYES IWASAKI)\nラップ担当のトップハムハット狂です。\n自分の声が、音ゲーに入るなんて思ってもみなかったので\n驚きと嬉しい気持ちが入り混じって、変なテンションになりました笑\n今回は勢いのある楽曲となっています、難易度はどうなるのか解りませんが\n是非ともプレイしてみてください。ありがとうございました！\n(トップハムハット狂)",
      },
      {
        artist: "Verdammt(第6回目配信楽曲）",
        title: "continew",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_02.mp3",
        comment:
          "んぎゃああどうもVerdammtです。えへへ\nまず先に説明しておきますと、曲名は誤字ではなく、楽曲に込めた物語を象徴する造語です。\n以前採用を頂いた「ゆうしゃのなつやすみ」に続く物語の結末と、そこから始まる新しい何か、という感じのテーマになっています。プレイの際はBPMに十分ご注意ください。\nちなみにこの楽曲は、一度落選しています。何が不足していたのか、音楽ゲームの楽曲としてどんな音が求められていたのかよく考え直し、調整を重ね、何度も聴き直しました。\nそして文字通り、コンティニューすることができました。本当に、本当にありがとうございます。",
      },
      {
        artist: "s-don as Iriss(第6回目配信楽曲）",
        title: "Blacksphere",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/6_03.mp3",
        comment:
          '皆様初めまして。\nIrissことs-don(すうどん)です。\nはい！俺です！すうどんです！すいませんでした！\nとにかく採用していただきありがとうございます！\nこの曲、"Blacksphere"はとにかくベースがぶっとく飛び回る曲です！\nズンドコのリズムにノリノリしつつ、\n声ネタ増し増し感を楽しみつつ、\n気分転換くらいのノリでプレイしてください！\n採用経験のあるnora2rやkanoneと同じサークルで活動していたのですが、今回採用されたことでちょっとは二人に顔向けできるのかなーと思います。\nイエーイ見てるかー！？！？\n一人でも多くのプレイヤーの方に楽しんで頂けたら幸いです。\nそして、僕の周りの界隈に少しでも希望を与えることができたら幸いです。\n以上！よろしくお願いします！',
      },
      {
        artist: "you(第5回目配信楽曲）",
        title: "Shiawase Transmission",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_01.mp3",
        comment:
          "はい、前回のKACから引き続き採用いただきました。youです。\n今回の「Shiawase Transmission」は前回の「Hoshizora Illumination」の続編のようなイメージで制作しました。\n底なしの明るさで幸せを届けるような、そんな曲になっています。楽しんで頂ければ嬉しく思います。",
      },
      {
        artist: "Shiron＋こふ×モリモリあつしと提供でお送りします。(第5回目配信楽曲）",
        title: "Lucky*Clover",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_02.mp3",
        comment:
          'Shironです！この度もご採用いただきまして、ありがとうございます。\n今回はこふさん、モリモリあつしさん、提供さんの三方との合作です！\n実はこの4人はポップ感溢れるハッピーな曲を作るのが得意だったので、じゃあみんなで音ゲーハッピーハードコアを作ってやろうということになりました。\n僕は楽曲中ではコード進行、ドラム、ピアノ＆シンセソロなどを担当しています。\nこのパートはあの人が作ったんだな～とか、いろいろ想像しながら聴いてみると面白い！！んじゃないかと思います！\n是非是非、楽しんでプレーしてくださいね！\nパパパパーリィー(^v^人)\n(Shiron)\nス゛ノ゛ー゛モ゛ー゛シ゛ョ゛ン゛！！！！！！\n（この度は、ご採用頂き誠にありがとうございます。こふです。\n今回は、とっても強そうな名前のお三方と一緒に明るくてドハッピーな曲を作らせていただきました。\nイントロ・ボサノバっぽいパート・サビのメロディをはじめ、編曲においてもいろんなさりげない所を担当しております。\n4人の熱いパワーがモリモリ詰まった楽曲ですので、是非楽しんで下さい、よろしくお願いします。）\n(こふ)\n流星トラップボーイズ代表取締役、モリモリあつしです。この度は採用頂きありがとうございます。\n今回は「Lunartic Dial」等でお馴染みのShironさん、「snow motion」等でお馴染みのこふさん、「Daily Lunch Special ～DeliciousREMIX～」等でお馴染みの提供さんとの合作楽曲となります。\n私達の関係はお互いに切磋琢磨し、実力を高めあえるようなライバルであり、同時に友達です。彼らの存在なしでは、今の私は絶対にありえなかったなと常々思っております。\nこれからもよろしくね。\n私の担当は主に声ネタや音ネタのエディットだったり、Shironさんのコードを弄ったり、こふさんの作りかけのメロディを完成させたり、楽曲の方向性を定めたり…その他全体的に提供さんの補佐をさせて頂きました。\n私達の過去曲を知っているとニヤリと出来るような要素をふんだんに散りばめてみたので、お祭り感を楽しんで頂ければ幸いです。\n(モリモリあつし)\n提供です！この度もご採用いただきましてありがとうございます。\n今回はなんと あの"Shiron"さんと、あの"こふ"さんと、あの"モリモリあつし"さんというイカれたメンバーでの合作をさせていただきました！\n僕は主に編曲や構成、全体のバランスの調整などまとめ役的なものをさせていただきました！\n楽曲の制作の中でこのモリモリ3人組には本当に感謝してもしきれないくらいに助けて頂きました...\nある種の友情の＜Clover(クローバー)＞が芽生えた気がします。\nそんな僕らのハッピーを皆さんにもおすそ分けということでスーパーハッピーハードコアな曲です！\n『Lucky*Clover』どうぞお楽しみください！！\n(提供)',
      },
      {
        artist: "kamome sano(第5回目配信楽曲）",
        title: "crêpe suzette",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/5_03.mp3",
        comment:
          "今までとは一転、コンビニでは買えないスイーツです。\n高級感とハチャメチャ感を詰め込みました。食べたことないので誰かおごって下さい。\nkamome sano(tatsuta recordings)",
      },
      {
        artist: "cosMo＠暴走P(第4回目配信楽曲）",
        title: "eternita",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/4_01.mp3",
        comment:
          "cosMoです。前回のKACコンテストに引き続き、二度目の採用ありがとうございます！\nタイトルはイタリア語で「永遠」です。\nSOUND VOLTEXにはずっとずっと僕らの楽しい場所であってほしい\nという願いをこめてこの楽曲を制作いたしました。\nそんな経緯もございまして、「For UltraPlayers」のシリアスさからは一転、明るく楽しい曲になったかなーと思います。\nそれでは！今回のKACも熱いドラマが生まれることを期待しております！",
      },
      {
        artist: "Getty vs. DJ DiA(第3回目配信楽曲）",
        title: "Ops:Code-Rapture-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/3_01.mp3",
        comment:
          "初めまして、Gettyと申します。\n普段は「Kirara Records」というレーベルに所属し音楽を作っています。\nこの度、同レーベル主宰であるDJ DiAとの合作曲が採用されたことを大変嬉しく思います。\nボスらしい雰囲気を纏った曲にするにはどうすればいいかを二人で相談し、以前から作ってみたかったPUMPCOREを音ゲー向けにアレンジし完成したのがこの曲です。\n主にDJ DiAがリード等のメロディ部分を、僕がベースやキック等の低音部分を担当しています。\n二人それぞれの持ち味を存分に活かせた楽曲に仕上がったんじゃないかなと思います。\n楽しんでプレイして頂けると幸いです。\n(Getty)\n騎士達は、幸福を求めて鎖を繋ぐ\n(DJ DiA)",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Everlasting Message",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_01.mp3",
        comment:
          "ぺのれりと申します。\nこの度は楽曲の採用並びに優秀作品としての表彰、誠にありがとうございます。\n心より嬉しく思います。\n時は流れ、我々が生きている現在という時間もやがては過去のものへと色褪せていきます。\n培ってきた思い出もいずれはただの記憶へと変わり消えてなくなってしまうのかもしれません。\nそれでも”この決勝戦の時の気持ちだけは永久に続きますように”という願いを込めてEverlasting Message（永久-とわ-の福音）という曲名を名づけました。\nプレイヤーの方々の1人1人がソリストとなり、この壮大な協奏曲の結末へと駆け抜けていって貰えたらと思います。\n本当にありがとうございました！",
      },
      {
        artist: "黒魔(第2回目配信楽曲）",
        title: "Sayonara Planet Wars",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_02.mp3",
        comment:
          "採用いただきありがとうございます！黒魔です。\n「Sayonara Planet Wars」は自分らしいボス曲という所を沢山考えて作った曲になります。\nピコピコサウンドで繰り広げられた戦いを、耳いっぱいに感じて貰えたらとても嬉しいです。\nうおおおーーー！\nどかどかどかどか！！\n宜しくお願い致します！！！",
      },
      {
        artist: "ke-ji(第2回目配信楽曲）",
        title: "Chant du Cygne",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_03.mp3",
        comment:
          "採用頂きありがとうございます。ke-jiです。\n当楽曲Chant du Cygne（シャンデュシニュ）はフランス語で白鳥の歌を意味し、生涯鳴かない白鳥が死ぬ間際に美しい歌を歌うという伝承より転じて最後の作品・戦いを意味する、まさにKACの最終決戦を想定した楽曲です。\nイントロ部分ではプレイヤーを称えるように曲が始まり、その後、緊張感と疾走感溢れる曲調へと変化します。\n2分の制約の中に重要な位置づけであるイントロで1/4の尺を使い、極限まで静と動・ドラマティックさを詰め込むため残り尺1/3というところでさらに無音空間を取り入れ、そこから一気に畳み掛ける怒涛の展開を仕込まさせて頂きました。\nラスト付近では私のキーボードとしらこいし君のギターソロバトルを取り入れており、KACという大舞台に挑む製作者・プレイヤーの心中がリンクするような緊張感・興奮を感じていただければ幸いです。\n（ke-ji）\nギター担当のしらこいしと申します！\n今回は過去作とは違い、思いっきりギターを鳴かせて、呻かせて、轟かせました。\nテクニカルなユニゾンがない分、最後のソロはおもっくそ弾きたくらせていただきました…\n皆さんも重厚で壮大なke-jiワールドに酔いしれてくださいまし…！！！\n(しらこいし)",
      },
      {
        artist: "かめりあ feat. ななひら(第2回目配信楽曲）",
        title: "混乱少女♥そふらんちゃん!!",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_04.mp3",
        comment:
          '採用ありがとうございます！かめりあです。\nBPMが変わると、大変ですよね。きっと、ソフランで時空を歪め、変拍子で世界を変える───そんなパワーがあるんだと思います。\n100回にも及ぶテンポチェンジ・拍子変更を盛り込んだ、BPM32～259の波乱万丈豪華絢爛な電波ソングです。\nドンドン色んなリズムで攻めてくよ！しっかり付いてきてネ！\n（かめりあ）\n普段は普通の女の子(自称)、ななひらです。\nこの度は採用ありがとうございます！\nコロコロびゅんびゅんリズムが変わっちゃいますが、ノレたときの爽快感としっくり感がたまらない楽曲です。\nリズムを完璧に覚えた頃には"ワブルビーム"が習得できているかも！（*＞ω＜)っ～～～～～\n（ななひら）',
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "到達してしまった僕らと夢と希望の最之果",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/2_05.mp3",
        comment:
          "4番目の物語。\nあの島で『彼女』と出会い、『匣』の中で何かを見た。\n『博士』に導かれるまま『僕ら』の物語は幕を上げる。\n夢と希望のままに生きた行く末に、願う未来があると信じて。\nIIIでは初めまして、Ayatsugu_Otowaと申します。まさか受かると思わなかったので連絡が来た時は変な声を上げました。\n去年よりも和風めな作風にしつつ、「ｵｯこれは(ｵｯ)」って感じに仕上げました。ｵｯってなってくれると嬉しいです。ｵｯ。",
      },
      {
        artist: "C-Show(第1回目配信楽曲）",
        title: "Invitation from Mr.C",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_01.mp3",
        comment:
          '"SOUND VOLTEX III GRAVITY WARS"のCの文字担当のC-Show（シショウ）です。\n久々にこうしてコメントが書ける事、大変光栄に思います。\nボルテ筐体を通じて皆様に楽曲を提供できるのは、およそ１年半ぶりです。\n『とりあえず送ってみるか』と送ったTomorrow Perfumeのリミックスで採用頂き、『こんな曲あったら面白いんじゃない？』と送ったPANIC HOLICでも採用して頂き、このタイミング辺りで、じわじわと多くの方に自分の存在を知って頂けるようになったのかな？\n自分を知って頂いた方々は、ボルテプレイヤーのみならず、同じ作曲者の方々にも認知頂き、幸いながら、じわじわと色々な作品に呼んで頂けるようになり、４年前は、曲を作っても誰にも聴いてもらえなかったのですが、今は色んな方々に曲を聴いて頂いたり、感想を頂けるようになりました。\nもちろんまだまだたくさんの方に聴いて頂いて、感動させたいという思いはありますが、それでも、数年前から今を振り返ると、まるで別人かのような、ちょっとしたサクセスストーリーを感じます。\n音痴だし楽器も弾けないし楽譜も読めないヤツでも、続けていれば、少しは身になるのかな、と数年を振り返りそう思いました。今ではボルテに影響を受け、DTMを始め、SOUND VOLTEX FLOORの採用を勝ち取った方もいらっしゃるというお話も耳にしたことがあります。\nそんな時代なんですね。\n話は逸れましたが、SOUND VOLTEXも、とうとう第３弾となり、新要素も取り入れられ、プレーしていて楽しめる楽曲にも幅が出たんじゃないかな～と考え、本作品は、今までにあまり無いようなテイストも加えたりしております。\n楽しんで頂けたら幸いです。\n最後に、ここまで来れたのも皆さんのおかげです。\nプレイヤーさん、作曲者の仲間達、スタッフ様、両親（音楽活動に反対された時期もあったけど）等々、このゲームを通じて「人間って一人では生きていけないんだな」という事を勉強させて頂きました。\nここまでお世話になりましたけど、これからもよろしくお願いしますね！\nそれでは！\nいつかまた！',
      },
      {
        artist: "P*Light(第1回目配信楽曲）",
        title: "2 MINUTES FIGHTERS",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_02.mp3",
        comment:
          "KACはプレイヤーの頂点を決める大会ではありますが、ボルテにおいては僕達コンポーザーが競い合う場でもあります。\n最高の舞台で、最高のプレイヤーによって、最高の楽曲がプレーされる。\nあの緊張感、高揚感はとても刺激的でした。\n決勝戦のあの2分間を目指して、プレイヤーもコンポーザーも必死に競い合う。\nこのKAC楽曲の2分間は、色々な人達にとって特別な思いがたくさん詰まった2分間です。\nボルテに限らず、BEMANIシリーズは最高の2分間がたくさん詰まったゲームだと思います。\nぜひ楽しんでもらえたら嬉しいです。",
      },
      {
        artist: "Yooh(第1回目配信楽曲）",
        title: "LegenD.",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_03.mp3",
        comment:
          "採用ありがとうございます！Yoohです！\nKACは毎年、プレイヤー同士の熱い戦いが繰り広げられますが、その中でも特にボルテは凄まじい迫力があると思います。\n自分は今までボルテのKACを生で見てきて毎度毎度、その迫力に驚かされます。\n今回は、そのような迫力のある壮大な感じのイメージで製作しました。\nそして、いつもよりちょっと早めのテンポで激しさを出してみました。\n今年のKACもボルテに新たな歴史の1ページが刻まれますように！\n伝説(LegenD.)となれ！！！！！！！！！！！！！！！！！！！！！！！！！！！",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "World's end",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/16/1_04.mp3",
        comment:
          "この度は採用して頂き大変嬉しく思います。\nKACオリジナル楽曲コンテストという事で、ひたすら高難易度を意識した曲となっておりますが、それでもここまで来れた方々なら、きっと世界の果てにまで辿り着く事が出来るでしょう……。",
      },
    ],
  },
  {
    id: "remix07",
    name: "東方妖々夢リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_07.jpg",
    sounds: [
      {
        artist: "ふりらい feat. あにょ(第8回目配信楽曲）",
        title: "アルティメットトゥルース -Phantasm-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_01.mp3",
        comment:
          "創作の世界とは無縁だった私が「趣味として曲を作っている人々がいる」ということを知ったきっかけは、いわゆる東方アレンジでした。\n曲は聞くもの、せいぜい真似て演奏するものという程度の認識しか持っていなかった私にとって、その世界はとても新鮮に思えました。\n当時少々ギターを齧っていた高校生の私は、その中でもメタルのアレンジに強く惹かれていきまいました。\n趣味とは言いながらも私では遠く及ばぬ演奏技術でもって作られた曲を聞くたびに、「凄いなぁ、自分もできたら良いのになぁ」と憧れ半分、諦め半分に思っていた記憶があります。\n何より衝撃を受けたのはその世界で強烈な異彩を放つ同年代の方の存在で、それが今回ギターを依頼させていただいたあにょさんになります。\n私に新しいものの見方を与えてくれた東方project楽曲のリミックスコンテスト採用者欄に、とてもリスペクトをしている方と名を連ねることができたのは本当に嬉しいです。ありがとうございます！\nさて、今回私はアルティメットトゥルースのリミックスをやらせていただきました。\n得てして真実というのは何かに隠れているものです。究極の真実というからには最奥に隠れているものを指すのかなぁと私は（勝手に）解釈したために、東方妖々夢の隠しステージである幻想（Phantasm）の名前を副題として拝借いたしました。\n妖々夢の中では様々な境界がキーワードとして現れます。境界というのは異なる存在の間にできるものなので、曲にも色々な要素を取り込んでみました。\nそれら混ざり合う要素の境界に幻想を感じていただけたら幸いです（？\n（ふりらい）\nいつかアレンジしたいと思ってた曲を、いつか共作したいと思っていたふりらい氏と取り組めた上、最高の結果がついてきたので、何もかも嬉しいです。\n打ち込まれたフレーズを弾くのは、技術的にかなりの困難が生じることがある一方で、\nそれを乗り越えることでたくさんの新しいアイデアを吸収できたり、音楽的に新しいものができたりする、ルナティックで指の皮ぽろぽろ、脳汁ドボドボな作業です。\nボス曲らしいルナティックなギターと、幻想的なアレンジを楽しんでもらえればと思います。僕もちゃんと予習してプレイしにいきます。\n（あにょ）",
      },
      {
        artist: "梅干茶漬け(第8回目配信楽曲）",
        title: "ジャンピン・スマイル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_02.mp3",
        comment:
          "FLOORのリミコンでは初めまして、梅干茶漬けです。\n何やら表記揺れのバリエーションが増えてきてるみたいです。梅干茶漬けです。\n採用いただきありがとうございます。\n今回は「ティアオイエツォン (withered leaf)」の方をアレンジ致しました。\n特に深い事は考えず、はいはい元気元気ピコピコｳｪｰｰｰｰｲみたいな曲に仕上げました。\n底なしに明るくなったジャンピン・スマイル、是非楽しんで頂ければと思います！\n（タイトル普通に英語表記でよかった気がするなあ･･･）",
      },
      {
        artist: "uma vs. モリモリあつし(第8回目配信楽曲）",
        title: "東方妖々夢 ULTIMATE MEDLEY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_03.mp3",
        comment:
          'ULTIMATE MEDLEY、お楽しみ頂けましたでしょうか。こんにちはumaです。\n昔から一度やってみたいことがありましてリミックスコンテストの際、対象楽曲を丸々使ったMEGAMIXや全部載せといった曲作りたいな、と紅魔郷コンテストの頃辺りから画策しておりました。\nただ実際にそう考えた当時は知り合いも少なく私自身単体でそれを行える程の能力は持ちあわせておらず、ずっとそのお話はお流れとなってしまっていました。\nそれから暫く経ち、SOUND VOLTEXが契機となりいろんな方と関わる機会が増え色々な世界を見て回るようになった頃に東方妖々夢リミックスコンテストが始まったことでもう一度やってみようと思い、今度はモリモリあつしさん、モツさん、いつきり君さんをお呼びして着手し始めました。\n楽曲、ジャケット共々ああでもないこうでもないと言いつつ言われつつ完成したのは投稿日ギリギリだったような覚えがあります。\n曲名ですが"Flash Back 妖々夢"とか"妖々夢 -FULL SPEED-"みたいな感じの名前にしたいなと考えていたのですが前に話題になりましたULTIMATE MEDLEYの名前にあやかり"東方妖々夢 ULTIMATE MEDLEY"という名前をモリモリあつしさんに名付けて頂きました。\n誰一人が欠けても恐らく完成まで持っていくことは出来なかったのではないかと思います。皆で協力して制作しました本楽曲をどうぞ宜しくお願い致します。\n(uma)\n流星トラップボーイズ代表取締役、モリモリあつしです。この度は採用頂きありがとうございます。\n今回も「The 4th KACオリジナル楽曲コンテスト」に引き続き、umaさんとの合作楽曲となります。\n自分で作成した東方楽曲で音楽ゲームがやりたくて音楽を始めた身としては今回の採用は恐悦至極に存じます。\n以前よりumaさんの発案で「今後SOUND VOLTEX FLOORにて東方リミックス楽曲コンテストが開催されたらメドレーを作りたい」と意見があり、「KAC 2012 ULTIMATE MEDLEY」を経て今回「東方妖々夢リミックス楽曲コンテスト」が開催されたのでやるしかないということで制作を開始しました。\nSOUND VOLTEXに収録されている東方楽曲のうち特に印象的だった楽曲のジャンルをこれでもかと言うほど詰め込み、自分達が普段大事にしている楽曲スタイルも保持しつつ、BPMも相まってSOUND VOLTEXの東方要素というものを二分間に全て集めた大作となります。\numaさん、モリモリあつし共にオールジャンルクリエイターかつ東方アレンジャーでもあるので、完全にお互いの強みが発揮できた作品になったと思います。\n今回の採用にあたって、伝えたいことはもっともっとたくさんあります。\nしかし、長々と説明しなければ伝わらないほど、軟な曲には絶対になっていないと思います。\n全てを、詰め込みました。\n俺達の挑戦状、受けてみろ！！！\n(モリモリあつし)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：モツ vs. いつきり君\nジャケットで紫および、画面構成全般とタイトルを担当させて頂きました、いつきり君と申します。\n今回はメドレーという事で、ドカンと強そうで盛り沢山、とっても欲張りな画面にしました。\nモツさんのキャラクター達が各々の賑やかさを出してくれて中々に豪華に仕上がりました！\n互いにボルテ←→東方とのきっかけをもって繋がった４人で、ワイワイと楽しく、ときには真剣に意見を出してぶつかりつつ段々脱線しつつ、投稿締切の直前まで創り上げた作品です。\n皆で創るって、"スゴイ"ぞ～～！！！！！沢山の新しいをもらいました！新発見モリだくさん！\nボルテを通じて出会ったからこそ出来上がったこのメドレーを、ジャケットもろとも是非楽しんでいただけたらと思います。(隅々まで見てみてくださいね！)\n(いつきり君)\nきっかけは東方でした。\nSOUND VOLTEXというゲームに東方アレンジが加わるという話を聞いたのはもう何年前でしょうか。元は東方Projectという作品が大好きでそちらを中心とした活動をしていた自分はそこからボルテという世界に入りました。\n大好きな東方アレンジが音楽ゲームで遊べる。それが嬉しくて自分は何度もプレーを重ねていき、そして、この疾走感あふれるゲームに夢中になっていったのはそれほど時間はかかりませんでした。東方アレンジに加え、BEMANI・FLOORの楽曲を聴いて\nこの曲いいな、好きだな。と、さらにボルテの魅力に惹かれ、そして気が付けばボルテも東方と同じくらいに大好きな作品となっていました。\nいつしかプレイヤーとしてだけではなく、自分も絵を描く身として盛り上げていきたい。\n楽しい事をしたいという気持ちが強くなりそれから公募にも応募をしていくようになりました。\n特にやりたいと思ったのは東方とボルテを繋ぐ架け橋になりたい。ということです。\nお互いの作品を知らなくても僕のように二つの世界を知る事が出来て楽しめる。そういうのがやりたかったのです。\nそんな活動の中で知り合ったたくさんのプレイヤーの皆さん、\nそして合作をしてくれたモリモリあつしさん、umaさん、いつきり君さん、\n本当にありがとうございます。\n自分はこの素敵な作品を一緒に創れて本当に良かった。\nみんなに会えて本当に良かった。\nボルテと東方、二つの作品を知れて本当に幸せです。\n四人の気持ちを込めたこの究極の作品。是非とも楽しんでもらえたら嬉しいです。\n(モツ)',
      },
      {
        artist: "まぁ言うてかぼちゃの色も橙だし多分大丈夫(第8回目配信楽曲）",
        title: "lost chain",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_04.mp3",
        comment:
          "パーフェクトアルティメットち、ち、ちぇ……っんぁ！？\nいや、なんでもない。どうやら疲れていたようだ。忘れてくれ。",
      },
      {
        artist: "Noah(第8回目配信楽曲）",
        title: "Clash of swords",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_05.mp3",
        comment:
          "この度は採用して頂き大変嬉しく思います。\n東方妖々夢は東方Projectの中で初めて触れた作品なので、非常に感慨深いです。",
      },
      {
        artist: "tanso a.k.a. モリヤマサト(第8回目配信楽曲）",
        title: "Issen",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_06.mp3",
        comment:
          "初めまして、Sound Squareという同人音楽サークルで活動している炭素と申します。\nMasato Moriyaという名義でも活動しています。\n東方Projectを知った後、最初にプレイした作品の曲のアレンジコンテストに採用していただけたのでとても嬉しいです。\nプレイした当時は初心者だったこともあり、道中の妖夢の弾幕に四苦八苦した覚えがあります。\n今回採用していただいた曲はグリッチホップというジャンルで、BPMが遅めの110ほどでリズムトラックがハード寄りなジャンルです。\n真面目ながらちょっとアグレッシブすぎる気もする妖夢を表したいなあと思いながら制作しました。",
      },
      {
        artist: "Tomoya feat. 黒崎朔夜(第8回目配信楽曲）",
        title: "Phantom dinning tonight!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_07.mp3",
        comment:
          "はじめまして、東方アレンジサークルの556ミリメートルというのをやっていますTomoyaと申します。\nこの度は採用ありがとうございます！\n今回は黒崎朔夜さんとタッグを組んで、イケイケユーロビートを作りました。\n黒崎朔夜さんのパワフルなボーカルと、鳴り響くユーロリードをお楽しみください！",
      },
      {
        artist: "C-CLAYS feat.小峠舞(第8回目配信楽曲）",
        title: "Spice Road",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/8_08.mp3",
        comment:
          "皆様こんにちは！C-CLAYS の アレンジャー あとぐる です。\n今回は御採用頂けてとても光栄に存じます。\n少し変わったダンスロックアレンジですが、楽しんで頂ければ幸いです。\nよろしくお願い致します！！",
      },
      {
        artist: "nmk vs b-UMB feat.青砥 雫 a.k.a. ℃iel(第7回目配信楽曲）",
        title: "Shirogane",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_01.mp3",
        comment:
          "初めまして、b-UMB(ビーアンブ)と申します。\nホームグラウンドとも言える東方アレンジにてnmkさんと合作で採用され嬉しい限りです。\nエレクトロなサウンドと低音をお楽しみください。\n(b-UMB)\nnmkです。初めて東方を買って来て、プレイしたのがこの東方妖々夢でした。\n当時はまだwin版東方は紅魔郷と妖々夢しか出ていなかった時なので、実に10年以上昔ですね。\nその時の感動は今でも忘れません。\n彼女と出会うのはまたもう少し後の話…\n(nmk)",
      },
      {
        artist: "源屋 with Kuroa*(第7回目配信楽曲）",
        title: "You Know-SDVX EDIT-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_02.mp3",
        comment:
          "源屋です、どうもこんにちは。\n久しぶりのSOUND VOLTEX FLOOR採用で嬉しいです！\nこの楽曲は２年くらい前に作ったものなのですが、\nその当時早いユーロビートみたいなハードコアが局地的に(主に自分の中で)ブームになってて、\nよっしゃ作ったろみたいなノリで完成させました。\n個人的にかなりのお気に入りなので、ぜひともプレイしてUCしてPUCしてください！",
      },
      {
        artist: "黄泉路テヂーモ×dawn-system(第7回目配信楽曲）",
        title: "そして紫の幻想曲は全てを受け入れる",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_03.mp3",
        comment:
          "皆さん初めまして、黄泉路テヂーモと申します。\n前から東方アレンジを作りたいと思っており、\n丁度タイミング良く公募があったのでyoa先輩と一緒にアレンジさせて頂きました。\n曲を「ネクロファンタジア」に決めた時から頭の中にイメージがあったので、とても楽しく作ることができました。\n念願の東方アレンジもとい、人生初めての東方アレンジなのでどうぞよろしくお願いいたします。\n(黄泉路テヂーモ)\nおはようございます。気付けば早くも３度目の採用となりますyoaと申します。光栄です。\n今回は、学生時代の後輩てーちゃんこと黄泉路テヂーモ君と一緒に、\n八雲紫のテーマである「ネクロファンタジア」をアレンジさせて頂きました。\nお気付きかもしれませんが、曲中に『東方妖々夢　～ Perfect Cherry Blossom.』より、\nエンディング以外ほぼ全曲のフレーズを隠しています。\nさらに、色々な音やリズムパターンを詰め込んで、カオティックな幻想郷を表現してみました。\nどうぞ心ゆくまでお楽しみください。よろしくお願い致します。\n“幻想郷は全てを受け入れるのよ。それはそれは残酷な話ですわ。”\n(yoa(dawn-system))",
      },
      {
        artist: "unatra(第7回目配信楽曲）",
        title: "Fabula Nova",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_04.mp3",
        comment:
          "4度目まして！　unatraと申します。\n原曲は2面道中曲の『遠野幻想物語』です。\nめまぐるしい曲調の変化に動揺していただけると幸いです。\nよろしくお願いします！",
      },
      {
        artist: "上村香月(第7回目配信楽曲）",
        title: "MAGATORO",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/7_05.mp3",
        comment:
          "こんにちは、はじめまして上村香月です。\n普段はボカロPとして活動したりバンド活動したりと\n日々精進中です。\nさて今回の楽曲ですが採用7曲目にしてやっと初のインストになります！\n大好きな東方ですが今までのコンテストでは応募する時間がなかったので今回はめちゃくちゃ気合を入れて応募させていただきました！\nわかる方にはタイトルで誰の曲かわかるはず！\n是非プレイしてみてください＾＾",
      },
      {
        artist: "Shiron(第6回目配信楽曲）",
        title: "Deadly Dolly Dance",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_01.mp3",
        comment:
          "ご採用ありがとうございます！Shironです！\n今回の楽曲は自分の得意とする(？)ジャンル「ハンズアップ(Hands Up / Dancecore)」を、\nどこまで音ゲナイズドできるか、という題目で製作にあたりました(このジャンルでご採用頂いたのは輝針城のWave of Craze以来ですね)。\n操り人形の魅せる幻惑のような、聴いた人がビックリして卒倒するようなギミックをそれなりに沢山入れてみました！\nBPMを一般的なものよりも速め(140台→160)、さらにリズムを高速シャッフルに複雑化させることで、えらいパーリーピーポーなグルーヴを演出しました。\n人形使いの繰り出すやたらとパーリーピーポーな攻撃に耐え切れるか！？といったような感じの曲です。\n頑張って＆楽しんでプレーしてくださいね！(o^^)o))\n(スペシャルサンクス：提供さん、モリモリあつしさん)\n天ぷら",
      },
      {
        artist: "Cororo(第6回目配信楽曲）",
        title: "ancient garden",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_02.mp3",
        comment:
          "Cororoです。音ゲーも東方も私にとって大きなきっかけとなった\nゲームでしたので、このような形で参加することができ大変光栄です…！\n原曲の天空の花の都、この穏やかで美しい曲を恐れ多くも私なりの音ゲー曲に\nアレンジいたしました。一人でも多くの方に楽しんで頂けたら幸いです.*",
      },
      {
        artist: "Jan★Key(第6回目配信楽曲）",
        title: "花ノ下連歌",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/6_03.mp3",
        comment:
          "どうも、ぴこルテックスです。\n作詞とヴァイオリン演奏を担当いたしました。採用して頂けてとってもとっても感謝！です！\n「花ノ下連歌」は「はなのもとれんが」と読みます。\nちょっとオシャレな古文調の歌詞で、幽々子さんが花見酒を楽しんでいる、というような世界観を表現してみました。\n皆様に楽しんでいただければ幸いです。出すぞ！PUC！！\n(PICOLTEX)\n歌唱を担当致しました、 りり と申します。この度は御採用頂き、誠にありがとうございます。\n徹夜で麻雀をしているようなノリで、楽しく歌わせて頂きました。聴いて頂けたら光栄です。\nJan★Keyというグループ名ですが、もちろん麻雀のジャンが由来でございます。\n好きな役満は緑一色です。宜しくお願い致します。\n(りり)\n編曲全般を担当いたしましたTAKU1175と申します。\nプリズムリバー楽団が演奏しているような想定で、\nビッグバンド調のアレンジにぴこさんの生バイオリンをプラスしました。\n原曲のモチーフをどのように活かそうか考えるのがとても楽しかったです。\nまるで麻婆豆腐ですね。宜しくお願い致します。\n(TAKU1175)\nお初にお目にかかります、歌詞/編曲原案のれぇ と申します。\nこの度は御採用頂き、誠にありがとうございます。\n募集楽曲を一目見たときに、かねてから思い入れのあった\n『幽雅に咲かせ、墨染の桜　～ Border of Life』でリミックスを出したい！と思い立ち、\n音ゲー仲間を集めてわいのわいのと制作しました。\n楽曲の方も、幽々子様と仲間達がわいのわいの楽しむ曲に仕上がりましたので、\n全国ボルテプレイヤーの皆さんも色んな方と一緒に楽しんでみてくださいね！\n(れぇ)\n副編曲、主にドラム監修を担当致しました、しろいしゅそです。\nこの度のコンテストで採用を頂き、\n一音ゲーマーとして最高に嬉しく思っております。\nスィングな楽曲なので、足でリズムを刻みながらプレイすると楽しいかも？\nさあ、華やかで愉快な宴の始まりです！\n（しろいしゅそ）",
      },
      {
        artist: "かめりあ(第5回目配信楽曲）",
        title: "Ultimate Ascension",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_01.mp3",
        comment:
          "おこんばんは！かめりあです。ご採用ありがとうございます。\n今回は東方妖々夢BGM「アルティメット・トゥルース」のアレンジですが、\n東方アレンジで採用されるのは「Lunatic Rough Party!!」「werewolf howls.」、そしてこの曲と3曲目で誠に嬉しいです！\n数年ほど東方アレンジをやっているのですが、最初にこの曲名を見た時から、\n「なんか『究極の真実』ってサイケっぽいな！」と思っておりました。\nそこでこの「Ultimate Ascension」というアレンジはボルテ仕様のBPM200高速Psyche Coreで、\nGabbaやDrumstep、Drum'n'Bassの要素をガツガツ入れ込んだアレンジになっております。\nBPM200のサイケといえば…という話ですが、REQUIEM PSYリスペクトで！\nそれからこのアレンジでは、\"ゲームという制約内でどこまで音を減らせるか\"という点で、\n1回目のドロップでは（空間系のFXを除いて）ほぼキックとベース、シンセ1つのみまで減らすという挑戦をしてみました。\nどんな譜面が充てられるかとても楽しみです。\n一緒にアセンションしようぜ…！\nではでは！",
      },
      {
        artist: "VALLEYSTONE vs udouddo(第5回目配信楽曲）",
        title: "NECRO PARTY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_02.mp3",
        comment:
          "こんにちは、VALLEYSTONEです。\n今回は激しいバトルという名のパーティ！というテーマが自分の中にありまして、\nなるべくそのような色が出せるように工夫しました。\nudouddo君と共に制作したのですが、とても楽しく、\n気がつけばあっという間に楽曲が完成していました！\n楽しんで頂ければ幸いです！\n(VALLEYSTONE)\nお久しぶりですudouddoです。\n今回はＶＳ合作で参加させて頂きました。\n光栄な事に声をかけてくれたVALLEYSTONE君には本当に感謝しています。\nめちゃくちゃカッコイイ曲に仕上がってますので是非プレイして下さい！\nこれからも皆さんに楽曲を届けられる様に頑張りますので応援よろしくお願いします。\n(udouddo)",
      },
      {
        artist: "とろまる(第5回目配信楽曲）",
        title: "Smooth Wind",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_03.mp3",
        comment:
          "とろまると申します。\n東方妖々夢はシリーズの中で初めてプレイした思い出深い作品なので採用いただけて嬉しい限りです。\n原曲の遠野幻想物語は中盤の転調が印象的なのでそこを強調するよう意識して作りました。\n爽やかでお洒落なジャズの感じとマヨヒガの怪しい雰囲気の中間を目指しつつ、グリッサンド多用のオルガンで猫っぽさを表現したアレンジです。\n是非楽しんでプレイしていただければと思います。",
      },
      {
        artist: "マッカチン企画(第5回目配信楽曲）",
        title: "鳥と桜と嘴と",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_04.mp3",
        comment:
          "この度は採用ありがとうございます！\n今回はボルテになさそうな東方アレンジを作りたいと思い、\nいつもゆるふわと言われる僕たちですが、たまにはこんなパキッとしたものを作ってみました。\n仲良く楽しくやってます。\nパワーポップ×エレクトロ×ツインボーカルのマッカチン企画をどうぞよろしくお願いします！\n(シンゴ)\n音楽というフィールドにおいてこのような形で取り上げていただくことはこの上ない喜びです。\nそして日頃の制作に対するご褒美だと感謝し、これからも邁進していきたいと思います。\n(ケニー)\n選ばれてとっても嬉しいです☆\n小鳥が猛スピードで飛んでいくイメージでプレイしてください◎\n(パイン)",
      },
      {
        artist: "はがね(第5回目配信楽曲）",
        title: "ハイスピヰド・ランパンシヰ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/5_05.mp3",
        comment:
          "はじめまして。はがねです。\n音楽ゲームに触れながら育った者として、自分の曲が音楽ゲームに収録される日が来るとは夢にも思っていませんでした。\n今はその嬉しさで一杯です。有難うございます。\nさて、「ハイスピヰド・ランパンシヰ」は、原曲「妖々跋扈」の持つスピード感を更に押し出し、\nまたちょっと懐かしいゲーム音楽を思い起こすようなアレンジを意識して作りました。\nそんな雰囲気を感じながらノリノリでプレイして頂ければ幸いです。",
      },
      {
        artist: "ばんし(第4回目配信楽曲）",
        title: "-約束-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_01.mp3",
        comment:
          "初めまして、ばんしと申します！\n普段は個人サークルや「NiZi-RiNGO」というサークルで楽曲を作っています。\nこの度は採用して頂きありがとうございます。\n原曲の持つ切なさを自分なりにイメージしながらドラムンベース調のアレンジを作りました。\nぜひプレイしていただけると嬉しいです！",
      },
      {
        artist: "Tracy feat.築山さえ(第4回目配信楽曲）",
        title: "Question.",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_02.mp3",
        comment:
          "皆さんご無沙汰しております！\n紅魔郷、輝針城コンテストに引き続き3曲目の採用となりました。\nIIIではAmateras Recordsの「SkyDrive!」も収録されていますが、公募の方ではIII初の採用という事で非常に嬉しいです！\n今回は妖々夢の中でも大好きな「遠野幻想物語」のアレンジになります。\nボーカルは「Flying!」や「SkyDrive!」でもお馴染み築山さえ閣下です！\n今回はボーカルだけでなく作詞も担当して頂いています！\n是非皆さんも楽しんでプレイして頂けたら嬉しいです！\n(Tracy)\nこんにちは、築山さえです。\nこの度は採用していただきありがとうございます！\n今回の曲は原曲が遠野幻想物語なので、少し寂しげな遠野の大地に佇みながら歌っている、というイメージで作詞と歌唱をさせていただきました。\nどうかこの曲がたくさんの方々にプレイされて愛される曲になりますように、と心から願っております。\n(築山さえ)",
      },
      {
        artist: "激戦の人(第4回目配信楽曲）",
        title: "人形裁判 -THIRD IMPACT-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/4_03.mp3",
        comment:
          "皆さま初めまして、激戦の人と申します。\nこの度はSDVX採用、本当にありがとうございました！\n自分の楽曲をゲームでプレイできるとは…本当に夢のようですね。\n…(=ω=\n！(=ω=\n＼(=ω=",
      },
      {
        artist: "wellow(第3回目配信楽曲）",
        title: "Russet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_01.mp3",
        comment:
          "初めまして、wellowと申します。\nこの度は「東方妖々夢リミックス楽曲コンテスト」での楽曲の採用、ありがとうございます。\nSOUND VOLTEXの存在がきっかけで音楽を作り始め、また小さい頃からKONAMI様の音楽ゲームに慣れ親しませていただいていた身として、自身の楽曲が筐体で遊べるようになるというのは言葉では言い表せないほど嬉しく感じております。\n原曲の雰囲気を残しつつもアガれて激しい音ゲーハードコアを心がけて製作しました。\n読みは「ラシット」です。一単語のタイトルってかっこいいけどハードルが高い気がします。",
      },
      {
        artist: "HOUJIROU(第3回目配信楽曲）",
        title: "S1CK_F41RY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_02.mp3",
        comment:
          '初めまして、HOUJIROUと申します。この度は採用していただき、ありがとうございます！\n東方妖々夢より、無何有の郷　～ Deep Mountain をリミックスさせて頂きました。\n東方シリーズの楽曲の中のでも上位を争うほどお気に入りの楽曲である、無何有の郷をHEAVYなベースと"妖精が飛び回る無邪気さ"を表現したピコピコ音を加え、DrumStep風の曲調に仕上げてみました。\n是非とも楽しんでプレイして頂ければ幸いです！',
      },
      {
        artist: "ゆんゆん(第3回目配信楽曲）",
        title: "Phantom Ensemble (ゆんゆん Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/07/result/sound/3_03.mp3",
        comment:
          "皆さん初めまして。\nRTTF Recordsを中心に活動しているゆんゆんと申します。\nこんな感じの曲を書くことが多いです。\n対象楽曲の中で、自分に最も馴染みの深かった楽曲で直球勝負を仕掛けて、ついに合格することが出来たので、大変感慨深く嬉しい気持ちです。\nこの度は楽曲を採用いただきありがとうございました。\nまた、本楽曲の制作にあたってミックスダウンをしていただいたRTTF Records主催のHyuji氏に、この場を借りてお礼を申し上げます。",
      },
      {
        artist: "Arch vs n3pu(第2回目配信楽曲）",
        title: "Ultimate Fury",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_01.mp3",
        comment:
          "こんにちは、Archです。あーちと読みます。\nn3puと合作してエモーショナルな感じに仕上げました。\n遊んでもらえると喜びます。よろしくお願いします。 (Arch)\n初めまして、n3puと言います。採用ありがとうございます。\nこの曲「Ultimate Fury」は、原曲の綺麗さを残しつつ、とにかく音ゲーらしくカッコイイ曲を目指しました。\nArchと自分、2人の個性がいい感じに出た曲になったと思います。ぜひ遊んでみてください! (n3pu)",
      },
      {
        artist: "Ayatsugu_Otowa(第2回目配信楽曲）",
        title: "常夏！！クリスタライズ・シャーベット",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_02.mp3",
        comment:
          "何だかんだのFloorも10曲目！\n今回はボルテを通じて知り合った親友にしてライバルのモツさんと共に、最高に夏いトラックを仕上げました。\n夏をめっちゃ毛嫌いしていたものの、霊夢たちに連れられて初サマーを体験した結果、夏のカキ氷やアイスを知ってしまいハマって満喫しまくっているレティをイメージしています。\n恐らく発表から長い時期が経っているかと思われますが、そんな事はなんのその！いつ出ても最高に夏なサウンド、最高に夏なジャケットを楽しんで貰えれば幸いです。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：モツ\n妖々夢といえば、夏。\nそうであろう？\nこの度は採用頂きありがとうございます！\n自身初のジャケット採用にそしてその初の楽曲を飾れたのがAyatsugu_Otowaさんで本当に嬉しいです。\nいつもお互いにボルテのスコアを競ったりクリア状況を報告し合う良きライバルでもあるAyatsugu_Otowaさんですが一度二人で一緒に何か創ってみたい、という事からこの楽曲の制作が決まりました。\n果たしてどんな東方アレンジが届くのか。そう期待に胸を膨らませ自分の元へ届いたのは良い意味で期待を裏切る常夏溢れるサウンドでした。\n「レティが太陽の中に入っていくんだなあ、夏を探訪してるんだなあ」、と感じられ、クリスタルライズシルバーを彩る妖々夢にふさわしい曲。\nと、そんな情景が頭に浮かんだ瞬間、気が付けばジャケットのイメージがさっと湧いてきてあっという間に完成してしまいました。\nそれほどまでにこの楽曲が素晴らしい世界観を出していたんだなと思います。\n楽曲とイラスト、創作の違いはありますがお互いに作品を創れたのは一生の宝物であり思い出です。\nボルテスタッフの皆さん、そしてAyatsugu_Otowaさん、本当にありがとうございました！！",
      },
      {
        artist: "kuroburger(第2回目配信楽曲）",
        title: "spectroscape",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_03.mp3",
        comment:
          "こんにちは！『アルストロメリア KURO-HACO Remix』ぶりの採用となりました、kuroburgerです。\n今回は、『ブクレシュティの人形師』をクールにアレンジしました。\nSDVXプレイヤーとしての視点を活かし、「ここはロングで、ここはチップで…ここは直角ツマミかな？」というふうに、SDVXでプレイされるシーンを強く想像しながら作りました。\nどんな譜面になっているのか楽しみで仕方ありません…！めざせPUC！\nタイトルの『spectroscape（スペクトロスケープ）』ですが、「七色の風景」といった意味の造語です。\nアリス・マーガトロイドの二つ名「七色の人形使い」から着想を得ました。\nたくさんプレイしてくださると嬉しいです！よろしくお願いします！",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "JEHANNEDARC",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_04.mp3",
        comment:
          "東方アレンジのFLOORコンテストは、まだ採用されたことがなかったので今回こそはと思い、ちょうど案件も落ち着いていたので気合を入れて頑張るか！！って思っていたのに、1週間ぐらいがんばってもなかなかいいアイデアが浮かばない・・・。俺はどうすればいいんだ・・・っていうか東方アレンジって何・・・・っていうか俺って一体・・・・そうやって自分との戦いを繰り返しつつ出来上がった血と汗とナミダの結晶がこの「JEHANNEDARC(ジャンヌダルク)」という曲です。\n要は難産でした。採用ありがとうございます。\n200BPMの人形裁判、何卒よろしくお願い致します。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：彬音+Yamada aSuhA\nこの度は採用ありがとうございます、彬音です。\nアリスの曲を書くから、アリスの絵を描け！といった勢いで描かせていただきましたっ\nBlackY君の素敵な曲からイメージを膨らませ、何より好きなキャラなので描いてて楽しかったです*(彬音)\nこんにちは、この度はBlackY氏からお話をいただき、ロゴを作成させていただきました。\n彬音氏の儚くも力強さのあるイラストを活かせるよう努めました。\nこの場に参加できたこと嬉しく思います。有難うございました。(Yamada aSuhA)",
      },
      {
        artist: "C-CLAYS feat.小峠舞(第2回目配信楽曲）",
        title: "ツインソウル～輪廻する旋律～",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/2_05.mp3",
        comment:
          "皆様こんにちは！C-CLAYS の アレンジャー あとぐる です。\n今回は御採用頂けてとても光栄に存じます。\nメロディアスなアニメロックアレンジですが、楽しんで頂ければ幸いです。\nよろしくお願い致します！！",
      },
      {
        artist: "すのうまん(第1回目配信楽曲）",
        title: "Angels And Demons",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_01.mp3",
        comment:
          "こんにちは！すのうまんです！おはようございます！\nメロディックスピードメタルな雄叫びをしたくなるような曲調って素敵だなあ(´^ω^｀) と思ひ、是非そういうアレンジにさせて頂こう！と思ひ\nマイナー調のメロディを、明るく爽やかに伸びやかに駆け抜けるイメージにぐいっと致しました。(｀･ω･´)\nどんどん駆け抜けて行って青空に向かって飛び立ちましょう！！\nさあ！！\nCOME ON JOIN US!!\nツーバスドコドコとギターピロピロの愛をどうぞ受け取って下さい。",
      },
      {
        artist: "溝口ゆうま feat. 大瀬良あい(第1回目配信楽曲）",
        title: "Utopia",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_02.mp3",
        comment:
          "皆様初めましてM.H.S（溝口ホール工房）溝口ゆうまと申します。この度はご採用頂きまして誠に有難うございます！\n東方妖々夢でも大好きなネクロファンタジアを自分好みにアレンジさせて頂き、大瀬良あいさんに歌をお願いしました！\n曲名は「Utopia」というのですが、僕の理想郷は家の中とゲームセンターです",
      },
      {
        artist: "さわわ(第1回目配信楽曲）",
        title: "Mayohiga Spurt",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_03.mp3",
        comment:
          "疾走の人改め『さわわ』と申します!\n『遠野幻想物語』は東方妖々夢の中で一番大好きな曲だったので採用頂けてめっちゃ嬉しかったです！\n曲の読み方は『マヨヒガ スパート』で『マヨスパ』です(笑)\n今回も疾走全開なので楽しんでプレイして頂けたらと幸いです！\nチェンの可愛さと中毒感溢れる旋律にヤられてください(*＾艸＾)ｳｼｼ\nそれでは、今後とも何卒『さわわ』を宜しくお願いします!\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：野愛におし\nどうも、野愛におし（のあいにおし）と申します。\nいつもさわわ君の作ってるアレンジＣＤのジャケットや、動画投稿用の画像作ってる、ゆるくてきもい人です！\n今回楽曲とジャケットの同時採用いただけて、本当にうれしいです！\nこれはもう、祝杯ものですね！あとでさわわ君にお酒をおごってもらわなくちゃ！（笑）",
      },
      {
        artist: "七条レタスグループ starring nachi(第1回目配信楽曲）",
        title: "交渉人・西行寺幽々子 vs スカーレット警察",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/remix/07/1_04.mp3",
        comment:
          "七条レタスグループの代表を務めております、七条レタスと申します。\nこの度は紅魔郷リミコンに続く採用の栄誉を賜り、大変光栄に存じます。\n（針はちょうどPCからMacに変えた時でプレイできてなかったので出してない）\n弊グループでは「#今年は東方が来る」のスローガンのもと、東方プロジェクトの個性的なキャラクターと世界設定を題材に電波ソングを製作しております。\n今回採用頂いた「スカーレット警察」シリーズも多分にもれず歌詞中のセリフが順調に増え、気づいた時には電波ソングというかコントになっているパターンですが、プレイヤーの皆様におかれましてはゲームセンターの喧騒の中でも存分に脚本をお楽しみ頂けるよう、本楽曲のプレイ時はヘッドホンのご用意をお勧めいたします。\n以上、引き続き何卒よろしくお願いいたします。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：216\n初めまして、216と申します。\nポップンミュージック２の頃から音ゲーをやっていたり、東方で絵を描いている時にも時折音ゲーのパロディとかやる事はあるのですが、まさかこういう形で公式に参戦を果たす事が出来る日が来るなんて夢にも思っていなかったです…\n中々無い晴れ舞台という訳で絵も全力で描かせて頂きました\n曲を引き立てられてるといいな…\nこの度は機会を与えて下さった七条レタスさん、SDVXスタッフの皆さん、本当にありがとうございましたッ！\n交渉人・西行寺幽々子vsスカーレット警察、どうぞ宜しくお願いします！",
      },
    ],
  },
  {
    id: "original17",
    name: "みんなでここなつをプロデュース！ オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_17.jpg",
    sounds: [
      {
        artist: "シンゴ（マッカチン企画）＆アラ(第2回目配信楽曲）",
        title: "モラトリアムノオト",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_01.mp3",
        comment:
          "楽曲、アレンジ等担当しましたマッカチン企画シンゴです！\nお題にロックがあったので、ここぞとばかりにギターロックを作ってみました！\nこの曲でここなつの二人に少しでもバンドサウンドを好きになってもらえたらなぁ…と思ってます(笑)\nよろしくお願いします！\nはじめまして！今回めでたく採用を頂きました、アラと申します！\nシンセやバイオリン、編曲をメインでやらせてもらいました！楽しかったです！ではでは！\nこの度は採用頂きましてありがとうございました、作詞担当の桜井みおと申します、ちょっぴり背伸びをして、大人になりきれない少女の話を、どうぞ宜しくお願い致します。",
      },
      {
        artist: "上村香月(第2回目配信楽曲）",
        title: "キズナ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_02.mp3",
        comment:
          "どうも上村です。\n今回の採用ありがとうございます！\n僕も大好きなひなビタ♪関連にこうして自分の楽曲で関われる事を大変光栄に思っております！\n今回の曲は心菜のソロという事で心菜の夏陽に対する思いを自分なりにイメージして作ってみました。\n疾走感あるポップナンバーとなっています。\n是非是非プレイしてみてください！",
      },
      {
        artist: "A than_Lily(第2回目配信楽曲）",
        title: "「ここなつ☆」は夢のカタチ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_03.mp3",
        comment:
          "電波ソングLoverの私としては、公募のお題になったことももちろん嬉しかったのですが、ここなつの２人に歌ってもらえるかも知れないなんて！\nコンテストが発表されてからはわくわくが止まりませんでした。\nどうすればここなつらしい電波ソングになるのか……、\nアイドルとしての彼女たちの新しい一面が見たい……色々考えに考えて、こんなカタチになりました。\nあ！申し遅れましたが、A than_Lilyです！エイザンリリーと読みます！鉄道とは関係ありません！",
      },
      {
        artist: "ぬゆり(第2回目配信楽曲）",
        title: "アナーキーインザ夕景",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_04.mp3",
        comment:
          "こんにちはぬゆりと申します！採用ありがとうございます本当に嬉しい限りですありがとうございます！\n今回の曲は今までとは毛色が違ってへんてこりんロックです。かわいい！\n多分本当にいみわからん曲になってしまったので「いみわかんね～…」と思いながら聞いて頂ければ幸いでございます。\nどうぞよろしくお願いいたしますー！",
      },
      {
        artist: "lapix(第2回目配信楽曲）",
        title: "Finally Dive",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/2_05.mp3",
        comment:
          "今回採用を頂きました「Finally Dive」という楽曲ですが、ズバリ魔法少女をイメージしながら制作しました！\nとても可愛い「ここなつ」のお二人ですが、可愛さだけではなくどこか力強さもグッと伝わってくるような、そんなアレンジを心掛けてみました。\n駆け巡るような世界観も含めて、是非一度プレイしてみてください！\n楽しんで頂ければ幸いです！",
      },
      {
        artist: "U-ske(第1回目配信楽曲）",
        title: "コンフェイト＊コンチェルト",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_01.mp3",
        comment:
          "U-skeと申します。この度はここなつちゃんの楽曲コンテスト採用ありがとうございます！\n現実はさておき、好きな人が好きになってくれる夢を見るだけでなんとなく無敵だったりして、恋をする女の子はみんな甘くってキラキラ。まるでコンペイトウのようです。\nゲームの中でも、優しい甘さをぜひ余すことなく味わってください！",
      },
      {
        artist: "はるなば(第1回目配信楽曲）",
        title: "ムラサキグルマ",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_02.mp3",
        comment:
          "皆様、はるなばです。この度は「みんなでここなつをプロデュース！ オリジナル楽曲コンテスト」の受賞を賜り厚く御礼申し上げます。\nここで少しばかり、ここなつとの出会いのエピソードを語らせていただきます。\nあれは2014年5月2日良く晴れた日のことでした、ひなビタ♪の新キャラと噂されていた双子の一人東雲夏陽ちゃんがついにその姿を現し…\n…だったり、本当に気が付けばここなつの魅力にどっぷり浸かっていました。\n彼女達のプロ意識、エンターテイナーとしての姿勢、本当に尊敬していますし、大ファンです。\nだからこそ彼女たちの活動にほんの少しでも協力する事ができて、恐れ多くも本当に感謝しております。\nこの楽曲はそんな2人の美しさを自分なりに表現いたしました。\nそして皆様がゲームでも楽しく遊んで頂ける事を心から願っております。\nひなビタ♪",
      },
      {
        artist: "uma(第1回目配信楽曲）",
        title: "千客万来☆無問題！",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_03.mp3",
        comment:
          "初めまして、楽曲担当のumaです。\nここなつコンテストと開催と聞いて是非出してみたいと思っていた所、いつきり君さんから素敵なロンロンワールドが…！\nこのお話を歌詞にしたら面白いかなと盛り上がり、先にオケを作ってお渡しした所、素敵な歌詞を付けて頂きました。本当に有難うございます。\n歌詞についてのお話はいつきり君さんにお任せして私からは楽曲について簡潔にお話したいと思います。\nここなつと言えばエレクトロサウンド、所謂EDMと呼ばれるものが今までのメインでしたが私に出来るEDMはなんだろうと考えた所、Euro Dance Musicに変貌してしまいました。というわけでユーロービート調なアレンジとなっております。\n是非とも聞いてみてくださいね、ロンロン♪\n歌詞担当をさせていただきました、いつきり君と申します。\nロンロンで働くここなつの二人についてumaさんに語っていたところ、なんとumaえもんのポケットからとてもノリノリなメロディが……(結構本当のお話)！\nそんなこんなでキャッチーなメロディに合わせて、遊びを入れた歌詞が付き、ドンドン出来上がっていく音楽にひたすら感動しておりました。\n日向美ビタースイーツ♪のメンバーに出会い、前向きな未来へと踏み出したここなつの二人の歌を感じていただければと思います。口には出さなくとも、何事にも一所懸命で、時には頑張り過ぎてくたびれちゃうこともあるのかな？それでも、ここなつのふたりが一緒なら、この先もゼーッタイに、無問題！なのです♪",
      },
      {
        artist: "あおいひと with イオ(第1回目配信楽曲）",
        title: "闇夜舞踏会 -緋碧と蝶のためのmasquerade-",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/17/1_04.mp3",
        comment:
          "はじめまして、作曲担当のあおいひとと申します。\nこの度は採用頂き、ありがとうございます！\nさて、「ゴシック」というと皆様はどのような要素を思い浮かべますでしょうか？\n私が思い浮かべたのは、闇、月、薔薇、人形、古城、蝶…\n中二病な匂いがぷんぷんしますね。だがそれがいい！！\nそういった要素を踏まえつつ、ここなつの二人の魅力を引き出せるような「ゴシック」な曲とは…\nその問いに対し、作詞担当のイオと導き出した回答がこの曲です。\n廃墟と化したお城に残された、緋色の瞳と紺碧の瞳をした双子のドール。\n月明かりの元、主の居なくなった舞台で彼女たちは今夜も踊り続ける――\nそんなイメージを曲を通して感じてもらえたら嬉しいです。\nちなみにタイトルの「緋碧」は「ひへき」と読みます。念のため。\nというわけで、是非プレイしてみてくださいね！！\n(あおいひと)\nこんなに素敵な作品に携わらせて頂けたことが、たいへん光栄です。\n是非、ゲーセンでプレイして下さい。\n(イオ)",
      },
    ],
  },
  {
    id: "original19",
    name: "The 5th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_19.jpg",
    sounds: [
      {
        artist: "Riz(第8回目配信楽曲）",
        title: "REGALIA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_01.mp3",
        comment: "天使の血の契約に従いし王権《ﾚｶﾞﾘｱ》\n其の幕引き《ｶﾀｽﾄﾛﾌｨ》を少女は詠う―\nRiz",
      },
      {
        artist: "Verdammt(第8回目配信楽曲）",
        title: "ゆうしゃのふゆやすみ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_02.mp3",
        comment:
          "ふぎゃああ大変お世話になっております。Verdammtです。\n冬休みといえば色々なイベントがありますよね。クリスマス、大晦日、お正月、お年玉…。\nそんな中、ゲーム好きの男の子はどのように過ごしていくのか。そんな物語となっています。\nまた、この曲を作るにあたっては「前作に似ていても決定的な違いのある曲に感じさせること」\n「プレイヤーに何かしらの衝撃を与えること」など、いくつかの目標を掲げていました。\nそれらが狙い通りになっていれば、大変嬉しく思います。\nどうぞ宜しくお願いししししししししししししししししししししししししししししししししシシシシシシシシシシシシシシシシssssssssssssssss",
      },
      {
        artist: "KLing(Aoi+Yunosuke)(第8回目配信楽曲）",
        title: "Quaint Echo",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_03.mp3",
        comment:
          "僕が通っていた学校の近くに、一軒のゲームセンターがありました。\nそれはとても小さな、パチンコ台と麻雀台しか置いていないようなタバコ臭いゲームセンター。\nタバコの臭いを嗅ぐと頭が痛くなる僕はそのゲームセンターを避けていました。\nある日、そのゲームセンターに見慣れないゲーム筐体が設置されていました。\n青く光る姿。疾走感200%の文字。\nこれが僕とSOUND VOLTEX、そしてBEMANIとの出会いです。\n僕の人生は180度変わりました。ここまで放課後を楽しみにしたことは今までなかった。友達とスコアを競い合いました。友達にSDVXを紹介して「面白い！」と言ってくれた時、喜びを感じました。新たな交友関係も生まれました。みんなで大宇宙ステージの鍵盤をどういった運指で叩くか、また出来もしないのにMax Burning!!に挑み、ボロボロにされて大爆笑したりしていました。\n僕の学校生活は、SDVXに彩られていきました。\n「もし、もしもこの筐体から自分が作曲した楽曲が流れていたら、どんなに嬉しく、楽しいことだろう」\nそう考えるようになるまで、さほど時間はかかりませんでした。\n音楽について多少の知識はありましたが、勢いのまま作った最初の楽曲は聴くに耐えないものでした。それでも僕は、自分の作った楽曲を他の人に聴いてもらえるということにこの上ない喜びを覚えました。\n当然、それなりに続けていくと良いことばかりなわけありません。自分より後から作曲を始めた人が自分の何倍も評価されて嫉妬したこともあります。最高の自信を持って送り出した楽曲が「イマイチ」と言われ、本気で落ち込んだことなんて数え切れません。その度に激しく落ち込みました。FLOORの採用は、僕にとってあまりに遠いもののように思えました。\nそんなとき、「The 5th KAC オリジナル楽曲コンテスト」は始まりました。最初はどうせ受からないと、躊躇しました。でも、あそこまで夢に見た舞台への入り口が目の前にあった。ここで燻っていて何が「採用が目標」？ふざけるな。\n僕は音楽仲間であり尊敬するクリエイターの一人、雄之助さんに声をかけました。快く了承してくれて、嬉しかった。二人で採用を目指そう、その意思のもと「KLing」は結成されました。\nどうせ初チャレンジなら、自分がSDVX、BEMANIから受けた影響を全部エッセンスとして詰め込んでやろうと思いました。それゆえ雄之助さんには無茶なパスを送ったりしましたが、雄之助さんが見事に繋いでくれて合作は比較的スムーズに、楽しみながら進行していきました。そうして出来上がったのが『Quaint Echo』です。僕らはこの曲に、当時出せる全てを出し切りました。\nメールボックスに「仮採用」の文字が見えた時、想像では叫んだり泣いたりするのかなぁと思っていたのですが、実際は何も言葉が出てきませんでした。人間は予想外のことが起こると思考が停止すると言いますがまさにそんな感じで、あとからジワジワと嬉しさが込み上げて来ました。\n「僕の人生を彩ってくれたSDVXを、少しだけでも僕たちの手で彩ることができる」\n夢が、現実になっていました。\n長々と申し訳ありません。\nこの曲は、SDVXに収録されて初めて完成します。何よりも、自分たちが楽しむために作った曲だから。\nその曲を全国の、いや、全世界のユーザーの皆様と共に遊び、楽しめる。これ以上の喜びなんてありません。\n『Quaint Echo』、どうか宜しくお願いします。\n本当に、ありがとうございます。\n(Aoi)\n初めまして、雄之助と申します。\n尊敬する方々も多くいらっしゃるボルテの、それもKACのコンテストに採用いただけるなんて夢にも思いませんでした。本当にありがとうございます！\n正直いまだに実感が湧きません。\n今回、チャレンジしたこの『Quaint Echo』は、雄之助として作ったことのないハイテンポな楽曲で、かなり試行錯誤しながら制作しました。\n自分1人では思いつかないような展開やメロディーなどを組み込んで一曲に仕上げていくのはとても新鮮で、楽しく作り進めることが出来ました。特に前半部分のドロップや、オペラなどの壮大な雰囲気を意識して作ったパートに力を入れてます！\nほんとに自信作なので是非是非楽しんでプレイして下さい！\nAoiさん、コメントが長い。\n(雄之助)",
      },
      {
        artist: "uno & D.watt (IOSYS TRAX)(第8回目配信楽曲）",
        title: "#Endroll",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_04.mp3",
        comment:
          'お久しぶりです！イオシスのunoです！\nKACコンテストにて初採用、非常に嬉しいです！\n今回の『#Endroll』は、タイトルの通りエンドロールをイメージしています。\nKACが終わると祭りが終わって寂しい気持ちもするけども\nまた新しい時代が始まるワクワク感もある！\nそんな雰囲気が伝わると嬉しいです！\n＜＜uno(IOSYS)＞＞\nこの度KAC2015公募に採用頂きましたD.wattです。\n本作は悪名高き例のチームことIOSYSの\nクラブ系専門レーベル"IOSYS TRAX"の奴として\nunoさんとの共作で応募させて頂きましたが、\n今年はTRAXからパリピがドッカンドッカンなトラックを\nドロドロドロップしていきます、どうぞご期待下さい！\n＜＜D.watt(IOSYS)＞＞',
      },
      {
        artist: "TAKU1175 ft. 駄々子(第8回目配信楽曲）",
        title: "いつかの夢、またねの約束。",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_05.mp3",
        comment:
          "「いつかの夢、またねの約束。」は、TAKU1175さんぴこさん駄々子という\n音ゲー大好きな音ゲーマーの、音ゲーマーによる、音ゲーマーのための曲です。\nボルテとの出会い、憧れのKACへの道、そこで出会ったライバルとKACという舞台での再会を誓う…そんなストーリーを思い描きながら、大切に大切に歌いました。採用いただき光栄です。\nボルテ大好きないちプレイヤーとして、配信された暁には最速PUCを狙いにいきたいと思います！\n負けないぞぴこルテックス！\n歌詞の中にふんわりボルテチックな単語を忍ばせたので、探しながらたくさん遊んでくださいね。\n歌唱と、ちょっぴり作詞も担当しました。駄々子でした。\n(駄々子)\nPICOLTEXです。採用、まことにありがとうございます。\n曲構成・作詞でお手伝いさせていただきました。\n「大会・大舞台での決戦」をテーマにした歌モノを作りたい！と思い立ち、TAKU1175さんと駄々子さんに相談を持ちかけたのが本楽曲制作の切っ掛けでした。\nお二人には本当に感謝しています。\n毎回私たちに感動を与えてくれるKACというものに、私は特別な思い入れがあります。\n特に、KAC2013決勝の舞台でBangin' BurstとFor UltraPlayersをプレイさせていただいた時の感動は今でも覚えています。恐らく一生忘れることはないでしょう。\n本楽曲は、そんな大きな舞台への感動・感謝の込もった楽曲になったと思います。\nこの曲で、どなたかに何か感動を与えられたならそれほど嬉しいことはありません。\n(PICOLTEX)\n作編曲・作詞を担当しましたTAKU1175と申します。\nこの度はお披露目の機会をいただきありがとうございます。\n今回はエンディングテーマをイメージして制作してみました。\n言いたいことは二人が言ってくれているのでそちらをご覧下さい。\n楽しんでいただければ幸いです！\n(TAKU1175)",
      },
      {
        artist: "Trerey-U(第8回目配信楽曲）",
        title: "Zero-Day Exploit",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/8_06.mp3",
        comment:
          "未知のハッキングを受けて崩壊して行くシステム、みたいなイメージの曲です。\nそんな感じの臨場感を味わって頂けたならば幸いです。\nそれでは、なにとぞよろしくお願いいたします。",
      },
      {
        artist: "uma(第7回目配信楽曲）",
        title: "cross the future",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_03.mp3",
        comment:
          "こんにちは、umaです。The4thKACに引き続き三度目連続のKACコンテストの採用を頂き嬉しく思います。\ncross the futureは過去KACコンテスト作品のtake a step forwardやPieces of a Dreamの主題を引き継ぎつつモリモリあつしさんがPieces of a Dreamにて最後に遺して頂いた4つ打ちパートを私なりに解釈し発展させたものになっております。いつもの雰囲気にハードなサウンドやエレクトロなサウンドを追加した、いつも通りでちょっと違う…そんな風に仕上げてみました。是非聞いて、そして遊んでみて下さい。\nまた今回のThe5thKACコンテストでは有り難い事にこちらの他にもう1曲採用を頂いております。是非両方とも末永く愛して頂ければ幸いです。",
      },
      {
        artist: "にゃそ(第7回目配信楽曲）",
        title: "Emperor's Divide",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_01.mp3",
        comment:
          "はじめまして、にゃそと申します。この度のKAC楽曲コンテストにて採用を頂けたこと、大変嬉しく思います。\nいつもはロリコアというジャンルを制作しているのですが、今回の曲はブレイクコアにフレンチコアっぽい感じを合わせた曲です。\n多くのプレイヤーに楽しんでもらい、ブレイクコアに興味を持って頂けるれば嬉しく思います。\n以上！アーメンブレイク最高!!",
      },
      {
        artist: "Shiron(第7回目配信楽曲）",
        title: "GEOMETRIA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_05.mp3",
        comment:
          "ご採用頂きありがとうございます！Shironです。\n「ジオメトリア」と読み、「幾何」をモチーフにした曲です。\nこの楽曲の製作に当たった当時は同じBEMANIシリーズのGITADORAが(個人的に)アツく、特にその中でも佐々木博史さんの「The Least 100sec」や「子供の落書き帳」といったプログレッシヴな楽曲に大きな感銘を受けました。\n「スゲー！なにこれ！ヤバ！」って感じで。\n実際にゲームを通してそれらのプログレッシヴな楽曲に触れていく中で、自分もプログレッシヴに興味を持ち、何やらいろいろ調べてプログレッシヴを自己解釈した結果、この「GEOMETRIA」となりました。\n不規則なフレーズやリズム、四度堆積、部分転調、そして変拍子…自分なりに思いつく限りのプログレッシヴさを詰め込みました。\n何気にBPM256とものすごい速さになってしまいましたがKACに挑む皆さんならやってくれると信じています。\n高速変質プログレ「GEOMETRIA」、是非ともよろしくお願い致します！\nたたけ！ズン！タッ！タッ！寿司",
      },
      {
        artist: "庭師(第7回目配信楽曲）",
        title: "↓↓↓",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_02.mp3",
        comment:
          'SOUND VOLTEXでは初めまして！庭師と言います。\n５年くらい前は魍魎という名前で活動していました。\n遠慮なく速くてつよくてヤバい曲を作らせて頂きました。\nハハっ…みんなも"行こうぜ"。',
      },
      {
        artist: "BlackY(第7回目配信楽曲）",
        title: "IKAROS DYNAMITE!!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_06.mp3",
        comment:
          "毎年波乱の激アツ展開を巻き起こすSOUND VOLTEXの頂上決戦。今年も熱くならないワケがない！\n果たして今年は一体誰が頂点を掴むのか！そして今年は一体誰が許されないんだ！\n今年もそんな頂点を決める楽曲のコンテストが開催というわけでなんかもう爆発しそうなくらいめっちゃ熱くてめっちゃイカロスダイナマイトな曲を作りました！是非楽しんでくれよな！フゥーーッッ！！",
      },
      {
        artist: "ぺのれり(第7回目配信楽曲）",
        title: "Prayer",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/7_04.mp3",
        comment: "ボルテに、光あれ！",
      },
      {
        artist: "たちのん(第6回目配信楽曲）",
        title: "The End of War",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_01.mp3",
        comment:
          "勝利が輝くためには\n常に犠牲が付き纏うものだ\n―――Project Mayhem\n5th KAC楽曲コンテスト、採用ありがとうございます。たちのんです。\n大変物騒な曲名となっていますが、\nSOUND VOLTEX IIIの副題がGRAVITY “WARS”、そしてKACはたった一人の覇者を決める戦い\nということで、戦いの終焉を表現した楽曲を制作しました。\n戦いの真っ最中で全然終わる気配が無いような気がするのは気のせいだと思います。\n俺達の戦いはこれからだ！的なノリだということで、何でもしますのでどうか許してください。\n＜たちのん＞",
      },
      {
        artist: "かゆき(第6回目配信楽曲）",
        title: "Voynich:Manuscript",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_02.mp3",
        comment:
          "未解読の奇書「ヴォイニッチ手稿」をテーマに制作した、プログレデジロックな意欲作です。\n変拍子に掴み所のない奇妙なメロディーを乗せた、妄想感800%のヴォイニッチワールドをお楽しみくださいませ。\nどうぞ、よろしくお願い致します。",
      },
      {
        artist: "ginkiha(第6回目配信楽曲）",
        title: "eastward -sdvx edit-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/6_03.mp3",
        comment:
          "どうもNIZI-RINGOのginkihaです！\nアジアンでアグレッシヴなやつ作りました！\nいつもとちょっと違う感じをおたのしみください！",
      },
      {
        artist: "溝口ゆうま feat. 大瀬良あい(第5回目配信楽曲）",
        title: "UROBØROS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/5_01.mp3",
        comment:
          "曲名はウロボロスと読み、しっぽを飲み込んだ蛇で循環性、永続性、始原性、無限性、完全性などの象徴にされています。\n歌詞は神へ挑む歴史は繰り返されている様を書き、作曲の際には転調を沢山して元の調へ戻ってきたりとウロボロスというタイトルを表現しました。\n今自分が表現出来る最大限を詰め込み、曲が出来上がった後から白髪が増えたという楽曲で御座います…\n歌唱はUtopiaと同じく大瀬良あいさんにお願いさせて頂きまして、彼女もレコーディングのウロボロス（無限性）を味わったそうです。\nそんな楽曲を採用して頂き本当に有難う御座います！\n＜M.H.S（溝口ホール工房）溝口ゆうま＞\nまさにウロボロス（無限に続く）でした…　頂いたボーカルライン以上にコーラス歌ったりと、溝口さんを沢山ウロボロスさせてしまい申し訳ない気持ちもありますが、どっしりと構えたタイトル通りの曲になったと個人的に思っております。お気に入りの一曲です♪\n採用本当に本当に有難うございました！\n＜大瀬良あい＞",
      },
      {
        artist: "QURELESS(第4回目配信楽曲）",
        title: "侍Annihilate!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_01.mp3",
        comment:
          "The 5th KAC開催おめでとうございます。そして採用ありがとうございます。QURELESSといいます。\n東方輝針城リミックスコンテストでは440BPMのスピードコアで採用・収録されていましたが、今回の受賞もやはりとても嬉しいです。\nこの曲、「侍Annihilate!!」は、デジタルハードコア・スピードコアをベースにし、グラインドコアやミクスチャーラウドなどの要素も取り入れたとりわけ激しい曲になっています。\nKACという戦で「負けられない」「譲れない」「絶対に勝ってやる」という想いを侍が天下を分ける大事な戦いに臨むこととかけて作りました。\nそのプレッシャーにも打ち勝ち、己を信じ続けたものだけが取れる「Champion」の座を巡るサムライたちのアツい歌です。\n自信の今までの楽曲の中でも、歌詞と音に力を入れて作れました。\n前回採用頂いた曲よりも速くなってますし、わかりやすい歌詞も入れてるので是非みんなで叫んでください！\nそしてPUCして天下を取ってください。ぼくはクリアをがんばります。",
      },
      {
        artist: "溝口ゆうま feat. みこ♡なち♡あい(第4回目配信楽曲）",
        title: "ブチアゲドクター☆ハイテッコ三姉妹",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_02.mp3",
        comment:
          "この度はご採用頂きまして誠に有難うございます！\n大好きな音楽ジャンルのHi-Tech Full Onをテーマにした電波ソングを作らせて頂きました\nハイテック・・・ハイテック・・・ハイテッ娘！！！？と脳内に稲妻が落ちまして完成しました\nお馴染みのmikoさん nachiさん 大瀬良あいさんが歌っています！\n頭おかしい曲で申し訳ありませんが皆様のプレイをお待ちしております！！\n安心おｋ！まかせておｋ！\n(M.H.S（溝口ホール工房）溝口ゆうま)\n採用ありがとうございます！\nなんだか元気になりたいなーってときは是非この曲をセレクト♪\n明日から元気さ！\n(miko（ハイテッコ三女担当）)\n採用ありがとうございます！\n楽しい曲になりました！\nブチアゲドクターの診察ぜひ受けてみて下さい♪\n(nachi（ハイテッコ長女担当）)\n次女担当の大瀬良あいです♪ネジが緩んでる感じで歌わせて頂きました！\n面白い曲と歌詞なので、是非プレイしてみて下さいませ♪\n(大瀬良あい（ハイテッコ次女担当）)",
      },
      {
        artist: "uma&hurirai feat.ましろ(第4回目配信楽曲）",
        title: "Apex of the World",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_03.mp3",
        comment:
          'こんにちは！KACコンテストでは三度目となりますumaです。\n何かしらをモチーフとしたテーマソング的なボーカル曲を作ってみたいと思っておりまして、今回過去作"take a step forward"と同じく"KACを頑張る人"を応援するような歌詞を考案し、それに合わせたユーロビート調のインストトラックを製作してみました。\nギター全般はhuriraiさんにお任せした他、歌詞考案やちょっとした作編曲にも関わって頂いております。またボーカルは前々よりお世話になっておりますましろさんにお願い致しました。お二人ともこの度は本当にありがとうございます。\nお二人のコメントもありますので長くなる前に私はこの辺で締めさせて頂きたいなと思います、是非とも遊んで頂けると幸いです。\n(uma)\nこんにちは！採用頂き光栄です！ふりらいと申します！\n今回はツインリード！しかしただの1+1には留まりません！\nオレたちは3人で16000だ。（疾走感）800倍だぞ800倍！\n(hurirai)\nこんにちは！ましろと申します。\n今回はumaさんとhuriraiさんのApex of the Worldという曲でボーカルを担当させていただきました。\n普段はお絵描きをしているので、まさか楽曲でもボルテに参加できるとは想像もしていなかったです。\nなので、いまだに実感がわきません！\n配信日が楽しみ＆緊張でいまからドッキドキですが、精一杯がんばりましたのでぜひ遊んでみてください！\n(マシロイド)',
      },
      {
        artist: "kanone(第4回目配信楽曲）",
        title: "Endless GRAVITY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_04.mp3",
        comment:
          "採用頂きありがとうございます。kanoneです。\n今回は私の普段制作しているダンスミュージックではなく、メタル系のドコドコギュイ～ンした迫力のあるサウンドに挑戦してみました。\n無限の重力にねじ伏せられないよう、お気をつけくださいませ。",
      },
      {
        artist: "tsuzu(第4回目配信楽曲）",
        title: "relegation grimoire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/4_05.mp3",
        comment:
          "はじめまして！こんにちは！tsuzuでツヅと読みます。\nこの度は採用ありがとうございます！\n今回の曲は、悪の手に渡ってしまった魔術書を追放して平和を取り戻そう！\nみたいな世界観を意識しつつ、音楽ゲーム的要素を盛り込んだグリッチホップに仕上げてみました。\n楽しんでプレイしていただけたらな、と思います！",
      },
      {
        artist: "あるふぁ(第3回目配信楽曲）",
        title: "Follow Up",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_01.mp3",
        comment:
          "この度は採用ありがとうございます！あるふぁと申します。\nKACコンテストと言う事で「ボルテらしくてカッコいい曲」を目指してみました。\nカッコよさの合間にチップな感じを入れてみたり色々と試行錯誤しました。\nジャンル的にはハードコアになると思います！多分！\n曲名は「畳み掛ける」等といった意味があって、曲もその名の通り畳み掛け感を表現してみたのでその辺りも「あっ、今畳み掛けられてる～」と感じて頂ければ幸いです。",
      },
      {
        artist: "とろまる(第3回目配信楽曲）",
        title: "Enigma",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_02.mp3",
        comment:
          "とろまると申します。\nKACオリジナル楽曲コンテストにはこれまでも全て挑んできましたが結果は出せず、今回4度目にしてようやく採用をいただけたので大変嬉しいです。\nこの曲は謎多き敵との戦闘をイメージしており、クラシカルな技巧を主体にしたピアノとハードな音色のベースでボス曲のような仰々しさやダークな雰囲気を全体に醸しつつ、随所にそれに挑むような勇ましい展開やメロディーを挟んで、2分の中でストーリーを感じ取っていただけるよう工夫しました。\n今までに採用頂いた自分の曲とはまた違った面が詰め込まれた曲なので、沢山プレイして楽しんでいただきたいです。",
      },
      {
        artist: "eicaTV vs kanone(第3回目配信楽曲）",
        title: "MG277",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_03.mp3",
        comment:
          "eicaTVと申します、初めまして。\nこの度は採用頂きありがとうございます、とても嬉しいです。\n『eicaTV』と書いて、『エイカティーヴ』もしくは『エイカティーヴィー』と読みます。\n普段は、本楽曲に比べて1/3くらいのBPMで、エレクトロニカなどを作っています。\n本楽曲は、kanoneとの合作になります。\n私は、展開考案やリズム隊やFXなどを担当いたしました。\n普段まったく作らないジャンルの制作でしたが、うまく作れたと思ってます。\n一方、ものすごくかっこいい上モノなどを作ってくれたkanoneに感謝ですし、いろんな部分でサポートされまくり太郎で、まさにおんぶにだっこ状態でお恥ずかしい限りでした。\nこれを機に、もっと精進していきます、ごめんなさい。\n余談ですが、『とりあえず疾走感800%らしく滅茶苦茶速いBPMにしよう』と提案したのが、すべての間違いの始まりだった気もします。\n(eicaTV)\nとても速いです、ご武運お祈り申し上げます。\n(kanone)",
      },
      {
        artist: "Getty vs. DJ DiA(第3回目配信楽曲）",
        title: "Fox4-Raize-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_04.mp3",
        comment:
          "お久しぶりです、Kirara Records副代表のGettyです。\nこの度は僕らの楽曲「Fox4-Raize-」が採用頂けたことを大変光栄に思います。\n一年ぶりのKACコンテストということで「前回のOps:Code-Rapture-の続編となるような曲を作ろう！」とDJ DiAに持ちかけこの曲が完成しました。\nジャンルは前回同様Pumpcoreで、今回もベースやキック等の低音をGettyが、メロディや声ネタ等をDJ DiAが担当しています。\n前作よりも鋭く、洗練された楽曲に仕上がっていると思います。\n楽しんで頂けると幸いです。\n(Getty)\nX軸とY軸で構築された空で、貴方は自分自身へコールする。\nいつか、辿り着ける事を私は願って。\n(DJ DiA)",
      },
      {
        artist: "sky_delta(第3回目配信楽曲）",
        title: "REVOLVER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/19/result/sound/3_05.mp3",
        comment:
          'sky_deltaと申します。採用誠にありがとうございます！\nSOUND VOLTEXにオリジナル楽曲を収録していただくのは今回が初めてになります。\n"SOUND VOLTEXで遊んで楽しくなりそうな曲"にすることを念頭に置いて制作したので、普段作っている曲とはまた違うテイストになったのではないかと思います。\n相当音を詰め込んだので、細かい音にも耳を傾けつつプレーして頂けたら嬉しいです。\nぶっ放していきましょう。よろしくお願いします。',
      },
      {
        artist: "Shiron＋こふ×モリモリあつしと提供でお送りします。(第2回目配信楽曲）",
        title: "Demise Quartet",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/2_01.mp3",
        comment:
          "「ラッキークローバーと正反対になる曲作ろうぜ！」\n「ラッキークローバーと正反対になるタイトルって何だろう…？」\n「アンラッキーラフレシア…」\nみたいなやり取りをしたのは覚えています(その後無かったことになった)\nShironです！ご採用頂きありがとうございます！\n今回は、以前「Lucky*Clover」にて合作しましたこふさん、モリモリあつしさん、提供さんとの共同ユニット再び、といった感じになりました！\n前作はキュートかつゴッチャゴチャのウルトラハッピーカオスチューンでしたが、来たるKAC王者の玉座を狙うべく、趣を180度変えてダークでクラシカル、さらにはYOSHITAKA御大の代名詞(？)とも言い得るハードルネッサンスの要素を織り交ぜたまたもなんかカオスな曲となっております。\n今回は楽曲中ではコード進行、イントロ・サビのメロディ、アウトロのピアノ乱打、一部のリードシンセ等を担当しております。\n存分に暴れさせられるような構成を意識しましたので存分にブチ切れてください！\nこの場をお借りしてこふさん、モリモリあつしさん、提供さんの三方に御礼申し上げます。\nDemise Quartet、是非是非気合入れてプレーしてくださいね！\nあなたには聞こえますか、終焉の死地に響く四重奏-Quartet-が ───\n(Shiron)\nギターソロを入れたりとかしました。こふです。\n前作のLucky*Cloverとは真逆のイメージで曲を作ろうぜという話が以前から持ち上がっており、\n5thKACという絶好の機会に皆でせっせと曲作りした結果、気合のこもったボスボスしい楽曲が生まれました。\n今まで採用を頂いた楽曲よりも高難度になりそうなので、どんな譜面になるのか楽しみですね。\n一緒に曲作りに携わらせて下さったShironさん、モリモリあつしさん、提供さんには感謝してもしきれません。本当にありがとうございました。\n”Demise Quartet”、解禁されましたらどうかよろしくお願いします！♪⌒Y⌒♪⌒Y⌒♪\n(こふ)\n流星トラップボーイズ代表取締役、モリモリあつしです。この度は採用頂きありがとうございます。\n今回も「The 4th KACオリジナル楽曲コンテスト」に引き続き、Shironさん、こふさん、提供さんとの合作楽曲となります。\nテーマは「アンラッキー・クローバー」\n私の担当は主にShironさんに最初に提出して頂いた幾つかのラフを元に楽曲の構成を作成及び加筆、作曲面ではAメロ部分をメインで作曲し、Bメロのコードや一部の音色等を担当しました。\n「Lucky*Clover」では誰が何処を担当したか、という分かりやすい目安が実はあまりなく、全員の要素が満遍なく散らされた横軸の合作楽曲でしたがこの楽曲ではどちらかと言えば縦軸での作曲が割合多く、「Lucky*Clover」よりも顕著に誰が何処を担当したか分かりやすい楽曲になったのではないでしょうか。\n自分は本当に仲間に恵まれているな、とつくづく思います。\nこの縁は一生、大切にしていきたいですね。\n(モリモリあつし)\n楽曲の取りまとめとかBメロとかCメロとかオーケストラとかしました。提供です。\n上記コメントでもおっしゃっておりますが、前作「Lucky*Clover」を完成させてからすぐ、\n「今度は真逆な、アンラッキー・クローバー的なの作ろう！」\nと話題が上がりました。\n当初、私情で忙しく手がつけられていない状態の中でも、Shironさん、こふさん、モリモリあつしさんはとても素晴らしいコード進行、構成、そしてメロディーを用意してくれました。\nそのおかげで、僕も負けじとフレーズや音作りを行うことで、とても格好いい楽曲に仕上げることが出来ました。\n今回も四人のフレーズがそれぞれ散りばめられ、四人のサウンドが交じり合っています。\nこれは、一人ではつくり上げることの出来ない四人の楽曲です。\n終焉の四重奏「Demise Quartet」、是非お楽しみください。\n(提供)",
      },
      {
        artist: "Cororo(第1回目配信楽曲）",
        title: "雲の彼方",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_01.mp3",
        comment:
          "このような名誉あるコンテストに採用していただき、とても光栄です…！\n結果の知らせを受けたときは、驚きすぎて震えが止まりませんでした。\n本当にありがとうございます。\nKACの舞台や出場される皆様は、私にとって遠い遠い雲の上の憧れの存在ですので、そんなイメージを込めて、今回製作した曲は ”上手な人がいとも簡単に捌いてて憧れた音形” を意識しております。楽しんでいただければ幸いです。",
      },
      {
        artist: "lapix(第1回目配信楽曲）",
        title: "NEO GRAVITY",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_03.mp3",
        comment:
          "どうも！lapixです！\nいわゆる「ボス曲」といわれる楽曲を頭の中でイメージしつつ楽曲制作に挑んだのは今回が初めてで、とにかく力強く、そしてサウンドが畳み掛けてくるような楽曲に仕上げました！\n普段より制作している楽曲より若干早めのBPMで駆け抜けつつ、それであって疾走感が増すように工夫しました。\n展開やメロディーも隅々まで本当にこだわって組み立てたので、是非ともプレイしてみてください！\n本作のテーマでもあるGRAVITY感、そしてSOUND VOLTEXの世界が更に広がっていく様を僕なりに描いてみましたので、感じ取って頂ければ幸いです！\nlapix",
      },
      {
        artist: "はるなば(第1回目配信楽曲）",
        title: "Candy Colored Hearts",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_02.mp3",
        comment:
          "皆様、はるなばです。この度は「The 5th KACオリジナル楽曲コンテスト」の受賞を賜り厚く御礼申し上げます。\nThe 5th！！？！えっ！！The 5th！！！？早いものでもう5回目ですね\nSDVXのKAC自体は4回目ですが、今でもKAC2012の事が昨日のように思えるほど頭に残っています。\nそりゃ歳をとったなと、、\n今回僕のオリジナルインスト楽曲が採用されたのはFLOOR楽曲初回配信であり僕のデビュー曲でもあるレトロスペクティビリー・メリーゴーランド以来で一体それまで僕は何をやっていたんだ！！？えっ！？、という心境でございます。\nでもこの長い間、山に篭って修行したり、普段自分が作っているジャンルと外れた「U.N.オーエンは彼女なのか? haru_naba Remix」を実験的に作ったり等、まだまだ未熟ですが、KACの楽曲採用を目指してきたので、やっと叶ったという感じで御座います。誠に感謝です。\nそれでもやっぱり何よりも皆さんが楽しくプレイして、KACの楽曲なので苦戦しつつレベルアップして頂ければと思います！！！！！",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "End to end",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_04.mp3",
        comment:
          "作品の採用ありがとうございます。前回のThe 4th KACオリジナル楽曲コンテストに続き、今回も採用頂くことが出来てとても嬉しいです。\nKACというのは時代の節目だと思います。皆さんなら過去と未来を繋ぐこの楽曲を乗り越え、きっと新たな時代に足を踏み入れる事が出来るでしょう……。",
      },
      {
        artist: "かめりあ(第1回目配信楽曲）",
        title: "EMPIRE OF FLAME",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_05.mp3",
        comment:
          'こんばんは！かめりあです。自分漢ッス。\n前々回、そして前回に続いて、KAC オリジナル楽曲コンテストにご採用いただきありがとうございます！\n昨年一昨年に引き続き入賞ということで、より一層嬉しさも強く光栄でございます。フゥー！\nド直球の「Bangin\' Burst」、バンギンを踏まえた上での変化球「そふらんちゃん」、ということで今年はどんな曲を応募しようかと悩んでおりました。\nそんな時、ふとしたキッカケで映画を見る機会があり、あの狂気が最大の怒りの道な感じの映画を見て、「重いギターやりたい！」と思い制作したのが今回の楽曲"EMPIRE OF FLAME"です。\nその名前「炎の帝国」の通り、燃えるようなギターでゴリゴリと弾き倒しました！\nIIDXシリーズでは以前のシリーズでしばしば追加されていたBigbeatというジャンルと、いわゆるHeavy Metalの融合になっており、ストロングスタイルの楽曲としてはかなり遅い（であろう）終始BPM114のヘヴィなビートを持つ楽曲になりました。\nまた、この楽曲では少しだけボルテのキャラクターが活躍するストーリーを構想していました。\n是非、どんなストーリーがこの曲に込められているのか、プレーして、聴いて、想像してみてください！\nかめりあでした。',
      },
      {
        artist: "かねこちはる(第1回目配信楽曲）",
        title: "Lachryma《Re:Queen’M》",
        source: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/sounds/original/19/1_06.mp3",
        comment:
          "ラクリマ《レクイエム》と読みます。\n「涙の鎮魂歌」という意味です。\n通常は「Requiem」と書きますが、KACの楽曲ということで「Queen」の文字を混ぜ、女王としての風格を出しました。末長くご愛顧いただけたら大変に嬉しいです。\nどうぞ宜しくお願い致します。\nかねこちはる",
      },
    ],
  },
  {
    id: "remix08",
    name: "アルバム「STARLiGHT」発売記念 Ryu☆リミックスコンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_08.jpg",
    sounds: [
      {
        artist: "borzy(第10回目配信楽曲）",
        title: "Time to Air (jazz it up style)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/10_01.mp3",
        comment:
          "borzyです、採用いただきありがとうございます！\n何か今までにない曲をやってみたいという考えがあったりして、そこから\n青龍のDANCE SPEEDがジャズになったらなんか面白いんではないか？？\nという謎の思いつきになりまして、\nハードバップとかモード時代のレコードに収録されているような感じとか\n出せたらなーということで、無謀にも打ち込みサウンドで挑戦してみました！\nジャズと思って聞くとちょっと違うかもしれないですが、\nなかなかの変化球リミックスに仕上がったんではないかと思ってます。",
      },
      {
        artist: "しま兄(第10回目配信楽曲）",
        title: "waxing and wanding(SS Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/10_02.mp3",
        comment:
          "初めまして、しま兄（しまにぃ）です。\n今回のリミックスコンテストでは数ある対象楽曲の中から、「waxing and wanding」をリミックスさせていただきました。この楽曲は私がBEMANIに触れるきっかけとなった曲であり、特に思い入れが深いものであります。\n「SS Remix」のSの一つはストリングスのことであり（もう一つは私のハンドルネームの頭文字でございます。）、リミックスの内容としては、まさにストリングスを強く意識したものとなっております。\nそれでは、お楽しみ頂ければ幸いです！",
      },
      {
        artist: "Shu※(第9回目配信楽曲）",
        title: "405nm(Shu※mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/9_01.mp3",
        comment:
          "皆様初めまして！Shu※と申します！\n読み方はシュウマイでもシュウでもどちらでも結構です。念願の初採用、ありがとうございます！\n405nmはAnother Infinityの原曲もRyu☆mixも大好きなので両方をリスペクトする形で編曲させて頂きました！\nRyu☆氏の曲は私を作編曲の道に導いたと言っても過言ではなく、ニックネームも彼をリスペクトしてつけたものだったりします。その尊敬の思いがこういう形にできたのは非常に光栄です！是非とも多くの人に聴いて遊んで楽しんでもらいたいです！\n(Shu※)",
      },
      {
        artist: "ag(第9回目配信楽曲）",
        title: "Mind Mapping(ag Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/9_02.mp3",
        comment:
          "初めまして。agと申します。普段はVOCALOIDを使って曲を作ったり、Swingroovesというユニットや、Music Mix Organizationというサークルで活動しています。\nこのリミックスは、原曲が持つ哀愁感とは反対に、爽やかな雰囲気のリミックスとなっているのではないかと思います。ぜひプレイしていただけると嬉しいです。",
      },
      {
        artist: "Freezer(第8回目配信楽曲）",
        title: "Narcissus At Oasis (Freezer Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/8_01.mp3",
        comment: "はじめまして、Freezerと申します。\n本楽曲、何卒よろしくお願いします。",
      },
      {
        artist: "Shiron vs. Sound Artz(第8回目配信楽曲）",
        title: "雪月花 (Shiron & Sound Artz Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/8_02.mp3",
        comment:
          "どうも初めまして。Sound Artzのいっくんです。初採用嬉しい限りです！\n今回は初採用ながらあの有名なShiron君と合作させていたただきました。ありがたい限りです。\n和風＆トリッキーなシャッフルメロディーにパンチのあるキック、太いベースでブチ上げるハンズアップリミックスになってます。\n二人が得意とするジャンルで作っただけあって、上手くお互いの良いところが出た仕上がりになってますので、是非楽しんで下さい！\n(Sound Artz)\n---------------------------------------------\nご採用頂きありがとうございます！Shiron vs. Sound ArtzのSの方、Shironです。\n合作という形ではありますが、BEMANI楽曲リミックスコンテストで採用頂いたのは初で、身に余る想いでございます。\n私がBEMANIを触り出したきっかけはjubeatで流れていた「bass 2 bass」で、\nそのメロディのキャッチーさに惹かれ、jubeatをはじめとしたBEMANIシリーズにズブズブになっていきました。\nそれから、Ryu☆さんの音楽にもズブズブになっていきました。\n今まで数多くのサウンドを手がけられているRyu☆さんですが、特にそれを初めて耳にしたとき、凄まじい衝撃を受けた楽曲があります。\nHANDZ UP　-　Second Heaven　-　Ryu☆\nなんだこれ。\n図太いキック、ファットなベース、分厚いリード、三倍アイスクリーム……\nその時耳に入ってきた全ての刺激が衝撃でした。\nそこからハンズアップと呼ばれる音楽にズブズブになっていきました。\nついに今回Ryu☆リミックスコンテストの開催が告知されたとき、即座に何をするかが決まりました。\n同じRyu☆に影響を受けた者同士、今やらずにいつやるべきか！！\nてな感じで、国内ハンズアップシーンの巨匠Sound Artzさんと合作をさせて頂くこととなりました！ありがとうございます。\n今回リミックス致しました楽曲はbeatmaniaIIDX 10th Styleより「雪月花」。ブチアゲるには最適でした。\nIIDX九段のボスだったときは物凄い苦戦を強いられた記憶があります。\n製作の流れとしては、Sound Artzさんに楽曲のラフを元に核となるサウンドを作ってもらい、\n私はリミックスのディレクション、メロディのアレンジ、最終的な細部の調整、仕上げなどを行いました。\nRyu☆さんを初めとした様々なハンズアップアーティストを意識した構成となっております。\nそんなわけで、たくさんのズブズブをこの1曲に込めました。\n是非ズブズブになってプレーしてくださいね！\nP.S. Ryu☆さん、アルバム発売おめでとうございます！\n(Shiron)",
      },
      {
        artist: "Hirayasu Matsudo(第7回目配信楽曲）",
        title: "Genesis At Oasis (Hirayasu Matsudo Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/7_01.mp3",
        comment:
          "(1). 片足をつま先立ちにする。\n(2). つま先立ちの足へ全体重を乗せ、もう片方の足をかかとを地面に付けたまま後ろへ歩幅程度スライドさせる。\n(3). つま先立ちの方の足のかかとを地面に付け、スライドさせた方の足をつま先立ちにする。\n(4). (2)～(3)を繰り返す。\n◆うまく見せるコツ\n・頭の高さを上下させないこと。\n・できるだけ一定の速度でスライドしている状態を維持すること。\n（一歩ごとのスライドさせる足の交換の際に減速しないこと）\nさあ！やってみよう！",
      },
      {
        artist: "こふ(第7回目配信楽曲）",
        title: "Line 4 Ruin -kohumix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/7_02.mp3",
        comment:
          "採用して頂きありがとうございます！こふと申します。\n落ち着きのあるクールな楽曲である「Line 4 Ruin」を、\n疾走感で駆け抜ける戦闘曲風にリミックスしました。\n是非楽しんでプレーして頂けると嬉しいです！m(_ _)m",
      },
      {
        artist: "影虎。(第6回目配信楽曲）",
        title: "Narcissus At Oasis -影虎。 style-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/6_01.mp3",
        comment:
          "この度は採用して頂き、誠にありがとうございます！影虎。です。Narcissus At Oasisは元々綺麗で静かな印象のアートコアでしたが、それを僕の思い描く音ゲーのアートコアにリミックスしてみました。原曲で印象的だったピアノの旋律はそのまま引用し、それ以外は再構築するような流れで作りました。原曲には無かったフレーズをこれでもかと詰め込んでいます。\n2分間という短い時間の中で、最初から最後までやりたいことを存分に詰め込むことが出来ました。哀愁漂う冷たいサウンドと躍動感のあるサウンドの対比をお楽しみ頂ければ幸いです。宜しくお願い致します！\n(影虎。)",
      },
      {
        artist: "LeaF(第6回目配信楽曲）",
        title: "壊Rave*it!! 壊Rave*it!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/6_02.mp3",
        comment: "IQが2しかありません。",
      },
      {
        artist: "Laur(第5回目配信楽曲）",
        title: "Rebuilding of Paradise Lost",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_01.mp3",
        comment:
          "初めまして、Laurです！この度はRebuilding of Paradise Lostを採用を頂き、本当にありがとうございます。\n私が作曲を始めた大きな理由の1つに、SOUND VOLTEXで自分の楽曲を遊びたいという目標がありました。その大きな目標が達成出来て本当に嬉しいです。仮採用通知が来た時は1週間位燃え尽き症候群で曲が書けませんでした。\nこの曲名の意味は「失楽園の再構築」です。PARADISE LOSTを私なりの解釈で一旦バラバラにし、私風に再構築した作品となります。\n是非ともプレイして頂けたらと思います！宜しくお願いします！",
      },
      {
        artist: "Gowrock(第5回目配信楽曲）",
        title: "Engraved Mark-Gow's ill! RMX-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_02.mp3",
        comment:
          "20120129。\nこの日があったから「Gowrock」が生まれました。\n飛び交うレーザー、立ち籠めるスモーク、湧き出す歓声、身体の芯に来るビート。\n「いつか自分も輝くあの舞台に立ってやるんだ」と誓ってから、\n少しずつでも歩みを止めずに此処まで来れて、本当に良かった。\nどもっ！！　お久しぶりのガウロックです。(｢ﾟДﾟ)｢ｶﾞｳｶﾞｳ\nこの度は『Engraved Mark』のリミックスで採用いただきまして、\nまた一つ夢が叶いました！\n今まで皆さんがご存知の楽曲と違った一面をお見せできたらいいなぁ…。\nまた何処かで皆さんに逢えますように…！",
      },
      {
        artist: "Kairys(第5回目配信楽曲）",
        title: "Sakura Mirage -Drum'n World-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/5_03.mp3",
        comment:
          "初めまして、Kairys(カイリス)です！今回初採用をいただき、非常に嬉しく思います。\n選曲理由については、もともとRyu☆さんの「sakura」シリーズを聴いた事がきっかけで音楽ゲームを始めた身として、今回のコンテストはこれでいこう！と考え「Sakura Mirage」を選びました。\n曲の方はボルテらしい疾走感を出しつつ、軽快さも出したかったのでドラムンベースと民族テイストを織り交ぜたアレンジで書きました。\nイメージは異国の辺境の地で荒々しくも美しく咲いているような桜のイメージです。（それはもうショッキングピンクな感じです）\nそれでは、ぜひ楽しんでプレイしてみてください！",
      },
      {
        artist: "mommy(第4回目配信楽曲）",
        title: "Aurora(Latinized Style)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_01.mp3",
        comment:
          "Ryu☆さんのAuroraをラテンハウス風にアレンジしました。\n原曲とは大分違うサウンドですが、裏拍に連続で入れてくるメロディがラテンのリズムに合うかなと思ったのがきっかけでした。\nサビの部分で原曲の冒頭のメロディが重なる所が自分では気に入っています。\n他の人があまり思いつかないようなアレンジだけど聴いてみるとしっくり来る、そんな仕上がりを目指したので、是非楽しんでほしいです。",
      },
      {
        artist: 'Jockie "MASTA BASS" Suama(第4回目配信楽曲）',
        title: "3y3s (JMBS FUNKOT RMX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_02.mp3",
        comment:
          'はじめましてJockie "MASTA BASS" Suama申します。\n(長いのでsuamaとかJMBSとかと覚えてもらえれば・・・。)\nこの度は採用していただきありがとうございます。\n曲のほうはIIDXで何度も挑戦しては敗れまくった思い出がある3y3sをイケイケでアグレッシブでブチアゲでトランシーなFUNKOTにリミックスしました。FUNKOTていうと陽気なイメージがあるかもしれませんがこのリミックスはHARD FUNKとも呼ばれているものに近いかもしれません。\n皆様に楽しんで頂ければ嬉しいです。',
      },
      {
        artist: "cosMo＠暴走P(第4回目配信楽曲）",
        title: "Second Heaven GravityPfArrange",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_03.mp3",
        comment:
          "cosMoです。オリジナル楽曲コンテストでは以前より採用をいただいておりますが、リミックスコンテストは実は初採用でして、ありがたやありがたやです。\nとにかく全力でこのコンテスト勝負しようということで、Ryu☆さんの楽曲の中でも特に好きな楽曲「Second Heaven」を自分のメインウエポンであるところのピアノでアレンジいたしました。\nというわけで三倍アイスは乗っかっておりませんがGravityでJazzyなピアノアレンジになりましたので、是非プレイしていただけたら幸いです！！",
      },
      {
        artist: "nora2r(第4回目配信楽曲）",
        title: "starmine (nora2r Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_04.mp3",
        comment:
          "starmineは原曲がハッピーハードコアなのでここは真正面からぶつかろうと思い、\n自分なりにUKハードコアに落とし込みつつマキナのエッセンスをちょっと入れつつ疾走感マシマシさせつつ、な感じで仕上げました。\n沢山語りたいことはあるのですが野暮かなとも思うので。\n音楽ゲームをプレイするみなさまに楽しんでいただければとてもうれしいです。",
      },
      {
        artist: "Tracy vs. Astronomical(第4回目配信楽曲）",
        title: "bass 2 bass [Tracy vs. Astronomical Remix]",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_05.mp3",
        comment:
          "皆さんこんにちは！Tracyです。\n今回は、僕の音楽人生の中でも非常に大きな影響を与えてくださった、\nRyu☆大先生のRemixコンテストへの採用、ありがとうございます！\n今回は、同じくRyu☆先生の楽曲を聴きながら共に育った\n10年来のDJ仲間(同期)でもあり、コンポーザー仲間でもあり、\n僕のサークル「Amateras Records」でも何度も参加してもらっている\nAstronomical選手との合作という形でRemixさせて頂きました。\n実はこの「bass 2 bass」という楽曲、実はRyu☆先生の中でも\n個人的に「Second Heaven」と並んで1,2を争うくらいに\n聴き込んでいた楽曲でして、原曲のイメージを大事に制作致しました。\n是非、皆さんにもこの楽曲の素晴らしさをRemixという新たな形を通じて\n今一度、再認識して頂ければ非常に嬉しいです。\n最後に、Ryu☆先生ベストアルバム発売本当におめでとうございます！",
      },
      {
        artist: "kamome sano feat. Kuroa*(第4回目配信楽曲）",
        title: "朧 (kamome sano remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/4_06.mp3",
        comment:
          "おはようございます！\nこれはKuroa*さんに歌って貰うしかないのでは？と思い声をかけ、0.5秒で決まったコラボでした。\nすごいです。こんなん歌えません。ありがとうKuroa*さん\n(kamome sano)\nこんにちは、Kuroa*です。\nこの度はいろんな巡り合わせがあり、ボーカルを担当させて頂きました。\n御察しの通り、朧は初めて聴いた時から大好きな曲でしたのでこうやってお届けできてとても嬉しく、また感動しております。\nkamomeさんらしいキャッチーなREMIXに仕上がっていると思うのでたくさん遊んで頂けると嬉しいです！\n(Kuroa*)",
      },
      {
        artist: "xi(第3回目配信楽曲）",
        title: "Time to Air -Fly High Remix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/3_01.mp3",
        comment:
          "こんにちは！xiです！採用ありがとうございます！\n原曲が声ネタが特徴的な曲ですが、あえて使わずに自分のスタイルで、\n展開やコードをひねりつつ、ギミック重視かつ疾走感あふれる曲になるよう心がけてリミックスさせて頂きました。\nタイトルにつきましてはこの曲を作り終わった時に、テンション高いぞ！！飛べる！！！！と思ったので「Fly High」をノリと勢いで付けました。\n是非楽しんでプレイして頂ければ幸いです。",
      },
      {
        artist: "Hyuji feat. LIQU@。(第3回目配信楽曲）",
        title: "Mermaid girl (Tropical Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/3_02.mp3",
        comment:
          "人生で初めて公募というものに送った東方紅魔郷リミックスコンテストで採用を頂いたことで自信を貰いました。\nその後、10回ほど続いた落選で自分の未熟さも教えてもらいました。\nそうして3年ほど掛かりましたが、ようやくこの舞台に戻ってくることが出来ました！ありがとうございます！\nさて、今回は僭越ながらSTARLiGHTの顔でもあるCream puffの名曲「Mermaid girl」を選ばせて頂き、オーエンに引き続き和製のエピックトランス（ブチアゲトランス）にリミックスさせて頂きました！むしろ姫トランスとでもいうべきでしょうか。\n個人的に物語はハッピーエンドの方が好きですし、せめてお話の中でぐらい幸せで居させてよ！ということで、歌詞の一番悲しい部分は今回は無かったことにさせて頂いて、アレンジは底抜けに明るくて、はっちゃけていて、とびっきり幸せな夏仕様にしました。\nそして、LIQU@。さんが楽しさ、可愛らしさ、力強さをバランス良く兼ね備えたヴォーカルで高らかに歌い上げてお話に色を添えてくれました。\n恋なんて上手く行かないことの方が多いけど、でも、この曲を聴いている間ぐらいはみんなが幸せで居られると良いなって思ってます。\nただ、一部のプレイヤーさんは地獄を見るかもしれませんが！\nあっ！ちょっと！やめて！石を投げないでくだｓｷﾞｬｱｱｱｱｱ頑張れ恋する少年少女たち！！\n～FIN～\n(13初のUCはギアチェン無しルナパだったHyuji)\n初めまして！LIQU@。です。りくあっと、と読みます。\nHyujiさんにお声掛け頂きまして、ボルテの世界に飛び込む事となりました。\n過去に行われたボルテのボーカル公募の二次審査で落選した経験もある為、こういった機会を頂けた上に採用まで叶うなんてなんだか実感が湧きません…！本当にありがとうございます。\n今回はトランス！英語！普段の自分にとって身近でない要素を含んだ楽曲にどう挑もうか悩みましたが、のびのびと歌う為にHyujiさんには元のキーからひとつ下げて頂き、私はひたすら読みを聞き取りぽちぽちと半角カナを打ち込んでいきました。\nそんな土台固めからのスタートでしたが、練習していく内に早口で英語を歌い切れるようになる達成感にどんどん楽しくなっておりました（笑）\nmoimoiさんの潤いある可愛らしい歌声を意識しつつ普段の自分らしさも忘れぬよう気持ち良く歌っているので、プレイされる方にもそんなニュアンスが伝われば嬉しいです！\n(LIQU@。)",
      },
      {
        artist: "brz(第2回目配信楽曲）",
        title: "Critical Crystal(brz_remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_01.mp3",
        comment:
          "こんにちは、brz(ブリーズ)といいます\nSOUND VOLTEXに楽曲を採用していただくのは初めてになります、本当にありがとうございます！\n今回私が製作したリミックスですが、原曲のイメージとはかなり離れたElectroHouse風の曲調になっております\n今までのボルテには少なかった低BPMのジャンルながらも音ゲーっぽい展開をたくさん詰め込んでありますので、是非プレーして楽しんでいただけたらと思います、よろしくお願いします！！！",
      },
      {
        artist: "borzy(第2回目配信楽曲）",
        title: "Mind Mapping (hard liquid remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_02.mp3",
        comment:
          "borzyです、再び採用いただけて嬉しく思います、ありがとうございます！\n原曲が収録された「IIDX 16 EMPRESS」は、CS版の方でかなり練習していたんですが、難しい曲が全然できなかった自分は、その時最も選んでいた曲だったはずです。\n曲調も譜面も好きで、思い入れがあったこともあり、前からリミックス作ってみたかったんです。\nそれなので、コンテストの対象曲にあったのを見て、これは投稿するしか！\nとなりました。\nAbyss以来のドラムン系リミックスです。疾走感175%で体感せよ！",
      },
      {
        artist: "さわわ(第2回目配信楽曲）",
        title: "雪月花 -さわわRemix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_03.mp3",
        comment:
          "こんにちは！疾走の人改め『さわわ』と申します。\nこの度は、採用頂き誠に有難うございました！\n大好きなRyu☆さんのリミックスコンテストで採用頂けてめっちゃ嬉しいです！\n今回は、Ryu☆さんの名曲、『雪月花』をリミックスさせて頂きました。\n原曲を残しつつ、ワヴルベースや声ネタなど挟み、疾走感全開で仕上げました！\n雪月花の美しい旋律と疾走感にヤられて下さい！(*∩ω∩)\nそれでは、さわわを今後とも宜しくお願いします！≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ",
      },
      {
        artist: "polysha(第2回目配信楽曲）",
        title: "I'm so happy(Happy Hoppin Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/2_04.mp3",
        comment:
          "初めましての方もそうでない方もこんにちは、polyshaといいます。\n今回、音楽ゲームを始めた当初から知っている・たくさんプレイしたこの曲のリミックスを受賞出来たことをとても嬉しく思います。\n普段は4つ打ちの音楽をよく製作しているのですが、誰も思いつかなさそうなアレンジが良いかな、と思いGlitch Hopに挑戦してみました。\n初めて作るジャンルで苦労した点も多いですが、自信作です。何卒よろしくお願いします。",
      },
      {
        artist: "しーけー(第1回目配信楽曲）",
        title: "The star in eclipse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/1_01.mp3",
        comment:
          '初めまして、しーけーと言います。今回とうとう採用を貰えてとても嬉しいです。\n"とうとう"と言っても、まだ作曲初めたての拙い作品を投稿してた期間が多いので何とも言えないものですが…。\nようやく自信を持てる作品になってきたな、と思えるようになったばかりで最優秀というあまりにも光栄な事に選ばれてしまい、とても嬉しいのと反面、自分がこの賞を貰っていいのかと思っている部分もあります。\n自分の一番好きな音ゲーに自分の曲が入るというのは僕にとってこれ以上無い嬉しい事です、収録された時にはPUC狙いたいと思ってます！',
      },
      {
        artist: "TAKU1175 feat.かなたん(第1回目配信楽曲）",
        title: "Din Don Dan (Fusion Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/08/result/sound/1_02.mp3",
        comment:
          "こんにちは、TAKU1175と申します。\nこの度は受賞を賜ることができ、大変光栄に存じます。\nギター、ピアノといった生楽器、かなたんさんの歌をメインに据え、Ryu☆様の楽曲の中でも特に大好きな「Din Don Dan」をジャズフュージョン風にアレンジさせていただきました。\n原曲のメロディーをリスペクトしつつ、アレンジも和音進行もガラっと変える！\nというコンセプトで制作いたしましたので、原曲との対比をお楽しみいただければ幸いです。\n(TAKU1175)\nはじめまして！かなたんと申します。\n最優秀作品としての採用、とても光栄に思います。\n本当にありがとうございます。\n素敵な原曲にTAKU1175さんの素敵アレンジ。\nどう歌おうか悩みましたが、オシャレな世界観を壊さないようにと、大人っぽい雰囲気を意識しました。\nたくさんプレーしていただけると幸いです。\nよろしくお願いいたします。\n(かなたん)",
      },
    ],
  },
  {
    id: "original20",
    name: "SOUND VOLTEX IV 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_20.jpg",
    sounds: [
      {
        artist: "かめりあ feat. 歌劇派学生(第13回目配信楽曲）",
        title: "Lowermost revolt",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_01.mp3",
        comment:
          "私、見世物小屋におりましたがついにお暇を頂き、\n肥やし溜めで社会風刺めいた歌劇を演じておりました。\nするとそこに、彼が現れたのです。\n｢あなたの側にいる作曲家がいます。｣\n地べたに佇む私をミカン箱の上に立たせると、\n彼は徐ろに言いました。\n『Lowermost revolt』は、\n最底辺の楽園で私が見た景色に思いを重ねながら、\nかめりあさんと固く手を繋いで青空を睨む、\nそんな楽曲に仕上がったと手応えを感じています。\n何をどう誤ってこんな運びになったのかは今更\n笑えてくるばかりなので、素晴らしい出会いの\nきっかけへと押し出してくれた全ての営みに感謝しつつ･･･。\n今は神妙に、この曲が愛されたり憎まれたりで\nプレイ頂いたユーザの皆さんのお耳にベッタリと\nこびりつくことをにやけ面で夢想しております。\n（歌劇派学生）\n私は何も知りません。かめりあです。\nはわっはわでふわっふわな「HEAVENLY HAVEN」に、\nまさに逆行するかのような楽曲があっても良いのではないかと思い、\n敢えて「Lowermost revolt」＝「最底辺からの蜂起」と名付けた楽曲を作りました。\n声帯二十面相、まさに七色の声を持つ歌劇派学生さんの歌唱が、\n男声から女声まで響き渡り、とても素晴らしいです。\n私のワブルも皆様のお耳にベッタリとこびりつくのを楽しみにしております。\nでは諸君、さらばだ！（何卒よろしくお願いいたしますの意味）\n（かめりあ）",
      },
      {
        artist: "BlackY(第13回目配信楽曲）",
        title: "Royal Action",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_02.mp3",
        comment:
          'BlackYです！\n今回はわっはわでふわっふわな稼動記念コンテストということでやっぱり派手にキメて行かなきゃと思い、派手目にハードコアグルーヴでシャレオツなピアノを混ぜ込んだような感じの曲を作りました！\nアゲッアゲでハデッハデに"Action!!"してもらえれば幸い！！\n（BlackY）',
      },
      {
        artist: "タケノコ少年(第13回目配信楽曲）",
        title: "ツキアカリ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_03.mp3",
        comment:
          "初めましての方は初めまして。\nタケノコ少年と申します。\n普段はニコニコ動画にてバンドサウンドを軸にしたボカロ曲を投稿しています。\nこの度は採用していただき本当にありがとうございます。\n嬉しさのあまり動悸が速くなり体調を崩して寝込むほどには嬉しかったです。\n自分の曲で誰かを楽しませるということが僕の夢です。\nその夢に確実に近づきました。\n楽曲ですが、\n爽やかで疾走感溢れる楽曲でありつつ、かっこよく切なくもある楽曲になっています。\n気に入ってもらえれば光栄です。\n皆さまの人生にツキアカリが差しますように(イケボ)\nよろしくお願いします!!!はっはっは!!!!!!\n（タケノコ少年）",
      },
      {
        artist: "ぺのれり feat.ぁゅ(第13回目配信楽曲）",
        title: "Zelophilia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_04.mp3",
        comment:
          "“嫉妬性愛”について歌った曲です。\n嫉妬っていいですよね。人間らしくて。\n（ぺのれり）\nこんにちは！ボルテではお久しぶりです！ぁゅです！！(  ´ ▽ ` )ノ\n今回はぺのれりさんの楽曲を歌わせていただきました！！\n難しい意味のタイトルの曲ですが、いつも通り楽しく歌ったのでぜひ！！遊んでください！！！\n（ぁゅ）",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第13回目配信楽曲）",
        title: "ボーイミーツ・ブルー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_05.mp3",
        comment:
          "IVでも楽曲を採用していただきまして大変感謝です。\nうさぎ愛好会の楽曲担当、cosMoです。犬派猫派以外の第3の選択肢としてうさぎも加えてくれよ！頼むよ！うさぎ好きからの切なるお願いだ！\nという気持ちで作った楽曲では1mmたりともありませんが、ボルテIVのさわやかなカンジをイメージして作りました。\n是非遊んでいただけると幸いです！\n（cosMo＠暴走P）\n歌唱担当のsyuri22と申します。このたびはSDVX最新作おめでとうございます！\nそして楽曲採用ありがとうございます。まさに恐悦至極でございます。\n今回曲のほうはなんだかとっても潮み溢れる一曲になったかと思いますので、潮のかほりを楽しんでいただけたら幸いです。\n私はこの曲を聴いて浜辺をウオオオオオってダッシュしたくなりました。ウオオオオオ！\nよろしくおねがいします！\n（syuri22）",
      },
      {
        artist: "かゆき(第13回目配信楽曲）",
        title: "極彩天奏",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/13_06.mp3",
        comment:
          "採用ありがとうございます。\n今回は星空をイメージしたオシャレチックなプログレロックです。\nMUSECAに天黎鏡明という曲がありまして、そちらは「月と太陽」をモチーフにしておりました。\n天体ってロマンチックで、また、得体の知れない物特有の不思議な魅力があって好きです。\n実はこの曲、10年ほど前に僕が初めてネットで発表した「極彩色」という曲をイメージして作り直した曲なんです。\nといっても、面影は0.0002%くらいしか残ってないのですが。。。\n今僕たちを照らす星々の光は、何万、何億光年と離れた所から放たれた過去の光です。\n「極彩色」を作った頃…過去の僕が抱き、曲に込めた将来への夢や希望というのは、時を経た今も忘れない。\n星の光のように、過去の想いが、今まで僕を照らし続けてくれた。\nそして、この「極彩天奏」もまた、きっと未来の僕を明るく照らしていってくれるのだと思うのです。\n時には暗闇に迷い込んでしまう事もあるかもしれない。けれどきっと、そんな僕を導いてくれると信じて、そして願っています。\nくっさ。芳香剤蒔いとき芳香剤！\nそんな小っ恥ずかしい裏テーマはさておき、\nとにかく本気で作った容赦の無い激ヤバ変拍子の劇的変態音楽です。\nどうぞ、よろしくお願い致します。\n（かゆき）",
      },
      {
        artist: "Verdammt(第12回目配信楽曲）",
        title: "HP:1",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_01.mp3",
        comment:
          "ぬぎゃああVerdammtです。\n今ではあらゆるゲームが美麗なグラフィックや豪華なBGMで遊べる時代ですが、\nまだ純粋だった子供の頃は、ただのドット絵やピコピコした音楽でも想像を膨らませて夢中になっていたよなあ…\n…という、ちょっとオジサンくさい思い出を浮かべながらこの曲を作りました。\n夢中になりすぎた結果どうなったかが、曲名の由来でありオチといったところです。\nこれまで私が得意分野としてきたオーケストラ+8bit風の音楽は、初めてオリジナル曲で採用をいただくきっかけとなった助言から生まれたものでしたが、\n今回は敢えて完全に別け、原点回帰に挑戦しました。この曲を採用していただけたことを、本当に嬉しく思います。",
      },
      {
        artist: "まし(第12回目配信楽曲）",
        title: "春時雨",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_02.mp3",
        comment:
          "サウンドボルテックスⅣ稼働おめでとうございます！！\nそして楽曲採用ありがとうございます！！\n『まし』と申します！！\n『ピコピコシンセ＋ギターロック』をコンセプトに、主にニコニコ動画にて動画投稿しております！！\n雨に打たれて散っていく桜と、春の出会いと別れをイメージした楽曲です！！\n皆さん是非、楽しく遊んで頂けると嬉しいです！！",
      },
      {
        artist: "Laur(第12回目配信楽曲）",
        title: "Fairy in Strasbourg",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_03.mp3",
        comment:
          "この度は2度目の採用を頂き本当にありがとうございます、Laurと申します。\nSOUND VOLTEX IVのイメージは「水」「空」のような物を感じたので、水の都にいる妖精をイメージしてこの楽曲を制作しました。\n私が今まで挑戦した事が無かったジャンルですが、無事に完成して尚採用まで頂けてとても満足しています。\n是非この楽曲が配信されたら一度でも良いのでプレイして頂けたらなと思います！",
      },
      {
        artist: "パピ子りんft.ビタミンな兄貴♂＆ゆずり(第12回目配信楽曲）",
        title: "It's a new day!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_04.mp3",
        comment:
          "大変ご無沙汰しております。パピ子りんです。この度はご採用頂きまして誠にありがとうございます。\nまた、「恋愛方程式」をプレイしていただいた皆様方には厚く御礼申し上げ、未プレイの皆様方にも軽く御礼申し上げます。\n今作もポップでキュートな楽しい楽曲となっておりますので、楽しくプレイして頂きますよう宜しくお願い申し上げます。",
      },
      {
        artist: "Polyphonix(第12回目配信楽曲）",
        title: "QUAKE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_05.mp3",
        comment:
          "初めまして、主にEDMなどのダンスミュージックを作っているPolyphonixと申します！\nこの度は採用頂きありがとうございます。\nそしてSOUND VOLTEX Ⅳ制作決定おめでとうございます。\n今回初めての応募で採用頂き大変嬉しい限りです。\n大地を揺るがす様な激しい楽曲を制作しました。\n是非楽しんで頂けると幸いです。",
      },
      {
        artist: "やどりぎ(第12回目配信楽曲）",
        title: "Poppin’Cats!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_06.mp3",
        comment:
          "初めまして！やどりぎと申します。\nこの度は採用頂き大変嬉しく思います。\nこの曲のテーマは「ﾊｯﾋﾟｰな気まぐれニャンコ」です。\nネコといえば跳んだり跳ねたり、なんか危ないことしてたり、丸くなって寝ていたり・・・\n本当に気まぐれというか、自由奔放ですよね！（めっちゃ可愛い）\n「あっ！！ここすっごいﾆｬﾝﾆｬﾝしてる！！」的なネコ感（？）を感じてもらえると幸いです。\n（スペシャルサンクス：Verdammtさん）",
      },
      {
        artist: "Ange;art(第12回目配信楽曲）",
        title: "゜*。Chantilly Fille。*°",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/12_07.mp3",
        comment:
          "゜*。kawaii is justice。*°\nAnge;artっていいます。\nお菓子をテーマにしたお菓子な女の子の楽曲です。\n元気で、可愛くて、でも生クリームのように繊細で\nそんなイメージで書いてみました。\n是非、プレイしてくださいね\n「しゃんてぃ　ふぃーゆ」って読むんだよ\nあと僕 美少女なんで（）",
      },
      {
        artist: "ぬゆりとびす(第11回目配信楽曲）",
        title: "Sadistic Stabbing",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_01.mp3",
        comment: "ぬゆりです。ラー\n(ぬゆり)\nうれしいです。本当にありがとうございます。\n(びす)",
      },
      {
        artist: "パイタン(第11回目配信楽曲）",
        title: "NEON LOVE♥POTION!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_02.mp3",
        comment:
          "初めましての方は初めまして、パイタンと申します。\n公募に応募したのはすごく久々で受かるかわからなかったのですが無事に受かりました。本当にありがとうございます！\nLEMON SUMMERから約3年ぶりぐらいの新曲になりました！\n前回の楽曲の勢いを継承しつつも、僕の中で色々トライした曲になっております。\nゲーセンでいっぱい聞いてください！パイタンでした！ありがとうございます！",
      },
      {
        artist: "Citrus and Ocean Colour(第11回目配信楽曲）",
        title: "couleur automnes de chocolat",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_03.mp3",
        comment:
          "この楽曲が公開されてる今が秋深まってるのか\nはたまた雪がスンスン降っているのか\n常夏なのか\n花が咲き乱れているのかわかりませんが\nこんにちは、Citrus and Ocean Colour(しおから)のたちのんです。\n本楽曲は、秋の哀愁をボサノバリズムに乗せて、\nふわふわした語りのような、なんちゃってラップを織り混ぜた\nミクスチャーボッサ(今名付けました)なんです。\n面白～い感じにまとまったので、楽しんでいただけますと嬉しいです。\n曲の最後にはみんなで合唱しちゃおうパートがあるんで\nゲーム筐体の前で歌いながらプレイしてみてくださいね。\n多分難しくなるだけだと思います。\n（たちのん(Drumsとか作詞とか色々)）\nみなさま、こんにちは。歌唱担当のTEAです。\n採用いただき、大変嬉しく思います！\n自分自身、ここまで「語り」パートがある曲に挑戦するのは初めてで、\nプレイヤーのみなさまに遊んでいただけること、とても楽しみにしております！\nいい香りのしそうな歌詞にもぜひ注目してみてください！\n（TEA(Vocal)）\nはじめまして！奏音です！\nこの度は採用誠にありがとうございます！\nついにボルテもIVという事で初代からプレイしている自分からしたら\nとても長いようで短い年月でした…\nそして、遂にこのSOUND VOLTEXという作品に\n自分が関われるという事で涙で画面が見えません……\n是非楽しんでプレイして下さい！\n（奏音(Piano)）\nこの度は、楽曲を採用いただきましてありがとうございました。\nこうして私たちの音楽が皆様に聴いていただけることが、本当に嬉しいです。\n是非、たくさんプレイしてください。\n（tell(Guitar)）\n楽曲の採用、ありがとうございました！\n一生懸命、気持ちを込めて演奏しましたので、楽しんで頂けたら嬉しいです！\n（末次(Bass)）",
      },
      {
        artist: "brz(第11回目配信楽曲）",
        title: "WONDER_WOBBLER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_04.mp3",
        comment:
          "こんにちは、brz(ブリーズ）です！ 前回のRyu☆リミックスコンテストに続いて今回はオリジナル楽曲での採用となります！本当に嬉しいです！！！\n今回の楽曲についてですが、最近「ベースドロップの入るUKHardcore」をよく耳にするな～と感じていたのでその要素を取り入れつつ何とか音ゲーに合う曲を作ろう！ということで製作いたしました\n100%思い描いた通りの楽曲に仕上がって個人的には大満足な出来でございますので、後は皆さんに楽しんでいただけるのを祈るばかりです！どうかWONDER_WOBBLERをよろしくお願い致します～～～～～！\n…ちなみにジャケットは「あのキャラ」になってるんじゃないかな～？と予想しております。もし違っても「そうそうこのキャラだと思った～！！」と言い張る所存です、よろしくお願いします。",
      },
      {
        artist: "u-z feat.CHERICa(第11回目配信楽曲）",
        title: "Ghost Trigger",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_05.mp3",
        comment:
          "以前に採用して頂いた「Vampire's Territory」のシリーズ続編みたいな感じだよ！\n今回はボカロではなくゲストヴォーカリストCHERICaさんに歌ってもらったよ！\nお化け狩りのおうただよ！すごいやばいはんぱないよ！ありがとうだよ！\n（u-z）\n輝針城リミコンぶり、しかもオリジナル曲での参加なので緊張していましたが\nそれ以上に\n「まさか邪悪な者共を私が駆逐する事態となろうとは…」\nという気持ちでした。\nu-zさんの曲はいつもちょうぜつかっこいい音が鳴ってるので、今回も是非遊んでくれー！！！\nという気持ちでもあります。\n「Ghost Trigger」を宜しくお願いします。\n（CHERICa）",
      },
      {
        artist: "ZYTOKINE feat. aki(第11回目配信楽曲）",
        title: "444",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/11_06.mp3",
        comment:
          "祝SOUND VOLTEX IV稼働開始！ということでありがたいことに３度目のボルテ採用、感謝感謝でございます！\n長年一緒に音楽活動をしてきたakiさんをボーカルに迎えて、シンセサウンド溢れる切ないハイスピードポップを目指しました！\n是非実際にプレイして楽しんでいただけたらと！",
      },
      {
        artist: "Shiron(第10回目配信楽曲）",
        title: "Gorgetech",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_01.mp3",
        comment:
          'ご採用頂きありがとうございます！Shironでございます。\n時の流れの早いもので、SDVXもついに4バージョン目ですね。\n「ALBIDAが、Brokenが、Evansが…」なんて騒いでいたあの頃が遠い過去のように感じられます。\nよく世界を照らしゆく華になったり白馬の如く翔けていったりしました。\n今回の楽曲"Gorgetech"は、GorgeとHardtechno / Schranzのハイブリッドをイメージした曲です。\nGorge(ゴルジェ)とは、インドやネパールの山岳地帯のクラブシーンが発祥(という噂)のエレクトロニックミュージックの一種です。\nこのジャンルの存在を知ったのは割と最近なのですが、タムを主軸に構成された無機質でサグいビートはこれまで聴いた事のなかった革新的なサウンドだったので、これは是非音楽ゲームにも取り入れてみたい！と思い立ちました。\n結果として中東とドイツとラテンが入り混じった変な楽曲になりました。\n"ゴルい"感じになっていれば幸いです。\nSOUND VOLTEX IV、稼動おめでとうございます！\n疾走感400%！闘え！堕ちるまで！',
      },
      {
        artist: "かねこちはる(第10回目配信楽曲）",
        title: "オンディーヌの泪",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_02.mp3",
        comment:
          "こんにちは\nSOUND VOLTEX IVの第一印象は【水】でした。\nとっても【水】の雰囲気がありましたので、\n水を司る精霊『オンディーヌ』をイメージして作曲しました。\n彼女の持つ水面のような「揺らめき、力強さ、孤独」を感じて頂けたら幸いです。\n採用ありがとうございました。\nかねこちはる",
      },
      {
        artist: "はるなば feat.みかん汁(第10回目配信楽曲）",
        title: "ゴーストマスコット",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_03.mp3",
        comment:
          "こんにちは！はるなばです！\nこの曲は凄くロックです！頑張って演奏しました！よろしくね！\nそして久しぶりのボルテです！みかん汁です。\nボルテも4作目ということで、なんだか感無量です（勝手に）！\nこれはなんとロックでポップでわいわいした曲なので、め～～～っちゃ楽しい譜面になったと思います。\n是非みんなで遊んでください！末永くよろしくお願いいたします！\nゴーストマスコットいえーい！",
      },
      {
        artist: "立秋 feat.ちょこ(第10回目配信楽曲）",
        title: "ぱあ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_04.mp3",
        comment:
          "はじめまして。曲担当の立秋です。\nぱあの国には色んな人がいますが、みんな楽しくぱあしてます。\nみなさんもこの曲でぱあってなって貰えたら嬉しいです。\n(立秋)\nはじめまして、ちょこです！\nぱぁの歌唱を担当させていただきました！\n立秋さんのピコピコサウンドでとっても楽しいぱぁーっ☆な曲になってます☆\n楽しくプレイしてもらえたらうれしいです！\nぱっぱっぱっぱっぱっぱっぱっぱっぱぁーっ☆\n(ちょこ)\n※こちらの作品はジャケットも一緒に採用されました\n( ｡ωﾟ)gueeeeeeeee!!!\nはじめまして、hardです。\nこの度はジャケット採用して頂き、恐悦至極に存じます。\nとてもヘブンリーです。\n曲全体のぱあーっ！としたイメージを精一杯形にしました。\n楽曲とイラスト共々楽しんでいただけると嬉しいですね。\n(hard)",
      },
      {
        artist: "MisoilePunch♪ feat.KIRARI(第10回目配信楽曲）",
        title: "SprrRush!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/10_05.mp3",
        comment:
          "初めまして！MisoilePunch♪作曲担当のみそみぃると申します。随分と前からの夢でしたがとうとうこの日が来たかと思うと未だに信じられません・・・！\nこの合作名義の読み方は「ミソイルパンチ」です。ミサイルもパンチも出しませんがミソイルパンチです。\n最初に曲の方向性とかの指針等を決めたのですが、「ボルテのオープニングテーマ(具体的には前作のMISSIONモードのオープニング)」を想定して作ろう！ということになりました。(まさにその通りに作詞してくれたポン恥♪・・・凄い)\nポン恥♪君がバンド曲の制作を得意にしている＆今回のボルテの爽快なイメージとマッチするということでこういったJPOP寄りの特徴に仕上げていきましたが、その上で、今回のテーマの爽やかさを意識するのは勿論、キャッチーさを意識したボーカルパートなど、バンドの曲調や歌いやすさなどをしっかり保ちつつも、裏で鳴らす16分音符を絡めた複雑なリズムのピアノやシンセパートで音ゲーに見合った曲作りを目指しました。\nまた、本楽曲では作曲だけでなく、ほんの少しだけシンセなどの音作りをしました。特に最初の逆再生ですが、物語の始まりを意識して頂けるようこだわったので是非聞いて頂けたらと思います。\nそして僕が作曲したものをポン恥♪君が編曲してくれたおかげで1600倍強くなってます！！！\n是非ノリノリに弾けてプレイして頂けたらなと思います！\nポン恥♪君とはちょうど1年前に出会いました。未熟で世間知らずな僕を、彼は受け止めてくれました。お互い作曲をまだ始めたばかりで、切磋琢磨して曲を作り合い、あーだこーだお互いの愚痴本音面白話をぶつけ合いながら、周りで応援して下さった方々や作曲仲間と一緒に成長し合っていきました。あの時ポン恥♪君を始めとする一緒に頑張り合って下さった方々と出会えてなかったらここまで来ることは絶対に出来なかったと強く思います。\nそして今回の初採用が彼との合作になって本当に良かったと思います。今まで支えて下さった全ての皆様、本当にありがとうございました。「またこれから」よろしくお願いします。\n（みそみぃる）\nこの度は楽曲採用ありがとうございます。MisoilePunch♪作詞・編曲担当のポン恥♪と申します。\n今回、SOUND VOLTEX IVの制作記念ということで、前作とは違う爽やかなイメージから「水面を走り抜ける少女」をテーマに作詞し、みそみぃる君からもらったmidiを自分なりにアレンジしつつ１つの作品に仕上げました。タイトルの「SprrRush!!」とは「splush」と「rush」を繋ぎ合わせた造語で、より爽やかさと疾走感を感じてもらえたら幸いです。\nみそみぃる君とはとある公募で落選組として知り合った中で、お互い「アーケードの音楽ゲームに楽曲提供する」ことが目標であり、それがこうして現実となっている今が大変嬉しく思います。\n...ちなみにですがボーカルは妹です。\nいざ、水平線(PUC)を目指して...！\n（ポン恥♪）\nはじめまして！ポン恥♪の妹、KIRARIといいます。\n普段はこういう速い曲は歌わないのですが、\n兄に頼まれ、苦手ながらも歌詞に込められたストーリーを一生懸命歌に込めました！\nぜひプレイしてください！\n（KIRARI）",
      },
      {
        artist: "Yooh(第9回目配信楽曲）",
        title: "Vigor",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/9_01.mp3",
        comment:
          "Yoohです。SOUND VOLTEX IV稼働おめでとうございます！\n常に進化し続けるボルテもついに4作目ということで、グラフィックやレイシスちゃんの衣装等、いろいろ新しくなってますが、\n今回はいつも自分がFLOORに送っているような楽曲のテイストとはちょっと変わって、EDMなTranceで勝負してみました。\nどのようにしてボルテとTranceを結びつけて楽曲を展開していくか、いろいろ試行錯誤しながら自分の中で新しいことに挑戦してみました。\n自分の楽曲をプレーしたことある人は、少し新鮮な感じがするかもしれません。ボルテIVの新鮮さと合わせて是非お楽しみください！",
      },
      {
        artist: "polysha(第9回目配信楽曲）",
        title: "The Golden Era",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/9_02.mp3",
        comment:
          "はじめまして。polyshaと申します。はじめましてじゃない方もありがとうございます。\n普段は主に小麦粉等を摂取して生活しております。\nSOUND VOLTEX IV HEAVENLY HAVEN 稼働おめでとうございます！ならびに採用ありがとうございます。\n思い返せばSDVXの公募がスタートした頃にはDTMの経験などは全くなかったのですが、こうして稼働開始をお祝いできる立場になれたことがとても嬉しいです。\n本楽曲はUK HARDCOREをベースにEUROBEAT,HYPERTECHNOなどの80～90年代要素を盛り込みワチャワチャさせた楽曲です。\n青くもなければ飛翔もしてないです、ホントにすみません。。。\nこの曲からタイトルにもありますGolden Eraを感じ取って楽しくプレイして頂けたら大変幸せです。\nよろしくお願いします！",
      },
      {
        artist: "Omnis(第8回目配信楽曲）",
        title: "Gaze ft. 紫崎 雪",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/8_01.mp3",
        comment:
          "はじめまして。Omnisと申します。この度は自分の曲が採用され大変嬉しく思っております。ありがとうございます。\n採用されました曲は爽やかで切ない歌詞、サウンドとなっており、それでいて綺麗なメロディ、軽快な曲になっております。\n皆様の心に残る、お気に入りの一曲になることを願いつつ、是非楽しくプレイして頂けたらと思います。\n以上、Omnisでした(=ﾟωﾟ)ﾉ",
      },
      {
        artist: "udouddo&VALLEYSTONE(第8回目配信楽曲）",
        title: "Junk Mania",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/8_02.mp3",
        comment:
          "皆様こんにちはudouddoです。\n今回はVALLEYSTONE君と最高に楽しい曲作りました!!!\nカーニバルに来たようなドンちゃん騒ぎ曲です、\nきっと気に入ってくれると思います。配信されたら是非プレイしまくって下さい。\n(udouddo)\nこんにちは！VALLEYSTONEです。\nudouddo君との合作です！とても楽しい楽曲になりました！\nそれぞれの持ち味が十分に発揮され上手く融合された楽曲になったと思います。\n楽しんでプレイして頂ければ嬉しいな～！\n是非プレイしてみてくださいね！\n(VALLEYSTONE)",
      },
      {
        artist: "nyankobrq(第7回目配信楽曲）",
        title: "VAMPIRE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_01.mp3",
        comment:
          "初めまして！ブレッドこと、nyankobrqです。\nこの度は採用して頂き、ありがとうございます！\n普段は鳥取で音楽作って、インターネットで公開しているだけなのですが、今回はインターネットの世界を飛び出してSOUND VOLTEXさんにお邪魔しちゃいます！\n鳥取とインターネットで育って来た音を是非ゲームでも楽しんで頂けたら嬉しいです！\nよろしくお願いします！",
      },
      {
        artist: "しらこいし(第7回目配信楽曲）",
        title: "Cepheus",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_02.mp3",
        comment:
          "！！！SOUND VOLTEX Ⅳ稼働おめでとうございます！！！\nギター弾きのしらこいしです。\nSDVXでは「Joyeuse」「Last Concerto」等の楽曲で演奏させて頂きましたがこの度、自分の楽曲がSDVXに収録頂くことになり感無量です…感謝。圧倒的感謝。\nCepheusとは、はくちょう座とカシオペア座に挟まれた地味な星座のことです。\nそんなジミーな星座が頑張って激しい光を放つ様をギターインストで精一杯表しました。\n（「セフェウス」と呼んであげてください。最近は「ケフェウス」と呼ぶみたいですが・・・）\n皆さんにプレイして頂くのが楽しみと同時に自分もプレイする日が待ちきれません。\n僕の小宇宙を感じてください！最高でーす！！！",
      },
      {
        artist: "フーリンキャットマーク～with 鳴紗(第7回目配信楽曲）",
        title: "クリスタルミサイル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_03.mp3",
        comment:
          "アキシブ系同人音楽サークルフーリンキャットマークです。\nこの度はSOUND VOLTEX IV 制作決定記念 オリジナル楽曲コンテストに採用して頂きありがとうございます！\n音ゲーへの投稿は初めてだったのですがRound TableやPIZZICATO FIVE等の渋谷系音楽が好きでそういう楽曲を普段から意識して作っているので今回この曲が採用されて本当に嬉しいです！\nとても可愛くてお洒落な声と曲です。\n午後の昼下がり坂道をスキップしながら歌いたくなるような曲なので是非楽しんで遊んでください！",
      },
      {
        artist: "a_hisa(第7回目配信楽曲）",
        title: "Smoked Turkey Rag",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_04.mp3",
        comment:
          "この度は採用頂きありがとうございます。この曲を含め3曲応募したのですが、正直予想外の曲が採用され驚いております…！\n自分の中でこの曲は「R&C(ラグタイム&カントリー)」という創作ジャンルを付けております。あとは曲で雰囲気を察して頂ければ幸いです。",
      },
      {
        artist: "technoplanet(第7回目配信楽曲）",
        title: "Inscape",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/7_05.mp3",
        comment:
          'はじめまして。遥か彼方からやってきたエレクトロニック・モンスターユニット"technoplanet"です。\nInscapeとは英国の詩人、ジェラード・マンリ・ホプキンスの造語で「内在する独自の本質」という意味です。\n壮大さと哀愁を引き立たせるストリングス、神々しいコーラス、緻密でスピーディなリズム。\nそれらをバックに自分の一番のアイデンティティであるテクニカルでエモーショナルなピアノをこれでもかと詰め込みました。\n激務の中どうにか時間を捻出して作った力作ですので是非ともお楽しみいただければ幸いです。\n（technoplanet）\nはじめまして。コーラスを担当させていただきましたkayumaiと申します。\nこの度は採用していただきありがとうございます！\n憧れのtechnoplanetさんとコラボさせていただき、大変光栄です。\nしかもこうして採用していただけるなんて夢のようです。\n今回自分の得意とする声楽的なコーラスで参加できて、こんなに嬉しいことはありません。\nとにかく楽曲が素晴らしいので、是非プレイしてみてください！\nどうぞよろしくお願いいたします。\n（kayumai）',
      },
      {
        artist: "borzy & 結月そら(第6回目配信楽曲）",
        title: "湖底遺跡のヴィダー・ハル",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/6_01.mp3",
        comment:
          "borzy(ボージー)です、編曲を担当しました。\n「零れる夢のレミニセンス」に続き、\n再び結月そらさんとの合作をご採用いただきありがとうございます！\n今回はストリングスのアレンジに更に深みを増し、\nファンタジックで少しジャジーで、\nHEAVENLY HAVENの青いイメージに合う音に仕上がってます！（と、勝手に思いました。）\n後半のリズム以外は落ち着いた曲ですが、気合いも時間もかけて作りましたので\nお楽しみに！また曲投稿頑張ります！\n(borzy)\n結月そらです。\n今回も前作に引き続き、作曲と作詞を担当しました。\nゆったりテンポで遊んでみるのも、\nたまには、いかがでしょうか？\n誰だって、\n知られたくないことのひとつやふたつ、\n心に抱えていて……。\nだけど、いざ心のドアをこじ開けられて、\n物知り顔の人などに、\nあれやこれやと要らぬ推測をされ、\n何故かそれで決めつけられてしまったり、\nその決めつけによって、\n勝手なキャラクター付けをされてしまったりして、\n全く違う自分が独り歩きすることがあります。\nそれは、歴史に眠る遺跡なども一緒かな、\nと感じたのです。\nそんなことを考えていた時に、作った歌です。\n(結月そら)",
      },
      {
        artist: "uma(第6回目配信楽曲）",
        title: "sink into the dream",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/6_02.mp3",
        comment:
          "HEAVENLY HAVENではお初になりますumaです。\nSOUND VOLTEX IVのテーマカラーが青色ということで自分なりの青さや水の心象を盛り込んだ、\nそんなサイバーさのあるピアノトランスとなっております。\n今回はモツさんから頂いたジャケットイメージを基に私が曲を作るという方法を行っております。\nですので、ジャケットと併せて本楽曲をお楽しみ頂けたらと思います。\nそれではどうぞ宜しくお願い致します。\n(uma)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：mottyie\n―――――― 夢へと沈む。\n深く。深く。蒼く、碧く深い其処へ。\n私の身体が朽ち果て、やがては其処へと沈んで往く。\n――――されど。\n例えこの瞳が。あの蒼い空を視る事が出来なくなっても。あの碧い水平線を映す事が出来なくなっても。\n例えこの耳が。あの人達の声を聴く事が出来なくなっても。\n私が。ワタシでなくなってしまっても――\nこの心の中で。あの苛烈で鮮明に焼き付いたこの想いだけは――\n決して消させたりはしない。\n――――私は沈む。夢へ夢へと沈む。\n(mottyie)",
      },
      {
        artist: "lapix(第5回目配信楽曲）",
        title: "Carry Me Away",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/5_01.mp3",
        comment:
          "どうも！lapixです。\n新しいことをする、新しいステージに向かう、そんなテーマを掲げつつ\n楽曲を制作しました。\nいつものハイテックとは打って変わって、BPM175のど真ん中ストレートで\n勝負しました。\n是非ともプレーしてみてくださいね！\n楽しんで頂けますと幸いです！",
      },
      {
        artist: "ローゼライト powered by mu-ray(第5回目配信楽曲）",
        title: "SO FLY ME TO YOU",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/5_02.mp3",
        comment:
          "初めまして、Fujiseです。\nFujise+RIKOのユニット「ローゼライト」として初めて取り組んだこの曲は\n羽ばたいて行く恋人への想いをRIKO嬢が切なく歌い上げる、ポップなチューンと仕上がりました。愛すれば飛べるんだと、そう思うのです。きっと。\n多忙の合間を縫って仕上げてくれたmu-ray氏の音は必聴です。\n是非プレイして体感して頂けたらと思います。\nこの度は採用頂き大変光栄に思っております。\n選出下さったスタッフ様、楽曲制作に協力下さった方々、\nそしてこれからプレイして下さる皆様、全ての方に謝意を表して。\n(Shuya Fujise)",
      },
      {
        artist: "アメツチ絵日記(第4回目配信楽曲）",
        title: "黎明スケッチブック",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_01.mp3",
        comment:
          'SOUND VOLTEXプレイヤーの皆様、初めまして！\nアメツチ絵日記の作曲作詞担当、本城ダイキチと申します。\nこの度は私達の楽曲を採用して下さいまして、本当に有難うございます。\n「アメツチ絵日記」は、本城ダイキチ（作曲）・\nsisi（ボーカル）・そら（ギター）による合作ユニットです。\nユニット名の通り世界のさまざまなキラキラを\n音楽で表現できるように活動を続けております。\n今回の「黎明スケッチブック」は、朝焼けに向かってまっすぐに空を翔けていくような\n神秘的できらきらした疾走感のあるイメージをもとにして、\n辛い事があっても、もっともっと良い明日に辿り着けるように、\nそんな願いを込めて作りました。\n力強く透明感のあるsisiさんのボーカル、そして\n瑞々しくも説得力のあるそらさんのギターのおかげで\n大変よい仕上がりになっていると思います。\nどうかどうか、何卒よろしくお願い致します！！\n（本城ダイキチ）\nアメツチ絵日記のギター担当、そらです。\nこういった形で表に出て発言するのはあまり得意ではないのですが…。\n一言で言うなれば、今回も、とても、とても、とっっっっても素敵な曲に仕上がっております！\nボーカル担当・sisiさんの透明感のある、空高く抜けていくような澄んだ歌声と、\n作詞作曲担当・本城ダイキチさん独特のきらびやかな音、ポップな世界観。\nそこに、ギターの演奏で彩りを加えさせて頂きました。\n楽しんでいただければ幸いです！\n（そら）\nボルテプレイヤーのみなさまこんにちは! シシという者でございます。\nアメツチ絵日記、うた担当です。\nこのたびは、「SDVX IV 制作決定記念 オリジナル楽曲コンテスト」から「黎明スケッチブック」がSOUND VOLTEX IVへ収録されることとなり、とてもとても嬉しく思っております。\nどうもありがとうございます!\nこの曲はわたしという感情の集合体、そのひとつひとつのなかから洗礼された"黎明スケッチブック"をあらわすものだけを選んでみなさんにこうなのー！！ってうったえかけるようにうたいました。要約すると、きらふあひっしにうたいました＼(>_<)／\nきら要素はいつも念頭にあるのですがふあ要素はINからのぴろろろーんってなる効果音(?)がアメツチマスコットキャラのダイキチさんが魔法をかけにお空からやってきたみたいでかわいかったからで、ひっしさはそらさんのギターソロへのバトンパスの箇所で二人のかっこいい間奏きいてほしいなぁって思ったのと単純にわたしがひっし！ひっし！！だから！！です。、！\nボルテ初収録だからみなさんに気に入ってもらえるかふあんだけど、曲を通じてすこしでもしあわせになってもらえたらこの上なくうれしい。\n作編曲の本城ダイキチさん、ギターのそらさん、最高に素敵で尊敬です。おなじアメツチのユニットのメンバーとしてむかえてもらって感激&感謝しかないです。。\n制作に関わってくれた方々、 そしてこれからプレイしていただける皆様には深く感謝いたします。\nこれからもみなさまに「黎明スケッチブック」が届きますよーに☆ミ\nいつか、ライブで歌えたらいいなっ(*^^*)♪\n（sisi）',
      },
      {
        artist: "すのうまん(第4回目配信楽曲）",
        title: "準備運動",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_02.mp3",
        comment:
          "よっ！オイラすのうまんってんだ、よろしくな！\n今日は身体が鈍っていて不安…？\nご安心下さい、そんな時この準備運動があなたの準備を運動してくれます。\nまずはウォーミングアップに準備運動を。\nあなたの運動を準備してくれるでしょう。\nリラックスして軽い気持ちでプレイして頂けたらコレ幸いです。\nBPMは182ですが、「イヤニ準備運動がしたいなあ、しかし…」の語呂合わせで覚えて頂ければと。\n2016年12月13日（火）13時52分　自室にて。（暖房の温度設定は21度）",
      },
      {
        artist: "あるふぁ(第4回目配信楽曲）",
        title: "fancy cake!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/4_03.mp3",
        comment:
          "採用頂きありがとうございます！そしてSOUND VOLTEX Ⅳ稼働おめでとうございます！\n青天井なボルテの疾走感に食らいついていけるような、糖分たっぷりの可愛らしい楽曲になりました。\n是非楽しんで頂ければと思います。よろしくお願いします！",
      },
      {
        artist: "ぽんきち(第3回目配信楽曲）",
        title: "ドリームエンド・サバイバー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/3_01.mp3",
        comment:
          "SOUND VOLTEXプレイヤーの皆様、初めまして。\nRTTF Recordsを中心に音楽活動をしております、ぽんきちと申します。\nこの度は私の楽曲を採用頂き、有難うございました。\nこの楽曲は今の私に出来ることの全てを込めて、\n「かっこよさ」や「強さ」を表現したものです。\n細かく変わる拍子や展開を多くするなどして、\n聴いてくださる方を飽きさせないように、また\n次はどうなるんだろうというドキドキハラハラ感を\n感じていただけるように、自分なりに精一杯の工夫を凝らしてみました。\n皆様に楽しんで頂けますと大変幸せです。\nどうぞ宜しくお願い致します！",
      },
      {
        artist: "庭師(第2回目配信楽曲）",
        title: "キュリオシティ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/2_01.mp3",
        comment:
          '火星から聞こえますでしょうか？\nこちらは ノベンバー インディア ウィスキー アルファ シエラー ホテル インディア、\n名前は庭師と申します。\nご採用頂きありがとうございます どうぞ。\nSOUND VOLTEX IV HEAVENLY HAVEN 稼働おめでとうございます。\n今作の爽やかな雰囲気に合わせて、\n火星探査ローバー・Curiosityにちなみ、\n火星の海を駆け抜け探索するイメージのアートコアを作りました。\n今後ボルテがさらに盛り上がることを心から願っています。\n今回最高のミキシング・マスタリングをして下さったRTTF RecordsのHyuji様、\n最高のジャケットを制作して下さったHaltquinZ♠♥♣♦のお二方に、\nこの場をお借りしてお礼申し上げます。\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：HaltquinZ♠♥♣♦ (ましろま+Rinne.6)\n--それは太陽系第四惑星にて、とある少女の物語--\nSOUND VOLTEX Ⅳ稼働おめでとうございます。『HaltquinZ♠♥♣♦』(ハルトクインズ)です。\n今回は庭師様の楽曲にてジャケットを担当しました。よろしくお願いします。\n火星からコンバンワ。いや、コンニチワ？\nイラストの担当させて頂きました、ましろまです。\n庭師さんやRinne.6さんから突然声をかけられ制作させて頂きました。\nにしても制作期間の間はイメージをなるべく崩さないように何度か\nラフを描き直した思い出があります。\nクロッキーにラフ画いっぱいあるのを見返すといつでも\n制作時の思い出が蘇りますね…。\n少女はもの寂しげなイメージにしていますが、\nそこまで寂しくならないように表情は穏やかにしています。\nこの場を頂かせてもらったお二方にはとても感謝しています。\n是非とも少女リオちゃんとキューちゃん(キュリオシティ)をよろしくです！\n(自分にも出来る難易度だったらいいなぁ！)\n(ましろま / HaltquinZ♠♥♣♦)\n火星からオハヨウサン。\nデザインとかロゴとかいろいろ担当しました、Rinne.6ことロクです。\nこの舞台にこのユニット揃って戻ってくることが出来て本当にうれしいです。\n製作途中のこの曲やテーマを聴かせて貰ったときに当時の自分は感銘を受け\n無理を言ってジャケットを描かせてくださいとお願いさせてもらったのを覚えてます。\n庭師さん、そして相方のましろまさんには本当に頭が上がりません。\n2人ともいろいろな我儘に答えて貰って本当にありがとうございました。\n報告の時に庭師さんがあまりに勿体ぶるので口から↓↓↓が出そうになりましたよ。本当に。\nキュリオシティをプレイして　このジャケットを見て\nそして、この少女リオに各々の物語を紡いでいただければと思います。\nみんなも火星に"行こうぜ"。\n(Rinne.6 / HaltquinZ♠♥♣♦)',
      },
      {
        artist: "Dj Grimoire(第2回目配信楽曲）",
        title: "Noisy Minority",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/2_02.mp3",
        comment:
          "こんにちは。Team GrimoireのDj Grimoireです。\nゴインゴイン鳴るタイプのガッバを収録させて頂きました。ありがとうございます。\nタイトルは”Noisy Minority”ですが\n新たな創作を始める人達が、このようなモノに潰されないようにとの応援ソングの意味合いもあります。\nそれでは皆さん　是非筐体の前で頭を振ってくださいね　チャオ！",
      },
      {
        artist: "Massive New Krew(第1回目配信楽曲）",
        title: "Dharma",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_01.mp3",
        comment:
          "初めまして！Massive New Krewと申します。今回はSDVX楽曲コンテストにハードスタイルを採用していただけることになりました。最近メジャーになりつつあるジャンルだと思うので、皆さんに楽しんでいただけると幸いです！",
      },
      {
        artist: "Ras(第1回目配信楽曲）",
        title: "JUGGLE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_02.mp3",
        comment:
          '皆様、はじめまして。Rasという名前で音楽を作っている人です。\nこの度は、採用頂き誠に有難うございました！！！\nサウンドボルテックスには今回で初の楽曲収録となりました。嬉しい！！\n普段は、自身で提唱しているジャンル"Techelectro"をメインに4つ打ち系の楽曲を制作しているのですが、\n今回採用していただいた楽曲「JUGGLE」はその中でも自分の集大成と言えるものでしたので\n自分の大好きなゲーム上で聴けること・プレイできることをを大変光栄に思います。これは夢か。\nJUGGLEを制作するときに強く意識したことは、今流行りのハイテックな感じを取り入れつつ\nそこに自分らしさと"キレ"をジャグリングのように混同させていく...というものでした。ハイテックはいいぞ。\nSDVXプレイヤーの皆様も、この楽曲をいっぱいプレイしまくってテッキーな気分になろう！！！\nおいそこの人、つまみを取ってジャグリングするな！！！\n以上、Rasでした。またこの場でご挨拶できるよう今後も頑張ります。',
      },
      {
        artist: "テヅカ feat. 大西あみみ(第1回目配信楽曲）",
        title: "水槽のクジラ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_03.mp3",
        comment:
          "こんばんは。テヅカと言います。\nとっても楽しいドンツーで爽やかな感じのナンバーが出来ました。\nKONAMIの音楽ゲームをやって育ったので、\n楽曲提供という形で関われて非常に嬉しいです。\n昔の自分が憧れたように、誰かの記憶に残るような楽曲になっていたら嬉しいと思います。　テヅカ\nおはようございます！大西あみみです！\nこの度は楽曲とイラストを採用して頂き、ありがとうございます。\n一緒に作品を作らせて頂いた2人とも尊敬する人たちでもありとても好きな人たちなので、一緒に作品に参加させていただくことができて嬉しく思います。やったね！\n楽曲をプレイした方にまた聴きたいな、またやりたいな、と1人でも多くの方に思ってもらえるような作品になっていてくれたらとっても嬉しいです！ 大西あみみ\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：△○□×\nこんにちは。△○□×でみわしいばって読みます。\nこの度は楽曲と共にご採用頂きありがとうございます。\nテヅカっぴもあみみっぴもすごく頑張って作品に取り組んでいたので、\n自分も頑張ってジャケット制作に取り組ませて頂きました。\n音ゲーへのイラスト採用、実は憧れだったので目標がひとつ叶ってすごく嬉しいです。\nありがとうございました！",
      },
      {
        artist: "Freezer feat.妃苺(第1回目配信楽曲）",
        title: "Chocolate Planet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_04.mp3",
        comment:
          "カカオ豆の生産量1位はコートジボワールです。\n(作曲: Freezer)\nはじめまして！妃苺です！\n今回歌唱の方をさせていただきました！\n素敵なゲームに採用していただきありがとうございます\n楽しく楽しく歌いましたので、皆様にも楽しんでもらえると嬉しいです！\n(ボーカル: 妃苺)\n採用ありがとうございます！歌詞を担当しましたmippaiです。\n気分はチョコチョコになれることうけあいですので、是非楽しんで下さい！\n(作詞: mippai)",
      },
      {
        artist: "Soleily(第1回目配信楽曲）",
        title: "Heavenly Adventure",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_05.mp3",
        comment:
          "この度は採用ありがとうございます。Soleilyです。\n今回の曲は展開を多くして体感時間を長くなるような工夫をしてみました。\n多分3連奏もするとお得感があると思います。なかったらごめんなさい。\nなのでデモの場所すごい悩みました。是非筐体でフルで聴いてください。\n宜しくお願い致します。\n最近はボーカル曲とかやってみたいなーとか思ってるので声かけてもらえたら嬉しいです。",
      },
      {
        artist: "Endorfin.(第1回目配信楽曲）",
        title: "Four Leaves",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_06.mp3",
        comment:
          "初めまして！\nEndorfin.の歌う方、藍月なくると申します。\nこの度はご採用、誠にありがとうございます！\nEndorfin.として今まで何曲か歌わせていただいてきた中で、\n「Four Leaves」は初めてスタジオで作曲のsky_deltaさんと一緒に収録した事もあり、私としても特に思い入れが深い曲です。\n何か始まりを予感させるような…さわやかで爽快感のある音に対して、私も真っ直ぐ、気持ちをぶつける様に歌わせていただきました。\n楽しんでプレイして下さると嬉しいです～！\n(藍月なくる)\nこんにちは、作った方のsky_deltaと申します。\n前々からEndorfin.でSOUND VOLTEXに進出したいしたいと思っていたところこちらのIV制作決定記念コンテストが開催されまして、\nしかも爽やかで青くて疾走感1600%で、ああもうこれはEndorfin.じゃないですかとなりまして意気込んで応募させて頂きました。\n採用誠にありがとうございます。\n自分自身思った以上になんと言いますか真っ直ぐな楽曲になってちょっとびっくりしてます。\n僕個人の感覚だと「ボルテっぽさ」には欠けるかなと思うのですが、良く言えばあまりボルテには無かった方向の楽曲なのではないかと思います。\n新しい風的な何かを吹かせることが出来たら幸いです。よろしくお願いします。\n(sky_delta)",
      },
      {
        artist: "Braflare(kanone&かぼちゃ)(第1回目配信楽曲）",
        title: "EDEN of TRUTH",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/20/result/sound/1_07.mp3",
        comment:
          "たまごかけごはんは「ミソミソソソミ」なのか「ソソソソソソミ」なのか\nイントネーションについての議論を夕日の河川敷で熱く議論しあった結果\nついに決着はつかずお互いを認めあってBraflareは結成されました。\nその辺の複雑なドラマを感じていただければ幸いです。どひゃあ。\n(かぼちゃ)\n今回はかぼちゃさんと何か面白い事をやってみたいと思い歌って頂きました。\nカッコイイ系なポップスでございます！ノリノリでプレイしてくださると幸いです！！\n私は「ミソミソソソミ」派です。\n(kanone)",
      },
    ],
  },
  {
    id: "original21",
    name: "The 6th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_21.jpg",
    sounds: [
      {
        artist: "はるなば(第5回目配信楽曲）",
        title: "Chaotic Romance",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_01.mp3",
        comment: "この度は誠に採用ありがとうございます。夕焼けが好きですとっても。\n（はるなば）",
      },
      {
        artist: "Getty vs. DJ DiA(第5回目配信楽曲）",
        title: "DropZ-Line-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_02.mp3",
        comment:
          "Gettyと申します。お久しぶりです。\n普段はKirara RecordsやLilium Recordsなどを中心にUK Hardcoreというジャンルの曲を作ってます。\n今年度もKAC楽曲コンテストで採用をいただけて感無量です！\n今回もDJ DiAがメインリフ等のメロディや声ネタ全般を担当し、僕がキックやベースなどの低音をやったり声ネタを刻んだりしてます。\nSDVXに収録されているPumpcoreシリーズも三作目ということで、前作たちよりもさらに凶悪なサウンドを追及しました。\nみんなベースドロップで頭悪くなっていこうな。\n（Getty）\n衒い無く掲げた、下界斯く哀れな上々嗜好。\n（DJ DiA）",
      },
      {
        artist: "Ellim Gnirps vs よみぃ(第5回目配信楽曲）",
        title: "Khionos TiARA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_03.mp3",
        comment:
          "荒々し過ぎるはず...しかしどこか魅了される。\n圧倒的激しさだけでなく何か美しいものが迫ってくるよう、キオノスティヴァス（雪崩）にはそんな印象を抱いてます。\nあの雪崩の不思議な表情を二人のピアノとリズムトリックに物語らせました。\n宜しくお願い致します。\n（よみぃ）\nWe had a blast, it was so much fun!\nPlease enjoy your SDVX IV!!!!\nBest wishes,\n（Ellim Gnirps）",
      },
      {
        artist: "立秋 feat.ちょこ(第5回目配信楽曲）",
        title: "おにいちゃんハイテック",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_04.mp3",
        comment:
          "どうも立秋です。\nおにいちゃんへの愛が溢れだしたらハイテックみたいになっていました。\n全国のハイテックおにいちゃんたちに届け！\n（立秋）\nこんにちわ、ちょこです！\n聞いてくださいこの曲すごいです！！！\nわたしの声がずっと流れていますよ！！！？\nおにぃちゃんも、おにぃちゃんじゃない人も、是非ぜひプレイしてみてほしいです！\nいってきますのちゅーーーーーー☆\n（ちょこ）",
      },
      {
        artist: "polysha+inusack(第5回目配信楽曲）",
        title: "Destruction & Qreation",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_05.mp3",
        comment:
          "こんにちは。polyshaといいます。\n今回、学校の友人でもあるinusack君と合作致しました。\ninusack君に作曲・展開の構成などをお願いし、私は全体の調整・編曲などを担当しました。\n破壊と創造をテーマにしたハードかつメロディックなDrum'n bassです。\nKAC向けのコンテストに合格するのは初めてであり、大変嬉しいです。よろしくお願いします。\n（polysha）\nはじめまして、inusackといいます。\n今回、私は作曲を担当させていただきました。\npolysha君から仮採用の連絡が来た日は大好きな焼いたお肉を食べました。\nこの楽曲を制作するにあたって2人でいろいろなことを、ほとんど毎日のように話し合いました。その成果が今、この結果に結びついたのだと私は思います。\n楽曲のテーマに倣って、僕もためしに何かぶっ壊してみようと思います。\nこの度は採用して頂き誠にありがとうございました。\n（inusack）",
      },
      {
        artist: "winddrums(第5回目配信楽曲）",
        title: "Goddess Bless You",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_06.mp3",
        comment:
          "Goddess＝女神＝レイシス、グレイス\n光と闇が交錯する二人からの試練というイメージで作らせていただきました。\n皆さまでしたらこの試練もきっと乗り越えられるでしょう。\n採用本当にありがとうございました！\n（winddrums）",
      },
      {
        artist: "まろん (IOSYS)(第5回目配信楽曲）",
        title: "PIERROT KNIfE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_07.mp3",
        comment:
          "皆様はじめまして！イオシスのまろんと申します！\nこの度は初採用いただきまして、誠にありがとうございます。大変恐縮です！！\nわたくし普段は「電波ソング」というジャンルで制作をしているのですが、\nとある結婚披露宴の帰り道、同じイオシスのARMって人から\n「まろんくんの “俺が考えたカッコ良いインスト曲” 聴いてみたい」\nと、言われた事がキッカケになり、この楽曲が出来ました。\n人生は、いつ何処から何が飛んでくるか分かりません。\n辛いときも、悲しいときも、嬉しいときも、ピエロみたいに笑って。\nそれでも最終的には上手くまとまって前に進んでいくものです。\n過去があるから今がある。そんな思いを、曲に詰め込んで制作しました。\n……ってヤだっ！恥ずかしっ！\nアタシったら真面目に語っちゃったワ！！！（誰だお前は）\n（　´_ゝ`）y─┛ 曲は語るもんじゃない、聴いてくれ。\nってハードヴォイルドにキメるスタンスが良いのにっ！\nヽ（`Д´）ﾉ ｳﾜｧｧｧﾝ！ァタシのバカバカっ！（だから誰だお前は）\nと、基本こんな感じでふざけている人なので、\nそんなテンションが曲から伝わればいいかナ?と思います（＾ω＾）\n楽しんで下さいね！！！バイバイ！\n（まろん (IOSYS)）",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第5回目配信楽曲）",
        title: "Xibercannon",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/5_08.mp3",
        comment:
          "Good to see you, guys!\n自分の曲が収録されるのはかれこれ3回目となりますありがとうございます。庭の方です。青い方とは去年のKACで出会い、なんと今年のKACで合作で作品を出すことができ、本当に嬉しい限りです。また、今回もミキシングにHyujiさんをお呼びさせて頂きました、ありがとうございます。フレッシュ！\n彼が粗方作り、僕が肉をつける形の合作でした。青い方は曲も想いも熱いので、涼しい顔をしていられませんでした。今回は彼に合わせて、まさに音楽ゲーーームって感じの曲を目指しました。\n結果こんなにも真っ直ぐな曲になりました。俺とお前の世紀の対決！生か死か！なーんちゃって！宜しくお願いします！\nEither you, or us.\n（庭師）\nプレイヤー同士が、己の強さ、テクニック、プライド、様々なものを懸けて本気で最強の座を獲りにゆくKACが、ずっと好きでした。ディスプレイの向こう側の戦士達に憧れ、ずっと応援していました。\nそんなKACの名を冠するコンテストに昨年に引き続き参加させて頂きましたこと、光栄と存じます。\n申し遅れました、隣の庭は青いの青い部分をやってるAoiといいます！よろしくお願いします。\n電子の世界のキャノン砲をテーマに、「ボルテでプレイするボス曲とはなんぞや？」を突き詰めた楽曲となります。ただひたすら直球の、他のどれでもないSOUND VOLTEXというゲームの楽曲を作ることが目標でした。この目標が達成できているかどうか、ぜひプレイしてご評価頂けたらと思います。\n無限の砲撃であのとき夢見た戦士達に挑みます。全世界のボルテ戦士の皆様、お手合わせ願います。\n（Aoi）",
      },
      {
        artist: "お月さま交響曲(第4回目配信楽曲）",
        title: "Apocrypha",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_01.mp3",
        comment:
          "この度は採用頂きありがとうございます。\nお月さま交響曲の代表兼作詞を担当致しました、大宮水那瀬と申します。\n今回の楽曲は、作編曲に342さん、ボーカルに上園千紗さん、ケィニさん、小鳥遊めぐみさん、西風Sさんをお招きしての総勢6名で制作致しました。\nタイトルの「Apocrypha」はギリシャ語で隠されたものを意味する単語です。\nHEAVENLY HAVENの明るくキラキラとした世界感の裏側が垣間見えるような、そんな楽曲になっていればいいなと思います。\n是非沢山プレイしていただけますと幸いです。\n（大宮水那瀬）\nこのたびは採用ありがとうございます。\n初めてKAC楽曲コンテストに応募させていただきました。\nまさか採用されるとは夢のようです…！\nSDVXのプレイヤーの皆さんに喜んでいただけるように\n変拍子、ポリリズム、音数、そして楽曲のテンション等\nチームお月さま交響曲の皆さんと全力投球で制作いたしました。\nぜひ楽しんでいただけたらと思います！\n（342）",
      },
      {
        artist: "Aoi Sumito a.k.a. あおいひと(第4回目配信楽曲）",
        title: "Fáfnir",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_02.mp3",
        comment:
          "こんにちは、Aoi Sumito a.k.a. あおいひとです。\nSDVXにはここなつプロデュースコンテストに続き二度目の採用を頂きました！\nそして今回、自身の夢であったガバというジャンルの楽曲での採用が叶い、\n嬉しい限りです。ありがとうございます！\n本楽曲のタイトルですが、「ファフニール」と読み\n北欧神話やゲルマン神話に登場するドラゴンになります。\n怒り狂い荒ぶる怪物の姿、そしてKAC決勝出場者やプレイヤーの皆様には\nその怪物に立ち向かい、打ち倒す英雄になってほしい…そんなことを\nイメージして制作しました。\n是非挑戦してみて下さい！",
      },
      {
        artist: "a_hisa vs KV.S&はらたま(第4回目配信楽曲）",
        title: "獅子奮迅",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_03.mp3",
        comment:
          "公募〆約1週間前にKV氏よりコラボ2弾やろうぜと来たのですが、\nソロならまだしもコラボだと時間的にいくらなんでも無理やろ～と流したんですが。\nその翌日くらいにフルコーラスを2人に送るという無茶振りをしました。\n（a_hisa）\nボルテでは初めまして、うさぎ界代表です。\na_hisa氏に無茶振りをしたら見事なラフが来たので\nベースとかドラムとか展開とか華麗に仕上げました。凄い！！\n急なお話でしたがお二人にはとても感謝しています！！\n私も忍ばずに大胆に生きていこうと思います。\n（KV.S）\nチワワです。\nイヨォー！！に合わせて精一杯吠えました。\nかなり短い期間でしたがとても良い作品になったと思いますので\nぜひプレイしてみてくださいませ！\n（心の声：どうしてお二人の作品はこうも弾くのが難しいのでしょう…)\n（はらたま）",
      },
      {
        artist: "ikaruga_nex fw.tcheb(第4回目配信楽曲）",
        title: "Spirit of the Beast",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_04.mp3",
        comment:
          "どうもです。ikaruga_nexです\n『KACっぽい壮大な曲は他の人が作るだろうから、今回は熱いテクパラやってみてえ』\nとよくわからないことを思っていたところ、\ntchebさんから「1フレーズ分ですがこれで１曲作れますか」と\nそれはもうかっこいいフレーズをいただきましたので、\nそのフレーズを私なりに魔改造しつつ、攻撃的な音をマシマシにして、\n音ができた勢いでイントロアウトロブレイクサビを全て作った結果、こうなりました。\n最初やってみたいと思っていた要素が全てぶち込めたので私は満足です。\nさらには作る過程でありがたいアドバイスをくださったので\ntchebさんには頭が上がりませんね！！！\n曲のほうですが、冒頭でも話した通りテクパラ＋J-coreです\nやっぱりKACみたいな勝負の醍醐味はといえば己のプライドをかけたサシでのバトル。\n磨き上げた技術とリスキーな博打、そして牙をむき出しにした本能・魂のぶつかり合い。\n下品ですがやっぱりそういうのは見ていて面白いです。\nですのでそんな勝負事に合うジャンルといったらテクパラ・デステクノだろうと。\nそんなわけで深夜の峠を車2台がギャギャギャーとドリフトしてそうな曲にしました。\n人生は勝負の連続。常に猛獣が如く魂を輝かして生きたいですねえ。。\nP.S 展開の仕方のアドバイスをくれたモリあつさんにこの場を借りて感謝を。。\n(ikaruga_nex)\nお久しぶりです、tchebです。\n今回も主にメロディでお手伝いさせていただきました。\n僕だけではこのメロディをカッコ良く昇華させることができなかったので、\nikaruga_nexさんの手でこのように仕上げていただいたことに感謝しています。\n(tcheb)",
      },
      {
        artist: "モリモリあつし(第4回目配信楽曲）",
        title: "Grand-Guignol",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/4_05.mp3",
        comment:
          'いつも大変お世話になっております、モリモリあつしです。\nこの度はThe 6th KACオリジナル楽曲コンテストに採用いただき、誠にありがとうございます。\nThe 5th KACオリジナル楽曲コンテスト以降の楽曲公募ではボーカル、ジャケットのような自分だけでは絶対に表現できないものを除き、原則として「モリモリあつし」と単独名義で表記されている楽曲にて採用を頂くことを目標としておりましたので、誉れでございます。\n機械仕掛けの円舞曲は、キコキコと。\n"禁断"に手を差し伸べる時、彼女は―――。',
      },
      {
        artist: "古屋直雪(第3回目配信楽曲）",
        title: "rhythmology study",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_01.mp3",
        comment:
          "サウンドボルテックスでは初めまして。古屋直雪と申します。\nこうしてこの場でご挨拶できることが大変嬉しいです。\n悲喜交々綴りたい思いはありますが、ここでは秘めておくこととします。\nさて、今回制作させていただいた楽曲は、\nThe 6th KACに向けたものということで高難易度になるべき\n楽曲というのが一つの命題であったとは思うのですが、\n高速BPMで超絶技巧な楽曲を作るのは苦手なので、\nまさにタイトル通り「リズム」を捻った曲となりました。\nゲーム性と音楽性をいかに両立できるかで苦心した部分も多いので、\nプレイしてよし、聴いてよしな楽曲となっていれば幸いです。\nそれではrhythmology studyを何卒宜しくお願い致します。\n※rhythmのスペルは難しいですが、これを機に覚えてくださいね。",
      },
      {
        artist: "yaseta + Hidra-Xjeil(第3回目配信楽曲）",
        title: "JUNKIE FLAVOR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_02.mp3",
        comment:
          "お世話になっております。yasetaです。\nおいしいものは体に悪く、体に悪いものは大抵おいしいものです。\n程よいところを見つけていきたいものですね。\n(yaseta)\nHidra-Xjeilです。お久しぶりです。\nおいしいものってついつい食べ過ぎてしまったりしますよね。\nこの曲にもおいしいポイントを沢山作ったので\n胃もたれ等には気をつけながらプレーしていただけると幸いです。\n(Hidra-Xjeil)",
      },
      {
        artist: "kanone(第3回目配信楽曲）",
        title: "Legendary Road",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_03.mp3",
        comment:
          "The 6th KAC楽曲コンテスト、採用ありがとうございます。kanoneです。\nこちらの楽曲は「KACの始まりから終わり」をイメージし、\n制作致しました。\n高速BPMの中にある「臨場感」と、\nこの楽曲の中にある「多幸感」を感じて頂ければ幸いです。\nなにとぞ、よろしくお願いいたします。",
      },
      {
        artist: "Ancraft(第3回目配信楽曲）",
        title: "Game Over",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_04.mp3",
        comment:
          "SDVXでは初めまして、Ancraftです。今回はゲームサウンド的アプローチを加えつつ、グリッチやダブのテイストを含んだ曲に仕上げました。\n収録された際にはプレイしに行こうと決めているのですが、SDVXは不得手なので、自分の曲でGame Overにならぬよう、今から特訓しようかなぁと考えながらこのコメントを書いています。\nやっぱりEXHでスタイリッシュに決めたいですね！",
      },
      {
        artist: "Jun Kuroda(第3回目配信楽曲）",
        title: "dreamin' of u",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/3_05.mp3",
        comment:
          "この度はSOUND VOLTEXへの採用、誠に有難う御座います。\n未だ見ぬ何かを夢見ている時って、一番楽しい気がします。",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第2回目配信楽曲）",
        title: "Gamerz FestivaL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_01.mp3",
        comment:
          "勝ちへの衝動を　想像以上を\n全世界につきつけろ！！\n壁は高いほど　ぶっ壊したくなる性分\nさあゴングをならせ！！\n研ぎ澄ます感覚が\n指に血を巡らせる\n胸を焼き切るような\n緊張がエンジン吹かす\n聞き慣れた音楽と　無骨な硬貨(コイン)に\n願掛け済ませたら　準備OK\n決意を青空(そら)へと！！\n遠い昔に憧れた　その技に理想に――\n「どれだけ俺は　迫れたか？　追いつけたか？　追い越せたのか？！」\n勝ちへの衝動を　想像以上を\n全世界につきつけろ！！\n壁は高いほど　ぶっ壊したくなる性分\nその手で栄光を掴みとれ！！\n譲れない　曲げられない　想い抱いて\n登りつめ　たどり着き\n咆　哮　轟　音\n嬉しさも　悔しさも　楽しさも　全部背負って\n今はただ　己に\n打ち勝て！！！\nその腕はまだ動くだろ！？\n一つでも多く叩きこめ！！\n勝ちへの衝動を！！！！\n――歌詞にすべてをこめた。それ以上の言葉はいらない。\n（cosMo＠暴走P）\n「Gamerz FestivaL」歌唱担当、syuri22と申します。\n猛々しく咆哮……もとい一生懸命歌いました。ティン(ゴングの音)！\n想いは歌に音にもっちりつまっているので蛇足にはなりますが、祭典とその瞬間-とき-を愛するプレイヤーズの曲、感じていただけたら幸いです。\nマツリダマツリダー！駆け抜けろ！ゲーマーズ！！フェスティバル！！！ティン(ゴングの音)！\n（syuri22）",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "Sailing Force",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_02.mp3",
        comment:
          '"Sailing Force"という曲名には『漕ぎだす力』という意味を込めています。\n人の力というのは作為的なものです。\nそれは時に大自然のエネルギーよりも強く、大きな影響を及ぼすことがあります。\nそういった人の力でしか到達できない場所、即ち"GRAVITY WARS"を乗り越えたレイシスちゃん達だからこそ辿り着ける"HEAVENLY HAVEN"へと『漕ぎだす力』を表現したいと思いました。\nまた、専門的な話になりますがこの曲は"ドミナントで始まりドミナントで終わる曲"となっています。\n"ドミナント"とはつまり"解決へと向かう音"のことで、SOUND VOLTEXがIIIからIVへと移り変わってゆく中での"繋ぎ"の役割を果たせればいいなという想いも込めています。\n人生とは航海のようなものです。\n「この先どんな荒波が来てもきっと私たちなら大丈夫」\nそんな未来を見据えた"繋ぎ"の曲を楽しんでもらえたら幸いです。\nボルテを通してまた作品を出せることを心より嬉しく思います。\nありがとうございました！\nぺのれり',
      },
      {
        artist: "かねこちはる(第2回目配信楽曲）",
        title: "iLLness LiLin",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_03.mp3",
        comment:
          "誠に凌ぎよい時節となりました。\n日頃はご無沙汰のみ致しております。\niLLness LiLin、末長くご愛顧頂けると嬉しいです。\n今後ともご指導ご鞭撻の程宜しくお願い申し上げます。かねこちはる",
      },
      {
        artist: "かめりあ feat. ななひら(第2回目配信楽曲）",
        title: "超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_04.mp3",
        comment:
          "ご採用ありがとうございます！\nそしてすみません。\n毎度毎度大変お騒がせしております。かめりあです。\n長い間「『スピードスター・かなで』って語呂良いよなァ」と思っていて、アイデア帳にこれが書いてあったのですが、自分如きがかなでちゃんの名を冠すのは些か烏滸がましいかな…としばらく眠らせていました。\nとそんな所に、昨年(2016)3月に行われた「BEMANI NEW FACEコンテスト」のボーカル部門の合格者発表があり、ななひらさんが見事（？）かなで賞（？）を獲得（特別参加賞とのことです）されたということで、おっぱげつつもこれはやるしかないという事で実行に踏み切った次第です。\n楽曲についてはタイトルから何となく察して（悪い予感）くれているかと思いますが、スピード（速度のことです）スター（星のことです）ですから、とんでもなく速い曲を作りました。\nとんでもなく速いといえばそう、スピードコア！スピードコアといえば勿論、速い…！\nそして電波ソングをバシッと合わせて、ボーカルはもちろんかなでちゃん賞のななひらさん！\n結構とんでもなく速いのでしっかりついてきて下さいね。\n色々書いてしまいましたが、また今年も皆さんとぶつかり合えるのを楽しみにしています。\nどうぞお手柔らかに。\n（かめりあ）\nこの度はご採用ありがとうございます。\n今回もボーカルを担当させていただきました、ななひらです。\nタイトルに遂にかなでさんのお名前が入ってしまいましたが、寛容なかなでさんならきっと許してくれるかなと思います。\nかなでさん、いつもお世話になっております。いつかお会いしたいですね。\n楽曲のことについてはかめりあさんがとても丁寧に解説してくださっているので、大体お察しの通りの内容になっているかと思います。\nとんでもないではすまない速さでしたが、置いていかれないように必至で、でも楽しく歌わせていただきました！\n個人的にはサビ後セリフ裏のセリフ（みたいなもの）がお気に入りです。\n聞き取っている場合ではない箇所かもしれませんが、余裕ができたらそちらにも注目していただけると大変恐縮でございます。\nそれでは皆様、スピード違反にはお気をつけて！\n(ななひら）",
      },
      {
        artist: "BlackY(第2回目配信楽曲）",
        title: "ΩVERSOUL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/2_05.mp3",
        comment:
          "BlackYです。ありがとうございます。\n今年も闘いの季節が来ましたね。\nKAC楽曲コンテストではいつも速くて速い曲を作っていたのですが今回はドッとBPMを落としてみました。これもまた魂。\nオーバーソウルしていきましょう。\nとてもきれいなあの子も笑ってくれるはずです。",
      },
      {
        artist: "Lite Show Magic(第1回目配信楽曲）",
        title: "Make Magic",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_01.mp3",
        comment:
          "Lite Show MagicのCの文字と広報担当のC-Showです。\nお互いずっと曲を作りたかったのですがタイミングが合わず、\n今回は実に数年越しの新曲となりました。合作の方法は数年前から変わらず僕が\n「こんな感じだっけ」と下地を作ってt+pazoliteさんに魔法をかけて貰いました。\nKACはユーザー・プレイヤー・そして僕らクリエイターをまるで魔法にかけたかのように魅了し、見る人を深く引き込む最高のエンターテインメントです。\nこの楽曲もKACのように人々を魅了する作品を目指して制作してみました。\n「絶望の中に僅かな希望。」そんな曲です。\n(C-Show)\nLite Show MagicのLです。\n言いたいことはだいたいザッキーことC-Showが言ってくれたので、簡潔に行きます。\n全力でやりました。なので全力で立ち向かって下さい。\n挑戦レベルの人も、適正の人も、楽々できる人も、是非全力で、\n立ち向かって下さい。\n(t+pazolite)",
      },
      {
        artist: "かゆき(第1回目配信楽曲）",
        title: "infinite:youniverse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_02.mp3",
        comment:
          "採用頂きましてありがとうございます。\n本楽曲のテーマは、「プレイヤーの中に広がる無限の世界・可能性」です。\nKAC決勝という舞台に立つため、数々のプレイヤーが汗と涙を流し、全力で競い合う中で、限界という壁を乗り越え、より強くより高みへと成長していく姿…毎年、本当に感動しています。\nそんな美しいプレイヤー達を心から讃えたいという思いを込めて、この曲を作りました。\nどうぞ、よろしくお願い致します。\n皆様に幸あれ。\n（かゆき）",
      },
      {
        artist: "カモメサノエレクトリックオーケストラ(第1回目配信楽曲）",
        title: "HE4VEN ～天国へようこそ～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_03.mp3",
        comment: "いま見ているこの世界が「そこ」かもしれないじゃないですか",
      },
      {
        artist: "MisoilePunch♪ ～タケノコ添え～(第1回目配信楽曲）",
        title: "Fin.ArcDeaR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_04.mp3",
        comment:
          "今回制作した楽曲「Fin.ArcDeaR(フィナルカディア)」は”Finale”、”Arcana”、”Dear”の三単語を繋ぎ合わせた造語です。”Arcana(神秘的)”という単語の中にある”Arc”が「虹」を表すことから、「最終章を彩る者たちへ」という意味合いでネーミングしました。また、本楽曲は三人合作で、三人ともFLOOR新米勢ですが各々の良さを十分に発揮できたと思います。\n以下、各制作者コメントになります。\nどうも、今回全体的な作曲を致しましたみそみぃるです！！今回今までずっっっっと憧れだった受賞ということで言葉がまるで出てこないくらい光栄かつ喜びに満ちております！！\n今回この3人で「新米なんて関係ない！最優秀絶対取るぞ！」という意気込みで合作がスタートしました。\n「最優秀らしさ」ということで「会場の盛り上がり」「高難易度にしやすい（許されない）楽曲」というポイントをしっかり意識しつつ「自分だから作れるメロディ」というのを創り上げていきました。（「ここ絶対error連発するだろ」とか考えながら作ったので多分この3人で一番許されないのは僕です。反省はしていない）\nそしてこの曲の終わり方ですが、「真のフィナーレを飾るのは、この曲でなくファイナリスト自身なんだ！」という思いを込めてわざとまだ続きがあるように思わせるものにしています。このコメントが掲載されている頃には本当の意味でこの曲が完成されていると思います。\n3人の、力とそれぞれのKACや音ゲーに対する想いが合わさり、本当に最高の1曲に仕上がったと思います！！よろしくお願いします！！！「虹の最終楽章」に賭けたこの想い！響け！！！！！\n（みそみぃる）\n全体編曲を担当しました、ポン恥♪です。\n編曲するにあたって「最優秀っぽさ」「ボルテIVに合う爽やかさ」をポイントにし、”落とすところ”、”盛り上げるところ”をしっかりと分けることでキャッチーなメロディーを最大限に目立たせました。みそが送ってくる最高にキャッチーで無茶ぶりな（笑）ピアノmidiをどの楽器でどのように表現するか、かなり試行錯誤しました。ドラムの打ち込みにも躓いてしまい、仲の良いタケノコさんにブン投げたところカッコよすぎるトラックが送られてきて、その後はパズルを埋めるかのように進み、完成した時には満場一致の「フィナルカはいいぞ。」でした。\nボルテを彩るプレイヤーたちへ書いた曲な訳ですが、いざ聴き直してみると彩っているのはプレイヤーだけでなく、コンポーザーである自分たちもなんだ、と心に響く何かがあります。\nそんな楽曲、Fin.ArcDeaRです。是非お楽しみください。\nボルテを彩る全ての方々へ、響け！！！！！\n（ポン恥♪）\nリズム隊アレンジの担当と一部裏メロ提案をしました、タケノコ少年です。\nひょんな事からこのメンバーでの合作が決まったわけですが、\nお二人の邪魔をせず自分のいいところを出し切れたと思います。\nリズムの要ともなるドラムにおいて、いかにして派手なところを派手にできるかを考え\n最良のアレンジをしました。ポン恥♪さんも言っていますがパズルを埋めるかのように\n制作が進んでいき、納得のできる最高の楽曲が完成しました。\n最高の終楽章、聴けばわかります、響け！！！！！\n（タケノコ少年）",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "Immortal saga",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/21/result/sound/1_05.mp3",
        comment:
          "この度は採用頂きありがとうございます。一昨年、去年と続いて今年も採用されて夢のようです。\n楽しんでプレイして頂ければ幸いです。",
      },
    ],
  },
  {
    id: "original22",
    name: "The 7th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_22.jpg",
    sounds: [
      {
        artist: "winddrums vs cosMo(第9回目配信楽曲）",
        title: "Divine's or Deal",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_01.mp3",
        comment:
          'この度は採用ありがとうございます。\n自分の思い描く最終決戦のテーマを、cosMo先生に投げたら物凄い勢いで素敵なメロディが投げ返されてきて。。。\nまさに作っている僕達二人も、合作とは云えど""戦いあった""楽曲になりました。\n皆さんにこの二人分の""神の試練""、楽しんで頂けましたら幸いです。\n本当にありがとうございました！\n(winddrums)\n今回の合作では主に楽曲の後半パートを担当しました、cosMoです。\n合作することが決まってから程なくして、winddrums氏から50秒ほどのすごいヤバイかっこいい壮大な前半パートのデモ音源が送られてきて、これは強い音楽になるぞと確信しました。\n僕は残りの後半、全力をもってして大味なメロディを振り回しました。振り回しすぎて気分は既にKAC決勝当日といったカンジでした。\nというわけで二人分の""神の試練""どうか受けとってくだされい！！！\n(cosMo＠暴走P)',
      },
      {
        artist: "かねこちはる(第9回目配信楽曲）",
        title: "ファイナルレター",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_02.mp3",
        comment:
          "炉辺の懐かしい時節となりました。\n日頃はご無沙汰のみ致しております。\n今後ともご指導ご鞭撻の程宜しくお願い申し上げます。\n(かねこちはる)",
      },
      {
        artist: "溝口ゆうま feat. みこ♡なち♡あい(第9回目配信楽曲）",
        title: "ブチ上げ候！現代忍者三姉妹",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_03.mp3",
        comment:
          "採用有難うございます　溝口ゆうまです。\n耐え忍ぶ現代社会の皆様！たまにはハメを外して下さい！という訳で\nリアルでも曲でも現代忍者の我々4人組が血の涙を流しながら作り上げました…\nみこなちあいの曲がどんどん酷い内容になっていくのですがそろそろ怒られそうです！！\n皆優しい（ここ大事）からきっと大丈夫だよね！　＼ﾋﾟﾝﾎﾟｰﾝ／　おや？誰か来たようだ？\n(溝口ゆうま：帰宅は常に午前様)\n現代忍者三姉妹採用ありがとうございます！\nお忍びの方も忍ぶ気などない方も！是非たくさん遊んでください♡\n(miko：現代忍者三女担当）\n採用ありがとうございます！日々の疲れはこれで解消！\n楽しい曲になりました☆一緒にさぁさぁ、いざ参る！\n(nachi：現代忍者長女担当)\n採用有難う御座います。\n現代忍者の次女、大瀬良あいです。\n現代忍者って何だろう？と思った方は歌詞をよく聴いて頂けたら解ります。きっと涙が出てしまいますよ！\n是非プレイしてみて下さいませ(*≧∀≦*)\n(大瀬良あい：現代忍者次女担当)",
      },
      {
        artist: "NA7(第9回目配信楽曲）",
        title: "Musha Vibration",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/9_04.mp3",
        comment:
          "ボルテプレイヤーの皆の者お初にお目にかかるでござる、NA7と申す者でござる。\nこの度のけぇえぃしぃこんてすとなるものの合格、まことにめでたすぎて我が身がバイブレーションしているでござる。\n武者震い、それは真なる武者の証。しかしボルテという正確さが求められる遊戯では不利になると考えたのでござる。\nそこで武者震いしながら遊戯したら良き点数になりそうな曲を作ったのでござる！\nという訳なので皆の者もバイブレーションしながら遊戯して良き点数を出してほしいでござる。\nムシャムシャ～！\n(NA7)",
      },
      {
        artist: "影虎。(第8回目配信楽曲）",
        title: "No way",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_01.mp3",
        comment:
          "この度は採用して頂きありがとうございます！影虎。です。\nKACということで自分も楽曲面で思い切った勝負をしてみようと思い、Hi-tech Full onで攻めてみました。\nBPMも160とHi-tech Full onではかなり早めに設定し、音ゲーに合うように様々な展開や音をこれでもかと詰め込んだ曲となっています。\n今までの採用楽曲とは全く傾向の異なる、アッパーな4つ打ちサウンドをお楽しみ頂ければ幸いです！\n宜しくお願い致します！\n(影虎。)",
      },
      {
        artist: "Aoi vs. r0y(第8回目配信楽曲）",
        title: "Coldlapse",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_02.mp3",
        comment:
          "ボルテプレイヤーの皆様、お久しぶりです。Aoiと申します。\nKACの名を冠するこのコンテストにまた名を連ねることができ、大変光栄に思います。\n元々「別の島」にいた私とr0yさんですが、ボルテIVのテーマよろしく航海を経て2人でここまで辿り着くことができました。\n今回は、大きな氷山が少しづつ崩壊してゆくような冷たさと緊迫感みたいなものをモチーフにして、ハイブリッドでボルテライクな楽曲を作りました。\n今まで僕が関わった曲とは少し違う雰囲気ですが、これもまたr0yさんと僕なりにKACを強く意識して制作した楽曲です。\nこの曲を溶かしてしまうくらいの熱いプレイをして頂けたなら、こんなに嬉しいことはございません。\n(Aoi)\nr0yと申します。\nこの度は採用頂き、本当にありがとうございます！\nAoiさんに合作のお誘いを受け、楽しく作曲させて頂きました。\n曲名「Coldlapse」は「コールドラプス」と読み、「Cold」と「Collapse」 を合わせた造語となっております。\n楽曲を聴いて頂ければ、その雰囲気を感じ取ってもらえるかと思います。\nボルテでプレイするのにピッタリの楽曲に仕上がったと思いますので、ぜひプレイして下さいませ！\n(r0y)",
      },
      {
        artist: "Ayato × sak × 田島千種(第8回目配信楽曲）",
        title: "Beyond the BLUE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_03.mp3",
        comment:
          "この度は採用をいただきありがとうございました。\nFLOORは今回が初挑戦でしたが、採用いただきとても光栄です。\n壮大で癒し系な曲が好きなのですが、一方でジャズみたいなおしゃれ感も好きなので、\nそういった趣味全開で編曲 (一部作曲)、mixなどやらせて頂きました。ぴあのひきました。\n3人の世界観がうまくぶつかり合った曲に仕上がっております！\nこの曲は船出、旅路というものをイメージしています。皆様は旅行に行きたい場所はありますでしょうか？\n僕は「アドリア海の真珠」と呼ばれる場所にでも行きたい気分です。\nまぶしいです！空の青さがまぶしいです！\n(Ayato)\nはじめまして、sakと申します！主に作曲を担当しました～\nこの楽曲は“はやくない疾走感”をテーマに作成しました。\n6拍子をベースにしつつ比較的ゆったりとしたリズムを強調することで、音の数と速さで攻める楽曲たちとはまた違う疾走感が演出できているのではと思います。\n今回は光栄なことに楽曲という形でコンテストに参加させてしていただいたきました。\nKACは音ゲーをプレーする身として本当に憧れの場なので、いつかはプレイヤーとしても参加してみたいものです。\nすこしは強くなったでしょう？\n(sak)\nこの度は採用ありがとうございます！\n作詞とボーカルを担当しました、田島千種と申します。\nシンガーソングライターとして活動しているのですが、普段自分1人では作れないような曲を制作する事が出来ただけでも物凄く楽しかったのに、かつ採用して頂けるなんて本当に嬉しいです…！\n実際に配信されてプレイした時、下手過ぎて落ち込むのが目に見えてるので今の内に特訓頑張ります！！！！\n(田島千種)",
      },
      {
        artist: "Team&Dj Grimoire(第8回目配信楽曲）",
        title: "Akzeriyyuth",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/8_04.mp3",
        comment:
          "Team GrimoireとDj Grimoireです。\n本楽曲の楽曲名は\nAkzeriyyuth-アクゼリュスと読みます。\n楽しんでください。\n(Team&Dj Grimoire)",
      },
      {
        artist: "Yooh(第7回目配信楽曲）",
        title: "Dark Matter",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_01.mp3",
        comment:
          "こんにちは！Yoohです！採用ありがとうございます！\n今回は早いサイケデリックトランスです！\nボルテでは珍しく音数少な目でﾀﾞｰｸﾏﾀｰな感じなので、是非遊んでみてくださいね！\n(Yooh)",
      },
      {
        artist: "MisoilePunch♪ ~Take No Complete~(第7回目配信楽曲）",
        title: "Levier'n NābYss",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_02.mp3",
        comment:
          "今回制作した楽曲は、MisoilePunch♪ ～タケノコ添え～ではなく、MisoilePunch♪ ~Take No Complete~(ミソイルパンチ テイクノーコンプリート)として採用いただきました。\n曲名「Levier'n NābYss(レフィーアン ナーヴィス)」とは、Leviathan(海の悪魔) ＋ vier(4) ＆ Navis(船) ＋ abyss(混沌)、を繋ぎ合わせた造語となっています。\n「海の悪魔と混沌を彷徨いし船」という意味合いのネーミングです。\n(MisoilePunch♪ ~Take No Complete~)\nこんにちは！作曲を担当致しました！みそみぃると申します！\n「Fin.ArcDeaR」に続き、今回もKAC楽曲コンテストにて採用して頂いたことを大変喜ばしく思います。\n今回「今までのMisoilePunch♪のイメージを『POLICY BREAK』するような楽曲を作ろう！」という狙いのもと、KACの舞台に相応しいような「海や空が崩れ落ちていく」という、ボスボスしいダークなテーマで作らせていただきました。\n襲いかかる荒波や海の悪魔、混沌に飲まれゆくボルテ海賊団の船、その中でもただひたすらに一筋の希望を見つめ、諦めず戦い続けるボルテキャラクターやプレイヤー達…！\nそんな世界観の楽曲です！\nそしていつもと違う名義はプレイヤーへ向けての「TRACK COMPLETEさせないぞ！」という私達からのメッセージです！\nこの海の明日はプレイヤー皆様の手にかかっています！！\nこの混沌の渦に全力で立ち向かって下さい！！\nよろしくお願い致します！！\n(みそみぃる)\n全体編曲を担当しました、ポン恥♪です。\n今までの「明るくて爽やか」なイメージを良い意味で覆し、みそみぃる君の考える世界観と奏でる旋律をタケノコ君の生ドラムで支えてもらい、多少不慣れながらも自分なりの解釈で編曲をし、「海の悪魔と混沌を彷徨いし船」と名付けました。\n嵐の前の妙な静寂や荒れ狂う海、迫りくる恐怖と立ち向かう勇気、自分が持つ全力以上を出させていただきました。\n是非プレイヤーの皆様も全力以上で挑んで頂けますよう、よろしくお願い致します！\n(ポン恥♪)\n採用ありがとうございます！生ドラムのアレンジをしましたタケノコ少年です。\n曲名である「海の悪魔と混沌を彷徨いし船」を全面的に押し出していけるよう、ちゃんとしつつ好き勝手させていただきました。\nTake No Completeの名の通り、TRACK COMPLETEさせないつもりで全力を出し尽くしました。\nそして今までのMisoilePunch♪ ～タケノコ添え～のイメージを払拭するような楽曲になっていると思います。\nぼくはこの曲大好きです。きっと気に入っていただけると思います！\nよろしくお願いします！\n(タケノコ少年)",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Justitia Gladius",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_03.mp3",
        comment:
          "こんにちは、kanoneです。\nこの度は採用誠にありがとうございます。\n今回もメタル系楽曲なのですが、前回のLegendary Roadの明るい路線とは打って変わってシリアス系です。\n「正義の剣を持って信念を貫く」を今回のテーマとして制作しました。\nまた今回BPM156で制作したんですが、メロディー系はともかくドラム隊が32分音符でdrrrrrrrrrr鳴ってるので実質BPM312かもしれません。\nよろしくどうぞ(^-^)/\n(kanone)",
      },
      {
        artist: "Verdammt(第7回目配信楽曲）",
        title: "ひとりぼっちの魔王",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_04.mp3",
        comment:
          "その少年には勇気がありませんでした。\n皆と一緒に遊びたいのに、声をかけることもできない。友達もできない。\n好きなことはといえば、公園で一人リコーダーを吹くこと。\nその理由の一つは、誰かに声をかけてもらいたかったから。\nしかし、その演奏が遠くの子供たちの耳に入ることはありませんでした。\n声をかけたのは、悪魔でした。\n『お前に全てを支配する力を与えてやる。これでお前も人気者だ。』\nそう語りかけられ、少年は邪悪な力を授かりました。\n僕にはもう怖いものなんて何も無い。一時はそう思えました。\nしかし、彼の邪悪な力は恐れられ、誰も近付こうとはしません。\n力を手にしても、彼は孤独のままでした。\n心が空っぽになりかけた時、ふと顔を上げると、自ら勇者と名乗る少年が彼に手を差し伸べ、微笑みながらこう言いました。\n「現れたな魔王、これ以上好きなようにはさせないぞ」\n(Verdammt)",
      },
      {
        artist: "梅干茶漬け(第7回目配信楽曲）",
        title: "ホワイトパレード",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/7_05.mp3",
        comment:
          "おいしゅ。「干」は抜かない「し」は足さない、梅干茶漬けです。\nいつぞやの大雪では長靴がすっぽり埋まって一人ではしゃいでました。\nそんな感じの曲です。何卒。\n(梅干茶漬け)",
      },
      {
        artist: "brz1128(第6回目配信楽曲）",
        title: "BLAZING_LAZER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/6_01.mp3",
        comment:
          "こんにちは～！brz1128です\n以前まではbrzだけの表記でしたがエゴサーチがしにくいのでTwitterのIDをそのまま名義にすることにしました\n今後ともよろしくお願いいたします\n今回は、以前採用していただいたWONDER_WOBBLERにRAVEの要素を入れ込んだような曲を作ってみました\nKACコンテストということで出場者の熱い闘志とか会場の盛り上がりをイメージしながら作りました\nプレーしていただいてなんとなくそんなニュアンスを感じ取っていただけたら幸いです\nよろしくお願いします！\n(brz1128)",
      },
      {
        artist: "Ironami(第6回目配信楽曲）",
        title: "Melty Sweets",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/6_02.mp3",
        comment:
          "初めまして、Ironamiと申します。\nこの度は採用ありがとうございます！\n可愛い感じや楽しい雰囲気をたくさん詰め込んだ、ポップな楽曲になっています。\n楽しんで頂けると幸いです！\n(Ironami)",
      },
      {
        artist: "pan(第5回目配信楽曲）",
        title: "MeteorGlow Aftermath",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_01.mp3",
        comment:
          "皆様初めまして！panと申します。\nこの度はSOUNDVOLTEXの楽曲コンテストに採用頂き誠にありがとうございます。\nBEMANIに自分の作品を収録して頂くのは長年の目標だったので、それが達成できた事にとても喜びを感じています。\n今回はKACオリジナル楽曲コンテストという事でしたので、演奏していて中々やりごたえのある譜面が出来る曲調を目指し、制作しました。\n配信された際は是非楽しんで遊んでいただけると嬉しいです。\n(pan)",
      },
      {
        artist: "零 -zero-(第5回目配信楽曲）",
        title: "Knights Assault",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_02.mp3",
        comment:
          "初めまして、あるいはお久しぶりです。零 -zero-といいます。IIのOur Faithリミックスぶりですね。\nKACという特別な場で、私としては初の単独名義での採用を頂けてとても嬉しく思います。\n勇猛果敢に楽曲に挑む「K」nightsであるプレイヤーの皆さんには、このTrackに全力の「A」ssaultをして頂きたく思います。\n皆さんが「C」rashしてしまうのか、それとも見事「C」ompleteしていくのか。\nどちらの結果であれ、それがあって初めて、私にとっての「KAC」になると思っています。\nクリエイターとプレイヤー、両者が居て成り立っているボルテのKACという戦場、楽しんでいきましょう。\n宜しくお願いします。\n(零 -zero-)",
      },
      {
        artist: "MasKaleido(第5回目配信楽曲）",
        title: "Gate of Atlantis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/5_03.mp3",
        comment:
          "MasKaleidoです。\nこの度は採用頂き、ありがとうございます。\nSDVX IVは海がモチーフのようですので、\nはるか昔、海底に沈んだとされる幻のアトランティス大陸を探して、\n大海原や深海を冒険するイメージを音楽で表現しました。\n何かを感じたり、楽しんでもらえたら嬉しいです。\n(MasKaleido)",
      },
      {
        artist: "BlackY(第4回目配信楽曲）",
        title: "LastΩmegA",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_01.mp3",
        comment:
          "己の限界を超えたその先には一体何があるのか。そこで何を感じるのか。\nそんな感じの曲です。何卒よろしくお願い致します。\n(BlackY)",
      },
      {
        artist: "こふ(第4回目配信楽曲）",
        title: "SUPER BUBBLE JOURNEY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_02.mp3",
        comment:
          "ボルテIVらしい清涼感のある曲が作りたいと考え、\nあわがプクプクしたりポヨポヨするイメージで曲を作ってみました。\n是非プレーして楽しんで頂けると嬉しいです！\n(こふ)",
      },
      {
        artist: "とろまる(第4回目配信楽曲）",
        title: "Blue Stream",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/4_03.mp3",
        comment:
          "とろまると申します。この度は採用いただき大変光栄でございます。\n曲は突き抜けるような青をイメージしたプログレッシブなジャズフュージョンです。\n自分にしか作れないボス曲を目指し、今までに培ってきた知識と好きな要素をひたすら詰め込みました。\nBPMが遅い分変拍子やテクニカルな音の動きが多めです。\n是非楽しんでプレイしていただければと思います。\n(とろまる)",
      },
      {
        artist: "Hidra-Xjeil(第3回目配信楽曲）",
        title: "Iridescent Clouds",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_01.mp3",
        comment:
          "Hidra-Xjeilです。\n前回は合作、今回は単独と違う部分がありますがKAC楽曲コンテスト連続採用となりました。\n試聴していただければどういう曲か一発で分かると思います。\n突き抜けるような爽やかなフレーズと展開から色鮮やかな雲を感じ取っていただけると嬉しいです。\n(Hidra-Xjeil)",
      },
      {
        artist: "P*Light(第3回目配信楽曲）",
        title: "SAtAN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_02.mp3",
        comment:
          "ボルテではお久しぶりです。P*Lightです。\nボス曲ということで、とにかく強そうな曲がいいなーと思い、\nもうそうなったらサタンだろ！という感じで\nタイトルから楽曲のイメージを広げていきました。\nサタンは大体どのゲームでも強キャラなので、\nきっとこのボルテでも強めだと思います。\n(P*Light)",
      },
      {
        artist: "かゆき(第3回目配信楽曲）",
        title: "Divine's:Bugscript",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/3_03.mp3",
        comment: "抗え\n(かゆき)",
      },
      {
        artist: "かめりあ(第2回目配信楽曲）",
        title: "Xéroa",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_02.mp3",
        comment:
          'ご採用ありがとうございます。\nそして他の採用者の皆さん、KACで勝ち上がったプレイヤーの皆さんおめでとうございます！\nかめりあと申します。\n個人的な思い込みではあるのですが、正直KACのボルテ楽曲コンテストで二冠があるとは思っていませんでした。\nなので「そふらんちゃん」あたりから、KACコンテストではニッチというか、誰もやらなさそうな所をガシガシ攻めて、ボルテの雰囲気に『味』が出ればいいな（正しくは『多様性』みたいな感じですかね）と思っていたのですが、\n前回のKACでかねこちはるさんが二冠を達成されたのを会場で見ていて、\n「あぁそっか、自分の思い込みだったなぁ」とうっすら感じたのを覚えています。\nそれなら来年はストレートでボスな、速くて強くてヤバい曲を送ってみようかな、とこの一年間アイデアをずっと練っておりました。\nここ数年の最優秀賞受賞曲のシンフォニックな要素を盛りこみつつ、これまでの常識を覆す速さで原点回帰なボス曲、\nそして新たなステージを思わせる楽曲を作りました。\n今回の応募曲、「Xéroa」は『ゼロア』と読みます。\nゼロに立ち返って編み上げたこの楽曲の力で、\n上り詰めてきたプレイヤーの努力を、あたかもゼロに還すかのような曲に。\nそしてプレイヤーがその腕を信じて、この曲を打ち破った時、\nSOUND VOLTEXが『天国』を経て、また新たな生を得る。\n仰々しいですがそんなイメージを込め、フランス語Zéro[ゼロ]+croire[信じる]で"Xéroa"の造語を名付けました。\nボルテプレイヤーさん方のために全力でド直球で作った作品ですので、\n沢山プレーして、最強のエフェクトデバイスを介して殴り合って、\nそしてこの曲を叩きのめしてもらえればこの上ありません。\n長文失礼します。ありがとうございました。\n(かめりあ)',
      },
      {
        artist: "technoplanet(第2回目配信楽曲）",
        title: "Awakening",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_01.mp3",
        comment:
          'Inscapeから続いてSDVX2作目となります。\n遥か彼方からやってきたエレクトロニック・モンスターユニット"technoplanet"です。\n前作Inscapeが「内在する独自の本質」に対し今作Awakeningは「覚醒、目覚め」を意味します。\nこれまでの作曲人生の中、数多くの音楽との邂逅の末に僕自身が見据えた"独自の本質"を今回いかんなく"目覚め"させました。\n是非ともお楽しみいただければ幸いです。\n(technoplanet)',
      },
      {
        artist: "U-ske feat.棗いつき(第2回目配信楽曲）",
        title: "プラネタジャーニー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_08.mp3",
        comment:
          "U-skeと申します。この度は採用ありがとうございます！\n嬉しさを噛みしめるとき、ため息が出ちゃいそうなとき。幾度となく空を見上げたりするけど、その広さの全てを知る術なんてない僕らは想いを託したスペースバルーンを打ち上げるのです。\nさあ！大気圏を突き抜けて、どこまでも高くゆくのだ！\n(U-ske)\nはじめまして、棗(なつめ)いつきと申します。採用頂きありがとうございます！\n涙だって吹き飛ぶようなキュートでパワフルな楽曲、元気をぎゅぎゅっと詰め込んで歌わせて頂きました。プレイしてくれた皆さんがたのしい気持ちになれますように！\n(棗いつき)",
      },
      {
        artist: "はるなば with すずしろ&桃箱(第2回目配信楽曲）",
        title: "メルヘン風紀委員会",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_07.mp3",
        comment:
          '皆さんこんにちはメルヘン風紀委員会、会長のはるなばです。\n平成30年度　メルヘン風紀委員会　活動方針\n年間目標…「みんなが安心して可愛く生活できる学園にしていく」\n学園の生徒はみんな、可愛くなれる権利があり\n自信を持ち、恥ずかしがらず、御伽の様な"可愛い"を極め\n生徒達が健やかに伸び伸びとふわふわと学園生活を送れるよう\n・風紀チェック\n・呼びかけの強化\n・素朴者(ミニマム)ゼロ週間の実施\nを心がけています。\nSOUND VOLTEXといえばボルテ学園なので部活か委員会やりたいなって思って作りました！\nカワイイがテーマなので、とってもキュートなお二人に歌っていただいてます！\nなんか風紀委員会って憧れますよね！風紀委員会ってだけで可愛いですからね！\nよろしくお願いいたします！\n(はるなば)\nはじめまして、すずしろと申します！\n甘々でハイスピードな曲を桃箱おねーちゃんと一緒に歌わせていただきました。\nカワイイは人生を豊かにする魔法ですね！楽しんでいただけましたら幸いです\n(すずしろ)\nはじめまして！桃箱といいます！\n大好きなすずしろちゃんとメルヘン風紀員会にはいったつもりで歌ってみました♪\n可愛くないと校則違反なのでメルヘンしながらプレイしてみてください！シンプル厳禁Trust meー！\n(桃箱)',
      },
      {
        artist: "Crawk × Capchii(第2回目配信楽曲）",
        title: "Wings of Glory",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_06.mp3",
        comment:
          "初めまして。Crawk(くろーく)と申します。ファンタジー音楽が大好きです。\nCapchiiさんのお誘いを受けて共に曲を書かせていただきました。\n主にオーケストラの部分を担当しました。元々私の何でもない即興(のちの後半サビである)から作曲が始まったのですが、様々な過程を経てより質の高い曲に進化していく様は、聴いていて面白かったです。\n個人的に大事にしたコンセプトは「自由」です。簡単にはリズムが取れなかったり、電子音とオーケストラが入り乱れたり、コード進行がめちゃくちゃだったり…どこを切り取っても面白くなるよう心掛けました。トリル混ぜちゃってごめんなさい！\n(Crawk)\nSOUND VOLTEXプレイヤーの方は初めまして、Capchiiと申します。普段は色々なジャンルの曲を聞いたり作ったりしていますが、この曲ではハードコアっぽい激しい部分の作曲、アレンジと、ミックス等を担当しました。\nもともと僕は音楽ゲームがきっかけで作曲を始めました。そしてこの度ついに自分の楽曲がゲームに収録されることとなり、本当に感無量です。また、FLOORの公募には3年ほど前から応募していたのですが、今回大学のサークルで知り合ったCrawk先輩との合作で、ようやく採用を勝ち取ることができました。\nこの曲で私たちが描いた翼が、プレイヤーの皆さんとSOUND VOLTEXの未来を、より一層輝かせるものになることを楽しみにしています。\n(Capchii)",
      },
      {
        artist: "からとP feat.リた☆(第2回目配信楽曲）",
        title: "Яe's NoVǢ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_05.mp3",
        comment:
          "この度は採用頂き誠にありがとうございます。からとPと申します。\nどんなことでも抗い続けていれば、世界が変わる気がするんです。\nタイトルはラテン語で『革命』を意味する\n『res novae』から、レースノワエと読みます。\n是非遊んでくださいね！\n(からとP)\n初めまして、リた☆と申します！\nこのたびはからとPさんの勢い1600%のカッコよすぎるこちらの曲を歌わせていただきました！\n～白と黒の譜面音で埋め～という歌詞の通り\nプレイしてくださる方それぞれの音色でさらにこの曲を彩ってもらえたらうれしいです！\n最初から最後まで美しく激しさ溢れる歌詞と共に、頭の中を気持ちよく駆け抜けるこの曲を是非！たくさんプレイしていただければと思います！\n（リた☆）\nお世話になりますタケノコ少年です。\nやりたい放題させていただきました。\nたくさんの人に気に入っていただけるとうれしいです。\n誘ってくれたからとPさん！歌唱のリた☆さん！感謝感謝！\nはっはっは!!!!!!\n（タケノコ少年）",
      },
      {
        artist: "うさぎ愛好会(cosMo×syuri22)(第2回目配信楽曲）",
        title: "BlueMoon Princess",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_04.mp3",
        comment:
          "うさぎ愛好会の楽曲担当、cosMoです。\nボスくて強そうな曲はたくさん応募されていると思ったので、この際KACコンだということは一旦忘れて、完全に自分の趣味に塗れた楽曲を作りました。\n歌詞の内容は月のお姫様とその親友の少し悲しい物語です。\nその後はKACコンだということを思い出し、強そうなキックと細かいピアノをモリモリ盛り込んで、自分の中ではKACらしい曲になったかなーと思います。\n是非是非よろしくお願いいたします！\n(cosMo＠暴走P)\nThe 7th KACおめでとうございます！\nこのたび「BlueMoon Princess」にて採用賜りました、うさぎ愛好会の縦長いほう…もとい歌唱担当のsyuri22です。\nKACコンテストという記念すべき場において本年もその彩りの一部となれること、恐悦至極に思っております。\nKACとなるとまずまず歌唱ハードル高めな曲をぶん投げられるのですが、今回は英語＋cosMo語の歌と聞いたので、（なんか早い曲で英歌詞ってなんだ…てかcosMo語ってなんだ…）と初見でとてもプルプルしたのを覚えています。\n最終的に出力は中々イイ感じにできたので、達成感は一入に感じることができましたが！\n今回はいろんな意味でcosMoさんらしい曲を提唱していると思います。すこしだけ可愛くて儚くて、ふわっふわでバリバリの騒がしげな曲に仕上がっておりますので、ぜひ遊んでいただけますと幸いです。\nヨロシクオネガイシマッス！！\n(syuri22)",
      },
      {
        artist: "ぺのれり(第2回目配信楽曲）",
        title: "crossing blue",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/2_03.mp3",
        comment:
          "「青の交錯する場所 ───水平線をぶち破れ！」\nというのは建前で、本音としては\n「お前ら、遊べーーーーーーーーーーー！」\nです。\n(ぺのれり)",
      },
      {
        artist: "黒魔(第1回目配信楽曲）",
        title: "I",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_07.mp3",
        comment:
          "ロボットと、ロボットを作った人間がいました。\n２人の中には同じ大きさの愛がありました。\nある日ロボットが目を覚ますと人間の姿はどこにも無く、焦ったロボットは宇宙を探し回ります。\nそして人間が突然の襲撃からロボットを守って命を落とした事を知りますが、それでもロボットは人間を愛し続けて、そこから愛が絶えることはありませんでした。\nそんなイメージをしながら作った曲です。\n採用頂き、ありがとうございました！\n（黒魔）",
      },
      {
        artist: "xi(第1回目配信楽曲）",
        title: "Last Resort",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_01.mp3",
        comment:
          "「Last Resort」は「最後の手段」または「伝家の宝刀」という意味です。\n早い！やばい！強い！を目指して作曲させて頂きました。\n歯ごたえある展開になってますので、是非楽しんでプレイして頂ければと思います！\n(xi)",
      },
      {
        artist: "Laur(第1回目配信楽曲）",
        title: "A Lasting Promise",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_02.mp3",
        comment:
          "Laurと申します。この度は採用を頂き誠にありがとうございます。\nこの楽曲の制作を始める前に、私は楽曲を作る上でのコンセプトを設定しました。\n―― また戦おう、この場所で ――\n最強の戦士である2人は、ここで必ず再会する約束を交わした。\nこの様なストーリーが見えてくるように仕上げました。\n曲中でギターやシンセが左右からバトルするかのように掛け合うのは、2人の戦いをイメージしています。\nもうお気づきだとは思いますが、このコンセプトは即ちKACの決勝まで登りつめた2人を表しています。\nその最強の2人は、また必ず同じ場所、同じシチュエーションで再び戦う約束を交わします。\nそういった熱い展開をこの楽曲で作れたら良いな、と思いながら制作しました。\nまた、このコンセプトで楽曲を制作する以上、必ず受賞したいという強い思いがありました。\n私はトラックメイカーであると同時にSOUND VOLTEXのプレイヤーでもあるので、トラックメイカーとプレイヤーの両視点から、KACコンテストで受賞されている楽曲達の傾向を研究しました。\n曲が良いだけではダメだ、ただ音を詰めるだけではダメだ、ただ速いだけではダメだ。\nこういう音の置き方をしたらこうやって配置されるだろうか。\n受賞楽曲はいずれも2分で完璧に曲として完結しているな。\nどれも共通して頭に残るメロディーや展開がある…。\n試行錯誤を繰り返し考え抜いた末に、誰のものでもない自分の楽曲がついに完成しました。\nその結果、無事に受賞する事が出来ました。\n本当に嬉しいです。\n改めまして、採用・受賞共に本当にありがとうございます！\n(Laur)",
      },
      {
        artist: "TAKU1175 × かにまゆ(第1回目配信楽曲）",
        title: "羅生門",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_05.mp3",
        comment:
          "初めまして。かにまゆと申します。\nTAKU1175さんと仲良く作らせていただきました。\nBEMANIとはポップンミュージック初代からの付き合いなので、今回の採用はとても嬉しいです。\nやらなきゃやられる感と鬼らしさを一発で表現できる題名に致しました。\n一発楽しんで頂き、一発で覚えて頂ければ幸いです。\n（かにまゆ）\nTAKU1175と申します。\n王道というよりは個性的なアプローチを心がけつつ、猛者どもが集う場所をイメージしました。\n楽しんで頂ければ幸いです！\n（TAKU1175）",
      },
      {
        artist: "Cororo(第1回目配信楽曲）",
        title: "神話に芽吹く",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_08.mp3",
        comment:
          "ご採用頂き誠にありがとうございます！\n私の中で“HEAVENLY HAVEN”というテーマに神々しい海と空のイメージがずっと浮かんでいて、そのイメージを楽曲にて表現いたしました！楽しんでいただけますと幸いです。\n（Cororo）",
      },
      {
        artist: "雄之助(第1回目配信楽曲）",
        title: "Cloud 9",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_03.mp3",
        comment:
          "この度は採用いただきありがとうございます、雄之助です。\n個人での初採用、とても嬉しく思います。\n今回、KACの公募ということで思い切ってハイテックに挑戦しました！\n落ち着いた雰囲気のカッコいい楽曲をイメージして、ドロップのピアノの使い方やなどを意識して制作しました。\nCloud 9、沢山遊んでいただけると嬉しいです！よろしくお願いします。\n（雄之助）",
      },
      {
        artist: "ℱsinfonia（Yu_Asahina　溝口ゆうま　かなたん　大瀬良あい）(第1回目配信楽曲）",
        title: "Sacrifice and Faith",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_04.mp3",
        comment:
          "SDVXではご無沙汰です！Yu_Asahinaです。\n骨の骨部分から密に楽曲を共に構築してくれた溝口ゆうまさんをはじめ、こちらも全力でぶつけ合ってくれたかなたん、大瀬良さんとの不思議なご縁で合作が決まりました。\n何やらいい感じのアレになっていそうな雰囲気があるのでありがとうございます。\nやっていきますよ。忍法 火遁の術～！\n（Yu_Asahina）\n4人合体！フォルテシンフォニアー！作詞作編曲担当の溝口ゆうまです。\nYu_Asahinaさんと何度もデータをやり取りして、音符上でじっくり語り合い、咽び泣きながらギターをかき鳴らしました！\nそこへかなたんと大瀬良あいぽんの素晴らしい歌声が融合し、この作品が完成しました。\n睡眠時間をSacrifice！それが音楽へのfaith！採用有難うございました～！！！\n（溝口ゆうま）\nお世話になっております。かなたんです。\n2018年は一味違う自分を出してみたい。そんな願いがさっそく叶った作品です。\n憧れのお三方ともご一緒できて光栄の極みです。テンションを抑えるのが大変。\n皆さんにとってお気に入りの一曲になりますように。\n（かなたん）\n大瀬良あいです。\n尊敬している方々と御一緒させて頂き、採用も頂けて本当に嬉しいです。\nコメントを書いてる今も、曲は完成したのにまだ終わってない感じがしています。何だか不思議な気分です。\n最初から最後まで疾走感たっぷりな曲、デュエット出来て本当に楽しかったので、皆様も楽しんでプレイして頂けたら幸いです！\n（大瀬良あい）",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第1回目配信楽曲）",
        title: "僕らの時間",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_06.mp3",
        comment:
          "テヅカと申します！\n「水槽のクジラ」に続いての採用、ありがとうございます。\n「僕らの時間」という曲です。\n他にも趣味見つけなよって言われるくらい音楽ゲームしかしてないし、誇れる事も語れる事も音楽ゲームしかない、でもただただ堪らなく音楽ゲームが好きだ！\nそんな僕たちの曲です。\n是非プレイしてみて下さいね！\n（テヅカ）\nこの度は「水槽のクジラ」に続いて、採用していただきありがとうございます。\n前回とは曲の雰囲気も変わり、わたしも違う歌い方をしてみました。\nぜひどちらもプレイしてみてください～！\n（大西あみみ）",
      },
      {
        artist: "7mai(第1回目配信楽曲）",
        title: "CUTE-Reflection",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/22/result/sound/1_09.mp3",
        comment:
          "初めまして、7maiと申します。\nこの度は採用頂きありがとうございます！\n可愛く！激しく！それでいてカッコよく！をテーマに制作いたしました。\n可愛い転調や激しい展開、カッコいいキメを盛り込みましたので、楽しんでいただけましたら幸いです！\n（7mai）",
      },
    ],
  },
  {
    id: "remix09",
    name: "東方永夜抄リミックス楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_09.jpg",
    sounds: [
      {
        artist: "brz1128(第7回目配信楽曲）",
        title: "Invisible Bullets",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_01.mp3",
        comment:
          "こんにちは～！ brz1128です\n僕がボルテを始めたきっかけとして、当時としては珍しく東方リミックスの曲が遊べるからというのがありました\n特にボルテでしか遊べない紅魔郷リミコンの曲をよく選曲していたので、今回自分が楽曲を提供する側として参加できるのはとても感慨深いものがあります\nどんなアレンジをしようかな～と色々悩んだ結果、狂気の瞳を私らしくどストレートにボルテっぽくアレンジさせていただきました\n頑張って細かい音やフィルを入れ込んだので楽しんでいただけたら幸いです、よろしくお願いします！\n(brz1128)",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Night Rockin' Bird",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_02.mp3",
        comment:
          "原曲の静かな雰囲気から一転し、\n激しく暴れ狂うようなアレンジを試みました。\n世の中勢いがあれば大抵の事は誤魔化せられ・・・る・・？\n(kanone)",
      },
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: "Venomous Firefly",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_03.mp3",
        comment:
          "毎度お騒がせします！かめりあです。\n今回応募させていただいたこの曲は、東方永夜抄より「蠢々秋月 ～ Mooned Insect」のアレンジです。\n東方アレンジは毎回応募しており、この曲「Venomous Firefly」で早くも4曲目になります。\nそしてその度に何かとお騒がせしているような気がしなくもありません。\nいつもご迷惑おかけします。\nさて、そんな事があってか無くてか、今回はややスピーディーなハードコアを作りました。\n原曲要素ももちろん随所に散りばめられているのですが、「猛毒のホタル」をイメージしたこの曲は、\n虫の蠢く音や悲鳴など有毒感の溢れるアレンジになっていますよ！\n色んな所に有毒でデンジャラスなツマミや直角が配置されるのだと思うと、もうゾクゾクしてしまいますね（？）。\nまた不規則なキメ、高速メロディなど、割と「いつもの」な「自分が好きなヤツ」を手癖の力で詰め込んだつもりだったのですが、\n意外と出来上がってから聞いてみると、イケイケで独特、面白いボルテサウンドになっているように感じます。\nそして、出来上がってから聞いてみると、確かに、お騒がせ感の強い、アレンジに、なっているような、気もします。\nいつもご迷惑おかけします。\n奇しくもSOUND VOLTEXには先日「蟲の棲む処」が収録されたということで、更に蟲の曲が収録！という感じですが、\nプレイヤーのみなさんには飽きずに虫退治を頑張って頂ければなと思います！\n殺虫剤的なやつと合わせて楽しんでもらうも良しですね！\nちなみに虫は動いているところを見るのは結構ガッツリ苦手（虫の方がいらっしゃいましたら申し訳ありません）なのですが、\n造形は何かと好きで、特に蟲の～でもフィーチャーしたクモの造形はやたらセクシーだなと感じます。細くて脚が長い！綺麗！\n子供の頃は触りたくないだなんて思わなかったのに…。\nなにはともあれ！それでは、毒に中てられる感覚をどうぞお楽しみくださいませ。\n(かめりあ)",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第7回目配信楽曲）",
        title: "Princess K",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_04.mp3",
        comment:
          "We are Retropolitaliens!\nボーカルを担当させていただきました、駄々子です。\n初の東方アレンジ、初の全編英詞と初挑戦だらけでしたが\nお披露目の機会をいただき、本当に嬉しいです。ありがとうございます！\n自由奔放でちょっぴりわがままで、とびっきりかわいい曲です。\nお気に召しましたら幸いです！\n(駄々子)\nはじめまして、Retropolitaliensの音と詞担当、Ms.です。\nレトロポリタリアンズのミズと読みます。\n『むかーしむかし、月には「K」というお姫様がいました。』というおはなしを、\n駄々子さんのボーカルに乗せて竹取飛翔をラグかわいくリミックスしました。\n天真爛漫な「K」を感じていただければ幸いです。\nWe love you all!\n……え、パニックポップだろって？\nまあ、そうとも言えますね←\n(Ms.)",
      },
      {
        artist: "Laur(第7回目配信楽曲）",
        title: "Nostalgic Blood of the Strife",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_05.mp3",
        comment:
          "この度は採用を頂き誠にありがとうございます。Laurと申します。\n東方永夜抄は僕が東方の中でキャラ・曲共に一番好きなシリーズだったので、今回採用を頂けたのは非常に嬉しく存じます。\n曲名の意味は「懐かしき闘争の血」です。原曲名の「懐かしき東方の血」の東方の部分を闘争と韻を踏んで付けた曲名です。\n(Laur)",
      },
      {
        artist: "Die Ellipse (deli. with 倉田美和)(第7回目配信楽曲）",
        title: "マイネ・クライネ・ナハトムジーク",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_06.mp3",
        comment:
          "はじめまして！サークルDie Ellipse（でぃーえりぷせ）の代表、deli.（でり）と申します！\nこの度は御採用頂きありがとうございます、嬉しさで弾け飛びそうです！\nこの曲のタイトルはかの有名な楽曲「アイネ・クライネ・ナハトムジーク」をもじったもので、\n直訳すると「わたしのちいさな夜の音楽」という言葉になります。\n曲調は全く違うけどな！\n永遠の中に生きる人々にとって夜とはどのようなものだろうか。\nそんなことを考えながら恐れ多くもアレンジをさせて頂きました。\n楽しく遊んでやってください、よろしくお願い致します！\n(Die Ellipse - deli.)",
      },
      {
        artist: "Se-U-Ra(第7回目配信楽曲）",
        title: "Tic Exe",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_07.mp3",
        comment:
          "なにか夢はありますか。\nある日、具体的に書くと2012年1月にはじめて夢を得ることになったのですが、これまた中々に険しい道のりだったのです。\n敗れていった無念を30か40か50と積み上げるうち、とてもいいことに気付きました。\n月並みですが、叶える道を歩くのは最高ですね。\nそんな飾り気な話のことより曲についてですが、あまりにも詳しく書くのはあれなので、\nしいて言うなら\nこみっみよねかがやはみっにそるちぴよえみねろそちじつとたつしぷふにう\nんにくのそけおくりかしふせょすひてぷんせこかく\nやしくをぼうるれほねわぽっじーそけなをゅすをちうああ\nとか、そんな感じです。\n(Se-U-Ra)",
      },
      {
        artist: "かたぎり(第6回目配信楽曲）",
        title: "Breakin' Asia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_01.mp3",
        comment:
          "わらわじゃ！かたぎりです。\n永夜抄の曲の中でもいちばん好きなプレインエイジアのリミックスです！\n230BPMのうるさい4つ打ちからおっかない感じが出てたらいいな～と思います！\nここはこんな譜面になるのかなぁ……とか妄想しながらたのしく作りました！！\nいやぁ～しかし昔から遊んできたSOUND VOLTEXで自分の曲が遊べるなんて夢みたいです……\nあれ？夢か……あと5分……いや……40分くらい寝ようかな……\n(かたぎり)",
      },
      {
        artist: "N-Driver(第6回目配信楽曲）",
        title: "4NT1 D34D",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_02.mp3",
        comment:
          "II以来久しぶりです、N-Driverです。\n「月まで届け、不死の煙」は東方曲の中でもかなり好きな楽曲なので、この曲で採用されたのはとても嬉しい限りです！！！！！\nジャンルとしては以前採用された曲とはアプローチが変わりまして、グリッチホップの手法を取っています。\nBPMが109と音ゲー曲の部類としてはかなり低速の部類ですが、「音ゲー曲とは何ぞや？？」というポイントを抑えれば、\nこの手のジャンルでも全然イケるでしょ！っていうのを体現出来ていればなぁと思っています。\n今回は念願の東方リミックスということで、楽しんでください！！！！！！\n俺も楽しむ！！！！！！！！！！！\n(N-Driver)",
      },
      {
        artist: "さわわ(第6回目配信楽曲）",
        title: "Lunatic Sprinter",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_03.mp3",
        comment:
          "こんにちは！疾走の人改め『さわわ』と申します！この度は採用誠に有難う御座いました！(*´ω｀*)\n東方作品では3作目の採用となります。竹取飛翔は、自分が東方アレンジを始める切っ掛けとなった\n友達が大好きな曲で、こんな素敵な形でお披露目＆恩返しする事ができてとても嬉しいです！\nタイトルも『ルナティックスプリンター』と言うだけあって疾走感あふれる作品となっており、\nいつもより更に疾走増し増しになっておりますので是非プレイして頂けたら幸いです！\n『ルナスプ』なんて呼んで可愛がってやって下さい！(あ、ちょっと呼びにくいかなｗ)\nそれでは、今後とも『さわわ』をどうぞ宜しくお願いします！\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ\n(さわわ)",
      },
      {
        artist: "溝口ゆうま feat. みこ♥なち♥あい(第6回目配信楽曲）",
        title: "蓬莱フェスティボー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_04.mp3",
        comment:
          "採用有難うございます！！\n千年幻想郷を賑やかな感じでドンドコドンしてみました！\nプレイする事で皆様が少しでも楽しいな～と思って頂けたら幸いで御座います！ピョコピョン！\n(溝口ゆうま)\n採用ありがとうございます！mikoです。\n今回も楽しい曲なので、お祭り気分で遊んじゃってくださ～い\n(miko）\n採用ありがとうございます！一生分フィーバーと言った気がします(笑)\n楽しんで頂ければ幸いです！\n(nachi)\nクマの次はウサギになりました!!大瀬良あいです。\n楽しいお祭りの楽曲で大フィーバーしました。\n幻想郷の皆が踊ってる景色が見えます♪宜しくお願い致します!!\n(大瀬良あい)",
      },
      {
        artist: "Noah(第5回目配信楽曲）",
        title: "Black night",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_01.mp3",
        comment:
          "採用頂きありがとうございます。\n幻視の夜 ～ Ghostly Eyes + 蠢々秋月 ～ Mooned Insectのリミックスとなります。\n楽しんでプレイして頂けると嬉しいです。\n(Noah)",
      },
      {
        artist: "CielArc(第5回目配信楽曲）",
        title: "灼熱のBlazin' Beat",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_02.mp3",
        comment:
          "この度はCielArcの作品をご採用頂きまして、ありがとうございます！！\n「狂気の瞳 ～ Invisible Full Moon」を激しいロック×エレクトロにアレンジしました♪\n変拍子や転調、思わず口ずさみたくなるキャッチーなサビメロ等、最初から最後まで楽しんで頂けるよう熱いサウンドに仕上げました！\n「テンションアゲアゲ☆で、激しくしました！！やったー！！」(MxRxI)\n「プレイ中も熱く楽しめるようなフレーズを歌詞に入れたり、ノリノリでかっこ良く歌いました♪\nぜひ大音量で楽しんで頂けたら幸いです！！」(ゆずり)\nこれぞCielArc！なエレクトロ萌えエモロックな一曲をお楽しみください☆ミ\n(CielArc)",
      },
      {
        artist: "Diartzh(第5回目配信楽曲）",
        title: "Liévre -blanche-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_03.mp3",
        comment:
          '初めまして、Diartzh(ディアーツ)と申します！\n今回の東方永夜抄リミックス楽曲コンテスト、採用頂き本当に光栄です。やった！\n私も例に漏れずボルテがきっかけで作曲を始めたので、今回の採用はとてつもなく嬉しいです。\nさて「シンデレラケージ ～ Kagome-Kagome」をリミックスするにあたって、どうしたらボルテで楽しくプレー出来そうな曲になるかを考えた所、これしか思いつきませんでした。\n始めから終わりまでノンストップで駆け抜けながら作った楽曲なので、皆さんにも是非駆け抜けて頂けたらと思います！\nSpecial Thanks to "Rouse arc"\n(Diartzh)',
      },
      {
        artist: "uma & nmk feat. 橘花音(第5回目配信楽曲）",
        title: "Burning Spark!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_04.mp3",
        comment:
          "採用コメントページを見に来て頂きありがとうございます。こんにちは、umaです。\n永夜抄リミックスコンテストが開催されるにあたりnmkさんに制作のお手伝いをして貰えないかと打診した所、快く受け入れて頂けたことから本楽曲が制作されました。\n（ボーカル&歌詞と楽曲命名して頂きました橘花音さんはnmkさん経由で紹介頂きました。）\n大好きな魔理沙で大好きなEurobeatの二本立てです。\n既に遊んで頂いた方もこれから遊ぶという方もどうぞ宜しくお願い致します。\n(uma)\n前回Shiroganeに引き続き、今回も東方楽曲で採用を頂きましてありがとうございます！nmkです。\n今回は僕のメインジャンルであるユーロビートを、同じユーロビート仲間でもあるumaさん、橘花音さんと制作させて頂きました！\nバリバリカッコイイユーロビートに仕上がったので皆様ガンガンプレイしてください！\n(nmk)\n夢だったボルテ公募に初採用いただけて嬉しいです！\numaさん、nmkさんに声をかけてもらって、魔理沙ちゃんで超つよいユーロビートを作ることができました！\nキラキラかわいい＆かっこいい曲になりました、たっくさん遊んでくださいね！\n(橘花音)",
      },
      {
        artist: "brz1128(第7回目配信楽曲）",
        title: "Invisible Bullets",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_01.mp3",
        comment:
          "こんにちは～！ brz1128です\n僕がボルテを始めたきっかけとして、当時としては珍しく東方リミックスの曲が遊べるからというのがありました\n特にボルテでしか遊べない紅魔郷リミコンの曲をよく選曲していたので、今回自分が楽曲を提供する側として参加できるのはとても感慨深いものがあります\nどんなアレンジをしようかな～と色々悩んだ結果、狂気の瞳を私らしくどストレートにボルテっぽくアレンジさせていただきました\n頑張って細かい音やフィルを入れ込んだので楽しんでいただけたら幸いです、よろしくお願いします！\n(brz1128)",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Night Rockin' Bird",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_02.mp3",
        comment:
          "原曲の静かな雰囲気から一転し、\n激しく暴れ狂うようなアレンジを試みました。\n世の中勢いがあれば大抵の事は誤魔化せられ・・・る・・？\n(kanone)",
      },
      {
        artist: "かめりあ(第7回目配信楽曲）",
        title: "Venomous Firefly",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_03.mp3",
        comment:
          "毎度お騒がせします！かめりあです。\n今回応募させていただいたこの曲は、東方永夜抄より「蠢々秋月 ～ Mooned Insect」のアレンジです。\n東方アレンジは毎回応募しており、この曲「Venomous Firefly」で早くも4曲目になります。\nそしてその度に何かとお騒がせしているような気がしなくもありません。\nいつもご迷惑おかけします。\nさて、そんな事があってか無くてか、今回はややスピーディーなハードコアを作りました。\n原曲要素ももちろん随所に散りばめられているのですが、「猛毒のホタル」をイメージしたこの曲は、\n虫の蠢く音や悲鳴など有毒感の溢れるアレンジになっていますよ！\n色んな所に有毒でデンジャラスなツマミや直角が配置されるのだと思うと、もうゾクゾクしてしまいますね（？）。\nまた不規則なキメ、高速メロディなど、割と「いつもの」な「自分が好きなヤツ」を手癖の力で詰め込んだつもりだったのですが、\n意外と出来上がってから聞いてみると、イケイケで独特、面白いボルテサウンドになっているように感じます。\nそして、出来上がってから聞いてみると、確かに、お騒がせ感の強い、アレンジに、なっているような、気もします。\nいつもご迷惑おかけします。\n奇しくもSOUND VOLTEXには先日「蟲の棲む処」が収録されたということで、更に蟲の曲が収録！という感じですが、\nプレイヤーのみなさんには飽きずに虫退治を頑張って頂ければなと思います！\n殺虫剤的なやつと合わせて楽しんでもらうも良しですね！\nちなみに虫は動いているところを見るのは結構ガッツリ苦手（虫の方がいらっしゃいましたら申し訳ありません）なのですが、\n造形は何かと好きで、特に蟲の～でもフィーチャーしたクモの造形はやたらセクシーだなと感じます。細くて脚が長い！綺麗！\n子供の頃は触りたくないだなんて思わなかったのに…。\nなにはともあれ！それでは、毒に中てられる感覚をどうぞお楽しみくださいませ。\n(かめりあ)",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第7回目配信楽曲）",
        title: "Princess K",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_04.mp3",
        comment:
          "We are Retropolitaliens!\nボーカルを担当させていただきました、駄々子です。\n初の東方アレンジ、初の全編英詞と初挑戦だらけでしたが\nお披露目の機会をいただき、本当に嬉しいです。ありがとうございます！\n自由奔放でちょっぴりわがままで、とびっきりかわいい曲です。\nお気に召しましたら幸いです！\n(駄々子)\nはじめまして、Retropolitaliensの音と詞担当、Ms.です。\nレトロポリタリアンズのミズと読みます。\n『むかーしむかし、月には「K」というお姫様がいました。』というおはなしを、\n駄々子さんのボーカルに乗せて竹取飛翔をラグかわいくリミックスしました。\n天真爛漫な「K」を感じていただければ幸いです。\nWe love you all!\n……え、パニックポップだろって？\nまあ、そうとも言えますね←\n(Ms.)",
      },
      {
        artist: "Laur(第7回目配信楽曲）",
        title: "Nostalgic Blood of the Strife",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_05.mp3",
        comment:
          "この度は採用を頂き誠にありがとうございます。Laurと申します。\n東方永夜抄は僕が東方の中でキャラ・曲共に一番好きなシリーズだったので、今回採用を頂けたのは非常に嬉しく存じます。\n曲名の意味は「懐かしき闘争の血」です。原曲名の「懐かしき東方の血」の東方の部分を闘争と韻を踏んで付けた曲名です。\n(Laur)",
      },
      {
        artist: "Die Ellipse (deli. with 倉田美和)(第7回目配信楽曲）",
        title: "マイネ・クライネ・ナハトムジーク",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_06.mp3",
        comment:
          "はじめまして！サークルDie Ellipse（でぃーえりぷせ）の代表、deli.（でり）と申します！\nこの度は御採用頂きありがとうございます、嬉しさで弾け飛びそうです！\nこの曲のタイトルはかの有名な楽曲「アイネ・クライネ・ナハトムジーク」をもじったもので、\n直訳すると「わたしのちいさな夜の音楽」という言葉になります。\n曲調は全く違うけどな！\n永遠の中に生きる人々にとって夜とはどのようなものだろうか。\nそんなことを考えながら恐れ多くもアレンジをさせて頂きました。\n楽しく遊んでやってください、よろしくお願い致します！\n(Die Ellipse - deli.)",
      },
      {
        artist: "Se-U-Ra(第7回目配信楽曲）",
        title: "Tic Exe",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/7_07.mp3",
        comment:
          "なにか夢はありますか。\nある日、具体的に書くと2012年1月にはじめて夢を得ることになったのですが、これまた中々に険しい道のりだったのです。\n敗れていった無念を30か40か50と積み上げるうち、とてもいいことに気付きました。\n月並みですが、叶える道を歩くのは最高ですね。\nそんな飾り気な話のことより曲についてですが、あまりにも詳しく書くのはあれなので、\nしいて言うなら\nこみっみよねかがやはみっにそるちぴよえみねろそちじつとたつしぷふにう\nんにくのそけおくりかしふせょすひてぷんせこかく\nやしくをぼうるれほねわぽっじーそけなをゅすをちうああ\nとか、そんな感じです。\n(Se-U-Ra)",
      },
      {
        artist: "かたぎり(第6回目配信楽曲）",
        title: "Breakin' Asia",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_01.mp3",
        comment:
          "わらわじゃ！かたぎりです。\n永夜抄の曲の中でもいちばん好きなプレインエイジアのリミックスです！\n230BPMのうるさい4つ打ちからおっかない感じが出てたらいいな～と思います！\nここはこんな譜面になるのかなぁ……とか妄想しながらたのしく作りました！！\nいやぁ～しかし昔から遊んできたSOUND VOLTEXで自分の曲が遊べるなんて夢みたいです……\nあれ？夢か……あと5分……いや……40分くらい寝ようかな……\n(かたぎり)",
      },
      {
        artist: "N-Driver(第6回目配信楽曲）",
        title: "4NT1 D34D",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_02.mp3",
        comment:
          "II以来久しぶりです、N-Driverです。\n「月まで届け、不死の煙」は東方曲の中でもかなり好きな楽曲なので、この曲で採用されたのはとても嬉しい限りです！！！！！\nジャンルとしては以前採用された曲とはアプローチが変わりまして、グリッチホップの手法を取っています。\nBPMが109と音ゲー曲の部類としてはかなり低速の部類ですが、「音ゲー曲とは何ぞや？？」というポイントを抑えれば、\nこの手のジャンルでも全然イケるでしょ！っていうのを体現出来ていればなぁと思っています。\n今回は念願の東方リミックスということで、楽しんでください！！！！！！\n俺も楽しむ！！！！！！！！！！！\n(N-Driver)",
      },
      {
        artist: "さわわ(第6回目配信楽曲）",
        title: "Lunatic Sprinter",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_03.mp3",
        comment:
          "こんにちは！疾走の人改め『さわわ』と申します！この度は採用誠に有難う御座いました！(*´ω｀*)\n東方作品では3作目の採用となります。竹取飛翔は、自分が東方アレンジを始める切っ掛けとなった\n友達が大好きな曲で、こんな素敵な形でお披露目＆恩返しする事ができてとても嬉しいです！\nタイトルも『ルナティックスプリンター』と言うだけあって疾走感あふれる作品となっており、\nいつもより更に疾走増し増しになっておりますので是非プレイして頂けたら幸いです！\n『ルナスプ』なんて呼んで可愛がってやって下さい！(あ、ちょっと呼びにくいかなｗ)\nそれでは、今後とも『さわわ』をどうぞ宜しくお願いします！\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ\n(さわわ)",
      },
      {
        artist: "溝口ゆうま feat. みこ♥なち♥あい(第6回目配信楽曲）",
        title: "蓬莱フェスティボー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/6_04.mp3",
        comment:
          "採用有難うございます！！\n千年幻想郷を賑やかな感じでドンドコドンしてみました！\nプレイする事で皆様が少しでも楽しいな～と思って頂けたら幸いで御座います！ピョコピョン！\n(溝口ゆうま)\n採用ありがとうございます！mikoです。\n今回も楽しい曲なので、お祭り気分で遊んじゃってくださ～い\n(miko）\n採用ありがとうございます！一生分フィーバーと言った気がします(笑)\n楽しんで頂ければ幸いです！\n(nachi)\nクマの次はウサギになりました!!大瀬良あいです。\n楽しいお祭りの楽曲で大フィーバーしました。\n幻想郷の皆が踊ってる景色が見えます♪宜しくお願い致します!!\n(大瀬良あい)",
      },
      {
        artist: "Noah(第5回目配信楽曲）",
        title: "Black night",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_01.mp3",
        comment:
          "採用頂きありがとうございます。\n幻視の夜 ～ Ghostly Eyes + 蠢々秋月 ～ Mooned Insectのリミックスとなります。\n楽しんでプレイして頂けると嬉しいです。\n(Noah)",
      },
      {
        artist: "CielArc(第5回目配信楽曲）",
        title: "灼熱のBlazin' Beat",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_02.mp3",
        comment:
          "この度はCielArcの作品をご採用頂きまして、ありがとうございます！！\n「狂気の瞳 ～ Invisible Full Moon」を激しいロック×エレクトロにアレンジしました♪\n変拍子や転調、思わず口ずさみたくなるキャッチーなサビメロ等、最初から最後まで楽しんで頂けるよう熱いサウンドに仕上げました！\n「テンションアゲアゲ☆で、激しくしました！！やったー！！」(MxRxI)\n「プレイ中も熱く楽しめるようなフレーズを歌詞に入れたり、ノリノリでかっこ良く歌いました♪\nぜひ大音量で楽しんで頂けたら幸いです！！」(ゆずり)\nこれぞCielArc！なエレクトロ萌えエモロックな一曲をお楽しみください☆ミ\n(CielArc)",
      },
      {
        artist: "Diartzh(第5回目配信楽曲）",
        title: "Liévre -blanche-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_03.mp3",
        comment:
          '初めまして、Diartzh(ディアーツ)と申します！\n今回の東方永夜抄リミックス楽曲コンテスト、採用頂き本当に光栄です。やった！\n私も例に漏れずボルテがきっかけで作曲を始めたので、今回の採用はとてつもなく嬉しいです。\nさて「シンデレラケージ ～ Kagome-Kagome」をリミックスするにあたって、どうしたらボルテで楽しくプレー出来そうな曲になるかを考えた所、これしか思いつきませんでした。\n始めから終わりまでノンストップで駆け抜けながら作った楽曲なので、皆さんにも是非駆け抜けて頂けたらと思います！\nSpecial Thanks to "Rouse arc"\n(Diartzh)',
      },
      {
        artist: "uma & nmk feat. 橘花音(第5回目配信楽曲）",
        title: "Burning Spark!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/09/result/sound/5_04.mp3",
        comment:
          "採用コメントページを見に来て頂きありがとうございます。こんにちは、umaです。\n永夜抄リミックスコンテストが開催されるにあたりnmkさんに制作のお手伝いをして貰えないかと打診した所、快く受け入れて頂けたことから本楽曲が制作されました。\n（ボーカル&歌詞と楽曲命名して頂きました橘花音さんはnmkさん経由で紹介頂きました。）\n大好きな魔理沙で大好きなEurobeatの二本立てです。\n既に遊んで頂いた方もこれから遊ぶという方もどうぞ宜しくお願い致します。\n(uma)\n前回Shiroganeに引き続き、今回も東方楽曲で採用を頂きましてありがとうございます！nmkです。\n今回は僕のメインジャンルであるユーロビートを、同じユーロビート仲間でもあるumaさん、橘花音さんと制作させて頂きました！\nバリバリカッコイイユーロビートに仕上がったので皆様ガンガンプレイしてください！\n(nmk)\n夢だったボルテ公募に初採用いただけて嬉しいです！\numaさん、nmkさんに声をかけてもらって、魔理沙ちゃんで超つよいユーロビートを作ることができました！\nキラキラかわいい＆かっこいい曲になりました、たっくさん遊んでくださいね！\n(橘花音)",
      },
    ],
  },
  {
    id: "original24",
    name: "The 8th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_24.jpg",
    sounds: [
      {
        artist: "technoplanet feat. Kuroto Sion(第5回目配信楽曲)",
        title: "Turn the story",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_01.mp3",
        comment:
          '毎度お世話になっております。遥か彼方からやってきたエレクトロニック・モンスターユニット"technoplanet"です。\nTurn the story ─ 君の物語は君のためのもの、さぁページをめくろう\nエレクトロニカをベースに静かさを持ちつつも明るく力強い神秘的な曲です。\n一つ一つの音を洗練させ、たくさんの音を重ねても破綻しない音像。\n速いフレーズのみに頼らず、変拍子やポリリズムを盛り込み、バラエティに富んだ構成展開。\nページをめくる音、鍵を落とす音、時計の針、心臓の鼓動、ラジオノイズなど、効果音をふんだんに用いたドラマティックな演出。\nとにかく"他の誰にも真似できない自分にしか作れない曲"を目指しました。\nそんな楽曲にka9raが僕のイメージを高純度に昇華させた素晴らしい詞を書き、Kuroto Sionが美しくエモーショナルに歌い上げてくれました。\n制作当時は泣きたくなるくらい忙しくて辛かったけれどこの曲の制作は本当に楽しかった。\n是非ともお楽しみいただければ幸いです。\n(technoplanet)\n作詞をさせていただきました、ka9raと申します。\nこのお話をもらった後に曲を聴いた瞬間の衝撃、その新たなページを感じたまま書かせていただきました。\nひとりひとりの想う未来をその先に描いてみてね。\n(ka9ra)\n歌唱を担当させてもらった、クロトシオンです！採用有難うございます。\nテクノプラネットさんにご指導いただきながらなんとか歌うことができました(涙)\n素敵な世界観を是非たのしんでいって下さい！！\n(Kuroto Sion)',
      },
      {
        artist: "お月さま交響曲(第5回目配信楽曲)",
        title: "Call of the World",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_02.mp3",
        comment:
          "この度は採用いただきありがとうございます。\n作詞を担当致しました大宮水那瀬です。\n今回の楽曲は作曲・342さん、ボーカル・ケィニさんの3名で制作いたしました。\n疾走感のある、気持ちの良い楽曲になっておりますので沢山プレイして頂けると嬉しいです。\n(大宮水那瀬)\nこのたびは採用ありがとうございます！\nいつものメンバーで全力で制作いたしました。\nプレイしてくれる方々に気に入ってもらえたら幸いです！\n(342)\nボーカルのケィニです。\nこの度は採用いただきありがとうございます！\nこの楽曲を歌わせていただけることが決まったとき、この曲が持つ音や光よりも早く遠くまで走り抜けるようなスピード感と、前に進んでいくぞ！という熱量を歌にも込めて皆さんにもお届けしたいと思いました。\nその願いがこうして採用という形で叶い、とても嬉しく思っています。\nぜひこの楽曲のエネルギーを全身で感じて、たくさんプレイしてください！\n(ケィニ)",
      },
      {
        artist: "からとP vs タケノコ少年(第5回目配信楽曲)",
        title: "ЯegreT of MemoRy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_03.mp3",
        comment:
          "『哀れな歯車の声を今、僕は叫んでいるよ』\nVIVID WAVE 制作決定記念楽曲コンテストに続き採用いただきありがとうございます。\nからとPと申します。\n無機質な世界で各楽器が織り成す、感情的なフレーズを感じていただければ幸いです。\n実は締切前日の23時に「完成！」と2人で喜んでいたのですが\n僕がいきなりサビのメロを全て書き換えてしまう大罪を犯してタケノコ少年を困らせてしまいました。ごめんねタケノコくん(´๑•_•๑)\n(からとP)\n採用いただきありがとうございます！\nn度目ましてタケノコ少年です！\n今回はからとPさんとバチバチに合作させていただきました！\nサビメロ総入れ替えという大罪もぼくの手にかかればちょちょいのちょいでした。いいんですよからとPさん\n今回は作曲もパート毎に分担したのでどこがどっちかな～って探してみてくださいね٩( ᐛ )و\n届け世界の果てに～！\nはっはっは!!!!!!\n(タケノコ少年)",
      },
      {
        artist: "まろん (IOSYS)(第5回目配信楽曲)",
        title: "Jacob’s Elevator",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/5_04.mp3",
        comment:
          "お久しぶりです！イオシスのまろんと申します！\nこの度は採用いただきまして、誠にありがとうございます。超絶恐縮です！！\nKACも8thということで、今回は色々なロマンを詰め込んでみました。\nこの楽曲は、もしも旧約聖書のヤコブが神話で夢見た梯子を近未来に作ったとしたら・・・。　というテーマに制作致しました。\nつまるところ、みんな大好き宇宙への軌道エレベーターです。えっ、好きだよね？\n無駄にそれっぽい壮大なイントロから始まり、次々と迫り来る声ネタと縦横無尽に駆け巡るサウンドで、地球から宇宙までの果てしない旅を表現してみました。\nゲーム画面のレーンを軌道エレベーターの側面に見立てて、猛スピードで空へ駆け上がる。そんなイメージでしょうか。\nいつか行きたいね、宇宙。\n神話と現代の融合したハチャメチャな世界観を楽しんで頂ければ幸いです！！！\n(まろん)",
      },
      {
        artist: "uma vs. モリモリあつし(第4回目配信楽曲)",
        title: "FIRST：DREAMS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_01.mp3",
        comment:
          "お久しぶりです。umaと申します。\nSOUND VOLTEXの採用コメントでこうやってお話することも大分久しく感じております。\n「FIRST：DREAMS」は私が用意してきました歪んだキック等のハードな音を基礎としてその上にモリあつさんのエッセンスそのまま載せた楽曲となっております。\n（きっちりと作業分担した訳ではないので私のフルートのメロディが入ってたり、モリあつさんのタム回し等のドラムも入っております）\n「uma vs. モリモリあつし」名義は東方妖々夢 ULTIMATE MEDLEY、Ärcheを境に公募では暫く辞めようと言われてた時期があり、久しぶりの合作名義ということで正直なお話をすると多大なプレッシャーを抱いておりました。\n最終的にはこうして皆様の元へ届けられて大変嬉しかったと共に安堵しております。\nぜひともプレイの程よろしくお願いいたします。\n(uma)\nいつも大変お世話になっております、モリモリあつしです。\nこの度はThe 8th KAC オリジナル楽曲コンテストに採用いただき、誠にありがとうございます。\n隠していたことでもないのですが、実は自分は公募に関して、\nThe 5th KACオリジナル楽曲コンテストで採用をいただいた「Demise Quartet」以降数年、\nボーカルやジャケットのような自分自身でカバーできない表現を除き、合作として楽曲を投稿することを自主的に禁止しておりました。\n合作が多かった理由はきちんとあるものの、話すと少し長くなるのでその理由に関してはまたどこかでお話できればとは思うのですが、\n禁止した理由といたしましては、きちんと自分ひとりの力で腕試しがしたかった、というものがありました。\nそして、現在はありがたいことに「モリモリあつし」と単独名義で表記されている楽曲も、少しずつ増えていきました。\nそろそろ、禁止を解いてもいいんじゃないかと思いました。\nそして、解くのであれば「uma vs. モリモリあつし」だ、とも思いました。\n本曲「FIRST：DREAMS」では殺意を込める担当をさせていただいております。\n何かしら、響くものがあれば、幸甚に存じます。\n(モリモリあつし)",
      },
      {
        artist: "YumAeL ex. 溝口ゆうま(第4回目配信楽曲)",
        title: "JǛPITΨR ♃ GЯÃVITÝ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_02.mp3",
        comment:
          "この度はインスト曲での採用ありがとうございます　拙者、堕天使ユマエルと申します。\n溝口ゆうまという人間が怠けていたので憑依という形で地上に降り立ちました。\n過酷な環境の木星をテーマに美しくも暴力的な曲として制作致しました。曲名は「ジュピターグラヴィティー」です。\n勿論、瞬間移動で取材もして参りましたが風速200mでカメラが吹っ飛びました、撮影ならず残念！\nその悔しさをバネにBPMが205になりました。是非この曲を遊んで頂き「木星ヤバイ」と感じて頂ければ幸いで御座います！\nそして私は正気です。\n(左手が疼く人間　溝口ゆうま)",
      },
      {
        artist: "Λerdammt(第4回目配信楽曲)",
        title: "empty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/4_03.mp3",
        comment:
          "頭の中に収まり切らないほどたくさんの想いを込めて作りました。\nでも、曲名は「empty（空っぽ）」です。\nさて、なぜでしょう！正解はCMのあと！テレビをご覧の皆様も是非ご一緒にお考えください！\n《追伸》\n制作当時、様々な面で力になってくれた人がいます。\nその方がいなければ、この作品が完成することは絶対に有り得ませんでした。\nこの場をお借りして、改めてお礼をさせてください。\n本当に、ありがとう！\n(Λerdammt)",
      },
      {
        artist: "cosMo＠暴走P(第3回目配信楽曲)",
        title: "THE凸GENERATOR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_01.mp3",
        comment: '――"彼"はとても強い。何故なら凸いから\n(cosMo＠暴走P)',
      },
      {
        artist: "かゆき(第3回目配信楽曲)",
        title: "clear:wings",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_02.mp3",
        comment: "愛\n(かゆき)",
      },
      {
        artist: "HOUJIROU(第3回目配信楽曲)",
        title: "Atropa bella-donna",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_03.mp3",
        comment:
          "HOUJIROUと申します。\n曲名の｢Atropa bella-donna｣は、同名の毒草から。\n強力な毒を持ちながらも、イタリア語でbella donnaは美しい女性を意味します。\n壮大で華やかな音色は皆が注目する「美しい女性」であり、激しく余裕を与えない曲調でプレイヤーを苦しめる「毒」を持つような楽曲となっております。\n高難易度の譜面はそれなりに難しくなると予想しますが、この毒に打ち勝ってKAC出場選手達のようなランカーを目指しましょう！\n(HOUJIROU)",
      },
      {
        artist: "Crawk × Capchii(第3回目配信楽曲)",
        title: "Barbatos",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_04.mp3",
        comment:
          "こんにちは。Capchiiと申します。\n今回もCrawkさんと共同でコンテストに殴り込みにかかりました。\nCrawkさんの織り成す悲しくも優雅で(トリルな)旋律に、さらに拍車をかけるように悪魔的で暴力的なシンセとキック、ギターを詰め込みました。\n悪魔がきっと貴方のクリアゲージを刈り取っていくでしょう...\nｺﾜｸﾅｲﾖ！ｱｿﾝﾃﾞﾐﾃﾈ！\n(Capchii)\nCrawkと申します。\n主にヴァイオリンとピアノを担当しました。\n7th KACの「Wings of Glory」では希望を曲に乗せましたが、今回は絶望や悲壮感を表現しました。またトリルを多めに入れてしまいました。\n原案段階から既に決めていた、Capchiiさんによる凶悪なマシンガンキックをお楽しみください！\n(Crawk)",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第3回目配信楽曲)",
        title: "Xicholauncher",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/3_05.mp3",
        comment:
          "レイディース・アンド・ジェントルメン！\n採用ありがとうございます。隣の庭は青いの庭のほうです。\n俺、悔しいんです。Xibercannonじゃあプレイヤーの皆さんを殲滅することはできなかった。\nそこで最新の科学技術を駆使し、さらなる進化を遂げた兵器を作り上げることに成功しましたので、\n今度こそは皆さんを返り討ちにしてやります…………かかってこいや！！よろしく！！\nちなみに英語読み上げボイス…ほとんど俺です。笑\n(庭師)\nボルテプレイヤーの皆々様、お久しぶりです！隣の庭は青いの青い方担当、Aoiと申します。\nKACの名を冠するコンテストに庭担当の人と帰ってくる事ができました。大変光栄と存じます。\n「抑えきれないイカれた衝動」をテーマに、感情全部ロケットランチャーに込めてブチかます！」\n…という表向きのテーマに加えて、前作のテーマも踏襲しつつ、無限の砲撃を倒したボルテ戦士たちへの我々の復讐、みたいな感じでもあります。\nあと今回の武器にはちょっとした細工もしておきました。結構高出力に仕上がったのではないでしょうか。\n…と、いろいろ書きましたが、SOUND VOLTEXに御託などいらぬ！ただ流れてくるオブジェクトを捌くのみ！全宇宙のボルテ戦士の皆様、お手合わせ願います。\n(Aoi)",
      },
      {
        artist: "Cororo feat.Yuria Miyazono(第2回目配信楽曲)",
        title: "翠雨の祷",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_01.mp3",
        comment:
          "ご採用いただきありがとうございます。\n今回はKACという大会に集う、プレイヤーの思いを雨に例えながら制作しました。\n「翠雨」は5月の雨を指す言葉なので季節外れではあるものの、\n実は前作で神話＝ボルテ、芽＝プレイヤーに例えていたこともあり、\n響も字も素敵なこの言葉を曲名に使おうと決めました。\nYuria Miyazonoさんの素敵な歌声で更に増した幻想感を、楽しんでいただけたら幸いです。\n(Cororo)",
      },
      {
        artist: "memex(第2回目配信楽曲)",
        title: "Sacrifice Escape: 不条理の模倣による感情と代償",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_02.mp3",
        comment:
          "初めまして、VR空間で音楽活動を行っているバーチャルオルタナアーティスト、memexのぴぼと申します。\nこの度は採用頂きありがとうございます！\n(ぴぼ)\nmemexのアランです。採用頂きありがとうございます！とっても嬉しいです。\n夢が一つ叶いました、memexの曲をどうぞよろしくお願いします。たくさん遊んでもらえたらもっと嬉しいです！\n(アラン)",
      },
      {
        artist: "とろまる(第2回目配信楽曲)",
        title: "Enigma II",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_03.mp3",
        comment:
          "とろまると申します。この度は楽曲採用いただき大変光栄です。\n今作はタイトルが表している通り、The 5th KAC楽曲コンテストの際に採用いただいた「Enigma」を今の自分の感性で再構築した曲です。\n使用した音色は同じですが、当時からは技術も知識も数段成長したことで単純に音数が増えただけではなく、あらゆる面でより複雑に進化しました。\n(とろまる)",
      },
      {
        artist: "MisoilePunch♪(第2回目配信楽曲)",
        title: "Aurolla",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_04.mp3",
        comment:
          "「引き返せるうちは旅ではない、引き返せなくなった時に初めてそれは旅になるのだ。」\n僕らなりの再出発の曲です。\n来年はこれの一万倍綺麗なオーロラを見に行きます。\nまた次回も頑張ります。\n(MisoilePunch♪)",
      },
      {
        artist: "Ellim Gnirps vs よみぃ(第2回目配信楽曲)",
        title: "SociuS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_05.mp3",
        comment:
          'よみぃです。元々僕が書いたある１曲を、\nEllim Gnirpsさんが非常にカッコよく編曲してくれました！\nギター＆ストリングス、ピアノが縦横無尽に駆け巡るので、ノッて頂けたら幸いです。\n(よみぃ)\nWe had a blast, it was so much fun!\nPlease enjoy your "VIVID WAVE"!!!\nBest wishes,\n(Ellim Gnirps)',
      },
      {
        artist: "古屋直雪(第2回目配信楽曲)",
        title: "Glorious Journey",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/2_06.mp3",
        comment: "古屋直雪と申します。\n僕も旅に出ます。ありがとうございました。\n(古屋直雪)",
      },
      {
        artist: "かめりあ(第1回目配信楽曲)",
        title: "*Feels Seasickness...*",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_01.mp3",
        comment:
          'Welcome to seasick show!\n少年少女、紳士淑女の皆さんこんばんは、かめりあと申します。\nご採用ありがとうございます。\nそして他のご採用者の皆さん、KACで勝ち上がった決闘者の皆さん、おめでとうございます！\nさて、今回ご採用いただいた楽曲、「*Feels Seasickness...*」という楽曲は、名前通り"船酔い"をテーマにした曲です。\n船酔いをテーマにした曲というのも中々類を見ないといえばその通りなのですが…、マジか…！\nというのも、KACにどんな曲を応募しようかな～と考えていた所、\n実は拙作、SOUNDVOLTEX IVでご採用いただいた曲は"HEAVENLYHAVEN"という天国的なサブタイに反して「Lowermost revolt」とか、「Xéroa」とか、\n「Venomous Firefly」とか、かなり真面目で、どちらかといえば深淵を思わせるドロドロした曲ばかりという事に気づきました。\nスピードスターかなで？そういうのも、あったね…！\nそこで、今回は楽しげで、不真面目な曲を作ろう！そしてしっかり航海をテーマにしよう！と思い立った結果、\n"船酔い"がテーマの、夜のパーティを思わせるこの曲ができあがったわけです。\n意味不明なことを言っている自覚はありますが、比較的論理的ですよね。\nその上、前回のKACでご採用いただいた「Xéroa」がかなり直球だったこともあり、\n今回は「そんなボス曲今までにあったか！？」というサウンドの曲を応募しよう、とも思っていました。\nその結果、サウンド的にはGlitch HopやTrap、Bigroom的な音などのベースミュージックを主体に、更にJazz/Swing要素を大胆に取り入れた、\nボス曲としてはかなり斜め上な楽曲になったんじゃないかな、と思っています。\nとはいえここはKAC、"船酔い"というテーマを活かしてソフランをバシバシ乱用しつつ、\nその上5連符や24分ズレのベースといった奇怪なリズムの応酬をそこかしこで繰り広げたり、\n後半は高速三連ハードコアになったりなどなど、「ノレるけどノレない」、とても楽しい（？）楽曲になっていますよ！\nあとは譜面を作ってくださる方がどれくらいカメラをブン回して、まるで荒れ狂う波のようにユラユラ、酔わせてくれるか、という話ではありますが、\nマジの船酔いになりかねないので、この辺りにしておきたいと思います。\n最後に、聞き覚えのあるセリフは皆さんおなじみ、ななひらさんに喋って頂いております！\n一部セリフのみということもあり、今回「かめりあ」単独の名義ではございますが、\n実際めちゃくちゃかわい～いボイスにめちゃくちゃヤバ～いシーケンスが組み合わさって、\n皆さんもそのままビビッドな波に飛び込めちゃうくらいS!ckなサウンドになってますよ。\nそしてななひらさんからは、「おけです」というコメントを頂いてます。\n"桶"に乗ってでも荒れる波を超えるんだ、という熱い想いを感じさせますよね。深いな～！\nというわけで、今回の楽曲も、一癖も二癖もある譜面でツワモノプレーヤーの皆さんを待ち受けることができるのを、\nそしてこの曲を皆さんの手でブッ倒して頂くのを、楽しみにしております。\nありがとうございました、かめりあでした。出港～！\n(かめりあ)',
      },
      {
        artist: "かぼちゃ(第1回目配信楽曲)",
        title: "ΣmbryØ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_02.mp3",
        comment:
          "「かぼちゃさんってプリおねとかの歌い手の方ですよね！？　大ファンです！」って優しくも残酷な言葉に対して「そうですよありがとうございます！」と笑顔で応えてきたが今後は「えんぶりお聞っけぇオっラぁああああんっっ！！！！！　こちとら歌う作編曲家じゃああああああああああああああいっっっ！！！」とｶﾗﾃｰﾁｮｯﾌﾟしながら事故紹介できるね！\n(かぼちゃ)",
      },
      {
        artist: "Hommarju vs RoughSketch(第1回目配信楽曲)",
        title: "Cross Fire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_03.mp3",
        comment:
          "久しぶりのKAC、久しぶりのSDVX、久しぶりのHommarjuです！\nSOUND VOLTEXも7周年おめでとうございます！これからの期待にますます勢い付いてきましたね！\nそんな記念すべきタイミングに何か貢献できることはないかなと考えていたところ、\nラフくんと「ガシっとやってくぞ！」という話で合意したキッカケで誕生しました。\n言葉よりもサウンドでやりとりする事が多く、ラフくんから狂ったパートが届いた日には声が出るほど笑ったり、\n時間が空いたので寝かせたり、ああでもないこうでもないとアイデアを出したりしながら、FLOORに応募していた当時の光景が蘇りました。\n作品を出せなかった期間もあったり、自分のやりたい事・できる事しかできないけど、\nそんな僕を今回も変わらず受け入れてくれたSOUND VOLTEXの器の広さにはとても感激します。ありがとう。\nこれからますます発展していくSDVXが更に盛り上がるように僕らからキックやシンセ十字砲火のプレゼント、どうぞお楽しみください！\nHommarjuでした！\n(Hommarju)\nびっくりした！お久しぶりです！RoughSketchです！\nFLOOR応募は「The 5th KACオリジナル楽曲コンテスト」の「#Endroll」以来なのでびっくりしました！\nHommarju君とサシでメシを食べる機会がありまして、その時に\n「やるぞ！やるぞ！やるぞ！」と言い続けていたらお互いに「やるぞ！」って気持ちが沸いてきたのを覚えてます。\n後日LINEでも「やるぞ！やるぞ！やるぞ！」と言い続けていたらこの曲が完成しました！やりました！\nこの「やるぞ！やるぞ！やるぞ！」と言い続ける事が大事なんだなって思いました。「やるぞ！」お勧めです！\n是非皆様も「やるぞ！やるぞ！やるぞ！」の気持ちでプレイして下さい！きっとやる気が沸いてきます！\nやっていきましょう！やるぞ！\n(RoughSketch)",
      },
      {
        artist: "BlackY(第1回目配信楽曲)",
        title: "GODHEART",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_04.mp3",
        comment:
          "「結末は神のみぞ知る」、なんてよく言われますね。\nでも僕しか知らないことも何かしらきっとあると思うので、実質僕も神かもしれない。\nその理論で言えばこの世界で生きてる人間全員も実質神だと思う。\nみんなすごい。神。生きててえらい！\n(BlackY)",
      },
      {
        artist: "Juggernaut.(第1回目配信楽曲)",
        title: "THE HEAVEN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_05.mp3",
        comment:
          "はじめまして！Juggernaut.と申します。この度は採用、本当にありがとうございます！\n採用で叫び、そして受賞と知ったときは狂喜乱舞しました。この喜びは一生忘れないです。\n誰だテメーって人が多いと思うので自己紹介させていただきます。\nジャガーノートといいます。ダブステップっぽい音の入ったハードコアを好んで作っています。\n名前だけでも覚えていってくれると嬉しいです！\nさて、今回採用いただいた楽曲は「THE HEAVEN」というタイトルです。\nめっちゃストレートに命名しました。インパクト！\nボスボスしい、激しい、強い、エモい、自分が好きな要素をたくさん詰めこみました。\nKACコンテストに相応しい、勢いのある作品になったと思います。\n疾走感を楽しんでいただければ幸いです！よろしくお願いします！\n(Juggernaut.)",
      },
      {
        artist: "Yu-dachi(第1回目配信楽曲)",
        title: "祝福の色彩は想い結ぶ君たち迄",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_06.mp3",
        comment:
          "はじめまして、Yu-dachiと申します。この度は採用誠にありがとうございます。\nBEMANIに触れて幾年、ゲームにお力添えできることを大変嬉しく存じ、感謝致します。\nKACにふさわしい楽曲ということで、暴龍天やIIDXの皆伝に挑戦しては落ちていた頃の「あともう少し手を伸ばせば...」という悔しい思いや合格したときの達成感や込み上げる感情を思い出しながら、楽曲を制作しました。楽しんでいただければと存じます。\n音楽ゲームで手足のケアは大切です。ローストビーフを作る時肉を常温に戻す下準備のように、怪我をしないよう・冷やさないように万全の対策をしてゲーセンに向かいましょう。\nどうか楽曲共々末永くよろしくお願い致します。\n(Yu-dachi)",
      },
      {
        artist: "はがね(第1回目配信楽曲)",
        title: "ULTRAVELOCITY",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_07.mp3",
        comment:
          "こんにちは、はがねです。\nSOUND VOLTEXプレイヤーの皆さんにお会いするのは二度目になりますが、オリジナル曲でお会いするのは初めてですね！\nKACコンテストに合格出来てとても嬉しく思っているのと同時に、早く皆さんにプレイして貰いたくてドキドキしています。\nSOUND VOLTEXの中では並な感じのBPMですが、少し変則的なリズムを用いているので、\n慣れてくる頃にはスピード感ノリノリでプレイして頂ける曲になっているはずです！ヨロシクオネガイシマス！\n(はがね)",
      },
      {
        artist: "Yooh(第1回目配信楽曲)",
        title: "Destiny",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/24/result/sound/1_08.mp3",
        comment:
          "採用ありがとうございます。Yoohです。\nありとあらゆる思いをこの曲にぶつけてみました。\n是非ともその思いを実際のボルテ筐体の前で感じ取っていただければ幸いです！\n(Yooh)",
      },
    ],
  },
  {
    id: "original23",
    name: "SOUND VOLTEX VIVID WAVE 制作決定記念 オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_23.jpg",
    sounds: [
      {
        artist: "BlackY(第9回目配信楽曲）",
        title: "Vividly Impromptu",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/9_01.mp3",
        comment:
          '採用ありがとうございます！BlackYです。\nSOUND VOLTEX VIVID WAVE！！ボルテもついに5作目か～！思い返せばいろいろありすぎて本当いろいろです。\n自分の作曲人生はほとんどSOUND VOLTEXと共にあるようなモンなので、今作もまたこうして関われること、大変嬉しく思います。\n今回採用いただきました「Vividly Impromptu」という曲は、もうそれ以上でもそれ以下でもないピアノダンスって感じのピアノダンスです。\n今までの自分のボルテ曲の中でもかなりピアノしてると思います(当社比)。最近自分の中では[Piano]×[Dance Music]、略して"PDM"って呼んだりもしてます。\n7年というFLOOR人生(？)でいろいろな苦悩や葛藤を経てようやく辿り着いた、ひとつの"答え"みたいなものを胸に今回、思うがままにカマしてみました。\nやっぱこういうピアノがバンバンなってる4つ打ちダンスミュージックが自分は大好きなんだなあ～ってあらためて思いました。作っててすごい楽しかった。\n楽しくなりすぎて思わず体が動いてしまってエアピアノ演奏とかしてました。]\nちなみにピアノは一応小っちゃい頃に2年ぐらい習ってたんですけど、今はほとんど弾けないです。どうした。\n自分は音ゲーにおいてこの手の楽曲は、曲調的にもBPM的にもすごく"プレイしてて楽しい"ジャンルだと思います。\n思えばBEMANIデビュー曲だったポップン公募の「Southern Cross」の時もそんな気持ちで作ってたかも。\nだからそういう意味では原点回帰とも言えますね。\nピアノ×音ゲー＝サイコー！楽しんでもらえれば幸いです！\n(BlackY)',
      },
      {
        artist: "709sec. feat.Yui Chinen(第9回目配信楽曲）",
        title: "祭囃子",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/9_02.mp3",
        comment:
          '初めまして、あるいはいつもお世話になっております、709sec.です。\n近くで祭りをやってると聞くと行かずにはいられない、あの感じ。\n人込みは苦手なはずなのに、やたらテンションがあがってしまう、あの感じ。\n人見知りのくせに、屋台のおっちゃんとはなぜか楽しく話せてしまう、あの感じ。\n50年後、100年後の祭りにも"あの感じ"が残っているといいな、という思いを込めてこの楽曲を作りました。\n好きな屋台は海鮮串焼きとシャーピンです。何卒。\n(709sec.)\n採用おめでとう！ありがとう！ということで、祭囃子に誘われ現在軽井沢を満喫中の知念です。\n「祭囃子」の歌入れのときは風邪で咳ゲッホゲホしながらも根性で歌いきったなぁ～なんてことを軽井沢の清らかな風を受けて思い出しております。(東京の空気とは全然違う…なんてこったぃ！)\n温泉入って美味しいもの食べたら帰ります。(帰りたくない゛い゛ぃぃィィ！！！)\n(Yui Chinen)',
      },
      {
        artist: "RoughSketch & Hommarju(第8回目配信楽曲）",
        title: "PARTY TIME!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_01.mp3",
        comment:
          "おはようございます！RoughSketchです！パーティーの時間ですよ！\nSOUND VOLTEX VIVID WAVE稼働を祝してパーティーをしに来ました！！\nHommarju君とThe 8th KACオリジナル楽曲コンテストの「Cross Fire」を作りながら\n「せっかくだからパーティーしようぜ！」みたいなノリで勢いよくパーティーしたのがこの曲です！\nCross Fireは先手Hommarju君だったので今回のPARTY TIME!は先手RoughSketchでやってみました！\n底抜けに明るいメロディが下りてきたので制作中が既にパーティーでした！\nパーティーやるぞ！パーティーやるぞ！パーティーやるぞ！\n(RoughSketch)\nSDVX新作稼働を記念してラフくんと再び合作です！\n「PARTY TIME!」はその名の通りパーティチューンで、僕らの持つハッピーな要素を詰めに詰めた一曲です！\n脳内がお花畑でもヨシ！目からビームが出てもよだれが垂れていてもヨシ！なんでもヨシ！\nお祝いのサウンドをみんなで響かせよう！ヨシ！\nHommarjuでした！\n(Hommarju)",
      },
      {
        artist: "近未来妖怪活劇をかぼちゃが謡う！　いざ！(第8回目配信楽曲）",
        title: "近未来百鬼夜行譚～死返之巻～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_02.mp3",
        comment:
          "ここで一句。\n「コメントに\n魂を\n込めんと」\nうひゃーｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ近未来的自由律俳句ｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ\n(かぼちゃ)",
      },
      {
        artist: "kamome sano(第8回目配信楽曲）",
        title: "ultra turbo",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/8_03.mp3",
        comment: "オーケストラをクビになったのでレーサーになろうと思います。応援してね！\n(さの)",
      },
      {
        artist: "pan(第7回目配信楽曲）",
        title: "Pixelated Platform",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/7_01.mp3",
        comment:
          "こんにちは。panです。\n普段は様々なジャンルのインスト曲を製作しています。\nSOUND VOLTEXシリーズに僕の曲を収録して頂くのは2度目となります。\nこの曲は前回のMeteorGlow Aftermath同様、僕の作風を絞りに絞った曲で勝負を仕掛けました。\n一つ一つの音全てに拘ったこの曲は、完成した頃から自分にとって思い入れの深い一作だったので採用された事を知った時は狂喜乱舞でした。\nカワイイ音、チップチューン系が好きな人は無限に遊びたくなると自負しているので是非楽しんでプレーしてください！",
      },
      {
        artist: "シルクパラソル（yoa＆かゆき） feat. まめこ(第7回目配信楽曲）",
        title: "D1g1t1ze b0dy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/7_02.mp3",
        comment:
          "はじめまして！まめこと申します。\nこの度は採用誠にありがとうございます！\n歌わせていただけることになった時点でうれしくて心がぴょんぴょんしていたんですけど、採用の連絡をいただいて夢みたいな気持ちで、このコメントを書きながらも夢みたいな気分なので、プレイするまでまだまだ実感が沸かなそうです…！\n「D1g1t1ze b0dy」のかっこいいメロディにめいっぱいノっていただけたらうれしいです！\n（まめこ）\n御無沙汰しております。作詞作曲ミックス担当のyoa(dawn-system)です。\nこの場で作曲者と名乗れることを光栄に思います。\n今回は、大部分のリアレンジを担当してもらった親友と共同主催しているサークルとしての作品になります。\n普段そこで発表している曲調とは異なりますが、かゆきらしい演奏と、まめこさんの力強い歌声を堪能していただければ幸いです。\nどうぞ、よろしくお願い致します。\n（yoa＠電脳少女っていいよね）\n愛に満ち溢れております。\n心より感謝申し上げます。\n（愛マンかゆき）",
      },
      {
        artist: "brz1128(第6回目配信楽曲）",
        title: "Cynical Joker",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_01.mp3",
        comment:
          'brz1128です！図柄を揃えるのが大好きです。\nジャケットを製作していただいたRinne.6さんからお話をいただきまして、わぶたんセンパイっぽい曲を作りました。\n彼はなんとなくジョーカーっぽいな、と思ったのでそんな感じの雰囲気になってます。ご同意いただけると嬉しいです。\nワブル要素はかなり少ないですが、よく聞くと大事なところで何回か入ってますのでそういう所に注目していただくと面白いかもしれません。\nロアーさんとRinne.6さんに素晴らしいジャケットを製作いただいてますのでそちらも併せてよろしくお願いします、お二方とも本当にありがとうございました！\n(brz1128)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：ロアー vs. #Rinne.6\nCynical Jokerのジャケット描かせていただきました！ロアーです！イラレと忍者が大好きです、\nbrz1128さんのテンション爆上げな音楽にひっぱられて賑やかカラフルわぶたんセンパイ盛りだくさんになりました！\nノリノリで描けて楽しかったです！ありがとうございます！\n「わぶたんセンパイ描きませんか！？」と提案してくれたのはジャケット文字担当のロクさんでした。\nジャケットそれぞれに合わせた文字をたくさんデザインしてくれてありがとうございます！\n(ロアー)\nおはようございます!!\nmilkyway TRAXXのRinne.6ことロクです。道化師が大好きです。待ちに待ったVIVID WAVE稼働おめでとうございます!!\nキュリオシティの時に出来なかった"4"譜面で繋がるものそして既にいるボルテキャラをフィーチャーしたジャケット等\nⅣ記念コンテストからやりたかった事が沢山できました。brz1128さん、ロアーさんには大変感謝してます。\n同時にまだまだ自分の力のなさも感じたので精進します。\nMXMジャケットを脛毛しか見えない配置にしようとしてお二方に総ツッコみされたのはいい思い出…\n(Rinne.6)',
      },
      {
        artist: "黒魔(第6回目配信楽曲）",
        title: "Mischievous theater",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_02.mp3",
        comment:
          "採用頂きありがとうございます！　黒魔です。\n「Mischievous theater」はタイトルの通り、「いたずら好きな劇場」をイメージして作った楽曲です。\nプレーしながら、色んな物語を妄想して貰えたら嬉しいです。どうぞ、よろしくお願いします！\n(黒魔)",
      },
      {
        artist: "Yu_Asahina(第6回目配信楽曲）",
        title: "eighth-slave",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_03.mp3",
        comment:
          "平素よりお世話になっております、Yu_Asahinaです。\nSOUND VOLTEX VIVID WAVE稼働おめでとうございます！\nもう5ですか。5っていいですよね。しかもヌルヌル動きますし。\nこの度、1stアルバム「HAELEQUIN/HAELEQ∩INZ」から人気があった「eighth-slave」をゲームエディットにて収録させて頂けることとなりました。\nアルバム自体が「HAELEQUIN」の世界観をより深く描いていこうと制作したコンセプトアルバムでして、その影響が楽曲から感じ取れると思いますが、「slave」と名の付くようにより悲哀や孤独の感情に寄り添った楽曲です。\n孤独でも頑張ってください。結局最終的にはひとりなので問題ないと思います。\nひとりなあなたの救世主\n(Yu_Asahina)",
      },
      {
        artist: "Tsubusare BOZZ(第6回目配信楽曲）",
        title: "PIZZATIME",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/6_04.mp3",
        comment:
          "こんにちは!つぶされBOZZです。\nPIZZATIMEの採用とてもうれしいです！\n「RAGTIME CORE」って僕が勝手に呼んで勝手に作ってるジャンルなんですが\nまさかRAGTIME COREがSOUND VOLTEXに入るとは。。。感動です！\n楽しくてハチャメチャでわくわくする曲なのでたくさんプレイしてほしいです。\n僕も今までは見てるだけだったけどSOUND VOLTEXに挑戦するぞ！\n自分の曲へたくそだったら恥ずかしいもんね..！\n(Tsubusare BOZZ)",
      },
      {
        artist: "Croire(第5回目配信楽曲）",
        title: "エンゲージ〆ント",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_01.mp3",
        comment:
          "久しぶりです！上村香月です。\n今回はＯＲＩ姫さんとのユニット「Croire」第一弾楽曲です！\nテンポチェンジや変拍子、細かいキメ等取り入れた緊張感ある楽曲になってます。\nよろしくお願いしますー！\n(Croire　上村香月)\nエンゲージ〆ントにてボーカルを担当させていただきましたＯＲＩ姫です。\nこの曲では大人っぽく、かっこよく、そして後半の疾走感に負けないよう力強くパワフルに歌いました。\nプレイ中はいつもと違うＯＲＩ姫の歌にも集中して聴いてくださいね☆\n(Croire　ＯＲＩ姫)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：彬音\nどうも彬音です。この度はCroireにお邪魔させて頂きました。\nエンゲージ〆ントは噛み合いと意味を持っており、互いの心を噛み合うという形でアシタ&カヲルを描きました。\n曲の方も、構成案などちゃっかり自分が立案させて頂いては、それをすぐさま構成した香月さんとそれを表現したＯＲＩ姫さん。\n流石だなと思いました…！\nCroireの歯車の噛み合い、是非楽しんでいただければと思います。",
      },
      {
        artist: "Dustvoxx(第5回目配信楽曲）",
        title: "Sunflower Vibes",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_02.mp3",
        comment:
          "Dustvoxxと申します。\nSOUND VOLTEXにおきましては名義変更後初の、またオリジナル楽曲としても初の採用ということで、とても光栄です！\n8bitライクなサウンドをベースにハードテックのフォーマットに落とし込んでみました。\nフラワー・パワーを感じていただければ嬉しいです。\n何度も聴くことで深みが出てくるような楽曲を目指しましたので、是非楽しんでプレイしていただければと思います！\n(Dustvoxx)",
      },
      {
        artist: "ginkiha(第5回目配信楽曲）",
        title: "CLOUDS FLYER -sdvx edit-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_03.mp3",
        comment:
          "NIZI-RINGOのginkihaです！\n曲名の通り空を飛び抜けているようなイメージの曲です\nふわふわした爽快感を楽しんでいただければ幸いです\n(ginkiha)",
      },
      {
        artist: "MasKaleido VS 709sec.(第5回目配信楽曲）",
        title: "V Sen5eS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_04.mp3",
        comment:
          "作曲編曲を担当しました、MasKaleidoです。\n採用頂き、誠にありがとうございます。\n今回の「ファイブセンシズ」という楽曲は、\n新機種のイメージを、ビビッドでキャッチーなデジロックで表現しました。\nポップで、ハードでかっこよく、少しマニアックでもあったり。\n709sec.さんの歌と共に、楽しんでもらえたら嬉しいです。\n(MasKaleido)\nMasKaleido氏と初タイマンを張らせて頂きました、作詞＆歌唱担当の709sec.です。\n記念すべきボルテシリーズ第五弾ということで、タイトルも「V Sen5eS」（＝五感）となぞらえてみたり、\nVIVIDな世界観であったり、僕の口癖であったりを盛り込んだ歌詞にもお気づき頂けたらこれ幸いです。\n思いっきり楽しもうZE！\n(709sec.)",
      },
      {
        artist: "諸星なな feat.加藤はるか&YKI(第5回目配信楽曲）",
        title: "偶然？ 必然？ アンビバレンス！",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/5_05.mp3",
        comment:
          "この度は採用本当にありがとうございます！\n作詞曲・編曲の「諸星なな」です。\nSOUND VOLTEX VIVID WAVE稼働おめでとうございます！\n「もう平成も最後なんだぞ！（制作当時）」というのをテーマに作ってみました！\n是非ゲームセンターで元気にプレイして頂けると感激です…！\n最後にこの場を借りまして…\n楽曲完成まで私一人の力では決してたどり着けませんでした。\n携わってくれた加藤はるかサン、YKIサンには心から感謝します。\n本当にありがとうございました！\n(諸星なな)\nこの度は採用頂き大変嬉しく思っております！\n素晴らしい曲を歌わせて頂いたこと、こうして評価して頂けたことに感謝です(*^_^*)\nこの曲をたくさんの方に聞いて頂けたらいいなと思います♪\n(加藤はるか)\n初めまして、YKIです。\n今回微力ではありますが関わらせて頂いた作品が採用され、大変嬉しく思います。\nとても楽しい曲だと思うので、ゲームも楽しんで遊んでいただければと思います。\n僕も楽しく遊びます！\n(YKI)",
      },
      {
        artist: "あらいぐまファクトリー feat. okogeeechann(第4回目配信楽曲）",
        title: "アライヴ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_01.mp3",
        comment:
          "この度はご採用頂き、ありがとうございました。\n東方アレンジでお馴染みの、珍獣サークルあらいぐまファクトリーです｀ω´)=333\nバリバリの青春時代をビーマニやギタドラ（※当時はキーマニを加えたセッション全盛期）で過ごした自分が、\n今こうやって楽曲提供しているとは、非常に感慨深いものがあります。\n音楽ゲームをきっかけに音楽を初めて本当によかった。\n制作陣営の方々にこの場を借りて感謝を申し上げます。\n楽曲コメントですが、高難易度の曲…いわゆる「ボス曲」をプレーしている時の\nギリギリな心境を楽曲と歌詞に投影しました。\n爽快感のあるハードロックを皆様是非ご堪能ください。\n(あらいぐまファクトリー feat. okogeeechann)",
      },
      {
        artist: "Reaper(第4回目配信楽曲）",
        title: "Circulator",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_02.mp3",
        comment:
          'SOUND VOLTEX VIVID WAVE、楽しんでいますか？\nこんにちは～。どうも、Reaperと申します。\n名前だけでも覚えて帰って頂ければなと思っております。よろしくお願いします。\n今回の楽曲「Circulator」は、"攻撃的なベース"と"スピーディーな展開"がコンセプトになっています。\n是非この二点を味わって、思う存分楽しんで頂けたら幸いです。\n人生で初の公募参加、そして初の採用をとても光栄に思います。\nありがとうございました！\n(Reaper)',
      },
      {
        artist: "せいぎのあおぢる(第4回目配信楽曲）",
        title: "To:BrandNewDeadline",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_03.mp3",
        comment:
          'ミラクルポップなアドベンチャー「Brand New Deadline」へようこそ！！\n"せいぎのあおぢる"初のRPGな楽曲になります。\n～凱旋か天国か、結末を決めるのはあなたです。～\n楽曲説明にクサ～い触れ込みとボルテへの想いを載せ、無事に採用頂きました。有難うございます。\nユニット一同、ボルテには昔から浅からぬ思い入れがあり、やっと両想いになれたと感極まっています。\nそんな感動を皆さんにもお裾分けできるような、壮大めな楽曲になっておりますので、ぜひ楽しんでみてください！\n(せいぎのあおぢる)',
      },
      {
        artist: "Yuta Imai(第4回目配信楽曲）",
        title: "Into The Madness",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/4_04.mp3",
        comment:
          "全国1億人のボルテプレイヤーの皆様はじめまして！Yuta Imaiと申します！\nボルテ新作稼働おめでとうございます！\nコチラの楽曲は毒属性っぽいハードスタイルとなっております！\nバシバシと可愛がってあげてください！\n(Yuta Imai)",
      },
      {
        artist: "ツマミセンタイタテレンジャー(第3回目配信楽曲）",
        title: "ツマミ戦隊 タテレンジャー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_01.mp3",
        comment:
          '深淵の闇より出でし光芒を描く絶許王PH様の命を受け、この俺様がネメシス・コアを支配して\nボルテを触れる者共に過剰なストレスを与えてやるのだ！ヒャーッヒャッヒャッヒャ！\n新作の仕様変更により判定調整を悩ませたり、FLOORの仮採用の返答期限をもっと短くしてやるぜ～！\nそして追加エフェクトにINFの信k…何だ？\n…何？常連勢？なんだそいつらは？\nそうか、ならば俺様の出番のようだな…\n(怪人・狂気児童)\nオレの名は本町 赤(ほんまち れっど)。\n生まれた頃から音楽のある生活をしていたから、音楽学校に行くのは当たり前だった。\n昼は学校、夜はたくさんの仲間たちや音楽に囲まれて生活をしていたある日、突然クラスメイトたちが次々と倒れてしまった…！\nそしてどうしたんだ…？オレの体が…地獄の業火で焼けるように熱い…！！！\nどうやらこの世界にPUCを出すまで帰れなくするヤツが現れたらしい！\nおいおい、そんなことをされちゃあ2月5日や5月10日にみんながゲームセンターで遊べなくなってしまうじゃないか！！\nみんなが楽しく遊ぶ場所を奪われる訳にはいかない…！\nお前たちの野望を打ち砕く為、そして平和を取り戻す為、集まった仲間と共に立ち上がった！\nオレのサウンドはハイエナのように響くぜ！準備はいいか？Are you ready!?\n(タテレンジャー レッド)\nフッ…ボクの名は"クロノ・Y・アルファオメガ"…。\n時を越えて30XX年から来た暴龍力≪ボルフォース≫の使い手…。\n黒と白から紡ぎ出された重力の悪夢から世界を救うため、この時代に来たのさ…。\n今宵、混沌なる審判の刻…。ボクのイカロスの翼が、悪を終焉≪ラスト・オメガ≫へと導く…!!!!\n(本名は黒木 五郎)\n(タテレンジャー ブラック)\nぼくのなまえは　もろいたくみ（師井 匠）。\nカレーがだいすきな　だいがく７ねんせー\nゲーセンでボルテばかりしていたら　気づけばたくさん留年していた\n明るい未来に黄色信号　頭はパニック\n(タテレンジャー イエロー)\nいっけな～い！遅刻遅刻～っ；；\n私、平田七海（ひらたななみ）　永遠の17歳！\nラーメンを食べたりお肉を焼いたりするのが好きな普通の女の子♡\nでもある日、ひょんなことから戦隊モノの紅一点カラー・ピンクに任命されちゃってもう大変＞△＜！\nピンクと言えばお色気担当、溢れ出す壮絶な色気…\n私、一体これからどうなっちゃうの～！？！？\n(タテレンジャーピンク)\n俺は亀田 李亜之助（りあのすけ）。工務店で働く事が大好きで、普段は一日中工事をして暮らしてるんだ。\n今日も仕事に精を出して、普段と同じ1日になる…はずだった。\n仕事場に着くや否や、突如としてボルテ界に立ち込める暗雲…怒り、悲しみ、驚き、恐怖…\n『この世界は我々の手によって支配されつつある』…なんだって!? そんなことは絶対にさせない!!\n強く祈った瞬間、その想いに共鳴したボルテ筐体のツマミとチップから、不思議なAUTOMATION POWERが宿った。\n…このBangin\'な力さえあれば、ボルテ界を、こいつらから守ることができるかもしれない。\nでも、一人じゃ勝てないかもしれない…\nそうだ！俺には、「仲間」がいるじゃないか！\n俺はBPM999で急いだ！\n工事現場を駆け抜け、怪人の目をかいくぐり、そして仲間を呼ぶための"曲"を、"詩"を作ったんだ！\n「ツマミ戦隊 タテレンジャー」、皆の思いを一つにして、斉唱撃波だ!!\n(タテレンジャー ブルー)',
      },
      {
        artist: "Yooh(第3回目配信楽曲）",
        title: "Tribal Trial",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_02.mp3",
        comment:
          "Yoohです。ボルテV稼働おめでとうございます！\n今回の楽曲はトライバルで民族調でごちゃまぜな楽曲となっています。\n面白おかしくした曲ではありますが、実は「音楽ゲームの楽曲において大切な要素は何か」と、意外と真面目に考えて作った曲でもあります。\n（まあそんなことは置いといて）ボルテプレイヤーの皆様は純粋にこの曲で楽しんでいただけたら幸いです（笑）\n(Yooh)",
      },
      {
        artist: "Freezer feat.妃苺(第3回目配信楽曲）",
        title: "Chocolate Parade",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_03.mp3",
        comment: "ボーカルはきいさまこと妃苺、作詞はmippaiの布陣でございます。よろしくお願いします。\n(Freezer)",
      },
      {
        artist: "テヅカ feat. 大西あみみ(第3回目配信楽曲）",
        title: "シープドリーミン",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_04.mp3",
        comment:
          "テヅカと申します！\nこの度はご採用頂き、ありがとうございます。\n「シープドリーミン」という曲です。\n上手さとか成績とか関係なくただただ音楽ゲームが楽しかったころ、\n音楽ゲームに出会った頃の気持ちなどを思い出しながら作りました。\n是非プレイしてみて下さい。\nSpecial Thanks : HaltquinZ♠♥♣♦（ましろま+Rinne.6）\n(テヅカ)\nこの度は採用して頂き、ありがとうございます。\n今回の楽曲はおとぎ話のような、キラキラした世界観を表現できるように歌いました。\n楽しく叩いてくださったら嬉しいです！\n(ボーカル：大西あみみ)",
      },
      {
        artist: "siqlo(第3回目配信楽曲）",
        title: "Adrenaline Rush",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/3_05.mp3",
        comment:
          "SOUND VOLTEXの公募が始まってから苦節約7年…\nずっとチャレンジしてきましたが幾度となく落とされ凹むこと幾星霜…\nしかしやっと、ついに………\n採用通知が来たときは完全に感が極まりました、本当にありがとうございます諦めなくてよかった諦める気もなかった！！\nここからがスタートだ！！！！本気で行くぞ！\n曲について…。僕はオタクなので（？）Hi-TechとRaveとHardstyleを2分に凝縮入れ込みまくり大展開ラッシュ（？）といった感じのアゲアゲでプレイして楽しい（であろう）トラックにしました！（？）\nアドレナリン大放出な音の濁流に一緒に飲み込まれましょう！\n(siqlo)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：AdrenaRinne.6 х Graphite\nおはようございます。\nmilkyway TRAXXのRinne.6ことロクです。。\n枠から飛び出るアドレナリンって感じです!!曲もアドレナリンドバドバ!!\nこの素敵な機会をくださったsiqloさん\nバッチリイメージ通りなキャラを書いてくださったGraphiteさん\nありがとうございます。\n(Rinne.6)\nジャケットのキャラクターを担当させていただきました、Graphiteと申します。\nSOUND VOLTEX VIVID WAVEのイメージに合わせたカラーで、各所に”V”を入れてみました。\n素敵な楽曲と素敵な背景も合わさってとてもVIVIDな作品になっているのではないかと思います！\nAdrenaline Rush！興奮状態でプレイしたい・していただきたいです！？\n(Graphite)",
      },
      {
        artist: "やどりぎ(第2回目配信楽曲）",
        title: "アオアラシ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_01.mp3",
        comment: "初夏の体育館裏を　吹き抜ける風が　好きだぜ・・・　（やどりぎ）",
      },
      {
        artist: "フーリンキャットマーク(第2回目配信楽曲）",
        title: "港町レディ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_02.mp3",
        comment:
          "アキシブ系音楽を製作しているフーリンキャットマークです。\n前作SDVX IVのクリスタルミサイルに続き採用ありがとうございます！とても嬉しいです！\n今回の楽曲はとてもアップテンポで聴いているだけで明るい気持ちになれるナンバーです。リズミカルなドラムにPOPでキャッチーなメロディとストリングスの絡みがとても美しい曲です。\nアキシブ系というジャンルはお洒落な渋谷系の音楽に可愛さをMIXしたものなんですが、SDVXでは珍しい曲調だと思うので是非皆様楽しく遊んで頂けたら幸いです。\n(フーリンキャットマーク)",
      },
      {
        artist: "#EmoCosine(第2回目配信楽曲）",
        title: "VIVID DEBUT!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_03.mp3",
        comment:
          "初めまして、エモコサインと申します。\nこの度は採用頂きありがとうございます、そしてSOUND VOLTEX VIVID WAVE稼働おめでとうございます！\n小さい頃からKONAMIの音楽ゲームをプレイして育ったので、楽曲提供という形で関われて大変嬉しいです。感謝致します。\nSOUND VOLTEX VIVID WAVEの第一印象は「アイドル」だったので、アイドルがデビューする姿をイメージしながらこの楽曲を制作しました。\nタイトルも「VIVID DEBUT!」とストレートに命名しました。\n今、考えてみるとVIVID DEBUT!するのは、このエモコサインでした！\nなんと素敵なタイトル！\n(#EmoCosine)",
      },
      {
        artist: "winddrums(第2回目配信楽曲）",
        title: "Enchanté",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_04.mp3",
        comment:
          'この度は採用頂きありがとうございます。\nwinddrumsです。\nEnchantéというのは"魔法にかける"や"魅了する"といった意味です。\nハネてる様でイーブンなグルーヴの中に、魔法にかかった様なテンション増し増しなコードと進行、リズム遊び、メロディ、音使いを沢山散りばめました。\nテンポ自体は遅めなんですが、４分音符のグルーヴで身体を動かしながらプレイして頂ければ多分気持良くノレるはずです。\nありがとうございました！\n(winddrums)',
      },
      {
        artist: "PSYQUI feat. mikanzil(第2回目配信楽曲）",
        title: "Bye or not",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/2_05.mp3",
        comment:
          "はじめましてSOUND VOLTEX！！！！！！！！！！\nどうもPSYQUI(サイキ)です！！！！！！！！！！！！！！！\n(PSYQUI)\nお久しぶりSOUND VOLTEX！！！！！！！！！！\nどうもmikanzil(みかん汁)です！！！！！！！！！！！！！！！\n(mikanzil)",
      },
      {
        artist: "technoplanet feat. ＯＲＩ姫 & やみん(第1回目配信楽曲）",
        title: "Hi-Fi!!双子'S",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_01.mp3",
        comment:
          '毎度お世話になっております。\n遥か彼方からやってきたエレクトロニック・モンスターユニット"technoplanet"です。\nハイファイツインズと読みます。BPM=250のツインボーカル・ハイスピード・スウィングポップ。とにかくノリノリで楽しく。どこまでも突き抜ける明るさ。"VIVID"な音楽を作りました。\n歌詞はファンシーな姉妹のお話ということで、いつもお世話になっているアタマのネジが吹き飛んだ2人に姉妹を演じていただきました。是非ともお楽しみいただければ幸いです。\n(technoplanet)\n作詞を担当しましたka9raです。\nしっかり者の姉と夢見がちな妹の、ふとした朝の風景を見るような世界観で書かせていただきました。\n笑みがこぼれる雰囲気を感じ取ってもらえると嬉しいです！\n(ka9ra)\nはい！頭のぶっ飛んだ妹ＯＲＩ姫です☆\n元気いっぱい夢いっぱいで歌わせていただきました！\nいつ聴いてもテンション上がっちゃう曲なのでたくさんプレイしてくださいね～♪\n(ＯＲＩ姫)\n姉妹の姉役を務めましたやみんです！\n元気な感じを出しつつ、お姉ちゃんらしさも意識してわいわい歌わせていただきました～！\nついわくわくドキドキしちゃうような、そんな感じになってると思います～！歌ってて楽しかったです～！\n(やみん)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Berry&Verrine\nVIVID WAVEリリースおめでとうございます！\n早速採用をいただき光栄です、ありがとうございますー！\n楽しく可愛く跳ねるような楽曲に合うよう、カラフルポップなジャケットに仕上げました。\nしかし最高難易度では雰囲気が一変、「本気出してきた！」と思わせるような内容になっています。\nこれに合わせて譜面も大きく様変わりしていると面白いですね...楽しみです！\n(Berry&Verrine)',
      },
      {
        artist: "ryhki(第1回目配信楽曲）",
        title: "Sharkbait",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_02.mp3",
        comment:
          "お初にお目にかかります、ryhkiと申します。\nSOUND VOLTEX VIVID WAVE稼働おめでとうございます。\nそしてこの度は採用頂きありがとうございます。\nサメってかわいいですよね。ボクのお気に入りはネムリブカです。\nわりと大人しいサメなのか、底でじっとしている姿がとてもかわいいです。\nぜひ水族館に足を運んだ際には見てみてください、そのかわいさの虜になること間違いなしです。\nそんな大好きなサメを思いながらHardstyleのパンチのあるキックを際立たせつつPsystyleをまぜまぜ。\n小さじ1杯のTrap、隠し味にひとつまみのDubstep。\n最後に刻んだ声ネタを添えて、ちょっぴりRawstyle風に仕上げたSharkbait、(ジャンル違ってたらゴメンナサイ！)\nぜひ楽しんでください！よろしくお願いします！！ボクも遊びます！！！\n最後になりますが、Isseiさん、ロアーさん、素晴らしいジャケットを本当にありがとうございます。\nこの場をお借り致しましてお礼申し上げます。\n(ryhki)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：ロアー / Issei\nSharkbaitのジャケット描かせていただきました！ロアーです！イラレと忍者が大好きです。\nこんなにかっこいい音楽に絵を添えられたことを光栄に思います！ありがとうございます！\nSharkbaitという曲名に相応しく、ジャケットごとにそれぞれ違うサメと戯れられるハートフルなジャケットを描かせていただきました！ぜひお気に入りのサメを見つけてください！\nIsseiさんが作ってくれた、色によってガラリと雰囲気が変わる文字のデザインがお気に入りです！\n「ぼんきちとサメで行きましょう！」とアイデアを出してくれたのもIsseiさんです！ありがとうございます！\n(ロアー)\nおはようございます。\nたまたま以前からエグい音いい曲ををつくる方だなと思ってたRyhkiさん\n住まいも離れているのですが某バーガーチェーン店で本当に偶然相席して、そしてなんやかんやの流れでこうなりました。\nここに名前を連ねるのすら烏滸がましい程になにもしてませんが。。。\nロアーさんの各難易度でヤバさが一目でわかるイラストがものすごく好きです。\nRyhkiさん、ロアーさんに本当に感謝いたします。\n(Issei)",
      },
      {
        artist: "立秋 feat.ちょこ(第1回目配信楽曲）",
        title: "び",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_03.mp3",
        comment:
          "バージョンアップおめでとうございます！立秋です。\nVIVID WAVEの頭文字にビビッと来て作りました。\nよろしくおねがいしますびびびびびび（1149回）\n(立秋)\nボルテアップデートおめでとうございます！\nこんにちは、ちょこです！\nある日、外に干していた服を着たら腕にすごい痛みがあって何だ！？と思ったら蜂が潜り込んでいて腕を刺されたのを思い出しました。\nすごく痛かったです。\nたくさんプレイしてください。び！\n(ちょこ)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：hard\nび！！　！！　び！びび！　！び！びび　びび！び！　！び！び！　び！び！び　！！！び　！び！！！　び！！！び　！び！びび　！！　！！び！！　！！び　びびびび　！！　び！び！び　！！　！び　び！！び　びびび！び\n(hard)",
      },
      {
        artist: "colorless（からとP feat.脱線ぐーぅ）(第1回目配信楽曲）",
        title: "120秒のエンドロール",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_04.mp3",
        comment:
          "『息をすることさえ上手くできないけど』\ncolorless名義では初ボルテです。\nからとPと申します。\nVIVID WAVEのライブ感に着目し、\n敢えて僕ららしく生音系で作りました。\nボーカルは脱線ぐーぅ\nドラムアレンジはタケノコ少年\nジャケットはIF-彬音\n作曲とか色々はからとPが担当しました。\n楽曲、歌、楽器、ジャケットを通じて、\n皆様の中で物語を進めていただけますと幸いです。\n(からとP)\nn度目ましてタケノコ少年です。にょっきっき\nストレートに「かっこいいロックドラム」\nを追及したアレンジをさせていただきました。\nこの曲がきっと何かのきっかけでありますように\n(タケノコ少年)\n脱線ぐーぅです。\n今回は作詞にも参加して、より一層熱い想いで歌わせていただきました。\nどんな柵からも抜け出せるようなパワーが伝わると幸いです！\n(脱線ぐーぅ)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：IF-彬音\nこの度はジャケットで参加しています彬音です。\nからとP君と以前から一緒にやってみたいという話もしており、新作一発目決めよう！という元結果として残すことが出来てとてもうれしいです。\n崩壊する物語（セカイ）の答えは120秒の時の中にあるかもしれません。\n(IF-彬音)",
      },
      {
        artist: "cosMo＠暴走P(第1回目配信楽曲）",
        title: "無魎大数",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/23/result/sound/1_05.mp3",
        comment:
          "今回も採用頂きありがとうございます！！\nボルテの新作、とってもVIVIDでWAVEでポップでキュートで素敵ですよね！\n僕も今回はそういうのにふさわしいキラキラした曲を送ろうと思いましたが、いろいろあった末にいざ出来上がってみると激渋楽曲でした。\nキラキラ感はイケオジ執事・厳ついお兄さん・和風モダン少女が一画面に同居する欲張りセットみたいなジャケットが、多分にじみ出してくれていると思います、醸し出していると思います。\nそれでは今作でもよろしくお願いします！！\n(cosMo＠暴走P)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：syuri22\n♪♪♪一見大和撫子に見えるけどその実いたずらでわがままな、とあるお屋敷の小さなお嬢様。\nそんな彼女のお目付け役のじいやとお守役のハードボイルド執事は、今日もお嬢様の昼下がりを潤すため……特選お紅茶と特製お菓子をご用意して、優雅に激しく音楽を奏でます♪♪♪\n「無魎大数」ジャケットイラスト担当のsyuri22です。ごきげんよう。\nオリジナルでジャケット応募するのははぢめてだったので、採用いただくことができとても嬉しいです。やったー！\ncosMoさんがジャケは渋いオッサンが良いというので色々煮詰めていったら、楽曲にぴったりのモダンで浪漫なイラストができました。やったー！\n楽曲と合わせまして、皆さまの優雅で激しいボルテライフをお支えできれば幸いです。やったー！\n(syuri22)",
      },
    ],
  },
  {
    id: "remix10",
    name: "BEMANI楽曲リミックスコンテスト ～2019～",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/remix_10.png",
    sounds: [
      {
        artist: "ismK(第8回目配信楽曲）",
        title: "ABSOLUTE(ismK passionate remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_01.mp3",
        comment:
          "原曲のピースフルな旋律を活かす方向性を目指しました。\n個人的に楽しいと思うのはブラス系、そしてその音色を使うとなれば楽しいのはサンバだ！と連想ゲームをしてこんな形に。\n最終的に目指したのはサンバをメインに、フラメンコ、ラテン系等を混ぜた感じでした（着地点は何か違うけど）。\n最後も王道の盛り上がりのイメージと、原曲が減速して終わるので逆にという。\nそんな訳で全く奇をてらった楽曲ではないですが、その分ストレートに楽しめる楽曲になったかな、楽しんでもらえたら嬉しいなと思います。\nismK（イズミケイ）でした。\n(ismK)",
      },
      {
        artist: "Ange;art(第8回目配信楽曲）",
        title: "EGOISM 440 (Ange;art remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_02.mp3",
        comment: "おはようございます、Ange;art（あんじぇあーと）です。\n今回はメタル\nおやすみ\n(Ange;art)",
      },
      {
        artist: "かめりあ feat. ななひら(第8回目配信楽曲）",
        title: "ばらんが!!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_03.mp3",
        comment:
          "みんな～！！伝説の山の周りに、しゅうご～～～～！！！！！！！\n…ご採用ありがとうございます。かめりあです。\nDJ TOTTOさんの名曲「Valanga」をななひらさんとのタッグで電波ソングにリミックスしました。\nはい、大体想像がついていると思いますが、大体想像通りです。\nでもちゃんと全編歌ってもらってますよ！\nちょっとラグタイム感とサーカス感のある楽しげなリミックスになっています。\n原曲が行方不明に…なりそうな気もしますが、実は落ち着いて聴くと原曲まんま！\n特にサビは歌詞を覚えると原曲でも歌えます（試しました）（歌えました）。\nみんなで歌って盛り上がろう（？）！\nそして前述の通りボーカルはななひらさんです！\nいつもありがとうございます。今回もパーフェクトです。\nみなさんを今回は佐賀県まで優しく誘導してくださいます。ありがてえ。\nTOTTOさん推しの方々に怒られそうなリミックスですが…、無事皆さんが楽しんで下さるのを祈っております。\nそれでは！かめりあでした！\n(かめりあ)\nみんなで歌って盛り上がろう！　ではないんだが！？\nこの度はご採用ありがとうございます。ななひらです。歌いました。\nかめりあさんから「これやりませんか」というメッセージと歌詞が飛んできた時は正直（一体何いってんだこいつ…）ってなりましたし、\n実際に歌の収録をやっている時は（一体何やってんだわたし…）ってなりましたが、\n賑やかしくて楽しいリミックスに仕上がったのではないかなと思います。\n7割が擬音で構成された歌詞のような歌詞じゃないような歌詞ではありますが\n覚えて口ずさめたらいい感じに楽しくなれるんじゃないでしょうか！\nとはいえ全箇所聞き取るのも難しいと思いますので、念の為Aメロ的な部分だけ書いておきますね！\n----------------------------\nぴろぴ ぴろぴ ぴろぴ ぴろぴ\nぴろぴ ぴろぴ ぴろぴ ぴろぴぴ\nぴろぴ ぴろぴ ぴろぴ ぴろぴろ\nぴっぴっぴっぴっぴっぴっぴっぴっ\nぴろぴ ぴろぴ ぴろぴ ぴろぴ\nぴろぴ ぴろぴ ぴろぴ ぴろぴぴ\nぴろぴ ぴろぴ ぴろぴ ぴろぴろ\n名産Valanga採れった～ （いぇーい）\n----------------------------\n参考になりましたら幸いです。\n(ななひら)",
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第8回目配信楽曲）",
        title: "ナナホシのうた",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/8_04.mp3",
        comment: "",
      },
      {
        artist: "kanone(第7回目配信楽曲）",
        title: "Blue Forest(NightBounce Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_01.mp3",
        comment:
          "お久しぶりです。kanoneです。\nBEMANI楽曲リミックスコンテスト ～2019～にて採用いただき、至極光栄でございます。\nギタフリのスキルでお世話になってるBlue Forestのリミックスを制作致しました。、\n原曲の「幻想的かつ妖艶」とはかけ離れて、パーティー感満載の仕上がりとなりました！\n原曲を知っている方は「え！？何事！！？」と思うリミックスかと思いますが、それも一つの狙いだったりします。\nこちらお楽しみいただければ幸いです。よろしくお願いいたします！\n(kanone)",
      },
      {
        artist: "xi(第7回目配信楽曲）",
        title: "Elemental Creation -xiRemix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_02.mp3",
        comment:
          "こんにちは！xiです！採用ありがとうございます！\nより早く！より暴力的に！よりラスボスに！\n原曲の勢いを殺さずに、かつ音ゲーに映えるようなギミックを意識しながら、\n自分らしく火力重視のリミックスをさせて頂きました。\nぜひ楽しんでプレイして頂ければと思います。\n(xi)",
      },
      {
        artist: "siqlo(第7回目配信楽曲）",
        title: "Impress(siqlo's Hi-Tech Veats)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_03.mp3",
        comment:
          "siqloです。\nしくろではなく、さいころでもなく、サイクロと読みます！\n前回はオリジナル楽曲でハイテックとハードスタイルを組み合わせたAdrenaline Rushという曲を提供させていただきましたが、今回のこのリミックスは最初から最後までがっつりハイテックですのでキメッキメです。\nきっと音楽ゲームとして非常に楽しい出来になっているのではないでしょうか！\n原曲はシンプルであっさり系なので、リミックスでは、それはもう濃厚で豚骨みたいな（？）リミックスにしました！俺のハイテックを聴いてくれ！\n(siqlo)",
      },
      {
        artist: "technoplanet(第7回目配信楽曲）",
        title: "Macuilxochitl (Latin Jazz Mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_04.mp3",
        comment:
          '毎度お世話になっております。遥か彼方からやってきたエレクトロニック・モンスターユニット"technoplanet"です。\nMacuilxochitlをラテンジャズにアレンジさせていただきました。原曲のクールで知的なコンテンポラリーの要素を踏襲しつつ。コンテンポラリーで張り合っては原曲に勝てないので、僕が得意とする「熱く感情的なラテンのエッセンス」をこれでもかと詰め込みました。普段は大編成でたくさんの音色を緻密に組み合わせる楽曲が多いのですが、今回はピアノ、ドラム、ベースのシンプルな3編成。その分1パートに対する表現力を最大限に追求しております。ほとばしる"ジャズの熱さ"を感じていただけますと幸いです。\n余談ですがこのリミックスは「原曲のアウトロ」を同じキーでアレンジしてイントロ部分に持ってきております。つまり原曲→リミックスの順に聴くと綺麗に繋がるようになっているんです。試してみてくださいね。\n(technoplanet)',
      },
      {
        artist: "Se-U-Ra + しーけー(第7回目配信楽曲）",
        title: "nostos -ark remix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/7_05.mp3",
        comment:
          "二度目の初めまして、Se-U-Raです。せゆーらと読むようです。\n以前収録頂いた「Tic Exe」を、二回目とかでPUCしてきた、しーけーさんとの合作です。\n「数年間の挑戦が数分の内に終わっちゃった事件」として心に残っていたのですが、\nこうしてnostosのリミックスという形でまた晴れ舞台に立てて心うれしいです。\n……本来、曲について多くを語ることをあまりしないので、ここで筆を置こうかと考えていました。\nけれど、折角ならばと敬意を込めて、すこし書き連ねることにします。\nなにかコメントに文字数制限があるような気もしますが、きっと許されると信じて、長々。\n今回のリミックスは自分が独断で進め、その結果すっぽりと開いたパートを生じさせたことが始まりです。\n具体的には、原曲の4拍子の部分を自分が調整し、そして3拍子の部分が手つかずになっていました。\nそんな3拍子関連で頼りになる方ということで、今回の合作が相成ったわけです。\nまとめると、前半しーけー後半せゆーらです。\nここで本当に3拍子で頼りになるのか、という疑問が生じるかもしれませんが、\n事あるごとに「3拍子3拍子3拍子」と言っていたような気がするので、多分大丈夫です。\nよく考えたら言ってなかったかもしれません。\nでも実際のところSDVXでの氏の楽曲は軒並み3拍子だったので、やっぱり大丈夫です。\nさて一気に話は変わり、リミックス対象に「nostos」を選んだ理由についてです。\nとはいえ単純に対象楽曲の中で最も好きな一曲であったからなのですが、それ以上に、\n「ark remix」と銘打った場合に、どういった世界がジャケットに広がるか興味があったためです。\nその世界観についてここでは詳しく踏み込みませんし、してはならないと考えてはいますが、\n深い部分に触れたような、そんな気もします。でもやっぱり分からないことにします。\nそれでは長々と書き連ねましたが、ここで書き切ります。\nここまでしっかりとお読みくださった方には多大な感謝を、\n斜め読みでここまで来た方にはそれなりの感謝をしつつ、\n原曲ともども、アークなリミックスを今後とも末永くよろしくお願いしますです。\n猫じゃらし様へ、たくさん書きました。ありがとうございました。\nSDVXスタッフ様へ、たくさん書きました。ごめんなさい。\n（Se-U-Ra）",
      },
      {
        artist: "かめりあ(第6回目配信楽曲）",
        title: "onslaught -Retaliation of Bahamūt-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_04.mp3",
        comment:
          'ご採用ありがとうございます！とても嬉しいです。\nかめりあです。ソフランしません。\n初めて聴いた時からヤベえ曲だな、と思っていたのですが、今回「onslaught / PHQUASE」をリミックスしながら感じていた事といえば、\n「ヤベえ曲だな」\nということでした。\nというわけで、このヤベえ曲をどうしてもリミックスしたく手に取り、ボルテ流に…としようと試みたところで、一つ問題点があることに気づきました。\n「onslaught」は既に音ゲー曲として非常に密度が高いので、どう手を加えようとしても、『やっぱりそうなるよね』という"予測できる感じ"、良くも悪くも"期待通りの感じ"がするんです。\nそこで、「予測できる感じ」「期待通りの感じ」と、「予想を裏切る感じ」「斜め上の感じ」を両立した方向にしたいなと考えたのが、まだですね、作り始める前の、段階なんですね、毎度毎度、長くて、本当に、すみません。\nさて、肝心のリミックスですが、足回りは一応Mainstream Hardcore、いわゆるガバ（というとガチ勢に怒られてしまうのですが）を土台に、『バハムートの復讐』というテーマでより高速、変速、凶悪な楽曲になっています。\n原曲にあったメロディやフレーズをそのままに、"予想を裏切る"再解釈的な展開やドロップをいくつか入れ込み、さらに原曲に存在しなかった、"予想を裏切る"変拍子をコレでもかと追加しています。\n土台が四つ打ちになっているのでノリやすくはありつつも、一度拍子の居場所を失うとすでにそこは真っ暗なイクリプスの中…。\n特に原曲のどんどん加速していく変速フレーズは全く同じリズムですが、速度が上がっている分かなり強烈になっています。\nピアノのアルペジオがユニゾンしているところがフェイバリットです。\nとはいえ、原曲を既にご存知の方も多くいらっしゃると思いますので、原曲の良さを残しつつリミックスしたつもりです！\n知っているメロディがより凶暴になって、そして変則的に現れるのを楽しんで頂ければな…と！\nかなり辛口で強めのリミックスですが、きっと譜面は易しく…そんな事はないかもしれませんがきっと楽しい譜面になっていると思います。\n皆さんがまたバハムートとバトルを繰り広げてくれるのを楽しみにしています。\nよろしくお願いします。\nそして、\n「ヤベえ曲だな」\nと一緒に感じましょう。\nかめりあでした！\n(かめりあ)',
      },
      {
        artist: "Aoi(第6回目配信楽曲）",
        title: "POSSESSION (Aoi Q.E.D. RMX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_05.mp3",
        comment:
          "ボルテプレーヤーの皆々様、こんにちはこんばんは！Aoiと申します。\n一人でこちらにコメントさせて頂くのは初めてで、少し緊張しています。\nこの度はBEMANI曲のリミックスを作るという貴重な機会に参加させて頂きまして、ただただ感激しております。\nDDRにおいて圧倒的カリスマを放つ原曲『POSSESSION』がこのコンテストの課題曲に挙げられていたのを見つけ、「やってみたい！」と思うと同時に、多大なプレッシャーを感じました。\n原曲はボスっぽさとキャッチーさを兼ね備えて、完成している…これをどうリミックスすればよいのだろう？\nああでもないこうでもないと方針に迷っていたとき、僕は原曲の作曲者であるTAG先生が、POSSESSIONは『クリアすることへの醍醐味を最大限に意識した楽曲』であると仰っていたことを思い出しました。\nというわけで当リミックスは、クリアすることへの醍醐味をボルテでも…というテーマのもと、「憑依」して制作させて頂きました。\nボルテでプレイして楽しく、歯ごたえのありそうな展開を沢山詰め込みつつ、なおかつ自分らしく仕上がったのかな、と思っています。\n他にも色々と湧いてくる感情はあるのですがまとめあげる文才もないので、とりあえず、すごく頑張りました！！是非是非、叩きのめしてあげてください！\n(Aoi)",
      },
      {
        artist: "ろひ(第6回目配信楽曲）",
        title: "Scars of FAUNA(ろひ Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_06.mp3",
        comment:
          "ろひと申します。\nScars of FAUNAの作曲者である猫叉Masterさんは私が民族調の曲を作り始めるきっかけとなった方でして、\n大好きな曲のリミックスで採用頂いたことを大変光栄に思います。\n民族楽器達を残しつつリミックスさせて頂いております。\nどうぞよろしくお願いします。\n(ろひ)",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第6回目配信楽曲）",
        title: "SHION -sublimation mix-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_07.mp3",
        comment:
          'BlackYです！採用ありがとうございます！\n浸蝕が始まるのがどうしても待ちきれなかった僕は今回迷うことなくSHIONをリミックスさせていただきました！\nリスペクトがびっしり詰まってるんだぜっ！\nリミックスタイトルにもなってる「sublimation」は"昇華"という意味がありますが、SUBLIME TECHNO的なやつともかけてたりします。\nボーカルにはゆずりさことRisa Yuzukiさんをお呼びしました。ゆずりさの透き通るような綺麗な歌声が、今回のリミックスにすごく良い感じに華を添えてくれてます！\n(BlackY)\nゆずりさことRisa Yuzukiです！\n採用ありがとうございます。私にとっては初公募、初採用、本当にうれしいです…！\nBlackYさんから届いたデモがすごすぎて、すさまじいプレッシャー、原曲へのリスペクト、自分らしさの間で奮闘しながら歌いました…\n歌いだしだけで何十回録りなおしたか分からないくらいがんばったので！たくさん遊んでほしいです！\n(Risa Yuzuki)',
      },
      {
        artist: "Hyuji feat. LIQU@。& TadashiYamamoto(第6回目配信楽曲）",
        title: "ナスカの丘 (Hi-NRG Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_08.mp3",
        comment:
          "ご無沙汰しております。RTTF RecordsのHyujiです。\n採用されるまでにまた三年掛かってしまいハードルの高さを実感しておりますが、そんな中で再度楽曲を採用頂き大変嬉しく思います！\n今回はマメガリミに引き続きLIQU@。さん、そして、十年来のレーベルメイトであるTadashiYamamoto君が歌ってくれました！ありがとう！\nブチアゲトランスだった過去二作とはうってかわって、80年代のユーロビートであるハイエナジーにボルテのみならず自身の作曲史上でも初めて挑戦しました。\nバブル時代に流行ったジャンルですが、物心付く前なので当時の音楽や出来事にリアルタイムで肌で触れたことは全くありません。\nしかしながら成人してからというもの、六本木の某所に存在するディスコへは何度も友達と一緒に遊びに行っており（その場にいるお客さん達の中ではいつも僕らが最年少でした）、80年代を駆け抜けてきた音楽や人々が作り出す熱気と興奮に触れたことで当時の雰囲気の一端は知っているつもりですし、その時代の音楽の良さも理解しています。\nまた、このディスコではジャンルこそ少し違うものの自分の曲をプレイして頂いた経験もあり、ディスコサウンドに求められるものは把握しているつもりです。\nなればこそ、大層かもしれませんが、このニッチなジャンルをボルテで伝える役目を自分が担いたいと感じましたし、既にほぼリリースの無いこのジャンルの止まっていた時間を動かすことで皆さまに届けたいと考えました。\n現場での体験を十分に活かせたトラックメイキングが出来たと自負しておりますし、会心の楽曲を是非お楽しみ頂きたいです。\nアンデスヒーリングと銘打たれた原曲とは一転してアグレッシヴな一面も垣間見えるリミックスとなりましたが、一方でノスタルジックなサウンドに想いを馳せることが出来るという点ではフォルクローレもハイエナジーもきっと同じだと思いますし、フロアに燦然と輝くミラーボールは月や太陽の様に一日中僕らを照らし続けてくれるはずです。\n素晴らしい原曲とハイエナジーの良さの両方が伝わるリミックスに仕上がっていれば嬉しいです。\n(Hyuji)\nSOUND VOLTEXでは二度目まして。ボーカルを務めさせていただきましたLIQU@。(りくあっと)と申します。\n原曲の民族調な歌い回しを汲み取りながら歌うのがとても楽しかったナスカの丘。\n歌いながら私がしていたように、皆さんもきっと筐体の前でサムズアップした手をフリフリしたくなる事でしょう！\nMermaid girl (Tropical Remix)と共に遊んでいただけますと幸いです。よろしくお願いいたします！\n(LIQU@。)\nこんにちは。RTTF RecordsのTadashiYamamotoです。\n今作は長年の盟友であるHyuji君に誘われ、当レーベルでも多くの作品に参加頂いているLIQU@。さんと共に臨ませて頂きました。\n原曲はフォルクローレですが、Hi-NRGになったことで不思議と和風な、日本の古き良き空気感があるようにも思えます。\nオンリーワンの化学反応で生まれた、他ではまず感じられないダサエモさを楽しんで頂ければこれ幸いで御座います！\n共に製作したHyuji君とLIQU@。さん。SOUND VOLTEXに携わるスタッフの皆さん。並びに全国のゲームセンターを運営されている皆さん。そして何よりこれからこの曲をプレイする皆さんに心より感謝申し上げます！\n(TadashiYamamoto)",
      },
      {
        artist: "naka3(第6回目配信楽曲）",
        title: "ナナホシ(lovely bubbly party mix!)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_09.mp3",
        comment:
          "初めまして！この度は初採用ありがとうございます。naka3(なかさん)と言います。\n中学生の時「jubeat knit」をプレイしたのが、私の音ゲーとの出会いでした。\ncopious APPENDで追加された「ナナホシ」は、可愛らしい曲調とは裏腹に片手に偏るトガった譜面配置に、当時強い衝撃を受けたことを覚えています。\n思えば音ゲーの影響を強く受けて始めた音楽活動。「自分の曲で音ゲーする」を目標としてきましたが、思い出深い機種の、思い出深い楽曲のリミックスで採用を頂いたこと、非常に嬉しく思います。\n今回はそんな可愛らしいナナホシを、ノリノリ陽気なスタイルに仕上げさせて頂きました。\n末永く遊んで頂ければ幸いです。\n(naka3)",
      },
      {
        artist: "あさり(saminun)(第6回目配信楽曲）",
        title: "ABSOLUTE (saminun mix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_01.mp3",
        comment:
          "あさりと申します。ABSOLUTEのリミックスで採用いただきました。\n私はABSOLUTEが好きで、IIDXを始めた頃よくプレイしていました。ですので今回このような形で表現の機会を得られてとても嬉しいです。\n制作にあたって大事にしたのは、原曲の良さをいかに伝えるかでした。私は原曲で繰り返される数々のフレーズが好きなので、それをベースラインにも組み込んだり、原曲にない重ね方をしたりいろいろ工夫しました。\nこのリミックスが皆様に気に入ってもらえたならば幸せです。ありがとうございます！\n(あさり(saminun))",
      },
      {
        artist: "#EmoCosine(第6回目配信楽曲）",
        title: "#EmoCloche",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_02.mp3",
        comment:
          "採用ありがとうございます、エモコサインと申します。\n今回は尊敬するQrispy Joybox先生の楽曲をリミックスさせて頂きました。\nどっちがアーティスト名でどっちが曲名なのかが分かりにくい感じだと思いますがエモコサインのエモくて可愛いサウンドを皆様にお届け出来たらそれで幸せです。\n是非いっぱい楽しんでプレーしてください。\n(#EmoCosine)",
      },
      {
        artist: "Yuta Imai(第6回目配信楽曲）",
        title: "EMERALDAS (Yuta Imai Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/6_03.mp3",
        comment:
          'Yuta Imaiです！ 採用嬉しいです！\nBEMANI Sound Team "HuΣeR"さん激ラブです！\nこれからも応援してます！\n(Yuta Imai)',
      },
      {
        artist: "とろまる(第5回目配信楽曲）",
        title: "Blue Forest (Prog Keys Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/5_01.mp3",
        comment:
          "とろまると申します。この度は楽曲採用いただき大変光栄でございます。\n原曲が持つ中東系の雰囲気をピアノとオルガンで表現し、リズム隊は複雑ながらも疾走感とアグレッシブさを増したアレンジに仕上げました。\nメインメロディや曲構成にはほぼ手を加えておりませんが、ジャズを軸としたハーモニーやアドリブから自分の持ち味を感じ取っていただければと思います。\n(とろまる)",
      },
      {
        artist: "coTatsu(第5回目配信楽曲）",
        title: "cloche(といぼっくすうぃんぐ　みっくす)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/5_02.mp3",
        comment:
          "「じょいぼっくす、といぼっくす、りみっくす！」\n頭を過ったこの言葉が制作のきっかけでした。何点かしら？\nボルテ的に面白くなるかなぁみたいなアレコレをトラックの整理整頓そっちのけで、思いついては組み込み思いついては詰め込み……いつのまにかハチャメチャな雰囲気になってました。\nそんな感じで初採用となった当楽曲、遊んで頂ければ嬉しいです。よろしくね～\n(coTatsu)",
      },
      {
        artist: "uma meets モリモリあつし(第4回目配信楽曲）",
        title: "Re：Elemental Creation",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_01.mp3",
        comment:
          "こんにちは、今更ながら晴れてボルテ学園に入学しましたumaです。\n分校である私立BEMANI学園の先輩方のハードルネッサンスな楽曲である「Elemental Creation」をリミックスするということで大変ハードルが高かったのですが、\nモリあつさんとともに共作するという事であればきっと大丈夫だろうと信じて本楽曲を再解釈しリミックスいたしました。\n本楽曲にはモリあつさんと合作する際に覚えたギターフレーズの作り方、原曲のイントロから着想を得たアッパーなBメロ、\nそして例の縦連地帯を本楽曲の開幕に持ってくるという展開の再構成などなどを原曲をリスペクトしつつ詰め込んでおります。\n「uma meets モリモリあつし」ということで私がモリあつさんと出会ってどうなったのかの軌跡を本リミックスに込めさせていただきました。\n「Re：Elemental Creation」、どうぞよろしくお願いいたします。\n(uma)\nえー、どうも、こんにちは。\nボルテ学園、時計を鳴らす男、モリモリあつしです。\n俺達と出会えたってことは 君も時計を鳴らせるんだね…\n(モリモリあつし)",
      },
      {
        artist: "Gowrock(第4回目配信楽曲）",
        title: "POSSESSION(Gowrock Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_02.mp3",
        comment:
          "どもっ！！！　Gowrockです。(｢ﾟДﾟ)｢ｶﾞｳｶﾞｳ\nこの度は『POSSESSION』のリミックスで採用を頂いたこと、\n大変光栄に感じると共に、皆さんに楽しんでいただけるのか不安に思っていたりもします…。\nオリジナルは世界的に有名なDDRの楽曲ですし、きっとSDVXにとっては待望の楽曲ですからね。\nそんな楽曲のリミックスに、私の名前が入るのが未だに信じられません。\nですが、本当に…本当にありがとうございます！\n楽曲についてですが、SDVX5のテーマである「ライヴ」を意識したダンスチューンに仕上げてみました。\n例の「◎◎◎◎◎◎」の部分が、どのように料理されているのか、乞うご期待！\nまたいつか、この場所で皆さんにお会いできますように…。\n(Gowrock)",
      },
      {
        artist: "影虎。(第4回目配信楽曲）",
        title: "DEEP PSYCHEDELIC STRIKER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/4_03.mp3",
        comment:
          "この度は採用ありがとうございます！影虎。です。\n「Narcissus At Oasis -影虎。 style-」に引き続き、BEMANI楽曲リミックスコンテストで採用を頂き非常に光栄です。\nbeatmania IIDXより、NU STYLE GABBAな名曲「THE DEEP STRIKER」をアゲアゲなPsychedelic Tranceにリミックスしました。\n自分の色をしっかりと出しつつ、音ゲーとして遊ぶ時の楽しさを考えながらアレコレ詰め込んだリミックスとなっていますので、是非遊んでみて下さい～！\nPSYCHEDELIC.\n(影虎。)",
      },
      {
        artist: "HAMA topground(第3回目配信楽曲）",
        title: "EGOISM -Rebuild-",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/3_01.mp3",
        comment:
          "一度しかないこの機会\nあの時に体験した自我の脅威を\n自身の解釈で再構築し　新たに解き放つ\n(HAMA topground)",
      },
      {
        artist: "Akizuki Nagomu feat. fu-ko(第3回目配信楽曲）",
        title: "Mynarco(Nagomu 2Step Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/3_02.mp3",
        comment:
          "Akizuki Nagomuと申します。\nこの度は採用をいただき大変嬉しく思います。\n今回、Nagomu 2Stepという新たなジャンルを提唱したいと思います。\n特に定義は決めてないんですが、強いて言うなら2Stepっぽいビートを早回しにしていればいいんじゃないかと思います。\n「Nagomuなのに高速にするのかよ」という突っ込みはしてはいけません。\n最近あまり聞かれなくなったジャンルの魅力を今の時代にどう打ち出すか、というのは\n今の音楽ゲームにおける1つの課題じゃないかと思う次第ですが、\n高速化して今の時代に馴染ませるというのは一つの答えなんじゃないかと思います。\nよろしくお願いいたします。\n(Akizuki Nagomu)\nこんにちは、はじめまして！fu-koと申します。\nこの度はご縁があってボーカル参加させていただくことになり、大変嬉しいです。\nいまだに全国のボルテで自分の声が流れることが半信半疑なのですが、\n実際にプレイするのをとても楽しみにしております！\nよろしくお願いいたします(o・ω・o)\n(fu-ko)",
      },
      {
        artist: "kamome sano(第2回目配信楽曲）",
        title: "Elemental Creation (kamome sano Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/2_01.mp3",
        comment:
          "お選び頂きありがとうございます。大変光栄です。\nElemental Creationといえばやはり味のしみた大根ですが、煮玉子も外せないところですね。\nがんもどきもかなり好きですが、牛すじも3本くらい頂きたい。\nあと煮玉子はマストですし、はんぺんもあるとほっとしますね。\nそんなハートフルなリミックスとなっております。リモネンをよろしくお願いします。\n(kamome sano)",
      },
      {
        artist: "bansou(第2回目配信楽曲）",
        title: "Impress (bansou Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/2_02.mp3",
        comment:
          "はじめまして、bansouと申します。普段は飲んだり寝たりしています。\nそんな私ですが、SOUND VOLTEXシリーズに出会い、数多くのFLOOR楽曲を聴き、プレイし、憧れたことが一つのきっかけとなり楽曲製作を始めました。\n自分の作品がFLOORで収録されるとなると感慨深いものがあります。やった～！\nさて、私がリミックスしたのはDANCERUSH STARDOMより「Impress」です。\nサイケデリックトランスが大好きなので、Psytrance/Hitech系のリミックスに挑戦しました。\n原曲のメロディやリズムを生かしつつ、ボルテでプレイして楽しくなるような疾走感のある仕上がりを目指したつもりです。\nぜひ、楽しんでプレイしていただければ幸いです。\nMusic Killer.\n(bansou)",
      },
      {
        artist: "Tracy vs. Yu_Asahina(第1回目配信楽曲）",
        title: "ABSOLUTE (EUROBEAT REMIX)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_01.mp3",
        comment:
          "皆さんこんにちは！お久しぶりのTracyです。\n今回、BEMANIレジェンド楽曲たちのリミックスコンテストということで、Yu_Asahina氏と「一緒にやろうぜ！」\nということで、dj TAKAさんの「ABSOLUTE」をリミックスしたい！とすぐ制作に取り掛かりました。\nSOUND VOLTEXに初めて楽曲が収録されてから早6年。\n個人的な今回のコンセプトは、原点に戻って「ゲームでプレイしたいリミックス」でした。\nMIDIやオーディオデータをやり取りして、最初のデモが出来るまで時間は掛からなかったのですが、\n〆切直前には、2人で「あーでもない、こーでもない」と戦争のような最終調整となりました。\nそんな戦争を経て、今回無事に完成したわけですが、\n自分に足りない部分を見事に補ってくれたYu_Asahina氏のおかげで納得行くリミックスに仕上がりました。\n結果的にコンテストも採用頂けてとても嬉しい限りです。\n当初のコンセプト通り、ボルテでプレイしても絶対楽しい曲になっていると自負しておりますので、\n皆さん是非楽しんでプレイしてみてもらえれば幸いです。\nサークル(Amateras Records)名義でボルテに最近も楽曲を収録して頂いておりますが、\n久々の公募参加、採用、改めて光栄です。これからも応援よろしくお願いします！\n(Tracy)\nSacrifice！平素よりお世話になっております、Yu_Asahinaです!\nこの度dj TAKAさんの伝説的名曲「ABSOLUTE」をTracy氏とともにああでもないこうでもないとユーロビートRemixさせて頂きました！\nなんでユーロビートにしたかというとユーロビートは楽しいからです。とてもすぐ決まりました。2人とも世代なんですよね。\n思えば早いものでTAKAさんの曲のRemixで初めてSDVXに曲が収録されてから7年くらい経ちましたが、\nまたこのような機会を頂けて一周回った感じがあります。ありがとうございます。\nKINGの曲というわけでまずはど真ん中ド直球！\nあまり生半可なものを出したくなかったのでEUROBEATの作法にはなるべく気をつけつつ楽しいものを目指しました。\nお相方のクラブ仕込みパワーです。\n当時ジャリボーイでorangentleでもなかった時やり込んだ曲でもあるので「ABSOLUTE」ってこうなんだよというのも口出ししまくった結果\nアーティスト名が&からvs.になりました。ツクテットッなんだよ。sus4からMになるんだよ。あとソフランもするしかねぇ。\nあとこれはやってて楽しい曲なんですよ。\nこれからもう1周頑張ります。応援お待ちしております。\n(Yu_Asahina)",
      },
      {
        artist: "HOUJIROU feat. 駄々子(第1回目配信楽曲）",
        title: "SHION (ロースピード幻想チューン Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_02.mp3",
        comment:
          "pop'n music、REFLEC BEAT等で思い入れのある『SHION』を対象楽曲より選曲しました。\nbpm110という遅めのテンポと、ハネるリズムが特徴のGlitchHop風なリミックスとなっております。\n楽しんで頂けると幸いです！\n(HOUJIROU)\n歌唱を担当させていただきました駄々子です。\n音ゲーマーの一人としてリミコンの開催をとても楽しみにしていました！\n採用と言う最高の結果もいただけて、本当にしあわせです。\nHOUJIROUさんのかっっっこいいアレンジで\n大箱で爆音で聴きたいGlitchHopなSHIONに仕上がったので\nぜひゲーセンで爆音で楽しんでください！\n(駄々子)",
      },
      {
        artist: "polysha(第1回目配信楽曲）",
        title: "Valanga(polysha Remix)",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/remix/10/result/sound/1_03.mp3",
        comment:
          "こんにちは。polyshaです。今回、BEMANIでも1,2を争うほど好きな楽曲であるValangaのリミックスを収録して頂くことができ、感無量です。\n前半はダンサブルなTwerk的なアプローチで、後半はノリの良いHardtek的なアプローチでアレンジしました。\nどちらもカッコよく仕上げる事ができました。ぜひ選曲してね！\n(polysha)",
      },
    ],
  },
  {
    id: "original26",
    name: "The 9th KACオリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_26.jpg",
    sounds: [
      {
        artist: "Croire(第5回目配信楽曲）",
        title: "Non RolicK!!大冒険",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_01.mp3",
        comment:
          "お久しぶりです、上村香月です！\n大変光栄なことにCroire名義では前作「エンゲージ〆ント」に続いて２作目の採用になります。\n今回の曲はCroireの得意とするハイスピードラウド電波です！！\n是非プレーしながら頭を縦振りしていただければと思います。それではまたお会いしましょう。\n(上村香月)\n採用ありがとうございます。歌唱を担当させていただきましたＯＲＩ姫です。\n今回は香月さんの轟音ギターに可愛く歌わせて頂きました。そのギャップを楽しんでもらえれば嬉しいです！！\n(ＯＲＩ姫)",
      },
      {
        artist: "かぼちゃ feat. miko(第5回目配信楽曲）",
        title: "Thank you for your playing music",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_02.mp3",
        comment:
          "Thank you for your playing music\n歌唱はなんとmikoさんです。すごい！\n「play」って動詞、色んな意味があるなって思うんです。\n「音楽を演奏してくれてありがとう」\n「音楽を再生してくれてありがとう」\n「音楽を遊んでくれてありがとう」\n中でも「遊ぶ」ってのは音ゲーならではだなと。\n音楽が、聞くだけじゃなく、踊るだけじゃなく、劇伴だけじゃなく、「ゲーム」として別の角度から楽しみ方を再発見されたような、そういう偉大さを感じるんです。\n多分みんな当たり前に感じてるだろうけど、音楽ゲームを全然しない自分に言わせればすごいとんでもない楽しみ方をしてる。\nまぁ毎回本当にありがとうございます。\n(かぼちゃ)\nこの度は採用ありがとうございました！Vocalを担当しましたmikoと申します。\n嬉しいことに採用コメントを書くのも何度目かになるのですが、\n今回はなんとかぼちゃさんとのタッグで、更に電波ソング畑出身のmikoがまさかのガチ曲です！まさかの！\nわたしにしては激レアな曲調での公募でプレッシャーを感じつつも、\n不思議と自分の声の長所をひたすら信じてレコーディングに臨めたお気に入りの１曲になりました。\n表情や情景を思い浮かべつつ、楽しんでプレーしていただければ幸いです！是非たくさん遊んでください！\n(miko)",
      },
      {
        artist: "！すでのな(第5回目配信楽曲）",
        title: "Defining Future",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_03.mp3",
        comment:
          "はじめまして、！すでのなと申します。読みは「なのです」が正解です。\nKACコンに受かることが作曲の目標の一つだったので、今回採用していただけて本当に嬉しいです。\n対戦お願いします。\n元々はいかにもボスっぽい曲を作ろうと思っていたのですが、せっかくなら自分らしくいこう、ということでいつも通りのジャンルごった煮ミュージックで挑みました。\nいろんな展開やサウンドを楽しんでもらえたらと思います。\n何卒！\n(！すでのな)",
      },
      {
        artist: "U-ske feat.Ri9(第5回目配信楽曲）",
        title: "le coeur patissiere",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_04.mp3",
        comment:
          "U-skeと申します。The 9th KACオリジナル楽曲コンテスト採用ありがとうございます！\n疲れたときには甘いものと言いますが、カラダだけじゃなくてココロにだって甘さは必要です。\n満たされない気持ちも、思い通りにならない感情も、全部かわいちゃう前にちゃんと補充してくださいね！\n(U-ske)\nはじめまして、歌唱を担当させていただきましたRi9と申します。\nこの度は採用ありがとうございます！\n甘いものを食べるとちょっぴり幸せな気持ちになりますよね？\n好きなもの、甘いものの補充を忘れずに自分をたっぷり甘やかして楽しくいきましょう～！\n(Ri9)",
      },
      {
        artist: "カエルとネコ(第5回目配信楽曲）",
        title: "who I am",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_05.mp3",
        comment:
          "採用ありがとうございます。すべてのクリエイター及びプレーヤーへ、最大級の称賛を。楽しんでプレーしていただければ幸いです。\n(Frosch)\nにゃーん。\n(low meow)",
      },
      {
        artist: "Ryo Arue(第5回目配信楽曲）",
        title: "eternite",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/5_06.mp3",
        comment:
          "どもどもRyo Arueです！！（りょう　あるえって読みます）\n今日はねぇ！！なんと！！私の楽曲が！！ボルテに収録されることになりました～～～～！！\nボルテがきっかけで作曲を始めた身としては、これ以上の幸せはありません・・・！！\n明るく楽しいけどちょっぴり悲しくもある感じをイメージしました。\n沢山遊んでいただけると嬉しいです。\nちなみにeterniteは「エテルニテ」と読み意味は、「永遠」です。\nモチョモチョ\n(Ryo Arue)",
      },
      {
        artist: "諸星なな feat.加藤はるか＆廣瀬祐輝(第4回目配信楽曲）",
        title: "おどりましょうよ！ドラゴンさん ～転生したらゲーム曲でした～",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_01.mp3",
        comment:
          "「剣と魔法のRPG・ケルト風電波ソング」というコンセプトの曲です。\nアイデア自体は前からありましたが技量不足で何度も挫折。\nでも今回やっと形にすることができて、何よりも達成感があります。\n諦めずに努力すればきっと良い結果は出る…\nこれこそまさにRPGのレベリングのようではありませんか！\n歌の中身も制作過程もまるで剣と魔法のファンタジー。\nそんな冒険譚を感じ取っていただけると幸いです。\n(諸星なな)\nボーカルを担当させて頂きました！\n躍動感があってストーリーも素晴らしい曲で、歌っていてまさに冒険しているような気持ちになりました。\n諸星ななさんの曲は、いつも曲への愛が伝わってきて歌わせて頂けて嬉しいです☆\nワクワクのかけ算が生まれたこの楽曲を、ぜひひとりでも多くの方に楽しんで頂けたら嬉しいです！\n(加藤はるか)\nミックスを担当した廣瀬祐輝です！\n諸星ななさんの曲と加藤はるかさんの歌、両方がとてもマッチしていてミックス中もノリノリでした！\n素敵な作品に関わらせて頂き、お二人と運営の方に感謝しております！\n是非ゲーム内で楽しんで頂いてノリノリな気分を一緒に共有しましょう！\n(廣瀬祐輝)",
      },
      {
        artist: "かゆき(第4回目配信楽曲）",
        title: "Φnd:you",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_02.mp3",
        comment:
          "ときめきニャンコパークの園歌でもある本曲は、\n「にゃんにゃんプリティーアイズ」と読みます。\n当園におきましても園内にサウンドボルテックスを設置し\n老若にゃん女問わず、より多くの皆様にご愛玩頂けますよう\n一層の努力を重ねて参りたいと存じます。\n今後とも何卒よろしくお願い申し上げます。(  ΦωΦ   )\n(ときめきニャンコパーク園長 猫目稔信)",
      },
      {
        artist: "ℱsinfonia (Yu_Asahina 溝口ゆうま かなたん 大瀬良あい)(第4回目配信楽曲）",
        title: "Valkyrja ~Aldrlag~",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_03.mp3",
        comment:
          'ℱsinfonia、再臨。\n混沌を極める戦乱の世を収めるべく立ち上がりました。\nそう、GRAVITY WARS。じゃなかった。\nこの楽曲は私のアルバム「[ en ] ~eins~」にフルサイズで収録されておりまして、\nその構成・MIXを変更した"SDVXバージョン"となっております。\nℱsinfoniaといえばシンフォニックメタル！ということで今回も三柱の神と共に、楽曲はより本格仕込みでお送りいたします。\n導け、Valkyrja！\n(Yu_Asahina)\nこの度は採用頂きありがとうございます！　久々に皆で合作させて頂きました\n今回もアサヒナ氏ととっても濃い制作が出来ました　シンフォニック！\n絶対的な存在、運命、因果、矮小さを感じて頂ければ幸いで御座います。\n(溝口ゆうま)\nお世話になっております。かなたんです。\nまたお三方とご一緒することができて大変嬉しく感じたことを思い出します。\nフルパワーで突き進んでいく作品に負けないよう突き進んでいきました。\n皆さんに気に入っていただける一曲になりますように。\n(かなたん)\nこの度は、採用有難う御座います。\n前回の「Sacrifice and Faith」とはまた違う感じのカッコイイ楽曲ですので、楽しんで頂けましたら幸いです！！\n(大瀬良あい)',
      },
      {
        artist: "708/残響P(第4回目配信楽曲）",
        title: "MICHIZURE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_04.mp3",
        comment:
          "はじめまして、708/残響Pです。採用嬉しいですやった～～！\n普段はハローモンテスキューっていうバンドとして活動してたり\n残響Pという名前でボカロ曲を作って投稿しています！\n今回応募したこの「MICHIZURE」という曲は基本的にノリノリの4つ打ちロックですが\nキメが突然あったり3連符パートがあったりと楽しい曲ですので楽しんでいただけたら幸いです！\n何卒よろしくお願いします！\n(708/残響P)",
      },
      {
        artist: "タケノコ少年 feat. 荒巻(第4回目配信楽曲）",
        title: "Me:Tear",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_05.mp3",
        comment:
          "採用いただき本当にありがとうございます。\n個人採用が久しぶりで嬉しいタケノコ少年です。\n嬉しくてピザを食べました。\nさて、言いたいことは歌詞と曲に込めました。\nぼくと荒巻さんの想いが伝わることを願ってます。\n自分を信じて最強の主人公であれ\n(タケノコ少年)\n一年に一度の大舞台。\nここに至るまでにも語られなかったドラマがきっと沢山有る。\n舞台には既に名を何度も連ねた人。\n辛酸を舐め、今回の舞台にようやく立つことの出来た人。\nそして惜しくも敗れ、舞台に立てなかった多くの人たち。\n色んな人の思いとドラマの末に待つものが此処に有ります。\n僕たちの曲と共にそれを、最後まで見逃すことなく見届けてほしい。\nそして最高の舞台にしてほしい。\n「主人公は自分自身」だ！！\n(荒巻)",
      },
      {
        artist: "setu-O(第4回目配信楽曲）",
        title: "Blessing Bouquet",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/4_06.mp3",
        comment:
          "初めましてsetu-Oと申します。\nこの度は採用いただき、誠にありがとうございます！\n音楽ゲームに出会って約20年、ボルテを初めて約7年半、FLOORに投稿を始めてから6年ちょっと。\nイラストの採用は過去にしていただきましたが、楽曲採用という長年の夢が叶いました。\nビーマニを家でやってた小学生の自分に「20年後お前の曲がBEMANIシリーズに入るぞ」なんて言っても信じてもらえないでしょう。\nこの楽曲はKACのプレーヤーはもちろん、この楽曲をプレーした人、目標を達成した人など“このゲームで起こる様々なことに対して祝福を”という意味を込めて「Blessing Bouquet」というタイトルをつけました。\n僕の好きを詰め込んだ楽曲です。\nどんな譜面になるかわかりませんが是非皆さんに楽しんでいただけたら幸いです。\n(setu-O)",
      },
      {
        artist: "しーけー feat.arinco(第3回目配信楽曲）",
        title: "星の詩",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_01.mp3",
        comment:
          "こんにちは、しーけーです。初めてKACコンテストにおいて採用をいただき誠に嬉しく思っております。\n今回はボーカル楽曲という事で、少し音楽ゲームらしくは無いかもしれませんが、自分なりの解答を出せたと思います。\nタイトルに「星の詩」とつけたのですが、運命の神にまつわるあの話だったり、日食の話だったり…をイメージしています。\n自分らしさを最大限に出せた自信作なので是非とも楽しんでプレイしてください。\n(しーけー)",
      },
      {
        artist: "sazanami(第3回目配信楽曲）",
        title: "Lazurite",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_02.mp3",
        comment:
          "はじめまして、sazanamiと申します！\nSOUND VOLTEX FLOORに投稿をはじめて7年、ついに夢にまで見た(※本当に見ました)この舞台に立つことができて感無量です！\n今回の楽曲は、知性や叡智というテーマを元に、高速PSY TRANCEとクラシカルな要素で構築した曲となっております。\n楽しんでプレーしていただけると幸いです！\n(sazanami)",
      },
      {
        artist: "めと（Metomate）(第3回目配信楽曲）",
        title: "濁色踊るオートマタ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_03.mp3",
        comment:
          "初めまして、めとです。\n陰鬱系ピアノロック中心に作って歌ってます。\nこの曲は、理想に近付くために虚言癖を身につけた少女が足場を失っていく、そんな雰囲気です。\nお楽しみください！！\n(めと)",
      },
      {
        artist: "Alkome(第3回目配信楽曲）",
        title: "Innocent",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_04.mp3",
        comment:
          "はじめまして、Alkomeです。この度は採用いただきありがとうございます。\nSOUND VOLTEXの公募には3年前から挑戦していたのですが、今回が初めての採用で、\n採用通知が来たときは本当に嬉しかったです。\n「Innocent」はKACという舞台に対してどういった楽曲が相応しいか、\n自分の持てるものの中でどんな表現が出来るかというような事を考えて作りました。\n純粋無垢な楽しさを追求できた楽曲になったと思います。\nプレイヤーの皆様にもそんな楽しさが伝われば幸いです。\nよろしくお願いします！\n(Alkome)",
      },
      {
        artist: "wa. + 杠葉えりか(第3回目配信楽曲）",
        title: "Ethereal Lotus",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/3_05.mp3",
        comment:
          "結局のところ、私は私でした。\n私が私を構成する、その部品の全てを脱ぎ捨てたとて、\n私は唯の一瞬ですら私を辞める事は出来ませんでした。\n私は私です。此処にいます。\nはじめからずっと此処に。\n(wa.)\n初めまして！\n歌唱部分を担当させていただきました杠葉えりか(ゆずりは えりか)と申します。\nこの度は参加した楽曲がThe 9th KACオリジナル楽曲コンテストにて採用いただけて大変嬉しく思います。\nもともと音楽ゲームが好きで、更にここ数年はほぼボルテメインで遊んでいるので採用の知らせをwa.さんからいただいたときは大変嬉しかったです！\nとても綺麗で繊細で神々しい雰囲気を纏った楽曲であり、\nかつこれはきっと強い譜面になるのだろうなぁと感じさせるような音が随所に散りばめられているので私自身実際に筐体でプレーできる日が非常に楽しみです！！\n皆様に末永く愛される楽曲となることを願います、何回も何十回も選曲してもらえたらとっても嬉しいですー！！\n(杠葉えりか)",
      },
      {
        artist: "MisoilePunch♪(第2回目配信楽曲）",
        title: "VVelcome!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_01.mp3",
        comment: "『Welcome to VIVID STAGE!!(ようこそ、私たちの舞台へ──。)』\n(MisoilePunch♪)",
      },
      {
        artist: "technoplanet(第2回目配信楽曲）",
        title: "Redshift 2nd Ignition",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_02.mp3",
        comment:
          'いつも大変お世話になっております。遥か彼方からやってきたエレクトロニック・モンスター・ユニット"technoplanet"です。\n僕が初めてBEMANIシリーズに提供させていただいた曲の後継となる楽曲を書きました。熱いメタルインストナンバー。\nいつもの如く技巧をこれでもかと押し出した曲となってますが、やはり音楽は技巧だけが前に出過ぎてはいけない。\nこれまでの自分に足りなかったもの。感情を揺さぶりたい。パッションを感じさせたい。\nそのバランスに悩み、苦心しながら、完成させました。\n212からスタートするBPMは最終的に230まで加速します。赤は情熱の色。お楽しみいただければ幸いです。\n(technoplanet)',
      },
      {
        artist: "Retropolitaliens(Ms.+駄々子)(第2回目配信楽曲）",
        title: "ミュージックプレイヤー",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_03.mp3",
        comment:
          "We Are Retropolitaliens!!!\n歌唱担当の駄々子です。\nMs.さんが生み出したKACの、ボルテの、音楽ゲームの、音ゲーマーのための楽曲に\n想いのすべてを込めて歌いました。\n歌モノで最優秀賞を目指した「ミュージックプレイヤー」は\n紛れもなく、この曲をプレーしてくださる貴方のための曲です。\nRetropolitaliensの最高値、どうぞお楽しみください！\n(駄々子)\nその他担当のMs.です。\n楽曲を作る人、演奏する人、遊ぶ人。\nそれぞれカタチは違うけど、みんな音楽を“プレイ”してるんだなって、そんな楽曲です。\n色々あって一年遅れの集大成、「ミュージックプレイヤー」とレトロポリタリアンズをよろしくお願いします。\n(Ms.)",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第2回目配信楽曲）",
        title: "春告胡蝶",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_04.mp3",
        comment:
          '―今宵、決着の"春"。\n(BlackY)\nゆずりさです！\n「美しく厳かな春の訪れ」にテーマを設定し、作詞とボーカルを務めさせていただきました！！\n歌い方も和風な雰囲気を心掛けたので楽しんでもらえるとうれしいです。\n(Risa Yuzuki)',
      },
      {
        artist: "Juggernaut.(第2回目配信楽曲）",
        title: "†:OLPHEUX:†",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_05.mp3",
        comment:
          "おはようございます！Juggernaut.です。ご採用誠にありがとうございます！\n去年に引き続き、今年も皆さんに新しい楽曲をお披露目できて大変うれしく思います。\n今回の曲は「†:OLPHEUX:†」というタイトルで、「オルフェウス」と読みます。\n両端の†はかっこいいのでつけました。\n去年の「THE HEAVEN」とは違った系譜の曲にしたい…と思い、色々思い切って挑戦してみました。\nBPMを速くして疾走感をマシマシにしたり、シンフォニック的な要素をマシたり、エモさマシ、トラック数マシマシにしたり。(マシンが悲鳴をあげました)\nベースドロップの系統を変えてみたり、めっちゃ転調させたり、他にもより音楽ゲーム的な要素を意識してみました。\nめっちゃ頑張ったので楽しんでいただければ幸いです！よろしくお願いします！\n(Juggernaut.)",
      },
      {
        artist: "ミカルコスモ(せらみかる×cosMo＠暴走P)(第2回目配信楽曲）",
        title: "GEMINI LA2ER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_06.mp3",
        comment:
          "某イベントで偶然cosMoさんと一緒になったときに楽曲コラボのお誘いをしていただいたのですが、そのままこんなにすぐに行動に起こせて作品にできたことが夢のようです。\nお互いニコニコ動画の古参ユーザーでもある中、直接的なコラボは今まで無かったので、とてもわくわくしています。\n作曲についてもcosMoさんに褒めてもらえてうれしかったです！僕自身はボルテプレイヤーとしてはつまみに翻弄されまくっている修行中の身なのですが、大先輩がついていたので自由に自分らしく作曲させていただきました。\n(せらみかる)\n今回は各所で活躍中、音楽も作る！漫画も描く！そしてゲーム実況もやる！他にもきっと様々なことができるドヤバイクリエイター、せらみかる氏とのコラボで応募させていただきました！\n役割は完全分業でせらさんが作曲、自分が編曲を担当しています。\n皆さんにお聞かせできないのが本当にもったいないのですが、せらさんが僕に送ってきた編曲する前のチップチューン風デモソングの状態で既に完成度が高くて素敵な曲でした。\nなので、その雰囲気を壊さないように編曲しつつ、自分の普段の色も多少は出せたんじゃないかなーと思っています。\nそして何よりせらさん、BEMANIの話してる時はめちゃくちゃ楽しそうにしてるので今回ホント受かってよかったです。せらさんマジでおめでとう！！！！おめでとう！！\n(cosMo＠暴走P)",
      },
      {
        artist: "C-Show(第2回目配信楽曲）",
        title: "LubedeR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_07.mp3",
        comment:
          'SOUND VOLTEX VIVID WAVEのCの文字担当のC-Showです。\n2012年のKACコンテストがきっかけで自分を認知する方が急激に増え、\nひっそりと趣味で音楽を作っていた身としてはそれが衝撃であり、\nその後の人生を大きく変えた出来事でした。\nそして、あろうことかそれから私は自分自身に対して大きな期待をするようになりました。\nひょっとしたらスーパースターになれるかも…そう思った私は、\n「もっと良い曲をかけるようにならないと」などと自分自身に理想を押し付け、\nそんな理想に追いつけず、しだいに曲を生み出す行為に苦しみが伴うようになりました。\nその苦しみは今も続いており、人の目を人一倍気にしてしまう私は、\n「自分は果たして良い曲を作れているのだろうか」と時折考えています。\nそれでも音楽を続けてこれました。それは音楽に対して"情熱"そして"やり残している事"があるからです。\n数少ないやり残したことの１つがKACコンテストで最優秀賞を取ることです。\nこの文章を書いているタイミングでは結果がわかりませんが、\n私のことですから恐らく最優秀という願いはかなわなかったに違いありません。\nまた数年間アイデア練ったり修行します。それでも悔いが残らない楽曲が出来ました。\nそんな苦しみと願いとエゴと天邪鬼心と感謝が詰まったこの曲を、楽しんで貰えたら嬉C-Show。\n(C-Show)',
      },
      {
        artist: "SCHOOL CASTE(石見＆とおる)(第2回目配信楽曲）",
        title: "Яe:son D'être",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/2_08.mp3",
        comment:
          "初めまして、楽曲担当の石見(すずり)と申します。初参加でしたが採用して頂き嬉しい限りです、、\nゲーム性も意識させて頂きましたが、何より皆様の心に残る楽曲になれば…という想いで作曲させて頂きました。ありがとうございますっ\n(石見)\n作曲者の石見さんが、もうプレーしたくなくなるほど（笑）難しくて超絶かっこいい曲を作ってくださったので、そのメロディーにのせて自分らしく精一杯歌いました。\nどんな譜面になるのか、ゲーム内でどんな音になるのか、収録が楽しみで仕方ありません。どうかたくさんのプレイヤーにこの曲が届きますように。\n(とおる)",
      },
      {
        artist: "RoughSketch(第1回目配信楽曲）",
        title: "666",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_01.mp3",
        comment:
          "どどどどどどどどどどうも！おはようございます！RoughSketchです！\nThe 9th KAC オリジナル楽曲コンテスト採用いただき嬉しい限りです！！\nThe 9th KACにちなんでガッチリと速い曲を作ってみました！！\n「9」って180度時計回りにしたら「6」になるじゃないですか！\nなのでThe 9th KACの裏ルート的なことをイメージしてBPMは不吉な数字の666！\n「シックス・シックス・シックス」と呼んでくださいね！ムムムじゃないですよ！\nどどどどどどどどどどうぞよろしくお願いいたしますすすすすすすすすすすす！！！！！！！！！\n(RoughSketch)",
      },
      {
        artist: "かめりあ feat. かめりあ(第1回目配信楽曲）",
        title: "色を喪った街",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_02.mp3",
        comment:
          "ご採用ありがとうございます！\nKACを勝ち上がったプレイヤーの皆さん、そして他のご採用者の皆さん、おめでとうございます。\nかめりあです。\n今回も（？）前回に引き続き（？）歌モノを応募しました。（そうなのか？）\nさて、今回ご採用頂いた楽曲「色を喪った街」はそのタイトルの通り、何者かによって色を奪われ、白、黒、灰色へとその姿を変えてしまった街。\n色彩を失ってしまった街、というストーリーを持った曲です。\n一体どの街なんでしょうかね…。皆目検討も付きませんが…。\nあっ、今作のSOUND VOLTEXはVIVID WAVEってお名前なんですね。へぇ～。鮮やかな、ねぇ…。なるほどね～。\n一体どう関係するのか、私には、全く、検討も付きませんが…。\n誰が何故その色を奪ってしまったのか。そして、色を喪った街の一人ひとりは、どうその事態に対し、立ち向かっていくのか。\nそういったイメージを膨らませながら書いた曲です。皆様方の妄想ストーリーも是非いっぱい育んでみてくださいね。\n肝心の楽曲についてですが、今回の楽曲はメタルとPsystyleの融合という試みをしています。\nメタル系の楽曲といえば、過去にも「EMPIRE OF FLAME」「FLYING OUT TO THE SKY」などをSOUND VOLTEXにはご採用いただいておりますが、今回はまた少し違ったイメージのサウンドになっています。\nすこしメロディックかつ、若干のメタルコア要素も入れ込み、自分なりにうまく調和が取れたのではないかなと思っています。エヘヘ。\nもちろんここはKAC、非常に速いギターのフレーズ、細かいドラムのビート、コンスタントに変化し続けるフレーズなどなど、譜面になるのが楽しみになるようなパーツを詰め込みました。\nみなさんが激・楽しんでくれるのを心待ちにしています。\nそして先述の通り歌モノ楽曲です。\nアーティスト名からお察しの通り…今回はかめりあさんに歌って頂きました。\nかめりあさんからは「(・∀・)ｼﾞｻｸｼﾞｴｰﾝ」とのコメントを頂いております。\n…という茶番はともかく、マジで自分です。以前から歌うのは好きだったのですが、こうやってマジで歌うのは初めてですね。精一杯歌いました。どうぞよしなに。\nさて、今回ご採用いただいたのは、こんなような感じでとても色々な要素が詰まった楽曲です。\nこれまでにも沢山の歴史を紡いできた音楽ゲームの最高峰たるKACという場に、また新しいストーリー（もちろんレイシスちゃんをはじめとしたボルテのみんなのストーリーも！）、\n新しいサウンド、あまつさえ自分の歌声が記憶されていくのは、本当に嬉しい限りです。\nプレイヤーの皆さんの持てる実力全てでこの曲を乗り越え、また一歩ずつ新しい一ページに踏み出して下さることを願っています。\n命の光彩、その手で奪い返せ！\n(かめりあ)",
      },
      {
        artist: "Diceros Bicornis(第1回目配信楽曲）",
        title: "ЯeviveR",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_03.mp3",
        comment:
          "主にピアノや全体の楽曲構成を担当しました。xiです。\nまたこのコンビで採用頂く事が出来てうれしいです！ありがとうございます！\n今回はKACらしく、ボスらしい雰囲気と、ギミックや変拍子、難しいフレーズ等盛りだくさん入れつつも、勢いを損なわないような感じで作曲させて頂きました。\n非常に力強い、歯ごたえ抜群の楽曲になったと思いますので、全力で楽しんで頂ければと思います。\n(xi)\nボルテではInnocent Tempest以来、およそ6年ぶりぐらいにxiさんと合作でFLOORに挑ませていただきました。\nイノテンの時と同じくxiさんにピアノで曲全体の構成を作っていただき、自分がそれを好き放題アレンジする感じで出来た曲です。\n今回はKACコンテストということで、、ただただ強さを求めた曲となってます。\n時を越えてボルテに還ってきたDiceros Bicornis渾身の１曲、是非とも打ちのめしてやってください。\n(BlackY)",
      },
      {
        artist: "ETIA.(第1回目配信楽曲）",
        title: "9TH5IN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_04.mp3",
        comment:
          "「ナインス・シン」と読みます。いえ、別に「キュースゴイン」でも何でも構わないのですが。\n自分だけではなく、他人のために曲を作るのもそんなに悪くないということに最近気づきまして\n戯れにそっちの方向に全力で舵を切ってみましたがいかがでしょうか？\n楽しんでいただければ幸いです。\n(ETIA.)",
      },
      {
        artist: "u-z feat.CHERICa(第1回目配信楽曲）",
        title: "Katharsis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_05.mp3",
        comment:
          "SOUND VOLTEXに収録されている「GhostTrigger」「Vampire'sTerritory」の続編となります。\n今回はダークヒーローな主人公の曲です！\n(u-z)\nThe 9th KAC 開催おめでとうございます！祭！\n今後もボルテが愛され益々盛り上がっていきますよう、厨二枠担当班の一員として陰ながら応援させていただきます。\n今回もめちゃくちゃかっこよすぎカウンター値更新曲です！\n沢山遊んで頂けたら幸いです、よろしくお願いします。\n(CHERICa)",
      },
      {
        artist: "Ashrount vs polysha(第1回目配信楽曲）",
        title: "ZEИITH",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_06.mp3",
        comment:
          '採用ありがとうございます。Ashrountと申します。\n6年間憧れ続けた夢の舞台に参加できた事を光栄に思います！\n今回polyshaくんとタッグを組み、KACの"頂"に相応しい楽曲を作りました。\n激しく派手やかなリズムで織りなすベースと、馴染み易く煌びやかなメロディとコード進行で盛り上がる事間違いなしの楽曲に仕上がっています。\n是非『ZEИITH』を体感してみてください。宜しくお願いします！\n(Ashrount)\nこんにちは。polyshaです。\nAshrountくんが作ってくれた土台や展開を基に、メロディをいじくったりコードをいじくったりと全体を調整する役をやりました。\n「俺たちの考えた最強の音ゲーハードコア」です。よろしくお願いします！\n(polysha)',
      },
      {
        artist: "ぽんきち&ゆんゆん(第1回目配信楽曲）",
        title: "SAMURAI TIGER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/26/result/sound/1_07.mp3",
        comment:
          "お久しぶりです、ぽんきちです。\n最近愛知に帰省した際、慣れない寝床から落ちて顔面を強打しました。\n顔面強打兄弟、兄です。\nお久しぶりです、ゆんゆんです。\n最近秋田でスキーをして、コブに引っかかって派手にこけて顔面を強打しました。\n顔面強打兄弟、弟です。\n今回は二人の合作曲を皆様にお届けすることができ、大変嬉しく思っております。\n敵をなぎ倒しながら戦場を駆けていくような疾走感と勇ましさのあるサウンドを目指して制作しました。\nお楽しみ頂けたらとても嬉しいです。どうぞよろしくお願い致します！\n(ぽんきち&ゆんゆん)",
      },
    ],
  },
  {
    id: "original25",
    name: "コナステ版 SOUND VOLTEX 先行配信！オリジナル楽曲コンテスト",
    banner: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_25.jpg",
    sounds: [
      {
        artist: "かめりあ(第6回目配信楽曲)",
        title: "PSYCHO+HEROES",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_01.mp3",
        comment:
          "ご採用ありがとうございます！\nコナステ版の初のコンテストだ！…と思い立ったが最後、曲を作る手が止まらなくなってしまっていました。かめりあです。\nさて、今回は普段開催されているコンテストとは違い、ゲームセンターで遊べるSOUND VOLTEX筐体よりも先にコナステ版に収録される楽曲のコンテスト、ということだそうです。\nそこで折角の機会ですし、おうちボルテ勢の皆さんに特別に楽しんでもらえる楽曲にしよう！と思いながら（これは80%本当ですが、あと20%は締切にもみくちゃにされてヒイヒイ言いながら、というのが正しい所です、めちゃくちゃヤバかったです）作ったのがこの曲、「PSYCHO+HEROES」です。\nこんなカッコ書きを曲コメで書く必要はありませんでしたね。失礼しました。\nだからといって凄く凄く特段にスペシャルな楽曲！というわけではないのですが、直球で楽しい曲、直球でカッコいい曲というWelcomeができたらいいね、と言う意味でド直球Machinegun Psystyle（それも速いヤツ）、Dubstep展開も入っちゃうし～！という特盛な楽曲になっています。皆さんの胃袋を満たせるといいのですが！\nそしておうちボルテ勢にも許されなくなるパターンにならないことを祈っています。\nどうぞ、よろしくお願い致します。\nちなみに、自分は何かと数字が好きなので曲コメでも数字の話をしてしまうのですが、この曲はBPM値が特殊（言うほどでもないですが…）で、整数になっていません。\n以前にも別の曲で～～.19とかいうBPMを使ったことがありますが、非整数っていいですよね。という思いが恐らくこめられています。良くない？そうか…\nなお、気づかれる方は気づかれるかと思うのですが、曲名はボルテ学園のあの二人から拝借したものです。\n灯色く～ん！PSYCHOちゃ～ん！こっち向いて～！キャ～！認知～！\n「サイコなヒーロー達」がクラウドネットワークの世界を駆け巡る、というイメージをしながら曲も若干サイバーかつスピーディーに（お前の曲はいつもスピーディーだろ！）なってますよ！\n今までコナステ版先行配信曲のジャケットの中には登場してこなかった二人、ということもあって、この曲で満を持して登場…してくれると良いんですけど、どうなんでしょうか？\nボルテスタッフの皆様、どうぞ、よろしくお願い致します。\nというわけで、初めまして（ではないのですが）おうちボルテ勢のみなさん！CLOUDの世界でサイコなエフェクトの闇・ザ・ダークネスを楽しもう！\n＆ゲームセンターでお遊びの方にも、この曲がいつの日かお会いできるのを待っています。待てない方はおうちボルテ参戦だ！\nどうぞどうぞいっぱいプレーしてあげて下さいね。\nかめりあでした。\n(かめりあ)",
      },
      {
        artist: "fZy(第6回目配信楽曲)",
        title: "Your SOUL Is Mine",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_02.mp3",
        comment:
          "この度は採用いただきましてありがとうございます。\nお初にお目にかかります、fZyと申します！\nコナステ版先行配信ということで、僭越ながらお宅へお邪魔する形となりますが、何卒何卒！\n肝心の楽曲ですが、バッキリ系でシリアス系なイキフンの曲になっています。\n是非とも詰めに詰めてやってください！よろしくお願いします！！\n(fZy)",
      },
      {
        artist: "CielArc(第6回目配信楽曲)",
        title: "Screaming!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_03.mp3",
        comment:
          "この度は採用頂きありがとうございます！！\nCielArcとして２作品目☆嬉しいです(о´∀`о)！！\nコナステ版ということで、いつでもどこでもノリノリで楽しめる楽曲を書き下ろしました！！\nサビでfollow me screaming!!と一緒に叫びましょうヽ(*´∀｀)\nぜひCielArcらしい最高にキャッチーでアガる↑↑楽曲をプレイして楽しんでくださいね♪\n(CielArc)",
      },
      {
        artist: "BlackY feat. Risa Yuzuki(第6回目配信楽曲)",
        title: "Gimme dreamin'",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_04.mp3",
        comment:
          "採用ありがとうございます！BlackYです。\nもし次FLOORでオリジナル曲のコンテストがあったらゆずりさとタッグで何かやりたいねーとか話してたそんな中、突如開催されたコナステ版ボルテのオリジナル楽曲コンテスト！これはやるしかねえと思いブチカマさせていただきました！採用すごく嬉しいです！\n今回はなんというか、ラヴリーでパラダイスなチューンといいますか、ハイスピードなラブソングともいいますか、まあ言ってしまえばラッキーでバキュームなテイストを自分なりに解釈して作り上げた感じです。\nそういった感じの曲が好きな方には聴いててニヤニヤが止まらない仕様となってると思います。もしニヤニヤされてる方がいたらそれを見て僕もニヤニヤしますね。へへっ！\nそしてボーカルのゆずりさことRisa Yuzukiさんが作詞も含めて可愛くキメてくださりました！\nこういうのもできてしまうゆずりさがすごいです。ビックリします。\nとにかく楽しい曲になったと思いますので！是非おうちでいっぱいプレーしてくださいね！！\n(BlackY)\n大事なことはぜんぶBlackYさんが書いてくれました！ありがとうございます！\nへへっ！て可愛すぎませんか？\n(Risa Yuzuki)",
      },
      {
        artist: "めと（Metomate）(第6回目配信楽曲)",
        title: "孤月群雲に沈む",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/6_05.mp3",
        comment:
          "めとです。\n陰鬱系ピアノロック中心に作って歌ってます。\nこの曲は、夜のまち、孤独な少女が人混みに消えていく、そんな雰囲気です。\nみなさん楽しんでください！！\n(めと)",
      },
      {
        artist: "ryhki(第5回目配信楽曲)",
        title: "Devastated Territory",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_01.mp3",
        comment:
          "こんにちは、ryhkiと申します。\nまさか2回も採用されるなんて夢にも思いませんでした、感無量で御座います。\n今回の楽曲はゴリゴリのハードコア、所謂ガバと言われるジャンルの曲です。\nこのガバというジャンルは僕にとってはかなり思い入れのあるジャンルです。\n当時高校生の僕はbeatmania IIDXを初めてプレーし、数ある曲の中で一際引かれたのがこのハードコア、ガバと言われる曲でした。\n「こんなかっこいい音楽自分でも作ってみたいなぁ」と思いアルバイトで稼いだお金でDAWを購入しました。\nまさにガバとの出会いは僕の作曲のきっかけでした。\n今では様々なジャンルの楽曲制作に挑戦してますが、こうして作曲活動の原点ともいえるジャンルで採用いただけたこと、本当に嬉しく思います。\nなにはともあれ、今回は前回の採用楽曲とはまた違った一面を見せられたかなと思います。\n是非おうちボルテで僕の楽曲プレーしてみてください！！\n僕もたくさんプレーしてPUC目指します～～\nでは、何卒よろしくお願いします！！\n(ryhki)",
      },
      {
        artist: "pan(第5回目配信楽曲)",
        title: "€omet popcorn",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_02.mp3",
        comment:
          "こんにちは！panです。有難い事に3度目の採用曲になります。\n今までで一番ボルテらしくて良い曲が書けたと思っていますので、是非遊んでください！\n(pan)",
      },
      {
        artist: "Noah(第5回目配信楽曲)",
        title: "Hurt me plenty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/5_03.mp3",
        comment:
          "採用いただきありがとうございます。\n今回の楽曲は下手クソなりに心身共にズタボロになりながらギターを弾いたのですが、Hurt me plenty(私をたくさん傷付けて)という曲名はその時に思いついたものです。\nよろしくお願いします。\n(Noah)",
      },
      {
        artist: "みーに(第4回目配信楽曲)",
        title: "トーキョーサマーナイト",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_01.mp3",
        comment:
          "お初にお目にかかりますみーにです！！！！採用ありがとうございます！！！！！！！！！\n普段はΣmbryØ(MXM)が解禁できない怒りをリアル四畳半の不夜城で曲にぶつけています！！\nトーキョーサマーナイトは「仕事しんどい…けど夜は自由！！！！」という感じの曲です！\nおうちボルテプレイヤー各位も近所迷惑にならない程度に踊っていきましょう！！！！！！\nそんなに難しくならないと思うので私もPUC狙いたいと思います！！！！！！！！！！！！\n最後に一つだけ！\n私をここまで連れてきてくれた「彼女」にだけは、この場を借りてお礼を言いたいです。\nありがとう、これからもよろしく頼みます！\n(みーに)",
      },
      {
        artist: "rider(第4回目配信楽曲)",
        title: "Hexennacht",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_02.mp3",
        comment:
          "riderと申します。この度はご採用頂きありがとうございました。\n普段からHardstyleというジャンルの楽曲を制作しているのですが、\n今回制作した「Hexennacht」は思い切りゲームを意識する方向性で「ゴスロリ魔法少女」をテーマに作曲しました。\nオーケストラでファンタジー、中二病的な世界観を、曲は激しくも可憐な雰囲気を表現出来て、\n作ってる時滅茶苦茶楽しかったのですが、まさか採用されてしまうとは驚きです。\n是非お楽しみ頂ければ幸いでございます。\n(rider)",
      },
      {
        artist: "MisomyL(第4回目配信楽曲)",
        title: "Ring！Run！Nyan!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_03.mp3",
        comment:
          "初めまして！MisomyL（みそみぃる）と申します。この度は楽曲採用ありがとうございます。\n今までボルテには楽曲制作ユニット「MisoilePunch♪ (及びそのタケノコ添え)」の作曲担当として「Fin.ArcDeaR」「Staring at star」「Aurolla」などの楽曲をご収録いただきました。\n今回、初の個人名義での採用となりましたが、楽曲制作を始めた頃からずっと一つの目標であったのでとても嬉しいです！\n曲は「リンランニャン」と読みます！\n大好きなボルテキャラクターの「雛・蒼・桃」モチーフとし、3匹が力を合わせて街を抜け海を渡ったりとハラハラドキドキな冒険とその先で見た理想郷の景色を描かせていただきました！\nボルテに今までありそうであまりなかった、忙しい現代音楽風(？)な作曲に可愛げな電子音を入り混ぜたスピード感のある楽曲です！縦連らしいフレーズなど譜面もかなり意識して作曲したのでプレイも楽しんでいただければと思います！\nちょっと個人的な話になりますが、個人名義の公募への挑戦は実に2年ぶりとなりました。\n正直なところ、今まで個人での採用がされていなかったことにややコンプレックスを抱いていました。\nしかしながら「楽しいことにただただ一生懸命になる」という感覚を思い返し、今まで自分も挑戦してこなかった曲調、そして今までのMisoilePunch♪にはなかった「MisomyL」名義としての曲の色を全力で描かせていただきました。\n今回の曲のテーマの通り、自分らしさを大事にしながら全力で「冒険」をした思い入れのある楽曲となりました！\n最後に改めて、大はしゃぎな３匹と大はしゃぎな縦連や乱打でハラハラドキドキな「冒険」をよろしくお願いします！\nそしてこれからも「Ponchi♪」「MisomyL」「MisoilPunch♪」それぞれの音楽をよろしくお願いします！\n(MisomyL)",
      },
      {
        artist: "あるふぁ feat. とおる(第4回目配信楽曲)",
        title: "floating girl",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_04.mp3",
        comment:
          "あるふぁと申します！カワイイを詰め込みました！\n一体どんなエフェクトになるのか…ワクワク\n(あるふぁ)\nFLOORでの参加はこの曲が初めてでした。\nあるふぁさんの可愛いメロディにのせて楽しく歌いました！\nSDVXが大好きで、その気持ちを込めて精一杯頑張りましたのでよろしくお願いいたします。\n(とおる)",
      },
      {
        artist: "すのうまん(第4回目配信楽曲)",
        title: "Holy Legacy",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_05.mp3",
        comment:
          "おはようございます、すのうまんです。\nお久しぶりです。私（わたくし）は如実に元気です。\n久方ぶりのシンフォニックでクラシカルなメタルをご用意致しました。\n是非とも頭を激しく振り、ヘッドバンギングマンで愉しくプレイして頂ければこれ（どれ）幸いです。\n今回はコナステ版ボルテという事で、初めて採用して頂き、未だかつてない世界にぅわくわくが止みません。\n聖なる遺産・・・それが、それこそが『Holy Legacy』だ！！\n(すのうまん)",
      },
      {
        artist: "monoq+RIZARDI(第4回目配信楽曲)",
        title: "SLEEPWALKER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/4_06.mp3",
        comment:
          'Aaa！念願のSOUND VOLTEX初参戦、RIZARDI（リザーディ）と申します！\nMÚSECA収録「SodaSplash!」を手掛けたマイメンmonoqと交互にヤイヤイと進めまして、ジャンルでいうなら私の得意なHardcoreに、monoqの明るくファンシーなFuture Bass等々々々をケミカルリアクションさせました。\n"SLEEPWALKER"は「夢遊病者」を意味し、夢の中特有のありえない世界や物理法則を、\nJersey Club気味のトリッキーなビートパターンや脈絡のないワンショットたちに込めています。\nそんなファンシーでカオティックな「SLEEPWALKER」に興味を持ってもらえたら、何よりの喜びです。\nmonoqが持ってきた全編に組み込まれているカットアップボイスが”Hypnotize me”ということで、きっとこの曲の主人公は夢の中にいたいのかも知れませんZzz…\n(RIZARDI)\nはじめまして！monoqです。\n最近知ったのが、海外の同名のバンドの存在で、聴いてみたらこれまためっちゃ良い曲なんですけど、当方とは全く無関係です。\nただ私monoqは色々あって音楽活動を終了しており（泣）、これからは彼らやRIZARDI先生に頑張ってほしいなと思っております。\n音楽活動は終了ですがエゴサ活動は継続予定なので、感想などどこかに書いていただけたら絶対読みます。ぜひあの手この手で褒め称えてください！\n(monoq)',
      },
      {
        artist: "siqlo(第3回目配信楽曲)",
        title: "Electric Injury",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_01.mp3",
        comment:
          "採用ありがとうございます！\n初めまして、若しくは、また会いましたね…！\nということでsiqloと申します。\nSIQLOではなく、Siqloでもなく、siqloと書きます！そしてサイクロと読みます！\n日頃はBPM128-150辺りを好んで曲を作っているのですが、今回はなんとBPM190の曲を作りました…\n速すぎてハヤシライスになるところでしたがすんでの所で踏みとどまることが出来ました。ありがとうございます。\n何故突然そんな速いのを作ったのかというと、この曲を作るちょっと前にPsy TranceのBPMをグッと速くしたDark Psyというジャンルにハマりまして、自分も作りてえ…という事で今回音楽ゲームナイズDarkPsyに挑戦してみた次第です。その名の通りダークな感じです。（ほんとか？）\nそんな感じで電撃が走るような力強いローリングベースと唸るようなPsy Leadでアゲアゲになって頂ければ幸いです！\nまたお会いしましょう！\nsiqloでした！\n(siqlo)",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第3回目配信楽曲)",
        title: "遷",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_02.mp3",
        comment:
          "隣の庭の庭のほうですが？\n隣の庭として採用されてから二年も経ってるんですね。\n時の流れマジ速すぎますね。\n俺が生み出し温めに温めすぎて化石となっていたラフをAoi博士が復元してくれました。\n遠い昔の友人に再開したような感じがして、美しい感情になりました。すごいですね、博士！\n(庭師)\nボルテプレイヤーの皆々様、ご無沙汰です！隣の庭の青い方担当、Aoiと申します。\nKACで武器を作ったりしていたら、今度は皆々様のオウチにお邪魔させて頂けることになりました。大変光栄と存じます。\n「遷」という漢字は日常生活で使うことは多くありませんが、「うつりかわる」といったような意味があります。\nこの曲は様々な音が絶え間なく流れていきます。その様は、多種多様なオブジェクトが休む間もなく流れる、ボルテの譜面によく似ているのかも…。\nそんなことを考えながら名付けました。\n今までの『隣の庭』とは一味違う、Techい一曲に仕上がりました。音とオブジェクトの流れに身を任せて、楽しんでくださいませ！\n(Aoi)",
      },
      {
        artist: "7mai(第3回目配信楽曲)",
        title: "月々紅花",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_03.mp3",
        comment:
          "お久しぶりです。7maiと申します。\n和風テイストのボス曲風味な曲が昔から好きで、今回自分なりに和風で激しいボス曲のような雰囲気を表現してみました。\n普段POPな曲で使えないような和風コードを存分に使えて楽しかったです。\n(7mai)",
      },
      {
        artist: "MasKaleido feat. ぁゅ(第3回目配信楽曲)",
        title: "恋するレインガール",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_04.mp3",
        comment:
          "こんにちは。MasKaleidoです。\n採用頂き、誠にありがとうございます。\n雨男…ではない筈。低気圧に、やや弱いです。\n今回は、小洒落た可愛い曲が書きたい！と思い立ち、\nご協力を得て、キュートなエレクトロポップを制作しました。\n自分の好きなブリティッシュロックのテイストを取り入れてみたり等、\n遊び心を加えた仕上がりになりましたので、是非楽しんでもらえたらと思います。\n(MasKaleido)\nこんにちは！ぁゅですー！\nお気に入りのレインブーツがあれば、雨の日でもなんだか楽しい気分になれますよね！\n水たまりに飛び込んでもへっちゃら！\nかわいくお洒落しておでかけすればキミに出逢えるかも！！\nぜひ遊んでくださいね！！\n(ぁゅ)\nそれはデモを聴いたある雨の日のこと。私の鼓膜をイナズマが突き破ってドカーンとハートに落ちたんだ。そう！そこのあなた！あなたに出逢える予感がしたんです！私は夢中でペンを走らせた。気が付けば歌詞は書きあがっていて………おや、誰か来たようだ。\n////波浪波浪波浪////\n採用ありがとうございます！\n作詞を担当しましたYui Chinenです。\n今回はMasKaleidoさん＆ぁゅさんとご一緒させて頂きました♪\n皆さんにも雨の心地よさ、ちょっとドキドキするような気持ちを感じながらゲームと一緒に楽しんで頂けたら嬉しいです☆\n（なお、当の本人は低気圧の度に悶絶級の頭痛をおこす模様。こんなにも雨を愛しているのに。あゝ悲しきかな。）\n(Yui Chinen)",
      },
      {
        artist: "you(第3回目配信楽曲)",
        title: "Sparkling Laser Beam",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_05.mp3",
        comment:
          "(∩^o^)⊃━☆ ▁▂▃▅▆▇█▓▒ﾚｰｻﾞｰﾋﾞｰﾑ！！！\nというわけで、youです。久しぶりにボルテに送ってみました。はじめましての方ははじめまして。\n今回の「Sparkling Laser Beam」は昨今のクラブミュージックのあるあるを詰め込んだような楽曲になってます。\n矢継ぎ早にいろんな音が入れ替わり差し替わりするのでお気に入りの音を見つけてみてね。\n(you)",
      },
      {
        artist: "gaburyu feat. Frosch(第3回目配信楽曲)",
        title: "iberis",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/3_06.mp3",
        comment:
          "作詞と作曲をしました、gaburyuです。\n作り方：近所のハンバーガー以外専門店にてポテトの笑い声がいつも以上に大きいので\n養殖型(2)お花畑の意外と内側にいる星さんに聞いたら滑らすのにはまだ早いと言ってました！！\n(gaburyu)\nボーカルを担当しました、ふろっしゅです。\nボルテへ参加する、という長年の夢が叶って感動しています。\n素敵な楽曲を作ってくださったgaburyuさん、採用して下さったスタッフの方々、全てのプレイヤーさんへ多大なる感謝を。\n(Frosch)",
      },
      {
        artist: "MYUKKE.(第2回目配信楽曲)",
        title: "DO-IT-AMA-SITE!!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_01.mp3",
        comment:
          "どうも、みんな大好きMYUKKE.(みゅっけ)です。\n今回は商店街で楽しくお買い物をしている様子を\nイメージした楽曲を作りました！\n昭和の古き良き時代をイメージしつつも、MYUKKE.があれやこれやと\n勝手に歴史改変を加えていったような楽曲です。\nところで皆さんは普段から身近な人へ感謝の気持ちを伝えていますか？\n伝えた側も言われた側も幸せな気持ちになるこの連鎖、素敵だと思います。\nEveryone「素敵な楽曲をありがとうMYUKKE.！！！」\nMYUKKE.「どいたまして！！！」\n…なんてね！\n(MYUKKE.)",
      },
      {
        artist: "梅干茶漬け(第2回目配信楽曲)",
        title: "Ichi-Go! DX Pancake!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_02.mp3",
        comment:
          "採用頂きありがとうございます茶漬けです。30kg痩せて20kg太りました。\n今回はむらたむうた氏のジャケットを引っ提げてボルテに殴り込みです。\nピコピコしていなくても茶漬けだよ！\nってアピールをしたくて作り始めた曲だったのですが、途中で我慢できなくなっちゃいましたね。\nやっぱり好きなんだと思いますこの音。わかるわ。\nなんやかんやありましたがイイ塩梅になったと思います。お気に入りの曲です。何卒！\n「店員さ～ん！パンケーキもう1枚追加で！ 」\n(梅干茶漬け)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：むらたむうた\nこの度は採用頂きありがとうございます！\n梅干茶漬けさんとは個人的にいろいろやっている仲なのですが、\nこのコンビでボルテのジャケと曲で採用されたいよな～という目標があり、\nそれがついに叶ってとても嬉しかったです～！\nパンケーキのあま～いロゴと、曲に合わせて忙しそうなもふもふ店員さんを\n可愛がっていただければと思います！\n「お客さんまだ食べるんですか！？もう15枚目ですよ～！？ 」\n(むらたむうた)",
      },
      {
        artist: "立秋 feat.ちょこ(第2回目配信楽曲)",
        title: "おはようからおやすみまでかまってポメポメ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_03.mp3",
        comment:
          "犬って可愛いですよね。立秋です。\nラグタイムコアやるぞ～って思って作ってたら、脳内でご主人さまが大好きなポメちゃんが100匹くらい暴れまわり始めてしまって、結局いつもどおりな感じになってしまったポメ！\n楽しくポメポメポメポメ！ポポポポポポ\n(立秋[曲])\n好きな猫はエキゾチック！ちょこです。\n猫って可愛いですよね、先日はじめて猫カフェでエキゾチックを見ることができたんですけど、すごい可愛くて連れて帰りたくなりました！顔がブチャってしてて可愛いんですよ！\n顔面モフモフしたかったけど定員さんに怒られそうだったのでできませんでした。可愛かったなぁエキゾチック。\n(ちょこ[歌])\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：hard\n好きな犬は柴犬です。どうもhardです。\nモフモフな生き物をおはようからおやすみまでもふもふしたい人生だったでもふ。\n(hard[絵])",
      },
      {
        artist: "テヅカ(第2回目配信楽曲)",
        title: "floorkiller",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_04.mp3",
        comment:
          "テヅカと申します！\nこの度はご採用頂き、ありがとうございます。\n「floorkiller」という曲です。\n音楽ゲームが好きで上手くなりたいプレイヤーが\n毎夜もがき葛藤し、たまに続ける意義を問いながらも、上達を重ね、\nいつか夢見てたフロアやKACでライバルと対峙する。\nただ音楽ゲーム楽しいよなシープドリーミンと、\n対になる音楽ゲームの楽しみ方提案の楽曲として作りました。\nぜひフロアをぶち上げるため、\nこの楽曲をおうちボルテ特訓でたくさん使ってくれると嬉しいです！\n自分もおうちで特訓します。\n(テヅカ)",
      },
      {
        artist: "borzy(第2回目配信楽曲)",
        title: "Flaa Behavior",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_05.mp3",
        comment:
          "borzyです、実に何年ぶりかですが、採用いただきありがとうございます！\n「Flaa」という言葉は（多分）ありませんが「滑らか」もしくは「自由な」\nという意味で「フラー」という響きから勝手に作った感じです。\nゲームというのは、音楽ゲームに限らず操作性が重要なので、\n気持ちのいい操作をするためにも、タップやボタンの押し心地や\n遅延などのことが、これから進化して行くといいなぁという…\nすみません、話がズレてますが良かったらこの曲やってください！\n(borzy)",
      },
      {
        artist: "RiMo(第2回目配信楽曲)",
        title: "Dooooope",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/2_06.mp3",
        comment:
          "初めまして、RiMoと申します。\n長らく目標にしてきたSOUND VOLTEXの初採用をいただき、本当に身に余る光栄です…！\nおうちボルテということで、ゲームセンターではなかなか開放できない“はっちゃけたい”衝動をぶつけられそうな曲を作りました。\nご近所さんには配慮しながらも、人目を気にせずノリノリではっちゃけていただけると幸いです！\n(RiMo)",
      },
      {
        artist: "Spacelectro feat.椎木レク(第1回目配信楽曲)",
        title: "トマヨイ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_01.mp3",
        comment:
          "この度は採用ありがとうございます。Spacelectroです。\n音楽ゲームでプレーしたくなるような激しい曲になるよう作ってみました。\n楽しんでもらえると嬉しいです。\n(Spacelectro)\n歌ってて楽しくなるめちゃくちゃ素晴らしい曲です。私は音のギザギザ感がたまらなく好きです いつもノリノリです\n楽しくplayして頂けたら嬉しいです。\nよろしくお願いします！\n(椎木レク)\n採用ありがとうございます！\n楽曲を聴いてテンションの赴くままに書き上げた作品です。\n段々と曲のテンションが上がっていくのでプレイする時にその辺りも楽しんでいただけると嬉しいです！\n(海兎)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：木葉はづく\n同楽曲の公開MV制作の繋がりでジャケットデザインをさせていただきました。\nSDVX収録とのこと、大変嬉しく思います。\n(木葉はづく)",
      },
      {
        artist: "Paradise Eve feat.しゃみお(第1回目配信楽曲)",
        title: "夢見草奇譚",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_02.mp3",
        comment:
          "咲いて喜ばれ、散って惜しまれ\n百年、千年と愛される夢見草のように、\n多くの人に楽しんで頂ける楽曲になることを願っています。\n素晴らしい演奏で彩りを添えてくださった、\n楽器演奏者のみなさまへ最大の感謝を込めて。\nこのたびは、採用のお知らせをいただき、ありがとうございました。\n（Paradise Eve）\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：apt\n採用おめでとう＆ありがとうございます！\n描いてる最中ずっと「人生で一番ピンク色つかってんな～」と思ってました。\n可愛いピンクからセクシーなピンクまで色んなピンクです。\nピンク！！\n（apt）",
      },
      {
        artist: "Ashrount(第1回目配信楽曲)",
        title: "Over The Top",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_03.mp3",
        comment:
          'Ashrountと申します。この度は採用ありがとうございます。\n今回コナステ版先行配信とのことで、現行コナステに収録されている楽曲の最高難易度になるような激しい楽曲に仕上げました。\nメロディアスなリードとカッコいいベースが織りなす、ハイスピードで音楽ゲーム映えするこの楽曲はさしずめ、"Arcade Core"というジャンルと言えるでしょう。\n是非"Over The Top"を体感してみてください。\n（Ashrount）',
      },
      {
        artist: "KV.S&はらたま(第1回目配信楽曲)",
        title: "Historia of Velnoti",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_04.mp3",
        comment:
          "うさぎです。\n本楽曲はモンズァヤクィ地域のオコヌミヤクィ神殿に祀られている、かつて紅色のヴェルノーティが携えていた聖剣「ドウノツルギ」を巡り争うハートフルラブストーリー！\n相変わらずチワワさんのギターが輝くカッコイイ楽曲となっておりますので\n次のステージへ向かって、駆け上がれ！\n（KV.S）\nチワワです。\n紅色のヴェルノーティという楽曲を弾かせていただいてから早ウン年…ついに系譜が収録と感慨深いものがあります。\n随分と大きくなって…速くなって…あらあら！！まぁまぁ…！！ワン！！\n(はらたま)",
      },
      {
        artist: "polysha(第1回目配信楽曲)",
        title: "World of Iris",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/25/result/sound/1_05.mp3",
        comment:
          "採用ありがとうございます。polyshaです。\n虹・祝福がテーマの楽曲です。\n何卒、よろしくお願いします。\n（polysha）",
      },
    ],
  },
  {
    id: "original27",
    name: "SOUND VOLTEX EXCEED GEAR制作決定記念 キャラクターテーマ楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_27.png",
    sounds: [
      {
        artist: "DecisionS (kanone + nora2r)(第13回目配信楽曲）",
        title: "Unleashed Redness",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_01.mp3",
        comment:
          "こんにちは。ボルテ新作稼働おめでとうございます。kanoneです。\nこの度はnora2rとの合作ということもあり、赤志魂をイメージした楽曲を制作しました。\n今二人が持っている技術で『INFINITY OVERDRIVE』の続編を作りあげました。\n魂の持っている「食えないヤツ」感を感じて頂けますと幸いです。\n今後ともこの楽曲を末永くご愛顧賜りますよう、お願い申し上げます。\n(kanone)\nご無沙汰しております。nora2rと申します。ノラツーアールと読みます。\nDecisionSとして採用頂くのはおよそ8年振りということで、再びこのコンビでやれたことを大変嬉しく思います。\nキャラクターコンテストが来るということでこれはもうやるしかない！と思いkanoneに声を掛け、\n前作と同じBPM・ジャンルで作ろうということだけ決めたと思ったら次の瞬間にはデモが飛んできて仰天しました。\n8年間互いのフィールドで鍛えたものをぶつけ合いながらの制作は非常に楽しかったです。\n赤志魂のシリアスな部分にスポットを当てた『Unleashed Redness』、末永くお楽しみいただけますと幸いです。\n(nora2r)",
      },
      {
        artist: "かゆき(第13回目配信楽曲）",
        title: "party:stage",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_02.mp3",
        comment:
          "猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫描猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫\n(にゃんにゃんにゃんだふるアイランド村長かゆき)",
      },
      {
        artist: "xi(第13回目配信楽曲）",
        title: "Rapsodia d'amore",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/13_03.mp3",
        comment:
          "こんにちは！xiです！採用ありがとうございます！\n今回はプログレッシブロックが作りたい！！！という欲が出てきたので、\nシャトー・ロワーレをイメージした楽曲を制作させて頂きました！\n楽曲のタイトルは、愛剣を溺愛している音楽教師という設定と、\nプログレとジャズとバラード等の色々なジャンルを行き来する「狂詩曲」に近い楽曲の展開から、\n「愛の狂詩曲」のイタリア語である\n「Rapsodia d'amore」(ラプソディア ダモーレ)\nと命名させて頂きました！\n複雑さと速さの両立と、予測のつかない展開、\n音ゲーらしさを意識した楽曲になっておりますので、\n楽しんで頂ければ幸いです。\nちなみに拍子は41回変わってます。わー。\n(xi)",
      },
      {
        artist: "#EmoCosine(第12回目配信楽曲）",
        title: "Going My Future!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_01.mp3",
        comment:
          "採用ありがとうございます、エモコサインと申します。\n今回の楽曲は「行道舞」ちゃんのキャラクターテーマ曲ということで丁度2年前に採用頂いた「VIVID DEBUT!」の続編です。沢山遊んでください！\n(#EmoCosine)",
      },
      {
        artist: "みーに＠メルヘン風紀委員会書記(第12回目配信楽曲）",
        title: "フェアリーテイル・ラヴァーズ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_02.mp3",
        comment:
          "おはようござい！みーにと申します！\nメルヘン風紀委員会書記に登用頂きありがとうございます！！\n候補キャラ一覧にラブシックちゃんの名前があったので響きだすlove tuneがブレーキ壊してしまい、高速連続パンチでボルテ学園ラブソングを作らせていただきました！\n曲調は電子の海で絶賛大流行中の例のリズム|●○○○|●○○○|●○○●|○○●○な感じです！\nボルテにはまだあまりないような…？世界観を広げる一助となれば幸いです！\nトーキョーサマーナイト(MXM)は未PUC(自己ベスト2-0)、ΣmbryØ(MXM)はいまだ未解禁の私ですが、\nフェアリーテイル・ラヴァーズはPUCすることができるのか…\n真相は次のページで！\n(みーに)",
      },
      {
        artist: "Juggernaut.(第12回目配信楽曲）",
        title: "Archangelio",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/12_03.mp3",
        comment:
          "SOUND VOLTEX EXCEED GEAR、稼働おめでとうございます！！\nいつもお世話になっております！Juggernaut.です。この度は採用誠にありがとうございます！\n今回はキャラクターソングとのことで、ケムリちゃんのイメージに合うようにがんばりました。\n楽しんでいただけたら嬉しいです！\n(Juggernaut.)",
      },
      {
        artist: "概念(第11回目配信楽曲）",
        title: "XXanadu#climaXX",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/11_01.mp3",
        comment: "偽りの　幸せもたらす　桃源郷\n彼女は貫く　その終焉を\n(概念)",
      },
      {
        artist: "BlackY(第11回目配信楽曲）",
        title: "Bigbang Faker",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/11_02.mp3",
        comment:
          'BlackYです！採用ありがとうございます。今作でも楽曲を収録していただけること、大変うれしく思います！\n今回はキャラクターテーマの楽曲コンテストということで、どうせなら自分の曲のジャケットになったことが無いキャラクターにしようかと考えたりしましたが、自分の曲「False Cross」によって生み出されたキャラクター「Vela / ベラ」も対象入りしていて、これは放っておけないぞ！と思い、制作に踏み切った次第でございます。\n今回はベラの本質に迫れるような感じのPDM(Piano Dance Music)になっております。"ワル"っぽさを出すため、ビッグバンドジャズ的な要素も入れてみました。彼は偽者だからね。ワルい子よね。そんな大宇宙を駆け巡る悪びれない皮肉屋な彼はまさしく"Bigbang Faker"じゃん。みたいな感じの曲です。\nぜひ楽曲から色んなベラらしさを感じ取ってもらえれば幸いです。\n(BlackY)',
      },
      {
        artist: 'かめりあ as "まいたけラヴ" feat. ななひら as "エリンギ大好き"(第10回目配信楽曲）',
        title: "まみむめ🍄まるっと🍄まっしゅるーむ🍄🍄",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_01.mp3",
        comment:
          '㊗「SOUND VOLTEX EXCEED GEAR」制作決定！\nこんばん🍄（「こんばんたけ！」と読みます。2021年間違いなく"来る"ので覚えておいて下さい）！\n突然ですが皆さんはキノコが好きですか？\n私は好きです。\n私、まいたけに目がないかめりあこと、かめりあ as "まいたけラヴ"です。\n用もなくスーパーで買います。\nさて、皆さん御存知の通り！今回はボルテのキャラクターテーマ楽曲コンテストということで、\nみなさんが大好きなかなでちゃん部門で応募させて頂きました。\nもちろんボーカルは我らがかなでちゃん賞ことななひらさん！いつもありがとうございます。\n普段よりBPMが遅いですが（ですよね？）、依然として早口の部分も多いので今回も大変だったとのことです。\nでもななひらさんのさすがのマシマシパワーでマッシュルームたちも野菜増しの一員になったのではないでしょうか。何を言っているのか。キノコのラーメンもあるらしいですね。\nありがとうななひらさんありがとうかなでちゃん。エリンギをたくさん食べてこれからも元気で過ごして下さい。\n肝心の楽曲についてですが、皆さん御存知の通りキノコです。\nこれまでにラーメン、焼肉、寿司、カレー、と多種多様な料理を提供してきたかなでちゃんですが、ではキャラクターテーマソングとなった時どんな曲を書いたら良いのか？奇を衒って別方面のアプローチで行くか？と考えていた時、冷蔵庫に眠っていた地面色のダイヤモンドがささやきかけてきました。\n俺がついてるだろ。と。\nというわけで、ついてる石づきをしっかり切り落とし…、今回はかなでちゃんにレッツクッキングしてもらいました！\nそれからサウンド的にはDubstepやHDMなどのベースミュージック/ハードダンスをベースにしつつ、キノコっぽくちょっとミステリアスな雰囲気の楽器やフレーズを入れてみました。\nボルテ的にもちょっと珍しい、面白い楽曲にできたかなと思っているのですがいかがでしょうか。\nなおまいたけ以外の🍄も好きです。えのきを手に入れるとまず間違いなくなめたけにします。\n最近はキノコを揚げるのも独特の風味があって美味しいなと思うようになってきました。\nもし皆さんのお気に入りのキノコ調理法があったら教えて下さいね。\nちなみにゲーセンにはキノコを持ち込んだりできませんので、ゲーセンでこの曲を沢山プレーした後はどうぞ家の中で大切にしてあげて下さい。\n以上です。よろしくお願いし🍄。\n（かめりあ）\nおはようござい🍄\n（こちらは「おはようございまっしゅるーむ！」と読みます。こんばんたけとは読み方が違いますのでご注意ください）\nこの度のキャラクターテーマ楽曲コンテスト、僭越ながらかめりあさんとのタッグにて野増菜かなでちゃん部門に応募させていただきました。\nボルテの魅力的なキャラクター達の中でも個人的にとても思い入れのある子でしたので、採用いただけて本当に嬉しいです。ありがとうございます。ありがとうございます！！\n今回の楽曲のテーマはかめりあさんのコメントでも解説されているようにキノコです。\nかなでちゃんがジャケットに描かれている楽曲はラーメン、焼肉、寿司、カレーと、凡そ一般的にはみんなが大好きとされている（諸説あります）美味しい食べ物がテーマになっている物が多いので、「次は一体どんな料理がテーマなんだろうか…並び的にはそろそろピザとか来るんじゃね？」と一人考えていましたが、実際に届いたのはキノコでした。キノコ。もはや料理ですらない。\nしかしそこは流石のかめりあさんで、キノコをネタにしたシャレを始めと、味付けや盛り付けもバッチリなにぎやか楽しい楽曲に仕上がっております。\n（正直サビの早口（ま行が続く箇所が特に難しかったです）はやや苦しみながら収録しましたが、やれと言われたらやるしかないですよね）\nちなみにエリンギは縦に切ってバター醤油で炒める「エリンギステーキ」がお気に入りの食べ方です。ぜひお試しください。\n話が少し逸れてしまいましたが、とっても面白い楽曲になっているかと思います！\n美味しく楽しんで召し上がっていただけたら嬉しいです！\n（ななひら）',
      },
      {
        artist: "Yu_Asahina(第10回目配信楽曲）",
        title: "The Clown of 24stairs",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_02.mp3",
        comment:
          "日頃お世話になっております。Yu_Asahinaです。\n遂にやってきましたね、この時が。\nこのコンテストが発表された時これはとんでもねえや…と思いまして、\n長年ハーレ君と共にやらせて頂いてきたわけで、やらないという選択肢はありませんでした。\nSDVXでの私は、彼と共にあります。\n個人的に、沢山の人が関わる作品において魅力的であって世界観がまだどんどん拡がるのであれば\nそのキャラクターなりコンテンツが縛られるべきではないと考えています。\nMÚSECAの時も、同じことを思いました。\nなので、自分がやるべきことは一角に土壌を作り濃い水をやってあげることだと思っています。\nそこで色んな人が交代で水をやってあげても良くて、そうしたら広くなったり元気に育つのかなと。\n自分が水をあげたくてもあげられないこともありますからね。そこは畑の管理人さんがうまくやってくれるでしょう！\nとりあえず、ハーレ君のことをずっと世界で一番好きなのは自分なのでそこんとこよろしくお願いします！\n(Yu_Asahina)",
      },
      {
        artist: "Hommarju(第10回目配信楽曲）",
        title: "The King Of Red",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_03.mp3",
        comment:
          "SDVX新曲は雷刀のキャラクターソングです。\nイントロから順番に短期間でドドドド！っと作るという\n僕が公募に参加していた当時と同じ手順を取り入れてみた結果、\n制作手法やスタイルがGottと同じだということに気が付きました。（BPMも同じだった）\n違うところがあるとすれば雷刀がギターを持っていること…？\nなので雷刀にギターを弾かせてみましたよ！\nやっぱり僕のこういう曲はボルテに必要ですね。\n作ってて楽しかったです、また参加します。\n「The King Of Red」ぜひプレイしてくださいね！\nHommarjuでした！\n(Hommarju)",
      },
      {
        artist: "TAKU1175 ft.駄々子(第10回目配信楽曲）",
        title: "黎明の情",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_04.mp3",
        comment:
          '叶わぬ恋への未練から霊となってしまったものの、時の流れには抗えず\n狂おしい程愛したあなた様の記憶さえも徐々に薄れてしまう…\nそんな我が身を嘆く、ほたるさんの哀歌です。\n彼女の過ごしてきた永遠とも呼べる時を紐解き、寄り添い、思い描き\nそれをお二人の力を借りて楽曲と言う形に昇華することが出来たこと\nそして、再びほたるさんの生涯を彩る一頁となれたこと\n本当に本当にしあわせです。\nこの度はお披露目の機会をいただきありがとうございました！\nたくさん遊んでいただけたら幸いです。\n原案と歌唱担当、駄々子でした。\n(駄々子)\n作詞を担当しましたPICOLTEXです。この度は採用ありがとうございます！\n私自身5年ぶりの採用ということもあり、大変緊張しながらコメントを書いています。\n上に記載されているようなテーマを駄々子さんから初めに頂いていたのでイメージはしやすかったのですが、\nTAKU1175さんの昭和歌謡風の楽曲に合うようにアレコレと表現を悩みました。\n"汐夏ほたるさんらしさ"といえば和風、夏、幽霊、など色々思いつきますが\nそのどれもが良い感じに取り入れられた、お気に入りの楽曲となりました。お二方やっぱすごいっす。\n皆さんにも気に入っていただければ幸いです。私もめっちゃPUCします！\n(PICOLTEX)\n…ということです！たのしい！\n(TAKU1175)',
      },
      {
        artist: "あの日字数制限に負けて追い出された「ゃ」(第10回目配信楽曲）",
        title: "I Left for my Right",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/10_05.mp3",
        comment:
          "兄弟の背中をテーマに書きました。背負われてるシーンが印象に残っているので。\n「ずっと付いて回る背中合わせの影」そう思っていたけど、今は「背中を任せるならこいつの他にいない」みたいな、心の変化というか。\nいや、本当はかっこいいキャラクタのはずなのよ。クールなライバルキャラなのよ。\nなのに家庭菜園したりUFOキャッチャーのプロになったり頭打ってピチピチスーツ着てバラ背負ったりクソッ一体誰のせいでこんなヘンテコ方向性になっちまったんだ待ってろおれが今ちゃんとかっこいい烈風刀くんに軌道修正してやるうおおおおお……！\n(かぼちゃ)",
      },
      {
        artist: "nonomori feat. 亜沙美(第9回目配信楽曲）",
        title: "文月",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_01.mp3",
        comment:
          "楽曲制作担当のnonomoriです。\n本作品は「汐夏ほたる」の叶わぬ恋を夏の情景と重ねて表現した曲です。\n歌詞には「掛詞」や「見立て」などの和歌の技法を使っており、汐夏ほたるが実在したらこんな歌を詠んで欲しいなあ、という想いを込めて制作しました。\n是非、遊んでいただけると嬉しいです！\n(nonomori)\n初めまして、ボーカル担当の亜沙美と申します。\n環境が変化して宅録を始めたところ、このようなご縁を頂きました。\n学生時代にDDRにハマって毎日汗だくになりながら踊っていた身としては、このような形でKONAMI様のゲームに関われる事に大興奮&感謝しかありません。\n最寄りのゲームセンターまで車で1時間以上かかりますが、是非喜びを噛みしめつつプレイさせて頂きたいと思います！\n(亜沙美)",
      },
      {
        artist: "U-ske feat.花柚(第9回目配信楽曲）",
        title: "charm♡you",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_02.mp3",
        comment:
          "U-skeと申します。キャラクターテーマ楽曲コンテスト採用ありがとうございます！\nなんでもないときに心が突然高鳴る瞬間、実はこの子たちに魔法をかけられているのです。\nあらがえない誘惑に身をまかせて、全部とろけてしまいましょう！\n(U-ske)\n歌唱担当させていただきました、花柚(はなゆ)と申します！\n採用いただきとっても嬉しいです！\nカヲルちゃんとアシタちゃんのことをたくさん考えながら歌いました！\nトリコ ニ シテアゲル！\n(花柚)",
      },
      {
        artist: "kanone(第9回目配信楽曲）",
        title: "End of Guilty",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/9_03.mp3",
        comment:
          "こんにちは、kanoneです。\nギンのやんちゃかつ真面目な性格をイメージしたメタル系の楽曲を制作いたしました。\n全体像としては『Endless Gravity』みたいな雰囲気を出しつつ、\nリズムを部分部分複雑に、かつメロディーは伸び伸びした感じを意識したので、\n良い感じに対になる楽曲が出来上がったのかなと思っております。\n何卒、よろしくお願いいたします。\n(kanone)",
      },
      {
        artist: "影虎。(第8回目配信楽曲）",
        title: "Continuous Moment",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_01.mp3",
        comment:
          "影虎。です。この度は採用頂き誠にありがとうございます！\nキャラクターテーマ楽曲コンテスト開催と聞いて、対象キャラクター欄に「井之上 千影」が書かれているのを見た瞬間に「井之上 千影ちゃんでやるしかない！」と思ったので、井之上 千影ちゃんテーマで1曲書きました。\n井之上 千影ちゃんがジャケットで登場しているのは(コンテスト開始時点で)僕の曲のみで、\n今までHi-tech Full on・Psychedelic Tranceと攻めてきたので、今までの曲を踏襲しながら「自分の色を120%出した曲」を作ることをテーマに制作しました。\nHi-tech Full on＆PsyTranceなサウンドに合わせて、次々と忍者の如く敵を薙ぎ倒す井之上 千影ちゃんをイメージしながら楽しんで頂ければ幸いです。\nありがとうございました！\n(影虎。)",
      },
      {
        artist: "winddrums(第8回目配信楽曲）",
        title: "Restless Waitress",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_02.mp3",
        comment:
          "こんにちは。\nwinddrumsです。\nキャラクターテーマ曲コンテストという事で気になるあの子はいないのかな！？とホームページを確認した所、お名前を発見したので書かせていただきました。\nボルテ2付近くらいから公募にて携わらせて頂いているのですが、その頃から気になって仕方ない子、埴仁虎子ちゃんに楽曲がかけて光栄です。\nカフェ「Cafe VOLTE」にて、せっせとウェイトレスとして忙しく働いている姿を想像しつつ、今までのハニーちゃんのイメージであるアコーディオンやグロッケンなどのオシャレかわいい感じは残しつつ、Kawaii感じをより早いBPMと忙しない音使いで攻めてみました。\nエンディングはお仕事完了！という事で、いつものハニーちゃんな音使いで閉めるという所がこだわりポイントでもあります。\n楽しんで頂けましたら幸いです！採用ありがとうございました。\n(winddrums)",
      },
      {
        artist: "uma(第8回目配信楽曲）",
        title: "Chakra",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/8_03.mp3",
        comment:
          "こんにちは、umaです。この度は採用をいただけて大変嬉しいです。\nキャラクターテーマ楽曲コンテストということで、多くのボルテキャラクターたちの中から私の作風と合致するキャラクターは誰だろうかと考えた末に、\nリリック・リシュナとゴルおじさん（達）のチームでオリエンタルな曲を仕上げてくるのが一番上手く行くのではないかと思い本楽曲を制作いたしました。\nインド（及び中東地域）の楽器や楽曲スタイルを混ぜ合わせた高速EDMとなっております。ぜひ遊んでいただけますと幸いです。\n(uma)",
      },
      {
        artist: "凛々咲(第7回目配信楽曲）",
        title: "Aqua,Luna-rium",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_01.mp3",
        comment:
          "VTuberの凛々咲です。楽曲を採用していただけてとても嬉しいです。\nオンディーヌの儚い心情を、水面に浮かぶ月になぞらえて表現してみました。\nぜひたくさんの方にプレーしてもらえたら良いなと思っています。\nではおつりりしゃ～\n(凛々咲)",
      },
      {
        artist: "ろひ(第7回目配信楽曲）",
        title: "Vallasotiena",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_02.mp3",
        comment:
          "再びご採用ありがとうございます！\nろひと申します。\n普段はボカロ曲を作っております。\nシャトー・ロワーレと覚醒のジュワユースの二人セットでテーマ曲を書かせて頂きました。\n現在は音楽教師のシャトー・ロワーレですが、二人には何か壮絶な過去があるに違いません。\nそんな想像をしながら民族調＋シネマティック＋音ゲーでファンタジーな楽曲に仕上げてみました。\n是非とも二人の過去をイメージしながらプレーして頂ければと思います。\n(ろひ)",
      },
      {
        artist: "Yuta Imai vs Blacklolita(第7回目配信楽曲）",
        title: "2094",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_03.mp3",
        comment:
          "ニーハオ！Yuta Imaiネ！友達のBlacklolitaくんとコラボ楽曲を制作したアルヨ！\nサイバー×チャイナなイメージでバキバキに二人で作り込んだヨ！\nお互いの色がキチンと出ていて最高にカッコいい曲に仕上がったネ！\nたくさん遊ぶヨロシ！\n(Yuta Imai)\nニーハオ！Blacklolitaネ！友達のYuta Imaiくんとコラボ楽曲を制作したアルヨ！\nサイバー×チャイナなイメージでバキバキに二人で作り込んだヨ！\nお互いの色がキチンと出ていて最高にカッコいい曲に仕上がったネ！\nたくさん遊ぶヨロシ！\n(Blacklolita)",
      },
      {
        artist: "Takenoko boy feat. metyao(第7回目配信楽曲）",
        title: "G4ME ØVEЯ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/7_04.mp3",
        comment:
          "お世話になっております、Takenoko boyことタケノコ少年です。\n採用いただきありがとうございます！！！\nまあ言いたいやつは言っとけという感じの曲です。\nがんばったのでよろしくお願いします！\n(タケノコ少年)\n歌唱担当致しましたmetyaoです\n大好きなタケノコ少年くんの曲を歌わせていただけたこと、そしてそれがこのような形でたくさんの方に聴いていただける機会を設けていただけていることを心から嬉しく思います\n是非楽しんでいただけたら幸いです！\nよろしくお願いします！\n(metyao)",
      },
      {
        artist: "がるる(第6回目配信楽曲）",
        title: "WILD FIRE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_01.mp3",
        comment:
          "採用ありがとうございます！！がるると申します！こちらでは初めまして！\nいつかボルテに楽曲採用されることを夢見ながらめげずに投稿し続け、そしてついに楽曲採用を頂きました！\n本当に嬉しいです！手と足が震える程には喜んだと思います。\n普段はこのWILD FIREのようにユーロビートを作っているのですが、\nユーロビートで思い浮かぶものといえば、車と峠ですよね？（個人の感想です)\nそしてゴリラといえば山…なら峠をものすごいスピードで駆け抜けていくゴリラを見たくありませんか？（個人の感想です)\nならユーロビートでしょ。のノリで作成させていただきました。\n何たってWILDなFIREですからね、えぇ。\n（本来は山火事みたいな意味なんですけど、「野生を燃やせ」的な意味を込めて付けました）\nユーロビートにはオーケストラヒットを沢山使うと良いとされているので、レイヴィーな要素も取り入れてます。\nなぜなら好きなものには好きなものがたくさん入っていると、うれしいので。\nそんなアッパーでアゲアゲなこの楽曲を楽しんでいただけると嬉しいです！\n(がるる)",
      },
      {
        artist: "nora2r(第6回目配信楽曲）",
        title: "Cappuccino Hearts",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_02.mp3",
        comment:
          "ご無沙汰しております。nora2rと申します。ノラツーアールと読みます。\n前回FLOORに応募・採用いただいたのがもう5年ほど前ということで、月日の流れる早さにただただ驚くばかりです。\n『Cappuccino Hearts』は、班田みみこは恐らくジェットコースターのような性格だろうという印象から掘り下げて制作した高速ハードコアを主軸にした楽曲です。\n全体的に可愛い雰囲気が失われないよう意識しつつも激しいサウンドと緩急のある展開を盛り込み、学園生活にバイトに遊びに忙しい彼女の目まぐるしくも楽しい様子を表現しました。\n彼女の持つキャラクター性や要素を音に変換して曲を作り上げていく作業は本当に楽しくて、夢中になって制作できました。\n夢中だった一方その表現を落とし込むことで悩んでいつも以上に時間が掛かる制作にもなりましたが、それはそれということで……。\n普段使わないようなエレピ系サウンドを前面に出したり、ベースサウンドを全て一から自作したり、個人的に色々とチャレンジした楽曲でもありますので、\n楽しんでプレイしていただければ幸いです！\n(nora2r)",
      },
      {
        artist: "MasKaleido feat. ぁゅ(第6回目配信楽曲）",
        title: "Xymatic Scope",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/6_03.mp3",
        comment:
          "こんにちは。MasKaleidoです。\n採用頂き、誠にありがとうございます。\n今回は、カノン=XXXXちゃんのテーマ曲を制作しました！\nレプリカントに電脳体などなど、近未来SFファンタジーな世界観でとても良きですね。\n今作ではどんな活躍を見せてくれるのかなと、ストーリーを妄想して歌詞も書きました。\n是非遊んでみてね！\n(MasKaleido)\nこんにちは！ぁゅですー！\nまたまたまた！MasKaleidoさんの楽曲の歌唱を担当させていただきました！ありがとうございますー！\n今回はカノン=XXXXちゃんのキャラクターテーマということで、キャラクター像をイメージして歌いました！\nぜひ遊んでくださいね！！\n(ぁゅ)",
      },
      {
        artist: "brz1128(第5回目配信楽曲）",
        title: "FEEL THE FORCE",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_01.mp3",
        comment:
          "こんにちは、brz1128です！\n久しぶりに採用をいただくことができました（2年ぶり）\n今回はマキシマ先生の楽曲ということで、ひたすらにパワー！って感じの曲になっています。\n曲名的に知ってる人は気づくと思うのですが、アレのアレでございます。\n何卒よろしくお願いします！\n(brz1128)",
      },
      {
        artist: "榮田一貴 feat.冬乃桜＆永久毎日(第5回目配信楽曲）",
        title: "恋は君のそばでサクラサク",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_02.mp3",
        comment:
          "初めまして！榮田一貴と申します！作編曲＆ギターを弾きました！\n公募初参加で採用いただき、至極光栄と存じます！クリスマスイブに採用通知をいただきまして、一人の夜に泣きながらケーキを食べました。\n傍丹桜子ちゃんのキャラクター性や情景を意識しつつ、自分の武器であるメロディーメイクやギターサウンドを大切にした曲になっております！詞と歌も最高ですよ！\n気に入っていただければ嬉しいです！是非聴いて遊んで楽しんでください！！\n(榮田一貴)\n作詞を担当させていただきました永久毎日(ながひさ いつも)と申します。\n音楽ゲームや音楽ゲーム楽曲が好きで、自分の歌詞もいつか音楽ゲームに…！と目指しておりましたので、この度は参加楽曲が採用いただけたこと大変嬉しいです。\nありがとうございます。\n爽やかCuteな素敵な1曲ですので、是非皆さんに楽しんでいただけたら幸いです！\n(永久毎日)\nSDVXでの初歌唱が桜子ちゃんの曲で本当に嬉しいです！！可愛い曲なので、軽やかな気持ちで聞いてくれるとHappyよo(*'▽'*)/☆ﾟ’\nなんだか実感が湧きませんが、実装されるのが楽しみです…！\n早く発表になるといいですね(*ﾟvﾟ*)\n(冬乃桜)",
      },
      {
        artist: "Yooh(第5回目配信楽曲）",
        title: "Enter The Fire",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_03.mp3",
        comment:
          "Yoohです。SOUND VOLTEX EXCEED GEAR稼働おめでとうございます！\nさて、今回の楽曲は赤志のテーマということで、彼らしいとっても熱いブチアゲトランスとなっています。\n是非、実際にプレーしてみてその熱さを体感してみてください。\n(Yooh)",
      },
      {
        artist: "u-z feat.紫咲ほたる(第5回目配信楽曲）",
        title: "M-O-R-F-I-N-E",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/5_04.mp3",
        comment:
          "＼さ～て！来週のボルテさんは～？／\nボルテしゅきしゅき廃人のみんな。お元気ですか？\nKatharsis以来ですね。u-zです。\n最近、現実逃避の一貫としてVチューバー活動をはじめました。\n「アンセム系Vtuberアンセムくん」としてやってるから、良かったらチャンネル登録してくれよな！\n今回の曲も「逃避行」がテーマになってるので、ドンドン逃避していこうな！\n官能的な内容の歌詞なので、\n今回のボーカリスト紫咲ほたるさんに歌ってもらう時・・・\nめっっっっっっっっっっｔちゃくちゃ興奮しました！\n(u-z)\nはじめまして。歌唱を担当いたしました、紫咲ほたるです。\n格好良さ全開の曲に己の中の厨二力全開で挑ませていただきました。\nみなさん、対戦よろしくお願いします！\n(紫咲ほたる)",
      },
      {
        artist: "上村香月(第4回目配信楽曲）",
        title: "神にした彼女が示す世界線",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/4_01.mp3",
        comment:
          "この度は採用ありがとうございます！！\n個人名義では久しぶりの採用なのでとても嬉しいです。\n十鳴カミトくんのテーマ曲ということでイラストはみずはさんにお願いし、\n「神となり彼が見た境界線」の続編が完成しました！！\n前回はいじめられていた十鳴カミトくんが、ある少女と出会い神の力を得る話でしたが、\n今回は神の力を奪われ少女から別の世界線へと飛ばされてしまいます。\n今回も中二病づくしで前回よりも荒々しく疾走感を増して帰ってきました！！！\nこの曲をプレイすればあなたも中二病に目覚めたりするかも…？\n(上村香月)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：みずは\nこの度は採用頂きありがとうございました＆お声がけくださった上村さんに感謝いたします。\n「神となり彼が見た境界線」に続き、またもカミトくんのストーリーを紡ぐお手伝いが出来て嬉しい限りです。",
      },
      {
        artist: "#Namescapes(第4回目配信楽曲）",
        title: "#Namescapes",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/4_02.mp3",
        comment:
          "#Namescapes\n(#Namescapes)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：#Namescapes\n#Namescapes",
      },
      {
        artist: "立秋 feat.ちょこ(第3回目配信楽曲）",
        title: "りむむむむむむ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_01.mp3",
        comment:
          "「む」が６つで！りむむむむむむです！　…ちょ、ちょっと！リムんないでよ～\n(立秋)\nみんなだいすきだぞ♡\n(ちょこ)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：hard\nりむるちゃんは脚がとってもかわいいと思います。",
      },
      {
        artist: "さわわ feat.杠葉えりか＆凜々(第3回目配信楽曲）",
        title: "恋愛♡悪戯！？まじかる☆ぱふゅ～む！！",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_02.mp3",
        comment:
          "皆様こんにちは！\n今回ボーカル・企画を担当した杠葉えりかです。\nキャラクターテーマ楽曲コンテストということで、カヲル・アシタで電波ソングをやらせていただきました。\n香りで人を惑わす悪魔の姉妹という設定からイタズラ好きな一面を大事にしました。\n私はカヲルパート担当でしたが、キャラクター紹介を見ていてアシタよりかなり口が悪いかんじだったので二人の区別化にあたって感情の分かりやすさを重視して歌いました。\n凜々さんのほわほわ～としたかわいいアシタも必聴です♪\n曲も歌詞もすごくキュートなものとなっているので何度も遊んでいただけたら嬉しいです！\n(杠葉えりか)\nカヲアシらしい弾けたさわわさんの疾走感あふれる楽曲をえりかさんと一緒に楽しく歌わせていただきました！\n作詞担当のQURELESSさんが描く、可愛くて憎めないいたずらっ子を表現するのがとっても楽しかったです。\nみずりさんのジャケットもセリフに合っててめちゃくちゃキュートな仕上がりになってます。\n私たちのPerfume、たくさん楽しんでください～！\n(凜々)\n疾走の人改め『さわわ』と申します!この度は採用誠に有難う御座いました(´▽｀*)\nキャラコンは二度目、合作＆vocal楽曲は初となる採用となります！\n昨年、新たな環境で作曲再開し『久々に公募送りたい！』と意気込んでいたところ\nえりかさんに声を掛けて頂きました！\n今回は大好きなキャラクター達の一組！カヲル＆アシタ！\n前回のきらきらタイム☆同様、ハイテンション＋更にスピーディーでマジカルにに仕上げました(笑)\nメインシンセやvocal主旋律など自由に作らせて頂いたので自分らしさや新たな一面も見せられる作品になったと思いますので是非楽しんでプレイして頂けたら幸いです。\n≧〔ﾟ∇ﾟ 〕≦ ←さわわガニ\n(さわわ)\nさわわさんからすっごく可愛い曲が届いて、頭の中をマジカルにして仕上げる決心をしました(*'ω'*)\n昔からこういうキャラソンのような歌詞を書いてみたかったので、この機会に実現して収録まで決まるなんて夢のようです(*^^)v\n「恋愛♡悪戯！？まじかる☆ぱふゅ～む！！」は「恋愛→らぶらぶ」「悪戯→とりっく」と読みます(｀・ω・´)\n杠葉えりかさんと凜々さんのイタズラ大好きなカヲル・アシタの演技、さわわさんのキューティでエモーショナルなトラック、\nそして歌詞に散りばめられた諸々に気づいてニヤニヤしてください！\n(/・ω・)/うー、いぇー！！\n(QURELESS)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：みずり\nこの度は採用していただきありがとうございます！！！\n初の採用がまさかジャケット採用になるとは夢にもおもっていませんでした、正直実感がわきません・・・！\n最初知ったときは思わず叫びました。自分の絵が筐体でみられる日がとてもとても楽しみです。。。\n今回担当させていただいた楽曲は「香水、恋の魔法、悪戯」がテーマの小悪魔キュートなカヲル＆アシタらしい楽曲だったので、ピンクの香水モチーフの杖や衣装にしました。背景も液体っぽく表現し、見ている側にまで魔法をかけちゃう!、そんな空間をイメージして制作しました。\nとっても可愛いカヲル＆アシタワールドを楽曲と共にジャケットもお楽しみ頂ければ幸いです。\nどうぞよろしくお願い致します！\n(意地悪な譜面になってたりして、大丈夫かなクリアできるかな…)",
      },
      {
        artist: "Aoi feat. Gra+yanshu(第3回目配信楽曲）",
        title: "運命超過乃巡合",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/3_03.mp3",
        comment:
          "ボルテプレイヤーの皆々様、こんにちは！Aoiと申します。\nこの度はSOUND VOLTEX EXCEED GEAR稼働おめでとうございます！！めちゃくちゃ遊ぶぞ！\n個人的な話で恐縮ですが、僕は今までのボルテシリーズの中で「GRAVITY WARS」が特に印象深く残っています。初採用を頂いたというのも勿論ありますが、中2心をくすぐるバトルチックなデザインと各キャラクターが深掘りされるストーリーの虜になっていたのを思い出します。この度の公募でどんな感じの曲を作ろうか悩んで、ふいにEXCEED GEARのデザインを見たとき、ふとその時の気持ちが蘇ってきたのです！\n今回はそんなブレイブ&スピリットで楽曲を制作してみました。採用して頂きありがとうございます。\n紅刃さんといえばやっぱりズンドコなリズムをやりたいなということで、素晴らしき先人の方々が築いたシュランツ風の激しいビートに僕なりのアプローチをたくさん盛り込んで、音ゲーとして楽しくなりそうな、やりごたえのありそうな、紅刃さん感もバトル感もサイバー感も感じられるような…という大量の「やりたい」を詰めた欲張りな楽曲になっております！\n美しい歌声と迫力あるジャケットを提供してくださったGraphiteさん、葛藤を描いたカッコいい歌詞を書いてくださったやんすさん、感謝…！！！！！\nカッコよくて頼りになるけど普通の女の子、そんな紅刃さんのテーマソングとしてたくさんプレイしていただけると嬉しいです！\n(Aoi)\n歌唱をお手伝いさせていただきました、Graphite（Gra）です。\nまさか自分の歌声がSOUND VOLTEXに入るなんて…と震えています。\n紅刃さんを想いながら歌いました。素敵な曲を歌わせていただきありがとうございます…！\nとてもカッコいい曲なので楽しんでプレイしていただけると嬉しいです！\n運命を超え、未来を切り開いていけ～！\n(Graphite)\n歌詞を書いたやんす(Yanshu)です。\n自分の言葉を綺麗な声で歌っていただいて、そして素敵な曲に乗せていただいて大変恐縮です。\n譜面、曲、歌声、すべて楽しんでください！\n(やんす)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Graphite\nジャケットも担当させていただきましたGraphiteと申します。\n採用ありがとうございます！大好きな紅刃さんのジャケットを担当できたことをとても嬉しく思います。や、やばい…\n難易度ごとに差分を作っているのでいっぱい見てください！",
      },
      {
        artist: "Rigel Theatre(第2回目配信楽曲）",
        title: "Le Merle Noir",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_01.mp3",
        comment:
          'はれれ～!?\n初めましてRigel Theatreです。\nこの度はピリカちゃんのテーマ曲で採用頂き、誠にありがとうございます！\n"Le Merle Noir(クロウタドリ)"という旅鳥、ピリカちゃん達の可愛らしい旅...その2つの旋律が展開し、後半は旅鳥を追う様に１つに合流していくのです。\nピリカちゃんのちょっと土着風な喋り方、異世界風の装い、超ど級の方向音痴という性格から\n「民族音楽がきっと似合う子だぺ?」と強烈なシンパシーを感じながら本作を書いたっちゃ。\nんだー。\n(Rigel Theatre)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：やびさら\n―あの旅鳥さついでけばいんだべな！？\nこの度は採用頂きありがとうございます！\nRigel Theatreさんのファンであった自分が、まさかこうしてご一緒しイメージを手掛け\n同時に収録されるとは誰が予想できたか…光栄の極みです！\nファンタジーな世界観を意識して、生き生きとしたピリカちゃんたちを描かせていただきました。\n楽曲と合わせてピリカちゃんとストーリーを感じていただければ幸いです！',
      },
      {
        artist: "めと（Metomate）(第2回目配信楽曲）",
        title: "Vanishing Eidos",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_02.mp3",
        comment:
          "めとです。\nこの度は採用いただき誠にありがとうございました！！\nケムリちゃんには思い入れがあるので非常に非常に\n嬉しいです。一生の思い出です。\n私のなかの解釈をこめにこめました。\n宜しくお願いします！\n(めと)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：めと（Metomate）\n今回はキャラクターテーマということで\nイラストにも挑戦してみました。\nこめた想いと解釈のひとつです。\nありがとうございます！！",
      },
      {
        artist: "RoughSketch vs MAD CHILD(第2回目配信楽曲）",
        title: "Metagame Matador",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_03.mp3",
        comment:
          "おはようございます！RoughSketchです！！\nWarriors Aboot以来、久々にMAD CHILDさんとのコラボです！\n今回はMiss.DD ＆ BOFをイメージして制作してみました！\nRoughSketchとMAD CHILDが初めてSDVXで出会ったキャラ！\n当時は公募曲作者とエフェクターという立ち位置でしたが\nある意味、原点回帰って感じです！\nそこに未早さんのイラストがバキッとハマって最高になりました！\n曲は最近二人がハマっている感じをうまくぶつけられたと思います！\n是非是非たくさんプレーしてくださいね！\n(RoughSketch)\nこんばんは、MAD CHILDです。ご無沙汰（？）してます。\nジャンケンって勝率33.333…%の運ゲーだと思いますか？\n相手がよくグーを出す奴だと知っていたらパーで勝てる確率が高くなると思いませんか？\nゲーム外に落ちている情報に基づいて戦略を組み立てる情報戦、それがいわゆるメタゲームです。\n最近では何かしらに対策することを「メタる」なんて言ったりしますよね。\nこれは卑怯でも何でもなく、競技性のあるシーンで勝つことにおいては非常に重要な要素です。\nまあ、わざわざ説明しなくても毎年KACを見てる皆さんには理解してもらえると思います。\n今作からeスポーツにも焦点を当てたボルテ。新モードや新判定などで今まで以上に\n綿密な戦略が必要になることでしょう。\nこのゲームが音楽ゲームである以上、アーティストに注目が集まってしまいがちですが\nこれからはプレーヤーももっと注目される時代になるはず！という想いも込めたこの曲が\nそんなメタゲームの一角になってくれれば幸いです。\n相方のRoughSketch君とは最早一蓮托生…は言い過ぎだとしても、今に至るまで担当エフェクター率は9年間9割ほどを維持し続けてるコンビです。すごい。いいのか。\n前回に懲りずに「そろそろまた合作しましょう」と言ってくれたので今回も逃がしませんでした…！\nどうも、社交辞令絶対に許さないマンと申します！\nさらにMiss.DD ＆ BOFと絵柄がマッチしまくるだろうと未早さんも巻き込みました。\nいやいや、本当にお二人には感謝です。\nそんなeスポーティーな「SOUND VOLTEX EXCEED GEAR」ですが、やっぱりボルテはボルテ。\nスコアの競い合いだけがこのゲームの楽しみ方ではないはずです。\n自分にとって最高のボルテを。\nサウンドクリエイター、イラストレーター、プレーヤー、ボルテに関わる全ての人にリスペクトを。\n対戦よろしくお願いします！\n(MAD CHILD)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：未早\nこんにちは、未早です！\nRoughSketch氏とMAD CHILD氏コンビによる原点回帰的な最強サウンドのジャケットを担当させていただきました！\n｢DDお姉さんに踏まれたい…！｣多分そう願っているぼんきちくんとそこのアナタの夢を叶えられたなら幸いです！\nEXCEED GEARに進化したボルテ！今後の展開も楽しみですね！",
      },
      {
        artist: "seatrus feat.杠葉えりか(第2回目配信楽曲）",
        title: "木洩れ日に咲く",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_04.mp3",
        comment:
          "初めましての方は初めまして、そうでもない方も初めまして、作編曲・作詞を担当しましたseatrusと申します。シートラスです。\nEXCEED GEARって、なにやらサイバ～な感じのテーマということもあり、和楽器をふんだんに使った曲にプラスでエレクトロなエッセンスを散りばめてみました。\n春芽吹く季節、出会いと別れの季節。始まりがあれば終わりがあり、廻っていく……そんな曲です。\n僕がボルテで最も好きなキャラである接ちゃんは人より永く生きているため、出会いと別れだとか、始まりと終わりだとか、そういう諸行無常をいろいろな場面で感じているのではないか…と思いを馳せて作詞をしていた覚えがあります。\n出会いといえば、思い返すと僕とボルテとの出会いはもうマジで何年も前です。初めてプレーしたときの興奮は今でも忘れてません、本当です。マジのガチです。\n本格的に作曲に取り組み始めてからというもの、何度も何度もボルテのコンテストに挑戦しては涙を飲んでいたぶん、こうして諦めずに挑戦を続けて、そんな憧れの舞台に自分が立っていることが未だに信じられません。しかもキャラクターテーマコンテストも兼ねている今コンテストで、一番好きなキャラクターをテーマにした楽曲でですよ、ちょっと幸せすぎませんか。多分この文章が世に出ている瞬間も実感無いと思います。多分。\nちなみに、七つの鍵盤とお皿のゲームをやっている最中、メールボックスに入っていた仮採用通知を見てゲーセンで大泣きしてしまったのはここだけの話です。本当にここだけの話です。\nさて、しがないボルテオタクの駄文にお付き合いいただいた皆様、誠にありがとうございます。\n最後に改めまして、みなさまの鮮やかなプレーでこの曲を咲かせてやって下さい。\n(seatrus)\nボーカルを担当させていただきました杠葉えりかです！\n今回の楽曲は曲自体もすごく綺麗で優しいのですが、個人的に歌詞がすごく見どころだと思っています。\n歌詞に込められた情景や時間の流れ、また接自身が長命ゆえに感じる万物の儚さなど様々な要素が込められていて読めば読むほど美しさを感じられるものとなっています。\n歌詞の情景をしっかり伝えられるよう、曲のメリハリをしっかり意識しながら大切に歌わせていただきました。\nseatrusさんの接への愛を歌の面からも少しでも感じていただけたら嬉しいです。\nそしてプレーヤーの方々からも愛される1曲となれば幸いです。\n(杠葉えりか)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：LESYEF\nはじめまして、LESYEFといいます。この度はジャケットで採用頂きありがとうございます。初採用やったーー！何はともあれ、接ちゃんを可愛く描けて大変満足です。\n暖かい風を感じられるような絵になれたと思います。筐体でモリモリ遊べるのが楽しみです！何卒宜しくお願いします！",
      },
      {
        artist: "あるふぁ＋凜々(第2回目配信楽曲）",
        title: "恋獄対刃",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_05.mp3",
        comment:
          '採用頂きありがとうございます！あるふぁと申します！\n今回はキャラコンという事で恋刃の"ブラッディ"な感じを全面に押し出すべく、\n和風＋トラップ＋ガバ、の要素を詰め込んだ凶悪曲を目指しました。\nQURELESSさんの突き刺さるようなリリックを凜々さんにかっこよく歌い上げて頂き、\n緑風マルトさんのジャケットでビシッと決めていただきました！何卒よろしくお願いします！！\n(あるふぁ)\nQURELESSです。\n作詞という形でボルテに再び参加できること、嬉しく思います！\n当初の凛々さんから頂いた指定が「和風」「美女」「刀」のようなイメージで、ということでしたので\n恋刃の、紅刃お姉様に対する異常な程の愛情・独占欲を込め\n更にラップに馴染みのない方でも聞いていて気持ちいい押韻になるよう、心掛けてリリックを仕上げました。\n是非楽しんでプレーしてください！\n(QURELESS)\n今回は『刀』をテーマとした、最強にかっこいいラップをさせていただきました。\nラップを歌うのは初めてでしたが、あるふぁさんの曲、QURELESSさんの歌詞、緑風マルトさんの絵の鋭いかっこよさに合わせて、\n最後まで『恋刃らしく』頑張りました。たくさんプレーしてもらえたら幸せです！\n(凜々)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：緑風マルト\nあこんちゃ～ごんちゃ～。「恋獄対刃」ジャケットイラスト担当の緑風(みかぜ)マルトです。\nジャケットイラストでの採用はお初なので、今回採用をいただくことができ光栄です。\nIIIの重力戦争にて一度敗北を経験した恋刃が、自身を強くするために紅刃に剣を教えてもらったり、剣を握れば戦闘狂に変貌するところは紅刃と変わらなかったり、その剣で紅刃や奈奈に近づく輩を斬り散らかしたり...そういった恋刃をイメージしつつ、凜々さんの歌うキレッキレなラップ、QURELESSさんの書く恋刃のシスコン溢れまくりな歌詞、そしてあるふぁさんの作る和風Trapかつボルテらしい曲調に合わせた、かっこかわいい全開の恋刃ちゃんを描かせて頂きました。ミヤコちゃん作、666紅刃ストラップがめんこいポイントです。難易度毎にちょっぴり変化も加えていますので、楽曲とともに楽しんでいただけたら幸いです。\nそういえば、ボルテでラップ曲といえばドギャドギャのつまみ譜面になるイメージが強いのですが、この曲はどこまでつまちゃ～まみちゃ～な譜面になるんでしょうか...楽しみすぎてお昼しか眠れません(安心の昼夜逆転生活)',
      },
      {
        artist: "fnylsp(第2回目配信楽曲）",
        title: "SuperMiracleEnsemble",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_06.mp3",
        comment:
          'はじめまして、fnylsp(ふにゃふにゃロースペック)です。 この度は採用いただき誠にありがとうございます…！\nまさか、自分の曲がゲームセンターでできる日が来るなんて夢にも思っていなかったので、ただただ感無量です…\n本楽曲は、雛&蒼&桃の3匹が元気よくハチャメチャに音を奏でている様子をイメージしながら制作しました。\nまた、曲の展開やリズム、メロディーなどは音ゲーにしたときの "楽しさ" をかなり重視して作りましたので、\nプレーヤーの皆さんにも満足していただける仕上がりになったのではないかと思います。\n色々な思いを目一杯詰め込んだ渾身の一作を何卒よろしくお願いいたします…！\n(fnylsp)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：球根\nこの度は、採用ありがとうございます。全人類ふにゃろーちゃんの曲をやりましょう。',
      },
      {
        artist: "テヅカ(第2回目配信楽曲）",
        title: "響く静寂",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/2_07.mp3",
        comment:
          "テヅカと申します！\nまずはSOUND VOLTEX EXCEED GEAR稼働おめでとうございます。\nそして、採用頂きありがとうございます。\n「響く静寂」という曲です。\n青雨 冷音君の楽曲を描かせて頂きました。\n歌詞では、冷音君が雨が好きな理由を真面目な観点から描いています。\nそして楽曲方面では、ドラムを雨音に例えて連打しています。\nイントロの豪雨のようなスネア、Ｂメロ前半の静かな長雨のようなハイハット。\n激しい動と静に注目してみてください。\n楽曲、歌詞共に頑張ったなと思う作品なので\ncoaさんに描いて頂いた美麗なイラストを見ながら\nたくさんプレーしてくださると嬉しいです。\n(テヅカ)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：coa\nこの度は採用頂き、ありがとうございます。\nテヅカさんの楽曲が本当に素晴らしいので、\nぜひたくさんの人に遊んでいただけたら幸いです。",
      },
      {
        artist: "kuro(第1回目配信楽曲）",
        title: "Innocent Azure",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_01.mp3",
        comment:
          "全ボルテプレーヤーの皆さん、初めまして！kuroと申します。\nこの度は採用して頂きありがとうございます！\nメールボックスに仮採用通知が来たときは興奮のあまり過呼吸になってました。\n「SOUND VOLTEXで自分の曲をプレーしたい」と思ったのがDTMとボルテを始めたきっかけなので、とても嬉しい限りです。\nそういえば、この前ようやく剛力羅に合格しました。アバレドラゴンスカイまでの道は遠いなぁ。\nキャラクターテーマ楽曲コンテストということで、私が深く愛してやまないキャラクターであるオンディーヌさんのテーマ曲を作らせていただきました。\n彼女の儚く、美しい雰囲気をこのSOUND VOLTEXという音楽ゲームに合うよう様々な試行錯誤をし、完成したのがこの「Innocent Azure」です。\nたくさんプレーしてくれると嬉しいです！！\nオンディーヌさん......美しいよ........。\n(kuro)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：Ag₂O\nお初にお目にかかります、Ag₂Oと申します。化学式のアレです。\nこの度は楽曲と連れ立っての採用ありがとうございます！\nボルテ６作目を記念したこのキャラクターコンテストを機に、楽曲製作者のkuroさんと共にFLOORデビューが出来て、大変嬉しく思います。やったね。\nオンディーヌちゃんの『水』というイメージを大切にしつつ描かせてもらったので、楽曲共々世界観に浸ってもらえると幸いです。",
      },
      {
        artist: "しーけー(第1回目配信楽曲）",
        title: "Souhait bleu",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_02.mp3",
        comment:
          "こんにちは。しーけーです。\nキャラクターテーマコンテストという事でいつも通り奈奈ちゃんに3拍子の曲を…\nと見せかけて今回は3拍子ではないです。\nなんと今回はイントロとアウトロが7拍子！奈奈ちゃんだけに奈奈拍子つってな！ガハハ\n真面目な話をすると、とても自信作なので私の新たな一面改め奈奈ちゃんの新たな一面に繋がっていったら嬉しいなと思います。\n和菓子さんに描いていただいた素敵なジャケットと合わせて是非とも楽しんでください！\n(しーけー)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：和菓子\nこの度は採用いただきありがとうございます。ジャケットイラストでの採用は初めてでとても嬉しく思います。\n今回はしーけーさんの爽やかで疾走感ある楽曲のイメージに合わせて、風を感じるような雰囲気の作品に仕上げました。\n是非たくさん遊んでいただければと思います。ありがとうございました！",
      },
      {
        artist: "Ponchi♪ feat.はぁち(第1回目配信楽曲）",
        title: "ラヴ♡チャンス!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_03.mp3",
        comment:
          "初めまして！Ponchi♪と申します。\n「MisoilePunch♪」の編曲担当として様々な楽曲を収録させていただいておりましたが、個人の名義としては初の採用となります。本当にありがとうございます！\n学園でもネットでもアイドル的な存在なラヴちゃんだけど本当はとってもめんどくさがり屋！ラヴちゃんの本音と、アイドル的存在であることに対しての優越感、リスナーであるオタクたちとの楽しい配信の時間を詰め込んだハチャメチャアイドルパンクポップ的な楽曲です！是非皆さんも、愛言葉は「ラヴ♡チャンス!!」してください！\n(Ponchi♪)\nボーカルを担当させていただきました、はぁちともうします！\nなんと、ラヴちゃんジャケ曲二曲目なんです…！うー嬉しい！！\nみんながメロメロなラヴちゃんの裏側（苦悩？）をちらり?\nかわいく、けだるく、あざとｷｬﾋﾟｷｬﾋﾟで歌いました！\n楽しんで（コールして）プレーしていただけたら幸せです♪\n(はぁち)\n\\20,000\nラヴちゃん…俺の言葉…見てる…かな…??今日もお疲れ様！\n配信終わったと思いきや歌枠…!! もうホントにドキドキして、思わず連投で掛け声入れちゃった…♡♡\n全力でコールしたけど、喜んでくれたかなあ～??\nこれからも全力でアイドルなラヴちゃんに一途、好きだよ！！推し変なんてしない！！\nまた明日も ラヴ♡チャンスして♡\n(蝉ファイナル坪井)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：りゅうら\nジャケット担当させて頂きました、りゅうらです。\nMisoilePunch♪名義楽曲でお馴染みのPonchi♪君の初個人名義楽曲という事で、ものすごくワクワクしながら作画させて頂きました。\nラヴちゃんのまさかの表裏！ボーカルのはぁちさんの声のギャップが楽しい楽曲なので、ジャケットイラストも張り切って差分で二種類作らせてもらいました。是非お楽しみいただければ幸いです。",
      },
      {
        artist: "Aoi feat. Kuroa*(第1回目配信楽曲）",
        title: "月下の舞兎祭",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_04.mp3",
        comment:
          "ボルテプレーヤーの皆々様、こんにちは！Aoiと申します。\nこの度はSOUND VOLTEX EXCEED GEAR稼働おめでとうございます！！早く遊びたい！\nいわゆる「制作記念コンテスト」にはIV、VIVID WAVEと挑戦してきたのですが力及ばず…。ようやくボルテのバージョンアップの門出をお祝いできて、本当に嬉しいです！採用頂きありがとうございます。\nこの度テーマとして挙げさせて頂いたピリカちゃんは、家族を求めて旅をしているといいます。\n満月の夜の心躍る旅、休息では火を囲んで月に照らされ宴、兎ピョンピョン…なるほど！\nそんな感じで発想を飛ばし、ケルティックなアプローチを加えて飛び跳ねるようなノリの明るいダンスミュージックに仕上げました。\n普段の作風とは少し違うため製作が難航した部分もありますが、Kuroa*さんの可愛らしい歌、茜りうさんのイメージバッチシなジャケットイラストも合わさって自信を持ってテーマ曲として推せる1曲になったのではないかなと思います！\nデバイスを握ったあなたも舞兎祭の一員！ノリノリでプレイしてください！\n(Aoi)\nこんにちは！\nそして、初めましての方は初めまして。\n採用お久しぶりとなります、Kuroa*と申します！\nどうしてもピリカちゃんのキャラテーマに挑戦したく\nご縁のあったAoiさん、茜りうさんにお声かけした次第です。\nAoiさんのカラーが出たセンス溢れる楽曲に、茜りうさんのキラキラで可憐なジャケットで\nとっても最高な1曲になったと思います！！\n今回Kuroa*は、歌唱に加え作詞も行いました。\nピリカちゃんの飛び跳ねるような兎のかわいらしさだけでなく\n召喚士としての荘厳さ、力強さも表現できていたらいいなと思います。\nタイトルは「月下の舞兎祭」ですが、兎という文字が「と」とも「う」とも読むことから\n「ぶとうさい」と当て字で読みます。\n楽しく遊んでもらえる楽曲になったら嬉しいです！\n(Kuroa*)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：茜りう\nジャケットイラストを担当させていただきました、茜りうと申します。\nAoiさんから民族風の爽やかな曲を、Kuroa*さんからイメージをいただきまして\n思い浮かんだのがぴょんと跳ねるツノ兎たちと楽しそうに舞うピリカちゃんの姿でした。\nタイトルは、兎のノが月に見えたのでうさぎにちょこんと乗ってもらっています。\n（兎＋うさぎマークはKuroa*さんからいただいたアイデアなんですよー！）\n制作中はお二人の熱意とこだわりにとても刺激を受けました。\nAoiさんとKuroa*さんと共に作品を作ることができて\n感謝でいっぱいです！\nぜひぜひたくさんプレイしてください！",
      },
      {
        artist: "つきみぐー、×如月結愛(第1回目配信楽曲）",
        title: "Now loading...",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_05.mp3",
        comment:
          "採用いただきましてありがとうございます！\n作詞歌唱担当つきみぐー、作編曲の如月結愛共に、初めての採用となるので、本当に嬉しい限りです！\n魅力的なキャラはたくさんいたのですが、二人とも「ゲーム好きの少年」ユーシャにピンとくるものがあったのでしょう、\n異論なしでキャラ決定後、方向性の話もとんとん拍子で進み、とても楽しく制作することが出来ました。\nそんなユーシャの冒険の物語は、ぜひ皆さんでプレーして確かめください。\n飛び出そう 次のステージへ！\n(つきみぐー、×如月結愛)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：sally\nこの度はジャケットも採用してくださりありがとうございます。\n如月結愛さんよりお誘いいただきジャケットを描かせていただきました。誘ってもらえて嬉しかったです！\n初めての公募ジャケットだったのでうまく描けるかなとドキドキでしたが、ピコピコ楽しいゲームサウンドを聞いていたらとても楽しく描けました。\nつきみぐー、さんの爽やかな歌声にも合った雰囲気に仕上がったのでは、と思います。",
      },
      {
        artist: "pan+テヅカ feat.桃雛なの(第1回目配信楽曲）",
        title: "Whip✩Drip",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_06.mp3",
        comment:
          "panと申します!\nこの度は採用頂き、ありがとうございます!\n自分は作編曲と作詞を担当しました。「地球防衛乙女パンナコッター」という曲で火星からやってきたネムルンが、本楽曲ではパンナコッターと数年ぶりに再会するというシチュエーションで歌詞を書きました。\n私個人のインスト曲は過去に3回採用いただいたことがありますが、今回は合作に協力してくださった方々のお陰で、キャラの特徴を最大限に引き出した作品を仕上げることが出来ました。\nとても可愛く楽しく仕上がってますので、普段とは一味違ったpanの楽曲を是非お楽しみください!\n(pan)\nテヅカと申します！\nこの度はご採用頂き、ありがとうございます！\n地球防衛乙女panナコッターことpan君となのちゃんと共作させて頂きました、激烈に可愛い楽曲[Whip✩Drip]です。\n自分は主にリズム隊方面で盤石サポートさせて頂きました。（？）\n楽曲に激しく可愛く色を添えられていたら良いなと思います！\nシャッフルしたリズムなので、ハネハネにノリノリにプレーしてみてね～～～！\n(テヅカ)\nはじめまして！Vtuberの桃雛なのと申します！\n祝！初採用！嬉しいですやった～～！\nSOUND VOLTEXは昔から遊んでいたので長年の夢でした...！\npanくんテヅカさんの曲がとっても可愛かったので、とっても可愛く歌いました！\nみんな～！ゲームセンターで会おうね！\n(桃雛なの)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：むらたむうた\n首の弱いキリンのむらたむうたです！\nこの度は収録ありがとうございます！！\nめちゃくちゃキュートでメロメロな楽曲の雰囲気を\n一層引き立てるものになっていたらと思います！\n甘くてかわいいトラップに翻弄されず、クリア目指してくださいね！",
      },
      {
        artist: "MALVA.(第1回目配信楽曲）",
        title: "Verstärkt Killer",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_07.mp3",
        comment:
          "初めて採用頂きました、MALVA.と申します。\n主に日常系民族音楽やメルヘンゴシックの楽曲を作っています。かわいいイラストがすきです。\n攻撃的なサウンドと、キラキラした楽器で小悪魔っぽさを演出したメルヘンゴシックの楽曲です。\n普段より制作している作風がカヲル&アシタのイメージとピッタリで、自分が好きな要素もたくさん詰め込みました。\nこの楽曲は日々から私の曲を聴いて下さっている方、支えて下さった方への御礼を込めた曲です。\n私の夢がまた1つ叶うと同時に、誰かの夢のきっかけとなればうれしいです。\n(MALVA.)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：kyu3\nVerstärkt Killerのジャケットイラストを担当させていただきました。kyu3と申します。\n2人の衣装を考えてる時がめちゃくちゃ楽しかったです。のびのび描かせていただきました。\n楽曲、イラストともに楽しんでいただけたら幸いです！",
      },
      {
        artist: "Enterskip(第1回目配信楽曲）",
        title: "Fun walk!!",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/27/result/sound/1_08.mp3",
        comment:
          "初めましてこんにちは！！！Enterskipです！！！「エンタースキップ」って読みます！！採用ありがとうございます！！！！！！！！！！！！！！！！！！！！！！\n今回キャラクターテーマ曲コンテストにて「ニア & ノア」をテーマにした曲を作曲しました！\nこの二人はやっぱり僕にとっては明るいイメージしかなかったので、「楽しい散歩」を想像しながら\nタイトルも「Fun walk!!」という感じで、曲名はもう作り始める前からこれにしようと思っていました！\nちなみに曲名の「!!」は、「ニア & ノア」を表しています。\n自分が作曲したいと思ったきっかけがまさにBEMANIシリーズをプレーして\n収録されている曲にドハマりしてしまい、BPMが速い音楽を好むきっかけにもなりました。\nいっぱい遊んであげてくれるとうれしいです！！！そして気にいってくれたらもっとうれしいです！！！！！！\n(Enterskip)\n※こちらの作品はジャケットも一緒に採用されました\nイラストレーター名：もーどまん\nこの度はEnterskipさんの素敵な楽曲のジャケットを描かせて頂きました。元気いっぱいなニアノアちゃんを宜しくお願いします。",
      },
    ],
  },
  {
    id: "original28",
    name: "The 10th KACオリジナル楽曲コンテスト",
    banner: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/image/floor_top/floor_banner/original_28.png",
    sounds: [
      {
        artist: "MisoilePunch♪(第2回目配信楽曲）",
        title: "MixxioN",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_01.mp3",
        comment: "『MixxioN:ターゲットを撃破せよ───。』\n(MisoilePunch♪)",
      },
      {
        artist: "隣の庭は青い(庭師+Aoi)(第2回目配信楽曲）",
        title: "Xb10r",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_02.mp3",
        comment:
          "こんにちは庭の方です。今回はあえて王道の200BPMでの挑戦です。\n太い音作りや、Aメロやドロップのパワー溢れる部分は青い方に任せて、自分はイントロ、サビ～アウトロの作曲、サビ前の編曲をしています。\nとにかく気をつけていたことはありきたりにならないことです。200BPMの所謂音ゲーコアは世界に無限にあります。我々でしか出来ないようなこととは何かを考え、取り入れました。\n意外にもスルリと完成できたので、青い方との息が合ってたのかなと思います。\n隣の庭は青いという名前でやらせてもらってますが、本当に隣の庭は青いなあと思ってたのは自分です。他の人の曲が青く見えて仕方ないです。だからこそ負けずに色んなことを学んで上達出来たのかなとも思います。これからも頑張りたいです。\n最後に、テンブラーの天ぷらというギャグを思い付いたのですが、コメントで巫山戯るとAoiに怒られてしまうので言わないようにします。\n(庭師)\nボルテプレーヤーの皆々様、こんにちは！隣の庭の青い方担当、Aoiと申します。\nまずはKACの名を冠するコンテストに採用頂きましたこと、そしてKACを開催してくださったこと、心より感謝致します。\n記念すべき10回目のKACは、今までで最も過酷な状況の下開催されることと思います。それでも並み居るプレーヤーの方々は日々僕達の想像を絶する研鑽を重ね、KACの舞台を目指してきたはずです。\nこんなときだからこそ例年以上に、オウチの画面越しにも伝わるほど会場を沸かして、揺らして欲しい…そんな想いを込めて作った、ただひたすら直球の200BPMボルテナイズド・コアがこの曲「Xb10r」です。\n感動は、伝播するものだと思います。筐体前で戦うプレーヤーの方々の闘志、素晴らしい楽曲の数々が僕達の心を揺さぶったように、僕達の起こした小さな揺れもプレーヤーの皆様に伝わればいいなと思っております。\nギアフルスロットルでお相手しましょう！全時空のボルテ戦士の皆様、お手合わせ願います。\n(Aoi)",
      },
      {
        artist: "打打だいず vs. siromaru(第2回目配信楽曲）",
        title: "十の試煉",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_03.mp3",
        comment:
          "ボルテ世界の皆さん初めまして、謎のクリエイターの打打だいずと申します。\nピコピコで明るくかわいい曲をよく作っています。\n以後お見知りおきのほどをお願いします。\nこの楽曲は十回ほど試練という名の展開が襲い掛かります。\n重く激しくともどこか希望もある、かと思ったら絶望でもある、そんな曲です。\n希望に進むか絶望に進むかはプレーヤーのあなた次第。よろしくお願いします。\n(｀･ω･)b ｸﾞｯ\n(打打だいず)\nボルテ世界の皆さんお久しぶりです、謎のクリエイターのsiromaruと申します。\nThe 9th KACで666に感銘を受けてからすぐに、次の10thには『10thにかけて10回ほど展開があり10個の試煉をプレーヤーに投げかける「十の試煉」ってタイトルの曲を作りたいな～』なんてふわっと思ってました。\nとはいえ自分の力だけではタイトル負けしない楽曲を作るのは難しかった所、打打だいずさんのパワーと合わさって、タイトル負けどころか本当にタイトルごとプレーヤーを煉獄の業火で焼き尽くしそうな楽曲に仕上がりました。\nKAC決勝まで勝ち上がったプレーヤーにも満足していただけるエフェクトになりそうな、壮大な楽曲になったと思っています。\n本楽曲の試煉を乗り越えられたプレーヤーに、勝利の女神が微笑む…そんなポジションになったら嬉しいです。\n楽しんでいただければ幸いです！\n(siromaru)",
      },
      {
        artist: "かめりあ・超機裝旋楽隊(第2回目配信楽曲）",
        title: "Rhapsody ⚙f Triumph",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_04.mp3",
        comment:
          'こんにちは！かめりあです。\nご採用された作曲者の皆様、そしてKACに勝ち上がったプレーヤーの皆様、おめでとうございます！\nさて、今回も楽曲を応募させて頂き、またご採用いただきました。ありがとうございます！\n「Rhapsody ⚙f Triumph」は日本語で「凱旋/勝利のラプソディ」というように訳されます。\n真ん中に"ギア"が入ってます。そう、ギアです。\n自分、普段は放っておくと破壊的で暗くて禍々しい曲を作ってしまいがち（？）なのですが、今回のKACは色々と考えた末少し趣向を変え、明るく、輝かしく、幸せでハッピーで、そして力強く進んでいくような前向きな楽曲を作ってみよう、と思って作ったのがこの楽曲でした。\n…というのも御存知の通りここ数年ほどは中々集まって盛り上がることもできず、ついにオンラインでの開催となったKACですが、\nせめて勝ち上がったプレーヤーや全国のボルテを愛するゲーマーの皆さんがプレーする楽曲が明るく幸せであってほしい、という気持ちで作ったのがこの曲になります。\nそして「勝ち上がった」プレーヤーの凱旋がこの曲から聴こえるような、そんな曲であってくれると本当に嬉しいのですが！\nそれからラプソディという「楽式」、つまりざっくばらんに言えば"音楽ジャンル"は、民族的で叙述的な内容を表現した楽曲、ということになっています。\nつまり我々が我々の間に語り継いで、引き継いできたもの、ということです。さっくばらんに言えば。\n速く、メロディアスで、そして壮大で強力な、音楽ゲームの中でも最も鋭く激しく、ある意味で過激な楽曲…という『ボルテの伝統』、つまりは『我々が語り継いできたもの』を表現したつもりでしたが、これがプレーヤーの皆さんにも伝わっていると嬉しいです！\nそんな気持ちを込めてこの曲名を付けましたが、なんかもうちょっと欲しいなと思った結果、ギアを入れました。せっかくなので。\nそして更にせっかくなので、アーティスト名も少し豪華に「かめりあ・超機裝旋楽隊」としてみました。EXCEEDED GEAR ORCHESTRAの皆さん（私一名です…）と一緒に曲を作ってみましたよ！\nKACコンテストに応募される楽曲というのは、もちろん個人的にも非常に制作が大変だったり、またどれも応募作品はとてもクオリティが高いものばかりですよね。\nそんな中で作品を作っていると、毎度毎度「もしかして次回こそ筆が動かなくなるんじゃないか…」とひっそり不安になったりするのですが、今回はとても楽しげで快速な楽曲が出来上がり、そんな不安もこう、トライアンフしてくれるかのような楽曲で、なんか、すげー、よかったです。凱旋ですね。\n閑話休題。\nそんな訳で、この曲はプレーヤーの皆さんの凱旋の楽曲であり、そしてボルテの伝統を表した曲になればいいな…と思いながら作った曲でした。本当ですよ。\nこの楽曲で皆さんに勝利のラプソディが届きますように！\nかめりあでした。\n(かめりあ)',
      },
      {
        artist: "影虎。(第2回目配信楽曲）",
        title: "火狐之舞",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_05.mp3",
        comment:
          "影虎。です。この度は採用ありがとうございます！\nKACということで、今回は思い切っていつも通りのサウンドから大分外して\n「和風」「ボス曲」「SpeedCore」の3つを軸にして作りました。\n初めての試みが多く、制作中に非常に悩む点が多かったのですが\n結果的にボルテらしい曲に上手くまとまったと思っています。\n曲調的に恐らくかなりの高難易度になると思いますが、是非242BPMという速さに追いつきながら\nTRACK COMPLETEして貰えたらと思います！（僕もハイスコア目指して頑張ります……。）\nありがとうございました！\n(影虎。)",
      },
      {
        artist: "めと（Metomate）(第2回目配信楽曲）",
        title: "蝕",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_06.mp3",
        comment:
          "こんにちは、めとです。\nこの度は採用いただきまして本当に本当にありがとうございます！\nこの曲は、自分を「自分らしさ」で縛る呪いと、「解き放たれる自由」としての希望、\nその二つの中で揺れる、そんな雰囲気です。\nお楽しみください！\n(めと)",
      },
      {
        artist: "Juggernaut.(第2回目配信楽曲）",
        title: "refluxio",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/2_07.mp3",
        comment:
          '採用ありがとうございます！！\n「"最強"になりたい──」\nそんな思いを胸に日々精進して来ましたが、ついに"最強"になってしまいました。\nそんな今回の曲のテーマは「還流」。\nこの言葉から着想を得て、ボルテなどの音ゲーから受けた影響を凝縮して還元する、その流れが素敵だなと思いテーマにして制作しました。\nこの曲を聴いてまた別の誰かが影響を受けて曲を作ってくれればいいな～と妄想したりしております。\nそんなこの曲を攻略できるかは汝次第！！(？)\n楽しんでいただけたら幸いです。\n(Juggernaut.)',
      },
      {
        artist: "Silentroom(第1回目配信楽曲）",
        title: "XHRONOXAPSULΞ",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_01.mp3",
        comment:
          "はじめまして！Silentroomと申します。\nFLOORには約8年ぶりに再挑戦して、\n今回ついに楽曲を初めて採用いただけてとても嬉しいです…！！\nみなさんは自分の音楽ゲームとの出会いを覚えていますか？\n私の最初の出会いは家庭用DDR 2nd ReMIXでした。\n音楽とリズムとゲームグラフィックの相乗体験が子どもながらとてもカッコよくみえて、\nアペンドディスクまでずっと遊んでいたのを覚えています。\n二十年の時が過ぎ、ふと後ろを振り返れば、\nこの音楽とゲームの世界に飛び込んでから過ごしてきたたくさんの時間と\n多くの出会い、立ちはだかった困難と挑戦の思い出たちが軌跡のようにきらめき、\nその中心でずっと変わらずに大きく育ってきていた\n「全部、楽しかったんだなあ」という根源的な気持ちの存在に気がつきました。\n世は10回目のKAC、10年目のSOUND VOLTEXを迎えました。\n今を生きる私たちの未来、これからやってくる新しいプレーヤーたちの未来へと、\nずっと私たちに今日まで寄り添いつづけてきた「変わらないもの」とともに\nこの楽しさとよろこび、誇りと愛情を受け継いでいきたい。\nそのような願いを込め、楽曲を制作しました。\nタイトルは「クロノカプセル」と読みます。\n音楽ゲームに関わるすべての人々に\nきっとこれからも素敵な体験が続いていきますように！\n(Silentroom)",
      },
      {
        artist: "CHUBAY(第1回目配信楽曲）",
        title: "EncorE & cALL",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_02.mp3",
        comment:
          "ボルテプレーヤーの皆さん、はじめまして。CHUBAYと申します。\n栄えあるKACの楽曲コンテストで採用いただき大変光栄に思います。\n今から6年前、まだ細かいことをよく知らずにボルテをプレーしていたとき、たまたま公式サイトを見るとFLOORとあり、どうやらそこで楽曲公募をやっているらしい、ということを知りました。\n当時はそのことに対してあまり何も思いませんでしたが、ずっとボルテをプレーしていくうちに、もしこのゲームで自分の曲が遊べたら楽しいだろうなあ、と次第に思うようになりました。\nそんな中、初めてリアルタイムで見た6th KACで、すさまじく熱い戦いが繰り広げられるのを目の当たりにしたことで、いつか自分の曲でボルテを盛り上げたいと強く思い、それを目標に作曲を始めました。\n同時に、多彩な楽曲を生み出すアーティストの方々にも憧れを抱き、音楽そのものの聞き方もより豊かになっていきました。ボルテは私の人生を大きく変えてくれたゲームです。\nだからこそ、このような機会をいただけたときの気持ちは言葉にできません。\nさて、今回採用いただいた「EncorE & cALL」という楽曲は、KACの感動を何度でも、すべてのプレーヤーに届けたいという思いで作りました。\nまるでライブステージのように熱狂的なKACの舞台で、様々な展開を見せるトップの戦いの様子を想起させるようなアツい楽曲で、私のボルテに対する思いのすべてをぶつけたものです。\n大変な状況の中、延期となったものの無事開催できることとなったKACの決勝に際し、プレーヤーの皆さんの感動に彩りを添えられれば幸いです。どうぞよしなに！\n(CHUBAY)",
      },
      {
        artist: "Ashrount(第1回目配信楽曲）",
        title: "AμreoLe ~for Triumph~",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_03.mp3",
        comment:
          "前大会に引き続き、採用ありがとうございます。Ashrountです。\n今回はKACの最終決戦に相応しく、非常に攻撃的かつメロディアスなSpeed Coreになっています。\n自分が表現できることを最大限活かし、一曲を通して聴き飽きないように工夫しています。\nタイトルの『AμreoLe ~for Triumph~』には昨今の情勢やこの大会にかける思いなど、色々な意味が込められています。\n難しい譜面になると予想されますが、ぜひ解禁して遊んでほしいです。\n最後に、大会開催が危ぶまれる中、KACを開催していただき、ありがとうございました！\n(Ashrount)",
      },
      {
        artist: "BlackY(第1回目配信楽曲）",
        title: "ZEUS",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_04.mp3",
        comment:
          'ついにKACも10回目。ボルテだけで言えば9回目。\nそんな記念すべき10回目のKACということで、"全て"を出し尽くしてみました。\n"全て"をこの曲に出し尽くしてしまったので、僕はなんもわからんくなってしまいました。\nなので皆さんには是非この曲を倒していただいて、"全て"をわかってもらえると嬉しいです。\n(BlackY)',
      },
      {
        artist: "CANVAS feat. Quimär(第1回目配信楽曲）",
        title: "All for One",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_05.mp3",
        comment:
          "RoughSketchことCANVAS名義での採用、非常にうれしいです！\n過剰な高速BPMが飽和しきった昨今。\nThe 10th KACという記念すべき今回で一度、原点に立ち返る意味でのBPM185！\n「これがBEMANIシリーズのボス曲のひとつだ！」という強い気持ちで制作しました。\nQuimärのギターとメインのシンセが、まるで一対一で戦っているかのようなイメージです。\nAll for One\nKACはみんながひとつの目的のために鎬を削る個人戦。\n遠目で見たらAllの小文字「L」とOneの「O」で10っぽく見えませんか？\n末永く遊んで頂けると嬉しいです！\n(CANVAS)\nギター担当のQuimärです。\nこの度は採用ありがとうございます。\n応募曲「All for One」はテクニカルなフレーズを切り捨て、\n叙情的でクサいギターに仕上げてみました。\nレコーディング後、CANVASさんにデータを送ったところ\n「顔の見えるソロだ！」とコメントが来ましてニヤニヤしたのが今回の思い出です。\nメロディックなフレーズと裏腹に、\nハードで難解なリズムをお楽しみください！\n(Quimär)",
      },
      {
        artist: "Noah(第1回目配信楽曲）",
        title: "Wings to fly high",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_06.mp3",
        comment: "飛べよ\n(Noah)",
      },
      {
        artist: "U-ske feat. 棗いつき(第1回目配信楽曲）",
        title: "AIM HIGHER",
        source: "https://eacache.s.konaminet.jp/game/sdvx/sv/p/floor/original/28/result/sound/1_07.mp3",
        comment:
          "U-skeと申します。The 10th KACオリジナル楽曲コンテスト採用ありがとうございます！\nライバルたちとの駆け引きも外野からの野次も、勝負の上では全てノイズとなる。\n目の前の戦いに深く入り込むことだけが勝利を引き寄せる唯一つの手段なのです。\n頂を目指す者たちよ、さらなる高みまで食らいつけ！\n(U-ske)\n「この組み合わせなら可愛いめのピコピコポップスかな！」と思って試聴ボタンを押したあなた、どうですか、お元気ですか。ボーカルを担当させていただきました、棗いつきです。\nU-skeさんとのタッグでプラネタジャーニーぶりの採用をいただきましてほんとうに嬉しい限りです、ありがとうございます。\nありとあらゆる執念を込めて歌いましたので、たくさん遊んで楽しんでいただけたら本望です！\n(棗いつき)",
      },
    ],
  },
];
