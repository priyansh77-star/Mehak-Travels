const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Attempt to import processPayment from local payment.js file
let processPayment;
try {
  const paymentModule = require('./payment');
  processPayment = paymentModule.processPayment;
} catch (e) {
  console.warn('⚠️ payment.js module not found or missing processPayment method. Using fallback handler.');
}

// ==========================================
// MONGOOSE SCHEMAS & MODELS
// ==========================================

// 1. Booking Schema
const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, default: 'Unspecified' },
    email: { type: String, required: true },
    packageType: { type: String, required: true },
    noOfTraveller: { type: Number, required: true },
    phone: { type: String, required: true },
    travelDate: { type: String, required: true },
    transportMode: { type: String, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

// 2. User Schema (Optional model for storing registered users)
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);


// ==========================================
// ROUTES
// ==========================================

// ------------------------------------------
// 1. AUTH / LOGIN ROUTE
// ------------------------------------------
router.post('/login', async (req, res) => {
  console.log('-------------------------------------------------');
  console.log('🔑 Login Request Received:', req.body);

  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  try {
    // Development auto-login: accepts any email and returns user payload
    const userName = email.split('@')[0];

    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: {
        name: userName.charAt(0).toUpperCase() + userName.slice(1),
        email: email,
      },
    });
  } catch (error) {
    console.error('❌ Login Error:', error.message);
    return res.status(500).json({ success: false, message: 'Server login error.' });
  }
});


// ------------------------------------------
// 2. PAYMENT ROUTE
// ------------------------------------------
router.post('/payment', async (req, res) => {
  console.log('-------------------------------------------------');
  console.log('💳 Payment Request Received:', req.body);

  try {
    // Use payment.js logic if available
    if (typeof processPayment === 'function') {
      const paymentResult = processPayment(req.body);
      if (paymentResult.success) {
        console.log('✅ Payment Approved! Transaction ID:', paymentResult.transactionId);
        return res.status(200).json(paymentResult);
      } else {
        console.warn('⚠️ Payment Rejected:', paymentResult.message);
        return res.status(400).json(paymentResult);
      }
    }

    // Fallback payment validation if payment.js isn't linked
    const { cardName, cardNumber, expiry, cvv, amount } = req.body;
    if (!cardName || !cardNumber || !expiry || !cvv) {
      return res.status(400).json({ success: false, message: 'All card details are required.' });
    }

    const txnId = 'TXN' + Date.now() + Math.random().toString(36).substring(2, 7).toUpperCase();
    console.log('✅ Payment Approved! Fallback Transaction ID:', txnId);

    return res.status(200).json({
      success: true,
      message: 'Payment processed successfully',
      transactionId: txnId,
      amount: amount || 0,
      processedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error('❌ Payment Processing Error:', error.message);
    return res.status(500).json({ success: false, message: 'Server payment processing failed.' });
  }
});


// ------------------------------------------
// 3. CREATE BOOKING ROUTE (Saves to MongoDB)
// ------------------------------------------
router.post('/bookings', async (req, res) => {
  console.log('-------------------------------------------------');
  console.log('📥 Incoming Booking Payload:', req.body);

  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    console.log('✅ Successfully Saved to MongoDB! Document ID:', savedBooking._id);
    return res.status(201).json({
      success: true,
      message: 'Booking saved successfully!',
      booking: savedBooking,
    });
  } catch (error) {
    console.error('❌ Mongoose Save Error:', error.message);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});


// ------------------------------------------
// 4. GET ALL BOOKINGS ROUTE
// ------------------------------------------
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('❌ Get Bookings Error:', error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;