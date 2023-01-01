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

export const getAgeForPerson=(person, currentYear) => {
  return currentYear - person.birthYear;
}
export const division = (number1,number2) => {
  if(number2 === 0) {
    throw new Error('Division with zero is impossible');
  }
  return number1 / number2;
};

export const addWithLog = (number1, number2, logger) => {
  console.log(logger.toString());
  logger(`about to '${number1}' + '${number2}'`);
  return number1 + number2;
}
