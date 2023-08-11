const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
let sum=0;	
  for (let i in numbers) {
    sum+=numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let multiply=1;	
  for (let i in numbers) {
    multiply*=numbers[i];
  }
  return multiply;
};



const power = function(number,power) {
  let result=1;
  for (let i = 0; i < power; i++) {
    result=result*number;
    
  }
  return result;
	
};

const factorial = function(number) {
  let result=1;
  for (let i = 1; i <= number; i++) {
    result=result*i;
    
  }
  return result;
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
