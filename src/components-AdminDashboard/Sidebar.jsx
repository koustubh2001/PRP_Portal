import { useState } from "react";
import navHome from "../assets/icons/nav-home.png";
import navUsers from "../assets/icons/nav-users.png";
import navCheck from "../assets/icons/nav-check.png";
import navSettings from "../assets/icons/nav-settings.png";
import navAnalytics from "../assets/icons/nav-analytics.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: navHome },
    { label: "User Management", icon: navUsers },
    { label: "Company Verification", icon: navCheck },
    { label: "Platform Settings", icon: navSettings },
    { label: "Analytics", icon: navAnalytics },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <ul className="sidebar-navList">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`sidebar-navItem ${
                activeItem === item.label ? "sidebar-navItemActive" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-navIcon">
                <img src={item.icon} alt={item.label} />
              </span>
              <span className="sidebar-navLabel">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;