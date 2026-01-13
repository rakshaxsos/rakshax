export default function PolicePanel() {
  return (
    <div className="page">
      <h1>👮 Police SOS Dashboard</h1>

      <div className="card">
        <h3>Active SOS Alert</h3>
        <p>Name: Demo User</p>
        <p>Location: GPS Coordinates</p>
        <p>Status: Awaiting response</p>

        <button className="primary-btn">Mark as Resolved</button>
      </div>
    </div>
  );
}
