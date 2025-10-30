import { initializeTimes, updateTimes } from "./bookingFunctions";

describe("bookingFunctions API queries", () => {
  const MOCK_TIMES = ["17:00", "17:30", "18:00", "19:00"];
  const originalFetchAPI = window.fetchAPI;

  beforeEach(() => {
    window.fetchAPI = jest.fn(() => MOCK_TIMES);
  });

  afterEach(() => {
    window.fetchAPI = originalFetchAPI;
    jest.restoreAllMocks();
  });

  test("initializeTimes: grąžina masyvą iš fetchAPI ir kviečia su Date", () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(MOCK_TIMES);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    const arg = window.fetchAPI.mock.calls[0][0];
    expect(arg instanceof Date).toBe(true);
  });

  test("updateTimes: 'dateChanged' kviečia fetchAPI su new Date(action.date) ir grąžina jo rezultatą", () => {
    const action = { type: "dateChanged", date: "2025-02-02" };
    const result = updateTimes([], action);
    expect(result).toEqual(MOCK_TIMES);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    const arg = window.fetchAPI.mock.calls[0][0];
    expect(arg instanceof Date).toBe(true);
    const yyyy = arg.getFullYear();
    const mm = String(arg.getMonth() + 1).padStart(2, "0");
    const dd = String(arg.getDate()).padStart(2, "0");
    expect(`${yyyy}-${mm}-${dd}`).toBe("2025-02-02");
  });

  test("updateTimes: neatpažintas action tipas – grąžina ankstesnę būseną, fetchAPI nekviečia", () => {
    const prev = ["20:00"];
    const result = updateTimes(prev, { type: "noop" });
    expect(result).toBe(prev);
    expect(window.fetchAPI).toHaveBeenCalledTimes(0);
  });

  test("initializeTimes: kai fetchAPI nėra – grąžina netuščią fallback masyvą", () => {
    window.fetchAPI = undefined;
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
