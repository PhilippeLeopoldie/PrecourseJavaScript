/**before */
/*function getAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
module.exports.getAge = getAge;*/

/*after optimized code */
export const getAge = (birthYear , currentYear) => currentYear - birthYear;


