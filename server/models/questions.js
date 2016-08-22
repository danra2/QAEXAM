var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 10, maxlength: 500 },
  description: { type: String, maxlength: 500 },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  _answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'answers' }]
}, { timestamps: true });

mongoose.model('questions', questionSchema);
