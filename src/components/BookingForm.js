// src/components/BookingForm.js
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

  // HTML5 ribos: šiandiena → iki 60 d. į priekį
  const minDate = new Date().toISOString().split("T")[0];
  const maxDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 60);
    return d.toISOString().split("T")[0];
  })();

  // 1) kai komponentas užsikrauna – nustatom pradinę datą į šiandien
  useEffect(() => {
    if (!form.date) {
      const today = new Date().toISOString().split("T")[0];
      setForm((f) => ({ ...f, date: today }));
      if (typeof onDateChange === "function") {
        onDateChange(today);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 2) kai atnaujinami availableTimes – jei nėra laiko, parenkam pirmą
  useEffect(() => {
    if (availableTimes.length && !form.time) {
      setForm((f) => ({ ...f, time: availableTimes[0] }));
    }
  }, [availableTimes]); // eslint-disable-line react-hooks/exhaustive-deps

  // React validacija
  const errors = useMemo(() => {
    const e = {};
    if (!form.date) e.date = "Choose a date";
    // papildomai tikrinam data ribas React pusėje (be HTML5)
    if (form.date && (form.date < minDate || form.date > maxDate)) {
      e.date = `Date must be between ${minDate} and ${maxDate}`;
    }
    if (!form.time) e.time = "Choose a time";
    if (form.guests < 1 || form.guests > 10) e.guests = "Guests: 1–10";
    if (!form.occasion) e.occasion = "Select an occasion";
    return e;
  }, [form, minDate, maxDate]);

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

  // HTML5: parodome naršyklės žinutes tik submit’o metu (paliekame noValidate, kad netrukdytų įvedinėjant)
  function onSubmit(ev) {
    ev.preventDefault();

    // HTML5 validacija
    const formEl = ev.currentTarget;
    if (!formEl.checkValidity()) {
      formEl.reportValidity(); // parodo natūralias HTML5 žinutes
      // pažymim laukus kaip paliestus, kad matytųsi ir mūsų React klaidos
      setTouched({ date: true, time: true, guests: true, occasion: true });
      return;
    }

    // React validacija
    if (!isValid) {
      setTouched({ date: true, time: true, guests: true, occasion: true });
      return;
    }

    if (typeof onSubmitReservation === "function") {
      onSubmitReservation(form);
    }
  }

  // HTML5 custom žinutės (nebūtina, bet maloniau)
  function onInvalid(e) {
    const el = e.target;
    if (el.name === "guests") {
      el.setCustomValidity("Please enter between 1 and 10 guests.");
    } else if (el.name === "date") {
      el.setCustomValidity(`Please select a date between ${minDate} and ${maxDate}.`);
    } else if (el.name === "time") {
      el.setCustomValidity("Please select a time.");
    } else if (el.name === "occasion") {
      el.setCustomValidity("Please select an occasion.");
    }
  }
  function onInput(e) {
    // valom customValidity, kad HTML5 žinutė dingų po korekcijos
    e.target.setCustomValidity("");
  }

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      onInvalid={onInvalid}
      onInput={onInput}
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
          max={maxDate}
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
          inputMode="numeric"
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
          onBlur={onBlur}
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "err-occasion" : undefined}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {touched.occasion && errors.occasion && (
          <div className="error" id="err-occasion">{errors.occasion}</div>
        )}
      </div>

      <button
        className="btn"
        type="submit"
        disabled={
          !isValid ||
          !form.time ||
          !form.date ||
          availableTimes.length === 0
        }
        title={!isValid ? "Please fix the errors above" : undefined}
      >
        Make Your Reservation
      </button>
    </form>
  );
}
