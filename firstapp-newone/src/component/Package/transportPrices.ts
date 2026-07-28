// Shared transport pricing data — single source of truth
// City-based transport pricing (per person)

export const cityTransportPrices: Record<string, { Flight: number; Train: number; Bus: number }> = {
  // Default base prices
  default: { Flight: 6500, Train: 1800, Bus: 1200 },
  // ---- METRO CITIES (Higher flight, good train/bus) ----
  Delhi: { Flight: 8500, Train: 2500, Bus: 1500 },
  "New Delhi": { Flight: 8500, Train: 2500, Bus: 1500 },
  "Old Delhi": { Flight: 8500, Train: 2500, Bus: 1500 },
  Mumbai: { Flight: 9500, Train: 2800, Bus: 1800 },
  Bangalore: { Flight: 9000, Train: 2600, Bus: 1600 },
  Bengaluru: { Flight: 9000, Train: 2600, Bus: 1600 },
  Chennai: { Flight: 8500, Train: 2400, Bus: 1500 },
  Kolkata: { Flight: 8000, Train: 2200, Bus: 1400 },
  Hyderabad: { Flight: 8500, Train: 2300, Bus: 1500 },
  Pune: { Flight: 8000, Train: 2200, Bus: 1400 },
  Ahmedabad: { Flight: 7500, Train: 2000, Bus: 1300 },
  Jaipur: { Flight: 7000, Train: 1900, Bus: 1200 },
  Chandigarh: { Flight: 7500, Train: 2000, Bus: 1300 },
  Lucknow: { Flight: 7000, Train: 1800, Bus: 1200 },

  // ---- HILL STATIONS (Higher bus/train due to terrain) ----
  Manali: { Flight: 11000, Train: 3500, Bus: 2500 },
  Shimla: { Flight: 10000, Train: 3000, Bus: 2200 },
  Dharamshala: { Flight: 10000, Train: 3200, Bus: 2300 },
  Kullu: { Flight: 10500, Train: 3300, Bus: 2400 },
  Spiti: { Flight: 12000, Train: 4000, Bus: 3000 },
  Chamba: { Flight: 9500, Train: 3000, Bus: 2200 },
  Nainital: { Flight: 9000, Train: 2800, Bus: 2000 },
  Mussoorie: { Flight: 9000, Train: 2800, Bus: 2000 },
  Dehradun: { Flight: 8500, Train: 2500, Bus: 1800 },
  Rishikesh: { Flight: 8500, Train: 2500, Bus: 1800 },
  Haridwar: { Flight: 8000, Train: 2300, Bus: 1700 },
  Auli: { Flight: 11000, Train: 3500, Bus: 2600 },
  Ooty: { Flight: 9500, Train: 3000, Bus: 2200 },
  Kodaikanal: { Flight: 9500, Train: 3000, Bus: 2200 },
  Coorg: { Flight: 9000, Train: 2800, Bus: 2000 },
  "Mount Abu": { Flight: 8500, Train: 2500, Bus: 1800 },

  // ---- BEACH DESTINATIONS ----
  Goa: { Flight: 8000, Train: 2200, Bus: 1500 },
  Panaji: { Flight: 8000, Train: 2200, Bus: 1500 },
  Kovalam: { Flight: 8500, Train: 2500, Bus: 1800 },
  Puri: { Flight: 7500, Train: 2000, Bus: 1400 },
  Konark: { Flight: 7500, Train: 2000, Bus: 1400 },
  Diu: { Flight: 8000, Train: 2200, Bus: 1500 },

  // ---- KERALA (Backwaters) ----
  Kerala: { Flight: 8500, Train: 2400, Bus: 1700 },
  Kochi: { Flight: 8500, Train: 2400, Bus: 1700 },
  Alleppey: { Flight: 8500, Train: 2500, Bus: 1800 },
  Munnar: { Flight: 9000, Train: 2800, Bus: 2000 },
  Kumarakom: { Flight: 8500, Train: 2500, Bus: 1800 },
  Thekkady: { Flight: 8500, Train: 2500, Bus: 1800 },

  // ---- NORTH-EAST (Higher prices due to remote location) ----
  Guwahati: { Flight: 9500, Train: 3000, Bus: 2200 },
  Shillong: { Flight: 10000, Train: 3200, Bus: 2500 },
  Cherrapunji: { Flight: 10000, Train: 3200, Bus: 2500 },
  Tura: { Flight: 9500, Train: 3000, Bus: 2300 },
  Jowai: { Flight: 9500, Train: 3000, Bus: 2300 },
  Aizawl: { Flight: 11000, Train: 3500, Bus: 2800 },
  Kohima: { Flight: 10500, Train: 3300, Bus: 2600 },
  Dimapur: { Flight: 10000, Train: 3000, Bus: 2400 },
  Imphal: { Flight: 11000, Train: 3500, Bus: 2800 },
  Agartala: { Flight: 10500, Train: 3200, Bus: 2500 },
  Gangtok: { Flight: 11000, Train: 3500, Bus: 2800 },
  Pelling: { Flight: 11000, Train: 3500, Bus: 2800 },
  Namchi: { Flight: 10500, Train: 3300, Bus: 2600 },
  Lachung: { Flight: 11500, Train: 3800, Bus: 3000 },
  Itanagar: { Flight: 10000, Train: 3200, Bus: 2500 },
  Tawang: { Flight: 12000, Train: 4000, Bus: 3200 },
  Ziro: { Flight: 10500, Train: 3300, Bus: 2600 },
  Bomdila: { Flight: 10000, Train: 3000, Bus: 2400 },
  Pasighat: { Flight: 9500, Train: 2800, Bus: 2200 },

  // ---- KASHMIR & LADAKH ----
  Srinagar: { Flight: 11000, Train: 3500, Bus: 2500 },
  Jammu: { Flight: 9000, Train: 2800, Bus: 2000 },
  Pahalgam: { Flight: 11000, Train: 3500, Bus: 2600 },
  Gulmarg: { Flight: 11500, Train: 3800, Bus: 2800 },
  Katra: { Flight: 9500, Train: 3000, Bus: 2200 },
  Leh: { Flight: 15000, Train: 5000, Bus: 4000 },
  Kargil: { Flight: 14000, Train: 4500, Bus: 3800 },
  Nubra: { Flight: 15000, Train: 5000, Bus: 4000 },

  // ---- ISLANDS ----
  "Port Blair": { Flight: 12000, Train: 4500, Bus: 3500 },
  Havelock: { Flight: 13000, Train: 5000, Bus: 4000 },
  Kavaratti: { Flight: 14000, Train: 5500, Bus: 4500 },
  Minicoy: { Flight: 14500, Train: 5500, Bus: 4500 },
  Agatti: { Flight: 14000, Train: 5000, Bus: 4000 },
  Bangaram: { Flight: 14500, Train: 5500, Bus: 4500 },

  // ---- RAJASTHAN ----
  Udaipur: { Flight: 8000, Train: 2200, Bus: 1500 },
  Jodhpur: { Flight: 7500, Train: 2000, Bus: 1400 },
  Jaisalmer: { Flight: 8500, Train: 2500, Bus: 1800 },
  Bikaner: { Flight: 7000, Train: 1900, Bus: 1300 },

  // ---- UTTAR PRADESH ----
  Agra: { Flight: 6500, Train: 1500, Bus: 1000 },
  Varanasi: { Flight: 7000, Train: 1800, Bus: 1200 },
  Prayagraj: { Flight: 6500, Train: 1600, Bus: 1100 },
  Ayodhya: { Flight: 6500, Train: 1600, Bus: 1100 },
  Noida: { Flight: 7500, Train: 2000, Bus: 1300 },

  // ---- BIHAR ----
  Patna: { Flight: 7000, Train: 1800, Bus: 1200 },
  Gaya: { Flight: 6500, Train: 1600, Bus: 1100 },
  Bhagalpur: { Flight: 6500, Train: 1500, Bus: 1000 },
  Muzaffarpur: { Flight: 6000, Train: 1400, Bus: 1000 },
  Darbhanga: { Flight: 6000, Train: 1400, Bus: 950 },

  // ---- ODISHA ----
  Bhubaneswar: { Flight: 7500, Train: 2000, Bus: 1400 },
  Cuttack: { Flight: 7000, Train: 1800, Bus: 1300 },
  Rourkela: { Flight: 7000, Train: 1800, Bus: 1300 },
  Sambalpur: { Flight: 6500, Train: 1600, Bus: 1200 },

  // ---- GUJARAT ----
  Surat: { Flight: 7000, Train: 1800, Bus: 1200 },
  Vadodara: { Flight: 7000, Train: 1800, Bus: 1200 },
  Rajkot: { Flight: 6500, Train: 1600, Bus: 1100 },
  Bhavnagar: { Flight: 6000, Train: 1500, Bus: 1000 },
  Dwarka: { Flight: 7500, Train: 2000, Bus: 1400 },

  // ---- PUNJAB ----
  Amritsar: { Flight: 7500, Train: 2000, Bus: 1300 },
  Ludhiana: { Flight: 7000, Train: 1800, Bus: 1200 },
  Jalandhar: { Flight: 6500, Train: 1600, Bus: 1100 },
  Patiala: { Flight: 6500, Train: 1600, Bus: 1100 },

  // ---- MADHYA PRADESH ----
  Bhopal: { Flight: 7000, Train: 1800, Bus: 1200 },
  Indore: { Flight: 7000, Train: 1800, Bus: 1200 },
  Gwalior: { Flight: 6500, Train: 1600, Bus: 1100 },
  Jabalpur: { Flight: 6500, Train: 1600, Bus: 1100 },
  Ujjain: { Flight: 6000, Train: 1500, Bus: 1000 },
  Khajuraho: { Flight: 7500, Train: 2000, Bus: 1400 },

  // ---- MAHARASHTRA ----
  Mahabaleshwar: { Flight: 7500, Train: 2000, Bus: 1500 },
  Nashik: { Flight: 6500, Train: 1600, Bus: 1100 },
  Aurangabad: { Flight: 6500, Train: 1600, Bus: 1100 },
  Nagpur: { Flight: 7000, Train: 1800, Bus: 1200 },

  // ---- JHARKHAND ----
  Ranchi: { Flight: 7000, Train: 1800, Bus: 1200 },
  Jamshedpur: { Flight: 6500, Train: 1600, Bus: 1100 },
  Dhanbad: { Flight: 6000, Train: 1400, Bus: 1000 },
  Deoghar: { Flight: 6000, Train: 1400, Bus: 1000 },
  Hazaribagh: { Flight: 6000, Train: 1400, Bus: 950 },

  // ---- TELANGANA ----
  Warangal: { Flight: 7000, Train: 1800, Bus: 1300 },
  Karimnagar: { Flight: 6500, Train: 1600, Bus: 1200 },
  Nizamabad: { Flight: 6500, Train: 1600, Bus: 1200 },
  Khammam: { Flight: 6500, Train: 1600, Bus: 1100 },
  Ramagundam: { Flight: 6000, Train: 1400, Bus: 1000 },

  // ---- ANDHRA PRADESH ----
  Visakhapatnam: { Flight: 7500, Train: 2000, Bus: 1400 },
  Vijayawada: { Flight: 7000, Train: 1800, Bus: 1300 },
  Tirupati: { Flight: 7000, Train: 1800, Bus: 1300 },
  Amaravati: { Flight: 7000, Train: 1800, Bus: 1200 },
  Guntur: { Flight: 6500, Train: 1600, Bus: 1100 },
  Nellore: { Flight: 6500, Train: 1600, Bus: 1100 },

  // ---- TAMIL NADU ----
  Coimbatore: { Flight: 7500, Train: 2000, Bus: 1400 },
  Madurai: { Flight: 7000, Train: 1800, Bus: 1300 },
  Rameswaram: { Flight: 7500, Train: 2000, Bus: 1500 },

  // ---- KARNATAKA ----
  Mysuru: { Flight: 7500, Train: 2000, Bus: 1400 },
  Mangaluru: { Flight: 7500, Train: 2000, Bus: 1400 },
  Hubballi: { Flight: 7000, Train: 1800, Bus: 1300 },
  Hampi: { Flight: 7000, Train: 1800, Bus: 1300 },

  // ---- WEST BENGAL ----
  Darjeeling: { Flight: 9500, Train: 3000, Bus: 2200 },
  Siliguri: { Flight: 8000, Train: 2200, Bus: 1600 },
  Shantiniketan: { Flight: 7500, Train: 2000, Bus: 1400 },
  Durgapur: { Flight: 7000, Train: 1800, Bus: 1200 },
  Kalimpong: { Flight: 9500, Train: 3000, Bus: 2200 },

  // ---- CHHATTISGARH ----
  Raipur: { Flight: 7000, Train: 1800, Bus: 1200 },
  Bilaspur: { Flight: 6500, Train: 1600, Bus: 1100 },
  Jagdalpur: { Flight: 6500, Train: 1600, Bus: 1100 },
  Korba: { Flight: 6000, Train: 1400, Bus: 1000 },
  Rajnandgaon: { Flight: 6000, Train: 1400, Bus: 950 },

  // ---- HARYANA ----
  Gurugram: { Flight: 8000, Train: 2200, Bus: 1500 },
  Faridabad: { Flight: 7000, Train: 1800, Bus: 1200 },
  Hisar: { Flight: 6000, Train: 1500, Bus: 1000 },
  Karnal: { Flight: 6000, Train: 1400, Bus: 950 },
  Mohali: { Flight: 7500, Train: 2000, Bus: 1300 },
  Panchkula: { Flight: 7500, Train: 2000, Bus: 1300 },

  // ---- UNION TERRITORIES ----
  Puducherry: { Flight: 7500, Train: 2000, Bus: 1400 },
  Karaikal: { Flight: 7000, Train: 1800, Bus: 1300 },
  Yanam: { Flight: 7000, Train: 1800, Bus: 1300 },
  Mahe: { Flight: 7000, Train: 1800, Bus: 1300 },
  Silvassa: { Flight: 7000, Train: 1800, Bus: 1300 },
  Daman: { Flight: 7000, Train: 1800, Bus: 1200 },
  Diglipur: { Flight: 12000, Train: 4500, Bus: 3500 },
  Rohini: { Flight: 7500, Train: 2000, Bus: 1300 },
  "Lajpat Nagar": { Flight: 7500, Train: 2000, Bus: 1300 },
  "Karol Bagh": { Flight: 7500, Train: 2000, Bus: 1300 },
};

/**
 * Get transport prices for a given city
 */
export function getCityPrices(cityName: string): { Flight: number; Train: number; Bus: number } {
  return cityTransportPrices[cityName] || cityTransportPrices.default;
}

/**
 * Get route-based transport price considering both departure and destination cities.
 * Uses the average of departure and destination city prices for a balanced route cost.
 */
export function getRoutePrice(
  fromCity: string,
  toCity: string,
  mode: "Flight" | "Train" | "Bus"
): number {
  if (fromCity && toCity && fromCity !== toCity) {
    const fromPrices = getCityPrices(fromCity);
    const toPrices = getCityPrices(toCity);
    // Use average of from/to prices for a balanced route price
    return Math.round((fromPrices[mode] + toPrices[mode]) / 2);
  }
  // Fallback to destination or default
  return getCityPrices(toCity || "default")[mode];
}

