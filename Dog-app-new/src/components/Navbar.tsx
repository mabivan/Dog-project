import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Nashartex = ({ toggleSidebar }: NavbarProps) => {
  const links = [
    { to: "/breeds", text: "Breeds" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars />
      </button> 

      <div className="brand-container">
        <NavLink to="/#">
          <img 
            src="/Dog-logging" 
            alt="Trinity Dogs Logo" 
            className="logo"
          />
        </NavLink>
        <span className="brand-name">Trinity Dogs</span>
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
    </nav>
  );
};

export default Nashartex;