// src/components/Header.js
import logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="/" aria-label="Little Lemon – home">
          <img src={logo} alt="Little Lemon logo" width="120" height="36" />
        </a>

        <nav aria-label="Primary" className="primary-nav">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
