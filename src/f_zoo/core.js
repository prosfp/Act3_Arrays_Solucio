const { animals, employees, hours, prices } = require('./data');

/*   

Object.keys  -> [key1, key2]
Object.values -> [value1, value2]
Object.entries -> [[key1, value1], [key2, value2]] 

*/

function entryCalculator(entrants) {
  if (!entrants) return 0;

  // En quest cas entrants és un objecte amb el nombre d'entrades per tipus (adult, child, senior)
  // Amb Object.entries podem obtenir els valors de l'objecte en format array
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

function animalMap(
  { includeNames, sex } = { includeNames: null, sexEntry: null }
) {
  // Ens podem crear l'estructura de l'objecte inicial:
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  // Amb reduce podem tornar a recòrrer l'array i anar emmagatzemant els animal
  // en funció dels paràmetres que ens demanin:

  return animals.reduce((locations, { location, name, residents }) => {
    const residentsFilter = sex
      ? residents.filter((resident) => resident.sex === sex)
      : residents;
    console.log(residentsFilter);

    // Si ens demanen els noms dels animals
    const withNames = includeNames
      ? { [name]: residentsFilter.map((resident) => resident['name']) }
      : name;
    // Però també podríem aplicar destructuring de l'objecte residents
    // residents: residents.map(({ name }) => name),

    //Amb l'spread operator podem afegir un nou element a un array: [...array, element]
    locations[location] = [...locations[location], withNames];

    return locations;
  }, initialValue);
}

function animalPopularity(rating) {
  const animalsByPopularity = animals.reduce(
    (_animals, { popularity, name }) => {
      if (!_animals[popularity]) {
        _animals[popularity] = [];
      }
      _animals[popularity] = [..._animals[popularity], name];
      return _animals;
    },
    {}
  );

  return rating ? animalsByPopularity[rating] : animalsByPopularity;
}

function animalsByIds(ids) {
  //Aques switch el podem expressar de manea més sintètica
  /*   switch (typeof ids) {
    case 'undefined':
      return [];
    case 'string':
      [animals.find((_animals) => _animals.id === id)];
    case 'object':
      animals.filter((_animals) => ids.includes(_animals.id));
  } */
  const funcsByTypes = {
    undefined: () => [],
    string: (id) => [animals.find((_animals) => _animals.id === id)],
    object: (ids) => animals.filter((_animals) => ids.includes(_animals.id)),
  };

  return funcsByTypes.hasOwnProperty(typeof ids)
    ? funcsByTypes[typeof ids](ids)
    : [];
}

function animalByName(animalName) {
  const findAnimalByName = ({ name }) => name == animalName;
  const getAnimal = () => {
    const { name, residents } = animals.find(({ residents }) =>
      residents.find(findAnimalByName)
    );
    const animal = residents.find(findAnimalByName);
    animal.species = name;
    return animal;
  };

  return animalName ? getAnimal() : {};
}

function employeesByIds(ids) {
  // Employees is an array of objects.
  // If no id --> empty array.
  // If id --> array with 1 employee info (array with 1 object)
  //// Retornem TOT l'element si trobem la coincidència --> find?
  // if ids --> array with n employee info (array o object)
  //// Retornem TOTS els elements coincidents --> filter?

  //Hem puc crear un objecte amb tres mètodes que s'executaran en funció del tipus
  //de paràmetre que em passin:

  const funcByType = {
    undefined: () => [],
    string: (id) => employees.find((_employee) => _employee.id === id),
    object: (ids) =>
      employees.filter((_employee) => ids.includes(_employee.id)),
  };

  return funcByType[typeof ids](ids);
}

function employeeByName(employeeName) {
  // Busquem d'acord al nom o cognom independentment del que ens introdueixi.
  // Retornem l'objecte. No cal contemplar més d'un treballador amb el mateix nom.
  // Retornem una única coincidència --> find?
  // Com que hem de comprovar first_name i Second_name, podem utilitzar diferents estratègies
  // per comprovar-ho.

  const firstLast = (name) => {
    const fields = ['firstName', 'secondName'];
    const cerca = fields.map((valor) =>
      employees.find((treballador) => treballador[valor] === name)
    );
    //Compte, estem retornar un array però! Ens cal retornar un objecte.
    //Podem aprofitar del mateix "find" perquè retorni l'element únicament
    return cerca.find((result) => result !== undefined);
  };

  return employeeName ? firstLast(employeeName) : {};
}

function managersForEmployee(idOrName) {
  //Els empleats tenen assignats managers i un manager té assignat un o diversos empleats.
  //Quan ens passen el nom o id d'un empleat o els seus noms, retornem la informació
  //d'aquest empleat però enlloc de l'ID dels seus managers, posem el nom.
  //1-Primer anem a obtenir la informació del nostre empleat:
  const fields = ['id', 'firstName', 'lastName'];
  const cerca = fields.map((field) =>
    employees.find((treballador) => treballador[field] === idOrName)
  );
  //Això farà que tinguem undefined (falsy) o l'objecte (truthy) del treballador.
  //2-Ara anem a cercar el nom dels managers.
  const treballador = cerca.find(Boolean);
  treballador.managers = treballador.managers.map((managerID) => {
    const managers = employees.find((trblldr) => trblldr.id === managerID);
    //El map ja farà que retorni el l'array dels noms que jo passo en forma d'string:
    return `${managers.firstName} ${managers.lastName}`;
  });
  //3-Retornem l'objecte amb la informació modificada.
  return treballador;
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
