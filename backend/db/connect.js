const mongoose = require('mongoose');

// Znam da nije ovakva praksa konekcije na bazu, ovo je samo za ove svrhe
// Inace stavljam u .env file
const connectToDB = mongoose.connect(
  'mongodb+srv://vlado:1234@cluster0.bx8if.mongodb.net/loans?retryWrites=true&w=majority'
);

module.exports = connectToDB;
