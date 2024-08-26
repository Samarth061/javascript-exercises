const convertToCelsius = function(Fahrenheit) {
  let Celsius = (Fahrenheit - 32) * 5/9;
  return notInteger(Celsius);
  
};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = (Celsius * 9/5) + 32;
  return notInteger(Fahrenheit);
  
};

function notInteger(num){
  if (!Number.isInteger(num))
  {
    return parseFloat(num.toFixed(1));
  }
  return num;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
