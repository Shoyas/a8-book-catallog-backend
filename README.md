# Assignment No: 08

## Build a Book Catalogue Backend Assignment

---

### Features:

-
- Error Handling.

- CRUD Operations on Users, Books and Orders.

- Auth Service with access token.

- Restricting route according to user permission.

- Hashing sensitive database information for getting more secure.

## Technologies:

- TypeScript
- Postgres as Database
- Prisma as the Object Relation Model (ORM)
- Node.JS
- Express.JS
- Bcrypt
- JSONwebtoken
- Git
- Supabase

##Live Link:

**Application Routes:**

**User**

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

**Category**

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

**Books**

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

**Orders**

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
