export default function Checkout() {
  return (
    <div className="page">
      <h1>Checkout</h1>
      <p>Complete your SOS device order</p>

      {/* ORDER SUMMARY */}
      <section className="card" style={{ marginTop: "20px" }}>
        <h3>Order Summary</h3>
        <p><strong>Product:</strong> RakshaX SOS Device</p>
        <p><strong>Quantity:</strong> 1</p>
        <p><strong>Price:</strong> ₹ —</p>
      </section>

      {/* CUSTOMER DETAILS */}
      <section className="card" style={{ marginTop: "30px" }}>
        <h3>Customer Details</h3>

        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Full Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Pincode" />
      </section>

      {/* IMPORTANT NOTE */}
      <section style={{ marginTop: "20px" }}>
        <p>
          ⚠️ <strong>Note:</strong> RakshaX SOS devices come with built-in SIM and
          GPS. The device works independently and does not require a mobile
          phone during emergencies.
        </p>
      </section>

      {/* PLACE ORDER */}
      <section style={{ marginTop: "30px" }}>
        <button className="primary-btn">
          Place Order (Payment Coming Soon)
        </button>
      </section>
    </div>
  );
}
