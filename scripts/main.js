const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = "Mozilla, text added by JavaScript"

let meuBotao = document.querySelector('button');
let myHeader = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.')

  // Armazena o valor de 'meuNome' no localstorage
  localStorage.setItem('nome', meuNome);

  meuCabecalho.textContent = 'Mozila é legal, ' + meuNome

}

if (!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozila é legal, ' + nomeGuardado
}

let data = new Date().getHours()

if (data < 12) {
  alert('Good morning!');
} else if (data > 12 && data < 18) {
  alert('Good afternoon!')
} else {
  alert('Good evening!')
}

function multiplica(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

let randomNumber = multiplica(Math.floor(Math.random() * 99), Math.floor(Math.random() * 99) + 1);
alert(`I'am awalys thinking about a random number like ${randomNumber}`)

document.querySelector('html').onclick = function () {
  alert('Ai! Pare de me cutucar!')
  alert('Você também pode clicar na imagem para altera-la')
}


let minhaImagem = document.querySelector('img')
minhaImagem.onclick = function () {
  let meuSrc = minhaImagem.getAttribute('src');
  if (meuSrc === '/images/firefox1.png') {
    minhaImagem.setAttribute('src', '/images/firefox2.png')
  } else {
    minhaImagem.setAttribute('src', '/images/firefox1.png')
  }
}

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.')
  if(meuNome == "" || meuNome == 'undefined' || meuNome == null)
    return defineNomeUsuario();

  // Armazena o valor de 'meuNome' no localstorage
  localStorage.setItem('nome', meuNome);

  meuCabecalho.textContent = 'Mozila é legal, ' + meuNome

}

meuBotao.onclick = function() { defineNomeUsuario() }