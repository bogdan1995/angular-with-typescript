/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    var main = angular.module('productManagement', ['ngRoute',
        'common.services',
        'productResourceMock']);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
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
})(app || (app = {}));
