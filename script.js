//---Requisito 2 && 3 ---//
const paletasession = document.querySelector('#color-palette');
const cores = ['black', 'orange', 'blue', 'pink'];

function quadrado() {

  for (let index = 0; index < 4; index += 1) {
    const createPaleta = document.createElement('div');
    createPaleta.classList.add('color');
    createPaleta.style.background = cores[index];
    paletasession.appendChild(createPaleta);
  }
}
quadrado();
