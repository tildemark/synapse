// Add export and write file logic to generate_lto_300.js
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const exportLogic = `

const packManifest = {
  packId: "lto_drivers_exam_ph",
  name: "Philippine LTO Driver's License Reviewer",
  subject: "Road Safety & Philippine Traffic Laws",
  icon: "terminal",
  color: "#10B981",
  version: 6,
  modules: modules,
  questions: questions
};

console.log("Total generated questions:", questions.length);

const outputPath = path.join(__dirname, 'assets', 'packs', 'pack_lto_ph.json');
fs.writeFileSync(outputPath, JSON.stringify(packManifest, null, 2), 'utf8');
console.log("Wrote full pack to " + outputPath + " successfully!");
`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + exportLogic);
console.log("Export logic appended!");
