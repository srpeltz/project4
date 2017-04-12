var express = require('express')
var http = require('request')


function index(req, res) {
  //var recipeData = []
  //then instead of json do recipeData.push
  //after that do res.json(recipeData)
  http('https://mise-api.herokuapp.com/recipes',
   function(err, response, body) {
    if (err) throw err
    console.log(response)
    res.json(response)
  })
}


module.exports = {
  index: index
}
