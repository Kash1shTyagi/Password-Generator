<h1 align="center">Password Generator</h1>

<p align="center">🔒 Secure, customizable password generation as a standalone API + React UI</p>

---

## 📖 Table of Contents

* [🚀 Features](#-features)
* [📂 Directory Structure](#-directory-structure)
* [⚙️ Tech Stack](#️-tech-stack)
* [🛠️ Getting Started](#️-getting-started)

  * [Prerequisites](#prerequisites)
  * [Clone the Repo](#clone-the-repo)
  * [Install & Run Backend](#install--run-backend)
  * [Install & Run Frontend](#install--run-frontend)
* [🌐 API Endpoints](#-api-endpoints)
* [🔧 Configuration](#-configuration)
* [📜 Scripts](#-scripts)
* [🏷️ License](#️-license)
* [🤝 Author](#-author)

---

## 🚀 Features

* **Secure** random password generation
* **Customizable** length, character sets & complexity
* **API-first**: RESTful endpoints for programmatic access
* **Interactive UI**: React + Vite frontend
* **Ready-to-deploy**: Dockerfile and CI/CD workflows

## 📂 Directory Structure

```plaintext
Password-Generator/
├── backend/          # Node.js + TypeScript API
│   ├── src/
│   │   ├── generator.ts  # Core password logic
│   │   └── index.ts      # Express server
│   ├── package.json      # Dependencies & scripts
│   └── tsconfig.json     # TS configuration
├── frontend/         # React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Icons, images
│   │   ├── components/    # UI components
│   │   ├── App.jsx        # Root component
│   │   └── main.jsx       # Entry point
│   ├── .env.example       # Env sample (VITE_API_URL)
│   └── vite.config.js     # Vite config
├── .gitignore
├── LICENSE
└── README.md         # This file
```

## ⚙️ Tech Stack

| Backend                      | Frontend         | Tooling                         |
| ---------------------------- | ---------------- | ------------------------------- |
| Node.js, Express, TypeScript | React, Vite, JSX | ESLint, Prettier, Husky, Docker |

## 🛠️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v16+
* npm or yarn
* Docker (optional)

### Clone the Repo

```bash
git clone https://github.com/Kash1shTyagi/Password-Generator.git 
cd Password-Generator
```

<details>
<summary>Install & Run Backend</summary>

```bash
cd backend
npm install
npm run build   # Compile TS
npm start       # Launch server at http://localhost:4000
# or
npm run dev     # Watch mode with hot-reload
```

</details>

<details>
<summary>Install & Run Frontend</summary>

```bash
cd frontend
npm install
npm run dev     # Launch UI at http://localhost:5173
```

</details>

## 🌐 API Endpoints

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| GET    | `/api/password`         | Generate a new password        |
| POST   | `/api/password/options` | Generate password with options |

## 🔧 Configuration

* **Backend**: set `PORT` (default: 4000) via environment
* **Frontend**: copy `.env.example` → `.env` and adjust `VITE_API_URL`

## 📜 Scripts

### Backend

```bash
npm run build   # Compile TypeScript
npm run dev     # Dev server
npm start       # Production mode
```

### Frontend

```bash
npm run dev     # Dev server
npm run build   # Production build
npm run preview # Preview build
```

### Root

```bash
npm run lint    # ESLint for both packages
npm run test    # (Add tests later)
```

---

## 🏷️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Author

Made with ❤️ by [Kash1shTyagi](https://github.com/Kash1shTyagi)

