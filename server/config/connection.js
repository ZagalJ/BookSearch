const mongoose = require('mongoose');
//heroku connection 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
console.log("DB connection", process.env.MONGODB_URI);

module.exports = mongoose.connection;
