angular.module('trafficLightSystem').component('home', {
    templateUrl: '/home/home.html',
    controller: function () {

        console.log("In Controller");

        this.message = "Intiating the Traffic System";

        this.startRedLight = function () {
            this.message = "red";
        };

        this.startYellowLight = function () {
            this.message = "yellow";
        };

        this.startGreenLight = function () {
            this.message = "green";
        };
    }
})
