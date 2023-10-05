// EVERY: Checks if every element in an array passes a certain condition. The every()
// method returns a boolean value true if every element in the array passes the
// condition, and false otherwise.

// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((element) => element % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  //el paràmetre "input" és l'array sencera que every passa per defecte sense que ho especifiquem
  return input.every((element) => typeof element === typeof input[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  //Podem afegir elements de comprovació a la funció every
  return input.every(
    (row) => Array.isArray(row) && row.every((number) => number >= 0)
  );
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every((paraula) => {
    const regexp = /[aeiouAEIOU]/gi;
    // Fem servir l'expressio regular per trobar totes les vocals
    const vowels = paraula.match(regexp);
    return vowels.every((vowel) => vowel === vowels[0]);
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
