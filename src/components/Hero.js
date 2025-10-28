// src/components/Hero.js
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Little Lemon</h1>
          <p className="location">Chicago</p>
          <p className="lead">
            Family-owned Mediterranean restaurant focused on traditional recipes with a modern twist.
          </p>
          <div className="hero-actions">
            <a className="btn" href="/reservations">Reserve a Table</a>
            <a className="btn-outline" href="/order">Order Online</a>
          </div>
        </div>

        <div className="hero-media">
          <div className="ph-img" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
