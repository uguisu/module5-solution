(function() {
  "use strict";

  angular.module('public')
  .controller('ShowUserInfoController', ShowUserInfoController);

  ShowUserInfoController.$inject = ['MenuService', 'userInfo'];
  function ShowUserInfoController(MenuService, userInfo) {
    var showUserInfoCtrl = this;
    showUserInfoCtrl.userInfo = userInfo;

    if(userInfo !== undefined) {
      MenuService.getMenuItemByshortName(userInfo.favoriteItemName).then(
        function (response) {
          showUserInfoCtrl.title = response.data.name;
          showUserInfoCtrl.description = response.data.description;
          showUserInfoCtrl.category_short_name = response.data.category_short_name;
        }
      )
    };

    // showUserInfoCtrl.title = "";
    // showUserInfoCtrl.description="";

  };

})();
