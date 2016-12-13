var app = angular.module("fitApp", []);

app.controller("LoginController", function($scope, $http, $window, CheckAuth) {

    console.log("LoginController here!");
    CheckAuth.delete();
    $scope.loginclick = function() {
        $scope.passwordErr = false;
        $scope.usernameErr = false;
        $scope.usernameExistErr = false;
        $scope.incorrectPass = false;
        if ($scope.password == "" || $scope.password == undefined) {
            $scope.passwordErr = true;
        }

        if ($scope.username == "" || $scope.username == undefined) {
            $scope.usernameErr = true;

        }

        if ($scope.usernameErr || $scope.passwordErr)
            return;
        console.log($scope.username);
        console.log($scope.password);
        var req = {
            method: 'POST',
            url: 'https://fitnodeapp.herokuapp.com/auth',
            data: { username: $scope.username, password: $scope.password }
        }

        $http(req).then(function(response) {

            if (response.data != undefined && response.data.auth != undefined && response.data.auth === false) {
                $scope.usernameExistErr = true;
            } else if (response.data != undefined && response.data.auth != undefined && typeof response.data.auth === "number") {
                CheckAuth.setVal(response.data.auth);
                $window.location.href = '/home';

            } else if (response.data != undefined && response.data.auth != undefined && response.data.auth === 'INCORRECT') {
                $scope.incorrectPass = true;
            }

        }, function(response) {
            console.log("failure");
        });

    }

});

app.controller("HomeController", function($scope, $http, $window, CheckAuth) {

    console.log("HomeController here!")
        //    / console.log(CheckAuth.getVal());
    var data = CheckAuth.getVal().then(function(data) {
        if (data == null || data == "") {
            $window.location.href = '/login';
        } else {
            $scope.data = data[0];
            $scope.datas = data[0].data;
            $scope.datas2 = data[0].data;
            $scope.datas3 = data[0].data;
            $scope.data.FullName = data[0].name;
            $scope.data.name = $scope.data.FullName.split(' ')[0];
            $scope.data.weight = $scope.data.data[0].weight;
            $scope.data.gender = $scope.data.gender == "M" ? "Male" : "Female";
            $scope.data['idealbodyage'] = $scope.data.age;
            $scope.data['idealbodyweight'] = $scope.devine($scope.data.gender == 'Male', $scope.data.height);
            $scope.data['idealfat'] = $scope.data.gender == 'Male' ? '14% to 17%' : '21% to 24%';
        }
    }, function(data) {
        $window.location.href = '/login';
    });

    $scope.logout = function() {
        $window.location.href = '/login';
    }

    $scope.devine = function(isman, height) {
        var heightinches = height / 2.54;
        var excessheight = heightinches - 60; //Ignore 5 feet.
        var weight = 2.3 * excessheight;
        if (isman) {
            weight += 50;
        } else {
            weight += 45.5;
        }
        return weight.toFixed(1);
    }


});

app.factory("CheckAuth", function($window, $http, $q) {

    return {
        getVal: function() {
            var deferred = $q.defer();
            var key = window.sessionStorage.getItem('key');
            $window.sessionStorage.removeItem('key');
            if (!isNaN(Number(key))) {
                var req = {
                    method: 'POST',
                    url: 'https://fitnodeapp.herokuapp.com/GetData',
                    data: { 'key': key }
                }
                $http(req).then(function(response) {
                    deferred.resolve(response.data);
                }, function(response) {
                    //console.log("Error in getdata call");
                    deferred.reject(null);

                });
            }
            return deferred.promise;
        },
        setVal: function(value) {
            $window.sessionStorage.setItem('key', value);
        },
        delete: function() {
            $window.sessionStorage.removeItem('key');
        }
    };

});

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/images/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}());