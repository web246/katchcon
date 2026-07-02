// icons.js — minimal feather-style icon set, returns raw SVG markup
const ICONS = {
  leaf: '<path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h6a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/><path d="M11 20 20 4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  wind: '<path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.7 8A2.5 2.5 0 1 1 19.5 12H2"/>',
  droplets: '<path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/>',
  cable: '<path d="M4 9v6M20 9v6M8 6v3a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V6M8 6H6a2 2 0 0 0-2 2M16 6h2a2 2 0 0 1 2 2M8 19h8"/>',
  gauge: '<path d="M12 15l3-3M4.9 19.1A9 9 0 1 1 19.1 19.1M12 3v2M21 12h-2M5 12H3"/>',
  battery: '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M6 11v4M10 11v4M14 11v4"/>',
  headphones: '<path d="M3 14a9 9 0 0 1 18 0M21 15v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3zM3 15v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 6 22l6-3 6 3-2.2-8.6"/>',
  building2: '<path d="M4 22V6a1 1 0 0 1 1-1h6v17M17 22V11a1 1 0 0 1 1-1h3v12M4 22h17M9 8h1M9 12h1M9 16h1M14 22V15h3v7"/>',
  siren: '<path d="M7 12a5 5 0 0 1 10 0v6H7v-6zM5 20h14M12 4v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"/><circle cx="17.5" cy="9" r="2.7"/><path d="M22 21v-1a4.2 4.2 0 0 0-3-4"/>',
  lightbulb: '<path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.5h6c0-1.2.4-1.9 1-2.5A6 6 0 0 0 12 2z"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h1M8 15h1M12 11h1M12 15h1M16 11h1M16 15h1M8 19h1M12 19h1M16 19h1"/>',
  quote: '<path d="M21 15a2 2 0 0 1-2 2h-4l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  calendarClock: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h9M17.5 17.5v-3l2 1.5M22 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>',
  zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
  mapPin: '<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  trash: '<path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>',
  send: '<path d="m3 11 18-8-8 18-2-8-8-2z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevronLeft: '<path d="M15 18 9 12l6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  loader: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>'
};

function icon(name, size = 20, cls = '') {
  const body = ICONS[name] || '';
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
