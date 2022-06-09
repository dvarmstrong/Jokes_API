const Jokes = require('../models/jokes.model');

//**export functions that perform basic CRUD operations */

//**Get all Jokes */
const getAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json(allJokes);
        })
        .catch((err) => {
            res.json({msg: 'Something went wrong', err: err})
        });
        
}

// **Get a single Joke */
const getOneJoke = (req, res) => {
    Jokes.findOne({_id: req.params.id})
        .then((oneJoke) => {
            res.json(oneJoke);
        })
        .catch((err) => {
            res.json({msg: 'Something went wrong', err: err})
        });

}

// **Create a Joke */
const createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke});
        })
        .catch((err) => {
            res.json({msg: 'Something went wrong', err: err})
        });

}

// **Update a Joke */
const updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedJoke => {
            res.json({joke: updatedJoke});
        })
        .catch ((err) => {
            res.json({msg: 'Something went wrong', err: err})
        });
}


// **Delete a Joke */
const deleteJoke = (req, res) => {
    Jokes.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({msg: 'Joke deleted'});
        })
        .catch((err) => {
            res.json({msg: 'Something went wrong', err: err})
        })
};


module.exports = {
    getAllJokes,
    getOneJoke,
    createJoke,
    updateJoke,
    deleteJoke
}