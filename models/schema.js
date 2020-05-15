var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    another_string: { type: String, lowercase: true,  trim: true },
    a_date: Date
})

var breakfastSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        required: [true, 'Why no eggs?']
    },
    drink: {
        type: String, 
        enum: ['Coffee', 'Tea', 'Water']
    }
})


// compile model from schema

var instanceA = new SomeModel({a_string: 'haha'});
instanceA.save(function(err) {
    if (err) return handleError
})

// the following methond is the same as the above
SomeModel.create({ name: 'also_awesome'}, function (err, awesome_instance) {
    if (err) return handleError(err);
});

module.exports = mongoose.model('SomeModel', SomeModelSchema);