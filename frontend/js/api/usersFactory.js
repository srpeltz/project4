angular.module('Recipes')
  .factory('UsersFactory', UsersFactory)

UsersFactory.$inject = ['$http']

function UsersFactory($http) {

  return {
    me: me
  }

  function me(user) {
    return $http.get('/api/me')
    console.log(user)
  }
}
