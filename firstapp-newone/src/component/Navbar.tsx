interface NavbarProps {
  onNavigate: (page: "home" | "profile") => void;
  currentPage: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  showSearch?: boolean;
  onHomeClick?: () => void;
}

function Navbar({ onNavigate, currentPage, searchQuery, onSearchChange, showSearch = false, onHomeClick }: NavbarProps) {
  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      onNavigate("home");
    }
  };

  return (
    <nav className="sidebar">
      <h2> Mehak Travels</h2>
      <ul>
        <li
          className={currentPage === "home" ? "active" : ""}
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li> Contact</li>
        <li
          className={currentPage === "profile" ? "active" : ""}
          onClick={() => onNavigate("profile")}
        >
          Profile
        </li>
      </ul>
      {showSearch && (
        <div className="sidebar-search">
          <input
            type="text"
            placeholder="🔍 Search state..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
