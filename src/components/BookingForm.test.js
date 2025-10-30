import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// jei šiame faile testuoji ir reducer funkcijas – naudok teisingą kelią:
import { initializeTimes, updateTimes } from "../utils/bookingFunctions";

test("Renders the BookingForm heading/label", () => {
  render(<BookingForm />);
  const label = screen.getByLabelText(/choose date/i); // atitinka tavo formą
  expect(label).toBeInTheDocument();
});
