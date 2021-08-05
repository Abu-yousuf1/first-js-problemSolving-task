// celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
const myFahrenheit = celsiusToFahrenheit(50);
console.log(myFahrenheit, 'Fahrenheit');

// Fahrenheit to celsius

function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const myCelsius = fahrenheitToCelsius(1);
console.log(myCelsius, "Celsius");