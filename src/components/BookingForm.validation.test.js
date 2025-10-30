// src/components/BookingForm.validation.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Validation Tests", () => {
  const mockSubmit = jest.fn();
  const mockDateChange = jest.fn();
  const mockTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("submit is disabled when form cannot be valid (no availableTimes)", () => {
    // Jei nėra availableTimes, time negali būti parinktas → mygtukas disabled
    render(
      <BookingForm
        availableTimes={[]}
        onSubmitReservation={mockSubmit}
        onDateChange={mockDateChange}
      />
    );
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test("disables submit when guests are out of range (e.g., 0)", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        onSubmitReservation={mockSubmit}
        onDateChange={mockDateChange}
      />
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: 0 } }); // neteisinga reikšmė
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    // parodoma klaida (React pusės)
    fireEvent.blur(guestsInput);
    expect(screen.getByText(/guests: 1–10/i)).toBeInTheDocument();
  });

  test("enables submit when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        onSubmitReservation={mockSubmit}
        onDateChange={mockDateChange}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    // formoje data nustatoma į šiandieną per useEffect; vis tiek nustatom aiškią ateities datą:
    fireEvent.change(dateInput, { target: { value: "2025-12-01" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 4 } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();
  });

  test("calls onSubmitReservation when form is valid and submitted", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        onSubmitReservation={mockSubmit}
        onDateChange={mockDateChange}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: "2025-12-10" } });
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    fireEvent.change(guestsInput, { target: { value: 3 } });

    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2025-12-10",
        time: "19:00",
        guests: 3,
      })
    );
  });

  test("does NOT submit when invalid (guests 0) and shows HTML5/React validation", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        onSubmitReservation={mockSubmit}
        onDateChange={mockDateChange}
      />
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    fireEvent.change(guestsInput, { target: { value: 0 } });
    fireEvent.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled();
    fireEvent.blur(guestsInput);
    expect(screen.getByText(/guests: 1–10/i)).toBeInTheDocument();
  });
});
