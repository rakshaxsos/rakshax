import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin Control Panel</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">
          <h3>👮 Police Dashboard</h3>
          <Link to="/admin/police">
            <button className="primary-btn">Open</button>
          </Link>
        </div>

        <div className="card">
          <h3>🧠 Psychologist Dashboard</h3>
          <Link to="/admin/psychologist">
            <button className="primary-btn">Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
