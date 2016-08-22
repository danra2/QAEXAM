var mongoose = require('mongoose')
var answers = require('./../controllers/answers.js');
var questions = require('./../controllers/questions.js');
var users = require('./../controllers/users.js');


module.exports = function(app) {
  app.post('/users', users.login);
  app.get('/users', users.index)
  app.get('/users/session', users.session);
  app.post('/users/logout', users.logout);

  app.get('/answers', answers.index)
  app.put('/answers/:id/like', answers.like)
  app.post('/answers', answers.create)
  app.get('/answer/:id', answers.findOne)

  app.post('/questions', questions.create)
  app.get('/questions', questions.index)
  app.get('/question/:id', questions.findOne)
}
