import { Link } from "react-router-dom";

export default function Buy() {
  const devices = [
    {
      title: "Wearable Band",
      desc: "Comfortable wearable SOS device with built-in SIM & GPS. Works independently.",
    },
    {
      title: "Pendant / Locket",
      desc: "Discreet pendant-style SOS device designed for daily wear.",
    },
    {
      title: "Shoe Sole",
      desc: "Hidden SOS device embedded inside shoe sole for silent emergencies.",
    },
    {
      title: "Mobile Cover",
      desc: "SOS-enabled mobile cover with unique trigger patterns.",
    },
  ];

  return (
    <div className="page">
      <h1>Buy RakshaX SOS Device</h1>
      <p>
        Choose a physical SOS device designed for women safety.
        All devices come with built-in SIM & GPS and work even without a phone.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {devices.map((device, index) => (
          <div className="card" key={index}>
            <h3>{device.title}</h3>
            <p>{device.desc}</p>

            <ul>
              <li>Built-in SIM</li>
              <li>Live GPS tracking</li>
              <li>Works without mobile phone</li>
              <li>Multiple SOS trigger patterns</li>
            </ul>

            <p><strong>Price:</strong> Coming Soon</p>

            <Link to="/checkout">
              <button className="primary-btn">Proceed to Checkout</button>
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <p>
          ⚠️ <strong>Important:</strong> RakshaX devices are hardware-based SOS
          systems. Mobile phone is optional and not required during emergencies.
        </p>
      </div>
    </div>
  );
}
