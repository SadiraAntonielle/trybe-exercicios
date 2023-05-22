const express = require('express');
const books = require('./controllers/book.controller');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', books.getAllBookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));