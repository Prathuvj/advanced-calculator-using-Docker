const readlineSync = require('readline-sync');
const math = require('mathjs');
const converters = require('./converters');

/**
 * Advanced Calculator
 * Supports:
 * - Basic arithmetic operations (+, -, *, /)
 * - Exponents and roots (^, sqrt)
 * - Trigonometric functions (sin, cos, tan)
 * - Logarithms (log, ln)
 * - Constants (pi, e)
 * - Memory operations
 * - Unit conversions
 * - And more...
 */

// Memory storage for the calculator
let memory = 0;

// Welcome message
console.log('===== Advanced Node.js Calculator =====');
console.log('Type "help" for commands or "exit" to quit');
console.log('=======================================');

// Help menu
function displayHelp() {
  console.log('\n===== Available Commands =====');
  console.log('Basic Operations: +, -, *, /, ^');
  console.log('Functions: sin(x), cos(x), tan(x), sqrt(x), log(x), ln(x)');
  console.log('Constants: pi, e');
  console.log('Memory Operations:');
  console.log('  mem       - Display current memory value');
  console.log('  m+        - Add result to memory');
  console.log('  m-        - Subtract result from memory');
  console.log('  mr        - Recall memory value');
  console.log('  mc        - Clear memory');
  console.log('Unit Conversions:');
  console.log('  conv      - List all available conversions');
  console.log('  conv:function value - Execute conversion (e.g. conv:celsiusToFahrenheit 100)');
  console.log('Other Commands:');
  console.log('  clear     - Clear console');
  console.log('  help      - Show this help menu');
  console.log('  exit      - Quit calculator');
  console.log('==============================\n');
}

// Display available conversion functions
function displayConversions() {
  console.log('\n===== Available Unit Conversions =====');
  
  // Group conversions by category
  const categories = {
    'Temperature': Object.keys(converters.temperature),
    'Length': Object.keys(converters.length),
    'Weight': Object.keys(converters.weight),
    'Volume': Object.keys(converters.volume),
    'Speed': Object.keys(converters.speed),
    'Area': Object.keys(converters.area),
    'Time': Object.keys(converters.time),
    'Data': Object.keys(converters.data)
  };
  
  // Display each category and its conversions
  for (const category in categories) {
    console.log(`\n${category}:`);
    categories[category].forEach(conversion => {
      console.log(`  ${conversion}`);
    });
  }
  
  console.log('\nUsage: conv:conversionName value');
  console.log('Example: conv:celsiusToFahrenheit 100');
  console.log('==============================\n');
}

// Process unit conversion commands
function processConversion(command) {
  if (command === 'conv') {
    displayConversions();
    return null;
  }
  
  // Handle conversion function calls (conv:functionName value)
  if (command.startsWith('conv:')) {
    const allConversions = converters.getAvailableConversions();
    const parts = command.split(' ');
    
    if (parts.length !== 2) {
      console.log('Error: Conversion format should be "conv:functionName value"');
      return null;
    }
    
    const functionName = parts[0].replace('conv:', '');
    const value = parseFloat(parts[1]);
    
    if (isNaN(value)) {
      console.log('Error: Value must be a number');
      return null;
    }
    
    if (allConversions[functionName]) {
      try {
        const result = allConversions[functionName](value);
        return result;
      } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
      }
    } else {
      console.log(`Error: Conversion function "${functionName}" not found. Use "conv" to see available conversions.`);
      return null;
    }
  }
  
  return false; // Not a conversion command
}

// Function to evaluate mathematical expressions
function calculate(expression) {
  try {
    // Process special commands
    if (expression === 'mem') {
      console.log(`Memory: ${memory}`);
      return null;
    } else if (expression === 'm+') {
      memory += lastResult;
      console.log(`Added ${lastResult} to memory. Memory: ${memory}`);
      return null;
    } else if (expression === 'm-') {
      memory -= lastResult;
      console.log(`Subtracted ${lastResult} from memory. Memory: ${memory}`);
      return null;
    } else if (expression === 'mr') {
      return memory;
    } else if (expression === 'mc') {
      memory = 0;
      console.log('Memory cleared');
      return null;
    } else if (expression === 'clear') {
      console.clear();
      console.log('===== Advanced Node.js Calculator =====');
      console.log('Type "help" for commands or "exit" to quit');
      console.log('=======================================');
      return null;
    } else if (expression === 'help') {
      displayHelp();
      return null;
    }
    
    // Check if it's a conversion command
    const conversionResult = processConversion(expression);
    if (conversionResult !== false) {
      return conversionResult;
    }

    // Replace 'ln' with 'log' since mathjs uses log for natural logarithm
    expression = expression.replace(/ln\(/g, 'log(');
    
    // Evaluate the expression using mathjs
    const result = math.evaluate(expression);
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

// Main calculator loop
let lastResult = 0;
function startCalculator() {
  while (true) {
    const input = readlineSync.question('\n> ');
    
    // Exit command
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      break;
    }
    
    // Skip empty input
    if (!input.trim()) continue;
    
    // Calculate result
    const result = calculate(input);
    
    // Display result if not null
    if (result !== null) {
      lastResult = result;
      console.log(`Result: ${result}`);
    }
  }
}

// Start the calculator
startCalculator(); 