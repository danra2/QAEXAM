var mongoose = require('mongoose');
var User = mongoose.model('users');

module.exports = {
  session : function(req, res) {
    if (!req.session.userId) return res.send({ error : 'not_logged_in'});

    return res.send({ userId : req.session.userId, name : req.session.name });
  },
  index : function(req, res) {
    console.log(req.session);
    User.find(function(err, users) {
      if (err) return res.send(err);

      res.send(users);
    });
  },
  login : function(req, res) {
    if (!req.body.name) return res.send({ error : 'no_name_in_body'});

    User.create(req.body, function(err, newUser) {
      if (err) {
        return User.findOne({ name : req.body.name }, function (err, existingUser){
          req.session.name = existingUser.name;
          req.session.userId = existingUser._id;
          return res.send(existingUser);
        });
      }
      req.session.name = newUser.name;
      req.session.userId = newUser._id;
      return res.send(newUser);
    });
  },
  logout : function(req, res) {
    req.session.destroy();
    res.send({ success : true });
  }
};
