# Contributing to Advanced Calculator

Thank you for your interest in contributing to Advanced Calculator! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by creating an issue on GitHub. Include:

1. A clear, descriptive title
2. Steps to reproduce the bug
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Your environment (OS, browser, version, etc.)

### Suggesting Enhancements

If you have an idea for improving the calculator, please create an issue on GitHub with:

1. A clear, descriptive title
2. Detailed description of the enhancement
3. Any relevant mock-ups or examples
4. Why this enhancement would be useful to most users

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure your changes don't break existing functionality
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Docker (optional, for container-based development)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/advanced-calculator.git
cd advanced-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the application in development mode:
```bash
npm start
```

### Coding Standards

- Use meaningful variable and function names
- Write clear comments for complex logic
- Follow the existing code style
- Write unit tests for new features

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

## Feature Roadmap

Future plans for this project include:

- More unit conversions
- Scientific notation support
- Graphing capabilities
- History of calculations
- User accounts for saving preferences

Feel free to help implement these features!

## Thank You

Your contributions are what make the open source community great. Thank you for taking the time to contribute! 