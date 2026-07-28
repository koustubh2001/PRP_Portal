import "./UserManagementTable.css";

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
        <h3 className="userManagementTable-title">User Management &amp; Recent Activity</h3>
        <div className="userManagementTable-actions">
          <button className="userManagementTable-actionBtn">
            <span className="userManagementTable-actionGlyph">☰</span>
            Filter
          </button>
          <button className="userManagementTable-actionBtn">
            <span className="userManagementTable-actionGlyph">⇅</span>
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
                      <span className="userManagementTable-userCellName">{row.name}</span>
                      <span className="userManagementTable-userCellEmail">{row.email}</span>
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
                <td className="userManagementTable-activityCell">{row.activity}</td>
                <td className="userManagementTable-timestampCell">{row.timestamp}</td>
                <td className="userManagementTable-actionsCell">
                  <button className="userManagementTable-actionsBtn" aria-label="Row actions">
                    ⋮
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

export default UserManagementTable;