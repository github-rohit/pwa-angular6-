const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });

module.exports = {mongoose};