const Book = require('../models/book');
const User = require('../models/user');

const addBook = async (req, res) => {
    const { title, author } = req.body;

    try {
        const newBook = new Book({ title, author });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', newBook });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const borrowBook = async (req, res) => {
    const { bookId } = req.body;

    try {
        const book = await Book.findById(bookId);
        if (!book || !book.available) {
            return res.status(400).json({ message: 'Book is not available' });
        }

        book.available = false;
        book.borrower = req.user._id;
        await book.save();

        res.status(200).json({ message: 'Book borrowed successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const returnBook = async (req, res) => {
    const { bookId } = req.body;

    try {
        const book = await Book.findById(bookId);
        if (!book || book.borrower.toString() !== req.user._id.toString()) {
            return res.status(400).json({ message: 'You cannot return this book' });
        }

        book.available = true;
        book.borrower = null;
        await book.save();

        res.status(200).json({ message: 'Book returned successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllAvailableBooks = async (req, res) => {
    try {
        const books = await Book.find({ available: true });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addBook, borrowBook, returnBook, getAllAvailableBooks };