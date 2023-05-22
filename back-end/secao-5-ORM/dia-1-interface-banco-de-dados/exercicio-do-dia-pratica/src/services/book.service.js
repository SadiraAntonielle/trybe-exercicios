const book = require('../models/book.model');

const getAllBookService = async () => {
  const books = await book.findAll();

  return books;
};

module.exports= { getAllBookService };