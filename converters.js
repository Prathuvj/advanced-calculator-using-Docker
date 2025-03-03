/**
 * Unit Conversion Module for Advanced Calculator
 * Provides various conversion functions between different units
 */

// Temperature conversions
const temperature = {
  celsiusToFahrenheit: (celsius) => (celsius * 9/5) + 32,
  fahrenheitToCelsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
  celsiusToKelvin: (celsius) => celsius + 273.15,
  kelvinToCelsius: (kelvin) => kelvin - 273.15,
  fahrenheitToKelvin: (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15,
  kelvinToFahrenheit: (kelvin) => (kelvin - 273.15) * 9/5 + 32
};

// Length conversions
const length = {
  metersToFeet: (meters) => meters * 3.28084,
  feetToMeters: (feet) => feet / 3.28084,
  milesToKilometers: (miles) => miles * 1.60934,
  kilometersToMiles: (kilometers) => kilometers / 1.60934,
  inchesToCentimeters: (inches) => inches * 2.54,
  centimetersToInches: (centimeters) => centimeters / 2.54
};

// Weight/Mass conversions
const weight = {
  kilogramsToPounds: (kilograms) => kilograms * 2.20462,
  poundsToKilograms: (pounds) => pounds / 2.20462,
  ouncesToGrams: (ounces) => ounces * 28.3495,
  gramsToOunces: (grams) => grams / 28.3495
};

// Volume conversions
const volume = {
  litersToGallons: (liters) => liters * 0.264172,
  gallonsToLiters: (gallons) => gallons / 0.264172,
  litersToCups: (liters) => liters * 4.22675,
  cupsToLiters: (cups) => cups / 4.22675,
  millilitersToFluidOunces: (milliliters) => milliliters * 0.033814,
  fluidOuncesToMilliliters: (fluidOunces) => fluidOunces / 0.033814
};

// Speed conversions
const speed = {
  kphToMph: (kph) => kph * 0.621371,
  mphToKph: (mph) => mph / 0.621371,
  metersPerSecondToKph: (mps) => mps * 3.6,
  kphToMetersPerSecond: (kph) => kph / 3.6
};

// Area conversions
const area = {
  squareMetersToSquareFeet: (squareMeters) => squareMeters * 10.7639,
  squareFeetToSquareMeters: (squareFeet) => squareFeet / 10.7639,
  acresToHectares: (acres) => acres * 0.404686,
  hectaresToAcres: (hectares) => hectares / 0.404686
};

// Time conversions
const time = {
  hoursToMinutes: (hours) => hours * 60,
  minutesToHours: (minutes) => minutes / 60,
  daysToHours: (days) => days * 24,
  hoursToDays: (hours) => hours / 24,
  weeksTodays: (weeks) => weeks * 7,
  daysToWeeks: (days) => days / 7
};

// Data storage conversions
const data = {
  megabytesToGigabytes: (mb) => mb / 1024,
  gigabytesToMegabytes: (gb) => gb * 1024,
  gigabytesToTerabytes: (gb) => gb / 1024,
  terabytesToGigabytes: (tb) => tb * 1024,
  bytesToKilobytes: (bytes) => bytes / 1024,
  kilobytesToBytes: (kb) => kb * 1024
};

// Helper function to get a list of all available conversion functions
function getAvailableConversions() {
  const allCategories = {
    temperature,
    length,
    weight,
    volume,
    speed,
    area,
    time,
    data
  };

  const conversions = {};
  
  for (const category in allCategories) {
    for (const convFunc in allCategories[category]) {
      conversions[convFunc] = allCategories[category][convFunc];
    }
  }
  
  return conversions;
}

module.exports = {
  temperature,
  length,
  weight,
  volume,
  speed, 
  area,
  time,
  data,
  getAvailableConversions
}; 