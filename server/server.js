require('dotenv').config();
//getting the required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001; //if conflict with default port them port 5000 selected

// use body parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Use API routes from the api folder
// used an entire directory to organize all my API endpoints instead of putting all the API endpoints in server.js
const apis = require('./api'); 
app.use("/api", apis);

// Connect to Mongo
mongoose.connect(process.env.DB, { //process.env.DB gets the DB key
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected...')).catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));







