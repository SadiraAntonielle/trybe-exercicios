let player = document.getElementById('player');
//Captura do pai
const grid = document.querySelector('.grid');
//Eu criei uma const e ele não trocava
let turno = true;
function jogar(event){
  const quadradoEvent = event.target;
  // console.log(quadradoEvent);
if(turno){
  quadradoEvent.innerHTML = 'X';
}else{
  quadradoEvent.innerHTML = 'O';
  }
turno = !turno;
}
//Criei divs de 1 a 9
function createOldTable() {
  for (let index = 0; index < 9; index+=1) {
    const div = document.createElement('div');
   //Preparei elemetnsosElemetnos
    div.className = 'celula';
    div.id = index;
    div.addEventListener('click', jogar);
    grid.appendChild(div)
  }
}
createOldTable();