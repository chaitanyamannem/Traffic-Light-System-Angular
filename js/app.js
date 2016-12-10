var app = angular.module('trafficLightSystem', ['ui.bootstrap']);

app.run(function () {

})


app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>'

        })
        .otherwise('/home')

});
