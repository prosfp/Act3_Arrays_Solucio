// FILTER creates a new array with all elements that pass the test implemented by the provided function.

function onlyEven(array) {
  return array.filter((element) => element % 2 === 0);
}

// Farem servir RegEx
// Si "test" el troba, retornarà booleà.
function onlyOneWord(array) {
  return array.filter((element) => !/\s/g.test(element));
}
//Aquesta no cal negar-la: return array.filter(item => /^[^\s]*$/.test(item));

//"every" retorna true si cada element de l'array compleix la condició.
function positiveRowsOnly(array) {
  return array.filter((row) => row.every((number) => number > 0));
}

//1. Creem un array amb totes les vocals de cada paraula
//2. Comprovem que totes les vocals siguin iguals. Si ho són, retornem la paraula
//regexr.com/7l49m
function allSameVowels(array) {
  const sameVowels = (word) => {
    let vowels = word.match(/[aeiouAEIOU]/gi);
    return vowels.every((x) => x === vowels[0]);
  };
  return array.filter(sameVowels);
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
