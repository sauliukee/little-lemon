// src/components/About.js
import heroImg from "../assets/About.jpg";

export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-copy">
          <h2 id="about-heading">Little Lemon</h2>
          <h3 className="about-sub">Chicago</h3>

          <p className="about-lead">
            Little Lemon is a <strong>family-owned Mediterranean restaurant</strong> built on
            passion, tradition, and the belief that great food brings people together.
          </p>

          <p>
            Our family’s values of <strong>care</strong>, <strong>quality</strong>, and
            <strong> warm hospitality</strong> guide everything we do — from the ingredients
            we choose to the way we serve our guests. Each dish is prepared with locally
            sourced produce, premium olive oil, and recipes passed down through generations.
          </p>

          <ul className="about-list">
            <li>Authentic Mediterranean flavors with a modern twist</li>
            <li>Warm, cozy atmosphere that feels like home</li>
            <li>Committed to quality, sustainability, and community</li>
          </ul>

          <p>
            Come experience the taste of tradition, where every meal tells a story —
            crafted with love and meant to be shared.
          </p>
        </div>

        <div className="about-media">
          <img
            className="about-img primary"
            src={heroImg}
            alt="Inside view of Little Lemon restaurant with cozy seating"
          />
          <div className="about-card">
            <strong>Family Values, Authentic Taste</strong>
            <p>Serving the community since 1995</p>
          </div>
        </div>
      </div>
    </section>
  );
}
