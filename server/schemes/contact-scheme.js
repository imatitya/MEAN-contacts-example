var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contact_schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

var Contact = mongoose.model('Contact', contact_schema);

module.exports = Contact