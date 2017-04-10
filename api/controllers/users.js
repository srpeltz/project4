var User = require("../models/User")


function index(req, res) {
  User.find({}, function(err, users) {
    if(err) res.status(404).send(err)
    res.status(200).send(users)
  })
}

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  console.log(req.body)
  User
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function me(req, res, next) {
  User
    .findOne({email: req.decoded.email}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};




module.exports = {
  index: index,
  create: create,
  me: me
}
