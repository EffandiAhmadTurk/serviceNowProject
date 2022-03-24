const mongoose = require('mongoose');

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  await mongoose.connect(
    'mongodb+srv://howdy:howdy123@howdy-1.vntog.mongodb.net/howdy-db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log('Successfully connected to mongoDb');
};

module.exports = dbConnect;
