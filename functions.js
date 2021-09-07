const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnAbcString = function (value) {
  return value;
};

const returnSumOfTen = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtraction = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
  return arg1 * arg2;
};

const division = function (arg1, arg2) {
  return arg1 / arg2;
};

const returnArray = function (arg1) {
  return arg1;
};

const returnFirstIndex = function (arg1) {
  return arg1[0];
};

const returnSecondIndex = function (arg1) {
  return arg1[1];
};

const returnArrayLength = function (arg1) {
  return arg1.length;
};

const arraySum = function (arg1) {
  let result = 0
  for(let a of arg1){
    result += a
  }
  return result;
};

const arraySubtraction = function (arg1) {
  let result = 0
  for(let a of arg1){
    result -= a
  }
  return result;
};

const multiplicationArray = function (arg1) {
  let result = arg1[0]
  for(let a of arg1){
    result *= a
  }
  return result;
};

const divisionArray = function (arg1) {
  let result = arg1[0]
  for(let a of arg1){
    result /= a
  }
  return Number(result.toFixed(3));
};

const oddArray = function (arg1) {
  let result = []
  for(let a of arg1){
    if( a % 2 !== 0){
      result.push(a)
    }
  }
  return result
};

const evenArray = function (arg1) {
  let result = []
  for(let a of arg1){
    if( a % 2 === 0){
      result.push(a)
    }
  }
  return result
};

const returnFruits = function (arg1) {
  let result = []
  for( let a of arg1){
    if(a == 'apple' || a == 'orange'){
      result.push(a)
    }
  }
  return result
};

module.exports = {
  returnEmptyString,
  returnZeroNumber,
  returnEmptyArray,
  returnEmptyObject,
  returnAbcString,
  returnSumOfTen,
  subtraction,
  multiplication,
  division,
  returnArray,
  returnFirstIndex,
  returnSecondIndex,
  returnArrayLength,
  arraySum,
  arraySubtraction,
  multiplicationArray,
  divisionArray,
  oddArray,
  evenArray,
  returnFruits,
};
