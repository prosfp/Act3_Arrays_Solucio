const { animals, employees, hours, prices } = require('./data');

/*   

Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 

*/

function entryCalculator(entrants) {
  if (!entrants) return 0;

  // En quest cas entrants és un objecte amb el nombre d'entrades per tipus (adult, child, senior)
  // La funció ha de retornar el preu total de les entrades
  return Object.entries(entrants).reduce(
    (preuTotal, [tipusEntrada, nombreEntrades]) => {
      // Per cada tipus d'entrada, calculem el preu total de les entrades d'aquest tipus
      const preuTotalTipusEntrada = prices[tipusEntrada] * nombreEntrades;
      // I el sumem al preu total
      return preuTotal + preuTotalTipusEntrada;
    }
  );
}

function schedule(dayName) {
  // Primer podríem obtenir els horaris filtrats en funció de si ens passen un dia concret o no.ç
  // Exemple: { Tuesday: { open: 8, close: 18 } }
  // Object.entries -> [[Tuesday, { open: 8, close: 18 }]]
  const hoursFiltered = !dayName ? hours : { [dayName]: hours[dayName] };
  return Object.entries(hoursFiltered).reduce((acc, [day, hours]) => {
    acc[day] = hoursToString(hours);
    return acc;
  }, {});
}
// Ens fem una funció que em permeti retornar l'hora en format 12h
function convertHour(hour) {
  return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
}

// Passem les hores a un string llegible
function hoursToString({ open, close }) {
  let readableDate = 'CLOSED';
  if (open !== close) {
    const opening = convertHour(open);
    const closing = convertHour(close);
    readableDate = `Open from ${opening} until ${closing}`;
  }
  return readableDate;
}

function animalCount(species) {
  // Necessitem treballar amb la llista "animals" i els paràmetres:
  // ex: name: 'lions', residents: [{},{}...],
  // AQUÍ TREBALLEM AMB UN ARRAY D'OBJECTES --> Object no neceesari + destructuring d'objectes!
  const animalsCount = animals.reduce((accum, { name, residents }) => {
    // Per cada animal, calculem el nombre de residents
    accum[name] = residents.length;
    // I l'afegim al resultat
    return accum;
  }, {});

  // Podem fer ús de la notació de "braquets" per accedir a una propietat d'un objecte
  // ex: animalsCount['lions'] --> 4
  return !species ? animalsCount : animalsCount[species];
}

function animalMap(options) {
  // your code here
}

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
