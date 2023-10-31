function multiplyBy10(array) {
  const arrayMult = array.map((numero) => numero * 10);
  return arrayMult;
}

//MAP NO MODIFICA L'ARRAY ORIGINAL
function shiftRight(array) {
  return array.map((element, index, arrayComplet) => {
    // Si l'index és 0; retornem l'últim element de l'array
    if (index === 0) {
      let ultimaPosicio = arrayComplet.length - 1;
      return array[ultimaPosicio];
    } else {
      // Si no, retornem l'anterior
      let anteriorPosicio = index - 1;
      return arrayComplet[anteriorPosicio];
    }
  });
}

//[^aeiou]: The ^ character inside square brackets means "not". So, [^aeiou] matches any character that is not a, e, i, o, or u.
// /[^aeiou]/gi
function onlyVowels(array) {
  return array.map((element) => {
    return element.replace(/[^aeiou]/gi, '');
  });
}

function doubleMatrix(array) {
  //[[1,2,3],[4,5,6],[7,8,9]]
  //[[2,4,6],[8,10,12],[14,16,18]]

  //return array.map((subArray) => subArray.map((numeros) => numeros * 2));
  const outerArray = array.map((subArray) => {
    subArray.map((numeros) => {
      let mult = numeros * 2;
      console.log(mult);
      return mult;
    });
    return;
  });
  console.log(outerArray);
  return outerArray;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
