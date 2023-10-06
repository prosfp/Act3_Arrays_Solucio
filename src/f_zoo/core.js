const { animals, employees, hours, prices } = require('./data');

/*   

Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 

*/

function entryCalculator(entrants) {}

function schedule(dayName) {
  // Primer podríem obtenir els horaris filtrats en funció de si ens passen un dia concret o no.ç
  // Exemple: { Tuesday: { open: 8, close: 18 } }
  // Object.entries -> [[Tuesday, { open: 8, close: 18 }]]
}
// Ens fem una funció que em permeti retornar l'hora en format 12h
function convertHour(hour) {
  return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
}

// Passem les hores a un string llegible
function hoursToString({ open, close }) {}

function animalCount(species) {
  // Necessitem treballar amb la llista "animals" i els paràmetres:
  // ex: name: 'lions', residents: [{},{}...],
  // AQUÍ TREBALLEM AMB UN ARRAY D'OBJECTES --> Object no neceesari + destructuring d'objectes!
}

function animalMap({ includeNames, sex } = { includeNames: null, sex: null }) {}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
