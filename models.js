const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var sortAnswer = function(a, b) {
    if(b.votes === a.votes){
        return b.updatedAt - a.updatedAt;
    }
    return b.votes - a.votes;
};

const AnswerSchema = new Schema({
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    votes: { 
        type: Number,
        default: 0
    }
});

AnswerSchema.method('update', (updates, callback) => {
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
});

AnswerSchema.method('vote', (vote, callback) => {
   if(vote === 'up'){
       this.votes += 1;
   } else {
       this.votes -= 1;
   }
   this.parent().save(callback);
});

const QuestionSchema = new Schema({
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    answers: [AnswerSchema]
});

QuestionSchema.pre('save', (next) => {
    this.answers.sort(sortAnswer);
    next();
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;