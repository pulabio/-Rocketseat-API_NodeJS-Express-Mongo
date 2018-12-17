const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/testDB', {useMongoClient: true});
mongoose.connect('mongodb://localhost/test', {useMongoClient: true});
//mongoose.Promise = global.Promise;

module.exports = mongoose;








//adicionado por mim
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
