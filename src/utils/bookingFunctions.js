// src/utils/bookingFunctions.js
const FALLBACK_TIMES = ["17:00","18:00","19:00","20:00","21:00","22:00"];
const getFetchAPI = () =>
  (typeof window !== "undefined" && typeof window.fetchAPI === "function")
    ? window.fetchAPI
    : null;

export function initializeTimes() {
  const fetch = getFetchAPI();
  const today = new Date();
  return fetch ? fetch(today) : FALLBACK_TIMES;
}

export function updateTimes(state, action) {
  if (action?.type === "dateChanged" && action.date) {
    const fetch = getFetchAPI();
    return fetch ? fetch(new Date(action.date))
                 : (state && state.length ? state : FALLBACK_TIMES);
  }
  return state;
}
