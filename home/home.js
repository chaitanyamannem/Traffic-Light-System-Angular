angular.module('trafficLightSystem').component('home', {
    templateUrl: '/home/home.html',
    controller: function ($interval, automate) {

        console.log("In Controller");

        $interval(automatedLights, 1000);

        console.log("crossed interval");

        var lightData = {
            message: 'Intiating the Traffic System'
        };

        //this helps in solving data binding issue
        this.data = lightData;


        function automatedLights() {
            console.log("in automatedLights");
            console.log(lightData.message);
            lightData.message = automate.automatedLights();
        }



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
