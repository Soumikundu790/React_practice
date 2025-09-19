import "./index.css";
import cartoon from "../assets/cartoon.png";
import { useNavigate } from "react-router-dom";

export default function WelcomeSection() {
  const navigate = useNavigate();

  return (
    <div className="welcome-card">
      <div className="logo">+ taskly</div>
      <h1>Freelancer's life is a mess</h1>
      <p>
        Planning the daily work,<br />it has never been so impacting
      </p>
      <button className="start-btn" onClick={() => navigate("/ScheduleSection")}>
        Start
      </button>
      <div className="login-link">
        Do you have an account? <span>Login</span>
      </div>
      <div className="cartoon-container">
        <img src={cartoon} alt="cartoon" className="cartoon-image" />
      </div>
    </div>
  );
}
