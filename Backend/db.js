const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer = null;

const connectDB = async () => {
  try {
    // If MONGO_URI is set externally (e.g. production), use that
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected (external URI)');
      return;
    }

    // Use a persistent local db path so data survives restarts
    const dbPath = require('path').join(__dirname, '..', 'local-data');
    mongoServer = await MongoMemoryServer.create({
      instance: {
        dbPath,
        storageEngine: 'wiredTiger',
      },
    });
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected (persistent at ${dbPath})`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Cleanup in-memory server on exit
process.on('SIGINT', async () => {
  if (mongoServer) await mongoServer.stop();
  process.exit(0);
});

module.exports = connectDB;
