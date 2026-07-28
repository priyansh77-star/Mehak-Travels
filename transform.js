const fs = require('fs');
const path = 'firstapp-newone/src/component/Package/Packagedetails.tsx';
let content = fs.readFileSync(path, 'utf8');

// Step 1: Remove transport field from all package objects
content = content.replace(/, transport: "[^"]*"/g, '');
content = content.replace(/, transport: '[^']*'/g, '');

// Step 2: Fix malformed prices
// Fix Ukhrul: "7,499" -> "₹7,499"
content = content.replace(
  /Ukhrul: \[\s*\{[^}]*price: "7,499"/g,
  'Ukhrul: [\n    { name: "Basic Package", price: "₹7,499"'
);

// Fix Senapati: "â‚ ¹5,999" -> "₹5,999"
content = content.replace(
  /Senapati: \[\s*\{[^}]*price: "â‚ ¹5,999"/g,
  'Senapati: [\n    { name: "Basic Package", price: "₹5,999"'
);

// Step 3: Normalize all price strings - remove " per person" suffix
content = content.replace(/ per person/g, '');

// Step 4: Fix corrupted ₹ symbols (â‚¹ -> ₹)
content = content.replace(/â[\s\S]?¹/g, '₹');

fs.writeFileSync(path, content, 'utf8');
console.log('Transformation complete!');

