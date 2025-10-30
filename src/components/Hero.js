import { Link } from "react-router-dom";
import heroImg from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <section className="hero hero--band" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Little Lemon</h1>
          <p className="location">Chicago</p>
          <p className="lead">
            Family-owned Mediterranean restaurant focused on traditional recipes with a modern twist.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: "1rem" }}>
            <Link className="btn" to="/reservations">Reserve a Table</Link>
          </div>
        </div>

        <div className="hero-media float-out">
          <img src={heroImg} alt="Little Lemon appetizers" />
        </div>
      </div>
    </section>
  );
}
