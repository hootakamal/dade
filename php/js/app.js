angular.module("myApp",['ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    "main":{templateUrl:"templates/main.html"
                    }
                }
            })
            .state("app.home",{
                url:"/home",
                views:{
                    "content":{templateUrl:"templates/home.html"
                    }
                }
            })
            .state("app.store",{
                url:"/store",
                views:{
                    "content":{templateUrl:"templates/store.html",

                    }
                }
            })

            .state("store.elect",{
                url:"/elect",
                views:{
                    "store":{template:"<h1>templates/store.html</h1>",

                    }
                }
            })
            .state("store.cloth",{
                url:"/cloth",
                views:{
                    "store":{template:"<h1>templates/cloth.html</h1>",

                    }
                }
            })





        $urlRouterProvider.otherwise("/app/home");

    })

