
  // fetchAPI gauna Date objektą ir grąžina laikų masyvą (ne tuščią)
  window.fetchAPI = function(dateObj) {
    // galima įdėti paprastą deterministinę logiką pagal dieną
    const base = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    try {
      const day = (dateObj instanceof Date) ? dateObj.getDay() : 0; // 0..6
      // Pvz., savaitgaliais pridėkim ir 16:30
      if (day === 0 || day === 6) return ["16:30", ...base];
      return base;
    } catch {
      return base;
    }
  };

  // submitAPI priima formos duomenis ir grąžina true/false
  window.submitAPI = function(formData) {
    // Paprastai testams užtenka true
    return true;

    // Jei nori šiek tiek realistiškumo:
    // return Mah.random() > 0.1; // 90% sėkmės
  };

