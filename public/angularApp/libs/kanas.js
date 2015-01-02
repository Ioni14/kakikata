
var HIRAGANAS = [
    [{jp:'あ', roma:'a'},
    {jp:'い', roma:'i'},
    {jp:'う', roma:'u'},
    {jp:'え', roma:'e'},
    {jp:'お', roma:'o'}],

    [{jp:'か', roma:'ka'},
    {jp:'き', roma:'ki'},
    {jp:'く', roma:'ku'},
    {jp:'け', roma:'ke'},
    {jp:'こ', roma:'ko'}],

    [{jp:'さ', roma:'sa'},
    {jp:'し', roma:'shi'},
    {jp:'す', roma:'su'},
    {jp:'せ', roma:'se'},
    {jp:'そ', roma:'so'}],

    [{jp:'た', roma:'ta'},
    {jp:'ち', roma:'chi'},
    {jp:'つ', roma:'tsu'},
    {jp:'て', roma:'te'},
    {jp:'と', roma:'to'}],

    [{jp:'な', roma:'na'},
    {jp:'に', roma:'ni'},
    {jp:'ぬ', roma:'nu'},
    {jp:'ね', roma:'ne'},
    {jp:'の', roma:'no'}],

    [{jp:'は', roma:'ha'},
    {jp:'ひ', roma:'hi'},
    {jp:'ふ', roma:'fu'},
    {jp:'へ', roma:'he'},
    {jp:'ほ', roma:'ho'}],

    [{jp:'ま', roma:'ma'},
    {jp:'み', roma:'mi'},
    {jp:'む', roma:'mu'},
    {jp:'め', roma:'me'},
    {jp:'も', roma:'mo'}],

    [{jp:'や', roma:'ya'},
    {jp:'', roma:''},
    {jp:'ゆ', roma:'yu'},
    {jp:'', roma:''},
    {jp:'よ', roma:'yo'}],

    [{jp:'ら', roma:'ra'},
    {jp:'り', roma:'ri'},
    {jp:'る', roma:'ru'},
    {jp:'れ', roma:'re'},
    {jp:'ろ', roma:'ro'}],

    [{jp:'わ', roma:'wa'},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'を', roma:'o'}],

    [{jp:'ん', roma:'n'},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''}],

];

var HIRAGANAS_DIACRITICS = [
    [{jp:'が', roma:'ga'},
    {jp:'ぎ', roma:'gi'},
    {jp:'ぐ', roma:'gu'},
    {jp:'げ', roma:'ge'},
    {jp:'ご', roma:'go'}],

    [{jp:'ざ', roma:'za'},
    {jp:'じ', roma:'ji'},
    {jp:'ず', roma:'zu'},
    {jp:'ぜ', roma:'ze'},
    {jp:'ぞ', roma:'zo'}],

    [{jp:'だ', roma:'da'},
    {jp:'ぢ', roma:'(ji)'},
    {jp:'づ', roma:'(zu)'},
    {jp:'で', roma:'de'},
    {jp:'ど', roma:'do'}],

    [{jp:'ば', roma:'ba'},
    {jp:'び', roma:'bi'},
    {jp:'ぶ', roma:'bu'},
    {jp:'べ', roma:'be'},
    {jp:'ぼ', roma:'bo'}],

    [{jp:'ぱ', roma:'pa'},
    {jp:'ぴ', roma:'pi'},
    {jp:'ぷ', roma:'pu'},
    {jp:'ぺ', roma:'pe'},
    {jp:'ぽ', roma:'po'}],
];

var HIRAGANAS_DIGRAPHS = [
    [{jp:'きゃ', roma:'kya'},
    {jp:'きゅ', roma:'kyu'},
    {jp:'きょ', roma:'kyo'}],

    [{jp:'しゃ', roma:'sha'},
    {jp:'しゅ', roma:'shu'},
    {jp:'しょ', roma:'sho'}],

    [{jp:'ちゃ', roma:'cha'},
    {jp:'ちゅ', roma:'chu'},
    {jp:'ちょ', roma:'cho'}],

    [{jp:'にゃ', roma:'nya'},
    {jp:'にゅ', roma:'nyu'},
    {jp:'にょ', roma:'nyo'}],

    [{jp:'ひゃ', roma:'hya'},
    {jp:'ひゅ', roma:'hyu'},
    {jp:'ひょ', roma:'hyo'}],

    [{jp:'みゃ', roma:'mya'},
    {jp:'みゅ', roma:'myu'},
    {jp:'みょ', roma:'myo'}],

    [{jp:'りゃ', roma:'rya'},
    {jp:'りゅ', roma:'ryu'},
    {jp:'りょ', roma:'ryo'}],
];

var HIRAGANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ぎゃ', roma:'gya'},
    {jp:'ぎゅ', roma:'gyu'},
    {jp:'ぎょ', roma:'gyo'}],

    [{jp:'じゃ', roma:'ja'},
    {jp:'じゅ', roma:'ju'},
    {jp:'じょ', roma:'jo'}],

    [{jp:'びゃ', roma:'bya'},
    {jp:'びゅ', roma:'byu'},
    {jp:'びょ', roma:'byo'}],

    [{jp:'ぴゃ', roma:'pya'},
    {jp:'ぴゅ', roma:'pyu'},
    {jp:'ぴょ', roma:'pyo'}],
];

var KATAKANAS = [
    [{jp:'ア', roma:'a'},
    {jp:'イ', roma:'i'},
    {jp:'ウ', roma:'u'},
    {jp:'エ', roma:'e'},
    {jp:'オ', roma:'o'}],

    [{jp:'カ', roma:'ka'},
    {jp:'キ', roma:'ki'},
    {jp:'ク', roma:'ku'},
    {jp:'ケ', roma:'ke'},
    {jp:'コ', roma:'ko'}],

    [{jp:'サ', roma:'sa'},
    {jp:'シ', roma:'shi'},
    {jp:'ス', roma:'su'},
    {jp:'セ', roma:'se'},
    {jp:'ソ', roma:'so'}],

    [{jp:'タ', roma:'ta'},
    {jp:'チ', roma:'chi'},
    {jp:'ツ', roma:'tsu'},
    {jp:'テ', roma:'te'},
    {jp:'ト', roma:'to'}],

    [{jp:'ナ', roma:'na'},
    {jp:'ニ', roma:'ni'},
    {jp:'ヌ', roma:'nu'},
    {jp:'ネ', roma:'ne'},
    {jp:'ノ', roma:'no'}],

    [{jp:'ハ', roma:'ha'},
    {jp:'ヒ', roma:'hi'},
    {jp:'フ', roma:'fu'},
    {jp:'ヘ', roma:'he'},
    {jp:'ホ', roma:'ho'}],

    [{jp:'マ', roma:'ma'},
    {jp:'ミ', roma:'mi'},
    {jp:'ム', roma:'mu'},
    {jp:'メ', roma:'me'},
    {jp:'モ', roma:'mo'}],

    [{jp:'ヤ', roma:'ya'},
    {jp:'', roma:''},
    {jp:'ユ', roma:'yu'},
    {jp:'', roma:''},
    {jp:'ヨ', roma:'yo'}],

    [{jp:'ラ', roma:'ra'},
    {jp:'リ', roma:'ri'},
    {jp:'ル', roma:'ru'},
    {jp:'レ', roma:'re'},
    {jp:'ロ', roma:'ro'}],

    [{jp:'ワ', roma:'wa'},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'ヲ', roma:'o'}],

    [{jp:'ン', roma:'n'},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''},
    {jp:'', roma:''}],

];

var KATAKANAS_DIACRITICS = [
    [{jp:'ガ', roma:'ga'},
    {jp:'ギ', roma:'gi'},
    {jp:'グ', roma:'gu'},
    {jp:'ゲ', roma:'ge'},
    {jp:'ゴ', roma:'go'}],

    [{jp:'ザ', roma:'za'},
    {jp:'ジ', roma:'ji'},
    {jp:'ズ', roma:'zu'},
    {jp:'ゼ', roma:'ze'},
    {jp:'ゾ', roma:'zo'}],

    [{jp:'ダ', roma:'da'},
    {jp:'ヂ', roma:'(ji)'},
    {jp:'ヅ', roma:'(zu)'},
    {jp:'デ', roma:'de'},
    {jp:'ド', roma:'do'}],
    
    [{jp:'バ', roma:'ba'},
    {jp:'ビ', roma:'be'},
    {jp:'ブ', roma:'bu'},
    {jp:'ベ', roma:'be'},
    {jp:'ボ', roma:'bo'}],
    
    [{jp:'パ', roma:'pa'},
    {jp:'ピ', roma:'pi'},
    {jp:'プ', roma:'pu'},
    {jp:'ペ', roma:'pe'},
    {jp:'ポ', roma:'po'}],

];

var KATAKANAS_DIGRAPHS = [
    [{jp:'キャ', roma:'kya'},
    {jp:'キュ', roma:'kyu'},
    {jp:'キョ', roma:'kyo'}],

    [{jp:'シャ', roma:'sha'},
    {jp:'シュ', roma:'shu'},
    {jp:'ショ', roma:'sho'}],

    [{jp:'チャ', roma:'cha'},
    {jp:'チュ', roma:'chu'},
    {jp:'チョ', roma:'cho'}],

    [{jp:'ニャ', roma:'nya'},
    {jp:'ニュ', roma:'nyu'},
    {jp:'ニョ', roma:'nyo'}],

    [{jp:'ヒャ', roma:'hya'},
    {jp:'ヒュ', roma:'hyu'},
    {jp:'ヒョ', roma:'hyo'}],

    [{jp:'ミャ', roma:'mya'},
    {jp:'ミュ', roma:'myu'},
    {jp:'ミョ', roma:'myo'}],

    [{jp:'リャ', roma:'rya'},
    {jp:'リュ', roma:'ryu'},
    {jp:'リョ', roma:'ryo'}],
];

var KATAKANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ギャ', roma:'gya'},
    {jp:'ギュ', roma:'gyu'},
    {jp:'ギョ', roma:'gyo'}],

    [{jp:'ジャ', roma:'ja'},
    {jp:'ジュ', roma:'ju'},
    {jp:'ジョ', roma:'jo'}],

    [{jp:'ビャ', roma:'bya'},
    {jp:'ビュ', roma:'byu'},
    {jp:'ビョ', roma:'byo'}],

    [{jp:'ピャ', roma:'pya'},
    {jp:'ピュ', roma:'pyu'},
    {jp:'ピョ', roma:'pyo'}],
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
