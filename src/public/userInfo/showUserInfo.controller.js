(function() {
  "use strict";

  angular.module('public')
  .controller('ShowUserInfoController', ShowUserInfoController);

  ShowUserInfoController.$inject = ['MenuService', 'userInfo'];
  function ShowUserInfoController(MenuService, userInfo) {
    var showUserInfoCtrl = this;
    showUserInfoCtrl.userInfo = userInfo;
  };

})();
