angular.module('trafficLightSystem').component('home', {
    templateUrl: '/home/home.html'
    , controller: function ($interval, automate) {
             
        var lightData = {
            message: 'Intiating the Traffic System',
            red: 'on', 
            yellow: 'off',
            green: 'off'
        };
        //this helps in solving data binding issue
        this.data = lightData;

       function startRedLight(showRed) {
            lightData.red = automate.automatedLights(showRed);
        }

        function startYellowLight(showOrange) {
            lightData.yellow = automate.automatedLights(showOrange);
        }
        
        function startGreenLight(showGreen) {
            lightData.green = automate.automatedLights(showGreen);
        };
         function stop() {
            startRedLight("on");
            startYellowLight("off");
            startGreenLight("off");
        }

        function getReady() {
            startRedLight("off");
            startYellowLight("on");
            startGreenLight("off");
        }

        function move() {
            startRedLight("off");
            startYellowLight("off");
            startGreenLight("on");
        }
     
        $interval(stop, 5000);
        $interval(getReady, 7000);
        $interval(move, 9000);
    }
});