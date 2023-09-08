# Assignment No: 08

## Build a Book Catalogue Backend Assignment

---

## Live Server: https://a8-book-catallog-backend.vercel.app

### Features:

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

## Live Link:

**Application Routes:**

**User**

- https://a8-book-catallog-backend.vercel.app/api/v1/auth/signup (POST)
- https://a8-book-catallog-backend.vercel.app/api/v1/users (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/users/f9bf7739-57d4-497c-a33e-5c300ca6142c (Single GET) Include an id that is saved in your database
- https://a8-book-catallog-backend.vercel.app/api/v1/users/f9bf7739-57d4-497c-a33e-5c300ca6142c (PATCH)
- https://a8-book-catallog-backend.vercel.app/api/v1/users/f9bf7739-57d4-497c-a33e-5c300ca6142c (DELETE) Include an id that is saved in your database
- https://a8-book-catallog-backend.vercel.app/api/v1/profile (GET)

**Category**

- https://a8-book-catallog-backend.vercel.app/api/v1/categories/create-category (POST)
- https://a8-book-catallog-backend.vercel.app/api/v1/categories (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/categories/e5809663-fe68-49da-aa91-4da08b61c191 (Single GET) Include an id that is saved in your database
- https://a8-book-catallog-backend.vercel.app/api/v1/categories/e5809663-fe68-49da-aa91-4da08b61c191 (PATCH)
- https://a8-book-catallog-backend.vercel.app/api/v1/categories/e5809663-fe68-49da-aa91-4da08b61c191 (DELETE) Include an id that is saved in your database

**Books**

- https://a8-book-catallog-backend.vercel.app/api/v1/books/create-book (POST)
- https://a8-book-catallog-backend.vercel.app/api/v1/books (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/books/e5809663-fe68-49da-aa91-4da08b61c191/category (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/books/1e76ee84-8f6c-4416-8022-b6b918134a47 (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/books/1e76ee84-8f6c-4416-8022-b6b918134a47 (PATCH)
- https://a8-book-catallog-backend.vercel.app/api/v1/books/1e76ee84-8f6c-4416-8022-b6b918134a47 (DELETE)

**Orders**

- https://a8-book-catallog-backend.vercel.app/api/v1/orders/create-order (POST)
- https://a8-book-catallog-backend.vercel.app/api/v1/orders (GET)
- https://a8-book-catallog-backend.vercel.app/api/v1/orders/:orderId (GET)
