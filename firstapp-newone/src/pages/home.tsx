import { useState } from "react";
import PackageDetails from "../component/Package/Packagedetails";
import JourneySearch from "../component/Transport/Journeysearch";
import TransportOptions from "../component/Transport/Transportoption";
import manaliImg from "../assets/manali.jpg";
import goaImg from "../assets/goa.jpg";
import keralaImg from "../assets/kerala.jpg";
import mumbaiImg from "../assets/mumbai.jpg";
import Navbar from "../component/Navbar";
interface HomeProps {
  setShowTransport?: (value: boolean) => void;
}

function Home({ setShowTransport }: HomeProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showJourney, setShowJourney] = useState(false);
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [packageDetailsTarget, setPackageDetailsTarget] = useState<{
    destination: string;
    city: string;
  }>({ destination: "", city: "" });

  const stateCities = [
    {
      state: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      cities: ["Visakhapatnam", "Vijayawada", "Tirupati", "Amaravati", "Guntur", "Nellore"],
    },
    {
      state: "Arunachal Pradesh",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
      cities: ["Itanagar", "Tawang", "Ziro", "Bomdila", "Pasighat"],
    },
    {
      state: "Assam",
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=400",
      cities: ["Guwahati", "Tezpur", "Jorhat", "Silchar", "Haflong"],
    },
    {
      state: "Bihar",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    },
    {
      state: "Chhattisgarh",
      image: "https://images.unsplash.com/photo-1612160629320-3c5d1f6fc0b7?w=400",
      cities: ["Raipur", "Bilaspur", "Jagdalpur", "Korba", "Rajnandgaon"],
    },
    {
      state: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Anjuna"],
    },
    {
      state: "Gujarat",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Dwarka"],
    },
    {
      state: "Haryana",
      image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400",
      cities: ["Gurugram", "Faridabad", "Chandigarh", "Hisar", "Karnal"],
    },
    {
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
      cities: ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti", "Chamba"],
    },
    {
      state: "Jharkhand",
      image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=400",
      cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Deoghar", "Hazaribagh"],
    },
    {
      state: "Karnataka",
      image: "https://images.unsplash.com/photo-1596178060810-72680e16d5d1?w=400",
      cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Coorg", "Hampi"],
    },
    {
      state: "Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400",
      cities: ["Kochi", "Alleppey", "Munnar", "Kumarakom", "Thekkady", "Kovalam"],
    },
    {
      state: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho"],
    },
    {
      state: "Maharashtra",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400",
      cities: ["Mumbai", "Pune", "Mahabaleshwar", "Nashik", "Aurangabad", "Nagpur"],
    },
    {
      state: "Punjab",
      image: "https://images.unsplash.com/photo-1587847064884-3e6e1a1b5e5e?w=400",
      cities: ["Amritsar", "Ludhiana", "Jalandhar", "Chandigarh", "Patiala"],
    },
    {
      state: "Rajasthan",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400",
      cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu"],
    },
    {
      state: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400",
      cities: ["Chennai", "Coimbatore", "Madurai", "Ooty", "Kodaikanal", "Rameswaram"],
    },
    {
      state: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
      cities: ["Lucknow", "Agra", "Varanasi", "Prayagraj", "Noida", "Ayodhya"],
    },
    {
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1598887142483-47a1d9089d6f?w=400",
      cities: ["Dehradun", "Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Auli"],
    },
    {
      state: "West Bengal",
      image: "https://images.unsplash.com/photo-1599726689145-3d2e5a5e4e7e?w=400",
      cities: ["Kolkata", "Darjeeling", "Durgapur", "Siliguri", "Shantiniketan", "Kalimpong"],
    },
  ];

  const destinations = [
    {
      name: "Manali",
      destKey: "Himachal Pradesh",
      cityKey: "Manali",
      desc: "Adventure, Nature and Peace. All in Manali.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3cYuzyj4_u20T9rmdVMrj9sQ3RcuW8P-a7fXLtKHUw&s=10",
    },
    {
      name: "Goa",
      destKey: "Goa",
      cityKey: "Goa",
      desc: "Beautiful beaches, nightlife and relaxed coastal vibes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNiYKe3OziQyEEh6yoJltraLA0U2pLc6wgy2p9lmRqA&s=10",
    },
    {
      name: "Mumbai",
      destKey: "Maharashtra",
      cityKey: "Mumbai",
      desc: "City life, beaches and famous places.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskNpgdJ2WkjEovxWGAtQGtFcaBrGKYhAcS4o8wUge4A&s=10",
    },
  ];

  const resetAll = () => {
    setSelectedState(null);
    setShowPackageDetails(false);
    setPackageDetailsTarget({ destination: "", city: "" });
  };

  const showPackagesFor = (destination: string, city: string) => {
    setPackageDetailsTarget({ destination, city });
    setShowPackageDetails(true);
  };

  // Function to render main content area
  const renderContent = () => {
    // ---------- Journey View ----------
    if (showJourney) {
      return <JourneySearch />;
    }

    // ---------- Package Details View ----------
    if (showPackageDetails) {
      return (
        <PackageDetails
          destination={packageDetailsTarget.destination}
          city={packageDetailsTarget.city}
          onBack={resetAll}
        />
      );
    }

    // ---------- Cities View ----------
    if (selectedState) {
      const state = stateCities.find((item) => item.state === selectedState);

      return (
        <div className="home-content">
          <div className="home-container">
            <h1>{selectedState}</h1>
            <p>Select any city to see available packages.</p>

            <div className="destination-container">
              {state?.cities.map((city, index) => (
                <div
                  className="destination-card"
                  key={index}
                  onClick={() => showPackagesFor(selectedState, city)}
                >
                  <h3>{city}</h3>
                  <p>Click here to see packages</p>
                </div>
              ))}
            </div>

            <button onClick={() => setSelectedState(null)}>Back</button>
          </div>
        </div>
      );
    }

    // ---------- Home Page ----------
    return (
      <div className="home-content">
        <div className="home-container">
          <h1>Welcome To Mehak Travels</h1>
          <h2>Explore Your Dream Destination</h2>

          <p>
            Discover the best places to visit with exciting Mehak Travels packages
            at affordable prices. Plan your trip with us and make your journey
            memorable.
          </p>

          <button className="book-btn" onClick={() => setShowJourney(true)}>
            Book Now
          </button>

          <h2 className="popular-heading">Popular Destinations</h2>

          <div className="destination-container">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="destination-card"
                onClick={() => showPackagesFor(item.destKey, item.cityKey)}
              >
                <img src={item.image} alt={item.name} className="destination-image" />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="popular-heading">Explore States of India</h2>

          <div className="destination-container">
            {stateCities.map((item, index) => (
              <div
                key={index}
                className="destination-card"
                onClick={() => setSelectedState(item.state)}
              >
                <img src={item.image} alt={item.state} className="destination-image" />
                <h3>{item.state}</h3>
                <p>{item.cities.slice(0, 3).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-layout">
      <Navbar />
      {renderContent()}
    </div>
  );
}

export default Home;