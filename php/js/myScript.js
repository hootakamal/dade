
var app=angular.module('myApp',['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);



app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: "templates/main.html"
        })
        .state('ahajes', {
            url: '/ahajes',
            templateUrl: "templates/ahajes.html",
            controller:"ahajesCtrl"

        })

        .state('foraa', {
            url: '/foraa',
            templateUrl: "templates/foraa.html"


        })
        .state('estalam', {
            url: '/estalam',
            templateUrl: "templates/estalam.html",
            controller:"estalamCtrl"


        })

        .state('contact', {
            url: '/contact',
            templateUrl: "templates/contact.html",
            controller:"contaicCtrl"

        })
        .state('login', {
            url: '/login',
            templateUrl: "templates/login.html",
            controller:"loginCtrl"

        })
        .state('manger', {
            url: '/manger',
            templateUrl: "templates/manger.html",
            controller:"mangerCtrl"
        })
        .state('maneger2', {
            url: '/maneger2',
            templateUrl: "templates/maneger2.html",
            controller:"manger2Ctrl"
        })
        .state('hajeses', {
            url: '/hajeses',
            templateUrl: "templates/hajeses.html",
            controller:"hajesesCtrl"

        })

    ;

    $urlRouterProvider.otherwise("/");

});



/**start controller get all my car***/

app.controller("ahajesCtrl",function ($scope,$rootScope,$http,$state) {

        $http.get("http://localhost/api/getcar.php")
            .then(function (resp) {
                $scope.getcar = resp.data;
            })
    
    $scope.openpuy=function () {
        $state.go("hajeses");
    }

});

/**end controller get all my car***/

/**start controller is request order**/
app.controller('hajesesCtrl',function($scope,$rootScope,$http){


    $scope.onsubmit=function () {

        $http.post("http://localhost/api/order.php",{name:$scope.name,
                                                address:$scope.address,
                                                email:$scope.email,
                                                type:$scope.type,
                                                phone:$scope.phone,
                                                wwork:$scope.wwork,
                                                numcard:$scope.numcard,
                                                numaccount:$scope.numaccount,
                                                time1:$scope.time1
        })
            .then(function (status) {
                if(status.data.a==1){

                    alert("تم تاكيد حجزك ستصلك السيارة في خلال 24 ساعه القادمة");

                }else{

                    alert("رصيدك البنكي غير كافي للعمليه الطلب");

                }

                }
            );
    }

});

/**end controller is request order**/

/**start controller get request order**/

app.controller('estalamCtrl',function($scope,$rootScope,$http){

    $scope.estelam=function () {

        $http.post("http://localhost/api/getEstelam.php",{number:$scope.number,

        })
            .then(function (resp) {
                $scope.estelam = resp.data;
            });
    }

});

/**end controller get request order*  */

/**start controller post msg**/

app.controller('contaicCtrl',function($scope,$rootScope,$http){


    $scope.requestmsg=function () {

        $http.post("http://localhost/api/postmsg.php",{name:$scope.name,
            email:$scope.email,
            msg:$scope.msg

        })
            .then(function ($result) {
                alert("تم ارســال رسالتك! سنرد عليك خلال 24 ساعه القادمة");
                $scope.name="";
                $scope.email="";
                $scope.msg="";

            });
    }

});

/**end controller post msg**/

app.controller("loginCtrl",function ($scope,$rootScope,$http,$state) {
      
    $scope.login=function () {
        if($scope.user == "a" && $scope.pass == "a"){

            $state.go("manger");
        }else if($scope.user=="m" && $scope.pass == "m") {
            $state.go("maneger2");

        }else {
            alert("اعد كتابه اسم المستخدم وكلمه المرور بطريقه صحيحه");
        }

    }
    

});
//*****/

app.controller("mangerCtrl",function ($scope,$rootScope,$http) {

      $scope.hajes=function () {
          $scope.search2="عرض التعليقات";
          $scope.search1="";
          $http.get("http://localhost/api/getorder.php")
              .then(function (resp) {
                  $scope.hejsee = resp.data;
              })
      }

    $scope.comunt=function () {
        $scope.search2="";
        $scope.search1="طلبـــات الحجز ";
        $http.get("http://localhost/api/getComment.php")
            .then(function (resp) {
                $scope.comment = resp.data;
            })

    }



});

/**start controller **/

app.controller("manger2Ctrl",function ($scope,$rootScope,$http) {

    $scope.hajes=function () {
        $scope.search3="الحساب";
        $scope.search2="عرض التعليقات";
        $scope.search1="";
        $http.get("http://localhost/api/getorder.php")
            .then(function (resp) {
                $scope.hejsee = resp.data;
            })
    }

    $scope.comunt=function () {
        $scope.search2="";
        $scope.search3="الحساب";
        $scope.search1="طلبـــات الحجز ";
        $http.get("http://localhost/api/getComment.php")
            .then(function (resp) {
                $scope.comment = resp.data;
            })

    }

    $scope.comunt1=function () {
        $scope.search2="التعليقات";
        $scope.search3="";
        $scope.search1="طلبـــات الحجز ";
        $http.get("http://localhost/api/getaccount.php")
            .then(function (resp) {
                $scope.comment1 = resp.data;
            })

    }


});

