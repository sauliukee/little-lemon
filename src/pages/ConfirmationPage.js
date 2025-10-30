// src/pages/ConfirmationPage.js
import { useLocation, Link } from "react-router-dom";

export default function ConfirmationPage() {
  const { state } = useLocation();
  const data = state?.reservation;

  return (
    <section className="container section">
      <h1>Reservation confirmed 🎉</h1>

      {!data ? (
        <p>We didn't catch your details. Please make a new reservation.</p>
      ) : (
        <div className="round shadow-sm" style={{padding:"1rem", border:"1px solid var(--clr-border)"}}>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Time:</strong> {data.time}</p>
          <p><strong>Guests:</strong> {data.guests}</p>
          {data.occasion !== "None" && <p><strong>Occasion:</strong> {data.occasion}</p>}
        </div>
      )}

      <div style={{marginTop:"1rem", display:"flex", gap:".75rem"}}>
        <Link className="btn" to="/menu">See the Menu</Link>
        <Link className="btn-outline" to="/">Back to Home</Link>
      </div>
    </section>
  );
}
