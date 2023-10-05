// SOME: checks if at least one element in an array passes a certain condition. The
// some() method returns a boolean value true if at least one element in the
// array passes the condition, and false otherwise.

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  return input.some((element) => element > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  return input.some((element) => element.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  return input.some((fila) => fila.some((element) => element === true));
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  return input.some((element) => element.includes('Lost'));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa,
};
