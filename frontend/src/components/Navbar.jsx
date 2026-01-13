import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>RakshaX</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
