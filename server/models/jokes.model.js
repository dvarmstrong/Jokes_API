const mongoose = require('mongoose');

//Create our jokes schema

const jokesSchema = new mongoose.Schema ({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    createdAt: {
        type: Date, default:Date.now //?Is this the right way to do this?
    },
    updatedAt: {
        type: Date, default:Date.now //?Is this the right way to do this?
    }
});

const Jokes = mongoose.model('Jokes', jokesSchema);

//** Export the model*/ 

module.exports = Jokes;