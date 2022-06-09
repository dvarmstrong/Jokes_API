const mongoose  = require('mongoose');

//  connection to the mongoDb
mongoose.connect ('mongodb://Localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Something went wrong', err));