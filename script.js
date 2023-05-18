const paletasession = document.querySelector('#color-palette');
const cores = ['black', 'orange', 'blue', 'pink'];
const btn = document.createElement('button');
const divCores = document.getElementsByClassName('color');

function geradorCor() {
  let letras = '0123456789abcdef'
  let cor = "#";

  for (let index = 0; index < 6; index += 1) {
    cor += letras[Math.floor(Math.random() * 16)];

  }
  return cor;
}

function quadrado() {

  for (let index = 0; index < 1; index += 1) {
    const createPaleta = document.createElement('div');
    createPaleta.style.backgroundColor = 'black';
    createPaleta.classList.add('color');
    paletasession.appendChild(createPaleta);
  }

  for (let index = 0; index < 3; index += 1) {
    const createPaleta = document.createElement('div');
    createPaleta.classList.add('color');
    createPaleta.style.backgroundColor = geradorCor();
    paletasession.appendChild(createPaleta);
  }
}

function botao() {

  btn.setAttribute('id', 'button-random-color');
  btn.innerText = 'Cores aleatórias';
  paletasession.appendChild(btn);
}

quadrado();
botao();

btn.addEventListener('click', () => {

  for (let index = 1; index < divCores.length; index += 1) {
    let mistura = divCores[index];
    mistura.style.backgroundColor = geradorCor();
  }
});
