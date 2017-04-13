var express           = require('express')
var router            = express.Router()
var bodyParser        = require('body-parser')
var methodOverride    = require('method-override')

var usersController   = require('../controllers/users')
var recipesController = require('../controllers/recipes')
var token             = require('./token_auth')


//users routes
router.route('/api/users')
  .get(usersController.index)
  .post(usersController.create)
router.route('/api/token')
  .post(token.create)
router.route('/api/me')
  .get(token.authenticate, usersController.me)
  .patch(token.authenticate, usersController.update)
  .delete(token.authenticate, usersController.destroy)

//Recipes API routes
router.route('/api/recipes')
  .get(recipesController.index)


  module.exports = router
