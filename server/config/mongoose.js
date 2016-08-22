var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    models_path = path.join(__dirname, "../models"),
    reg = new RegExp(".js$", "i"),
    dbURI = 'mongodb://localhost/mini_store';

mongoose.connect(dbURI);
mongoose.connection.on('connection', function() {
  console.log( 'Mongoose default connection open to' + dbURI);
})
mongoose.connection.on('error', function(err) {
  console.log( 'Mongoose default connection error ' + err);
})
mongoose.connection.on('disconnected', function() {
  console.log( 'Mongoose default disconnection ' + dbURI);
})
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
