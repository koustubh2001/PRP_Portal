import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import PlacementPerformance from "./PlacementPerformance";
import AdminActivityLog from "./AdminActivityLog";
import UserManagementTable from "./UserManagementTable";
import "./AdminDashboard.css";

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