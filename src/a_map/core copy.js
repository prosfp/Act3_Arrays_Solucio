function multiplyBy10(array) {
  return array.map((numero) => numero * 10);
}

//MAP NO MODIFICA L'ARRAY ORIGINAL
function shiftRight(array) {
  return array.map((element, index, array) => {
    // Si l'index és 0, retornem l'últim element de l'array
    if (index === 0) {
      return array[array.length - 1];
    } else {
      // Sino retornem l'anterior
      return array[index - 1];
    }
  });
}

//[^aeiou]: The ^ character inside square brackets means "not". So, [^aeiou] matches any character that is not a, e, i, o, or u.
function onlyVowels(array) {
  return array.map((element) => element.replace(/[^aeiou]/gi, ''));
}

function doubleMatrix(array) {
  let mult = function (x) {
    return x * 2;
  };
  return array.map((subArray) => subArray.map(mult));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
