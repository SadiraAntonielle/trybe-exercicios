const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
/*   Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA */

function formatedBookNames() {
    return books.map( (book) => `${book.name} - ${book.genre} - ${book.author.name}` );
  }
/* console.log(formatedBookNames()); */

/*  Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
  De olho na dica 👀: use as funções map, sort */

  function nameAndAge() {
    return books.map( (book) => ({
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear, 
    })).sort( (data1, data2) => data1.age - data2.age );
  }
/* console.log(nameAndAge()); */

/* Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
  De olho na dica 👀: use a função filter; */

  function fantasyOrScienceFiction() {
    return books.filter( ( book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  }
/* console.log(fantasyOrScienceFiction()); */

/*   Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
  De olho na dica 👀: use as funções filter e sort */


  function oldBooksOrdered() {
    return books.filter( (book) => new Date().getFullYear() - book.releaseYear > 60).sort( (data1, data2) => data1.releaseYear - data2.releaseYear)
  }
/* console.log(oldBooksOrdered()); */

