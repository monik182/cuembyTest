(function () {
  'use strict';

  angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

      var index = {
        name: 'index',
        url: '/index',
        templateUrl: '../index.html'
      }

      $stateProvider.state(index);

      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('index');
      });

    });

})();
