function getPaymentPage(destination = 'India', city = 'Selected City') {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mehak Travels Payment</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #f8fafc, #e0f2fe);
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .card {
        background: white;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        width: 100%;
        max-width: 420px;
      }
      h2 { margin-top: 0; color: #0f172a; }
      label { display: block; margin-top: 12px; font-weight: 600; color: #334155; }
      input, select { width: 100%; padding: 10px; margin-top: 6px; border: 1px solid #cbd5e1; border-radius: 8px; }
      button { margin-top: 18px; width: 100%; padding: 12px; border: none; border-radius: 8px; background: #2563eb; color: white; font-size: 16px; cursor: pointer; }
      .summary { margin-top: 16px; padding: 12px; background: #eff6ff; border-radius: 8px; color: #1d4ed8; }
      .success { display: none; margin-top: 14px; color: green; font-weight: bold; }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Mehak Travels Payment</h2>
      <div class="summary">
        <strong>Destination:</strong> ${destination}<br />
        <strong>City:</strong> ${city}
      </div>
      <label>Cardholder Name</label>
      <input type="text" placeholder="John Doe" />
      <label>Card Number</label>
      <input type="text" placeholder="4242 4242 4242 4242" />
      <label>Expiry</label>
      <input type="text" placeholder="MM/YY" />
      <label>CVV</label>
      <input type="text" placeholder="123" />
      <button onclick="payNow()">Pay Now</button>
      <div class="success" id="successMsg">Payment successful. Your trip booking is confirmed.</div>
    </div>

    <script>
      function payNow() {
        document.getElementById('successMsg').style.display = 'block';
      }
    </script>
  </body>
</html>`;
}

module.exports = { getPaymentPage };