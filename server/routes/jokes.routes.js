const JokesController = require('../controller/jokes.controller');

//**  All the module exports */
module.exports = app  => {

    app.get("/api/jokes", JokesController.getAllJokes);
    app.post("/api/jokes", JokesController.createJoke);
    app.get("/api/jokes/:id", JokesController.getOneJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);




};