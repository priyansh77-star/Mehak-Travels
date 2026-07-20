const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let isDbReady = false;

connectDB().then(() => {
  isDbReady = true;
  console.log('Database ready for requests');
}).catch((err) => {
  console.error('Database connection failed:', err);
});

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
  if (!isDbReady) {
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
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
