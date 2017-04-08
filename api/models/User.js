var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  firstName: String,
  lastName: String,
  admin: { type: Boolean, default: false },
  recipes: [{ type: schema.Types.ObjectId, ref: 'Recipe' }],
  image: String
})

//add bcrypt hashing to model
userSchema.plugin(require('mongoose-bcrypt'))

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
userSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
