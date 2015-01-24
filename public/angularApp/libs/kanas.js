
var HIRAGANAS = [
    [{jp:'あ', roma:'a', phonetic:'a', audio:'', nbTraits:'3'},
    {jp:'い', roma:'i', phonetic:'i', audio:'', nbTraits:'2'},
    {jp:'う', roma:'u', phonetic:'ɯ', audio:'', nbTraits:'2'},
    {jp:'え', roma:'e', phonetic:'e', audio:'', nbTraits:'2'},
    {jp:'お', roma:'o', phonetic:'o', audio:'', nbTraits:'3'}],

    [{jp:'か', roma:'ka', phonetic:'ka', audio:'', nbTraits:'3'},
    {jp:'き', roma:'ki', phonetic:'ki', audio:'', nbTraits:'4'},
    {jp:'く', roma:'ku', phonetic:'kɯ', audio:'', nbTraits:'1'},
    {jp:'け', roma:'ke', phonetic:'ke', audio:'', nbTraits:'3'},
    {jp:'こ', roma:'ko', phonetic:'ko', audio:'', nbTraits:'2'}],

    [{jp:'さ', roma:'sa', phonetic:'', audio:'', nbTraits:'3'},
    {jp:'し', roma:'shi', phonetic:'', audio:'', nbTraits:'1'},
    {jp:'す', roma:'su', phonetic:'', audio:'', nbTraits:'2'},
    {jp:'せ', roma:'se', phonetic:'', audio:'', nbTraits:'3'},
    {jp:'そ', roma:'so', phonetic:'', audio:'', nbTraits:'1'}],

    [{jp:'た', roma:'ta', phonetic:'', audio:'', nbTraits:'4'},
    {jp:'ち', roma:'chi', phonetic:'', audio:'', nbTraits:'2'},
    {jp:'つ', roma:'tsu', phonetic:'', audio:'', nbTraits:'1'},
    {jp:'て', roma:'te', phonetic:'', audio:'', nbTraits:'1'},
    {jp:'と', roma:'to', phonetic:'', audio:'', nbTraits:'2'}],

    [{jp:'な', roma:'na', phonetic:'', audio:'', nbTraits:''},
    {jp:'に', roma:'ni', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぬ', roma:'nu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ね', roma:'ne', phonetic:'', audio:'', nbTraits:''},
    {jp:'の', roma:'no', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'は', roma:'ha', phonetic:'', audio:'', nbTraits:''},
    {jp:'ひ', roma:'hi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ふ', roma:'fu', phonetic:'', audio:'', nbTraits:''},
    {jp:'へ', roma:'he', phonetic:'', audio:'', nbTraits:''},
    {jp:'ほ', roma:'ho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ま', roma:'ma', phonetic:'', audio:'', nbTraits:''},
    {jp:'み', roma:'mi', phonetic:'', audio:'', nbTraits:''},
    {jp:'む', roma:'mu', phonetic:'', audio:'', nbTraits:''},
    {jp:'め', roma:'me', phonetic:'', audio:'', nbTraits:''},
    {jp:'も', roma:'mo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'や', roma:'ya', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゆ', roma:'yu', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'よ', roma:'yo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ら', roma:'ra', phonetic:'', audio:'', nbTraits:''},
    {jp:'り', roma:'ri', phonetic:'', audio:'', nbTraits:''},
    {jp:'る', roma:'ru', phonetic:'', audio:'', nbTraits:''},
    {jp:'れ', roma:'re', phonetic:'', audio:'', nbTraits:''},
    {jp:'ろ', roma:'ro', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'わ', roma:'wa', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'を', roma:'o', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ん', roma:'n', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''}],

];

var HIRAGANAS_DIACRITICS = [
    [{jp:'が', roma:'ga', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぎ', roma:'gi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぐ', roma:'gu', phonetic:'', audio:'', nbTraits:''},
    {jp:'げ', roma:'ge', phonetic:'', audio:'', nbTraits:''},
    {jp:'ご', roma:'go', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ざ', roma:'za', phonetic:'', audio:'', nbTraits:''},
    {jp:'じ', roma:'ji', phonetic:'', audio:'', nbTraits:''},
    {jp:'ず', roma:'zu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぜ', roma:'ze', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぞ', roma:'zo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'だ', roma:'da', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぢ', roma:'(ji)', phonetic:'', audio:'', nbTraits:''},
    {jp:'づ', roma:'(zu)', phonetic:'', audio:'', nbTraits:''},
    {jp:'で', roma:'de', phonetic:'', audio:'', nbTraits:''},
    {jp:'ど', roma:'do', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ば', roma:'ba', phonetic:'', audio:'', nbTraits:''},
    {jp:'び', roma:'bi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぶ', roma:'bu', phonetic:'', audio:'', nbTraits:''},
    {jp:'べ', roma:'be', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぼ', roma:'bo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ぱ', roma:'pa', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぴ', roma:'pi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぷ', roma:'pu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぺ', roma:'pe', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぽ', roma:'po', phonetic:'', audio:'', nbTraits:''}],
];

var HIRAGANAS_DIGRAPHS = [
    [{jp:'きゃ', roma:'kya', phonetic:'', audio:'', nbTraits:''},
    {jp:'きゅ', roma:'kyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'きょ', roma:'kyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'しゃ', roma:'sha', phonetic:'', audio:'', nbTraits:''},
    {jp:'しゅ', roma:'shu', phonetic:'', audio:'', nbTraits:''},
    {jp:'しょ', roma:'sho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ちゃ', roma:'cha', phonetic:'', audio:'', nbTraits:''},
    {jp:'ちゅ', roma:'chu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ちょ', roma:'cho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'にゃ', roma:'nya', phonetic:'', audio:'', nbTraits:''},
    {jp:'にゅ', roma:'nyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'にょ', roma:'nyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ひゃ', roma:'hya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ひゅ', roma:'hyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ひょ', roma:'hyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'みゃ', roma:'mya', phonetic:'', audio:'', nbTraits:''},
    {jp:'みゅ', roma:'myu', phonetic:'', audio:'', nbTraits:''},
    {jp:'みょ', roma:'myo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'りゃ', roma:'rya', phonetic:'', audio:'', nbTraits:''},
    {jp:'りゅ', roma:'ryu', phonetic:'', audio:'', nbTraits:''},
    {jp:'りょ', roma:'ryo', phonetic:'', audio:'', nbTraits:''}],
];

var HIRAGANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ぎゃ', roma:'gya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぎゅ', roma:'gyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぎょ', roma:'gyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'じゃ', roma:'ja', phonetic:'', audio:'', nbTraits:''},
    {jp:'じゅ', roma:'ju', phonetic:'', audio:'', nbTraits:''},
    {jp:'じょ', roma:'jo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'びゃ', roma:'bya', phonetic:'', audio:'', nbTraits:''},
    {jp:'びゅ', roma:'byu', phonetic:'', audio:'', nbTraits:''},
    {jp:'びょ', roma:'byo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ぴゃ', roma:'pya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぴゅ', roma:'pyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ぴょ', roma:'pyo', phonetic:'', audio:'', nbTraits:''}],
];

var KATAKANAS = [
    [{jp:'ア', roma:'a', phonetic:'', audio:'', nbTraits:''},
    {jp:'イ', roma:'i', phonetic:'', audio:'', nbTraits:''},
    {jp:'ウ', roma:'u', phonetic:'', audio:'', nbTraits:''},
    {jp:'エ', roma:'e', phonetic:'', audio:'', nbTraits:''},
    {jp:'オ', roma:'o', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'カ', roma:'ka', phonetic:'', audio:'', nbTraits:''},
    {jp:'キ', roma:'ki', phonetic:'', audio:'', nbTraits:''},
    {jp:'ク', roma:'ku', phonetic:'', audio:'', nbTraits:''},
    {jp:'ケ', roma:'ke', phonetic:'', audio:'', nbTraits:''},
    {jp:'コ', roma:'ko', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'サ', roma:'sa', phonetic:'', audio:'', nbTraits:''},
    {jp:'シ', roma:'shi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ス', roma:'su', phonetic:'', audio:'', nbTraits:''},
    {jp:'セ', roma:'se', phonetic:'', audio:'', nbTraits:''},
    {jp:'ソ', roma:'so', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'タ', roma:'ta', phonetic:'', audio:'', nbTraits:''},
    {jp:'チ', roma:'chi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ツ', roma:'tsu', phonetic:'', audio:'', nbTraits:''},
    {jp:'テ', roma:'te', phonetic:'', audio:'', nbTraits:''},
    {jp:'ト', roma:'to', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ナ', roma:'na', phonetic:'', audio:'', nbTraits:''},
    {jp:'ニ', roma:'ni', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヌ', roma:'nu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ネ', roma:'ne', phonetic:'', audio:'', nbTraits:''},
    {jp:'ノ', roma:'no', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ハ', roma:'ha', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヒ', roma:'hi', phonetic:'', audio:'', nbTraits:''},
    {jp:'フ', roma:'fu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヘ', roma:'he', phonetic:'', audio:'', nbTraits:''},
    {jp:'ホ', roma:'ho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'マ', roma:'ma', phonetic:'', audio:'', nbTraits:''},
    {jp:'ミ', roma:'mi', phonetic:'', audio:'', nbTraits:''},
    {jp:'ム', roma:'mu', phonetic:'', audio:'', nbTraits:''},
    {jp:'メ', roma:'me', phonetic:'', audio:'', nbTraits:''},
    {jp:'モ', roma:'mo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ヤ', roma:'ya', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ユ', roma:'yu', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヨ', roma:'yo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ラ', roma:'ra', phonetic:'', audio:'', nbTraits:''},
    {jp:'リ', roma:'ri', phonetic:'', audio:'', nbTraits:''},
    {jp:'ル', roma:'ru', phonetic:'', audio:'', nbTraits:''},
    {jp:'レ', roma:'re', phonetic:'', audio:'', nbTraits:''},
    {jp:'ロ', roma:'ro', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ワ', roma:'wa', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヲ', roma:'o', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ン', roma:'n', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''}],

];

var KATAKANAS_DIACRITICS = [
    [{jp:'ガ', roma:'ga', phonetic:'', audio:'', nbTraits:''},
    {jp:'ギ', roma:'gi', phonetic:'', audio:'', nbTraits:''},
    {jp:'グ', roma:'gu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゲ', roma:'ge', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゴ', roma:'go', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ザ', roma:'za', phonetic:'', audio:'', nbTraits:''},
    {jp:'ジ', roma:'ji', phonetic:'', audio:'', nbTraits:''},
    {jp:'ズ', roma:'zu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゼ', roma:'ze', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゾ', roma:'zo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ダ', roma:'da', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヂ', roma:'(ji)', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヅ', roma:'(zu)', phonetic:'', audio:'', nbTraits:''},
    {jp:'デ', roma:'de', phonetic:'', audio:'', nbTraits:''},
    {jp:'ド', roma:'do', phonetic:'', audio:'', nbTraits:''}],
    
    [{jp:'バ', roma:'ba', phonetic:'', audio:'', nbTraits:''},
    {jp:'ビ', roma:'be', phonetic:'', audio:'', nbTraits:''},
    {jp:'ブ', roma:'bu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ベ', roma:'be', phonetic:'', audio:'', nbTraits:''},
    {jp:'ボ', roma:'bo', phonetic:'', audio:'', nbTraits:''}],
    
    [{jp:'パ', roma:'pa', phonetic:'', audio:'', nbTraits:''},
    {jp:'ピ', roma:'pi', phonetic:'', audio:'', nbTraits:''},
    {jp:'プ', roma:'pu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ペ', roma:'pe', phonetic:'', audio:'', nbTraits:''},
    {jp:'ポ', roma:'po', phonetic:'', audio:'', nbTraits:''}],

];

var KATAKANAS_DIGRAPHS = [
    [{jp:'キャ', roma:'kya', phonetic:'', audio:'', nbTraits:''},
    {jp:'キュ', roma:'kyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'キョ', roma:'kyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'シャ', roma:'sha', phonetic:'', audio:'', nbTraits:''},
    {jp:'シュ', roma:'shu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ショ', roma:'sho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'チャ', roma:'cha', phonetic:'', audio:'', nbTraits:''},
    {jp:'チュ', roma:'chu', phonetic:'', audio:'', nbTraits:''},
    {jp:'チョ', roma:'cho', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ニャ', roma:'nya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ニュ', roma:'nyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ニョ', roma:'nyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ヒャ', roma:'hya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヒュ', roma:'hyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヒョ', roma:'hyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ミャ', roma:'mya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ミュ', roma:'myu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ミョ', roma:'myo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'リャ', roma:'rya', phonetic:'', audio:'', nbTraits:''},
    {jp:'リュ', roma:'ryu', phonetic:'', audio:'', nbTraits:''},
    {jp:'リョ', roma:'ryo', phonetic:'', audio:'', nbTraits:''}],
];

var KATAKANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ギャ', roma:'gya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ギュ', roma:'gyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ギョ', roma:'gyo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ジャ', roma:'ja', phonetic:'', audio:'', nbTraits:''},
    {jp:'ジュ', roma:'ju', phonetic:'', audio:'', nbTraits:''},
    {jp:'ジョ', roma:'jo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ビャ', roma:'bya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ビュ', roma:'byu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ビョ', roma:'byo', phonetic:'', audio:'', nbTraits:''}],

    [{jp:'ピャ', roma:'pya', phonetic:'', audio:'', nbTraits:''},
    {jp:'ピュ', roma:'pyu', phonetic:'', audio:'', nbTraits:''},
    {jp:'ピョ', roma:'pyo', phonetic:'', audio:'', nbTraits:''}],
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
