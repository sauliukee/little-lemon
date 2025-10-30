import { useMemo, useState, useEffect } from "react";

export default function BookingForm({
  availableTimes = [],
  onDateChange,
  onSubmitReservation,
}) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "Birthday",
  });
  const [touched, setTouched] = useState({});
  const minDate = new Date().toISOString().split("T")[0];

  // ✅ 1. Kai komponentas užsikrauna – nustatom pradinę datą į šiandien
  useEffect(() => {
    if (!form.date) {
      const today = new Date().toISOString().split("T")[0];
      setForm((f) => ({ ...f, date: today }));
      if (typeof onDateChange === "function") {
        onDateChange(today);
      }
    }
  }, []);

  // ✅ 2. Kai atnaujinami availableTimes – jei nėra laiko, parenkam pirmą
  useEffect(() => {
    if (availableTimes.length && !form.time) {
      setForm((f) => ({ ...f, time: availableTimes[0] }));
    }
  }, [availableTimes]);

  // Klaidos
  const errors = useMemo(() => {
    const e = {};
    if (!form.date) e.date = "Choose a date";
    if (!form.time) e.time = "Choose a time";
    if (form.guests < 1 || form.guests > 10) e.guests = "Guests: 1–10";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function onChange(e) {
    const { name, value } = e.target;
    const v = name === "guests" ? Number(value) : value;
    setForm((f) => ({ ...f, [name]: v }));

    if (name === "date" && typeof onDateChange === "function") {
      onDateChange(value);
    }
  }

  function onBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  function onSubmit(ev) {
    ev.preventDefault();
    if (!isValid) {
      console.warn("Form is invalid:", errors);
      return;
    }
    if (typeof onSubmitReservation === "function") {
      onSubmitReservation(form);
    }
  }

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      noValidate
      aria-live="polite"
      style={{ maxWidth: 320 }}
    >
      <div className="field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          name="date"
          min={minDate}
          value={form.date}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "err-date" : undefined}
          required
        />
        {touched.date && errors.date && (
          <div className="error" id="err-date">{errors.date}</div>
        )}
      </div>

      <div className="field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={form.time}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "err-time" : undefined}
          required
        >
          <option value="">Select…</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {touched.time && errors.time && (
          <div className="error" id="err-time">{errors.time}</div>
        )}
      </div>

      <div className="field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "err-guests" : undefined}
          required
        />
        {touched.guests && errors.guests && (
          <div className="error" id="err-guests">{errors.guests}</div>
        )}
      </div>

      <div className="field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={onChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button className="btn" type="submit" disabled={!isValid}>
        Make Your Reservation
      </button>
    </form>
  );
}
