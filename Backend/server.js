const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const { getPaymentPage } = require('./payment');
const { getServices } = require('./services');

const app = express();
const PORT = 5000;

app.use((req, rej, next) => {
  try {
    rej.header('Access-Control-Allow-Origin', '*');
    rej.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    rej.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return rej.sendStatus(204);
    }

    next();
  } catch (err) {
    console.error('CORS middleware error:', err);
    rej.status(500).json({ success: false, message: 'CORS error' });
  }
});

app.use(express.json());

let isDbReady = false;

const startServer = async () => {
  try {
    await connectDB();
    isDbReady = true;
    console.log('Database ready for requests');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

const bookingSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  email: String,
  packageType: String,
  noOfTraveller: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/bookings', async (req, res) => {
  if (!isDbReady || mongoose.connection.readyState !== 1) {
    return res.status(503).json({ success: false, message: 'Database is not ready yet' });
  }

  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, message: 'Booking saved', booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to save booking' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const { email } = req.query;
    const query = email ? { email } : {};
    const bookings = await Booking.find(query).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
});

app.get('/payment', (req, res) => {
  const destination = req.query.destination || 'India';
  const city = req.query.city || 'Selected City';
  res.send(getPaymentPage(destination, city));
});

app.get('/api/services', (req, res) => {
  res.json(getServices());
});

startServer();
