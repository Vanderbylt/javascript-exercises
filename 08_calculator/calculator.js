const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(array) {
	let summation = 0;
  for (let items of array){
    summation += items;
  }
  return summation;
};

const multiply = function(array) {
  let multiplication = 1;
  for (let items of array){
    multiplication *= items;
  }
  return multiplication;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(num) {
  let facts = 1;
	if (num === 0 || num === 1){
    return 1;
  }
  else{
    for (let i = num; i>0 ; i--){
      facts *= i;
    }
    return facts;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
