// src/components/Main.js
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "../pages/BookingPage"; 
import ConfirmationPage from "../pages/ConfirmationPage"; // ← kelias turi tikti tavo failų struktūrai
import ConfirmedBooking from "../pages/ConfirmedBooking";
// ⚠️ Antras useNavigate importas buvo dubliuotas — paliekam vieną viršuje

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

function MenuPage() {
  return <section className="container section"><h1>Menu</h1></section>;
}
function ReservationsPage() {
  return <section className="container section"><h1>Reserve a table</h1></section>;
}
function OrderPage() {
  return <section className="container section"><h1>Order Online</h1></section>;
}
function LoginPage() {
  return <section className="container section"><h1>Login</h1></section>;
}

export default function Main() {
  const navigate = useNavigate();

  function submitForm(formData) {
    const submit = typeof window !== "undefined" ? window.submitAPI : null;
    const ok = submit ? submit(formData) : true; // jei mock API neįkrautas – laikom sėkme
    if (ok) {
      navigate("/reservations/confirmed", { state: { reservation: formData } });
    } else {
      alert("Submission failed. Please try again.");
    }
    return ok; // ← buvo ok(), taisome į ok
  }

  // ← JSX turi būti GRĄŽINAMAS iš Main, ne iš submitForm
  return (
    <main id="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        {/* perduodam submitForm į BookingPage */}
        <Route path="/reservations" element={<BookingPage submitForm={submitForm} />} />
        <Route path="/reservations/confirmed" element={<ConfirmationPage />} /> {/* ← būtina */}
        {/* papildomas kelias, jei reikėtų „ConfirmedBooking“ pavadinimo */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<section className="container section"><h1>Page not found</h1></section>} />
      </Routes>
    </main>
  );
}
