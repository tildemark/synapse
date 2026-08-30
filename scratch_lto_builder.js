const fs = require('fs');
const path = require('path');

// Helper to create simple inline SVG data URI
function svgCircle(fill, stroke, text, subtext = '') {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='${fill}' stroke='${stroke}' stroke-width='8'/>${text ? `<text x='50' y='${subtext ? 46 : 58}' fill='${fill === 'white' ? '%23111827' : 'white'}' font-family='sans-serif' font-size='22' font-weight='900' text-anchor='middle'>${text}</text>` : ''}${subtext ? `<text x='50' y='68' fill='${fill === 'white' ? '%23111827' : 'white'}' font-family='sans-serif' font-size='12' font-weight='bold' text-anchor='middle'>${subtext}</text>` : ''}</svg>`;
}

function svgTriangle(pathD) {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/>${pathD}</svg>`;
}

function svgRect(content) {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/>${content}</svg>`;
}

// Full 15 modules definition
const modules = [
  { number: 1, name: "Priority & Regulatory Traffic Signs" },
  { number: 2, name: "Directional, Mandatory & Prohibitory Signs" },
  { number: 3, name: "Speed Limits & Parking Restriction Signs" },
  { number: 4, name: "Warning Signs: Curves, Bends & Alignments" },
  { number: 5, name: "Warning Signs: Intersections, Merges & Junctions" },
  { number: 6, name: "Warning Signs: Road Width, Hills & Physical Hazards" },
  { number: 7, name: "Warning Signs: Pedestrians, Schools & Special Hazards" },
  { number: 8, name: "Pavement Markings & Lane Dividers" },
  { number: 9, name: "Traffic Light Signals & Hand Signals" },
  { number: 10, name: "Right-of-Way Rules & Intersection Priority" },
  { number: 11, name: "Overtaking, Passing & Expressway Driving Rules" },
  { number: 12, name: "General Traffic Code & Republic Act 4136" },
  { number: 13, name: "Special Laws: Anti-Drunk (RA 10586) & Distracted Driving (RA 10913)" },
  { number: 14, name: "Fines, Penalties, Violations & Demerit System" },
  { number: 15, name: "Vehicle Safety, Emergencies & BLOWBAGETS Pre-Trip Inspection" }
];

console.log("Generating 300 questions across 15 modules...");
