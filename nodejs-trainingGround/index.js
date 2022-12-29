function getAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

const age = getAge(1972, 2022);
console.log('The age constant is:' + age);
module.exports.getAge = getAge;
