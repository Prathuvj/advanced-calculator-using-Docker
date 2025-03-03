const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const math = require('mathjs');
const converters = require('./converters');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample memory for the calculator API
let memory = 0;

// API Routes

// Root route - API documentation or redirect to UI
app.get('/api', (req, res) => {
  res.json({
    message: 'Advanced Calculator API',
    endpoints: {
      '/calculate': 'POST - Calculate a mathematical expression',
      '/convert': 'POST - Convert units',
      '/memory': 'GET - Get current memory value',
      '/memory': 'POST - Perform memory operations'
    },
    examples: {
      calculate: { expression: '2 + 2' },
      convert: { function: 'celsiusToFahrenheit', value: 100 },
      memory: { operation: 'add', value: 10 }
    }
  });
});

// Calculate expressions
app.post('/calculate', (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ error: 'Expression is required' });
    }
    
    // Process the expression
    const result = math.evaluate(expression);
    
    return res.json({
      expression,
      result
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Convert units
app.post('/convert', (req, res) => {
  try {
    const { function: conversionFunction, value } = req.body;
    
    if (!conversionFunction || value === undefined) {
      return res.status(400).json({ 
        error: 'Conversion function and value are required',
        example: { function: 'celsiusToFahrenheit', value: 100 }
      });
    }
    
    const allConversions = converters.getAvailableConversions();
    
    if (!allConversions[conversionFunction]) {
      return res.status(400).json({ 
        error: `Conversion function "${conversionFunction}" not found`,
        availableConversions: Object.keys(allConversions)
      });
    }
    
    const result = allConversions[conversionFunction](Number(value));
    
    return res.json({
      function: conversionFunction,
      value,
      result
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// List all available conversions
app.get('/convert', (req, res) => {
  const categories = {
    'temperature': Object.keys(converters.temperature),
    'length': Object.keys(converters.length),
    'weight': Object.keys(converters.weight),
    'volume': Object.keys(converters.volume),
    'speed': Object.keys(converters.speed),
    'area': Object.keys(converters.area),
    'time': Object.keys(converters.time),
    'data': Object.keys(converters.data)
  };
  
  res.json({ categories });
});

// Memory operations
app.get('/memory', (req, res) => {
  res.json({ memory });
});

app.post('/memory', (req, res) => {
  try {
    const { operation, value } = req.body;
    
    if (!operation) {
      return res.status(400).json({ 
        error: 'Operation is required',
        validOperations: ['add', 'subtract', 'clear', 'set'],
        example: { operation: 'add', value: 10 }
      });
    }
    
    let oldMemory = memory;
    
    switch (operation.toLowerCase()) {
      case 'add':
        if (value === undefined) {
          return res.status(400).json({ error: 'Value is required for add operation' });
        }
        memory += Number(value);
        break;
      case 'subtract':
        if (value === undefined) {
          return res.status(400).json({ error: 'Value is required for subtract operation' });
        }
        memory -= Number(value);
        break;
      case 'clear':
        memory = 0;
        break;
      case 'set':
        if (value === undefined) {
          return res.status(400).json({ error: 'Value is required for set operation' });
        }
        memory = Number(value);
        break;
      default:
        return res.status(400).json({ 
          error: 'Invalid operation',
          validOperations: ['add', 'subtract', 'clear', 'set']
        });
    }
    
    return res.json({
      operation,
      oldValue: oldMemory,
      newValue: memory
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Advanced Calculator API running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api`);
  console.log(`Web Interface: http://localhost:${PORT}`);
}); 