
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

    [{jp:'さ', roma:'sa', phonetic:'sa', audio:'', nbTraits:'3'},
    {jp:'し', roma:'shi', phonetic:'ɕi', audio:'', nbTraits:'1'},
    {jp:'す', roma:'su', phonetic:'sɯ', audio:'', nbTraits:'2'},
    {jp:'せ', roma:'se', phonetic:'se', audio:'', nbTraits:'3'},
    {jp:'そ', roma:'so', phonetic:'so', audio:'', nbTraits:'1'}],

    [{jp:'た', roma:'ta', phonetic:'ta', audio:'', nbTraits:'4'},
    {jp:'ち', roma:'chi', phonetic:'cɕi', audio:'', nbTraits:'2'},
    {jp:'つ', roma:'tsu', phonetic:'tsɯ', audio:'', nbTraits:'1'},
    {jp:'て', roma:'te', phonetic:'te', audio:'', nbTraits:'1'},
    {jp:'と', roma:'to', phonetic:'to', audio:'', nbTraits:'2'}],

    [{jp:'な', roma:'na', phonetic:'na', audio:'', nbTraits:'4'},
    {jp:'に', roma:'ni', phonetic:'ni', audio:'', nbTraits:'3'},
    {jp:'ぬ', roma:'nu', phonetic:'nɯ', audio:'', nbTraits:'2'},
    {jp:'ね', roma:'ne', phonetic:'ne', audio:'', nbTraits:'2'},
    {jp:'の', roma:'no', phonetic:'no', audio:'', nbTraits:'1'}],

    [{jp:'は', roma:'ha', phonetic:'ha', audio:'', nbTraits:'3'},
    {jp:'ひ', roma:'hi', phonetic:'hi', audio:'', nbTraits:'1'},
    {jp:'ふ', roma:'fu', phonetic:'ɸɯ', audio:'', nbTraits:'4'},
    {jp:'へ', roma:'he', phonetic:'he', audio:'', nbTraits:'1'},
    {jp:'ほ', roma:'ho', phonetic:'ho', audio:'', nbTraits:'4'}],

    [{jp:'ま', roma:'ma', phonetic:'ma', audio:'', nbTraits:'3'},
    {jp:'み', roma:'mi', phonetic:'mi', audio:'', nbTraits:'2'},
    {jp:'む', roma:'mu', phonetic:'mɯ', audio:'', nbTraits:'3'},
    {jp:'め', roma:'me', phonetic:'me', audio:'', nbTraits:'2'},
    {jp:'も', roma:'mo', phonetic:'mo', audio:'', nbTraits:'3'}],

    [{jp:'や', roma:'ya', phonetic:'ja', audio:'', nbTraits:'3'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ゆ', roma:'yu', phonetic:'jɯ', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'よ', roma:'yo', phonetic:'jo', audio:'', nbTraits:'2'}],

    [{jp:'ら', roma:'ra', phonetic:'ɺa', audio:'', nbTraits:'2'},
    {jp:'り', roma:'ri', phonetic:'ɺi', audio:'', nbTraits:'2'},
    {jp:'る', roma:'ru', phonetic:'ɺɯ', audio:'', nbTraits:'1'},
    {jp:'れ', roma:'re', phonetic:'ɺe', audio:'', nbTraits:'2'},
    {jp:'ろ', roma:'ro', phonetic:'ɺo', audio:'', nbTraits:'1'}],

    [{jp:'わ', roma:'wa', phonetic:'ɰa', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'を', roma:'o', phonetic:'o', audio:'', nbTraits:'3'}],

    [{jp:'ん', roma:'n', phonetic:'n', audio:'', nbTraits:'1'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''}],

];

var HIRAGANAS_DIACRITICS = [
    [{jp:'が', roma:'ga', phonetic:'ga', audio:'', nbTraits:'5'},
    {jp:'ぎ', roma:'gi', phonetic:'gi', audio:'', nbTraits:'6'},
    {jp:'ぐ', roma:'gu', phonetic:'gɯ', audio:'', nbTraits:'3'},
    {jp:'げ', roma:'ge', phonetic:'ge', audio:'', nbTraits:'5'},
    {jp:'ご', roma:'go', phonetic:'go', audio:'', nbTraits:'4'}],

    [{jp:'ざ', roma:'za', phonetic:'za', audio:'', nbTraits:'5'},
    {jp:'じ', roma:'ji', phonetic:'ɟʑi', audio:'', nbTraits:'3'},
    {jp:'ず', roma:'zu', phonetic:'zɯ', audio:'', nbTraits:'4'},
    {jp:'ぜ', roma:'ze', phonetic:'ze', audio:'', nbTraits:'5'},
    {jp:'ぞ', roma:'zo', phonetic:'zo', audio:'', nbTraits:'3'}],

    [{jp:'だ', roma:'da', phonetic:'da', audio:'', nbTraits:'6'},
    {jp:'ぢ', roma:'(ji)', phonetic:'ɟʑi', audio:'', nbTraits:'4'},
    {jp:'づ', roma:'(zu)', phonetic:'dzɯ', audio:'', nbTraits:'3'},
    {jp:'で', roma:'de', phonetic:'de', audio:'', nbTraits:'3'},
    {jp:'ど', roma:'do', phonetic:'do', audio:'', nbTraits:'4'}],

    [{jp:'ば', roma:'ba', phonetic:'ba', audio:'', nbTraits:'5'},
    {jp:'び', roma:'bi', phonetic:'bi', audio:'', nbTraits:'3'},
    {jp:'ぶ', roma:'bu', phonetic:'bɯ', audio:'', nbTraits:'6'},
    {jp:'べ', roma:'be', phonetic:'be', audio:'', nbTraits:'3'},
    {jp:'ぼ', roma:'bo', phonetic:'bo', audio:'', nbTraits:'6'}],

    [{jp:'ぱ', roma:'pa', phonetic:'pa', audio:'', nbTraits:'4'},
    {jp:'ぴ', roma:'pi', phonetic:'pi', audio:'', nbTraits:'2'},
    {jp:'ぷ', roma:'pu', phonetic:'pɯ', audio:'', nbTraits:'5'},
    {jp:'ぺ', roma:'pe', phonetic:'pe', audio:'', nbTraits:'2'},
    {jp:'ぽ', roma:'po', phonetic:'po', audio:'', nbTraits:'5'}],
];

var HIRAGANAS_DIGRAPHS = [
    [{jp:'きゃ', roma:'kya', phonetic:'kʲa', audio:'', nbTraits:'7'},
    {jp:'きゅ', roma:'kyu', phonetic:'kʲɯs', audio:'', nbTraits:'6'},
    {jp:'きょ', roma:'kyo', phonetic:'kʲo', audio:'', nbTraits:'6'}],

    [{jp:'しゃ', roma:'sha', phonetic:'ɕa', audio:'', nbTraits:'4'},
    {jp:'しゅ', roma:'shu', phonetic:'ɕɯ', audio:'', nbTraits:'3'},
    {jp:'しょ', roma:'sho', phonetic:'ɕo', audio:'', nbTraits:'3'}],

    [{jp:'ちゃ', roma:'cha', phonetic:'cɕa', audio:'', nbTraits:'5'},
    {jp:'ちゅ', roma:'chu', phonetic:'cɕɯ', audio:'', nbTraits:'4'},
    {jp:'ちょ', roma:'cho', phonetic:'cɕo', audio:'', nbTraits:'4'}],

    [{jp:'にゃ', roma:'nya', phonetic:'ȵa', audio:'', nbTraits:'6'},
    {jp:'にゅ', roma:'nyu', phonetic:'ȵa', audio:'', nbTraits:'5'},
    {jp:'にょ', roma:'nyo', phonetic:'ȵo', audio:'', nbTraits:'5'}],

    [{jp:'ひゃ', roma:'hya', phonetic:'ça', audio:'', nbTraits:'4'},
    {jp:'ひゅ', roma:'hyu', phonetic:'çɯ', audio:'', nbTraits:'3'},
    {jp:'ひょ', roma:'hyo', phonetic:'ço', audio:'', nbTraits:'3'}],

    [{jp:'みゃ', roma:'mya', phonetic:'mʲa', audio:'', nbTraits:'5'},
    {jp:'みゅ', roma:'myu', phonetic:'mʲɯ', audio:'', nbTraits:'4'},
    {jp:'みょ', roma:'myo', phonetic:'mʲo', audio:'', nbTraits:'4'}],

    [{jp:'りゃ', roma:'rya', phonetic:'ɺʲa', audio:'', nbTraits:'5'},
    {jp:'りゅ', roma:'ryu', phonetic:'ɺʲɯ', audio:'', nbTraits:'4'},
    {jp:'りょ', roma:'ryo', phonetic:'ɺʲo', audio:'', nbTraits:'4'}],
];

var HIRAGANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ぎゃ', roma:'gya', phonetic:'ɡʲa', audio:'', nbTraits:'9'},
    {jp:'ぎゅ', roma:'gyu', phonetic:'ɡʲɯ', audio:'', nbTraits:'8'},
    {jp:'ぎょ', roma:'gyo', phonetic:'ɡʲo', audio:'', nbTraits:'8'}],

    [{jp:'じゃ', roma:'ja', phonetic:'ɟʑa', audio:'', nbTraits:'6'},
    {jp:'じゅ', roma:'ju', phonetic:'ɟʑɯ', audio:'', nbTraits:'5'},
    {jp:'じょ', roma:'jo', phonetic:'ɟʑo', audio:'', nbTraits:'5'}],

    [{jp:'びゃ', roma:'bya', phonetic:'bʲa', audio:'', nbTraits:'6'},
    {jp:'びゅ', roma:'byu', phonetic:'bʲɯ', audio:'', nbTraits:'5'},
    {jp:'びょ', roma:'byo', phonetic:'bʲo', audio:'', nbTraits:'5'}],

    [{jp:'ぴゃ', roma:'pya', phonetic:'pʲa', audio:'', nbTraits:'5'},
    {jp:'ぴゅ', roma:'pyu', phonetic:'pʲɯ', audio:'', nbTraits:'4'},
    {jp:'ぴょ', roma:'pyo', phonetic:'pʲo', audio:'', nbTraits:'4'}],
];

var KATAKANAS = [
    [{jp:'ア', roma:'a', phonetic:'a', audio:'', nbTraits:'2'},
    {jp:'イ', roma:'i', phonetic:'i', audio:'', nbTraits:'2'},
    {jp:'ウ', roma:'u', phonetic:'ɯ', audio:'', nbTraits:'3'},
    {jp:'エ', roma:'e', phonetic:'e', audio:'', nbTraits:'3'},
    {jp:'オ', roma:'o', phonetic:'o', audio:'', nbTraits:'3'}],

    [{jp:'カ', roma:'ka', phonetic:'ka', audio:'', nbTraits:'2'},
    {jp:'キ', roma:'ki', phonetic:'ki', audio:'', nbTraits:'3'},
    {jp:'ク', roma:'ku', phonetic:'kɯ', audio:'', nbTraits:'2'},
    {jp:'ケ', roma:'ke', phonetic:'ke', audio:'', nbTraits:'3'},
    {jp:'コ', roma:'ko', phonetic:'ko', audio:'', nbTraits:'2'}],

    [{jp:'サ', roma:'sa', phonetic:'sa', audio:'', nbTraits:'3'},
    {jp:'シ', roma:'shi', phonetic:'ɕi', audio:'', nbTraits:'3'},
    {jp:'ス', roma:'su', phonetic:'sɯ', audio:'', nbTraits:'2'},
    {jp:'セ', roma:'se', phonetic:'se', audio:'', nbTraits:'2'},
    {jp:'ソ', roma:'so', phonetic:'so', audio:'', nbTraits:'2'}],

    [{jp:'タ', roma:'ta', phonetic:'ta', audio:'', nbTraits:'3'},
    {jp:'チ', roma:'chi', phonetic:'cɕi', audio:'', nbTraits:'3'},
    {jp:'ツ', roma:'tsu', phonetic:'tsɯ', audio:'', nbTraits:'3'},
    {jp:'テ', roma:'te', phonetic:'te', audio:'', nbTraits:'3'},
    {jp:'ト', roma:'to', phonetic:'to', audio:'', nbTraits:'2'}],

    [{jp:'ナ', roma:'na', phonetic:'na', audio:'', nbTraits:'2'},
    {jp:'ニ', roma:'ni', phonetic:'ni', audio:'', nbTraits:'2'},
    {jp:'ヌ', roma:'nu', phonetic:'nɯ', audio:'', nbTraits:'2'},
    {jp:'ネ', roma:'ne', phonetic:'ne', audio:'', nbTraits:'4'},
    {jp:'ノ', roma:'no', phonetic:'no', audio:'', nbTraits:'1'}],

    [{jp:'ハ', roma:'ha', phonetic:'ha', audio:'', nbTraits:'2'},
    {jp:'ヒ', roma:'hi', phonetic:'hi', audio:'', nbTraits:'2'},
    {jp:'フ', roma:'fu', phonetic:'ɸɯ', audio:'', nbTraits:'1'},
    {jp:'ヘ', roma:'he', phonetic:'he', audio:'', nbTraits:'1'},
    {jp:'ホ', roma:'ho', phonetic:'ho', audio:'', nbTraits:'4'}],

    [{jp:'マ', roma:'ma', phonetic:'ma', audio:'', nbTraits:'2'},
    {jp:'ミ', roma:'mi', phonetic:'mi', audio:'', nbTraits:'3'},
    {jp:'ム', roma:'mu', phonetic:'mɯ', audio:'', nbTraits:'2'},
    {jp:'メ', roma:'me', phonetic:'me', audio:'', nbTraits:'2'},
    {jp:'モ', roma:'mo', phonetic:'mo', audio:'', nbTraits:'3'}],

    [{jp:'ヤ', roma:'ya', phonetic:'ja', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ユ', roma:'yu', phonetic:'jɯ', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヨ', roma:'yo', phonetic:'jo', audio:'', nbTraits:'3'}],

    [{jp:'ラ', roma:'ra', phonetic:'ɺa', audio:'', nbTraits:'2'},
    {jp:'リ', roma:'ri', phonetic:'ɺi', audio:'', nbTraits:'2'},
    {jp:'ル', roma:'ru', phonetic:'ɺɯ', audio:'', nbTraits:'2'},
    {jp:'レ', roma:'re', phonetic:'ɺe', audio:'', nbTraits:'1'},
    {jp:'ロ', roma:'ro', phonetic:'ɺo', audio:'', nbTraits:'3'}],

    [{jp:'ワ', roma:'wa', phonetic:'ɰa', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'ヲ', roma:'o', phonetic:'o', audio:'', nbTraits:'3'}],

    [{jp:'ン', roma:'n', phonetic:'n', audio:'', nbTraits:'2'},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''},
    {jp:'', roma:'', phonetic:'', audio:'', nbTraits:''}],

];

var KATAKANAS_DIACRITICS = [
    [{jp:'ガ', roma:'ga', phonetic:'ga', audio:'', nbTraits:'4'},
    {jp:'ギ', roma:'gi', phonetic:'gi', audio:'', nbTraits:'5'},
    {jp:'グ', roma:'gu', phonetic:'gɯ', audio:'', nbTraits:'4'},
    {jp:'ゲ', roma:'ge', phonetic:'ge', audio:'', nbTraits:'5'},
    {jp:'ゴ', roma:'go', phonetic:'go', audio:'', nbTraits:'4'}],

    [{jp:'ザ', roma:'za', phonetic:'za', audio:'', nbTraits:'5'},
    {jp:'ジ', roma:'ji', phonetic:'ɟʑi', audio:'', nbTraits:'5'},
    {jp:'ズ', roma:'zu', phonetic:'zɯ', audio:'', nbTraits:'4'},
    {jp:'ゼ', roma:'ze', phonetic:'ze', audio:'', nbTraits:'4'},
    {jp:'ゾ', roma:'zo', phonetic:'zo', audio:'', nbTraits:'4'}],

    [{jp:'ダ', roma:'da', phonetic:'da', audio:'', nbTraits:'5'},
    {jp:'ヂ', roma:'(ji)', phonetic:'ɟʑi', audio:'', nbTraits:'5'},
    {jp:'ヅ', roma:'(zu)', phonetic:'dzɯ', audio:'', nbTraits:'5'},
    {jp:'デ', roma:'de', phonetic:'de', audio:'', nbTraits:'5'},
    {jp:'ド', roma:'do', phonetic:'do', audio:'', nbTraits:'4'}],
    
    [{jp:'バ', roma:'ba', phonetic:'ba', audio:'', nbTraits:'4'},
    {jp:'ビ', roma:'be', phonetic:'bi', audio:'', nbTraits:'4'},
    {jp:'ブ', roma:'bu', phonetic:'bɯ', audio:'', nbTraits:'3'},
    {jp:'ベ', roma:'be', phonetic:'be', audio:'', nbTraits:'3'},
    {jp:'ボ', roma:'bo', phonetic:'bo', audio:'', nbTraits:'6'}],
    
    [{jp:'パ', roma:'pa', phonetic:'pa', audio:'', nbTraits:'3'},
    {jp:'ピ', roma:'pi', phonetic:'pi', audio:'', nbTraits:'3'},
    {jp:'プ', roma:'pu', phonetic:'pɯ', audio:'', nbTraits:'2'},
    {jp:'ペ', roma:'pe', phonetic:'pe', audio:'', nbTraits:'2'},
    {jp:'ポ', roma:'po', phonetic:'po', audio:'', nbTraits:'5'}],

];

var KATAKANAS_DIGRAPHS = [
    [{jp:'キャ', roma:'kya', phonetic:'kʲa', audio:'', nbTraits:'5'},
    {jp:'キュ', roma:'kyu', phonetic:'kʲɯ', audio:'', nbTraits:'5'},
    {jp:'キョ', roma:'kyo', phonetic:'kʲo', audio:'', nbTraits:'6'}],

    [{jp:'シャ', roma:'sha', phonetic:'ɕa', audio:'', nbTraits:'5'},
    {jp:'シュ', roma:'shu', phonetic:'ɕɯ', audio:'', nbTraits:'5'},
    {jp:'ショ', roma:'sho', phonetic:'ɕo', audio:'', nbTraits:'6'}],

    [{jp:'チャ', roma:'cha', phonetic:'cɕa', audio:'', nbTraits:'5'},
    {jp:'チュ', roma:'chu', phonetic:'cɕɯ', audio:'', nbTraits:'5'},
    {jp:'チョ', roma:'cho', phonetic:'cɕo', audio:'', nbTraits:'6'}],

    [{jp:'ニャ', roma:'nya', phonetic:'ȵa', audio:'', nbTraits:'4'},
    {jp:'ニュ', roma:'nyu', phonetic:'ȵɯ', audio:'', nbTraits:'4'},
    {jp:'ニョ', roma:'nyo', phonetic:'ȵo', audio:'', nbTraits:'5'}],

    [{jp:'ヒャ', roma:'hya', phonetic:'ça', audio:'', nbTraits:'4'},
    {jp:'ヒュ', roma:'hyu', phonetic:'çɯ', audio:'', nbTraits:'4'},
    {jp:'ヒョ', roma:'hyo', phonetic:'ço', audio:'', nbTraits:'5'}],

    [{jp:'ミャ', roma:'mya', phonetic:'mʲa', audio:'', nbTraits:'5'},
    {jp:'ミュ', roma:'myu', phonetic:'mʲɯ', audio:'', nbTraits:'5'},
    {jp:'ミョ', roma:'myo', phonetic:'mʲo', audio:'', nbTraits:'6'}],

    [{jp:'リャ', roma:'rya', phonetic:'ɺʲa', audio:'', nbTraits:'4'},
    {jp:'リュ', roma:'ryu', phonetic:'ɺʲɯ', audio:'', nbTraits:'4'},
    {jp:'リョ', roma:'ryo', phonetic:'ɺʲo', audio:'', nbTraits:'5'}],
];

var KATAKANAS_DIGRAPHS_DIACRITICS = [
    [{jp:'ギャ', roma:'gya', phonetic:'ɡʲa', audio:'', nbTraits:'7'},
    {jp:'ギュ', roma:'gyu', phonetic:'ɡʲɯ', audio:'', nbTraits:'7'},
    {jp:'ギョ', roma:'gyo', phonetic:'ɡʲo', audio:'', nbTraits:'8'}],

    [{jp:'ジャ', roma:'ja', phonetic:'ɟʑa', audio:'', nbTraits:'7'},
    {jp:'ジュ', roma:'ju', phonetic:'ɟʑɯ', audio:'', nbTraits:'7'},
    {jp:'ジョ', roma:'jo', phonetic:'ɟʑo', audio:'', nbTraits:'8'}],

    [{jp:'ビャ', roma:'bya', phonetic:'bʲa', audio:'', nbTraits:'6'},
    {jp:'ビュ', roma:'byu', phonetic:'bʲɯ', audio:'', nbTraits:'6'},
    {jp:'ビョ', roma:'byo', phonetic:'bʲo', audio:'', nbTraits:'7'}],

    [{jp:'ピャ', roma:'pya', phonetic:'pʲa', audio:'', nbTraits:'5'},
    {jp:'ピュ', roma:'pyu', phonetic:'pʲɯ', audio:'', nbTraits:'5'},
    {jp:'ピョ', roma:'pyo', phonetic:'pʲo', audio:'', nbTraits:'6'}],
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
