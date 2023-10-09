const { animals, employees, hours, prices } = require('./data');

/*   

Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 

*/

function entryCalculator(entrants) {
  if (!entrants) return 0;

  // Entrants és de tipus objecte
  // Amb Object.entries podem obtenir els valors de l'objecte en format Array
  // La funció ha de retornar un valor únic amb el preu total

  return Object.entries(entrants).reduce(
    (preuTotal, [tipusEntrada, nombreEntrades]) => {
      // per cada tipus d'entrada, calculem el preu total d'aquest tipus
      const preuTotalTipusEntrada = prices[tipusEntrada] * nombreEntrades;
      // I el sumem el preu total
      console.log(preuTotal);
      return preuTotal + preuTotalTipusEntrada;
    },
    0
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
  const animalsCount = animals.reduce((accum,{name,residents})=>{
    accum[name] = residents.length;
    return accum;
  },{});

  return !species ? animalsCount : animalsCount[species];

}

//{ includeNames, sex } = { includeNames: null, sex: null }

function animalMap({ includeNames, sex }) {
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  // Si ens demanen els noms dels animals --> retornem Array amb noms d'animals
  // Si no, únicament l'espècie d'animal

  return animals.reduce((locations, { location, name, residents }) => {
    const residentsFilter = sex
      ? residents.filter((resident) => resident.sex === sex)
      : residents;

    const llistaNoms = includeNames
      ? { [name]: residentsFilter.map((resident) => resident['name']) }
      : name;

    //spread operator --> ...
    locations[location] = [...locations[location], llistaNoms];
    return locations;
  }, initialValue);
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
