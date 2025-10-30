// src/pages/BookingPage.js
import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../utils/bookingFunctions";
import { useNavigate } from "react-router-dom";

export default function BookingPage({ submitForm }) {
  // Reducer: laikų valdymas per API
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Kai vartotojas pasirenka datą formoje
  function handleDateChange(dateStr) {
    dispatch({ type: "dateChanged", date: dateStr });
  }

  // Pateikimas (čia parodau, kaip kviesti submitAPI ir naviguoti)
  function handleSubmit(formData) {
    if (typeof submitForm === "function") {
      return submitForm(formData);
    }
    
  const submit = typeof window !== "undefined" ? window.submitAPI : null;

  let ok = false;
  // mock API būna sinchroninis – galim paprastai pabandyti kelis kartus
  for (let i = 0; i < 3; i += 1) {
    ok = submit ? submit(formData) : true; // jei nėra API – laikom sėkme
    if (ok) break;
  }

  if (ok) {
    navigate("/reservations/confirmed", { state: { reservation: formData } });
  } else {
    alert("Submission failed. Please try again.");
  }
}

  return (
    <section className="section container">
      <h1>Reserve a table</h1>
      <p>Pick a date, time and number of guests.</p>

      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmitReservation={handleSubmit}
      />
    </section>
  );
}
