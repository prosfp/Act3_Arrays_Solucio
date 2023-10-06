// El mètode reduce és un mètode de JavaScript que permet aplicar una funció a
// cada element d'un array i reduir l'array a un únic valor.
// reduce(callbackFn, initialValue)
// reduce((accum, currentValue)=>{}, initialValue)
function sum(array) {
  //Quan només tenim una sentència podem estalviarnos {} amb Arrow Functions
  return array.reduce((accum, valorActual) => accum + valorActual);
}

// Nested reduce
// Compte! Si no fem ús d'un valor inicial a la funció exterior
// ens trobarem que multipliquem el l'enter resultat del reduce interior
// pel valor de l'array exterior, en aquest cas un altre array. per ex:
// (1*2*3=6)*[4,5] = NaN
// function productAll(array) {}

//En este caso he seguido otra aproximación. He decidido concatenar primero todos los arrays de la matriz
//y así poder aplicar el reduce como si de un solo array se tratara.
// 1. Con el método propio Concat y ayudándonos de reduce hacemos que se vayan cogiendo cada uno de los elementos del
// array y los vayamos concatenando en uno nuevo virgen.
// 2. Ahora ya podemos hacer el producto de todos los elementos del array
function productAll(array) {
  return array.reduce(
    (result, numbers) =>
      result * numbers.reduce((mul, current) => mul * current, 1)
  );
}

// var input = [
//   ['Thundercats', '80s'],
//   ['The Powerpuff Girls', '90s'],
//   ['Sealab 2021', '00s'],
// ];

//Ho podem fer aplicant destructuring d'un Array!!!
//Compte amb l'ús de la notació de punts per afegir el parell key-value!
// With dot and bracket notation, you can:
///// access the value of a property by its key
///// modify the value of an existing property by its key and
///// add a new property to an object

//Si el valor amb el que accediu (o afegiu) una variable no el coneixeu, opteu per
//la notació amb "corxetes"

function objectify(array) {
  // Podem rebre directament els valors de la nostra array a través del destructuring de l'array
  return array.reduce((objecte, [key, value]) => {
    objecte[key] = value;
    console.log(objecte);
    return objecte;
  }, {});
}

function luckyNumbers(array) {
  return array.reduce((frase, valorActual, index) => {
    const subfrase =
      index === array.length - 1 ? ` and ${valorActual}` : ` ${valorActual},`;
    return (frase += subfrase);
  }, 'Your lucky numbers are:');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
