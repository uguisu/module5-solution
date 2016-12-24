(function() {
"use strict";

// https://uguisu-module5.herokuapp.com

angular.module('common', [])
.constant('ApiPath', 'https://uguisu-module5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
