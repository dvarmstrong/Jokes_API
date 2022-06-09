const mongoose = require('mongoose');

//Create our jokes schema

const jokesSchema = new mongoose.Schema (
    {
    setup:  String,
    punchline: String
    },
    { timestamps: true }
);

const Jokes = mongoose.model('Jokes', jokesSchema);

//** Export the model*/ 

module.exports = Jokes;