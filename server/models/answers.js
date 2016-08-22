var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
    text: {type: String,required: true,minlength: 10,maxlength: 200},
    description: { type : String, maxlength : 200 },
    like: { type : Number, default : 0 },
    _question : { type : mongoose.Schema.Types.ObjectId, ref: 'questions' },
    _user : { type : mongoose.Schema.Types.ObjectId, ref: 'users' },
}, {timestamps:true});

mongoose.model('answers', answerSchema);
