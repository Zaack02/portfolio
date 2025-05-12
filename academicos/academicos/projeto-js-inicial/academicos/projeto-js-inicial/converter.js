function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log("20°C in Fahrenheit:", celsiusToFahrenheit(20));
console.log("68°F in Celsius:", fahrenheitToCelsius(68));
