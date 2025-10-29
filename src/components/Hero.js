// src/components/Hero.js
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
          <div className="hero-actions">
            <a className="btn" href="/reservations">Reserve a Table</a>
          </div>
        </div>

        <div className="hero-media float-out">
          <img
            src={require("../assets/hero-image.jpg")}
            alt="Little Lemon appetizers"
          />
        </div>

      </div>
    </section>
  );
}
