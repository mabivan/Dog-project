import { NavLink } from 'react-router-dom';
import { FaCrown, FaSearch, FaCalendarAlt, FaBox, FaQuestionCircle, FaCog } from 'react-icons/fa';
import { useSearch } from './SearchContext';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const items = [
    { to: "/premium", icon: <FaCrown />, text: "Premium" },
    { to: "/breeds", icon: <FaSearch />, text: "Breeds" },
    { to: "/appointments", icon: <FaCalendarAlt />, text: "Appointments" },
    { to: "/orders", icon: <FaBox />, text: "Orders" },
    { to: "/help", icon: <FaQuestionCircle />, text: "Help" },
    { to: "/settings", icon: <FaCog />, text: "Settings" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search breeds or dogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
