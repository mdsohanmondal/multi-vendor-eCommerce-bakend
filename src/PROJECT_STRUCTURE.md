# 📁 Project Folder Structure

This document defines the folder structure and architecture of the project.

---

## 🧱 Root Structure

- **src/** → Main application source code
- **dist/** → Compiled output (auto-generated)
- **node_modules/** → Installed dependencies
- **.env** → Environment variables (ignored in git)
- **.gitignore** → Files to ignore in git
- **package.json** → Project metadata & dependencies
- **tsconfig.json** → TypeScript configuration

---

## 📦 src/ Structure

### 🔧 config/

Configuration files (DB, environment setup, API keys)

### 🎮 controllers/

Handle request & response logic

### 🧠 services/

Business logic layer (core logic of app)

### 🗄️ models/

Database schema & structure

### 🛣️ routes/

API endpoints & route handling

### 🧩 middleware/

Custom middleware (auth, error handler, logging)

### 🛠️ utils/

Helper functions (validation, formatter, etc.)

### 🧪 tests/

Unit & integration tests

### 📂 public/

Static files (images, CSS, frontend assets)

---

## 🚀 Entry Point

- **server.ts / app.ts** → Main entry file to start server

---

## 🧠 Architecture Idea

Flow:

Request → Route → Controller → Service → Model → Database
Response ← Controller ← Service ← Model

---

## 📌 Notes

- Keep business logic inside **services**
- Keep controllers clean and simple
- Use middleware for reusable logic
- Follow separation of concerns

---

src/
├─ db/
│ ├─ schema/ ← PostgreSQL / Drizzle / ORM schema
│ │ ├─ user.schema.ts
│ │ ├─ product.schema.ts
│ │ └─ order.schema.ts
│ └─ index.ts ← DB connection / setup
├─ n/ ← TypeScript type/interface
│ ├─ user.model.ts
│ ├─ product.model.ts
│ ├─ order.model.ts
│ └─ index.ts
├─ controllers/
├─ routes/
└─ services/

--- final recommendation
src/
├─ modules/
│ ├─ user/
│ │ ├─ user.controller.ts
│ │ ├─ user.service.ts
│ │ ├─ user.route.ts
│ │ ├─ user.validation.ts
│ │ └─ user.interface.ts
│ │
│ ├─ product/
│ ├─ vendor/
│ ├─ order/
│
├─ db/
├─ middleware/
├─ utils/
├─ app.ts
└─ server.ts
