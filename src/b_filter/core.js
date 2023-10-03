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

//1r. Creem un array amb totes les vocals de cada paraula
//2n. Comprovem que totes les vocals siguin iguals
function allSameVowels(array) {
  return array.filter((word) => {
    const regexp = /[a,e,i,o,u,A,E,I,O,U]/g;
    const vowels = [...word.matchAll(regexp)];
    return vowels.every(([vowel], _, [firstVowel]) => vowel === firstVowel[0]);
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
