var express     = require('express');
var mongoose    = require('mongoose');
var conStrng    = require('./config/db').conn;      


if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, 
    useFindAndModify: false,
    useUnifiedTopology: true
  }

mongoose.connect(conStrng,options)
.then(()=>console.log('connected to db'))
.catch((err)=>console.log('connection error',err))

var app  = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/v1',require('./routes/routes'));

app.listen(3000,()=>console.log('server run at port 3000'));

module.exports = app;