const { animals, employees, hours, prices } = require('./data');

/*   
Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 
*/

// Rep un objercte amb el nombre d'entrades per tipus {adult:2, child:5, senior:3}
// Object.entries ens permetrà obtenir els valors de l'objecte en format array
// Object.entries -> [[key1, value1], [key2, value2]] ---> [[adult,2], [child,5], [senior,3]]
// La funció ha de retornar el preu total de les entrades

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }

  const entriesArray = Object.entries(entrants);
  // [[adult,2], [child,5], [senior,3]]
  return entriesArray.reduce((preuTotal, [tipusEntrada, nombreEntrades]) => {
    // Per cada tipus d'entrada, calculem el preu total de les entrades d'aquest tipus
    const preuTotalTipusEntrada = prices[tipusEntrada] * nombreEntrades;

    return (preuTotal += preuTotalTipusEntrada);
  }, 0);
}

function schedule(dayName) {
  // Ens fem una funció que em permeti retonrar l'hora en format 12h

  // Canviem el format dels horaris de manera que poguem recorrer i filtrar
  // Exemple Object Entries --> [[Tuesday, {open: 8, close:18}],[Wednesday, {...}]]

  // Anem a filtrar la informació en funció de si ens passen el dia o no

  const hoursFiltered = !dayName ? hours : { [dayName]: hours[dayName] };
  const hoursFilteredArray = Object.entries(hoursFiltered);
  console.log(hoursFilteredArray);

  return Object.entries(hoursFiltered).reduce((horari, [dia, hores]) => {
    horari[dia] = hoursToString(hores);
    return horari;
  }, {});

  function hoursToString({ open, close }) {
    let dataText = 'CLOSED';
    if (open !== close) {
      const opening = convertHour(open);
      const closing = convertHour(close);
      dataText = `Open from ${opening} until ${closing}`;
    }
    return dataText;
  }

  // Funció per retornar l'hora en format 12h
  function convertHour(hour) {
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  }
}

function convertHour(hour) {}

// Passem les hores a un string llegible
function hoursToString({ open, close }) {}

function animalCount(species) {}

function animalMap() {}

function animalPopularity(rating) {
  // Your code here
}

function animalsByIds(ids) {}

function animalByName(animalName) {}

function employeesByIds(ids) {}

function employeeByName(employeeName) {}

function managersForEmployee(idOrName) {}

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
