const math = require('mathjs');
const converters = require('./converters');

console.log('Testing calculator functionality:');
console.log('1 + 2 =', math.evaluate('1 + 2'));
console.log('sin(45) =', math.evaluate('sin(45)'));
console.log('100°C in °F =', converters.temperature.celsiusToFahrenheit(100));
console.log('10 km in miles =', converters.length.kilometersToMiles(10));
console.log('All tests completed successfully!'); 