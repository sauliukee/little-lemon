// src/components/Highlights.js
const items = [
  { title: "Greek Salad", price: "$12.99" },
  { title: "Bruschetta", price: "$5.99" },
  { title: "Lemon Dessert", price: "$5.00" },
];

export default function Highlights() {
  return (
    <section className="highlights" aria-labelledby="specials-heading">
      <div className="container">
        <div className="section-head">
          <h2 id="specials-heading">Specials</h2>
          <a className="btn-outline" href="/menu">Online Menu</a>
        </div>

        <div className="card-grid">
          {items.map((it) => (
            <article key={it.title} className="card">
              <div className="ph-img" aria-hidden="true" />
              <div className="card-body">
                <header className="card-title-row">
                  <h3 className="card-title">{it.title}</h3>
                  <strong className="price">{it.price}</strong>
                </header>
                <p className="card-text">
                  Short description of the dish goes here. Fresh, tasty, seasonal.
                </p>
                <a className="card-link" href="/order">Order a delivery →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
