export default function OurTeam() {
  const team = [
    {
      name: "Priyal Soni",
      age: "21",
      role: "Co-founder & HOD",
      bio: "Leads product design, user experience, and branding for RakshaX."
    },
    {
      name: "Vedang Soni",
      age: "18",
      role: "Co-founder & CEO",
      bio: "Oversees strategy, partnerships, and overall vision of RakshaX."
    },
    {
      name: "Pratyush Swarnkar",
      age: "17",
      role: "Co-founder & CTO",
      bio: "Heads technology development and platform architecture."
    },
    {
      name: "Tanika Soni",
      age: "17",
      role: "Co-founder & CMO",
      bio: "Manages marketing, outreach, and community engagement."
    }
  ];

  return (
    <div className="page">
      <h1>Our Team</h1>
      <p>
        RakshaX is built by a dedicated team working to create a safer world
        for women through technology and human support.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {team.map((member, index) => (
          <div className="card" key={index} style={{ textAlign: "center" }}>
            {/* PHOTO PLACEHOLDER */}
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#ddd",
                margin: "0 auto 15px"
              }}
            />

            <h3>{member.name}</h3>
            <p><strong>Age:</strong> {member.age}</p>
            <p><strong>Role:</strong> {member.role}</p>
            <p style={{ fontSize: "14px" }}>{member.bio}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <p>
          <strong>
            RakshaX is not just a product — it is a responsibility.
          </strong>
        </p>
      </div>
    </div>
  );
}
