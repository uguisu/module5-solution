(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
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
  var userInfo = {};
  service.saveUserInfo = function(userInfo) {
    service.userInfo = userInfo;

    console.log(service.userInfo);

    return "Your information has been saved";
  }

  service.getMenuItemByshortName = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
      .then(
        function (response) {
          return response.data;
        },
        function (error) {

          console.log(error);

          alert("No such menu number exists");
          return null;
        });
  }

}



})();
