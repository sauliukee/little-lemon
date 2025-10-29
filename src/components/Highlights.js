// src/components/Highlights.js
import greekSalad   from "../assets/greek-salad.jpg";
import bruschetta   from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

export default function Highlights() {
  return (
    <section className="highlights" aria-labelledby="specials-heading">
      <div className="container">
        <div className="section-head">
          <h2 id="specials-heading">This week’s specials!</h2>
          <a className="btn" href="/menu">Online Menu</a>
        </div>

        <div className="card-grid">
          <article className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Greek Salad</h3>
                <strong className="price">$12.99</strong>
              </div>
              <p className="card-text">Crisp lettuce, peppers, olives, feta…</p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>

          <article className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Bruschetta</h3>
                <strong className="price">$5.99</strong>
              </div>
              <p className="card-text">Grilled bread, garlic, tomatoes…</p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>

          <article className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Lemon Dessert</h3>
                <strong className="price">$5.00</strong>
              </div>
              <p className="card-text">Grandma’s recipe with lemon zest…</p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
