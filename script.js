const paletasession = document.querySelector('#color-palette');
const cores = ['black', 'orange', 'blue', 'pink'];
const btn = document.createElement('button');
const divCores = document.getElementsByClassName('color');
const sessionEscolha = document.getElementById('pixel-board');

function geradorCor() {
  let letras = '0123456789abcdef'
  let cor = "#";

  for (let index = 0; index < 6; index += 1) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function tresQuadrado() {

  for (let index = 0; index < 1; index += 1) {
    const createPaleta = document.createElement('div');
    createPaleta.style.backgroundColor = 'black';
    createPaleta.classList.add('color');
    createPaleta.classList.add('selected');
    paletasession.appendChild(createPaleta);
  }

  for (let index = 0; index < 3; index += 1) {
    const createPaleta = document.createElement('div');
    createPaleta.classList.add('color');
    createPaleta.style.backgroundColor = geradorCor();
    paletasession.appendChild(createPaleta);
  }
}
function botao(random) {

  btn.setAttribute('id', 'button-random-color');
  btn.innerText = 'Cores aleatórias';
  paletasession.appendChild(btn);
  localStorage.setItem('Cores random', random);
}

function cincoXCinco() {

for (let index = 0; index < 25; index += 1) {
  const createQuadrado = document.createElement('div');
  createQuadrado.style.backgroundColor = 'white';
  createQuadrado.classList.add('pixel');
  sessionEscolha.appendChild(createQuadrado);
}
}

function selecaoCor() {
  for (let index = 0; index < divCores.length; index += 1) {
  divCores[index].addEventListener('click', (event) =>{
    let selecao = document.querySelector('.selected');
    selecao.classList.remove('selected');
    event.target.classList.add('selected')
  }) 
  }
}

cincoXCinco();
tresQuadrado();
botao();
selecaoCor();

btn.addEventListener('click', () => {

  for (let index = 1; index < divCores.length; index += 1) {
    let mistura = divCores[index];
    mistura.style.backgroundColor = geradorCor();
  }
});
