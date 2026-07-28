$file = "c:\Users\ASD\Downloads\ProjectMERN\ProjectMERN\firstapp-newone\src\component\Package\Packagedetails.tsx"

$content = @"
import { useState } from "react";
import BookingForm from "./Bookingform";

export const packages: Record<string, { name: string; price: string; duration: string; hotel: string; meals: string; placesCovered?: string[]; description?: string }[]> = {
  // Popular Destinations
  Manali: [
    { name: "Basic Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner", placesCovered: ["Solang Valley", "Hadimba Temple", "Mall Road", "Manali Sanctuary", "Jogini Falls"], description: "Enjoy a budget-friendly trip to Manali with comfortable stay and scenic mountain views." },
    { name: "Premium Package", price: "₹18,999", duration: "5 Days / 4 Nights", hotel: "4 Star", meals: "All Meals", placesCovered: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Mall Road", "Manali Sanctuary", "Jogini Falls", "Naggar Castle"], description: "Experience luxury in the mountains with premium accommodations and all-inclusive meals." },
  ],
  Goa: [
    { name: "Basic Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner", placesCovered: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Dudhsagar Falls", "Anjuna Flea Market"], description: "Explore the best beaches of Goa with comfortable stay and delicious meals." },
    { name: "Premium Package", price: "₹24,999", duration: "5 Days / 4 Nights", hotel: "4 Star", meals: "All Meals", placesCovered: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Dudhsagar Falls", "Anjuna Flea Market", "Chapora Fort", "Spice Plantation"], description: "A luxurious Goa experience with flight travel and premium resort stay." },
  ],
  Mumbai: [
    { name: "Basic Package", price: "₹12,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner", placesCovered: ["Gateway of India", "Marine Drive", "Juhu Beach", "Siddhivinayak Temple", "Colaba Causeway"], description: "Discover the city of dreams with guided tours to iconic landmarks." },
    { name: "Premium Package", price: "₹29,999", duration: "5 Days / 4 Nights", hotel: "5 Star", meals: "All Meals", placesCovered: ["Gateway of India", "Marine Drive", "Juhu Beach", "Siddhivinayak Temple", "Colaba Causeway", "Elephanta Caves", "Bandra Worli Sea Link"], description: "Ultimate Mumbai experience with 5-star luxury and premium dining." },
  ],
  Kerala: [
    { name: "Basic Package", price: "₹15,999", duration: "5 Days / 4 Nights", hotel: "3 Star", meals: "Breakfast + Dinner", placesCovered: ["Alleppey Backwaters", "Kochi Fort", "Kumarakom", "Kovalam Beach", "Thekkady Wildlife"], description: "Experience God's Own Country with serene backwaters and beautiful beaches." },
    { name: "Premium Package", price: "₹25,999", duration: "6 Days / 5 Nights", hotel: "4 Star", meals: "All Meals", placesCovered: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kochi Fort", "Kumarakom", "Thekkady Wildlife", "Kovalam Beach", "Houseboat Ride"], description: "Premium Kerala tour with houseboat stay and all-inclusive luxury." },
  ],
  Delhi: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner", placesCovered: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb"], description: "Explore the capital city with iconic monuments and rich history." },
    { name: "Premium Package", price: "₹22,999", duration: "4 Days / 3 Nights", hotel: "5 Star", meals: "All Meals", placesCovered: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb", "Akshardham Temple", "Chandni Chowk"], description: "A luxurious Delhi experience with premium accommodations and all-inclusive meals." },
  ],

  // Andhra Pradesh
  Visakhapatnam: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Vijayawada: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Tirupati: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast" },
    { name: "Premium Package", price: "₹13,999", duration: "3 Days / 2 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Amaravati: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Guntur: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Nellore: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Arunachal Pradesh
  Itanagar: [
    { name: "Basic Package", price: "₹11,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹19,999", duration: "5 Days / 4 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Tawang: [
    { name: "Basic Package", price: "₹13,999", duration: "4 Days / 3 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹22,999", duration: "6 Days / 5 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Ziro: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Bomdila: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Pasighat: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Assam
  Guwahati: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Tezpur: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Jorhat: [
    { name: "Basic Package", price: "₹9,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Silchar: [
    { name: "Basic Package", price: "₹7,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Haflong: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Bihar
  Patna: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Gaya: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹11,999", duration: "3 Days / 2 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Bhagalpur: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Muzaffarpur: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Darbhanga: [
    { name: "Basic Package", price: "₹5,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Chhattisgarh
  Raipur: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Bilaspur: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Jagdalpur: [
    { name: "Basic Package", price: "₹7,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Korba: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Rajnandgaon: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Gujarat
  Ahmedabad: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹17,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Surat: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Vadodara: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Rajkot: [
    { name: "Basic Package", price: "₹7,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Bhavnagar: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Dwarka: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹14,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],

  // Haryana
  Gurugram: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "4 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹19,999", duration: "4 Days / 3 Nights", hotel: "5 Star", meals: "All Meals" },
  ],
  Faridabad: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Hisar: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Karnal: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Himachal Pradesh
  Shimla: [
    { name: "Basic Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹17,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Dharamshala: [
    { name: "Basic Package", price: "₹9,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹16,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Kullu: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Spiti: [
    { name: "Basic Package", price: "₹14,999", duration: "5 Days / 4 Nights", hotel: "Homestay", meals: "All Meals" },
    { name: "Premium Package", price: "₹22,999", duration: "6 Days / 5 Nights", hotel: "Camping", meals: "All Meals" },
  ],
  Chamba: [
    { name: "Basic Package", price: "₹8,499", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],

  // Jharkhand
  Ranchi: [
    { name: "Basic Package", price: "₹8,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹15,999", duration: "4 Days / 3 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Jamshedpur: [
    { name: "Basic Package", price: "₹7,999", duration: "3 Days / 2 Nights", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Dhanbad: [
    { name: "Basic Package", price: "₹6,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
  Deoghar: [
    { name: "Basic Package", price: "₹6,499", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
    { name: "Premium Package", price: "₹10,999", duration: "3 Days / 2 Nights", hotel: "4 Star", meals: "All Meals" },
  ],
  Hazaribagh: [
    { name: "Basic Package", price: "₹5,999", duration: "2 Days / 1 Night", hotel: "3 Star", meals: "Breakfast + Dinner" },
  ],
"@

Set-Content $file $content -NoNewline
Write-Host "Part 1 written successfully"

