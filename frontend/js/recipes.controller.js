angular.module('Recipes')
  .controller('RecipesController', RecipesController)

RecipesController.$inject = ['RecipeFactory']

function RecipesController(RecipeFactory) {
  var self = this
  self.loading = true

  RecipeFactory.index()
    .success(function(data) {
      self.allRecipes = JSON.parse(data.body)
      // console.log(self.allRecipes)
    })
}
