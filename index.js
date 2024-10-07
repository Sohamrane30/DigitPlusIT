const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Routes = require('./routes/Routes');

const app = express();
const PORT = process.env.PORT || 3000; //sets local port value for the server

//supposed to be middleware between node and mongodb
app.use(bodyParser.json());

// MongoDB Connection (not fully implementsed)
mongoose.connect('mongodb://localhost:27017/sim-activation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// defaults route is set using "/"
app.use('/', Routes);

// Starts the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); //takes local port value from the PORT variable
});
