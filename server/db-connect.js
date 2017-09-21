var retVal = {};
retVal.connect = function (connectionString) {
    var mongoose = require('mongoose');
    mongoose.connect(connectionString, { useMongoClient: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected!");
    })
}

module.exports = retVal