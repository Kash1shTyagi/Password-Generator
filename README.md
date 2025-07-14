# Password Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A secure and customizable password generator with both REST API support and a user-friendly web interface.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Demo
Try it live: [https://password-generator-lime-five-20.vercel.app](https://password-generator-lime-five-20.vercel.app)

## Features
- **Random Passwords**: Generate secure passwords with a mix of letters, numbers, and symbols.
- **Custom Length**: User-defined password length between 6 and 32 characters.
- **Character Options**: Toggle inclusion of uppercase, lowercase, numbers, and symbols.
- **REST API**: Integrate password generation into other applications via HTTP endpoints.
- **Responsive UI**: Clean and intuitive React-based frontend.

## Tech Stack
- **Backend**: Node.js, Express (TypeScript)
- **Frontend**: React, TypeScript, CSS
- **Deployment**: Vercel (frontend), Your choice (backend)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kash1shTyagi/Password-Generator.git
   cd Password-Generator
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

### Running Locally

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser at `http://localhost:3000` to view the app.

## Usage

- Use the web interface to configure password options and generate passwords on demand.
- To use the API, send a GET request to:
  ```http
  GET http://localhost:4000/api/generate?length=16&upper=true&lower=true&numbers=true&symbols=true
  ```
- Response:
  ```json
  {
    "password": "aB3$dF7!GhIjK9Lm"
  }
  ```

## Project Structure
\`\`\`
Password-Generator/
├── backend/         # Express API server (TypeScript)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend/        # React client (TypeScript)
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── styles/
    │   └── App.tsx
    ├── package.json
    └── tsconfig.json
\`\`\`

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: \`git checkout -b feature/YourFeature\`
3. Make your changes and commit: \`git commit -m "feat: Add ..."\`
4. Push to the branch: \`git push origin feature/YourFeature\`
5. Open a Pull Request.

Please follow the existing code style and ensure that all linter checks pass.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
**Kashish Tyagi**

- GitHub: [@Kash1shTyagi](https://github.com/Kash1shTyagi)
- Email: tyagikashish1001@gmail.com
