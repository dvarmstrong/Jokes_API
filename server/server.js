const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyRoutes = require('./routes/jokes.routes');
AllMyRoutes(app);


app.listen(8000, () => console.log('Server is running on port 8000'));