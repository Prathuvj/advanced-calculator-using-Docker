# Advanced Calculator

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A feature-rich calculator built with Node.js that supports a wide range of mathematical operations. Available as both a CLI tool and a web application with a REST API. The application can be run locally or using Docker.

![Calculator Demo](https://via.placeholder.com/800x400?text=Advanced+Calculator+Demo)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [From GitHub](#from-github)
  - [Local Installation](#local-installation)
  - [Docker Installation](#docker-installation)
- [Usage](#usage)
  - [Command-Line Interface](#command-line-interface)
  - [Web Interface](#web-interface)
  - [Docker](#docker)
- [API Endpoints](#api-endpoints)
- [CLI Commands](#cli-commands)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division
- **Advanced Math Functions**: 
  - Trigonometric functions (sin, cos, tan)
  - Logarithms (log, ln)
  - Square roots and exponents
- **Constants**: Mathematical constants like pi and e
- **Memory Functions**: Store, recall, add to, and subtract from memory
- **Expression Evaluation**: Evaluate complex mathematical expressions
- **Unit Conversions**: Convert between different units of measurement
  - Temperature (Celsius, Fahrenheit, Kelvin)
  - Length (meters, feet, inches, etc.)
  - Weight (kilograms, pounds, etc.)
  - Volume (liters, gallons, etc.)
  - Speed (km/h, mph, etc.)
  - Area (square meters, square feet, etc.)
  - Time (hours, minutes, days, etc.)
  - Data storage (bytes, KB, MB, GB, TB)
- **Access Methods**:
  - Command-line interface
  - Web interface
  - RESTful API

## Installation

### From GitHub

1. Clone the repository:
```bash
git clone https://github.com/yourusername/advanced-calculator.git
cd advanced-calculator
```

2. Install dependencies:
```bash
npm install
```

### Local Installation

If you've downloaded the project as a ZIP file:

1. Extract the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Docker Installation

1. Install Docker:
   - **Windows**: [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
   - **macOS**: [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
   - **Linux**: Use your package manager or follow the [official installation instructions](https://docs.docker.com/engine/install/)

2. Verify Docker installation:
```bash
docker --version
docker-compose --version
```

3. Clone the repository or download the files
4. Navigate to the project directory
5. Build and run with Docker Compose:

```bash
docker-compose up -d
```

## Usage

### Command-Line Interface

Start the CLI calculator:

```bash
npm run cli
```

or

```bash
node index.js
```

### Web Interface

Start the web server:

```bash
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Docker

Run with Docker:

```bash
# Build the Docker image
npm run docker:build

# Run the Docker container
npm run docker:run
```

Or use Docker Compose:

```bash
# Start with Docker Compose
npm run docker:compose

# Stop with Docker Compose
npm run docker:stop
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

The calculator exposes the following RESTful API endpoints:

### Calculate Expression

**Endpoint**: `POST /calculate`

**Request Body**:
```json
{
  "expression": "2 + 2"
}
```

**Response**:
```json
{
  "expression": "2 + 2",
  "result": 4
}
```

### Convert Units

**Endpoint**: `POST /convert`

**Request Body**:
```json
{
  "function": "celsiusToFahrenheit",
  "value": 100
}
```

**Response**:
```json
{
  "function": "celsiusToFahrenheit",
  "value": 100,
  "result": 212
}
```

### List Available Conversions

**Endpoint**: `GET /convert`

**Response**: A list of available conversion functions grouped by category.

### Memory Operations

**Endpoint**: `POST /memory`

**Request Body**:
```json
{
  "operation": "add",
  "value": 10
}
```

**Response**:
```json
{
  "operation": "add",
  "oldValue": 0,
  "newValue": 10
}
```

Valid operations: `add`, `subtract`, `set`, `clear`

**Endpoint**: `GET /memory`

**Response**:
```json
{
  "memory": 10
}
```

## CLI Commands

- **Mathematical Expressions**: Enter any mathematical expression to evaluate it
  - Examples: `2+2`, `sin(45)`, `sqrt(16)`, `2^3`, `log(10)`
  
- **Memory Operations**:
  - `mem` - Display current memory value
  - `m+` - Add last result to memory
  - `m-` - Subtract last result from memory
  - `mr` - Recall memory value
  - `mc` - Clear memory

- **Unit Conversions**:
  - `conv` - Display all available unit conversions
  - `conv:functionName value` - Convert a value using the specified conversion function
  - Example: `conv:celsiusToFahrenheit 100` converts 100°C to Fahrenheit

- **Other Commands**:
  - `help` - Display help menu
  - `clear` - Clear the console
  - `exit` - Exit the calculator

## Examples

### CLI Examples

```
> 2+2
Result: 4

> sin(45)
Result: 0.8509035245341184

> 2^3
Result: 8

> mr
Result: 0

> 10
Result: 10

> m+
Added 10 to memory. Memory: 10

> 5*5
Result: 25

> m+
Added 25 to memory. Memory: 35

> mem
Memory: 35

> mc
Memory cleared

> conv:celsiusToFahrenheit 100
Result: 212

> conv:kilometersToMiles 100
Result: 62.137119223733395
```

## Project Structure

```
advanced-calculator/
├── converters.js      # Unit conversion functionality
├── docker-compose.yml # Docker Compose configuration
├── Dockerfile         # Docker configuration
├── index.js           # CLI application entry point
├── package.json       # Project configuration and dependencies
├── public/            # Static web files
│   └── index.html     # Web interface
├── README.md          # Project documentation
└── server.js          # Web server and API
```

## Dependencies

- [express](https://www.npmjs.com/package/express) - Web server framework
- [cors](https://www.npmjs.com/package/cors) - Enable CORS for the API
- [body-parser](https://www.npmjs.com/package/body-parser) - Parse HTTP request bodies
- [readline-sync](https://www.npmjs.com/package/readline-sync) - For synchronous command-line input
- [mathjs](https://www.npmjs.com/package/mathjs) - For advanced mathematical operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details. 