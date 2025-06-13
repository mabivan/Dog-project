import { NavLink } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const navigate = useNavigate();
  const links = [
    { to: "/breeds", text: "Breeds" },
    { to: "/about", text: "About" },
    { to: "/service", text: "Service" },
    { to: "/contact", text: "Contact" },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="brand-container">
          <NavLink to="/">
            <img 
              src="/Dog-logging" 
              alt="Trinity Dogs Logo" 
              className="logo"
            />
          </NavLink>
          <span className="brand-name">Trinity Dogs</span>
        </div>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className="navbar-right">
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt className="logout-icon" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;