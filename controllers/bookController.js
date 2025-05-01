const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  const book = new Book({ ...req.body, userId: req.userId });
  await book.save();
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const books = await Book.find({ userId: req.userId });
  res.json(books);
};

exports.updateBook = async (req, res) => {
  const updated = await Book.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Book deleted" });
};
