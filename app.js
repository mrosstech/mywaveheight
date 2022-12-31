
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const {loginCheck} = require('./auth/passport');
loginCheck(passport);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.MONGO_DB

app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
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
