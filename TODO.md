# TODO: Save Bookings to MongoDB & Show in Profile

## Task
When user clicks Profile button in Navbar, show bookings saved in MongoDB.

## Steps

### 1. home.tsx - Save Direct Booking to MongoDB
- Add useEffect to call POST /api/bookings when `bookingStep === "success"`
- Use `user?.email` to associate booking with logged-in user
- Pass `userEmail` prop to Package component

### 2. Packagedetails.tsx - Save Package Booking to MongoDB
- Add `userEmail` prop to interface
- Add useEffect to call POST /api/bookings when `step === 5` (success)
- Include package details, destination, transport info

### 3. BookingSuccess.tsx - Save Booking Form Flow to MongoDB
- Accept optional bookingData prop
- Add useEffect to save booking to MongoDB on mount when bookingData provided

### 4. Bookingsummary.tsx - Pass Booking Data to BookingSuccess
- Pass formData to BookingSuccess component

### 5. Test
- Verify backend is running
- Test booking and check profile page

