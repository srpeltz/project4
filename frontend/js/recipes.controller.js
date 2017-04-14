//********you only put the ", []" in "angular.module('Recipes', [])" if you put the controller in your app.js********//
angular.module('Recipes')
  .controller('RecipesController', RecipesController)

RecipesController.$inject = ['RecipeFactory']

function RecipesController(RecipeFactory) {
  var self = this
  self.loading = true

  RecipeFactory.index()
    .success(function(data) {
      self.allRecipes = JSON.parse(data.body)
      self.loading = false
      // console.log(self.allRecipes)
    })

  self.showRecipe = function(recipe) {
    self.loading = true
    // console.log('loading initial recipe info...')
    RecipeFactory.show(recipe)
      .success(function(data) {
        // console.log("getting data...")
          self.selectedRecipe = JSON.parse(data.body)
          // console.log("Grabbing recipe from list")
          console.log(self.selectedRecipe)
      })
  }
}
