(function() {
  "use strict";

  angular
    .module("Recipes")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$log", "authService"];

  function NavbarController($log, authService) {
    var vm = this;

    vm.authService = authService;

    $log.info("NavbarController loaded!");
  }
})();
