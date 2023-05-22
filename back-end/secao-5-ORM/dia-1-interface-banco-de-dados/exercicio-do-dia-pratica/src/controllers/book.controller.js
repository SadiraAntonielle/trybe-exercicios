 const book = require('../services/book.service');

 const getAllBookController = async (_req, res) => {
  const books = await book.getAllBookService();
  return res.status(200).json(books);
 };

 module.exports = { getAllBookController };