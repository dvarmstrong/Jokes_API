const express = require('express');
const app = express();


app.use(express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config');

const AllMyRoutes = require('./routes/jokes.routes');
AllMyRoutes(app);


app.listen(8000, () => console.log('Server is running on port 8000'));