const convertToCelsius = function(temprature) {
  let result=((temprature-32)*(5/9));
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(temprature) {
  let result=((temprature*(9/5))+32);
  return parseFloat(result.toFixed(1));

};  

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
