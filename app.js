var app = angular.module('PiFm', ['ngRoute']); // ngRoute (dependance angular)
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'RadiosCtrl'
        })
            .when('/:radio', {
            templateUrl: 'partials/home.html',
            controller: 'RadiosCtrl'
        })
            .otherwise({ redirectTo: '/' });
    }]);
app.controller('RadiosCtrl', function ($scope) {
    $scope.radios = [
        {
            "id": "1",
            "name": "RTL 2",
            "short_name": "rtl2",
            "url": "http://streaming.radio.rtl2.fr/rtl2-1-48-192",
            "logo_src": "rtl2.jpg",
            "style": "Pop-Rock"
        },
        {
            "id": "2",
            "name": "Latitude",
            "short_name": "latitude",
            "url": "http://latitude.ice.infomaniak.ch/latitude-128.mp3",
            "logo_src": "latitude.png",
            "style": "Pop Electro"
        },
        {
            "id": "3",
            "name": "NRJ",
            "short_name": "nrj",
            "url": " http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=fluxradios",
            "logo_src": "nrj.jpg",
            "style": "Pop-Rock"
        },
        {
            "id": "4",
            "name": "Nostalgie",
            "short_name": "nostalgie",
            "url": "http://cdn.nrjaudio.fm/adwz1/fr/30699/mp3_128.mp3?origine=fluxradios",
            "logo_src": "nostalgie.jfif",
            "style": "Pop-Rock"
        },
        {
            "id": "5",
            "name": "Funradio",
            "short_name": "funradio",
            "url": "http://streaming.radio.funradio.fr/fun-1-48-192",
            "logo_src": "funradio.png",
            "style": "Pop-Rock"
        },
        {
            "id": "6",
            "name": "RTL",
            "short_name": "rtl",
            "url": " http://streaming.radio.rtl.fr/rtl-1-48-192",
            "logo_src": "rtl.png",
            "style": "Pop-Rock"
        },
        {
            "id": "7",
            "name": "Rire et Chanson",
            "short_name": "rireetchanson",
            "url": "http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=fluxradios",
            "logo_src": "rireetchanson.jfif",
            "style": "Pop-Rock"
        },
        {
            "id": "8",
            "name": "Cherie FM",
            "short_name": "cheriefm",
            "url": "  http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=fluxradios",
            "logo_src": "cheriefm.jpg",
            "style": "Pop-Rock"
        },
        {
            "id": "9",
            "name": "SkyRock",
            "short_name": "skyrock",
            "url": "http://icecast.skyrock.net/s/natio_mp3_128k",
            "logo_src": "skyrock.png",
            "style": "Rap RnB"
        },
        {
            "id": "10",
            "name": "Virgin Radio",
            "short_name": "virginradio",
            "url": "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3",
            "logo_src": "virginradio.png",
            "style": "Pop-Rock"
        },
        {
            "id": "11",
            "name": "Oui FM",
            "short_name": "ouifm",
            "url": "http://stream.ouifm.fr/ouifm-high.aac",
            "logo_src": "ouifm.svg",
            "style": "Pop-Rock"
        }
    ];
    /* traitement à effectuer au chargement de la page */
    var main = document.querySelector('main > ul');
    var controls = document.querySelector('#controls');
    $scope.$watch('$viewContentLoaded', function () {
        main.style.marginBottom = controls.offsetHeight + 'px';
    });
    /* Controls */
    $scope.changeRadio = function (e, id) {
        e.preventDefault();
        console.log(id);
    };
});
