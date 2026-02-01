const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter'); // 👈 Import the auth router
const cookieParser = require('cookie-parser');
const {authMiddleware} = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// database connection
// 👇 I changed 'english-app' to 'node-auth'
const dbURI = 'mongodb+srv://weblearner:weblearner@cluster0.uqr4ock.mongodb.net/node-auth?retryWrites=true&w=majority';

// FIXED: Removed the { options } object here. Just pass the dbURI.
mongoose.connect(dbURI)
  .then((result) => {
      app.listen(3001);
      console.log('✅ Connected to DB and listening on port 3001');
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', authMiddleware, (req, res) => res.render('smoothies'));
app.use(authRouter); // 👈 Use the auth router for /auth routes

//setting the cookies

// app.get('/set-cookies', (req,res)=> {
//   //res.setHeader('set-cookie', 'newuser=true');
//   //OR use cookie parser package
//   res.cookie('newuser',false);
//   res.cookie('isEmployee',true,{maxAge: 1000*60*60*24, httpOnly: true});
//   res.send('cookies set');
// })

// app.get('/read-cookies', (req,res)=> {
//   const cookie = req.cookies;
//   console.log(cookie);
//   res.json(cookie);
// })