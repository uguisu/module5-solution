(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['menuCategories', 'MenuService'];
function SignUpController(menuCategories, MenuService) {
  var signUpCtrl = this;

  signUpCtrl.savedMsg = "";
  signUpCtrl.menuCategories = menuCategories;

  signUpCtrl.submit = function() {

    // Declare an object for transfer user information
    var userInfo = {};
    userInfo.firstName = signUpCtrl.firstName;
    userInfo.lastName = signUpCtrl.lastName;
    userInfo.email = signUpCtrl.email;
    userInfo.phone = signUpCtrl.phone;
    userInfo.favoriteItemName = signUpCtrl.favoriteItemName;

    // If everything is valid, save the user's preference somewhere in your client app such
    // that you can retrieve it in another view/component/controller/etc.
    // (Hint: think service). Once saved, display a message below the form saying `Your information has been saved`.
    var returnMsg = "";
    returnMsg = MenuService.setUserInfo(userInfo);
    signUpCtrl.savedMsg = returnMsg;
    // alert(returnMsg);

    // Retrieve the menu item the user specified as their favorite
    MenuService.getMenuItemByshortName(signUpCtrl.favoriteItemName)
    .then(
      function (response) {
        signUpCtrl.errorFlg = false;
      },
      function (error) {
        signUpCtrl.errorFlg = true;
      });
  }


}

})();
