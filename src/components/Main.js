import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
console.log(greekSalad, bruschetta, lemonDessert);


export default function Highlights() {
    console.log(greekSalad, bruschetta, lemonDessert);
  return (
    <section className="highlights" aria-labelledby="specials-heading">
      <div className="container">
        <div className="section-head">
          <h2 id="specials-heading">This week’s specials!</h2>
          <a className="btn-outline" href="/menu">Online Menu</a>
        </div>

        <div className="card-grid">
          {/* Greek Salad */}
          <article className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Greek Salad</h3>
                <strong className="price">$12.99</strong>
              </div>
              <p className="card-text">
                The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.
              </p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>

          {/* Bruschetta */}
          <article className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Bruschetta</h3>
                <strong className="price">$5.99</strong>
              </div>
              <p className="card-text">
                Grilled bread garlic, seasoned with salt and olive oil topped with tomatoes.
              </p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>

          {/* Lemon Dessert */}
          <article className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">Lemon Dessert</h3>
                <strong className="price">$5.00</strong>
              </div>
              <p className="card-text">
                This comes straight from grandma’s recipe book — every last ingredient has been sourced carefully.
              </p>
              <a className="card-link" href="/order">Order a delivery →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Main() {
  return (
    <main id="main">
      <div className="container">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-inner" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <div className="hero-text" style={{flex: 1}}>
              <h1 id="hero-heading">Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="placeholder--short">Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
              <div style={{marginTop: '1rem'}}>
                <span className="placeholder placeholder--short" aria-hidden="true"></span>
                <div style={{height: '0.5rem'}} aria-hidden="true"></div>
                <button aria-label="Reserve a table">Reserve a Table</button>
              </div>
            </div>

            <div className="hero-media" style={{width: '220px'}}>
              <div className="placeholder placeholder--thumb" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section aria-labelledby="testimonials-heading" style={{marginTop: '1rem'}}>
          <h2 id="testimonials-heading">Testimonials</h2>
          <div className="testimonials" style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            <div className="placeholder" style={{width: '120px', height: '100px'}} aria-hidden="true"></div>
            <div className="placeholder" style={{width: '120px', height: '100px'}} aria-hidden="true"></div>
            <div className="placeholder" style={{width: '120px', height: '100px'}} aria-hidden="true"></div>
            <div className="placeholder" style={{width: '120px', height: '100px'}} aria-hidden="true"></div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about-heading" style={{marginTop: '1rem'}}>
          <div className="about-inner" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <div style={{flex: 1}}>
              <h2 id="about-heading">Little Lemon</h2>
              <h3>Chicago</h3>
              <p className="placeholder--short">Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
            </div>

            <div style={{width: '220px', position: 'relative'}}>
              <div className="placeholder" style={{width: '160px', height: '160px', position: 'absolute', right: 0}} aria-hidden="true"></div>
              <div className="placeholder" style={{width: '120px', height: '120px', position: 'absolute', left: 0, top: 40}} aria-hidden="true"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
