const inputBemVindo = document.getElementById('input-bem-vindo');
const btnBemVindo = document.getElementById('entrar-bem-vindo');

function handleTamanho(event) {
  const inputTamanho = event.target.value.length;
  if (inputTamanho == 1) {
    document.body.style.background = '#FFFFFF';
    btnBemVindo.style.background = '#fff';
    document.body.style.transition = ' background 2s';
    btnBemVindo.style.transition = 'background 2s';
  } else if (inputTamanho == 2) {
    btnBemVindo.background = '#F0F0F0';
    document.body.style.background = '#F0F0F0';
  } else if (inputTamanho == 3) {
    btnBemVindo.style.background = '#8A05BE';
    document.body.style.background = '#8A05BE';
  }
}
function pagina() {
  window.location.href = 'inicial.html';
}
btnBemVindo.addEventListener('click', pagina);
inputBemVindo.addEventListener('keydown', handleTamanho);
const largura = window.screen.width;
console.log(largura);
