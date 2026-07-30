import { useState } from "react";

import activityUser from "../assets/icons/activity-user.png";
import activityFile from "../assets/icons/activity-file.png";
import activityShieldCheck from "../assets/icons/activity-shield-check.png";
import activityShield from "../assets/icons/activity-shield.png";
import activityAlert from "../assets/icons/activity-alert.png";

import navHome from "../assets/icons/nav-home.png";
import navUsers from "../assets/icons/nav-users.png";
import navCheck from "../assets/icons/nav-check.png";
import navSettings from "../assets/icons/nav-settings.png";
import navAnalytics from "../assets/icons/nav-analytics.png";

import statPlacements from "../assets/icons/stat-placements.png";
import statStudents from "../assets/icons/stat-students.png";
import statRecruiters from "../assets/icons/stat-recruiters.png";
import statCompanies from "../assets/icons/stat-companies.png";
import noteUpIcon from "../assets/icons/note-up.png";
import noteNeutralIcon from "../assets/icons/note-neutral.png";
import noteWarnIcon from "../assets/icons/note-warn.png";
import noteMutedIcon from "../assets/icons/note-muted.png";

import adminAvatar from "../assets/icons/admin-avatar.jpg";
import topbarSearch from "../assets/icons/topbar-search.png";
import topbarBell from "../assets/icons/topbar-bell.png";
import topbarHelp from "../assets/icons/topbar-help.png";
import topbarSettings from "../assets/icons/topbar-settings.png";

import filterIcon from "../assets/icons/filter.png";
import sortIcon from "../assets/icons/sort.png";
import actionIcon from "../assets/icons/action-dots.png";

import "./AdminDashboard.css";

// 1. SIDEBAR COMPONENT
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

// 2. TOPBAR COMPONENT
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-searchWrap">
        <span className="topbar-searchIcon">
          <img src={topbarSearch} alt="Search" />
        </span>
        <input
          type="text"
          className="topbar-searchInput"
          placeholder="Search resources, users, or logs..."
        />
      </div>

      <div className="topbar-right">
        <div className="topbar-iconsGroup">
          <button className="topbar-iconBtn" aria-label="Notifications">
            <img src={topbarBell} alt="Notifications" />
          </button>
          <button className="topbar-iconBtn" aria-label="Help">
            <img src={topbarHelp} alt="Help" />
          </button>
          <button className="topbar-iconBtn" aria-label="Settings">
            <img src={topbarSettings} alt="Settings" />
          </button>
        </div>

        <div className="topbar-divider" />

        <div className="topbar-userInfo">
          <div className="topbar-userText">
            <span className="topbar-userName">Admin User</span>
            <span className="topbar-userRole">SUPER ADMIN</span>
          </div>
          <img
            src={adminAvatar}
            alt="Admin User avatar"
            className="topbar-userAvatar"
          />
        </div>
      </div>
    </div>
  );
};

// 3. STATS CARDS COMPONENT
const StatsCards = () => {
  const cards = [
    {
      label: "TOTAL PLACEMENTS",
      value: "4,120",
      note: "82% of Annual Goal",
      noteType: "up",
      noteIcon: noteUpIcon,
      icon: statPlacements,
    },
    {
      label: "ACTIVE STUDENTS",
      value: "12,482",
      note: "+12% vs last month",
      noteType: "neutral",
      noteIcon: noteNeutralIcon,
      icon: statStudents,
    },
    {
      label: "VERIFIED RECRUITERS",
      value: "3,142",
      note: "14 pending review",
      noteType: "warn",
      noteIcon: noteWarnIcon,
      icon: statRecruiters,
    },
    {
      label: "PARTNER COMPANIES",
      value: "312",
      note: "Stable Growth",
      noteType: "muted",
      noteIcon: noteMutedIcon,
      icon: statCompanies,
    },
  ];

  return (
    <div className="statsCards-container">
      {cards.map((card, index) => (
        <div key={index} className="statsCard">
          <div className="statsCard-header">
            <span className="statsCard-label">{card.label}</span>
            <div className="statsCard-iconWrapper">
              <img src={card.icon} alt={card.label} />
            </div>
          </div>
          <div className="statsCard-value">{card.value}</div>
          <div className={`statsCard-note statsCard-note--${card.noteType}`}>
            {card.noteIcon && (
              <img src={card.noteIcon} alt="" className="statsCard-noteIcon" />
            )}
            <span>{card.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// 4. PLACEMENT PERFORMANCE COMPONENT
const PlacementPerformance = () => {
  const months = [
    { label: "Jan", height: "115.19px", value: 38 },
    { label: "Feb", height: "166.39px", value: 62 },
    { label: "Mar", height: "140.80px", value: 48 },
    { label: "Apr", height: "217.59px", value: 88 },
    { label: "May", height: "192px", value: 70 },
    { label: "Jun", height: "243.19px", value: 100, isHighlight: true },
  ];

  return (
    <div className="placementPerformance-card">
      <div className="placementPerformance-header">
        <div className="placementPerformance-leftContent">
          <h3 className="placementPerformance-title">Placement Performance</h3>
          <p className="placementPerformance-subtitle">
            Monthly placement success trends
          </p>
        </div>
        <div className="placementPerformance-legend">
          <span className="placementPerformance-legendDot" />
          <span className="placementPerformance-legendText">Placements</span>
        </div>
      </div>

      <div className="placementPerformance-chartWrap">
        <div className="placementPerformance-columns">
          {months.map((item, index) => (
            <div className="placementPerformance-columnItem" key={index}>
              <div
                className={`placementPerformance-bar ${item.isHighlight ? "highlight" : ""}`}
                style={{ height: item.height }}
                title={`${item.label}: ${item.value}`}
              />
              <span className="placementPerformance-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 5. ADMIN ACTIVITY LOG COMPONENT
const AdminActivityLog = () => {
  const activities = [
    {
      title: "New User Registration",
      meta: "Alex Morgan • 2 mins ago",
      icon: activityUser,
      bg: "#D1FAE5",
    },
    {
      title: "Company Document Uploaded",
      meta: "Nexus Dynamics • 45 mins ago",
      icon: activityFile,
      bg: "#8D61D71A",
    },
    {
      title: "Recruiter Verified",
      meta: "Global Tech Sol. • 3 hrs ago",
      icon: activityShieldCheck,
      bg: "#FEF3C7",
    },
    {
      title: "Security Policy Updated",
      meta: "Applied globally • 5 hrs ago",
      icon: activityShield,
      bg: "#DBEAFE",
    },
    {
      title: "Failed Login Attempt",
      meta: "IP: 192.168.1.45 • 8 hrs ago",
      icon: activityAlert,
      bg: "#FFDAD633",
    },
  ];

  return (
    <div className="adminActivityLog-card">
      <div className="adminActivityLog-header">
        <h3 className="adminActivityLog-title">Admin Activity Log</h3>
      </div>
      <div className="adminActivityLog-content">
        <ul className="adminActivityLog-list">
          {activities.map((activity) => (
            <li className="adminActivityLog-item" key={activity.title}>
              <span
                className="adminActivityLog-icon"
                style={{ backgroundColor: activity.bg }}
              >
                <img src={activity.icon} alt={activity.title} />
              </span>
              <div className="adminActivityLog-text">
                <span className="adminActivityLog-itemTitle">
                  {activity.title}
                </span>
                <span className="adminActivityLog-meta">{activity.meta}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="adminActivityLog-footer">
        <button className="adminActivityLog-viewHistoryBtn">
          View Full History
        </button>
      </div>
    </div>
  );
};

// 6. USER MANAGEMENT TABLE COMPONENT
const UserManagementTable = () => {
  const rows = [
    {
      initials: "SK",
      name: "Sarah K. Jenkins",
      email: "sarah.j@globalhr.com",
      role: "RECRUITER",
      activity: 'Published "Senior AI Architect" role',
      timestamp: "2 mins ago",
    },
    {
      initials: "DL",
      name: "David Lee",
      email: "d.lee@candidate.me",
      role: "CANDIDATE",
      activity: "Submitted portfolio via AI matching",
      timestamp: "1 hour ago",
    },
  ];

  return (
    <div className="userManagementTable-card">
      <div className="userManagementTable-header">
        <h3 className="userManagementTable-title">
          User Management &amp; Recent Activity
        </h3>
        <div className="userManagementTable-actions">
          <button className="userManagementTable-actionBtn">
            <span className="userManagementTable-actionGlyph">
              <img src={filterIcon} alt="Filter" />
            </span>
            Filter
          </button>
          <button className="userManagementTable-actionBtn">
            <span className="userManagementTable-actionGlyph">
              <img src={sortIcon} alt="Sort" />
            </span>
            Sort
          </button>
        </div>
      </div>

      <div className="userManagementTable-scroll">
        <table className="userManagementTable-table">
          <thead>
            <tr>
              <th>USER</th>
              <th>ROLE</th>
              <th>ACTIVITY</th>
              <th>TIMESTAMP</th>
              <th className="userManagementTable-actionsHeader">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.email}>
                <td>
                  <div className="userManagementTable-userCell">
                    <span className="userManagementTable-userAvatarInitials">
                      {row.initials}
                    </span>
                    <div className="userManagementTable-userCellText">
                      <span className="userManagementTable-userCellName">
                        {row.name}
                      </span>
                      <span className="userManagementTable-userCellEmail">
                        {row.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={`userManagementTable-roleBadge userManagementTable-roleBadge--${row.role.toLowerCase()}`}
                  >
                    {row.role}
                  </span>
                </td>
                <td className="userManagementTable-activityCell">
                  {row.activity}
                </td>
                <td className="userManagementTable-timestampCell">
                  {row.timestamp}
                </td>
                <td className="userManagementTable-actionsCell">
                  <button
                    className="userManagementTable-actionsBtn"
                    aria-label="Row actions"
                  >
                    <img src={actionIcon} alt="Actions" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// MAIN ADMIN DASHBOARD WRAPPER
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        <Topbar />
        <div className="admin-dashboard-body">
          <StatsCards />
          <div className="admin-middle-row">
            <PlacementPerformance />
            <AdminActivityLog />
          </div>
          <UserManagementTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
