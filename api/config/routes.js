var express         = require('express')
var router          = express.Router()
var bodyParser      = require('body-parser')
var methodOverride  = require('method-override')

var usersController = require('../controllers/users')
var token           = require('./token_auth')

module.exports = router

//users routes
router.route('/api/users')
  .post(usersController.create)
router.route('/api/token')
  .post(token.create)
router.route('/api/me')
  .get(token.authenticate, usersController.me)
