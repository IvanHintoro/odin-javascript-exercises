const convertToCelsius = function(temperatures) {
  let Celcius = ((temperatures - 32) * 5 ) / 9
  if (Celcius % 1 != 0){
    Celcius = parseFloat(Celcius.toFixed(1));
  }
  return Celcius;
};

const convertToFahrenheit = function(temperatures) {
  let Fahrenheit = (temperatures * 9 / 5) + 32
  if (Fahrenheit % 1 != 0){
    Fahrenheit =  parseFloat(Fahrenheit.toFixed(1));
  }
  return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
