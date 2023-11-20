// input = [
//   ['Thundercats', '80s'],
//   ['The Powerpuff Girls', '90s'],
//   ['Sealab 2021', '00s'],
// ];

// output = {
// 'Thundercats': '80s',
// 'The Powerpuff Girls': '90s',
// 'Sealab 2021': '00s',
// };

function objectify(array) {
  return array.reduce((objecte, [serie, any]) => {
    objecte[serie] = any;
    console.log(objecte);
  }, {});
  //['Thundercats', '80s']
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
