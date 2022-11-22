/* import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI'; */

const usersSelect = document.querySelector('#users-select');

function teste () {
const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API) // terminei fetch ja vai pro then
// response resultado do fecht
.then((responde) => responde.json()) // tras obejto
// data resultado do then anterior
.then((data) => console.log(data))
}

teste()
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

/* usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
}); */
