$file = "c:\Users\ASD\Downloads\ProjectMERN\ProjectMERN\firstapp-newone\src\component\Package\Packagedetails.tsx"

$part1 = Get-Content $file -Raw

# Find the end of valid content (before Manipur which was truncated)
$pos = $part1.IndexOf("  // Manipur")
if ($pos -ge 0) {
    $part1 = $part1.Substring(0, $pos)
}

$rest = @"
  // Manipur
  Imphal: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Bishnupur: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Thoubal: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Churachandpur: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Ukhrul: [
    { name: "Basic Package", price: "₹7,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Senapati: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Meghalaya
  Shillong: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Cherrapunji: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Tura: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Jowai: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Nongpoh: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Mawlynnong: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Mizoram
  Aizawl: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Lunglei: [
    { name: "Basic Package", price: "₹7,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Champhai: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Serchhip: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Kolasib: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Lawngtlai: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Nagaland
  Kohima: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Dimapur: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Mokokchung: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Tuensang: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Wokha: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Zunheboto: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Odisha
  Bhubaneswar: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Puri: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Cuttack: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Rourkela: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Sambalpur: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Konark: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Sikkim
  Gangtok: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹18,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Pelling: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Namchi: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Ravangla: [
    { name: "Basic Package", price: "₹7,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Yuksom: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Lachung: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Telangana
  Hyderabad: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹18,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Warangal: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Karimnagar: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Nizamabad: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Khammam: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Ramagundam: [
    { name: "Basic Package", price: "₹5,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Tripura
  Agartala: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Dharmanagar: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Kailashahar: [
    { name: "Basic Package", price: "₹5,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Belonia: [
    { name: "Basic Package", price: "₹4,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Sabroom: [
    { name: "Basic Package", price: "₹4,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // --- Union Territories ---

  // Delhi
  "New Delhi": [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹22,999", duration: "4 Days / 3 Nights", hotel: "5 Star", meals: "All Meals" },
  ],
  "Old Delhi": [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  
  // Jammu & Kashmir
  Srinagar: [
    { name: "Basic Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹22,999", duration: "5 Days / 4 Nights", hotel: "Houseboat", meals: "All Meals" },
  ],
  Jammu: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Pahalgam: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Gulmarg: [
    { name: "Basic Package", price: "₹11,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹19,999", duration: "4 Days / 3 Nights", hotel: "Resort", meals: "All Meals" },
  ],
  Sonamarg: [
    { name: "Basic Package", price: "₹10,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Katra: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Ladakh
  Leh: [
    { name: "Basic Package", price: "₹15,999", duration: "5 Days / 4 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹28,999", duration: "6 Days / 5 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Kargil: [
    { name: "Basic Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Nubra: [
    { name: "Basic Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "Camp", meals: "All Meals" },
  ],
  Zanskar: [
    { name: "Basic Package", price: "₹16,999", duration: "5 Days / 4 Nights", hotel: "Camp", meals: "All Meals" },
  ],
  Dras: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Padum: [
    { name: "Basic Package", price: "₹13,999", duration: "4 Days / 3 Nights", hotel: "Homestay", meals: "All Meals" },
  ],

  // Puducherry
  Puducherry: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Karaikal: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Yanam: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Mahe: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Andaman & Nicobar
  "Port Blair": [
    { name: "Basic Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹24,999", duration: "5 Days / 4 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Havelock: [
    { name: "Basic Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  "Neil Island": [
    { name: "Basic Package", price: "₹14,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Diglipur: [
    { name: "Basic Package", price: "₹12,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Chandigarh
  Chandigarh: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Mohali: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Panchkula: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Dadra & Nagar Haveli and Daman & Diu
  Silvassa: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Daman: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Diu: [
    { name: "Basic Package", price: "₹7,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Lakshadweep
  Kavaratti: [
    { name: "Basic Package", price: "₹18,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹32,999", duration: "5 Days / 4 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Minicoy: [
    { name: "Basic Package", price: "₹19,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Agatti: [
    { name: "Basic Package", price: "₹17,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Bangaram: [
    { name: "Basic Package", price: "₹20,999", duration: "4 Days / 3 Nights", hotel: "Resort", meals: "All Meals" },
  ],
};
"@

$fullContent = $part1 + $rest
Set-Content $file $fullContent -NoNewline
Write-Host "Complete file written successfully. Size: $($fullContent.Length) bytes"
