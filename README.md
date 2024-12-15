# belSoft-Library-Management

API Endpoints Documentation
POST /api/library/register: Register a new user

Request body: { "name": "User Name", "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }
POST /api/library/login: Login an existing user

Request body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }
POST /api/library/book: Add a new book (Requires Authentication)

Request body: { "title": "Book Title", "author": "Author Name" }
Response: { "message": "Book added successfully", "newBook": {...} }
POST /api/library/borrow: Borrow a book (Requires Authentication)

Request body: { "bookId": "book_id" }
Response: { "message": "Book borrowed successfully", "book": {...} }
POST /api/library/return: Return a borrowed book (Requires Authentication)

Request body: { "bookId": "book_id" }
Response: { "message": "Book returned successfully", "book": {...} }
GET /api/library/books: View all available books

Response: [ { "title": "Book Title", "author": "Author Name", ... }, ... ]
With this, we have created a simple library management REST API with authentication, validation, and CRUD operations!

