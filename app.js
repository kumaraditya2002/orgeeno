const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// middleware
app.use('/public',express.static('public'));
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
}, err => {
  if(err) throw err;
  console.log("Connected to db");
});

app.get('/', (req, res) => res.render('index'));

//server 
app.listen(port,()=>{
    console.log(`server started at ${port}`);
});