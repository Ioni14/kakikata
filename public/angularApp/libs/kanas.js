
var HIRAGANAS = [
    [{jp:'あ', roma:'a', phonetic:'a', audio:''},
    {jp:'い', roma:'i', phonetic:'i', audio:''},
    {jp:'う', roma:'u', phonetic:'ɯ', audio:''},
    {jp:'え', roma:'e', phonetic:'e', audio:''},
    {jp:'お', roma:'o', phonetic:'o', audio:''}],

    [{jp:'か', roma:'ka', phonetic:'ka', audio:''},
    {jp:'き', roma:'ki', phonetic:'ki', audio:''},
    {jp:'く', roma:'ku', phonetic:'kɯ', audio:''},
    {jp:'け', roma:'ke', phonetic:'ke', audio:''},
    {jp:'こ', roma:'ko', phonetic:'ko', audio:''}],

    [{jp:'さ', roma:'sa', phonetic:'', audio:''},
    {jp:'し', roma:'shi', phonetic:'', audio:''},
    {jp:'す', roma:'su', phonetic:'', audio:''},
    {jp:'せ', roma:'se', phonetic:'', audio:''},
    {jp:'そ', roma:'so', phonetic:'', audio:''}],

    [{jp:'た', roma:'ta', phonetic:'', audio:''},
    {jp:'ち', roma:'chi', phonetic:'', audio:''},
    {jp:'つ', roma:'tsu', phonetic:'', audio:''},
    {jp:'て', roma:'te', phonetic:'', audio:''},
    {jp:'と', roma:'to', phonetic:'', audio:''}],

    [{jp:'な', roma:'na', phonetic:'', audio:''},
    {jp:'に', roma:'ni', phonetic:'', audio:''},
    {jp:'ぬ', roma:'nu', phonetic:'', audio:''},
    {jp:'ね', roma:'ne', phonetic:'', audio:''},
    {jp:'の', roma:'no', phonetic:'', audio:''}],

    [{jp:'は', roma:'ha', phonetic:'', audio:''},
    {jp:'ひ', roma:'hi', phonetic:'', audio:''},
    {jp:'ふ', roma:'fu', phonetic:'', audio:''},
    {jp:'へ', roma:'he', phonetic:'', audio:''},
    {jp:'ほ', roma:'ho', phonetic:'', audio:''}],

    [{jp:'ま', roma:'ma', phonetic:'', audio:''},
    {jp:'み', roma:'mi', phonetic:'', audio:''},
    {jp:'む', roma:'mu', phonetic:'', audio:''},
    {jp:'め', roma:'me', phonetic:'', audio:''},
    {jp:'も', roma:'mo', phonetic:'', audio:''}],

    [{jp:'や', roma:'ya', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'ゆ', roma:'yu', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'よ', roma:'yo', phonetic:'', audio:''}],

    [{jp:'ら', roma:'ra', phonetic:'', audio:''},
    {jp:'り', roma:'ri', phonetic:'', audio:''},
    {jp:'る', roma:'ru', phonetic:'', audio:''},
    {jp:'れ', roma:'re', phonetic:'', audio:''},
    {jp:'ろ', roma:'ro', phonetic:'', audio:''}],

    [{jp:'わ', roma:'wa', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'を', roma:'o', phonetic:'', audio:''}],

    [{jp:'ん', roma:'n', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''}],

];

var HIRAGANAS_DIACRITICS = [
    [{jp:'が', roma:'ga', phonetic:'', audio:''},
    {jp:'ぎ', roma:'gi', phonetic:'', audio:''},
    {jp:'ぐ', roma:'gu', phonetic:'', audio:''},
    {jp:'げ', roma:'ge', phonetic:'', audio:''},
    {jp:'ご', roma:'go', phonetic:'', audio:''}],

    [{jp:'ざ', roma:'za', phonetic:'', audio:''},
    {jp:'じ', roma:'ji', phonetic:'', audio:''},
    {jp:'ず', roma:'zu', phonetic:'', audio:''},
    {jp:'ぜ', roma:'ze', phonetic:'', audio:''},
    {jp:'ぞ', roma:'zo', phonetic:'', audio:''}],

    [{jp:'だ', roma:'da', phonetic:'', audio:''},
    {jp:'ぢ', roma:'(ji)', phonetic:'', audio:''},
    {jp:'づ', roma:'(zu)', phonetic:'', audio:''},
    {jp:'で', roma:'de', phonetic:'', audio:''},
    {jp:'ど', roma:'do', phonetic:'', audio:''}],

    [{jp:'ば', roma:'ba', phonetic:'', audio:''},
    {jp:'び', roma:'bi', phonetic:'', audio:''},
    {jp:'ぶ', roma:'bu', phonetic:'', audio:''},
    {jp:'べ', roma:'be', phonetic:'', audio:''},
    {jp:'ぼ', roma:'bo', phonetic:'', audio:''}],

    [{jp:'ぱ', roma:'pa', phonetic:'', audio:''},
    {jp:'ぴ', roma:'pi', phonetic:'', audio:''},
    {jp:'ぷ', roma:'pu', phonetic:'', audio:''},
    {jp:'ぺ', roma:'pe', phonetic:'', audio:''},
    {jp:'ぽ', roma:'po', phonetic:'', audio:''}],
];

var HIRAGANAS_DIGRAPHS = [
    [{jp:'きゃ', roma:'kya', phonetic:'', audio:''},
    {jp:'きゅ', roma:'kyu', phonetic:'', audio:''},
    {jp:'きょ', roma:'kyo', phonetic:'', audio:''}],

    [{jp:'しゃ', roma:'sha', phonetic:'', audio:''},
    {jp:'しゅ', roma:'shu', phonetic:'', audio:''},
    {jp:'しょ', roma:'sho', phonetic:'', audio:''}],

    [{jp:'ちゃ', roma:'cha', phonetic:'', audio:''},
    {jp:'ちゅ', roma:'chu', phonetic:'', audio:''},
    {jp:'ちょ', roma:'cho', phonetic:'', audio:''}],

    [{jp:'にゃ', roma:'nya', phonetic:'', audio:''},
    {jp:'にゅ', roma:'nyu', phonetic:'', audio:''},
    {jp:'にょ', roma:'nyo', phonetic:'', audio:''}],

    [{jp:'ひゃ', roma:'hya', phonetic:'', audio:''},
    {jp:'ひゅ', roma:'hyu', phonetic:'', audio:''},
    {jp:'ひょ', roma:'hyo', phonetic:'', audio:''}],

    [{jp:'みゃ', roma:'mya', phonetic:'', audio:''},
    {jp:'みゅ', roma:'myu', phonetic:'', audio:''},
    {jp:'みょ', roma:'myo', phonetic:'', audio:''}],

    [{jp:'りゃ', roma:'rya', phonetic:'', audio:''},
    {jp:'りゅ', roma:'ryu', phonetic:'', audio:''},
    {jp:'りょ', roma:'ryo', phonetic:'', audio:''}],
];

var HIRAGANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ぎゃ', roma:'gya', phonetic:'', audio:''},
    {jp:'ぎゅ', roma:'gyu', phonetic:'', audio:''},
    {jp:'ぎょ', roma:'gyo', phonetic:'', audio:''}],

    [{jp:'じゃ', roma:'ja', phonetic:'', audio:''},
    {jp:'じゅ', roma:'ju', phonetic:'', audio:''},
    {jp:'じょ', roma:'jo', phonetic:'', audio:''}],

    [{jp:'びゃ', roma:'bya', phonetic:'', audio:''},
    {jp:'びゅ', roma:'byu', phonetic:'', audio:''},
    {jp:'びょ', roma:'byo', phonetic:'', audio:''}],

    [{jp:'ぴゃ', roma:'pya', phonetic:'', audio:''},
    {jp:'ぴゅ', roma:'pyu', phonetic:'', audio:''},
    {jp:'ぴょ', roma:'pyo', phonetic:'', audio:''}],
];

var KATAKANAS = [
    [{jp:'ア', roma:'a', phonetic:'', audio:''},
    {jp:'イ', roma:'i', phonetic:'', audio:''},
    {jp:'ウ', roma:'u', phonetic:'', audio:''},
    {jp:'エ', roma:'e', phonetic:'', audio:''},
    {jp:'オ', roma:'o', phonetic:'', audio:''}],

    [{jp:'カ', roma:'ka', phonetic:'', audio:''},
    {jp:'キ', roma:'ki', phonetic:'', audio:''},
    {jp:'ク', roma:'ku', phonetic:'', audio:''},
    {jp:'ケ', roma:'ke', phonetic:'', audio:''},
    {jp:'コ', roma:'ko', phonetic:'', audio:''}],

    [{jp:'サ', roma:'sa', phonetic:'', audio:''},
    {jp:'シ', roma:'shi', phonetic:'', audio:''},
    {jp:'ス', roma:'su', phonetic:'', audio:''},
    {jp:'セ', roma:'se', phonetic:'', audio:''},
    {jp:'ソ', roma:'so', phonetic:'', audio:''}],

    [{jp:'タ', roma:'ta', phonetic:'', audio:''},
    {jp:'チ', roma:'chi', phonetic:'', audio:''},
    {jp:'ツ', roma:'tsu', phonetic:'', audio:''},
    {jp:'テ', roma:'te', phonetic:'', audio:''},
    {jp:'ト', roma:'to', phonetic:'', audio:''}],

    [{jp:'ナ', roma:'na', phonetic:'', audio:''},
    {jp:'ニ', roma:'ni', phonetic:'', audio:''},
    {jp:'ヌ', roma:'nu', phonetic:'', audio:''},
    {jp:'ネ', roma:'ne', phonetic:'', audio:''},
    {jp:'ノ', roma:'no', phonetic:'', audio:''}],

    [{jp:'ハ', roma:'ha', phonetic:'', audio:''},
    {jp:'ヒ', roma:'hi', phonetic:'', audio:''},
    {jp:'フ', roma:'fu', phonetic:'', audio:''},
    {jp:'ヘ', roma:'he', phonetic:'', audio:''},
    {jp:'ホ', roma:'ho', phonetic:'', audio:''}],

    [{jp:'マ', roma:'ma', phonetic:'', audio:''},
    {jp:'ミ', roma:'mi', phonetic:'', audio:''},
    {jp:'ム', roma:'mu', phonetic:'', audio:''},
    {jp:'メ', roma:'me', phonetic:'', audio:''},
    {jp:'モ', roma:'mo', phonetic:'', audio:''}],

    [{jp:'ヤ', roma:'ya', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'ユ', roma:'yu', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'ヨ', roma:'yo', phonetic:'', audio:''}],

    [{jp:'ラ', roma:'ra', phonetic:'', audio:''},
    {jp:'リ', roma:'ri', phonetic:'', audio:''},
    {jp:'ル', roma:'ru', phonetic:'', audio:''},
    {jp:'レ', roma:'re', phonetic:'', audio:''},
    {jp:'ロ', roma:'ro', phonetic:'', audio:''}],

    [{jp:'ワ', roma:'wa', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'ヲ', roma:'o', phonetic:'', audio:''}],

    [{jp:'ン', roma:'n', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''},
    {jp:'', roma:'', phonetic:'', audio:''}],

];

var KATAKANAS_DIACRITICS = [
    [{jp:'ガ', roma:'ga', phonetic:'', audio:''},
    {jp:'ギ', roma:'gi', phonetic:'', audio:''},
    {jp:'グ', roma:'gu', phonetic:'', audio:''},
    {jp:'ゲ', roma:'ge', phonetic:'', audio:''},
    {jp:'ゴ', roma:'go', phonetic:'', audio:''}],

    [{jp:'ザ', roma:'za', phonetic:'', audio:''},
    {jp:'ジ', roma:'ji', phonetic:'', audio:''},
    {jp:'ズ', roma:'zu', phonetic:'', audio:''},
    {jp:'ゼ', roma:'ze', phonetic:'', audio:''},
    {jp:'ゾ', roma:'zo', phonetic:'', audio:''}],

    [{jp:'ダ', roma:'da', phonetic:'', audio:''},
    {jp:'ヂ', roma:'(ji)', phonetic:'', audio:''},
    {jp:'ヅ', roma:'(zu)', phonetic:'', audio:''},
    {jp:'デ', roma:'de', phonetic:'', audio:''},
    {jp:'ド', roma:'do', phonetic:'', audio:''}],
    
    [{jp:'バ', roma:'ba', phonetic:'', audio:''},
    {jp:'ビ', roma:'be', phonetic:'', audio:''},
    {jp:'ブ', roma:'bu', phonetic:'', audio:''},
    {jp:'ベ', roma:'be', phonetic:'', audio:''},
    {jp:'ボ', roma:'bo', phonetic:'', audio:''}],
    
    [{jp:'パ', roma:'pa', phonetic:'', audio:''},
    {jp:'ピ', roma:'pi', phonetic:'', audio:''},
    {jp:'プ', roma:'pu', phonetic:'', audio:''},
    {jp:'ペ', roma:'pe', phonetic:'', audio:''},
    {jp:'ポ', roma:'po', phonetic:'', audio:''}],

];

var KATAKANAS_DIGRAPHS = [
    [{jp:'キャ', roma:'kya', phonetic:'', audio:''},
    {jp:'キュ', roma:'kyu', phonetic:'', audio:''},
    {jp:'キョ', roma:'kyo', phonetic:'', audio:''}],

    [{jp:'シャ', roma:'sha', phonetic:'', audio:''},
    {jp:'シュ', roma:'shu', phonetic:'', audio:''},
    {jp:'ショ', roma:'sho', phonetic:'', audio:''}],

    [{jp:'チャ', roma:'cha', phonetic:'', audio:''},
    {jp:'チュ', roma:'chu', phonetic:'', audio:''},
    {jp:'チョ', roma:'cho', phonetic:'', audio:''}],

    [{jp:'ニャ', roma:'nya', phonetic:'', audio:''},
    {jp:'ニュ', roma:'nyu', phonetic:'', audio:''},
    {jp:'ニョ', roma:'nyo', phonetic:'', audio:''}],

    [{jp:'ヒャ', roma:'hya', phonetic:'', audio:''},
    {jp:'ヒュ', roma:'hyu', phonetic:'', audio:''},
    {jp:'ヒョ', roma:'hyo', phonetic:'', audio:''}],

    [{jp:'ミャ', roma:'mya', phonetic:'', audio:''},
    {jp:'ミュ', roma:'myu', phonetic:'', audio:''},
    {jp:'ミョ', roma:'myo', phonetic:'', audio:''}],

    [{jp:'リャ', roma:'rya', phonetic:'', audio:''},
    {jp:'リュ', roma:'ryu', phonetic:'', audio:''},
    {jp:'リョ', roma:'ryo', phonetic:'', audio:''}],
];

var KATAKANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ギャ', roma:'gya', phonetic:'', audio:''},
    {jp:'ギュ', roma:'gyu', phonetic:'', audio:''},
    {jp:'ギョ', roma:'gyo', phonetic:'', audio:''}],

    [{jp:'ジャ', roma:'ja', phonetic:'', audio:''},
    {jp:'ジュ', roma:'ju', phonetic:'', audio:''},
    {jp:'ジョ', roma:'jo', phonetic:'', audio:''}],

    [{jp:'ビャ', roma:'bya', phonetic:'', audio:''},
    {jp:'ビュ', roma:'byu', phonetic:'', audio:''},
    {jp:'ビョ', roma:'byo', phonetic:'', audio:''}],

    [{jp:'ピャ', roma:'pya', phonetic:'', audio:''},
    {jp:'ピュ', roma:'pyu', phonetic:'', audio:''},
    {jp:'ピョ', roma:'pyo', phonetic:'', audio:''}],
];


var KANAS = [
    HIRAGANAS,
    HIRAGANAS_DIGRAPHS,
    HIRAGANAS_DIACRITICS,
    HIRAGANAS_DIGRAPHS_DIACRITICS,
    KATAKANAS,
    KATAKANAS_DIGRAPHS,
    KATAKANAS_DIACRITICS,
    KATAKANAS_DIGRAPHS_DIACRITICS
];
