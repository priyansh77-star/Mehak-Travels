const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const bookingServices = require('./services');

const app = express();

// Connect MongoDB
connectDB();

// CORS Middleware (Allows React on port 3000 to talk to Express)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Mount API Routes under /api
app.use('/api', bookingServices);

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Express Backend running on http://127.0.0.1:${PORT}`);
});