// src/components/Testimonials.js
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

const reviews = [
  {
    name: "Mary Johnson",
    rating: 5,
    text: "Great food and atmosphere!",
    image: user1,
  },
  {
    name: "Tom Smith",
    rating: 5,
    text: "Friendly staff and tasty dishes.",
    image: user2,
  },
  {
    name: "Amanda Lee",
    rating: 5,
    text: "The lemon dessert was my favorite!",
    image: user3,
  },
  {
    name: "Charlie Davis",
    rating: 5,
    text: "Would definitely come again!",
    image: user4,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">Testimonials</h2>

        <div className="review-grid">
          {reviews.map((r) => (
            <article key={r.name} className="review">
              <div className="stars" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(r.rating)}
              </div>
              <div className="reviewer">
                <img src={r.image} alt={r.name} className="avatar" />
                <strong>{r.name}</strong>
              </div>
              <p className="review-text">“{r.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
