var express     = require('express')
var logger      = require('morgan')
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose')
var path        = require('path')
var cors        = require('cors')
var port        = process.env.PORT || 3000
var app         = express()

//use a .env file to hide sensitive environment variables
require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/recipes')

var routes = require('./config/routes')

app.use(cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//validate content-type
app.use(validateContentType)

app.use(routes)

app.use(addFailedAuthHeader)

app.listen(port, function() {
  console.log('server is ⚡️  on port ' + port)
})

function validateContentType(req, res, next) {
  var methods = ['PUT', 'PATCH', 'POST']
  if (                                    // If the request is
    methods.indexOf(req.method) !== -1 && // one of PUT, PATCH or POST, and
    Object.keys(req.body).length !== 0 && // has a body that is not empty, and
    !req.is('json')                       // does not have an application/json
  ) {                                     // Content-Type header, then …
    var message = 'Content-Type header must be application/json.';
    res.status(400).json(message);
  } else {
    next();
  }
}

// When there is a 401 Unauthorized, the repsonse shall include a header
// WWW-Authenticate that tells the client how they must authenticate
// their requests.
function addFailedAuthHeader(err, req, res, next) {
  var header = {'WWW-Authenticate': 'Bearer'};
  if (err.status === 401) {
    if (err.realm) header['WWW-Authenticate'] += ` realm="${err.realm}"`;
    res.set(header);
  }
  next(err);
}
