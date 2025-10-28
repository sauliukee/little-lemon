// src/components/Testimonials.js
const reviews = new Array(4).fill(0).map((_, i) => ({
  name: `User ${i + 1}`,
  rating: 5,
  text: "Great food and atmosphere!",
}));

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">Testimonials</h2>

        <div className="review-grid">
          {reviews.map((r) => (
            <article key={r.name} className="review">
              <div className="stars" aria-label={`${r.rating} out of 5 stars`}>★★★★★</div>
              <div className="reviewer">
                <div className="avatar ph-img" aria-hidden="true" />
                <div className="name">{r.name}</div>
              </div>
              <p className="review-text">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
