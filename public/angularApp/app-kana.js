(function() {

var BASE_URL = "/angularApp/";
var TEMPLATE_URL = BASE_URL + "templates/";

var app = angular.module('kakikata_kana', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
    function($sP, $uRP) {

    $sP.state('tab-hiraganas', {
        url: '/tab-hiraganas',
        templateUrl: TEMPLATE_URL+"tab-hiraganas.html",
        controller: 'TabHiraganaCtrl',
        resolve: {
        },
    });

    $sP.state('tab-katakanas', {
        url: '/tab-katakanas',
        templateUrl: TEMPLATE_URL+"tab-katakanas.html",
        controller: 'TabKatakanaCtrl',
        resolve: {
        },
    });

    $sP.state('kanas', {
        url: '/{kana}',
        templateUrl: TEMPLATE_URL+"kanas.html",
        controller: 'KanasCtrl',
        resolve: {
        },
    });

    $uRP.otherwise('tab-hiraganas');
}]);

app.factory('kanaUtils', function() {
    service = {};

    service.transpose = function(a) {

        // Calculate the width and height of the Array
        var w = a.length ? a.length : 0,
            h = a[0] instanceof Array ? a[0].length : 0;

        // In case it is a zero matrix, no transpose routine needed.
        if (h === 0 || w === 0) {
            return [];
        }

        /**
         * @var {Number} i Counter
         * @var {Number} j Counter
         * @var {Array} t Transposed data is stored in this array.
         */
        var i, j, t = [];

        // Loop through every item in the outer array (height)
        for (i = 0; i < h; i++) {

            // Insert a new row (array)
            t[i] = [];

            // Loop through every item per item in outer array (width)
            for (j = 0; j < w; j++) {

                // Save transposed data.
                t[i][j] = a[j][i];
            }
        }

        return t;
    };

    service.isExists = function(kana) {

        for(var i=0; i < KANAS.length; i++) {
            for(var j=0; j < KANAS[i].length; j++) {
                for(var k=0; k < KANAS[i][j].length; k++) {
                    if (KANAS[i][j][k].jp == kana) {
                        return true;
                    }
                }
            }
        }

        return false;
    };

    service.stringAsUnicode = function(input) {
        var pad_four = function(input) {
            var l = input.length;
            if (l == 0) return '0000';
            if (l == 1) return '000' + input;
            if (l == 2) return '00' + input;
            if (l == 3) return '0' + input;
            return input;
        }
        var output = [];
        for (var i = 0, l = input.length; i < l; i++)
            //output += '\\u' + pad_four(input.charCodeAt(i).toString(16));
            output.push( (input.charCodeAt(i) + 0x10000).toString(16).slice(1) );
        return output;
    };

    return service;
})

app.factory('hiraganas', ['kanaUtils', function(kanaUtils) {

    var service = {
        hiraganas: HIRAGANAS, // dans le fichier de données
        hiraganasDiacritics: HIRAGANAS_DIACRITICS,
        hiraganasDigraphs: HIRAGANAS_DIGRAPHS,
        hiraganasDigraphsDiacritics: HIRAGANAS_DIGRAPHS_DIACRITICS,

        hiraganasTransposed: kanaUtils.transpose(HIRAGANAS),
        hiraganasDiacriticsTransposed: kanaUtils.transpose(HIRAGANAS_DIACRITICS),
        hiraganasDigraphsTransposed: kanaUtils.transpose(HIRAGANAS_DIGRAPHS),
        hiraganasDigraphsDiacriticsTransposed: kanaUtils.transpose(HIRAGANAS_DIGRAPHS_DIACRITICS),
    };

    return service;
}]);
app.factory('katakanas', ['kanaUtils', function(kanaUtils) {

    var service = {
        katakanas: KATAKANAS, // dans le fichier de données
        katakanasDiacritics: KATAKANAS_DIACRITICS,
        katakanasDigraphs: KATAKANAS_DIGRAPHS,
        katakanasDigraphsDiacritics: KATAKANAS_DIGRAPHS_DIACRITICS,

        katakanasTransposed: kanaUtils.transpose(KATAKANAS),
        katakanasDiacriticsTransposed: kanaUtils.transpose(KATAKANAS_DIACRITICS),
        katakanasDigraphsTransposed: kanaUtils.transpose(KATAKANAS_DIGRAPHS),
        katakanasDigraphsDiacriticsTransposed: kanaUtils.transpose(KATAKANAS_DIGRAPHS_DIACRITICS),
    };

    return service;
}]);

app.controller('TabHiraganaCtrl', ['$scope', 'hiraganas', function($scope, kanas) {

    $scope.kanas = kanas;

    $scope.getHiraganasByLines = function() {
        return kanas.hiraganas;
    };
    $scope.getHiraganasByColumns = function() {
        return kanas.hiraganasTransposed;
    };
    $scope.getHiraganasDiacriticsByLines = function() {
        return kanas.hiraganasDiacritics;
    };
    $scope.getHiraganasDiacriticsByColumns = function() {
        return kanas.hiraganasDiacriticsTransposed;
    };
    $scope.getHiraganasDigraphsByLines = function() {
        return kanas.hiraganasDigraphs;
    };
    $scope.getHiraganasDigraphsByColumns = function() {
        return kanas.hiraganasDigraphsTransposed;
    };
    $scope.getHiraganasDigraphsDiacriticsByLines = function() {
        return kanas.hiraganasDigraphsDiacritics;
    };
    $scope.getHiraganasDigraphsDiacriticsByColumns = function() {
        return kanas.hiraganasDigraphsDiacriticsTransposed;
    };
    $scope.getClassIfHidden = function(kana) {
        return (kana.jp=="" ? "symbol-hidden" : "");
    };
    

}]);

app.controller('TabKatakanaCtrl', ['$scope', 'katakanas', function($scope, kanas) {

    $scope.kanas = kanas;

    $scope.getKatakanasByLines = function() {
        return kanas.katakanas;
    };
    $scope.getKatakanasByColumns = function() {
        return kanas.katakanasTransposed;
    };
    $scope.getKatakanasDiacriticsByLines = function() {
        return kanas.katakanasDiacritics;
    };
    $scope.getKatakanasDiacriticsByColumns = function() {
        return kanas.katakanasDiacriticsTransposed;
    };
    $scope.getKatakanasDigraphsByLines = function() {
        return kanas.katakanasDigraphs;
    };
    $scope.getKatakanasDigraphsByColumns = function() {
        return kanas.katakanasDigraphsTransposed;
    };
    $scope.getKatakanasDigraphsDiacriticsByLines = function() {
        return kanas.katakanasDigraphsDiacritics;
    };
    $scope.getKatakanasDigraphsDiacriticsByColumns = function() {
        return kanas.katakanasDigraphsDiacriticsTransposed;
    };
    $scope.getClassIfHidden = function(kana) {
        return (kana.jp=="" ? "symbol-hidden" : "");
    };
    
}]);

app.controller('KanasCtrl', ['$scope', '$stateParams', 'kanaUtils', '$window', 
    function($scope, $sP, utils, $window) {


    if (!utils.isExists($sP.kana)) {
        $window.history.back();
    }

    $scope.kana = $sP.kana;
    $scope.kanaUnicode = utils.stringAsUnicode($scope.kana);

    if ($scope.kanaUnicode.length < 2)
        $("#svg-kana2-wrapper").css("display", "none");

    var svgKana = Snap("#svg-kana");
    var svgKanaBg = Snap("#svg-kana-bg");
    $scope.svgKana = svgKana;
    $scope.svgKanaBg = svgKanaBg;
    $scope.kanaAnim = null;
    $scope.kanaAnim2 = null;
    $scope.animDuration = 300;
    Snap.load("/angularApp/libs/kanji/0"+$scope.kanaUnicode[0]+".svg", function (f) {

        var g = f.select("g[id^='kvg:0']");
        svgKana.append(g);

        var bbox = g.getBBox();

        g.attr({
            transform: "translate("+(-1*bbox.x + 3)+", 0)",
        });
        svgKana.attr({
            width: bbox.width + 10,
        });
        $("#svg-kana-wrapper").css({width:bbox.width + 10});

        var paths = g.selectAll("path");

        var g_bg = g.clone();
        svgKanaBg.append(g_bg);

        $scope.kanaAnim = new Vivus('svg-kana', {type:'oneByOne', duration: $scope.animDuration, dashGap:0}, function(anim){
            // animation finie
            $(anim.el).css("stroke-linecap", "round");
            $("#svg-kana-bg").css("display", "none");
            if ($scope.kanaAnim2)
                $scope.kanaAnim2.play();
        });
    });

    if ($scope.kanaUnicode.length >= 2) {

        var svgKana2 = Snap("#svg-kana2");
        var svgKana2Bg = Snap("#svg-kana2-bg");
        $scope.svgKana2 = svgKana2;
        $scope.svgKana2Bg = svgKana2Bg;
        Snap.load("/angularApp/libs/kanji/0"+$scope.kanaUnicode[1]+".svg", function (f) {

            var g = f.select("g[id^='kvg:0']");
            svgKana2.append(g);

            var bbox = g.getBBox();

            g.attr({
                transform: "translate("+(-1*bbox.x + 3)+", 0)",
            });
            svgKana2.attr({
                width: bbox.width + 10,
            });
            $("#svg-kana2-wrapper").css({width:bbox.width + 10});

            var paths = g.selectAll("path");

            var g_bg = g.clone();
            svgKana2Bg.append(g_bg);

            $scope.kanaAnim2 = new Vivus('svg-kana2', {type:'oneByOne', duration: $scope.animDuration, start: "manual", dashGap:0}, function(anim){
                // animation finie
                $(anim.el).css("stroke-linecap", "round");
                $("#svg-kana2-bg").css("display", "none");
            });

        });

    }


}]);

})();
