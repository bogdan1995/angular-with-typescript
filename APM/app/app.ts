/// <reference path="../typings/tsd.d.ts" />

module app {
    var main = angular.module('productManagement',
        ['ngRoute',
            'common.services',
            'productResourceMock']);

    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig ($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when('/productList', {
                templateUrl: "/[angular-with-typescript]/APM/app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when('/productDetail/:productId', {
                templateUrl: "/[angular-with-typescript]/APM/app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            })
            .otherwise('/productList');
    }
}
