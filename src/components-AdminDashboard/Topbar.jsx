import adminAvatar from "../assets/icons/admin-avatar.jpg";
import topbarSearch from "../assets/icons/topbar-search.png";
import topbarBell from "../assets/icons/topbar-bell.png";
import topbarHelp from "../assets/icons/topbar-help.png";
import topbarSettings from "../assets/icons/topbar-settings.png";
import "./Topbar.css";

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

export default Topbar;