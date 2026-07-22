# Fix "error in package details" - Implementation Plan

## Steps

1. **Fix `Packagedetails.tsx`** —
   - Export the `packages` data as a named export
   - Create and export a `PackageDetails` React component that accepts `{ destination, city, onBookNow, onBack }` props
   - The component shows package options with price, duration, hotel, transport, meals

2. **Fix `home.tsx`** —
   - Remove unused states: `selectedPackage`, `showPackageDetails`
   - Fix `setShowTransport` prop - make it optional so it doesn't crash
   - Import `PackageDetails` component
   - Show PackageDetails when user selects a city (before going to BookingForm)
   - Show PackageDetails for popular destinations (Manali, Kerala, Mumbai, Goa) before direct booking

3. **Verify build** — Run `npx react-scripts build` to confirm zero errors

## Status
- [x] Step 1: Fix Packagedetails.tsx — Converted to proper React component with data export
- [x] Step 2: Fix home.tsx — Removed unused states, added PackageDetails integration, fixed Book Now crash
- [x] Step 3: Verify build — **Compiled successfully!**

