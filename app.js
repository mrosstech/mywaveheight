
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.MONGO_DB

app.use(express.urlencoded({extended: false}));

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_DB)
.then(() => console.log('db connected!'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/login'));

// Start server
app.listen(PORT, console.log("Server started on port: " + PORT));
