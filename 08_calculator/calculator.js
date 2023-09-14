const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arrayItem) {
  return result = arrayItem.reduce((total, item) => {
    return total += item;
  }, 0);
};

const multiply = function(arrayItem) {
  return result = arrayItem.reduce((total, item) => {
    return total *= item;
  }, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(number) {
  let result = 1;
  if(number > 1)
  {
    while(number > 1)
    {
      result *= number;
      number--;
    }
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
