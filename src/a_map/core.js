function multiplyBy10(array) {
  return array.map((element) => {
    return element * 10;
  });
}

//MAP NO MODIFICA L'ARRAY ORIGINAL
function shiftRight(array) {
  return array.map((element, index, array) => {
    // Si l'index és 0, retornem l'últim element de l'array
    if (index === 0) {
      return array[array.length - 1];
    } else {
      // Si no, retornem l'anterior
      return array[index - 1];
    }
  });
}

//[^aeiou]: The ^ character inside square brackets means "not". So, [^aeiou] matches any character that is not a, e, i, o, or u.
function onlyVowels(array) {
  return array.map((element) => {
    return element.replace(/[^aeiou]/gi, '');
  });
}

function doubleMatrix(array) {
  let double = function (x) {
    return x * 2;
  };
  let doubleMatrix = array.map((subArray) => subArray.map(double));
  return doubleMatrix;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
