const express = require('express');
const path = require('path');
const Job = require('./models/job');


const app = express();

const mongoose = require('mongoose');

const mongoUri = 'private-removed';


mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB Connected'));
// Serve static files from the React App
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, http://etstooltracker.s3-website-ap-southeast-2.amazonaws.com/');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
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
