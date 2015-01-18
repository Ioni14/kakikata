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

    service.getKana = function(kana) {

        for(var i=0; i < KANAS.length; i++) {
            for(var j=0; j < KANAS[i].length; j++) {
                for(var k=0; k < KANAS[i][j].length; k++) {
                    if (KANAS[i][j][k].jp == kana) {
                        return KANAS[i][j][k];
                    }
                }
            }
        }

        return null;
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


    $scope.kana = utils.getKana($sP.kana);

    if ($scope.kana == null) {
        $window.history.back();
    }

    $scope.kanaUnicode = utils.stringAsUnicode($scope.kana.jp);

    if ($scope.kanaUnicode.length < 2)
        $("#svg-kana2-wrapper").css("display", "none");

    var svgKana = Snap("#svg-kana");
    var svgKanaBg = Snap("#svg-kana-bg");
    $scope.svgKana = svgKana;
    $scope.svgKanaBg = svgKanaBg;
    $scope.kanaAnim = null;
    $scope.kanaAnim2 = null;
    $scope.animDuration = 300;
    $scope.snapFiles = [];
    var creationGrilleTraits = false;

    var creerGrilleTraits = function() {

        var paths = $scope.snapFiles[0].paths;
        var texts = $scope.snapFiles[0].texts;

        // génération de la grille d'écriture
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i].clone();
            var text = texts[i].clone();

            if ( $("#grille_traits #trait_"+i).length <= 0 ) {
                $("#grille_traits").append("<div id='trait_"+i+"' class='grille_trait_wrapper' >"+
                    "<div class='grille_trait trait_kana1'><svg class='svg_animation' height='109' version='1.1' width='109' xmlns='http://www.w3.org/2000/svg'><g class='trait_path_bg'></g><g class='trait_path'></g><g class='trait_text'></g></svg></div>" +
                    "<div class='grille_trait trait_kana2'><svg class='svg_animation' height='109' version='1.1' width='109' xmlns='http://www.w3.org/2000/svg'><g></g></svg></div>"+
                    "</div>");
            }
            var traitKana = Snap("#grille_traits #trait_"+i+" .trait_kana1");
            var traitKana_gTrait_path = traitKana.select("g.trait_path");
            var traitKana_gTrait_text = traitKana.select("g.trait_text");
            traitKana_gTrait_path.append(path);
            traitKana_gTrait_text.append(text);

            // on affiche les traits déjà dessinés
            for (var j = 0; j < i; j++) {
                var path_bg = paths[j].clone();
                path_bg.attr({
                    class: "trait_bg"
                });
                traitKana.select("g.trait_path_bg").append(path_bg);
            }

/*
            var bbox_path = path.getBBox();
            path.attr({
                transform: "translate("+(-1*bbox.x + 3)+", 0)",
            });
            traitKana.attr({
                width: bbox.width + 10,
            });
*/
        }
    }

    Snap.load("/angularApp/libs/kanji/0"+$scope.kanaUnicode[0]+".svg", function (f) {

        var g = f.select("g[id^='kvg:0']");

        $scope.snapFiles[0] = {
            paths:g.clone().selectAll("path"), 
            texts:f.selectAll("g[id^='kvg:StrokeNumbers'] text")
        };

        svgKana.append(g);

        var bbox = g.getBBox();

        g.attr({
            transform: "translate("+(-1*bbox.x + 3)+", 0)",
        });
        svgKana.attr({
            width: bbox.width + 10,
        });
        $("#svg-kana-wrapper").css({width:bbox.width + 10});

        var g_bg = g.clone();
        svgKanaBg.append(g_bg);

        // si tous mes svg ont été chargés
        if ($scope.snapFiles.length == $scope.kanaUnicode.length && !creationGrilleTraits) {
            creationGrilleTraits = true;
            creerGrilleTraits();
        }

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

            $scope.snapFiles[1] = f;

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

            var g_bg = g.clone();
            svgKana2Bg.append(g_bg);

            // si tous mes svg ont été chargés
            if ($scope.snapFiles.length == $scope.kanaUnicode.length && !creationGrilleTraits) {
                creationGrilleTraits = true;
                creerGrilleTraits();
            }

            $scope.kanaAnim2 = new Vivus('svg-kana2', {type:'oneByOne', duration: $scope.animDuration, start: "manual", dashGap:0}, function(anim){
                // animation finie
                $(anim.el).css("stroke-linecap", "round");
                $("#svg-kana2-bg").css("display", "none");
            });

        });

    }


}]);

})();
