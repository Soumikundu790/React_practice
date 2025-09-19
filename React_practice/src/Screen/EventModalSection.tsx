export default function EventModalSection({ onClose = () => {} }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-icon">👵</div>
        <h3>Birthday call with mum</h3>
        <div className="modal-row bg-yellow-500">
          <span >⏰ When it happens</span>
          <button className="modal-btn">4:00 PM ▼</button>
        </div>
        <div className="modal-row">
          <span>✏️ Add a note</span>
          <button className="modal-btn">Add +</button>
        </div>
        <div className="modal-row">
          <span>🙋‍♂️ Attendees</span>
          <button className="modal-btn">Add +</button>
        </div>
        <button className="create-event-btn">Create event</button>
      </div>
    </div>
  );
}

