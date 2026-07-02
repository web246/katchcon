// calculator.js
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("load-tbody");
  if (!tbody) return;

  const addBtn = document.getElementById("add-item");
  const presetsWrap = document.getElementById("preset-row");
  const voltageBtns = document.querySelectorAll(".voltage-toggle button");
  const autonomySlider = document.getElementById("autonomy-slider");
  const autonomyLabel = document.getElementById("autonomy-label");

  const DEFAULT_LOADS = [
    { name: "LED Lights", watts: 10, qty: 10, hours: 6 },
    { name: "Refrigerator", watts: 150, qty: 1, hours: 24 },
    { name: "Television", watts: 120, qty: 2, hours: 4 }
  ];

  const PRESETS = [
    { name: "LED Lights", watts: 10 }, { name: "Ceiling Fan", watts: 75 },
    { name: "Refrigerator", watts: 150 }, { name: "Television", watts: 120 },
    { name: "Air Conditioner", watts: 1500 }, { name: "Washing Machine", watts: 500 },
    { name: "Microwave", watts: 1000 }, { name: "Computer", watts: 200 },
    { name: "Water Pump", watts: 750 }, { name: "Electric Cooker", watts: 2000 }
  ];

  let voltage = 24;

  function num(v) { return isNaN(parseFloat(v)) ? 0 : parseFloat(v); }
  function round1(v) { return Math.round(v * 10) / 10; }

  function addRow(load) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Appliance"><input class="field row-name" type="text" value="${load.name}"></td>
      <td data-label="Watts"><input class="field row-watts" type="number" min="0" value="${load.watts}"></td>
      <td data-label="Qty"><input class="field row-qty" type="number" min="0" value="${load.qty}"></td>
      <td data-label="Hrs/day"><input class="field row-hours" type="number" min="0" max="24" value="${load.hours}"></td>
      <td class="total-cell" data-label="Total">0W</td>
      <td><button type="button" class="del-btn" aria-label="Remove">${icon("trash", 18)}</button></td>
    `;
    tbody.appendChild(tr);
    tr.querySelectorAll("input").forEach(inp => inp.addEventListener("input", compute));
    tr.querySelector(".del-btn").addEventListener("click", () => { tr.remove(); compute(); });
  }

  function getLoads() {
    return Array.from(tbody.querySelectorAll("tr")).map(tr => ({
      watts: num(tr.querySelector(".row-watts").value),
      qty: num(tr.querySelector(".row-qty").value),
      hours: num(tr.querySelector(".row-hours").value)
    }));
  }

  function computeSizing(loads, voltage, autonomyDays) {
    const totalLoadWatts = loads.reduce((s, l) => s + l.watts * l.qty, 0);
    const dailyEnergyWh = loads.reduce((s, l) => s + l.watts * l.qty * l.hours, 0);
    const dailyEnergyKwh = dailyEnergyWh / 1000;
    const batteryWh = (dailyEnergyWh * autonomyDays) / 0.8 / 0.9;
    const batteryAh = voltage ? batteryWh / voltage : 0;
    const solarKw = dailyEnergyWh / (5 * 1000 * 0.7);
    const solarWatts = solarKw * 1000;
    const inverterWatts = totalLoadWatts * 1.25;
    return {
      totalLoadWatts: Math.round(totalLoadWatts),
      dailyEnergyKwh: round1(dailyEnergyKwh),
      solarWatts: Math.round(solarWatts),
      solarKw: round1(solarKw),
      batteryAh: Math.round(batteryAh),
      batteryKwh: round1(batteryWh / 1000),
      inverterWatts: Math.round(inverterWatts)
    };
  }

  function compute() {
    // per-row totals
    tbody.querySelectorAll("tr").forEach(tr => {
      const w = num(tr.querySelector(".row-watts").value);
      const q = num(tr.querySelector(".row-qty").value);
      tr.querySelector(".total-cell").textContent = Math.round(w * q) + "W";
    });

    const autonomyDays = num(autonomySlider.value);
    const r = computeSizing(getLoads(), voltage, autonomyDays);

    document.getElementById("res-total-load").textContent = r.totalLoadWatts + "W";
    document.getElementById("res-daily-energy").textContent = r.dailyEnergyKwh + " kWh/day";
    document.getElementById("res-solar-watts").textContent = r.solarWatts + "W";
    document.getElementById("res-solar-kw").textContent = r.solarKw + " kW recommended";
    document.getElementById("res-battery-ah").textContent = r.batteryAh + "Ah";
    document.getElementById("res-battery-kwh").textContent = r.batteryKwh + " kWh @ " + voltage + "V";
    document.getElementById("res-inverter").textContent = r.inverterWatts + "W";
  }

  DEFAULT_LOADS.forEach(addRow);

  addBtn.addEventListener("click", () => {
    addRow({ name: "", watts: 0, qty: 1, hours: 4 });
    compute();
  });

  PRESETS.forEach(p => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "preset-pill";
    btn.textContent = `+ ${p.name} (${p.watts}W)`;
    btn.addEventListener("click", () => {
      addRow({ name: p.name, watts: p.watts, qty: 1, hours: 4 });
      compute();
    });
    presetsWrap.appendChild(btn);
  });

  voltageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      voltageBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      voltage = num(btn.dataset.voltage);
      compute();
    });
  });

  autonomySlider.addEventListener("input", () => {
    autonomyLabel.textContent = `Backup Autonomy — ${autonomySlider.value} day(s)`;
    compute();
  });

  compute();
});
