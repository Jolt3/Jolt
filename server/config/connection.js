const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://christophermbaldock:Saratoga728@cluster0.u7s0hqa.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
