# 📁 Feature-Based Project Folder Structure (Senior-Level)

```markdown
src/
├─ modules/ # 🔹 Feature-based modules (all domain logic encapsulated)
│ ├─ user/ # 👤 User module
│ │ ├─ user.controller.ts # Handles HTTP requests & responses
│ │ ├─ user.service.ts # Business logic: registration, login, profile update
│ │ ├─ user.route.ts # Express routes, e.g., /api/v1/users
│ │ ├─ user.validation.ts # Request validation (Joi/Zod schemas)
│ │ ├─ user.interface.ts # TypeScript types / DTOs
│ │ └─ user.repository.ts # Optional: abstract DB queries (Drizzle / ORM)
│
│ ├─ product/ # 🛍️ Product module
│ │ ├─ product.controller.ts
│ │ ├─ product.service.ts # Business logic: CRUD, stock check, filters
│ │ ├─ product.route.ts
│ │ ├─ product.validation.ts
│ │ ├─ product.interface.ts
│ │ └─ product.repository.ts
│
│ ├─ vendor/ # 🏪 Vendor module
│ │ ├─ vendor.controller.ts
│ │ ├─ vendor.service.ts # Business logic: vendor registration, product management
│ │ ├─ vendor.route.ts
│ │ ├─ vendor.validation.ts
│ │ ├─ vendor.interface.ts
│ │ └─ vendor.repository.ts
│
│ └─ order/ # 🛒 Order module
│ ├─ order.controller.ts
│ ├─ order.service.ts # Business logic: order creation, stock update, status flow
│ ├─ order.route.ts
│ ├─ order.validation.ts
│ ├─ order.interface.ts
│ └─ order.repository.ts
│
├─ db/ # 🔧 Database configuration & schemas
│ ├─ schema/ # Drizzle / ORM schema definitions
│ │ ├─ user.schema.ts
│ │ ├─ product.schema.ts
│ │ ├─ vendor.schema.ts
│ │ └─ order.schema.ts
│ └─ index.ts # DB connection setup & export
│
├─ middleware/ # 🛡️ Global reusable middlewares
│ ├─ auth.middleware.ts # JWT / session verification
│ ├─ role.middleware.ts # Role-based access control (admin/vendor/user)
│ ├─ error.middleware.ts # Global error handling
│ ├─ logging.middleware.ts # Request / response logging
│ └─ rateLimit.middleware.ts # Optional: API rate limiting
│
├─ utils/ # ⚙️ Reusable helper functions
│ ├─ jwt.ts # JWT token generation & verification
│ ├─ hash.ts # Password hash & compare
│ ├─ responseFormatter.ts # Standard API response format
│ ├─ pagination.ts # Helper for paginated queries
│ ├─ validator.ts # Generic request validation helpers
│ └─ emailSender.ts # Email sending helper
│
├─ config/ # ⚙️ Environment & external configs
│ ├─ db.config.ts # DB connection config
│ ├─ app.config.ts # App-wide config (port, environment)
│ └─ thirdParty.config.ts # API keys, external services
│
├─ tests/ # 🧪 Unit & integration tests
│ ├─ user.test.ts
│ ├─ product.test.ts
│ ├─ vendor.test.ts
│ └─ order.test.ts
│
├─ app.ts # 🚀 Application setup (middleware, routes, global error)
└─ server.ts # 🚀 Server bootstrap (listen to port
```

This approach is **cleaner, scalable, and maintainable** as your project grows.

---

## 1️⃣ Modules – The Core of Your App

- **Purpose:** Each module represents a feature of your app.
- **Structure:**
  Each module typically contains: 1. **Controller:** Handles HTTP requests and responses. Think “what happens when someone hits an endpoint.” 2. **Service:** Contains the **business logic**, like rules, calculations, or workflows. 3. **Route:** Maps URLs to controller functions. Example: `/api/v1/users`. 4. **Validation:** Ensures incoming data is correct. Tools: **Zod** or **Joi**. 5. **Interface/DTO:** TypeScript types to ensure type safety. 6. **Repository (Optional):** Abstracts database operations. Makes your service independent of ORM or DB choice.

**Why feature-based?**

- Adding a new feature means just adding a new folder.
- Each module is self-contained → easy to maintain, test, and scale.

---

## 2️⃣ Repository Layer (Optional but Recommended)

- Acts as a **bridge between your service and the database**.
- Service does **not directly query DB**.
- Benefits:
  - Easier to switch databases or ORM later.
  - Keeps service layer clean and focused on business logic.
  - Improves testability (mock repositories in unit tests).

---

## 3️⃣ Middleware – Cross-Cutting Logic

- Handles things that affect **all requests**, like:
  - Authentication (`auth.middleware.ts`)
  - Roles/permissions (`role.middleware.ts`)
  - Error handling (`error.middleware.ts`)
  - Logging or rate-limiting

**Important:** Middleware should **never contain business logic**. Only handle generic operations that apply to multiple routes.

---

## 4️⃣ Utils – Generic Helpers

- Reusable functions that **aren’t tied to a single module**:
  - `jwt.ts` → generate and verify tokens
  - `hash.ts` → password hashing
  - `responseFormatter.ts` → consistent API response format
  - `pagination.ts` → helper for paginated queries
  - `emailSender.ts` → sending emails

**Rule:** Don’t put module-specific logic here. Only true generic helpers.

---

## 5️⃣ Database Layer

- **Schema folder:** Holds table definitions for Drizzle/ORM.
- Each module has its schema if needed (`user.schema.ts`, `product.schema.ts`, etc.).
- Repositories can wrap schema queries for cleaner service logic.

**Why:** Keeps DB structure separate and reusable. Easy to swap or update DB logic.

---

## 6️⃣ Validation

- Separate file per module for **incoming request validation**.
- Ensures requests are correct before hitting controller/service.
- Tools: **Joi** or **Zod**.

**Benefit:**

- Prevents bad data from reaching your business logic.
- Keeps controllers clean.

---

## 7️⃣ Interfaces / DTOs

- TypeScript types that define the **shape of data** for:
  - Requests (incoming data)
  - Responses (outgoing data)
  - DB models
- Helps catch errors at compile time.

**Example:**

Controller → Service → Repository → DB → Controller response.

All layers are type-safe.

---

## 8️⃣ Testing

- **Unit tests:** Test **services** individually.
- **Integration tests:** Test **routes + controllers + DB interactions**.
- Structure allows clean separation for testing.

---

## 9️⃣ API Versioning

- Use `/api/v1/` in routes.
- Easy to release a `v2` without breaking existing clients.
- Keeps API backward compatible.

---

## 🔟 App Entry Points

- **`app.ts`**
  - Setup Express app
  - Register middleware and routes
  - Doesn’t start the server
- **`server.ts`**
  - Starts server (listen to port)
  - Keeps bootstrap separate from app logic

**Why separate?** Easier testing and future server changes (e.g., serverless deployments).

---

## ✅ Quick Senior-Level Rules

1. **Feature-based** → everything about a feature in one place.
2. **Repository layer** → optional, but makes services clean.
3. **Middleware** → global, no business logic.
4. **Utils** → generic helpers only.
5. **Validation** → per module, before controller.
6. **DTO/Interfaces** → type-safe, prevents runtime errors.
7. **Testing** → unit tests for services, integration tests for routes.
8. **API versioning** → future-proof.
9. **DB layer** → schema + repository separation.
10. **Entry points** → `app.ts` vs `server.ts`.
