const mongoose = require('mongoose');

const connectToDB = mongoose.connect(process.env.MONGO_URI);

module.exports = connectToDB;
