var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('dotenv').load();

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = process.env.DB_USER;
var password = process.env.DB_PASS;
var address = process.env.DB_ADDR; connect();

// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + '@' + address;
  mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}
