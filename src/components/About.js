// src/components/About.js
export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-copy">
          <h2 id="about-heading">Little Lemon</h2>
          <p className="location">Chicago</p>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <div className="about-media">
          <div className="ph-img tall" aria-hidden="true" />
          <div className="ph-img overlap" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
