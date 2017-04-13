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
  self.deleteUser = deleteUser

  function getUser(user) {
    $http
    //calls api to get user info
      .get('/api/me')
    //once call is complete get user info
      .then(function(res) {
        // console.log(res.data.user)
        self.currentUser = res.data.user
      })
  }
  getUser()

  function setUser(user) {
    self.currentUser = user
    // console.log(self.currentUser)
  }

  function updateUser(user) {
    $http
      .patch('/api/me', self.currentUser)
      .then(function(res) {
        getUser()
        console.log(res.data)
      })
      self.currentUser = {}
  }

  function deleteUser(user) {
    $http
      .delete('/api/me')
      .then(function(res) {
          getUser()
      })
  }

}
