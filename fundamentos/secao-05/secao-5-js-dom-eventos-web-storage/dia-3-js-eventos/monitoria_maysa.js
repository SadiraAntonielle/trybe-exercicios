const body = document.body;
​
// Exercício 1
function changeBg(event) {
  // buscar a cor de fundo
  const cor = event.target.style.backgroundColor;
  body.style.backgroundColor = cor;
  // localStorage - setar
  localStorage.setItem('backgroundColor', cor);
};
​
// Exercício 2
function changeTextColor(event) {
  const cor = event.target.style.backgroundColor;
  body.style.color = cor;
  localStorage.setItem('color', cor);
};
​
// Exercício 3
function changeFontSize(event) {
  const size = event.target.innerHTML;
  body.style.fontSize = size;
  localStorage.setItem('fontSize', size);
};
​
// Exercício 4
function changeLineHeight(event) {
  const height = event.target.innerHTML;
  body.style.lineHeight = height;
  localStorage.setItem('lineHeight', height);
}
​
// Exercício 5
function changeFontFamily(event) {
  const font = event.target.innerHTML;
  body.style.fontFamily = font;
  localStorage.setItem('fontFamily', font);
}
​
// buscar pela classe
const btnBgColor = document.querySelectorAll('.bg-color');
const btnTextColor = document.querySelectorAll('.text-color');
const btnTextSize = document.querySelectorAll('.font-size');
const btnLineHeight = document.querySelectorAll('.line-height');
const btnFontFamilly = document.querySelectorAll('.font-family');
​
// addEventListener
for (let index = 0; index < btnBgColor.length; index += 1) {
  btnBgColor[index].addEventListener('click', changeBg);
  btnTextColor[index].addEventListener('click', changeTextColor);
  btnTextSize[index].addEventListener('click', changeFontSize);
  btnLineHeight[index].addEventListener('click', changeLineHeight);
  btnFontFamilly[index].addEventListener('click', changeFontFamily);
}
​
btnBgColor[0].style.backgroundColor = 'green';
btnBgColor[1].style.backgroundColor = 'blue';
btnBgColor[2].style.backgroundColor = 'purple';
btnBgColor[3].style.backgroundColor = 'pink';
btnTextColor[0].style.backgroundColor = 'black';
btnTextColor[1].style.backgroundColor = 'orange';
btnTextColor[2].style.backgroundColor = 'yellow';
btnTextColor[3].style.backgroundColor = 'red';
​
// localStorage - get
body.style.backgroundColor = localStorage.getItem('backgroundColor');
body.style.color = localStorage.getItem('color');
body.style.fontSize = localStorage.getItem('fontSize');
body.style.lineHeight = localStorage.getItem('lineHeight');
body.style.fontFamily = localStorage.getItem('fontFamily');