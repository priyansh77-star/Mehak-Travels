import { useEffect, useState } from "react";

interface BookingRecord {
  _id: string;
  name: string;
  age: string;
  gender: string;
  email: string;
  packageType: string;
  noOfTraveller: string;
  createdAt?: string;
}

interface ProfileProps {
  user: {
    name: string;
    age: string;
    gender: string;
    email: string;
    packageType: string;
    noOfTraveller: string;
    password: string;
  };
  showBookingsOnly?: boolean;
  onBackToHome: () => void;
}

function ProfilePage({ user, showBookingsOnly = false, onBackToHome }: ProfileProps) {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.email) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/api/bookings?email=${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(Array.isArray(data) ? data : []);
      })
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, [user.email]);

  return (
    <div className="home-container">
      <div className="destination-card" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>
        {!showBookingsOnly && (
          <>
            <h2>Your Profile</h2>
            <p><strong>Name:</strong> {user.name || "N/A"}</p>
            <p><strong>Age:</strong> {user.age || "N/A"}</p>
            <p><strong>Gender:</strong> {user.gender || "N/A"}</p>
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Package:</strong> {user.packageType || "N/A"}</p>
            <p><strong>Travellers:</strong> {user.noOfTraveller || "N/A"}</p>
            <p><strong>Password:</strong> {user.password ? "••••••" : "N/A"}</p>
            <hr style={{ margin: "16px 0" }} />
          </>
        )}

        <h3>My Bookings</h3>
        {loading ? (
          <p>Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found for this account.</p>
        ) : (
          <div style={{ display: "grid", gap: "12px" }}>
            {bookings.map((booking) => (
              <div key={booking._id} style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "8px" }}>
                <p><strong>Booking ID:</strong> {booking._id}</p>
                <p><strong>Package:</strong> {booking.packageType || "N/A"}</p>
                <p><strong>Travellers:</strong> {booking.noOfTraveller || "N/A"}</p>
                <p><strong>Destination / City:</strong> {booking.name || "N/A"}</p>
                <p><strong>Booked On:</strong> {booking.createdAt ? new Date(booking.createdAt).toLocaleString() : "N/A"}</p>
              </div>
            ))}
          </div>
        )}

        <button style={{ marginTop: "16px" }} onClick={onBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
