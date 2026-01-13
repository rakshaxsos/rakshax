import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PolicePanel from "./pages/admin/PolicePanel";
import PsychologistPanel from "./pages/admin/PsychologistPanel";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";
import OurTeam from "./pages/OurTeam";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/police" element={<PolicePanel />} />
        <Route path="/admin/psychologist" element={<PsychologistPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </>
  );
}
