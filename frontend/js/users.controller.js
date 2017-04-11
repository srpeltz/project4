angular.module('Recipes')
  .controller('UsersController', UsersController)

UsersController.$inject = ['$http']

function UsersController($http) {
  var self = this;
  self.all = []
  self.getUser = getUser
  self.setUser = setUser
  self.updateUser = updateUser
  self.currentUser = {}

  function getUser(user) {
    $http
    //calls api to get user info
      .get('http://localhost:3000/api/me')
    //once call is complete get user info
      .then(function(res) {
        // console.log(res.data.user)
        self.currentUser = res.data.user
      })
  }
  getUser()

  function setUser(user) {
    self.currentUser = user
  }

  function updateUser(user) {
    $http
      .patch('http://localhost:3000/api/me', self.currentUser)
      .then(function(res) {
        getUser()
        console.log(res.data)
      })
      self.currentUser = {}
  }



}
