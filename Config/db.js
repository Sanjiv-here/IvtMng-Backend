const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
   await mongoose.connect(process.env.MONGO_URI)
  .then(function(db){
    console.log('db connected');
  })
  .catch(function(err){
    console.log(err);
  })
};

module.exports = connectDB;
  