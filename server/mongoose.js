
var mongoConfig = require('./../config/config.json')['fontEnd'].dataServer;
var mongoose = require("mongoose");
var connectStr = 'mongodb://';
if (mongoConfig.user) {
    connectStr += ( mongoConfig.user + ':' + mongoConfig.pwd + '@' + mongoConfig.host + ':' + mongoConfig.port + '/' + mongoConfig.db);
} else {
    connectStr += mongoConfig.host + ':' + mongoConfig.port + '/' + mongoConfig.db;
}
mongoose.connect(connectStr);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;