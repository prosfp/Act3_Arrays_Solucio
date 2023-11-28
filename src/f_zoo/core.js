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
  // Canviem el format dels horaris de manera que poguem recorrer i filtrar
  // Exemple Object Entries --> [[Tuesday, {open: 8, close:18}],[Wednesday, {...}]]

  // Anem a filtrar la informació en funció de si ens passen el dia o no

  const hoursFiltered = !dayName ? hours : { [dayName]: hours[dayName] };
  // Ex: {Monday: { open: 0, close: 0 } }
  const hoursFilteredArray = Object.entries(hoursFiltered);
  // Ex: [[Monday, {open: 0, close: 0}]]
  console.log(hoursFilteredArray);

  return hoursFilteredArray.reduce((horari, [dia, hores]) => {
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

  // Ens fem una funció que em permeti retonrar l'hora en format 12h
  function convertHour(hour) {
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  }
}

// Necessitem treballar amb l'array "animals"
// AQUÍ TREBALLEM AMB UN ARRAY D'OBJECTES --> Object no necessari
// Però si em pot anar bé --> destructuring d'objectes
function animalCount(species) {
  const animalsCount = animals.reduce((accum, { name, residents }) => {
    accum[name] = residents.length;
    return accum;
  }, {});

  return !species ? animalsCount : animalsCount[species];
}

function animalMap({ includeNames, sex: genere } = {}) {
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  return animals.reduce((accum, { name: especie, location, residents }) => {
    //Filtrem els residents en funció del sexe si tenim el paràmetre.
    const residentsFilter = genere
      ? residents.filter((resident) => resident.sex === genere)
      : residents;

    // Retornem un array amb els noms dels residents
    const llistaNoms = includeNames
      ? { [especie]: residentsFilter.map((resident) => resident.name) }
      : especie;

    accum[location] = [...accum[location], llistaNoms];
    return accum;
  }, initialValue);
}

function animalPopularity(rating) {
  const animalsByPopularity = animals.reduce((acc, { name, popularity }) => {
    //Si el "key" ja existeix, afegeixes simplement el nom de l'espècie.
    //Si no existeix, hauré de crear a més a més el "key" necessari.
  }, {});

  // {
  //   3: ['snakes'],
  //   2: ['frogs'],
  //   4: ['lions', 'penguins', 'otters', 'giraffes'],
  //   5: ['tigers', 'bears', 'elephants'],
  // };

  return rating ? animalsByPopularity[rating] : animalsByPopularity;
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
