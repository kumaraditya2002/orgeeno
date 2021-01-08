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
app.get('/about', (req, res) => res.render('about'));
app.get('/blog', (req, res) => res.render('blog'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/raw_material', (req, res) => res.render('raw_material'));
app.get('/service_1', (req, res) => res.render('service_1'));
app.get('/services_2', (req, res) => res.render('services_2'));

//server 
app.listen(port,()=>{
    console.log(`server started at ${port}`);
});