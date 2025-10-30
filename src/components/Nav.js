import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav aria-label="Primary">
      <div className="container">
        <Link to="/" aria-label="Little Lemon home">
          <img src={logo} alt="Little Lemon logo" width="160" height="48" />
        </Link>

        <ul>
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink></li>
            <li><NavLink to="/menu" className={({isActive}) => isActive ? "active" : undefined}>Menu</NavLink></li>
            <li><NavLink to="/reservations" className={({isActive}) => isActive ? "active" : undefined}>Reservations</NavLink></li>
            <li><NavLink to="/order" className={({isActive}) => isActive ? "active" : undefined}>Order Online</NavLink></li>
            <li><NavLink to="/login" className={({isActive}) => isActive ? "active" : undefined}>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
