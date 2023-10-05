// FILTER creates a new array with all elements that pass the test implemented by the provided function.

function onlyEven(array) {
  return array.filter((element) => element % 2 === 0);
}

// Farem servir RegEx
// Si "test" el troba, retornarà booleà.
function onlyOneWord(array) {
  //return array.filter((element) => !element.includes(' '));
  return array.filter((element) => !/\s/g.test(element));
}
//Aquesta no cal negar-la: return array.filter(item => /^[^\s]*$/.test(item));

//"every" retorna true si cada element de l'array compleix la condició.
function positiveRowsOnly(array) {
  return array.filter((element) => element.every((number) => number > 0));
}

//1. Creem un array amb totes les vocals de cada paraula
//2. Comprovem que totes les vocals siguin iguals. Si ho són, retornem la paraula
//regexr.com/7l49m
function allSameVowels(array) {
  return array.filter((cadaString) => {
    let vocals = cadaString.match(/[aeiouAEIOU]/gi);
    console.log(vocals);
    return vocals.every((x) => {
      console.log(x);
      return x === vocals[0];
    });
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
