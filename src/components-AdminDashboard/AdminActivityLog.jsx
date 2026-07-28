import activityUser from "../assets/icons/activity-user.png";
import activityFile from "../assets/icons/activity-file.png";
import activityShieldCheck from "../assets/icons/activity-shield-check.png";
import activityShield from "../assets/icons/activity-shield.png";
import activityAlert from "../assets/icons/activity-alert.png";
import "./AdminActivityLog.css";

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

export default AdminActivityLog;
