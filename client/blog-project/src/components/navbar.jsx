import { useState } from "react";
import { FiBell } from "react-icons/fi"; // Notification bell icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
        <header className="navbar">
          <div className="left-section">
           <Link to="/" className="logo">MyBlog</Link>
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="right-section">
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <div className="nav-links">
              <div className="nav-notification">
                <FiBell className="notification-icon"/>
                <span className="notifications">1</span>
              </div>
            <nav className={menuOpen ? "open" : ""}>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </nav>
            </div>
          </div>
        </header>
    </>
  );
};

export default Navbar;