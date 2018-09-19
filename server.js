const express = require('express');
const path = require('path');
const Job = require('./models/job');
require('dotenv').config();

//Fetch sensitive DB information from env variables
const dbhost = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const dbpassword = process.env.DB_PASSWORD;
const dbusername = process.env.DB_USERNAME;



const app = express();
const mongoose = require('mongoose');
const mongoUri = 'private-removed';

//create Mlab connection string from env variables
const mongoUri = `mongodb://${dbusername}:${dbpassword}@${dbhost}/${dbname}`;



mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB Connected'));
// Serve static files from the React App
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors());
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.join(__dirname, 'client/build')));

//An api endpoint that returns a short list of items



// app.get('/', (req, res) => {
//   res.send('hi');
// });

// app.get('/job/1', (req, res) => {
//   let query = Job.findOne({job_no: 1}, (err, obj) => {
//     if (err) console.log(err);
//     console.log(obj);
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(obj));
//     }
//
//   });

app.get('/job/all', (req,res) => {

  Job.find({}, (err, obj) => {
    if (err) console.log(err);
    console.log(obj[1]);
    res.setHeader('Content-Type', 'application/json');
    res.json(obj);


  })

});


  // console.log('db called server.js L32');
  // query.select('category');
  // console.log(query.category);
  // // res.send(query.brand);


// app.get('/index.js' (req, res) => {
//   res.sendFile('.static/index.js')
// });


//andle requests that dont match above
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/src'));

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port:' + port);
