# Task: Update Package Data

## Changes to firstapp-newone/src/component/Package/Packagedetails.tsx

### Step 1: Remove `transport` field from the type definition
- Edit line 3 to remove `transport: string;` from the type interface

### Step 2: Normalize all price strings to "9999 per person" format
- Remove ₹ symbol and commas from prices
- Ensure all prices have "per person" suffix
- Example: `"₹12,999 per person"` → `"12999 per person"`, `"₹12,999"` → `"12999 per person"`

### Step 3: Remove `transport` field from every package object
- Remove `transport: "Bus"`, `transport: "Flight"`, etc. from all entries

### Step 4: Remove transport display line in JSX
- Remove `<p><b>Transport:</b> {pkg.transport}</p>`

