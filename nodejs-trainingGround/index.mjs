/**before */
/*function getAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
module.exports.getAge = getAge;*/

/*after optimized code */
export const getAge = (birthYear , currentYear) => currentYear - birthYear;
export const getAgeGroup = (Age) => {
  if(Age < 0) {
    return "Age can't be negative";
  }
  if(Age < 4) {
    return "toddler";
  }
  if(Age < 13) {
    return "kid";
  }
  if(Age < 20) {
    return "teenager";
  }
  if(Age < 40) {
    return "adult";
  }
  if(Age === 50) {
    return "prime";
  }
  return "old";
}


