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

        {/* Specials */}
        <section aria-labelledby="specials-heading">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 id="specials-heading">Specials</h2>
            <button aria-label="Online Menu">Online Menu</button>
          </div>

          <div className="specials-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
            <article className="card">
              <div className="placeholder" style={{height: '120px'}} aria-hidden="true"></div>
              <h3>Greek Salad <small>$12.99</small></h3>
              <p className="placeholder--short">Crisp lettuce, tomatoes, cucumbers, feta cheese and olives.</p>
            </article>

            <article className="card">
              <div className="placeholder" style={{height: '120px'}} aria-hidden="true"></div>
              <h3>Bruschetta <small>$8.99</small></h3>
              <p className="placeholder--short">Grilled bread garlic, tomatoes, olive oil and basil.</p>
            </article>

            <article className="card">
              <div className="placeholder" style={{height: '120px'}} aria-hidden="true"></div>
              <h3>Lemon Dessert <small>$6.00</small></h3>
              <p className="placeholder--short">A tangy sweet finish to your meal.</p>
            </article>
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
