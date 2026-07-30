const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mehak_travels';

    const conn = await mongoose.connect(connUri);

    console.log('=================================================');
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`   Host: ${conn.connection.host}`);
    console.log(`   Database Name: ${conn.connection.name}`);
    console.log('=================================================');
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('   Ensure local MongoDB service is running on port 27017.');
    process.exit(1);
  }
};

module.exports = connectDB;