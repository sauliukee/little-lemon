// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section aria-labelledby="door-heading">
          <h3 id="door-heading">Doormat Navigation</h3>
          <nav aria-label="Footer">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="contact-heading">
          <h3 id="contact-heading">Contact</h3>
          <address>
            Address<br />
            Phone number<br />
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </address>
        </section>

        <section aria-labelledby="social-heading">
          <h3 id="social-heading">Social Media Links</h3>
          <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter/X</a></li>
          </ul>
        </section>
      </div>

      <div className="legal">
        <small>© {new Date().getFullYear()} Little Lemon</small>
      </div>
    </footer>
  );
}
