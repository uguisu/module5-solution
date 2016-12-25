(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', 'ErrorMessagResful'];
function MenuService($http, ApiPath, ErrorMessagResful) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  // uguisu Added
  var userInfo = null;
  service.setUserInfo = function(userInfo) {
    service.userInfo = userInfo;
    return "Your information has been saved";
  };
  service.getUserInfo = function() {
    return service.userInfo;
  };

  service.getMenuItemByshortName = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
  };

}



})();
