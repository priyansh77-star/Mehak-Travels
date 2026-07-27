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

interface UserProfile {
  name: string;
  email: string;
  createdAt: string;
}

interface ProfileProps {
  user: {
    name: string;
    email: string;
  };
  showBookingsOnly?: boolean;
  onBackToHome: () => void;
}

function ProfilePage({ user, showBookingsOnly = false, onBackToHome }: ProfileProps) {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    if (!user.email) {
      setLoading(false);
      setProfileLoading(false);
      return;
    }

    // Fetch user profile from backend
    fetch(`http://localhost:5000/api/user/${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProfile(data.user);
        }
      })
      .catch(() => {})
      .finally(() => setProfileLoading(false));

    // Fetch bookings
    fetch(`http://localhost:5000/api/bookings?email=${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(Array.isArray(data) ? data : []);
      })
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, [user.email]);

  return (
    <div className="app-layout">
      <nav className="sidebar">
        <h2> Mehak Travels</h2>
        <ul>
          <li onClick={onBackToHome}>Home</li>
          <li> Contact</li>
          <li className="active">Profile</li>
        </ul>
      </nav>
      <div className="home-content">
        <div className="home-container">
          <div className="destination-card" style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>
            {!showBookingsOnly && (
              <>
                <h2>Your Profile</h2>
                {profileLoading ? (
                  <p>Loading profile...</p>
                ) : profile ? (
                  <>
                    <p><strong>Name:</strong> {profile.name || "N/A"}</p>
                    <p><strong>Email:</strong> {profile.email || "N/A"}</p>
                    <p><strong>Member Since:</strong> {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "N/A"}</p>
                  </>
                ) : (
                  <p><strong>Name:</strong> {user.name || "N/A"}</p>
                )}
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
      </div>
    </div>
  );
}

export default ProfilePage;

