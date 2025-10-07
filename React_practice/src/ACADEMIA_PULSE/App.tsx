import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLoginPortal from "./StudentLoginPortal";
import InstitutionDashboard from "./InstitutionDashboard";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLoginPortal />} />
        <Route path="/dashboard" element={<InstitutionDashboard />} />
      </Routes>
    </Router>
  );
}
