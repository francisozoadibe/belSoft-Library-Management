const express = require('express');
const { validateBook, validateLogin, validateRegister, validationMiddleware } = require('../middlewares/validationMiddleware');
const { addBook, borrowBook, returnBook, getAllAvailableBooks } = require('../Controllers/libraryController');
const { registerUser, loginUser } = require('../Controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// User routes
router.post('/register', validateRegister, validationMiddleware, registerUser);
router.post('/login', validateLogin, validationMiddleware, loginUser);

// Book routes
router.post('/book', authMiddleware, validateBook, validationMiddleware, addBook);
router.post('/borrow', authMiddleware, borrowBook);
router.post('/return', authMiddleware, returnBook);
router.get('/books', getAllAvailableBooks);

module.exports = router;
