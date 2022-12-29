
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoDbConnString = "mongodb://mongodb:mongodb@127.0.0.1:27017";

mongoose.set('strictQuery', true);
mongoose.connect(mongoDbConnString)
.then(() => console.log('db connected!'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

//Routes
app.use('/', require('./src/routes/login'));

// Start server
app.listen(PORT, console.log("Server started on port: " + PORT));
