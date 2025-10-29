// src/components/Header.js
import logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="/" aria-label="Little Lemon – home">
          {/* Remove width/height attributes; size via CSS .brand img { height:32px } */}
          <img src={logo} alt="Little Lemon logo" />
        </a>
        <nav aria-label="Primary" className="primary-nav">
          <ul>
            <li><a href="/home" aria-current="page">Home</a></li>
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
