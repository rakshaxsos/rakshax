import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <section style={{ marginBottom: "50px" }}>
        <h1>RakshaX</h1>
        <h3>Hardware-based SOS for Women Safety</h3>

        <p>
          RakshaX provides physical SOS devices that work independently using
          built-in SIM and GPS — even without a mobile phone.
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <Link to="/buy">
            <button className="primary-btn">Buy SOS Device</button>
          </Link>
          <Link to="/services">
            <button className="primary-btn" style={{ background: "#0B1D39" }}>
              How It Works
            </button>
          </Link>
        </div>
      </section>

      {/* DEVICE TYPES */}
      <section>
        <h2>Available SOS Devices</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {[
            "Wearable Band",
            "Pendant / Locket",
            "Shoe Sole",
            "Mobile Cover"
          ].map((device, index) => (
            <div className="card" key={index}>
              <h3>{device}</h3>
              <p>Discreet SOS device with SIM & GPS.</p>
              <Link to="/buy">
                <button className="primary-btn">Buy Now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: "60px" }}>
        <h2>How RakshaX Works</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          <div className="card">
            <h3>1️⃣ Press SOS</h3>
            <p>
              User presses the SOS button on the physical device using a
              predefined pattern.
            </p>
          </div>

          <div className="card">
            <h3>2️⃣ Alert Sent</h3>
            <p>
              Live GPS location is sent via device SIM to RakshaX control room
              and emergency contacts.
            </p>
          </div>

          <div className="card">
            <h3>3️⃣ Immediate Response</h3>
            <p>
              Authorities, volunteers, and support systems take action
              immediately.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RAKSHAX */}
      <section style={{ marginTop: "60px" }}>
        <h2>Why RakshaX</h2>

        <ul>
          <li>✔ Works even without a mobile phone</li>
          <li>✔ Designed specifically for women safety</li>
          <li>✔ Community-first response model</li>
          <li>✔ Professional psychological support</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2>Your safety should not depend on your phone.</h2>
        <Link to="/buy">
          <button className="primary-btn">Buy Your SOS Device</button>
        </Link>
      </section>

    </div>
  );
}
