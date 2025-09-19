import "./index.css";
import { useState } from "react";
import EventModalSection from "./EventModalSection";

const schedule = [
  { title: "⏰ Wake up Buddy", time: "7:00 AM" },
  { title: "🧘‍♂️Morning Yoga", time: "8:00 AM" },
  { title: "🏋️Daily workout", time: "9:00 AM", details: ["Squat 10x3", "Push up 10x3", "Push up 10x3"] },
  { title: "🧑‍💻Shift project kick off pt.1", time: "10:00 AM", details: ["Zoom call, kick off with Elena and Jordan from Shift.", "3 attendees"] },
  { title: "🍣Skype Sushi", time: "12:30 AM", details: ["Lunch with Ally, fight this quarantine with humor!"] }
];

export default function ScheduleSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="schedule-card">
      <h2>Today's schedule</h2>
      <div className="date">Monday 12</div>
      <ul className="schedule-list">
        {schedule.map((item, idx) => (
          <li key={idx} className={idx === 0 ? "highlight" : ""}>
            <div className="item-title">
              {item.title}
              {idx === 0 && (
                <button 
                  className="open-modal-btn" 
                  onClick={() => setShowModal(true)}
                >
                  Open
                </button>
              )}
            </div>
            <div className="item-time">{item.time}</div>
            {item.details && (
              <ul className="item-details">
                {item.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {showModal && <EventModalSection onClose={() => setShowModal(false)} />}
    </div>
  );
}
