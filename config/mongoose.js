const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'config/.env' });
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsInsecure: true
});

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: Mongodb');
});

module.exports = db;
