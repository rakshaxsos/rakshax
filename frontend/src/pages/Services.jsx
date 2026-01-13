export default function Services() {
  return (
    <div className="page">
      <h1>Our Safety Services</h1>
      <p>
        RakshaX is a complete women safety ecosystem built around physical SOS
        devices, real-time response systems, and human support.
      </p>

      {/* SOS HARDWARE SYSTEM */}
      <section style={{ marginTop: "40px" }}>
        <h2>🚨 SOS Hardware Emergency System</h2>

        <div className="card">
          <p>
            RakshaX provides physical SOS devices designed to work independently
            using built-in SIM and GPS. These devices do not rely on mobile phones
            during emergencies.
          </p>

          <ul>
            <li>Wearable band, pendant, shoe sole, mobile cover</li>
            <li>Multiple SOS trigger patterns for different device designs</li>
            <li>Live GPS location tracking</li>
            <li>Alerts sent instantly to control room & trusted contacts</li>
            <li>Works even if the phone is not nearby</li>
          </ul>
        </div>
      </section>

      {/* SELF DEFENCE */}
      <section style={{ marginTop: "50px" }}>
        <h2>🥋 Self-Defence Training</h2>

        <div className="card">
          <p>
            RakshaX offers self-defence training programs designed specifically
            for women to build confidence, awareness, and physical preparedness.
          </p>

          <ul>
            <li>In-app training modules</li>
            <li>Live online sessions with trainers</li>
            <li>Basic to advanced techniques</li>
            <li>Designed for real-life situations</li>
          </ul>
        </div>
      </section>

      {/* PSYCHOLOGIST */}
      <section style={{ marginTop: "50px" }}>
        <h2>🧠 Psychologist & Mental Health Support</h2>

        <div className="card">
          <p>
            Safety does not end after the incident. RakshaX provides professional
            psychological support to help victims recover emotionally.
          </p>

          <ul>
            <li>Confidential counselling sessions</li>
            <li>Support for trauma, fear, and anxiety</li>
            <li>Available through the RakshaX app</li>
            <li>Handled by trained professionals</li>
          </ul>
        </div>
      </section>

      {/* FUTURE */}
      <section style={{ marginTop: "60px" }}>
        <h2>🔮 What’s Coming Next</h2>

        <div className="card">
          <ul>
            <li>Verified nearby women volunteer support</li>
            <li>Direct police dashboard integration</li>
            <li>Audio & video evidence during SOS</li>
            <li>Smarter response using location intelligence</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
